import React from "react";
import FloatingSocial from "../components/FloatingSocial";

const namePattern = "[A-Za-z][A-Za-z' -]{2,}";
const fallbackTurnstileSiteKey = import.meta.env.DEV ? "1x00000000000000000000AA" : "";
const turnstileSiteKey = import.meta.env.VITE_TURNSTILE_SITE_KEY || fallbackTurnstileSiteKey;
const contactApiEndpoint = import.meta.env.VITE_CONTACT_API_ENDPOINT || "/api/contact";
const turnstileScriptSrc = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";

const Contact = () => {
  const [status, setStatus] = React.useState("");
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const turnstileRef = React.useRef(null);
  const turnstileWidgetIdRef = React.useRef(null);

  React.useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  React.useEffect(() => {
    if (!turnstileSiteKey || !turnstileRef.current) {
      return undefined;
    }

    let isMounted = true;
    let timeoutId;
    const startedAt = Date.now();

    setStatus("Loading security verification...");

    const renderTurnstile = () => {
      if (!isMounted) {
        return;
      }

      if (turnstileWidgetIdRef.current) {
        return;
      }

      if (!window.turnstile) {
        if (Date.now() - startedAt > 10000) {
          setStatus("Security verification could not load. Check your connection or browser privacy settings, then refresh.");
          return;
        }

        timeoutId = window.setTimeout(renderTurnstile, 100);
        return;
      }

      try {
        turnstileWidgetIdRef.current = window.turnstile.render(turnstileRef.current, {
          sitekey: turnstileSiteKey,
          action: "contact",
          theme: "dark",
          callback: () => {
            setStatus("");
          },
          "expired-callback": () => {
            setStatus("Security verification expired. Please verify again.");
          },
          "error-callback": () => {
            setStatus("Security verification failed to load. Refresh and try again.");
          },
        });
      } catch {
        setStatus("Security verification could not start. Refresh and try again.");
      }
    };

    if (!window.turnstile && !document.querySelector('script[src*="challenges.cloudflare.com/turnstile/v0/api.js"]')) {
      const script = document.createElement("script");
      script.src = turnstileScriptSrc;
      script.async = true;
      script.defer = true;
      script.onerror = () => {
        if (isMounted) {
          setStatus("Security verification could not load. Check your connection or browser privacy settings, then refresh.");
        }
      };
      document.head.appendChild(script);
    }

    renderTurnstile();

    return () => {
      isMounted = false;
      window.clearTimeout(timeoutId);

      if (window.turnstile && turnstileWidgetIdRef.current) {
        window.turnstile.remove(turnstileWidgetIdRef.current);
        turnstileWidgetIdRef.current = null;
      }
    };
  }, []);

  const resetTurnstile = () => {
    if (window.turnstile && turnstileWidgetIdRef.current) {
      window.turnstile.reset(turnstileWidgetIdRef.current);
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

            if (!turnstileSiteKey) {
              setStatus("Security verification is not configured. Add VITE_TURNSTILE_SITE_KEY before publishing.");
              return;
            }

            if (!turnstileToken) {
              setStatus("Please complete the security verification before sending.");
              resetTurnstile();
              return;
            }

            setIsSubmitting(true);
            setStatus("Verifying your request...");

            try {
              const response = await fetch(contactApiEndpoint, {
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

              const result = await response.json().catch(() => ({
                message: "Contact API is unavailable. Run the site through Cloudflare Pages Functions or deploy to Cloudflare Pages.",
              }));

              if (!response.ok || !result.ok) {
                throw new Error(result.message || "Unable to verify this submission.");
              }

              if (result.sent) {
                setStatus("Thanks, your message has been sent.");
                form.reset();
                resetTurnstile();
                return;
              }

              setStatus("Verification passed. Opening your email client...");
              window.location.href = result.mailtoUrl;
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
              <div ref={turnstileRef} />
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
              disabled={isSubmitting}
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
