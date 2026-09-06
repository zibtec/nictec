const endpoint = process.env.CONTACT_API_ENDPOINT || process.argv[2];
const token = process.env.TURNSTILE_TOKEN || process.argv[3];

if (!endpoint || !token) {
  console.error("Usage: CONTACT_API_ENDPOINT=https://.../api/contact TURNSTILE_TOKEN=... npm run test:contact");
  console.error("You can copy the Turnstile token from a completed form request in DevTools while testing.");
  process.exit(1);
}

const payload = {
  firstName: "Nick",
  lastName: "Coury",
  company: "Contact Form Test",
  email: "test@example.com",
  message: `Smoke test submitted at ${new Date().toISOString()}.`,
  turnstileToken: token,
};

const response = await fetch(endpoint, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(payload),
});

const text = await response.text();
let body;

try {
  body = JSON.parse(text);
} catch {
  body = text;
}

console.log(JSON.stringify({ status: response.status, body }, null, 2));

if (!response.ok || !body?.ok) {
  process.exit(1);
}
