import React from "react";
import FloatingSocial from "../components/FloatingSocial";
import caseStudiesData from "../data/caseStudies-data";

const SectionHeading = ({ eyebrow, title, description }) => (
  <div className="mb-8 max-w-3xl">
    {eyebrow ? (
      <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--seal-gold)]">{eyebrow}</div>
    ) : null}
    <h1 className="font-display mt-3 text-3xl font-bold text-[var(--ethereal-ivory)] md:text-4xl">{title}</h1>
    {description ? (
      <p className="mt-4 text-sm leading-7 text-[rgba(247,235,224,0.82)] md:text-base">{description}</p>
    ) : null}
  </div>
);

export default function CaseStudiesPage() {
  React.useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  return (
    <div className="portfolio-page-shell min-h-screen text-[var(--ethereal-ivory)]">
      <FloatingSocial />

      <main className="page-root mx-auto max-w-5xl px-6 pb-24 pt-44 lg:pt-32">
        <SectionHeading
          eyebrow="Case Studies"
          title="Real work. Real impact. Relentless execution."
          description="I approach every role, whether help desk, infrastructure, systems support, or administration, with the same mindset: solve the problem, secure the system, improve the process, and follow through."
        />

        <div className="space-y-6">
          {caseStudiesData.map((study) => (
            <article key={study.title} className="glass rounded-[26px] border-l-4 p-6 md:p-7" style={{ borderLeftColor: study.accent }}>
              <h2 className="font-display text-xl font-semibold text-[var(--ethereal-ivory)]">{study.title}</h2>
              <p className="mt-3 text-sm text-[var(--muted-ivory)]">Focus: {study.focus}</p>
              <p className="mt-4 text-sm leading-7 text-[rgba(247,235,224,0.88)]">{study.summary}</p>
              <ul className="mt-4 space-y-2 text-sm text-[rgba(247,235,224,0.88)]">
                {study.bullets.map((bullet) => (
                  <li key={bullet}>â€¢ {bullet}</li>
                ))}
              </ul>
              <p className="mt-4 text-sm text-[var(--seal-gold)]">Result: {study.result}</p>
            </article>
          ))}
        </div>

        <footer className="mt-16 text-center text-xs tracking-wider text-[var(--seal-gold)]">
          &copy; {new Date().getFullYear()} Nick Coury - All Rights Reserved
        </footer>
      </main>
    </div>
  );
}
