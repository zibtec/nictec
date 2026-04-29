import React from "react";

const Credentials = () => {
  React.useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  return (
    <section className="portfolio-page-shell min-h-screen px-6 pt-28 pb-20 text-[var(--ethereal-ivory)]">
      <div className="mx-auto max-w-4xl">
        <h1 className="font-display text-2xl font-semibold">Credentials</h1>
        <p className="mt-4 text-[var(--muted-ivory)]">This page is intentionally blank for now.</p>
      </div>
    </section>
  );
};

export default Credentials;
