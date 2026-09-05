// Cloudflare Worker to verify Cloudflare Turnstile and send email via SendGrid
// Bind secrets: TURNSTILE_SECRET, SENDGRID_API_KEY, CONTACT_EMAIL, FROM_EMAIL

const jsonHeaders = {
  'Content-Type': 'application/json;charset=UTF-8',
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

export default {
  async fetch(request, env) {
    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: jsonHeaders });
    }

    if (request.method !== 'POST') {
      return new Response(JSON.stringify({ message: 'Method not allowed' }), { status: 405, headers: jsonHeaders });
    }

    try {
      const body = await request.json();
      const { firstName, lastName, company, email, message, turnstileToken } = body || {};

      if (!turnstileToken) {
        return new Response(JSON.stringify({ message: 'Missing Turnstile token' }), { status: 400, headers: jsonHeaders });
      }

      // Verify Turnstile token with Cloudflare
      const params = new URLSearchParams();
      params.append('secret', env.TURNSTILE_SECRET || '');
      params.append('response', turnstileToken);

      const verifyRes = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
        method: 'POST',
        body: params,
      });

      const verifyJson = await verifyRes.json();

      if (!verifyJson.success) {
        return new Response(JSON.stringify({ message: 'Turnstile verification failed', detail: verifyJson }), { status: 400, headers: jsonHeaders });
      }

      // Basic server-side validation
      if (!email || !message) {
        return new Response(JSON.stringify({ message: 'Missing required fields' }), { status: 400, headers: jsonHeaders });
      }

      const SENDGRID_API_KEY = env.SENDGRID_API_KEY;
      if (!SENDGRID_API_KEY) {
        return new Response(JSON.stringify({ message: 'Email provider not configured' }), { status: 500, headers: jsonHeaders });
      }

      const to = env.CONTACT_EMAIL || 'nick@nickcoury.co';
      const from = env.FROM_EMAIL || 'no-reply@nickcoury.co';
      const subject = `Portfolio contact from ${firstName || ''} ${lastName || ''}`.trim();

      const text = [
        `Name: ${firstName || ''} ${lastName || ''}`.trim(),
        `Company: ${company || ''}`.trim(),
        `Email: ${email}`,
        '',
        'Message:',
        message,
      ].join('\n');

      const sgPayload = {
        personalizations: [{ to: [{ email: to }] }],
        from: { email: from },
        subject: subject || 'New contact message',
        content: [{ type: 'text/plain', value: text }],
      };

      const sgRes = await fetch('https://api.sendgrid.com/v3/mail/send', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${SENDGRID_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(sgPayload),
      });

      if (sgRes.status >= 400) {
        const detail = await sgRes.text();
        return new Response(JSON.stringify({ message: 'Failed to send email', detail }), { status: 502, headers: jsonHeaders });
      }

      return new Response(JSON.stringify({ ok: true, message: 'Sent' }), { status: 200, headers: jsonHeaders });
    } catch (err) {
      return new Response(JSON.stringify({ message: err.message }), { status: 500, headers: jsonHeaders });
    }
  },
};
