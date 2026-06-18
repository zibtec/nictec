import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import FloatingSocial from "../components/FloatingSocial";

const imageBase = "/case-studies/pc-build/";

const buildStats = [
  { label: "Approx. Build Cost", value: "$650", note: "including case; GPU reused" },
  { label: "Prebuilt Comparison", value: "$1,200+", note: "similar capability, GPU excluded for equal comparison" },
  { label: "Installed Drives", value: "5", note: "NVMe + SATA SSD expansion" },
  { label: "Memory", value: "32GB", note: "2 x 16GB RAM modules" },
];

const timeline = [
  {
    step: "01",
    title: "Accidental Format",
    detail:
      "While attempting to reuse an older hard drive and install Ubuntu from a bootable ISO, I selected the wrong drive in BIOS and formatted the motherboard-mounted NVMe SSD that contained Windows, recent school assignments, and my primary workstation environment.",
  },
  {
    step: "02",
    title: "Recovery Attempts",
    detail:
      "I tried multiple recovery methods, including alternate boot environments, drive scanning, and file restoration approaches. Some recovery was possible, but the full Windows environment could not be restored exactly as it existed before.",
  },
  {
    step: "03",
    title: "Research + Upgrade Decision",
    detail:
      "The incident exposed a weakness in my workstation design. Instead of only replacing the lost drive, I researched newer PCIe-capable motherboard and processor options, waited for sales, and planned a budget-conscious rebuild.",
  },
  {
    step: "04",
    title: "Ground-Up Rebuild",
    detail:
      "The final build reused practical existing parts, including the RTX 2060 GPU and multiple SSDs, while upgrading the core platform around newer Intel-based technology, more storage flexibility, and future home lab growth.",
  },
];

const components = [
  {
    id: "motherboard",
    name: "ASRock B860M Non-Wi-Fi Motherboard + Intel 265K",
    short: "Newer Intel platform with wired-first networking and future expansion.",
    image: `${imageBase}asrock-b860m-x.svg`,
    category: "Core Platform",
    details: [
      "Selected a non-Wi-Fi motherboard because hardwired networking is my first priority in the home lab.",
      "Although I purchased a Wi-Fi 7 PCIe card later for testing purposes, wired Ethernet remains the preferred default for stability and control.",
      "The platform provides a stronger foundation for Windows, Linux, virtualization, storage testing, and AI-capable workflows.",
      "Using individual, standard components gives me more control over firmware, replacement parts, documentation, expansion cards, and upgrade decisions than a locked-down proprietary prebuilt system.",
    ],
  },
  {
    id: "memory",
    name: "32GB RAM",
    short: "2 x 16GB memory modules for multitasking and lab workloads.",
    image: `${imageBase}ram-32gb-ddr5.svg`,
    category: "Performance",
    details: [
      "Installed two 16GB sticks for 32GB total memory.",
      "Supports documentation work, browser-heavy research, Windows administration tasks, Linux testing, and future virtualization.",
      "Provides enough capability now without overspending on memory that was not yet required.",
    ],
  },
  {
    id: "primary-storage",
    name: "Primary 1TB NVMe SSD",
    short: "New main system drive for Windows, applications, and active work.",
    image: `${imageBase}main-nvme-1tb.svg`,
    category: "Storage",
    details: [
      "Installed as the primary boot drive after the accidental format incident.",
      "Used to rebuild the Windows environment and separate the operating system from bulk storage and backup locations.",
      "Chosen as part of the move toward a faster, more modern storage platform.",
    ],
  },
  {
    id: "expanded-storage",
    name: "Expanded SSD Storage Stack",
    short: "Existing SSDs repurposed to improve availability and organization.",
    image: `${imageBase}samsung-storage-stack.svg`,
    category: "Storage",
    details: [
      "Added an existing 1TB Samsung 970 EVO Plus SSD.",
      "Added two existing 1TB Samsung 870 SSDs.",
      "Added one existing 4TB Samsung 870 SSD.",
      "This created five attached workstation drives for operating system files, working data, lab files, backups, and recovery storage.",
    ],
  },
  {
    id: "psu",
    name: "650W Power Supply",
    short: "Selected to support the current build while leaving room for a future GPU upgrade.",
    image: `${imageBase}psu-650w.svg`,
    category: "Power",
    details: [
      "A 650W PSU provided capacity for the current system and left headroom for a future graphics upgrade.",
      "This kept the initial cost controlled while avoiding a power supply that would immediately limit expansion.",
      "The future GPU path was intentionally deferred because the existing RTX 2060 still works for daily and home lab needs.",
    ],
  },
  {
    id: "cooling",
    name: "360mm Liquid ARGB Cooling + Case Fans",
    short: "Cooling selected for airflow, reliability, and workload stability.",
    image: `${imageBase}thermalright-frozen-notte-360.svg`,
    category: "Cooling",
    details: [
      "Installed a 360mm liquid ARGB cooler for processor cooling.",
      "Added two reversible ARGB fans and used a case with four included ARGB fans.",
      "The cooling strategy supports stable operation under heavier multitasking, lab work, and future upgraded components.",
    ],
  },
  {
    id: "case",
    name: "Lian Li ATX Mid-Tower Case",
    short: "Airflow-focused case with space for storage, cable management, and future upgrades.",
    image: `${imageBase}lian-li-case.svg`,
    category: "Case + Airflow",
    details: [
      "Selected to support the 360mm liquid cooler, multiple fans, SSD expansion, and clean cable management.",
      "The case supports the long-term goal of maintaining a serviceable, modular workstation rather than a sealed proprietary platform.",
      "Good physical layout improves maintenance, troubleshooting, airflow, and component replacement.",
    ],
  },
  {
    id: "gpu",
    name: "Existing RTX 2060 GPU",
    short: "Reused to keep project cost low while preserving a future upgrade path.",
    image: `${imageBase}rtx-2060.svg`,
    category: "Graphics",
    details: [
      "The GPU is usually one of the most expensive components in a PC build, so reusing the RTX 2060 helped keep total cost down.",
      "For most daily, home, and home lab tasks, the existing card remains usable.",
      "A future high-end GPU upgrade would make the most sense for gaming, heavier local AI workloads, model experimentation, video work, or GPU-accelerated lab projects.",
      "Because I am doing more with AI, the long-term plan is to save for a meaningful high-end GPU upgrade instead of buying a smaller upgrade too early.",
    ],
  },
];

