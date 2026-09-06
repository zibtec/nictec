const TURNSTILE_VERIFY_URL = "https://challenges.cloudflare.com/turnstile/v0/siteverify";
const RESEND_EMAILS_URL = "https://api.resend.com/emails";
const CONTACT_EMAIL = "nick@nickcoury.co";
const NAME_PATTERN = /^[A-Za-z][A-Za-z' -]{2,}$/;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

const json = (body, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: {
      ...corsHeaders,
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "no-store",
    },
  });

const cleanText = (value) => (typeof value === "string" ? value.trim() : "");
const getIdempotencyKey = () => {
  if (globalThis.crypto?.randomUUID) {
    return globalThis.crypto.randomUUID();
  }

  if (globalThis.crypto?.getRandomValues) {
    const bytes = new Uint8Array(16);
    globalThis.crypto.getRandomValues(bytes);
    return Array.from(bytes, (byte) => byte.toString(16).padStart(2, "0")).join("");
  }

  return `${Date.now()}-${Math.random().toString(16).slice(2)}`;
};

const escapeHtml = (value) =>
  cleanText(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");

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

const buildContactEmail = ({ firstName, lastName, company, email, message }) => {
  const fullName = `${firstName} ${lastName}`;
  const subject = `Website Contact from ${fullName}`;
  const text = `First Name: ${firstName}
Last Name: ${lastName}
Company: ${company}
Email: ${email}

${message}`;
  const html = `<h2>Website Contact</h2>
<p><strong>First Name:</strong> ${escapeHtml(firstName)}</p>
<p><strong>Last Name:</strong> ${escapeHtml(lastName)}</p>
<p><strong>Company:</strong> ${escapeHtml(company)}</p>
<p><strong>Email:</strong> ${escapeHtml(email)}</p>
<p><strong>Message:</strong></p>
<p>${escapeHtml(message).replace(/\n/g, "<br>")}</p>`;

  return { subject, text, html };
};

const sendContactEmail = async ({ payload, env }) => {
  const apiKey = cleanText(env.RESEND_API_KEY);
  const from = cleanText(env.CONTACT_FROM_EMAIL || env.RESEND_FROM_EMAIL);
  const to = cleanText(env.CONTACT_TO_EMAIL || CONTACT_EMAIL);

  if (!apiKey || !from) {
    return { configured: false, sent: false };
  }

  const email = buildContactEmail(payload);
  const response = await fetch(RESEND_EMAILS_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
      "Idempotency-Key": getIdempotencyKey(),
    },
    body: JSON.stringify({
      from,
      to,
      subject: email.subject,
      text: email.text,
      html: email.html,
      reply_to: payload.email,
    }),
  });

  if (!response.ok) {
    const errorText = await response.text().catch(() => "");
    return {
      configured: true,
      sent: false,
      status: response.status,
      error: errorText.slice(0, 500),
    };
  }

  const result = await response.json();
  return { configured: true, sent: true, id: result.id };
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

const handlePost = async (context) => {
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
    return json(
      {
        ok: false,
        message: "Server security verification is not configured. Add TURNSTILE_SECRET_KEY in Cloudflare Pages.",
      },
      500
    );
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

  let emailDelivery;

  try {
    emailDelivery = await sendContactEmail({ payload, env });
  } catch {
    return json(
      {
        ok: false,
        message: "Your request was verified, but email delivery is unavailable. Please try again later.",
      },
      502
    );
  }

  if (!emailDelivery.configured) {
    return json(
      {
        ok: false,
        message: "Server email delivery is not configured. Add RESEND_API_KEY and CONTACT_FROM_EMAIL in Cloudflare Pages.",
      },
      500
    );
  }

  if (!emailDelivery.sent) {
    return json(
      {
        ok: false,
        message: "Your request was verified, but email delivery failed. Check the Resend sender/domain and API key configuration.",
        providerStatus: emailDelivery.status,
        providerError: emailDelivery.error,
      },
      502
    );
  }

  return json({
    ok: true,
    sent: true,
    emailId: emailDelivery.id,
    contact: {
      firstName: payload.firstName,
      lastName: payload.lastName,
      company: payload.company,
      email: payload.email,
      message: payload.message,
    },
  });
};

export async function onRequestGet() {
  return json({ ok: false, message: "Contact API is available. Submit the contact form with POST." }, 405);
}

export async function onRequestOptions() {
  return new Response(null, { status: 204, headers: corsHeaders });
}

export async function onRequestPost(context) {
  try {
    return await handlePost(context);
  } catch (error) {
    return json(
      {
        ok: false,
        message: "Contact API failed before it could complete the request.",
        error: error instanceof Error ? error.message : "Unknown runtime error",
      },
      500
    );
  }
}
