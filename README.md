# Nick Coury Portfolio

Welcome to my personal React + Vite portfolio site.  This site was created to display everything learned over the last few years in a strategic pivot career change.  My web development course has taught me how to code this website.  The intent of using Github is a way to build, showcase and deploy this website to  further detail my resume from my 20+ years of industry and career experience.

## Contact Form Security

The contact form uses Cloudflare Turnstile and a backend API route at `/api/contact`.
On Cloudflare Pages, `functions/api/contact.js` is the Pages Function that handles the contact page submission from `src/pages/Contact.jsx`.
The browser widget creates a Turnstile token, then the backend validates that token with Cloudflare Siteverify before sending the email through Resend. Email delivery is required for a successful submission.

For local development, copy `.env.example` to `.env.local`. The example uses Cloudflare's public testing keys.
For local Cloudflare Pages Function testing, copy `.dev.vars.example` to `.dev.vars` and fill in the server-only values.

For production, set these environment variables in Cloudflare Pages:

- `VITE_TURNSTILE_SITE_KEY`: the public Turnstile site key.
- `VITE_CONTACT_API_ENDPOINT`: optional contact endpoint override. Defaults to `/api/contact`.
- `TURNSTILE_SECRET_KEY`: the private Turnstile secret key for the Pages Function.
- `TURNSTILE_ALLOWED_HOSTNAMES`: optional comma-separated hostnames, such as `nickcoury.co,www.nickcoury.co`.
- `RESEND_API_KEY`: required Resend API key for server-side email delivery.
- `CONTACT_FROM_EMAIL`: required for Resend delivery, such as `Portfolio <contact@nickcoury.co>`.
- `CONTACT_TO_EMAIL`: optional recipient override. Defaults to `nick@nickcoury.co`.

Never expose `TURNSTILE_SECRET_KEY` in client-side code.
Never expose `RESEND_API_KEY` in client-side code.

To test the full browser-to-inbox flow locally:

1. Set `.env.local` with `VITE_TURNSTILE_SITE_KEY`.
2. Set `.dev.vars` with `TURNSTILE_SECRET_KEY`, `RESEND_API_KEY`, `CONTACT_FROM_EMAIL`, and `CONTACT_TO_EMAIL=nick@nickcoury.co`.
3. Make sure `CONTACT_FROM_EMAIL` uses a Resend-verified sender or domain.
4. Run `npm run pages:dev`, open the local Cloudflare Pages URL, complete the contact form, and verify the message arrives at `nick@nickcoury.co`.

The contact endpoint can also be checked directly with `npm run test:contact` when `CONTACT_API_ENDPOINT` and `TURNSTILE_TOKEN` are set. Use a token copied from a completed Turnstile form request in browser DevTools.
