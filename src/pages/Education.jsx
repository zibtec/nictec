import React from "react";
import certificatesData from "../data/certificates-data";

export default function EducationPage() {
  React.useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  return (
    <div className="page-root mx-auto max-w-4xl px-6 pb-12 pt-44 lg:pt-32">
      <h1 className="font-display text-3xl font-bold text-[var(--ethereal-ivory)]">Education & Certifications</h1>
      <div className="mt-8 grid gap-3 sm:grid-cols-2">
        {certificatesData.map((cert) => (
          <div key={cert} className="rounded-2xl border border-[var(--soft-ivory-2)] bg-[rgba(10,29,72,0.32)] p-4 text-sm leading-6 text-[var(--ethereal-ivory)]">
            {cert}
          </div>
        ))}
      </div>
    </div>
  );
}