const securityPoints = [
  {
    title: "Component-Level Control",
    body:
      "A modular build avoids being locked into one proprietary configuration. This gives me more flexibility over BIOS settings, storage layout, replacement parts, expansion cards, firmware choices, and documentation.",
  },
  {
    title: "Security-Aware Configuration",
    body:
      "The point is not that a custom PC is automatically safer. The point is that I can apply a security-minded process: know the hardware, reduce unnecessary features, document the build, control updates, and understand what is attached to the system.",
  },
  {
    title: "Less Convenience, More Control",
    body:
      "A custom workstation can mean more manual maintenance compared with a fully managed prebuilt system. The tradeoff is more visibility and control over what gets installed, updated, replaced, or disabled.",
  },
  {
    title: "Availability by Design",
    body:
      "The rebuild now works with multiple local drives, a Synology NAS, and off-site storage. That structure supports recovery when human mistakes, hardware failures, or environmental distractions happen.",
  },
];

const lessons = [
  "Create regular full-system image backups, not only file backups.",
  "Use the 3-2-1 mindset: multiple copies, different storage locations, and at least one off-site location.",
  "Before formatting or imaging, positively identify the exact drive by model, size, partition layout, and intended purpose.",
  "Treat BIOS-level work like a change-management task: slow down, verify, document, and execute only after confirming the target.",
  "From a pilot perspective, use a backup for the backup and confirm the action being taken at that exact moment before committing to an irreversible step.",
];

function ImageWithFallback({ src, alt }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className="pc-image-fallback" role="img" aria-label={alt}>
        <span>{alt}</span>
        <small>Photo slot ready for local build image</small>
      </div>
    );
  }

  return <img src={src} alt={alt} loading="lazy" onError={() => setFailed(true)} />;
}

function ComponentCard({ component, isActive, onSelect }) {
  return (
    <button
      type="button"
      className={`pc-component-card ${isActive ? "active" : ""}`}
      onMouseEnter={() => onSelect(component.id)}
      onFocus={() => onSelect(component.id)}
      onClick={() => onSelect(component.id)}
      aria-pressed={isActive}
    >
      <div className="pc-component-thumb">
        <ImageWithFallback src={component.image} alt={component.name} />
      </div>
      <div>
        <span>{component.category}</span>
        <h3>{component.name}</h3>
        <p>{component.short}</p>
      </div>
    </button>
  );
}

