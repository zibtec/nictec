import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const MailIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M4 6H20V18H4V6Z" stroke="currentColor" strokeWidth="2" />
    <path d="M4 6L12 13L20 6" stroke="currentColor" strokeWidth="2" />
  </svg>
);

const LinkedInIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
    <rect width="24" height="24" rx="4" fill="#0A66C2" />
    <path
      d="M7.2 9.2H4.8V19.2H7.2V9.2ZM6 8.2C6.8 8.2 7.4 7.6 7.4 6.8C7.4 6 6.8 5.4 6 5.4C5.2 5.4 4.6 6 4.6 6.8C4.6 7.6 5.2 8.2 6 8.2ZM19.2 13.4C19.2 10.8 17.8 9 15.6 9C14.5 9 13.7 9.6 13.4 10.1V9.2H11V19.2H13.4V14.2C13.4 12.9 13.9 12 15 12C16.1 12 16.4 13 16.4 14.3V19.2H18.8V13.4H19.2Z"
      fill="white"
    />
  </svg>
);

const AwardIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="2" />
    <path d="M6 22L12 16L18 22" stroke="currentColor" strokeWidth="2" />
  </svg>
);

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
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      activeSectionRef.current = id;
      setActiveSection(id);
      setMobileNavOpen(false);
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const navItems = [
    ["Focus", "focus"],
    ["Experience", "experience"],
    ["Frameworks", "frameworks"],
    ["Case Studies", "case-studies"],
    ["30-60-90", "day1"],
    ["Contact", "contact"],
  ];

  const [activeSection, setActiveSection] = useState(null);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const activeSectionTimeout = useRef(null);
  const activeSectionRef = useRef(null);

  const updateActiveSectionState = (sectionId) => {
    if (activeSectionRef.current === sectionId) {
      return;
    }
    activeSectionRef.current = sectionId;
    setActiveSection(sectionId);
  };

  useEffect(() => {
    const sectionIds = navItems.map(([, id]) => id);

    const flushActiveSection = (sectionId) => {
      if (activeSectionTimeout.current) {
        window.clearTimeout(activeSectionTimeout.current);
      }
      activeSectionTimeout.current = window.setTimeout(() => {
        updateActiveSectionState(sectionId);
        activeSectionTimeout.current = null;
      }, 100);
    };

    const updateActiveSection = () => {
      const headerEl = document.querySelector("header");
      const headerHeight = headerEl?.offsetHeight ?? 84;
      const triggerTop = headerHeight + 16;
      let currentSection = null;
      let lastPassedSection = null;
      let nextSection = null;
      let nextDistance = Infinity;

      sectionIds.forEach((id) => {
        const sectionEl = document.getElementById(id);
        if (!sectionEl) {
          return;
        }

        const rect = sectionEl.getBoundingClientRect();
        const sectionTop = rect.top;

        if (sectionTop <= triggerTop) {
          lastPassedSection = id;
        }

        const distance = sectionTop - triggerTop;
        if (distance > 0 && distance < nextDistance) {
          nextDistance = distance;
          nextSection = id;
        }
      });

      currentSection = lastPassedSection || nextSection;

      if (!currentSection) {
        updateActiveSectionState(null);
        return;
      }

      flushActiveSection(currentSection);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection, { passive: true });

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
      if (activeSectionTimeout.current) {
        window.clearTimeout(activeSectionTimeout.current);
      }
    };
  }, );

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
    "Cloud operations (AWS) with security alignment",
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

  const experience = [
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
        "Founded and led a multi-site operation delivering turn-key projects, energy efficiency, integrated infrastructure, and standardized practices that optimized performance and reliability. Oversaw compliance and permitting activities, working directly with local, state, and federal government entities to secure permits, ensure regulatory alignment, coordinate inspections, and embed governance-minded processes into project delivery—reducing delays, mitigating regulatory risk, and improving stakeholder communication.",
    },
  ];

  const certificates = [
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
      accent: "var(--ethereal-ivory)",
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
      accent: "var(--ethereal-ivory)",
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
      accent: "var(--ethereal-ivory)",
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

  const phases = [
    {
      title: "First 30 Days",
      accent: "var(--deep-crimson)",
      bullets: [
        "Learn systems, SOPs, tools, workflows, and service expectations quickly",
        "Triage tickets, identify recurring issues, and resolve quick wins",
        "Validate access control, MFA, endpoint support practices, and documentation",
        "Build trust by listening, following process, and delivering reliably",
      ],
    },
    {
      title: "First 60 Days",
      accent: "var(--ethereal-ivory)",
      bullets: [
        "Identify root causes of recurring technical and security issues",
        "Improve processes for efficiency, reliability, and compliance",
        "Strengthen documentation, incident handling, and escalation workflows",
        "Support cloud, endpoint, and infrastructure environments with security alignment",
      ],
    },
    {
      title: "First 90 Days",
      accent: "var(--seal-gold)",
      bullets: [
        "Recommend improvements aligned with NIST CSF, CIS, and AI RMF principles",
        "Contribute to system stability, security posture, and audit readiness",
        "Take ownership of responsibilities while supporting broader team goals",
        "Continue expanding knowledge through certifications and hands-on application",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[var(--velvet-obsidian)] text-[var(--ethereal-ivory)]">
      <div className="hero-bg min-h-screen">
        <div className="floating-social">
          <div className="floating-rail" />
          <a href="mailto:nick@nickcoury.co" className="social-link">
            <span className="social-orb email"><MailIcon size={18} /></span>
            <span className="social-tooltip">Email</span>
          </a>
          <a href="http://www.linkedin.com/in/nickacoury" target="_blank" rel="noreferrer" className="social-link">
            <span className="social-orb linkedin"><LinkedInIcon size={18} /></span>
            <span className="social-tooltip">LinkedIn</span>
          </a>
          <a href="https://www.credly.com/users/nick-coury" target="_blank" rel="noreferrer" className="social-link">
            <span className="social-orb credly"><AwardIcon size={18} /></span>
            <span className="social-tooltip">Certifications</span>
          </a>
          <div className="floating-rail" />
        </div>

        <header className="sticky top-0 z-50 border-b border-[var(--soft-ivory)] bg-[rgba(23,23,33,0.94)] backdrop-blur-xl relative">
          <div className="mx-auto flex flex-col gap-3 max-w-7xl px-6 py-3 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-col min-w-0 flex-1">
              <div className="font-display text-xl md:text-2xl font-semibold tracking-wide text-[var(--seal-gold)]">
                Nick Coury
              </div>

              <div className="text-[clamp(0.6rem,0.8vw,0.75rem)] text-[var(--muted-ivory)] whitespace-nowrap overflow-hidden text-ellipsis">
                Strategic IT Operations · Security · AI Governance · Operational Resilience
              </div>
            </div>
            <div className="flex items-center justify-between gap-2 md:hidden">
              <button
                type="button"
                onClick={() => setMobileNavOpen((open) => !open)}
                className="rounded-full border border-[var(--soft-ivory)] bg-[rgba(247,235,224,0.06)] px-4 py-2 text-sm font-semibold text-[var(--ethereal-ivory)] transition hover:border-[var(--seal-gold)] hover:text-[var(--ethereal-ivory)]"
                aria-expanded={mobileNavOpen}
              >
                {mobileNavOpen ? "Close" : "Menu"}
              </button>
            </div>
            <nav className="hidden md:flex items-center flex-shrink gap-[clamp(0.25rem,0.5vw,0.5rem)] whitespace-nowrap">

              {navItems.map(([label, id]) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className={`rounded-full border border-[var(--soft-ivory)] px-[clamp(0.4rem,0.7vw,0.75rem)] py-[clamp(0.2rem,0.4vw,0.4rem)] text-[clamp(0.6rem,0.7vw,0.75rem)] leading-none transition ${
                    activeSection === id
                      ? "border-[var(--seal-gold)] bg-[var(--seal-gold)] text-[var(--velvet-obsidian)] font-semibold"
                      : "text-[var(--muted-ivory)] hover:border-[var(--seal-gold)] hover:text-[var(--ethereal-ivory)]"
                  }`}
                >
                  {label}
                </button>
            ))}

          </nav>

          {mobileNavOpen && (
            <div className="md:hidden absolute inset-x-0 top-full z-40 border-t border-[var(--soft-ivory)] bg-[rgba(23,23,33,0.96)] backdrop-blur-xl">
              <div className="flex flex-col gap-2 px-6 py-4">
                {navItems.map(([label, id]) => (
                  <button
                    key={id}
                    onClick={() => scrollToSection(id)}
                    className={`w-full rounded-full border border-[var(--soft-ivory)] px-4 py-3 text-left text-sm font-medium transition ${
                      activeSection === id
                        ? "border-[var(--seal-gold)] bg-[var(--seal-gold)] text-[var(--velvet-obsidian)]"
                        : "text-[var(--muted-ivory)] hover:border-[var(--seal-gold)] hover:text-[var(--ethereal-ivory)]"
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>
          )}

        </div>
      </header>

        <main className="mx-auto max-w-7xl px-6 pb-24 pt-28 md:pt-32">
          <section id="about" className="scroll-mt-[7.5rem] grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div className="space-y-6">
              <div className="inline-flex rounded-full border border-[rgba(194,145,44,0.28)] bg-[rgba(194,145,44,0.10)] px-4 py-1 text-xs font-medium uppercase tracking-[0.22em] text-[var(--seal-gold)]">
                Personal Brand Homepage
              </div>
              <div className="space-y-5">
                <h1 className="font-display max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
                  <span className="bg-gradient-to-r from-[var(--seal-gold)] via-[var(--ethereal-ivory)] to-[var(--seal-gold)] bg-clip-text text-transparent drop-shadow-[0_4px_20px_rgba(194,145,44,0.25)]">
                    20+ Years of Leadership.
                  </span>
                  <br />
                  <span className="text-[var(--ethereal-ivory)]">Re-engineered for the Digital Age.</span>
                </h1>
                <div className="h-[3px] w-32 rounded-full bg-gradient-to-r from-[var(--seal-gold)] to-transparent" />
                <p className="max-w-3xl text-lg leading-8 tracking-widest text-[rgba(247,235,224,0.92)]">
                  <span className="opacity-90">Strategic IT Operations</span>
                  <span className="mx-2 text-[var(--seal-gold)]">&middot;</span>
                  <span className="font-semibold text-[var(--seal-gold)] drop-shadow-[0_0_8px_rgba(194,145,44,0.45)]">Security</span>
                  <span className="mx-2 text-[var(--seal-gold)]">&middot;</span>
                  <span className="opacity-90">AI Governance</span>
                  <span className="mx-2 text-[var(--seal-gold)]">&middot;</span>
                  <span className="opacity-90">Operational Resilience</span>
                </p>
                <p className="max-w-3xl text-base leading-7 text-[var(--muted-ivory)]">
                  I'm Nick Coury. I spent two decades building and leading businesses in the physical world, from founding a construction firm to managing a generational real estate brokerage. My transition into IT was a return to a lifelong passion, sharpened by exposure to high-scale operations at Amazon and driven by a personal mission to build secure digital environments in an increasingly complex world.
                </p>
                <p className="max-w-3xl text-base leading-7 text-[var(--muted-ivory)]">
                  With a Master's in Information Technology and a foundation built on relentless execution, ownership, and real-world leadership, I bridge the gap between business strategy and the secure, scalable infrastructure required to keep modern organizations moving.
                </p>
              </div>

              <div className="glass rounded-[24px] p-4 md:p-5">
                <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--seal-gold)]">
                  Explore the Site
                </div>
                <div className="mt-4 flex flex-wrap gap-3">
                  <button
                    type="button"
                    onClick={() => window.scrollTo({ top: 0, left: 0, behavior: "smooth" })}
                    className="rounded-full border border-[var(--seal-gold)] bg-[var(--seal-gold)] px-4 py-2 text-sm font-semibold text-[var(--velvet-obsidian)]"
                  >
                    Home
                  </button>
                  <Link
                    to="/blog"
                    className="rounded-full border border-[rgba(247,235,224,0.14)] px-4 py-2 text-sm font-semibold text-[var(--muted-ivory)] transition hover:border-[var(--seal-gold)] hover:text-[var(--ethereal-ivory)]"
                  >
                    Blog
                  </Link>
                  <Link
                    to="/about"
                    className="rounded-full border border-[rgba(247,235,224,0.14)] px-4 py-2 text-sm font-semibold text-[var(--muted-ivory)] transition hover:border-[var(--seal-gold)] hover:text-[var(--ethereal-ivory)]"
                  >
                    About
                  </Link>
                </div>

                <div className="mt-5 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--seal-gold)]">
                  Jump to a Section
                </div>
                <div className="mt-4 flex flex-wrap gap-3">
                  {navItems.map(([label, id]) => (
                    <button
                      key={`hero-${id}`}
                      type="button"
                      onClick={() => scrollToSection(id)}
                      className="rounded-full border border-[rgba(247,235,224,0.12)] bg-[rgba(247,235,224,0.04)] px-4 py-2 text-sm font-semibold text-[var(--muted-ivory)] transition hover:border-[var(--seal-gold)] hover:text-[var(--ethereal-ivory)]"
                    >
                      {label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                <Link
                  to="/about"
                  className="rounded-2xl bg-[var(--seal-gold)] px-5 py-3 text-sm font-semibold text-[var(--velvet-obsidian)] transition hover:opacity-95"
                  onClick={() => window.scrollTo({ top: 0, left: 0, behavior: "smooth" })}
                >
                  <span className="inline-flex items-center gap-2">Learn More About Me</span>
                </Link>
              </div>
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

          <section id="focus" className="mt-20 scroll-mt-[7.5rem]">
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

          <section id="journey" className="mt-20 scroll-mt-[7.5rem]">
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

          <section id="experience" className="mt-20 scroll-mt-[7.5rem]">
            <SectionHeading eyebrow="Selected Experience" title="Roles that reflect range, adaptability, and execution" />
            <div className="space-y-5">
              {experience.map((item) => (
                <div key={`${item.role}-${item.period}`} className="glass rounded-[26px] p-6 md:p-7">
                  <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                    <div>
                      <h3 className="font-display text-xl font-semibold text-[var(--ethereal-ivory)]">{item.role}</h3>
                      <div className="mt-1 text-[var(--muted-ivory)]">{item.company}</div>
                    </div>
                    <div className="rounded-full border border-[var(--soft-ivory)] px-4 py-2 text-sm text-[var(--ethereal-ivory)]">{item.period}</div>
                  </div>
                  <p className="mt-4 max-w-4xl text-sm leading-7 text-[rgba(247,235,224,0.88)] md:text-base">{item.summary}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="credentials" className="mt-20 scroll-mt-[7.5rem] grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="glass rounded-[28px] p-7">
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--seal-gold)]">Credentials</div>
              <h2 className="font-display mt-3 text-3xl font-bold text-[var(--ethereal-ivory)]">Ongoing professional development</h2>
              <p className="mt-4 text-sm leading-7 text-[rgba(247,235,224,0.88)] md:text-base">
                My development path reflects a strong commitment to modern IT, project management, infrastructure, cloud operations, security, AI governance, and process excellence.
              </p>
              <div className="mt-6 border-t border-[var(--soft-ivory)] pt-6 text-sm text-[var(--muted-ivory)]">
                Western Governors University graduate with a Master of Science in Information Technology and additional education in Business Administration and Construction Management.
              </div>
            </div>
            <div className="glass rounded-[28px] p-7">
              <div className="grid gap-3 sm:grid-cols-2">
                {certificates.map((cert) => (
                  <div key={cert} className="rounded-2xl border border-[var(--soft-ivory-2)] bg-[rgba(10,29,72,0.32)] p-4 text-sm leading-6 text-[var(--ethereal-ivory)]">
                    {cert}
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="tools" className="mt-20 scroll-mt-[7.5rem]">
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

          <section id="frameworks" className="mt-20 scroll-mt-[7.5rem]">
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

          <section id="case-studies" className="mt-20 scroll-mt-[7.5rem]">
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

          <section id="day1" className="mt-20 scroll-mt-[7.5rem]">
            <SectionHeading
              eyebrow="30-60-90 Day Value"
              title="Ready to contribute immediately while respecting structure, ownership, and role expectations"
              description="I bring a get-it-done mindset from day one, focused on stabilizing systems, securing access, improving service quality, and identifying opportunities to make operations stronger."
            />
            <div className="grid gap-6 md:grid-cols-3">
              {phases.map((phase) => (
                <div key={phase.title} className="glass rounded-[26px] border-l-4 p-6" style={{ borderLeftColor: phase.accent }}>
                  <h3 className="font-display text-xl font-semibold text-[var(--ethereal-ivory)]">{phase.title}</h3>
                  <ul className="mt-4 space-y-2 text-sm text-[rgba(247,235,224,0.88)]">
                    {phase.bullets.map((bullet) => (
                      <li key={bullet}>• {bullet}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section id="contact" className="mt-20 scroll-mt-[7.5rem]">
            <div className="glass rounded-[32px] border-t-4 border-t-[var(--seal-gold)] p-8 text-center md:p-12">
              <div className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--seal-gold)]">Let’s Build Something Reliable</div>
              <h2 className="font-display mx-auto mt-4 max-w-3xl text-3xl font-bold text-[var(--ethereal-ivory)] md:text-4xl">
                I step into project coordination, systems support, infrastructure administration, or security-focused roles ready to follow established processes, take ownership, and deliver reliable results from day one.
              </h2>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <a
                  href="mailto:nick@nickcoury.co"
                  className="rounded-2xl bg-[var(--deep-crimson)] px-6 py-3 text-sm font-semibold text-[var(--ethereal-ivory)] transition hover:bg-[var(--seal-gold)] hover:text-[var(--velvet-obsidian)]"
                >
                  <span className="inline-flex items-center gap-2"><MailIcon size={16} /> Contact Me</span>
                </a>
                <a
                  href="http://www.linkedin.com/in/nickacoury"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-2xl bg-[#0A66C2] px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(10,102,194,0.35)] transition duration-200 hover:scale-[1.04] hover:bg-[#004182] hover:shadow-[0_18px_40px_rgba(10,102,194,0.45)]"
                >
                  <span className="inline-flex items-center gap-2"><LinkedInIcon size={16} /> LinkedIn</span>
                </a>
                <a
                  href="https://www.credly.com/users/nick-coury"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-2xl border border-[var(--soft-ivory)] px-6 py-3 text-sm font-semibold text-[var(--ethereal-ivory)] transition hover:border-[var(--seal-gold)] hover:text-[var(--seal-gold)]"
                >
                  <span className="inline-flex items-center gap-2"><AwardIcon size={16} /> View Certifications</span>
                </a>
              </div>

              
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
