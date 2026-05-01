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
      title: "Project Management & Delivery",
      description:
        "Driving structured execution across IT, security, cloud, and support initiatives using PMBOK®, Agile, and ITIL to produce measurable outcomes, accountability, and operational efficiency.",
    },
    {
      title: "IT Operations, Infrastructure & Security",
      description:
        "Integrating endpoint support, infrastructure troubleshooting, identity controls, and security practices including IAM, MFA, incident response, and monitoring aligned to NIST CSF and CIS Controls.",
    },
    {
      title: "Cloud, AI & Governance",
      description:
        "Supporting cloud and emerging AI systems with a security-first mindset, using governance, risk management, and compliance frameworks including NIST AI RMF to encourage responsible adoption of modern technologies.",
    },
  ];

  const featuredAreas = [
    "Project management for IT and security initiatives",
    "Cloud operations (AWS/Azure) with security alignment",
    "Network infrastructure",
    "Endpoint security and access control (IAM, MFA)",
    "AI security and governance (NIST AI RMF)",
    "Cybersecurity frameworks (NIST CSF, CIS)",
    "Incident response and vulnerability identification",
    "Operational compliance, SOPs, and audit readiness",
    "Cross-functional coordination and delivery execution",
  ];

  const journey = [
    {
      title: "Operations + Technology",
      text:
        "Built experience supporting high-volume, technology-driven environments where uptime, process consistency, secure access, and user support directly impacted performance.",
    },
    {
      title: "Leadership + Delivery",
      text:
        "Led multi-site construction and IT-integrated initiatives, coordinating delivery, improving workflows, and strengthening operational accountability over time.",
    },
    {
      title: "Continuous Growth",
      text:
        "Expanded into modern IT, cloud, security, AI governance, and project management disciplines through formal education, certifications, and ongoing professional development.",
    },
  ];

  const _experience = [
    {
      role: "Process Assistant",
      company: "Amazon.com",
      period: "2021 - 2023",
      summary:
        "Managed IT and warehouse support within a high-volume AWS environment; resolved network, endpoint, and MFA hurdles to maintain seamless daily output and personnel performance.",
    },
    {
      role: "Learning Ambassador / Fulfillment Associate",
      company: "Amazon.com",
      period: "2019 - 2021",
      summary:
        "Trained and mentored team members on systems, workflows, and security-aligned procedures while reinforcing operational consistency and compliance-focused habits.",
    },
    {
      role: "Real Estate Broker / Network Administrator",
      company: "Great American Investment Corp.",
      period: "1999 - 2025",
      summary:
        "Balanced regulated brokerage operations with network administration, deploying seamless digital integrations that empowered agents to scale their individual businesses and execute smoother transactions while ensuring total alignment with regulatory mandates and data security.",
    },
    {
      role: "Founder / IT Manager / Qualifying Party",
      company: "Around the Mountain Builders",
      period: "2004 - 2019",
      summary:
        "Founded and led a multi-site operation delivering turn-key projects, energy efficiency, integrated infrastructure, and standardized practices that optimized performance and reliability.",
    },
  ];

  const _certificates = [
    "CompTIA Network Infrastructure Professional (CNIP®)",
    "Lean Six Sigma Black Belt",
    "CompTIA Project+",
    "Certified Associate in Project Management (CAPM®)",
    "AWS Certified Cloud Practitioner (CCP®)",
    "Linux Essentials",
    "CompTIA Secure Infrastructure Specialist (CSIS®)",
    "ITIL4® Foundations",
  ];

  const tools = [
    {
      title: "Infrastructure & Systems",
      accent: "var(--deep-crimson)",
      items: [
        "Windows / Linux environments",
        "Active Directory & identity management",
        "Network troubleshooting (TCP/IP, DNS, DHCP)",
        "Hardware deployment & endpoint support",
      ],
    },
    {
      title: "Security & Monitoring",
      accent: "var(--regal-navy)",
      items: [
        "SIEM & log analysis concepts",
        "Endpoint protection & EDR/XDR awareness",
        "MFA, IAM, and access control",
        "Network scanning tools (Wireshark, Nmap)",
      ],
    },
    {
      title: "Cloud, Dev & Process Tools",
      accent: "var(--seal-gold)",
      items: [
        "AWS cloud fundamentals & services",
        "Basic scripting (Python, Bash)",
        "ITSM & ticketing systems",
        "Documentation, SOPs, and process tools",
      ],
    },
  ];

  const frameworks = [
    {
      title: "NIST Cybersecurity Framework (CSF)",
      accent: "var(--deep-crimson)",
      text:
        "Applied to identify, protect, detect, respond, and recover across systems and operations. Supports structured security practices and incident response readiness.",
    },
    {
      title: "NIST AI Risk Management Framework (AI RMF)",
      accent: "var(--regal-navy)",
      text:
        "Guides governance, risk assessment, and secure deployment of AI systems, emphasizing trustworthy AI through lifecycle management and risk-aware decision-making.",
    },
    {
      title: "CIS Critical Security Controls",
      accent: "var(--seal-gold)",
      text:
        "Provides prioritized, actionable controls to strengthen endpoint, network, and system security against real-world threats.",
    },
  ];

  const caseStudies = [
    {
      title: "High-Volume IT Operations Stabilization",
      accent: "var(--deep-crimson)",
      focus: "Endpoint Security • MFA • Incident Response • Operational Continuity",
      summary:
        "In a high-volume AWS-integrated environment, I supported frontline IT operations by troubleshooting network connectivity, MFA failures, and endpoint access issues affecting daily workflows.",
      bullets: [
        "Reduced recurring access issues through root-cause identification and repeatable fixes",
        "Reinforced endpoint security and access control practices aligned with least-privilege principles",
        "Resolved and documented trouble tickets to support faster resolution cycles, eliminating escalations and improving associate experience",
      ],
      result:
        "Improved uptime, reduced user friction, strengthened secure operational practices, and reduced critical pull time misses below 5%.",
    },
    {
      title: "Network & Data Security in a Regulated Business Environment",
      accent: "var(--regal-navy)",
      focus: "Access Control • Data Protection • Compliance • Governance",
      summary:
        "Managed and secured systems in a real estate brokerage handling sensitive financial and client data while maintaining regulatory compliance and system integrity.",
      bullets: [
        "Implemented access control and monitoring practices to reduce unauthorized access risk",
        "Maintained compliance through structured processes, documentation, and accountability",
        "Monitored system and agent activity to proactively identify and mitigate potential threats",
      ],
      result: "Strengthened data protection posture and improved audit readiness in a regulated environment.",
    },
    {
      title: "Infrastructure & IT Integration Across Multi-Site Projects",
      accent: "var(--seal-gold)",
      focus: "Network Deployment • Structured Cabling • Process Improvement",
      summary:
        "Delivered 50+ projects integrating IT infrastructure into construction environments while balancing project delivery timelines with reliability, documentation, and quality control.",
      bullets: [
        "Standardized deployment processes to improve consistency and efficiency",
        "Integrated secure configurations into infrastructure design and implementation",
        "Treated each project with an ownership mindset while still executing within scope and structure",
      ],
      result: "Increased efficiency, improved reliability, and scalable infrastructure delivery.",
    },
    {
      title: "AI & Security Awareness Integration",
      accent: "var(--deep-crimson)",
      focus: "AI Risk • Governance • NIST AI RMF • Cybersecurity Alignment",
      summary:
        "Actively advancing my expertise in AI security and governance through continual learning, including pursuing certification aligned to the NIST AI Risk Management Framework through Akylade.",
      bullets: [
        "Studying AI risk lifecycle functions: Govern, Map, Measure, and Manage",
        "Aligning AI practices with cybersecurity frameworks such as NIST CSF",
        "Expanding knowledge in AI governance, risk, and compliance for future-focused security roles",
        "Pursuing deeper certifications and technical learning to stay ahead of evolving threats",
      ],
      result: "Positioned to support secure AI adoption, governance, and compliance-driven environments.",
    },
  ];

  return (
    <div className="min-h-screen text-[var(--ethereal-ivory)]">
      <div className="portfolio-page-shell homepage-no-gold-glow min-h-screen">
        <FloatingSocial />


        <main className="mx-auto max-w-[90rem] px-6 pb-24 pt-44 lg:pt-32">
          <section id="about" className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_24rem] lg:items-center lg:gap-14 xl:grid-cols-[minmax(0,1fr)_28rem]">
            <div className="space-y-6">
              {/* hero label removed per request */}
              <div className="space-y-5">
                <h1 className="font-display max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
                  <span className="bg-gradient-to-r from-[var(--seal-gold)] via-[var(--ethereal-ivory)] to-[var(--seal-gold)] bg-clip-text text-transparent drop-shadow-[0_4px_20px_rgba(194,145,44,0.25)]">
                    20+ Years of Leadership.
                  </span>
                  <br />
                  <span className="text-[var(--ethereal-ivory)]">Re-engineered for the Digital Age.</span>
                </h1>
                <div className="h-[3px] w-32 rounded-full bg-gradient-to-r from-[var(--seal-gold)] to-transparent" />
                <p className="max-w-none text-lg leading-8 tracking-widest text-[rgba(247,235,224,0.92)] xl:whitespace-nowrap">
                  <span className="opacity-90">Building Infrastructure</span>
                  <span className="mx-2 text-[var(--seal-gold)]">&mdash;</span>
                  <span className="opacity-90">From Physical Systems to Networks and Cybersecurity</span>
                </p>
                <p className="max-w-3xl text-base leading-7 text-[var(--muted-ivory)]">
                  I bring 20+ years of experience leading complex, real-world operations into Information Technology. After building and scaling a construction company alongside a real estate brokerage, I transitioned into IT through hands-on experience in a high-volume, AWS-integrated environment at Amazon&mdash;which led me to complete both a Bachelor&rsquo;s and Master&rsquo;s degree in Information Technology.
                </p>
                <p className="max-w-3xl text-base leading-7 text-[var(--muted-ivory)]">
                  Now, I apply that foundation to designing, securing, and optimizing systems focused on reliability, performance, and scalability.
                </p>
              </div>


              {/* Removed redundant mailto button and inline hero nav per request */}
            </div>

            <aside className="glass rounded-[30px] p-7 md:p-8">
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--seal-gold)]">At a glance</div>
              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {[
                  ["20+", "Years of cross-industry experience"],
                  ["50+", "Turn-key projects delivered"],
                  ["8", "Professional certifications"],
                  ["3", "Core focus areas"],
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
            <SectionHeading eyebrow="What I Bring" title="A portfolio built around delivery, support, security, and operational trust" />
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
            <SectionHeading eyebrow="My Journey" title="A career shaped by systems thinking and practical leadership" />
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

          {/* Selected Experience moved to /experience page */}

          <section id="tools" className="mt-20">
            <SectionHeading
              eyebrow="Tools & Technologies"
              title="Practical tools. Real-world application. No fluff."
              description="My technical stack reflects hands-on experience across IT operations, security, infrastructure, and cloud environments, focused on tools that support reliability, visibility, secure management, and disciplined execution. I also maintain a personal home lab, building systems from the ground up, from PC assembly and networking fundamentals to small-scale server, virtualization, and security configurations to continuously apply and expand real-world skills."
            />
            <div className="grid gap-6 md:grid-cols-3">
              {tools.map((group) => (
                <div key={group.title} className="glass rounded-[26px] border-t-4 p-6" style={{ borderTopColor: group.accent }}>
                  <h3 className="font-display text-xl font-semibold text-[var(--ethereal-ivory)]">{group.title}</h3>
                  <ul className="mt-4 space-y-2 text-sm text-[rgba(247,235,224,0.88)]">
                    {group.items.map((item) => (
                      <li key={item}>• {item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section id="frameworks" className="mt-20">
            <SectionHeading
              eyebrow="Security & Compliance Frameworks"
              title="Built on recognized standards. Applied with real-world execution."
              description="Just like building a home starts with a solid foundation, I operate within proven frameworks that align with company values, strategic vision, and core IT fundamentals such as networking, security, and project management. This approach creates stability, scalability, and long-term resilience. With over 20 years across construction, business operations, and technology, I have worked within structured systems long before IT and now apply that same discipline through NIST CSF, NIST AI RMF, and CIS Controls to support execution, governance, and risk management. Because whether building homes or securing systems, everything fails without a strong foundation."
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
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--seal-gold)]">Tools + Framework Integration</div>
              <h3 className="font-display mt-3 text-2xl font-bold text-[var(--ethereal-ivory)]">How tools, security, and governance connect in real-world operations</h3>
              <p className="mt-4 text-sm leading-7 text-[rgba(247,235,224,0.88)]">
                Modern IT operations are not siloed. Tools, physical installations, security controls, and frameworks work together to support risk management, operational stability, and compliance. This is how I operate: from hands-on device installation, cabling, and endpoint setup to system configuration, security enforcement, and governance alignment.
              </p>

              <div className="mt-10 grid gap-6 text-center md:grid-cols-[1fr_auto_1fr_auto_1fr] md:items-center">
                <div className="rounded-[22px] border border-[var(--soft-ivory)] p-5">
                  <div className="font-display text-lg font-semibold text-[var(--seal-gold)]">Tools</div>
                  <ul className="mt-3 space-y-1 text-sm text-[var(--muted-ivory)]">
                    <li>Endpoints / OS</li>
                    <li>Device installation & cabling</li>
                    <li>Cloud (AWS)</li>
                    <li>SIEM / Logs</li>
                    <li>Network tools & troubleshooting</li>
                  </ul>
                </div>

                <div className="text-2xl text-[var(--seal-gold)] hidden md:block">→</div>

                <div className="rounded-[22px] border border-[var(--soft-ivory)] p-5">
                  <div className="font-display text-lg font-semibold text-[var(--seal-gold)]">Security Functions</div>
                  <ul className="mt-3 space-y-1 text-sm text-[var(--muted-ivory)]">
                    <li>Identify</li>
                    <li>Protect</li>
                    <li>Detect</li>
                    <li>Respond</li>
                    <li>Recover</li>
                  </ul>
                </div>

                <div className="text-2xl text-[var(--seal-gold)] hidden md:block">→</div>

                <div className="rounded-[22px] border border-[var(--soft-ivory)] p-5">
                  <div className="font-display text-lg font-semibold text-[var(--seal-gold)]">Frameworks</div>
                  <ul className="mt-3 space-y-1 text-sm text-[var(--muted-ivory)]">
                    <li>NIST CSF</li>
                    <li>NIST AI RMF</li>
                    <li>CIS Controls</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section id="case-studies" className="mt-20">
            <SectionHeading
              eyebrow="Case Studies"
              title="Real work. Real impact. Relentless execution."
              description="I approach every role, whether help desk, infrastructure, systems support, or administration, with the same mindset: solve the problem, secure the system, improve the process, and follow through."
            />
            <div className="space-y-6">
              {caseStudies.map((study) => (
                <div key={study.title} className="glass rounded-[26px] border-l-4 p-6 md:p-7" style={{ borderLeftColor: study.accent }}>
                  <h3 className="font-display text-xl font-semibold text-[var(--ethereal-ivory)]">{study.title}</h3>
                  <p className="mt-3 text-sm text-[var(--muted-ivory)]">Focus: {study.focus}</p>
                  <p className="mt-4 text-sm leading-7 text-[rgba(247,235,224,0.88)]">{study.summary}</p>
                  <ul className="mt-4 space-y-2 text-sm text-[rgba(247,235,224,0.88)]">
                    {study.bullets.map((bullet) => (
                      <li key={bullet}>• {bullet}</li>
                    ))}
                  </ul>
                  <p className="mt-4 text-sm text-[var(--seal-gold)]">Result: {study.result}</p>
                </div>
              ))}
            </div>
          </section>

          <footer className="mt-16 pb-10 text-center">
            <div className="footer-watermark text-xs tracking-wider">
              © {new Date().getFullYear()} Nick Coury — All Rights Reserved
            </div>
          </footer>
        </main>
      </div>
    </div>
  );
}