export default function PCBuildCaseStudy() {
  const [activeComponentId, setActiveComponentId] = useState(components[0].id);
  const [activeTab, setActiveTab] = useState("story");
  const [showOverkill, setShowOverkill] = useState(false);

  const activeComponent = useMemo(
    () => components.find((component) => component.id === activeComponentId) || components[0],
    [activeComponentId]
  );

  return (
    <div className="pc-build-page min-h-screen">
      <FloatingSocial />

      <main className="page-root mx-auto max-w-7xl px-6 pb-24 pt-44 lg:pt-32">
        <Link to="/case-studies" className="pc-back-link">
          Back to Case Studies
        </Link>

        <section className="pc-hero">
          <div className="pc-hero-copy">
            <p className="pc-eyebrow">Case Study / Home Lab Workstation</p>
            <h1 className="font-display">PC Build</h1>
            <p className="pc-hero-lede">
              A data-loss mistake turned into a budget-conscious workstation rebuild focused on recovery,
              storage resilience, hardware modernization, security-minded configuration, and long-term home lab growth.
            </p>
            <div className="pc-hero-actions" aria-label="Page sections">
              {[
                ["story", "Story"],
                ["components", "Components"],
                ["security", "Security"],
                ["lessons", "Lessons"],
              ].map(([id, label]) => (
                <button key={id} type="button" className={activeTab === id ? "active" : ""} onClick={() => setActiveTab(id)}>
                  {label}
                </button>
              ))}
            </div>
          </div>

          <div className="pc-hero-panel">
            <div className="pc-hero-image">
              <ImageWithFallback src={`${imageBase}lian-li-case.svg`} alt="Lian Li ATX mid-tower PC build" />
            </div>
            <div className="pc-hero-badge">
              <strong>Built, documented, and improved from failure</strong>
              <span>Recovery mindset | Cost control | Future-ready upgrades</span>
            </div>
          </div>
        </section>

        <section className="pc-stats-grid" aria-label="Build summary statistics">
          {buildStats.map((stat) => (
            <article key={stat.label} className="pc-stat-card">
              <span>{stat.label}</span>
              <strong>{stat.value}</strong>
              <p>{stat.note}</p>
            </article>
          ))}
        </section>

        {activeTab === "story" && (
          <section className="pc-section pc-story-section">
            <div className="pc-section-header">
              <p className="pc-eyebrow">Why it had to be built</p>
              <h2 className="font-display">From accidental format to infrastructure modernization</h2>
              <p>
                At the end of 2025, I attempted to reuse an older hard drive and install Ubuntu from a bootable ISO.
                While working in BIOS, I unintentionally formatted the NVMe SSD attached to the motherboard. That drive
                contained my Windows installation, recent school assignments, and the operating environment I depended on every day.
              </p>
            </div>

            <div className="pc-timeline">
              {timeline.map((item) => (
                <article key={item.step} className="pc-timeline-item">
                  <span>{item.step}</span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.detail}</p>
                  </div>
                </article>
              ))}
            </div>

            <div className="pc-two-column">
              <article className="pc-narrative-card">
                <h3>The decision point</h3>
                <p>
                  After multiple recovery attempts, I could not fully restore the original SSD or recover the complete Windows
                  environment exactly as it had existed before. The mistake exposed a weakness in my workstation design: I had
                  file-level storage practices, but not a complete, regularly tested system image backup that could quickly restore
                  the whole machine to a known-good state.
                </p>
                <p>
                  I decided not to simply rebuild the same aging 2020-era system. Instead, I researched current motherboard and
                  processor options, waited for sales pricing, and created a newer home lab workstation that could support Windows,
                  Linux, virtualization, cybersecurity practice, storage testing, AI-capable workloads, and documentation.
                </p>
              </article>

              <article className="pc-cost-card">
                <span>Cost-Controlled Outcome</span>
                <h3>$650 build vs. $1,200+ prebuilt comparison</h3>
                <p>
                  Comparable prebuilt manufacturer systems with similar capability and core components were generally over $1,200.
                  By reusing my RTX 2060 and existing SSDs, waiting for sales, and selecting parts intentionally, I built a newer
                  technology workstation for approximately $650.
                </p>
                <div className="pc-cost-bars" aria-label="Cost comparison visualization">
                  <div>
                    <span>Custom build</span>
                    <strong>$650</strong>
                    <i style={{ width: "54%" }} />
                  </div>
                  <div>
                    <span>Comparable prebuilt</span>
                    <strong>$1,200+</strong>
                    <i style={{ width: "100%" }} />
                  </div>
                </div>
              </article>
            </div>
          </section>
        )}

        {activeTab === "components" && (
          <section className="pc-section pc-components-section">
            <div className="pc-section-header">
              <p className="pc-eyebrow">Build architecture</p>
              <h2 className="font-display">Interactive component breakdown</h2>
              <p>
                The build was planned around modern capability, use of existing parts, and future upgrade flexibility.
                Select a component to view the reasoning behind the choice.
              </p>
            </div>

            <div className="pc-component-layout">
              <div className="pc-component-list">
                {components.map((component) => (
                  <ComponentCard
                    key={component.id}
                    component={component}
                    isActive={component.id === activeComponentId}
                    onSelect={setActiveComponentId}
                  />
                ))}
              </div>

              <aside className="pc-component-detail">
                <div className="pc-detail-image">
                  <ImageWithFallback src={activeComponent.image} alt={activeComponent.name} />
                </div>
                <span>{activeComponent.category}</span>
                <h3>{activeComponent.name}</h3>
                <p>{activeComponent.short}</p>
                <ul>
                  {activeComponent.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
              </aside>
            </div>
          </section>
        )}

        {activeTab === "security" && (
          <section className="pc-section pc-security-section">
            <div className="pc-section-header">
              <p className="pc-eyebrow">Security-minded home lab design</p>
              <h2 className="font-display">More control, clearer inventory, better recovery planning</h2>
              <p>
                This build supports the broader security approach used across my home lab case studies: understand the assets,
                document the environment, control unnecessary features, and build recovery options before they are needed.
              </p>
            </div>

            <div className="pc-security-grid">
              {securityPoints.map((point) => (
                <article key={point.title}>
                  <h3>{point.title}</h3>
                  <p>{point.body}</p>
                </article>
              ))}
            </div>
          </section>
        )}

        {activeTab === "lessons" && (
          <section className="pc-section pc-lessons-section">
            <div className="pc-section-header">
              <p className="pc-eyebrow">Lessons learned</p>
              <h2 className="font-display">Mistakes happen. The learning has to be worth more than the cost.</h2>
              <p>
                The most valuable part of this project was not the hardware. It was the lesson that a routine technical task
                can become a data-loss event when backups, drive identification, and environmental distractions are not controlled.
              </p>
            </div>

            <div className="pc-lessons-layout">
              <article className="pc-checklist-card">
                <h3>My updated operating rules</h3>
                <ul>
                  {lessons.map((lesson) => (
                    <li key={lesson}>{lesson}</li>
                  ))}
                </ul>
              </article>

              <article className="pc-overkill-card">
                <button type="button" onClick={() => setShowOverkill((value) => !value)}>
                  <span>Was this overkill?</span>
                  <strong>{showOverkill ? "Hide answer" : "Show answer"}</strong>
                </button>
                {showOverkill && (
                  <div>
                    <p>
                      Maybe, if the only goal was to recover from one mistaken format. My frustration with the mistake definitely
                      helped push the project forward. But from a reliability and home lab perspective, the result was not overkill.
                    </p>
                    <p>
                      The money cost was real, but the lesson was more valuable: positively identify the target, slow down when
                      the action is irreversible, keep tested backups, and design the environment so one mistake does not become
                      a single point of failure.
                    </p>
                  </div>
                )}
              </article>
            </div>

            <article className="pc-final-card">
              <h3>Final outcome</h3>
              <p>
                What began as an accidental data-loss incident became a stronger, more reliable, and more future-ready home lab
                workstation. I now operate with five attached workstation drives, a Synology NAS, and off-site storage to improve
                availability, recovery capability, and resilience.
              </p>
            </article>
          </section>
        )}

        <footer className="mt-16 text-center text-xs tracking-wider text-[var(--deep-crimson)]">
          &copy; {new Date().getFullYear()} Nick Coury - All Rights Reserved
        </footer>
      </main>
    </div>
  );
}
