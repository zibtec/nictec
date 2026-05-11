const TURNSTILE_VERIFY_URL = "https://challenges.cloudflare.com/turnstile/v0/siteverify";
const CONTACT_EMAIL = "nick@nickcoury.co";
const NAME_PATTERN = /^[A-Za-z][A-Za-z' -]{2,}$/;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const json = (body, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "no-store",
    },
  });

const cleanText = (value) => (typeof value === "string" ? value.trim() : "");

const validatePayload = ({ firstName, lastName, company, email, message, turnstileToken }) => {
  const errors = {};

  if (!NAME_PATTERN.test(firstName)) {
    errors.firstName = "First name must be at least three valid characters.";
  }

  if (!NAME_PATTERN.test(lastName)) {
    errors.lastName = "Last name must be at least three valid characters.";
  }

  if (company.length < 4 || company.length > 120) {
    errors.company = "Company must be between 4 and 120 characters.";
  }

  if (!EMAIL_PATTERN.test(email) || email.length > 254) {
    errors.email = "Enter a valid email address.";
  }

  if (!message || message.length > 1200) {
    errors.message = "Message is required and must be 1200 characters or fewer.";
  }

  if (!turnstileToken || turnstileToken.length > 2048) {
    errors.turnstile = "Security verification is required.";
  }

  return errors;
};

const getAllowedHostnames = (env) =>
  cleanText(env.TURNSTILE_ALLOWED_HOSTNAMES)
    .split(",")
    .map((hostname) => hostname.trim().toLowerCase())
    .filter(Boolean);

const buildContactMailto = ({ firstName, lastName, company, email, message }) => {
  const fullName = `${firstName} ${lastName}`;
  const subject = encodeURIComponent(`Website Contact from ${fullName}`);
  const body = encodeURIComponent(
    `First Name: ${firstName}\nLast Name: ${lastName}\nCompany: ${company}\nEmail: ${email}\n\n${message}`
  );

  return `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
};

const verifyTurnstile = async ({ token, request, env }) => {
  const secret = cleanText(env.TURNSTILE_SECRET_KEY);
  const remoteip =
    request.headers.get("CF-Connecting-IP") ||
    request.headers.get("X-Forwarded-For") ||
    "";

  const formData = new FormData();
  formData.append("secret", secret);
  formData.append("response", token);

  if (remoteip) {
    formData.append("remoteip", remoteip);
  }

  const response = await fetch(TURNSTILE_VERIFY_URL, {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    return { success: false, "error-codes": ["siteverify-request-failed"] };
  }

  return response.json();
};

export async function onRequestPost(context) {
  const { request, env } = context;

  let body;

  try {
    body = await request.json();
  } catch {
    return json({ ok: false, message: "Invalid request body." }, 400);
  }

  const payload = {
    firstName: cleanText(body.firstName),
    lastName: cleanText(body.lastName),
    company: cleanText(body.company),
    email: cleanText(body.email).toLowerCase(),
    message: cleanText(body.message),
    turnstileToken: cleanText(body.turnstileToken),
  };

  const errors = validatePayload(payload);

  if (Object.keys(errors).length > 0) {
    return json({ ok: false, message: "Please correct the highlighted fields.", errors }, 400);
  }

  if (!cleanText(env.TURNSTILE_SECRET_KEY)) {
    return json({ ok: false, message: "Security verification is not configured." }, 500);
  }

  let verification;

  try {
    verification = await verifyTurnstile({
      token: payload.turnstileToken,
      request,
      env,
    });
  } catch {
    return json({ ok: false, message: "Security verification is unavailable. Please try again." }, 502);
  }

  if (!verification.success) {
    return json(
      {
        ok: false,
        message: "Security verification failed. Please refresh the challenge and try again.",
        errors: { turnstile: verification["error-codes"] || ["verification-failed"] },
      },
      400
    );
  }

  if (verification.action && verification.action !== "contact") {
    return json({ ok: false, message: "Security verification failed." }, 400);
  }

  const allowedHostnames = getAllowedHostnames(env);

  if (
    allowedHostnames.length > 0 &&
    verification.hostname &&
    !allowedHostnames.includes(verification.hostname.toLowerCase())
  ) {
    return json({ ok: false, message: "Security verification failed." }, 400);
  }

  return json({
    ok: true,
    mailtoUrl: buildContactMailto(payload),
    contact: {
      firstName: payload.firstName,
      lastName: payload.lastName,
      company: payload.company,
      email: payload.email,
      message: payload.message,
    },
  });
}

export function onRequest() {
  return json({ ok: false, message: "Method not allowed." }, 405);
}
