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
      title: "Project Management, Operations & Delivery",
      description:
        "Applying structured project management and operational leadership principles across technology, infrastructure, security, and process improvement initiatives with a focus on accountability, execution, and measurable outcomes. Leveraging PMBOK®, Agile, Lean process improvement, and ITIL-aligned practices to support workflow coordination, stakeholder communication, risk management, documentation, and continuous operational improvement throughout the project lifecycle."
  },
    {
      title: "Network Infrastructure & Security",
      description:
        "Designing, building, and securing hands-on network infrastructure through VLAN segmentation, structured connectivity, endpoint integration, secure remote access, and infrastructure troubleshooting. Implementing layered security controls including access restrictions, MFA, traffic isolation, monitoring, logging, firewall policies, and defense-in-depth practices to strengthen network reliability, visibility, and operational security across connected environments."
    },
    {
      title: "Cloud, AI & Governance",
      description:
        "Exploring the intersection of cloud technologies, AI systems, cybersecurity governance, and enterprise risk management through hands-on learning and framework-aligned research. Expanding knowledge of governance, compliance, and operational security concepts using industry and government-aligned frameworks including NIST CSF, NIST 800-53, NIST AI RMF, ISO 27001, CIS Controls, and FedRAMP-oriented security principles to better understand how modern cloud and AI environments are secured, governed, monitored, and managed within regulated and enterprise-scale operations."
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

  const experienceData = [
    {
      role: "Process Assistant",
      company: "Amazon.com",
      period: "2021 - 2023",
      summary:
        "Supported IT and operational continuity within a high-volume, AWS-integrated robotics environment by resolving hardware, software, network, access, and MFA-related issues impacting workflow performance. Collaborated across teams to improve system reliability, reduce recurring technical incidents, and maintain security-focused operational standards aligned with data integrity and compliance practices.",
    },
    {
      role: "Learning Ambassador / Fulfillment Associate",
      company: "Amazon.com",
      period: "2019 - 2021",
      summary:
        "Trained and mentored team members on operational systems, workflows, and security-aligned procedures within a fast-paced, high-volume environment. Reinforced process consistency, compliance standards, and performance expectations while supporting onboarding, knowledge transfer, and day-to-day operational efficiency.",
    },
    {
      role: "Real Estate Broker / Network Administrator",
      company: "Great American Investment Corp.",
      period: "1999 - 2025",
      summary:
        "Managed secure business infrastructure and regulated brokerage operations by administering internal systems, access controls, monitoring practices, and digital workflow solutions supporting transactional operations and sensitive client data. Improved operational efficiency and scalability through technology integrations, process modernization, and compliance-focused information governance.",
    },
    {
      role: "Founder / IT Manager / Qualifying Party",
      company: "Around the Mountain Builders",
      period: "2004 - 2019",
      summary:
        "Founded and operated a multi-site organization delivering integrated project execution, operational standardization, and technology-enabled infrastructure management. Designed scalable workflows, documentation systems, and process improvements that strengthened efficiency, operational reliability, and long-term business continuity.",
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
                  ["12", "Professional certifications"],
                  ["3", "Core experience areas"],
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


          <footer className="mt-16 text-center text-xs tracking-wider text-[var(--seal-gold)]">
            &copy; {new Date().getFullYear()} Nick Coury - All Rights Reserved
          </footer>
        </main>
      </div>
    </div>
  );
}
