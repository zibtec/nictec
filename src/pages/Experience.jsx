import React from "react";
import FloatingSocial from "../components/FloatingSocial";
import experienceData from "../data/experience-data";

export default function ExperiencePage() {
  React.useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  return (
    <div className="portfolio-page-shell">
      <FloatingSocial />

      <main className="page-root mx-auto max-w-4xl px-6 pb-12 pt-44 lg:pt-32">
      {/* Hero removed per request; content begins here */}
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
