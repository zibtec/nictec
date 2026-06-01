import React from "react";
import FloatingSocial from "./components/FloatingSocial";

const SectionHeading = ({ eyebrow, title, description }) => (
  <div className="mb-8 max-w-3xl">
    {eyebrow ? (
      <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--seal-gold)]">{eyebrow}</div>
    ) : null}
    <h2 className="font-display mt-3 text-3xl font-bold text-[var(--ethereal-ivory)] md:text-4xl">{title}</h2>
    {description ? (
      <p className="mt-4 text-sm leading-7 text-[rgba(247,235,224,0.82)] md:text-base">{description}</p>
    ) : null}
  </div>
);

export default function NickCouryPortfolioHomepage() {
  const strengths = [
    {
      title: "Project Delivery & Operational Leadership",
      description:
        "Leading complex work assignments across construction, brokerage, fulfillment operations, and IT-connected environments. Experienced with project scheduling, budget awareness, contractor and vendor coordination, documentation controls, issue resolution, KPI tracking, and cross-functional communication from planning through execution.",
    },
    {
      title: "Technology Operations & Infrastructure Support",
      description:
        "Supporting business and operational continuity through hands-on IT administration, endpoint troubleshooting, network connectivity support, Microsoft 365, Windows Server, Linux, AWS fundamentals, Active Directory, MFA, VPN access, backups, and secure remote access practices.",
    },
    {
      title: "Governance, Risk & Compliance Awareness",
      description:
        "Working in regulated and compliance-driven environments with attention to risk mitigation, change control, operational documentation, professional standards, and security frameworks including NIST CSF, NIST RMF, CIS Controls, CMMC, NIST AI RMF, NIMS, FAA operational awareness, and Arizona real estate regulatory requirements.",
    },
  ];

  const featuredAreas = [
    "Project lifecycle management",
    "PMO governance and documentation",
    "Schedule and budget coordination",
    "Vendor, contractor, and stakeholder coordination",
    "Change control and risk mitigation",
    "Operational KPI tracking",
    "IT infrastructure and endpoint support",
    "MFA, IAM, VPN, and secure access",
    "Compliance-driven process improvement",
    "Root-cause analysis and issue resolution",
    "NIMS and FAA operational awareness",
    "Executive communication and mentorship",
  ];

  const journey = [
    {
      title: "Regulated Business Operations",
      text:
        "Managed brokerage operations, compliance documentation, stakeholder communication, and secure business technology in alignment with Arizona Department of Real Estate requirements.",
    },
    {
      title: "Project Execution in the Field",
      text:
        "Founded and directed multi-site residential and commercial construction projects, coordinating architects, engineers, subcontractors, suppliers, permitting, inspections, budgets, and schedules.",
    },
    {
      title: "IT-Connected Operations",
      text:
        "Supported high-volume Amazon fulfillment operations by troubleshooting equipment, access, endpoint, scanner, printer, and network issues while improving ticket resolution and workflow reliability.",
    },
  ];

  const tools = [
    {
      title: "Project & Operations",
      accent: "var(--deep-crimson)",
      items: [
        "Project lifecycle management",
        "Schedule, budget, and KPI coordination",
        "Vendor and contractor management",
        "SOPs, documentation, and change control",
      ],
    },
    {
      title: "Infrastructure & Systems",
      accent: "var(--regal-navy)",
      items: [
        "Windows Server, Linux, and Microsoft 365",
        "Active Directory and identity administration",
        "AWS cloud fundamentals",
        "Endpoint, printer, scanner, and device support",
      ],
    },
    {
      title: "Security & Governance",
      accent: "var(--seal-gold)",
      items: [
        "MFA, IAM, VPN, and secure remote access",
        "Endpoint protection and backup management",
        "NIST, CIS, CMMC, and NIMS awareness",
        "Root-cause analysis and risk mitigation",
      ],
    },
  ];

  const frameworks = [
    {
      title: "Delivery Discipline",
      accent: "var(--deep-crimson)",
      text:
        "CAPM-certified and PMP-in-progress foundation across scope, schedule, cost, stakeholders, risk, quality, communications, documentation, and controlled execution.",
    },
    {
      title: "Security & Compliance Frameworks",
      accent: "var(--regal-navy)",
      text:
        "Familiar with NIST CSF, NIST RMF, CIS Controls, CMMC, DoD 8140, and NIST AI RMF concepts for aligning technical operations with risk-aware governance.",
    },
    {
      title: "Operational Governance",
      accent: "var(--seal-gold)",
      text:
        "Experience applying professional standards, regulatory interpretation, compliance reviews, Lean Six Sigma improvement methods, and NIMS incident command principles in practical settings.",
    },
  ];

  return (
    <div className="min-h-screen text-[var(--ethereal-ivory)]">
      <div className="portfolio-page-shell homepage-no-gold-glow min-h-screen">
        <FloatingSocial />

        <main className="mx-auto max-w-[90rem] px-6 pb-24 pt-44 lg:pt-32">
          <section id="about" className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_24rem] lg:items-center lg:gap-14 xl:grid-cols-[minmax(0,1fr)_28rem]">
            <div className="space-y-6">
              <div className="space-y-5">
                <h1 className="font-display max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
                  <span className="bg-gradient-to-r from-[var(--seal-gold)] via-[var(--ethereal-ivory)] to-[var(--seal-gold)] bg-clip-text text-transparent drop-shadow-[0_4px_20px_rgba(194,145,44,0.25)]">
                    20+ Years of Leadership.
                  </span>
                  <br />
                  <span className="text-[var(--ethereal-ivory)]">Re-engineered for the Digital Age.</span>
                </h1>
                <div className="h-[3px] w-32 rounded-full bg-gradient-to-r from-[var(--seal-gold)] to-transparent" />
                <p className="max-w-5xl text-lg leading-8 tracking-widest text-[rgba(247,235,224,0.92)]">
                  <span className="opacity-90">Building Infrastructure</span>
                  <span className="mx-2 text-[var(--seal-gold)]">-</span>
                  <span className="opacity-90">From Physical Systems to Networks and Cybersecurity</span>
                </p>
                <p className="max-w-3xl text-base leading-7 text-[var(--muted-ivory)]">
                  I bring 20+ years of leadership across construction, regulated business operations, technology support, project delivery, and compliance-driven environments. My background spans physical infrastructure, business systems, IT operations, stakeholder coordination, documentation, and risk-aware execution.
                </p>
                <p className="max-w-3xl text-base leading-7 text-[var(--muted-ivory)]">
                  After founding and operating a construction company, managing regulated brokerage operations, and supporting high-volume Amazon technology operations, I expanded that foundation through a B.S. and M.S. in Information Technology, CAPM certification, Lean Six Sigma Black Belt training, and continued PMP preparation.
                </p>
              </div>
            </div>

            <aside className="glass rounded-[30px] p-7 md:p-8">
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--seal-gold)]">At a glance</div>
              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {[
                  ["20+", "Years of leadership experience"],
                  ["12", "Professional certifications"],
                  ["50+", "Building projects delivered"],
                  ["Active", "Arizona Broker License and Arizona ROC QP License"],
                ].map(([value, label]) => (
                  <div key={label} className="rounded-2xl border border-[var(--soft-ivory-2)] bg-[var(--panel-bg-2)] p-4">
                    <div className="font-display text-3xl font-bold text-[var(--ethereal-ivory)]">{value}</div>
                    <div className="mt-1 text-sm text-[var(--muted-ivory)]">{label}</div>
                  </div>
                ))}
              </div>
            </aside>
          </section>

          <section id="focus" className="mt-20">
            <SectionHeading eyebrow="What I Bring" title="Leadership that connects physical projects, technology, security, and operations" />
            <div className="grid gap-6 md:grid-cols-3">
              {strengths.map((item) => (
                <div key={item.title} className="glass rounded-[26px] border-l-4 border-l-[var(--regal-navy)] p-6">
                  <h3 className="font-display text-xl font-semibold text-[var(--ethereal-ivory)]">{item.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-[rgba(247,235,224,0.88)] md:text-base">{item.description}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 glass rounded-[26px] border-t-4 border-t-[var(--deep-crimson)] p-6 md:p-8">
              <div className="font-display text-lg font-semibold text-[var(--ethereal-ivory)]">Featured Areas</div>
              <div className="mt-5 flex flex-wrap gap-3">
                {featuredAreas.map((item) => (
                  <span key={item} className="rounded-full border border-[rgba(194,145,44,0.28)] bg-[rgba(10,29,72,0.42)] px-4 py-2 text-sm text-[var(--ethereal-ivory)]">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </section>

          <section id="journey" className="mt-20">
            <SectionHeading eyebrow="My Journey" title="A career shaped by delivery, systems thinking, and regulated work" />
            <div className="grid gap-6 lg:grid-cols-3">
              {journey.map((item, index) => (
                <div key={item.title} className="glass rounded-[26px] border-l-4 border-l-[var(--regal-navy)] p-6">
                  <div className="text-sm font-semibold text-[var(--seal-gold)]">0{index + 1}</div>
                  <h3 className="mt-3 font-display text-xl font-semibold text-[var(--ethereal-ivory)]">{item.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-[rgba(247,235,224,0.88)] md:text-base">{item.text}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="tools" className="mt-20">
            <SectionHeading
              eyebrow="Tools & Capabilities"
              title="The practical mix behind the work"
              description="My toolkit reflects the environments I have actually supported: regulated office operations, multi-party construction projects, secure business systems, and high-volume fulfillment operations where planning, uptime, documentation, communication, and timely issue resolution matter."
            />
            <div className="grid gap-6 md:grid-cols-3">
              {tools.map((group) => (
                <div key={group.title} className="glass rounded-[26px] border-t-4 p-6" style={{ borderTopColor: group.accent }}>
                  <h3 className="font-display text-xl font-semibold text-[var(--ethereal-ivory)]">{group.title}</h3>
                  <ul className="mt-4 space-y-2 text-sm text-[rgba(247,235,224,0.88)]">
                    {group.items.map((item) => (
                      <li key={item}>- {item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section id="frameworks" className="mt-20">
            <SectionHeading
              eyebrow="Frameworks & Governance"
              title="Structured execution across projects, technology, and risk"
              description="My work has always lived where plans become real systems: buildings, business operations, technology environments, secure access, documentation, and accountable execution. The common thread is practical leadership: define the work, coordinate the right people, control change, document decisions, mitigate risk, and keep operations moving."
            />
            <div className="grid gap-6 md:grid-cols-3">
              {frameworks.map((framework) => (
                <div key={framework.title} className="glass rounded-[26px] border-t-4 p-6" style={{ borderTopColor: framework.accent }}>
                  <h3 className="font-display text-xl font-semibold text-[var(--ethereal-ivory)]">{framework.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-[rgba(247,235,224,0.88)]">{framework.text}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 glass rounded-[30px] p-8 md:p-10">
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--seal-gold)]">How It Connects</div>
              <h3 className="font-display mt-3 text-2xl font-bold text-[var(--ethereal-ivory)]">Design. Develop. Secure. Operate. Govern.</h3>
              <p className="mt-4 text-sm leading-7 text-[rgba(247,235,224,0.88)]">
                That lifecycle is the thread connecting my construction, brokerage, technology, Amazon operations, and governance background. I approach work by designing the plan, developing the systems and workflows, securing access and infrastructure, operating with reliability and accountability, and governing the process through documentation, risk awareness, compliance, and continuous improvement.
              </p>

              <div className="mt-10 grid gap-4 text-center sm:grid-cols-2 lg:grid-cols-5">
                <div className="rounded-[22px] border border-[var(--soft-ivory)] p-5">
                  <div className="font-display text-lg font-semibold text-[var(--seal-gold)]">Design</div>
                  <ul className="mt-3 space-y-1 text-sm text-[var(--muted-ivory)]">
                    <li>Scope</li>
                    <li>Requirements</li>
                    <li>Schedules</li>
                    <li>Budgets</li>
                    <li>Stakeholders</li>
                  </ul>
                </div>

                <div className="rounded-[22px] border border-[var(--soft-ivory)] p-5">
                  <div className="font-display text-lg font-semibold text-[var(--seal-gold)]">Develop</div>
                  <ul className="mt-3 space-y-1 text-sm text-[var(--muted-ivory)]">
                    <li>Workflows</li>
                    <li>Documentation</li>
                    <li>Technology integration</li>
                    <li>Endpoints</li>
                    <li>Process improvement</li>
                  </ul>
                </div>

                <div className="rounded-[22px] border border-[var(--soft-ivory)] p-5">
                  <div className="font-display text-lg font-semibold text-[var(--seal-gold)]">Secure</div>
                  <ul className="mt-3 space-y-1 text-sm text-[var(--muted-ivory)]">
                    <li>MFA</li>
                    <li>IAM</li>
                    <li>VPN</li>
                    <li>Backups</li>
                    <li>Endpoint protection</li>
                  </ul>
                </div>

                <div className="rounded-[22px] border border-[var(--soft-ivory)] p-5">
                  <div className="font-display text-lg font-semibold text-[var(--seal-gold)]">Operate</div>
                  <ul className="mt-3 space-y-1 text-sm text-[var(--muted-ivory)]">
                    <li>Uptime</li>
                    <li>KPIs</li>
                    <li>Troubleshooting</li>
                    <li>Vendor coordination</li>
                    <li>Issue resolution</li>
                  </ul>
                </div>

                <div className="rounded-[22px] border border-[var(--soft-ivory)] p-5">
                  <div className="font-display text-lg font-semibold text-[var(--seal-gold)]">Govern</div>
                  <ul className="mt-3 space-y-1 text-sm text-[var(--muted-ivory)]">
                    <li>Risk</li>
                    <li>Change control</li>
                    <li>Compliance</li>
                    <li>Documentation</li>
                    <li>Continuous improvement</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <footer className="mt-16 text-center text-xs tracking-wider text-[var(--seal-gold)]">
            &copy; {new Date().getFullYear()} Nick Coury - All Rights Reserved
          </footer>
        </main>
      </div>
    </div>
  );
}
