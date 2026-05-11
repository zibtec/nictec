import React from "react";
import FloatingSocial from "../components/FloatingSocial";

const namePattern = "[A-Za-z][A-Za-z' -]{2,}";
const fallbackTurnstileSiteKey = import.meta.env.DEV ? "1x00000000000000000000AA" : "";
const turnstileSiteKey = import.meta.env.VITE_TURNSTILE_SITE_KEY || fallbackTurnstileSiteKey;

const Contact = () => {
  const [status, setStatus] = React.useState("");
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isTurnstileVerified, setIsTurnstileVerified] = React.useState(false);
  const turnstileRef = React.useRef(null);

  React.useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  React.useEffect(() => {
    if (!turnstileSiteKey || document.querySelector('script[src*="challenges.cloudflare.com/turnstile"]')) {
      return undefined;
    }

    const script = document.createElement("script");
    script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      script.remove();
    };
  }, []);

  React.useEffect(() => {
    window.enableSubmit = () => {
      setIsTurnstileVerified(true);
      setStatus("");
    };

    window.disableSubmit = () => {
      setIsTurnstileVerified(false);
    };

    return () => {
      delete window.enableSubmit;
      delete window.disableSubmit;
    };
  }, []);

  const resetTurnstile = () => {
    setIsTurnstileVerified(false);

    if (window.turnstile && turnstileRef.current) {
      window.turnstile.reset(turnstileRef.current);
    }
  };

  return (
    <section className="contact-page min-h-screen px-6 pt-28 pb-20 text-[var(--ethereal-ivory)]">
      <FloatingSocial />

      <div className="mx-auto max-w-4xl">
        <div className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--seal-gold)]">Contact</div>
        <h1 className="font-display mt-3 text-2xl font-semibold text-[var(--ethereal-ivory)]">Get in touch</h1>

        <form
          onSubmit={async (e) => {
            e.preventDefault();
            const form = e.target;
            const firstName = form.firstName.value.trim();
            const lastName = form.lastName.value.trim();
            const company = form.company.value.trim();
            const email = form.email.value.trim();
            const message = form.message.value.trim();
            const turnstileToken = new FormData(form).get("cf-turnstile-response");

            if (!form.checkValidity()) {
              form.reportValidity();
              return;
            }

            if (!turnstileSiteKey || !turnstileToken) {
              setStatus("Please complete the security verification before sending.");
              resetTurnstile();
              return;
            }

            setIsSubmitting(true);
            setStatus("Verifying your request...");

            try {
              const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                  firstName,
                  lastName,
                  company,
                  email,
                  message,
                  turnstileToken,
                }),
              });

              const result = await response.json();

              if (!response.ok || !result.ok) {
                throw new Error(result.message || "Unable to verify this submission.");
              }

              const fullName = `${firstName} ${lastName}`;
              const subject = encodeURIComponent(`Website Contact from ${fullName}`);
              const body = encodeURIComponent(
                `First Name: ${firstName}\nLast Name: ${lastName}\nCompany: ${company}\nEmail: ${email}\n\n${message}`
              );

              setStatus("Verification passed. Opening your email client...");
              window.location.href = `mailto:nick@nickcoury.co?subject=${subject}&body=${body}`;
            } catch (error) {
              setStatus(error.message);
              resetTurnstile();
            } finally {
              setIsSubmitting(false);
            }
          }}
          className="mt-6 max-w-2xl text-left"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block">
              <span className="text-sm font-medium text-[var(--muted-ivory)]">First Name</span>
              <input
                name="firstName"
                required
                type="text"
                minLength={3}
                maxLength={80}
                pattern={namePattern}
                title="Enter at least three letters. Spaces, apostrophes, and hyphens are allowed."
                autoComplete="given-name"
                className="mt-2 w-full rounded-md border border-[var(--soft-ivory)] bg-[var(--panel-bg-2)] px-4 py-3 text-[var(--ethereal-ivory)]"
              />
            </label>

            <label className="block">
              <span className="text-sm font-medium text-[var(--muted-ivory)]">Last Name</span>
              <input
                name="lastName"
                required
                type="text"
                minLength={3}
                maxLength={80}
                pattern={namePattern}
                title="Enter at least three letters. Spaces, apostrophes, and hyphens are allowed."
                autoComplete="family-name"
                className="mt-2 w-full rounded-md border border-[var(--soft-ivory)] bg-[var(--panel-bg-2)] px-4 py-3 text-[var(--ethereal-ivory)]"
              />
            </label>
          </div>

          <label className="block mt-4">
            <span className="text-sm font-medium text-[var(--muted-ivory)]">Company</span>
            <input
              name="company"
              required
              type="text"
              minLength={4}
              maxLength={120}
              autoComplete="organization"
              title="Enter at least four characters."
              className="mt-2 w-full rounded-md border border-[var(--soft-ivory)] bg-[var(--panel-bg-2)] px-4 py-3 text-[var(--ethereal-ivory)]"
            />
          </label>

          <label className="block mt-4">
            <span className="text-sm font-medium text-[var(--muted-ivory)]">Email address</span>
            <input
              name="email"
              required
              type="email"
              maxLength={254}
              autoComplete="email"
              title="Enter a valid email address, such as name@example.com."
              className="mt-2 w-full rounded-md border border-[var(--soft-ivory)] bg-[var(--panel-bg-2)] px-4 py-3 text-[var(--ethereal-ivory)]"
            />
          </label>

          <label className="block mt-4">
            <span className="text-sm font-medium text-[var(--muted-ivory)]">Message</span>
            <textarea
              name="message"
              required
              rows={6}
              maxLength={1200}
              className="mt-2 w-full rounded-md border border-[var(--soft-ivory)] bg-[var(--panel-bg-2)] px-4 py-3 text-[var(--ethereal-ivory)]"
            />
          </label>

          <div className="mt-5">
            {turnstileSiteKey ? (
              <div
                ref={turnstileRef}
                className="cf-turnstile"
                data-sitekey={turnstileSiteKey}
                data-action="contact"
                data-callback="enableSubmit"
                data-expired-callback="disableSubmit"
                data-error-callback="disableSubmit"
                data-theme="dark"
              />
            ) : (
              <p className="text-sm text-[var(--seal-gold)]">
                Security verification is not configured. Add VITE_TURNSTILE_SITE_KEY before publishing.
              </p>
            )}
          </div>

          {status ? (
            <p className="mt-4 text-sm text-[var(--muted-ivory)]" role="status" aria-live="polite">
              {status}
            </p>
          ) : null}

          <div className="mt-6 text-right">
            <button
              type="submit"
              disabled={isSubmitting || !turnstileSiteKey || !isTurnstileVerified}
              className="rounded-2xl bg-[var(--deep-crimson)] px-6 py-3 text-sm font-semibold text-[var(--ethereal-ivory)] shadow-[0_12px_28px_rgba(158,14,24,0.18)] transition duration-200 hover:bg-[var(--seal-gold)] hover:text-[var(--velvet-obsidian)] hover:shadow-[0_16px_34px_rgba(194,145,44,0.22)] active:bg-[var(--velvet-obsidian)] active:text-[var(--ethereal-ivory)] active:shadow-[0_10px_22px_rgba(23,23,33,0.45)] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isSubmitting ? "Verifying..." : "Send"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
