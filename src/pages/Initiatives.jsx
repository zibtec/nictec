import React from "react";
import caseStudiesData from "../data/caseStudies-data";

export default function InitiativesPage() {
  React.useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  return (
    <div className="page-root mx-auto max-w-4xl px-6 py-12">
      <h1 className="font-display text-3xl font-bold text-[var(--ethereal-ivory)]">Project Initiatives</h1>
      <div className="mt-8 space-y-6">
        {caseStudiesData.map((study) => (
          <div key={study.title} className="glass rounded-[18px] p-6" style={{ borderLeftColor: study.accent }}>
            <h3 className="font-display text-xl font-semibold text-[var(--ethereal-ivory)]">{study.title}</h3>
            <p className="mt-2 text-sm text-[var(--muted-ivory)]">Focus: {study.focus}</p>
            <p className="mt-4 text-sm text-[rgba(247,235,224,0.88)]">{study.summary}</p>
            <ul className="mt-4 space-y-2 text-sm text-[rgba(247,235,224,0.88)]">
              {study.bullets.map((b) => (
                <li key={b}>• {b}</li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-[var(--seal-gold)]">Result: {study.result}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
