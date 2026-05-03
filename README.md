# Nick Coury Portfolio

Welcome to my personal React + Vite portfolio site.  This site was created to display everything learned over the last few years in a strategic pivot career change.  My web development course has taught me how to code this website.  The intent of using Github is a way to build, showcase and deploy this website to  further detail my resume from my 20+ years of industry and career experience.


## Contact Form Security

The contact form uses Cloudflare Turnstile and a backend API route at `/api/contact`.
The browser widget creates a Turnstile token, then the backend validates that token with Cloudflare Siteverify before the email draft is opened.

For local development, copy `.env.example` to `.env.local`. The example uses Cloudflare's public testing keys.

For production, set these environment variables in Cloudflare Pages:

- `VITE_TURNSTILE_SITE_KEY`: the public Turnstile site key.
- `TURNSTILE_SECRET_KEY`: the private Turnstile secret key for the Pages Function.
- `TURNSTILE_ALLOWED_HOSTNAMES`: optional comma-separated hostnames, such as `nickcoury.co,www.nickcoury.co`.

Never expose `TURNSTILE_SECRET_KEY` in client-side code.
