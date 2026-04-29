import React from "react";

const Contact = () => {
  React.useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  return (
    <section className="contact-page min-h-screen px-6 pt-28 pb-20 text-[var(--ethereal-ivory)]">
      <div className="mx-auto max-w-4xl">
        <div className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--seal-gold)]">Contact</div>
        <h1 className="font-display mt-3 text-2xl font-semibold text-[var(--ethereal-ivory)]">Get in touch</h1>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            const form = e.target;
            const name = form.name.value.trim();
            const company = form.company.value.trim();
            const email = form.email.value.trim();
            const message = form.message.value.trim();

            const subject = `Website Contact from ${name || "Guest"}`;
            const body = `Name: ${name}%0D%0ACompany: ${company}%0D%0AEmail: ${email}%0D%0A%0D%0A${message}`;

            window.location.href = `mailto:nick@nickcoury.co?subject=${encodeURIComponent(subject)}&body=${body}`;
          }}
          className="mt-6 max-w-2xl text-left"
        >
          <label className="block">
            <span className="text-sm font-medium text-[var(--muted-ivory)]">Name</span>
            <input name="name" required type="text" className="mt-2 w-full rounded-md border border-[var(--soft-ivory)] bg-[var(--panel-bg-2)] px-4 py-3 text-[var(--ethereal-ivory)]" />
          </label>

          <label className="block mt-4">
            <span className="text-sm font-medium text-[var(--muted-ivory)]">Company</span>
            <input name="company" required type="text" className="mt-2 w-full rounded-md border border-[var(--soft-ivory)] bg-[var(--panel-bg-2)] px-4 py-3 text-[var(--ethereal-ivory)]" />
          </label>

          <label className="block mt-4">
            <span className="text-sm font-medium text-[var(--muted-ivory)]">Email address</span>
            <input name="email" required type="email" className="mt-2 w-full rounded-md border border-[var(--soft-ivory)] bg-[var(--panel-bg-2)] px-4 py-3 text-[var(--ethereal-ivory)]" />
          </label>

          <label className="block mt-4">
            <span className="text-sm font-medium text-[var(--muted-ivory)]">Message</span>
            <textarea name="message" required rows={6} className="mt-2 w-full rounded-md border border-[var(--soft-ivory)] bg-[var(--panel-bg-2)] px-4 py-3 text-[var(--ethereal-ivory)]" />
          </label>

          <div className="mt-6 text-right">
            <button
              type="submit"
              className="rounded-2xl bg-[var(--deep-crimson)] px-6 py-3 text-sm font-semibold text-[var(--ethereal-ivory)] shadow-[0_12px_28px_rgba(158,14,24,0.18)] transition duration-200 hover:bg-[var(--seal-gold)] hover:text-[var(--velvet-obsidian)] hover:shadow-[0_16px_34px_rgba(194,145,44,0.22)] active:bg-[var(--velvet-obsidian)] active:text-[var(--ethereal-ivory)] active:shadow-[0_10px_22px_rgba(23,23,33,0.45)]"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
