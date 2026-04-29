import React from "react";
import FloatingSocial from "../components/FloatingSocial";

const navItems = [
  { id: "summary", label: "Summary", icon: "home" },
  { id: "architecture", label: "Architecture", icon: "network" },
  { id: "case-study", label: "Case Study", icon: "shield" },
  { id: "initiatives", label: "Initiatives", icon: "briefcase" },
  { id: "contact", label: "Contact", icon: "mail" },
];

const objectives = [
  "Segment traffic to reduce risk and improve control",
  "Securely integrate camera and IoT systems",
  "Separate Work, Home, Kids, and IoT environments",
  "Control DNS and filtering behavior across networks",
  "Enable encrypted remote access through VPN",
  "Upgrade home infrastructure for remote learning and reliability",
];

const highlights = [
  {
    icon: "network",
    title: "Segmented Architecture",
    text:
      "Dedicated VLANs isolate traffic, reduce lateral movement risk, and support least-privilege network access.",
  },
  {
    icon: "settings",
    title: "Centralized Control Plane",
    text:
      "Unified management enables visibility, policy enforcement, configuration consistency, and streamlined administration.",
  },
  {
    icon: "lock",
    title: "Secure Remote Access",
    text:
      "VPN access provides encrypted connectivity into internal resources while preserving segmentation boundaries.",
  },
  {
    icon: "activity",
    title: "DNS & Traffic Control",
    text:
      "DNS management supports filtering, visibility, and improved control over device behavior and network flow.",
  },
];

const projects = [
  {
    number: "01",
    title: "Smart Home Network & Segmentation",
    year: "2020",
    icon: "network",
    text:
      "Designed a centrally managed segmented network with dedicated Work, Home, Kids, and IoT VLANs, integrating secure remote access, DNS control, and device isolation.",
    accent: "gold",
  },
  {
    number: "02",
    title: "NAS Deployment & Remote Access",
    year: "2021",
    icon: "hard-drive",
    text:
      "Implemented centralized storage, structured backups, remote accessibility, and data availability controls to support resilient information management.",
    accent: "navy",
  },
  {
    number: "03",
    title: "PCIe 5 AI-Ready Workstation",
    year: "2022",
    icon: "cpu",
    text:
      "Built a high-performance workstation designed for AI workloads, virtualization, compute-heavy learning, and long-term platform expansion.",
    accent: "crimson",
  },
  {
    number: "04",
    title: "Dedicated Home Server Environment",
    year: "2023",
    icon: "server",
    text:
      "Deployed a dedicated server environment for persistent services, workload isolation, infrastructure testing, and system administration practice.",
    accent: "gold",
  },
  {
    number: "05",
    title: "GitHub Development & Documentation",
    year: "2023-Present",
    icon: "github",
    text:
      "Published technical work through structured documentation, version control, configuration tracking, and iterative project development.",
    accent: "navy",
  },
];

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="mb-8 max-w-3xl">
      <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--seal-gold)]">{eyebrow}</div>
      <h2 className="font-display mt-3 text-3xl font-bold text-[var(--ethereal-ivory)] md:text-4xl">{title}</h2>
      {description ? (
        <p className="mt-4 text-sm leading-7 text-[rgba(247,235,224,0.82)] md:text-base">{description}</p>
      ) : null}
    </div>
  );
}

