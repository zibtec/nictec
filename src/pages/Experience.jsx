import React from "react";
import experienceData from "../data/experience-data";

export default function ExperiencePage() {
  React.useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  return (
    <div className="portfolio-page-shell">
      <main className="page-root mx-auto max-w-4xl px-6 pb-12 pt-44 lg:pt-32">
      <div className="space-y-5">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--seal-gold)]">
          Experience
        </p>
        <h1 className="font-display max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
          <span className="bg-gradient-to-r from-[var(--seal-gold)] via-[var(--ethereal-ivory)] to-[var(--seal-gold)] bg-clip-text text-transparent drop-shadow-[0_4px_20px_rgba(194,145,44,0.25)]">
            20+ Years of Leadership.
          </span>
          <br />
          <span className="text-[var(--ethereal-ivory)]">Re-engineered for the Digital Age.</span>
        </h1>
        <div className="h-[3px] w-32 rounded-full bg-gradient-to-r from-[var(--seal-gold)] to-transparent" />
        <p className="max-w-3xl text-lg leading-8 tracking-widest text-[rgba(247,235,224,0.92)]">
          <span className="opacity-90">Building Infrastructure</span>
          <span className="mx-2 text-[var(--seal-gold)]">&mdash;</span>
          <span className="opacity-90">From Physical Systems to Networks to</span>
          <span className="ml-2 font-semibold text-[var(--seal-gold)] drop-shadow-[0_0_8px_rgba(194,145,44,0.45)]">
            Cybersecurity
          </span>
        </p>
        <p className="max-w-3xl text-base leading-7 text-[var(--muted-ivory)]">
          I bring 20+ years of experience leading complex, real-world operations into Information Technology. After building and scaling a construction company alongside a real estate brokerage, I transitioned into IT through hands-on experience in a high-volume, AWS-integrated environment at Amazon&mdash;which led me to complete both a Bachelor&rsquo;s and Master&rsquo;s degree in Information Technology.
        </p>
        <p className="max-w-3xl text-base leading-7 text-[var(--muted-ivory)]">
          Now, I apply that foundation to designing, securing, and optimizing systems focused on reliability, performance, and scalability.
        </p>
      </div>
      <div className="mt-8 space-y-6">
        {experienceData.map((item) => (
          <div key={`${item.role}-${item.period}`} className="glass rounded-[18px] p-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-display text-xl font-semibold text-[var(--ethereal-ivory)]">{item.role}</h3>
                <div className="text-sm text-[var(--muted-ivory)]">{item.company}</div>
              </div>
              <div className="rounded-full border border-[var(--soft-ivory)] px-3 py-1 text-sm text-[var(--ethereal-ivory)]">{item.period}</div>
            </div>
            {item.summary && <p className="mt-4 text-sm text-[rgba(247,235,224,0.88)]">{item.summary}</p>}
          </div>
        ))}
      </div>
      </main>
    </div>
  );
}