export default function InitiativesPage() {
  const [activeSection, setActiveSection] = React.useState("summary");

  React.useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });

    const sections = document.querySelectorAll("[data-section]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.24 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="project-page portfolio-page-shell">
      <FloatingSocial />

      <main className="mx-auto max-w-7xl px-6 pb-24 pt-44 lg:pt-32">
        <section id="summary" data-section className="project-section visible">
          <div className="mb-8 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            {/* Hero removed per request; keeping section nav */}
            <nav className="project-anchor-nav" aria-label="Project page sections">
              {navItems.map(({ id, label, icon }) => (
                <a key={id} href={`#${id}`} className={activeSection === id ? "active" : ""}>
                  <Icon name={icon} size={17} />
                  <span>{label}</span>
                </a>
              ))}
            </nav>
          </div>

          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div className="space-y-7">
              <p className="max-w-3xl text-lg leading-8 text-[rgba(247,235,224,0.9)]">
                Designed and implemented a centrally managed network environment to support secure integration of IoT
                devices, camera systems, user environments, and remote access.
              </p>

              <div className="project-objectives glass rounded-[26px] p-6 md:p-7">
                <h2 className="font-display text-2xl font-semibold text-[var(--seal-gold)]">Key Objectives</h2>
                <ul className="mt-5 grid gap-3 text-sm leading-6 text-[rgba(247,235,224,0.88)]">
                  {objectives.map((objective) => (
                    <li key={objective}>{objective}</li>
                  ))}
                </ul>
              </div>

              <div id="architecture" data-section className="project-section-inner">
                <SectionHeading
                  eyebrow="Engineering Highlights"
                  title="Built like a small enterprise environment."
                  description="The project emphasized segmentation, policy boundaries, remote access, and operational visibility instead of treating the home network as a flat device collection."
                />
                <div className="grid gap-4 sm:grid-cols-2">
                  {highlights.map((feature) => (
                    <Feature key={feature.title} {...feature} />
                  ))}
                </div>
              </div>
            </div>

            <NetworkDiagram />
          </div>
        </section>

        <section id="case-study" data-section className="project-section">
          <SectionHeading
            eyebrow="Case Study Summary"
            title="A practical infrastructure lab shaped by real operational demand."
            description="This initiative began as a response to remote work, remote learning, device growth, and increased dependency on home infrastructure during the pandemic."
          />

          <div className="project-narrative">
            <p>
              Rather than treating the environment as a simple residential network, it was rebuilt as a controlled
              learning environment modeled around enterprise principles: segmentation, visibility, access control,
              resilience, and maintainability.
            </p>
            <p>
              The environment evolved from smart device integration into a broader technical platform supporting secure
              remote access, centralized DNS control, isolated IoT systems, network-aware storage, dedicated server
              workloads, AI-ready compute, and documented GitHub-based project development.
            </p>
          </div>
        </section>

        <section id="initiatives" data-section className="project-section">
          <SectionHeading
            eyebrow="Projects & Initiatives"
            title="A technical portfolio built through hands-on implementation."
            description="Each initiative strengthened a different layer of practical systems work: networking, storage, compute, server administration, documentation, and security-minded operations."
          />

          <div className="project-grid">
            {projects.map(({ number, title, year, icon, text, accent }) => (
              <article key={title} className={`project-card project-card-${accent}`}>
                <div className="project-card-top">
                  <Icon name={icon} size={30} />
                  <span>{number}</span>
                </div>
                <h3>{title}</h3>
                <p>{text}</p>
                <small>{year}</small>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" data-section className="project-section">
          <div className="glass rounded-[32px] border-t-4 border-t-[var(--seal-gold)] p-8 text-center md:p-12">
            <div className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--seal-gold)]">
              Project Follow-Up
            </div>
            <h2 className="font-display mx-auto mt-4 max-w-3xl text-3xl font-bold text-[var(--ethereal-ivory)] md:text-4xl">
              Infrastructure work is where planning, security, documentation, and reliability meet.
            </h2>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a
                href="mailto:nick@nickcoury.co"
                className="rounded-2xl bg-[var(--deep-crimson)] px-6 py-3 text-sm font-semibold text-[var(--ethereal-ivory)] transition hover:bg-[var(--seal-gold)] hover:text-[var(--velvet-obsidian)]"
              >
                Email Nick
              </a>
              <a
                href="https://linkedin.com/in/nickacoury"
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl bg-[#0A66C2] px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(10,102,194,0.35)] transition hover:scale-[1.04] hover:bg-[#004182]"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

function Feature({ icon, title, text }) {
  return (
    <div className="project-feature glass rounded-[22px] p-5">
      <div className="project-feature-icon">
        <Icon name={icon} size={22} />
      </div>
      <div>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
}

function NetworkDiagram() {
  return (
    <div className="project-diagram glass rounded-[28px] p-4 md:p-6">
      <div className="project-diagram-header">
        <div>
          <p>Network Architecture</p>
          <h2>Segmented VLAN Environment</h2>
        </div>
        <span>Live View</span>
      </div>

      <svg
        className="project-diagram-svg"
        viewBox="0 0 920 640"
        role="img"
        aria-label="Animated network segmentation diagram"
      >
        <defs>
          <filter id="projectGlow">
            <feGaussianBlur stdDeviation="4" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <marker id="projectArrow" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto">
            <path d="M0,0 L0,6 L9,3 z" fill="#22c55e" />
          </marker>

          <linearGradient id="workGradient" x1="0%" x2="100%">
            <stop offset="0%" stopColor="#22c55e" />
            <stop offset="100%" stopColor="#C2912C" />
          </linearGradient>

          <linearGradient id="homeGradient" x1="0%" x2="100%">
            <stop offset="0%" stopColor="#38bdf8" />
            <stop offset="100%" stopColor="#0A1D48" />
          </linearGradient>

          <linearGradient id="kidsGradient" x1="0%" x2="100%">
            <stop offset="0%" stopColor="#facc15" />
            <stop offset="100%" stopColor="#C2912C" />
          </linearGradient>

          <linearGradient id="iotGradient" x1="0%" x2="100%">
            <stop offset="0%" stopColor="#9E0E18" />
            <stop offset="100%" stopColor="#C2912C" />
          </linearGradient>
        </defs>

        <rect x="0" y="0" width="920" height="640" rx="24" fill="rgba(23,23,33,0.35)" />

        <circle cx="460" cy="70" r="28" fill="none" stroke="#F7EBE0" strokeWidth="3" />
        <path
          d="M432 70h56M460 42c12 14 12 42 0 56M460 42c-12 14-12 42 0 56"
          stroke="#F7EBE0"
          strokeWidth="2"
          fill="none"
        />
        <text x="505" y="76" fill="#F7EBE0" fontSize="16">Internet</text>

        <line x1="460" y1="98" x2="460" y2="150" stroke="#C2912C" strokeWidth="3" className="project-glow-line" />

        <rect x="380" y="150" width="160" height="54" rx="8" fill="#171721" stroke="#C2912C" />
        <text x="560" y="178" fill="#F7EBE0" fontSize="15">Edge Router / Firewall</text>
        <rect x="402" y="173" width="116" height="13" fill="#0A1D48" stroke="#C2912C" />

        <line x1="460" y1="204" x2="460" y2="275" stroke="#C2912C" strokeWidth="3" className="project-glow-line" />

        <rect x="335" y="275" width="250" height="72" rx="10" fill="#171721" stroke="#C2912C" />
        <text x="605" y="303" fill="#F7EBE0" fontSize="15">Managed Switch</text>
        <text x="605" y="324" fill="rgba(247,235,224,0.74)" fontSize="13">Centralized Control</text>

        {[360, 390, 420, 450, 480, 510].map((x) => (
          <rect key={x} x={x} y="302" width="22" height="16" fill="#C2912C" stroke="#F7EBE0" opacity="0.78" />
        ))}

        <circle cx="780" cy="304" r="20" fill="none" stroke="#C2912C" strokeWidth="2" className="project-pulse" />
        <line x1="585" y1="311" x2="760" y2="304" stroke="#C2912C" strokeDasharray="5 7" />
        <rect x="815" y="250" width="88" height="110" rx="12" fill="#0A1D48" stroke="#C2912C" />
        <text x="835" y="280" fill="#C2912C" fontSize="13">Control</text>
        <text x="831" y="308" fill="#F7EBE0" fontSize="12">Policies</text>
        <text x="831" y="330" fill="#F7EBE0" fontSize="12">Monitoring</text>

        <line x1="460" y1="347" x2="220" y2="420" stroke="url(#workGradient)" strokeWidth="4" filter="url(#projectGlow)" className="project-glow-line" />
        <line x1="460" y1="347" x2="380" y2="420" stroke="url(#homeGradient)" strokeWidth="4" filter="url(#projectGlow)" className="project-glow-line" />
        <line x1="460" y1="347" x2="560" y2="420" stroke="url(#kidsGradient)" strokeWidth="4" filter="url(#projectGlow)" className="project-glow-line" />
        <line x1="460" y1="347" x2="740" y2="420" stroke="url(#iotGradient)" strokeWidth="4" filter="url(#projectGlow)" className="project-glow-line" />

        <circle cx="460" cy="170" r="6" fill="#C2912C" className="project-packet" />
        <circle cx="460" cy="220" r="6" fill="#F7EBE0" className="project-packet project-delay-1" />
        <circle cx="460" cy="310" r="6" fill="#C2912C" className="project-packet project-delay-2" />

        <VlanBox x={110} y={420} color="url(#workGradient)" title="Work VLAN" subnet="10.10.10.0/24" items={["Workstations", "Printers", "Work Resources"]} />
        <VlanBox x={310} y={420} color="url(#homeGradient)" title="Home VLAN" subnet="10.10.20.0/24" items={["Personal Devices", "Streaming", "General Browsing"]} />
        <VlanBox x={510} y={420} color="url(#kidsGradient)" title="Kids VLAN" subnet="10.10.30.0/24" items={["Kids Devices", "Restricted Access", "Content Filtering"]} />
        <VlanBox x={710} y={420} color="url(#iotGradient)" title="IoT VLAN" subnet="10.10.40.0/24" items={["Cameras", "Smart Devices", "Isolated Network"]} />

        <rect x="700" y="90" width="160" height="92" rx="12" fill="#0A1D48" stroke="#C2912C" />
        <text x="725" y="123" fill="#F7EBE0" fontSize="14">Remote Access</text>
        <path d="M735 155h90" stroke="#22c55e" strokeWidth="3" markerEnd="url(#projectArrow)" />
        <text x="716" y="166" fill="#22c55e" fontSize="13">VPN</text>
        <rect x="774" y="132" width="58" height="35" rx="4" fill="none" stroke="#F7EBE0" strokeWidth="3" />
        <line x1="760" y1="174" x2="846" y2="174" stroke="#F7EBE0" strokeWidth="3" />
      </svg>
    </div>
  );
}

function VlanBox({ x, y, color, title, subnet, items }) {
  return (
    <g>
      <rect x={x} y={y} width="160" height="165" rx="12" fill="rgba(23,23,33,0.88)" stroke={color} strokeWidth="2" />
      <text x={x + 80} y={y + 30} fill="#F7EBE0" fontSize="15" textAnchor="middle">{title}</text>
      <text x={x + 80} y={y + 52} fill="rgba(247,235,224,0.74)" fontSize="13" textAnchor="middle">{subnet}</text>

      {items.map((item, index) => (
        <text key={item} x={x + 24} y={y + 88 + index * 23} fill="#F7EBE0" fontSize="13">
          - {item}
        </text>
      ))}

      <circle cx={x + 80} cy={y + 140} r="16" fill={color} opacity="0.9" />
      <ShieldCheckSvg x={x + 70} y={y + 130} />
    </g>
  );
}

function ShieldCheckSvg({ x, y }) {
  return (
    <g transform={`translate(${x}, ${y}) scale(0.8)`}>
      <path
        d="M12 2L3 6v6c0 5.5 3.8 10.7 9 12 5.2-1.3 9-6.5 9-12V6l-9-4z"
        fill="none"
        stroke="#171721"
        strokeWidth="2"
      />
      <path
        d="M8 12l3 3 6-7"
        fill="none"
        stroke="#171721"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  );
}

function Icon({ name, size = 20 }) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true",
  };

  const paths = {
    home: (
      <>
        <path d="M3 11.5 12 4l9 7.5" />
        <path d="M5 10.5V20h14v-9.5" />
      </>
    ),
    briefcase: (
      <>
        <path d="M9 6V4h6v2" />
        <rect x="3" y="6" width="18" height="14" rx="2" />
        <path d="M3 12h18" />
      </>
    ),
    network: (
      <>
        <circle cx="12" cy="5" r="2.5" />
        <circle cx="6" cy="18" r="2.5" />
        <circle cx="18" cy="18" r="2.5" />
        <path d="M11 7 7 16" />
        <path d="M13 7 17 16" />
        <path d="M8.5 18h7" />
      </>
    ),
    shield: (
      <>
        <path d="M12 3 5 6v5c0 5 3 8.5 7 10 4-1.5 7-5 7-10V6l-7-3z" />
        <path d="m8.5 12 2.2 2.2 4.8-5" />
      </>
    ),
    mail: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 7 9-7" />
      </>
    ),
    settings: (
      <>
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v3" />
        <path d="M12 19v3" />
        <path d="M2 12h3" />
        <path d="M19 12h3" />
        <path d="m4.9 4.9 2.1 2.1" />
        <path d="m17 17 2.1 2.1" />
        <path d="m19.1 4.9-2.1 2.1" />
        <path d="m7 17-2.1 2.1" />
      </>
    ),
    lock: (
      <>
        <rect x="5" y="11" width="14" height="10" rx="2" />
        <path d="M8 11V8a4 4 0 0 1 8 0v3" />
      </>
    ),
    activity: <path d="M3 12h4l3-8 4 16 3-8h4" />,
    "hard-drive": (
      <>
        <rect x="4" y="5" width="16" height="14" rx="2" />
        <path d="M4 14h16" />
        <circle cx="8" cy="17" r="1" />
        <circle cx="12" cy="17" r="1" />
      </>
    ),
    cpu: (
      <>
        <rect x="7" y="7" width="10" height="10" rx="2" />
        <path d="M9 1v3" />
        <path d="M15 1v3" />
        <path d="M9 20v3" />
        <path d="M15 20v3" />
        <path d="M20 9h3" />
        <path d="M20 15h3" />
        <path d="M1 9h3" />
        <path d="M1 15h3" />
      </>
    ),
    server: (
      <>
        <rect x="4" y="4" width="16" height="6" rx="2" />
        <rect x="4" y="14" width="16" height="6" rx="2" />
        <path d="M8 7h.01" />
        <path d="M8 17h.01" />
      </>
    ),
    github: (
      <>
        <path d="M9 19c-4 1.2-4-2-5.5-2.5" />
        <path d="M15 22v-3.5c0-1 .3-1.7.8-2.2 2.7-.3 5.5-1.3 5.5-6A4.6 4.6 0 0 0 20 7.1 4.3 4.3 0 0 0 19.9 4s-1-.3-3.4 1.3a11.8 11.8 0 0 0-6.2 0C7.9 3.7 6.9 4 6.9 4a4.3 4.3 0 0 0-.1 3.1 4.6 4.6 0 0 0-1.3 3.2c0 4.7 2.8 5.7 5.5 6 .5.5.8 1.2.8 2.2V22" />
      </>
    ),
  };

  return <svg {...common}>{paths[name] || paths.network}</svg>;
}
