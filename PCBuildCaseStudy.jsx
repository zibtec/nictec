"use client";

import React, { useMemo, useState } from "react";

/*
  PCBuildCaseStudy.jsx

  Suggested placement:
  - Next.js App Router: app/case-studies/pc-build/page.jsx
  - Next.js Pages Router: pages/case-studies/pc-build.jsx
  - Vite/React: src/pages/PCBuildCaseStudy.jsx or src/components/PCBuildCaseStudy.jsx

  Image setup:
  Save your own photos or authorized manufacturer/retailer images here:
  public/case-studies/pc-build/asrock-b860m-x.jpg
  public/case-studies/pc-build/intel-265k.jpg
  public/case-studies/pc-build/ram-32gb-ddr5.jpg
  public/case-studies/pc-build/main-nvme-1tb.jpg
  public/case-studies/pc-build/samsung-storage-stack.jpg
  public/case-studies/pc-build/psu-650w.jpg
  public/case-studies/pc-build/thermalright-frozen-notte-360.jpg
  public/case-studies/pc-build/lian-li-case.jpg
  public/case-studies/pc-build/rtx-2060.jpg

  The component intentionally uses local image paths. This avoids hotlinking,
  improves deployment reliability, and lets you use your own build photos.
*/

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
    image: `${imageBase}asrock-b860m-x.jpg`,
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
    image: `${imageBase}ram-32gb-ddr5.jpg`,
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
    image: `${imageBase}main-nvme-1tb.jpg`,
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
    image: `${imageBase}samsung-storage-stack.jpg`,
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
    image: `${imageBase}psu-650w.jpg`,
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
    image: `${imageBase}thermalright-frozen-notte-360.jpg`,
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
    image: `${imageBase}lian-li-case.jpg`,
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
    image: `${imageBase}rtx-2060.jpg`,
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
      "The rebuild now works with multiple local drives, an on-premise NAS, and off-site storage. That structure supports recovery when human mistakes, hardware failures, or environmental distractions happen.",
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
        <span>Image placeholder</span>
        <small>Add local file:</small>
        <code>{src}</code>
      </div>
    );
  }

  return <img src={src} alt={alt} loading="lazy" onError={() => setFailed(true)} />;
}

function StatCard({ label, value, note }) {
  return (
    <article className="pc-stat-card">
      <span>{label}</span>
      <strong>{value}</strong>
      <p>{note}</p>
    </article>
  );
}

function ComponentCard({ component, isActive, onSelect }) {
  return (
    <button
      type="button"
      className={`pc-component-card ${isActive ? "active" : ""}`}
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
    <main className="pc-build-page">
      <section className="pc-hero">
        <div className="pc-hero-copy">
          <p className="pc-eyebrow">Case Study / Home Lab Computer Build</p>
          <h1>PC Build</h1>
          <p className="pc-hero-lede">
            A data-loss mistake turned into a budget-conscious workstation rebuild focused on
            recovery, storage resilience, hardware modernization, security-minded configuration,
            and long-term home lab growth.
          </p>
          <div className="pc-hero-actions" aria-label="Page sections">
            {[
              ["story", "Story"],
              ["components", "Components"],
              ["security", "Security"],
              ["lessons", "Lessons"],
            ].map(([id, label]) => (
              <button
                key={id}
                type="button"
                className={activeTab === id ? "active" : ""}
                onClick={() => setActiveTab(id)}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
        <div className="pc-hero-panel">
          <div className="pc-hero-image">
            <ImageWithFallback src={`${imageBase}lian-li-case.jpg`} alt="Lian Li ATX mid-tower PC build" />
          </div>
          <div className="pc-hero-badge">
            <strong>Built, documented, and improved from failure</strong>
            <span>Recovery mindset • Cost control • Future-ready upgrades</span>
          </div>
        </div>
      </section>

      <section className="pc-stats-grid" aria-label="Build summary statistics">
        {buildStats.map((stat) => (
          <StatCard key={stat.label} {...stat} />
        ))}
      </section>

      {activeTab === "story" && (
        <section className="pc-section pc-story-section">
          <div className="pc-section-header">
            <p className="pc-eyebrow">Why it had to be built</p>
            <h2>From accidental format to infrastructure modernization</h2>
            <p>
              At the end of 2025, I attempted to reuse an older hard drive and install Ubuntu from a
              bootable ISO. While working in BIOS, I unintentionally formatted the NVMe SSD attached
              to the motherboard. That drive contained my Windows installation, recent school
              assignments, and the operating environment I depended on every day.
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
                After multiple recovery attempts, I could not fully restore the original SSD or recover
                the complete Windows environment exactly as it had existed before. The mistake exposed
                a weakness in my workstation design: I had file-level storage practices, but I did not
                have a complete, regularly tested system image backup that could quickly restore the
                whole machine to a known-good state.
              </p>
              <p>
                I decided not to simply rebuild the same aging 2020-era system. Instead, I researched
                current motherboard and processor options, waited for sales pricing, and created a newer
                home lab workstation that could support Windows, Linux, virtualization, cybersecurity
                practice, storage testing, AI-capable workloads, and documentation.
              </p>
            </article>

            <article className="pc-cost-card">
              <span>Cost-Controlled Outcome</span>
              <h3>$650 build vs. $1,200+ prebuilt comparison</h3>
              <p>
                I priced comparable prebuilt manufacturer systems with similar capability and core
                components, excluding the GPU for a fairer comparison. Those options were generally
                over $1,200. By reusing my RTX 2060 and existing SSDs, waiting for sales, and selecting
                parts intentionally, I built a newer technology workstation for approximately $650.
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
            <h2>Interactive component breakdown</h2>
            <p>
              The build was planned around modern capability, use of existing parts, and future upgrade
              flexibility. Select a component to view the reasoning behind the choice.
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

          <article className="pc-gpu-note">
            <h3>Why I reused the RTX 2060</h3>
            <p>
              The graphics card is often the most expensive part of a PC build. Reusing my existing RTX
              2060 kept the project within budget while still meeting everyday workstation and home lab
              needs. A future GPU upgrade would be most valuable for gaming, heavier local AI workloads,
              video processing, model experimentation, and GPU-accelerated lab projects. Since I am
              doing more with AI, the better long-term path is to save for a meaningful high-end GPU
              upgrade instead of buying a smaller upgrade too early.
            </p>
          </article>
        </section>
      )}

      {activeTab === "security" && (
        <section className="pc-section pc-security-section">
          <div className="pc-section-header">
            <p className="pc-eyebrow">Security-minded home lab design</p>
            <h2>More control, clearer inventory, better recovery planning</h2>
            <p>
              This build supports the broader security approach used across my home lab case studies:
              understand the assets, document the environment, control unnecessary features, and build
              recovery options before they are needed.
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

          <article className="pc-nist-card">
            <h3>How this maps to a governance mindset</h3>
            <p>
              I did not build this workstation because a framework requires a custom PC. I built it
              because a modular workstation supports the same disciplined habits used in professional IT
              environments: hardware inventory, baseline configuration, least functionality, documented
              changes, backup planning, recovery testing, and controlled maintenance.
            </p>
            <p>
              A proprietary prebuilt system may offer convenience, vendor support, and automatic update
              tooling. A custom build requires more personal responsibility, but it also provides more
              transparency and flexibility over the hardware, firmware, storage layout, and future
              upgrades.
            </p>
          </article>
        </section>
      )}

      {activeTab === "lessons" && (
        <section className="pc-section pc-lessons-section">
          <div className="pc-section-header">
            <p className="pc-eyebrow">Lessons learned</p>
            <h2>Backups, positive identification, and human factors</h2>
            <p>
              The most valuable part of this project was not the hardware. It was the lesson that a
              routine technical task can become a data-loss event when backups, drive identification,
              and environmental distractions are not controlled.
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
                    Maybe, if the only goal was to recover from one mistaken format. My frustration
                    with the mistake definitely helped push the project forward. But from a reliability
                    and home lab perspective, the result was not overkill. Multiple copies in multiple
                    locations improve availability when mistakes happen.
                  </p>
                  <p>
                    As a pilot, the mindset is familiar: use a backup for the backup, positively
                    identify what you are doing, verify the target before committing, and slow down when
                    the action is irreversible. That same discipline now applies to formatting drives,
                    installing operating systems, managing backups, and maintaining my workstation.
                  </p>
                </div>
              )}
            </article>
          </div>

          <article className="pc-final-card">
            <h3>Final outcome</h3>
            <p>
              What began as an accidental data-loss incident became a stronger, more reliable, and more
              future-ready home lab workstation. I now operate with five attached workstation drives, an
              on-premise NAS, and off-site storage to improve availability, recovery capability, and
              resilience. The cost of the mistake became an invaluable lesson in backup strategy,
              change management, storage planning, and disciplined technical execution.
            </p>
          </article>
        </section>
      )}

      <style>{`
        .pc-build-page {
          --pc-bg: #080b10;
          --pc-panel: rgba(255, 255, 255, 0.075);
          --pc-panel-strong: rgba(255, 255, 255, 0.11);
          --pc-text: #f4f7fb;
          --pc-muted: #aeb8c7;
          --pc-border: rgba(255, 255, 255, 0.14);
          --pc-accent: #8fe4ff;
          --pc-accent-2: #c9a7ff;
          min-height: 100vh;
          padding: 56px 18px 72px;
          background:
            radial-gradient(circle at top left, rgba(143, 228, 255, 0.16), transparent 32rem),
            radial-gradient(circle at top right, rgba(201, 167, 255, 0.14), transparent 34rem),
            var(--pc-bg);
          color: var(--pc-text);
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
        }

        .pc-build-page * { box-sizing: border-box; }
        .pc-hero, .pc-stats-grid, .pc-section { width: min(1180px, 100%); margin-inline: auto; }

        .pc-hero {
          display: grid;
          grid-template-columns: minmax(0, 1.05fr) minmax(320px, 0.95fr);
          gap: 28px;
          align-items: stretch;
        }

        .pc-hero-copy, .pc-hero-panel, .pc-section, .pc-stat-card,
        .pc-narrative-card, .pc-cost-card, .pc-component-detail, .pc-gpu-note,
        .pc-security-grid article, .pc-nist-card, .pc-checklist-card,
        .pc-overkill-card, .pc-final-card {
          border: 1px solid var(--pc-border);
          background: linear-gradient(145deg, var(--pc-panel), rgba(255,255,255,0.035));
          box-shadow: 0 24px 70px rgba(0, 0, 0, 0.24);
          backdrop-filter: blur(14px);
          border-radius: 26px;
        }

        .pc-hero-copy { padding: clamp(28px, 4vw, 54px); }
        .pc-eyebrow { margin: 0 0 12px; color: var(--pc-accent); text-transform: uppercase; letter-spacing: 0.16em; font-size: 0.78rem; font-weight: 800; }
        .pc-hero h1 { margin: 0; font-size: clamp(3.1rem, 8vw, 7.5rem); line-height: 0.9; letter-spacing: -0.08em; }
        .pc-hero-lede { max-width: 720px; margin: 28px 0 0; color: var(--pc-muted); font-size: clamp(1.05rem, 2vw, 1.35rem); line-height: 1.65; }

        .pc-hero-actions { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 30px; }
        .pc-hero-actions button, .pc-overkill-card button {
          cursor: pointer; border: 1px solid var(--pc-border); border-radius: 999px;
          color: var(--pc-text); background: rgba(255,255,255,0.075); transition: 180ms ease;
        }
        .pc-hero-actions button { padding: 11px 16px; font-weight: 800; }
        .pc-hero-actions button:hover, .pc-hero-actions button.active, .pc-overkill-card button:hover {
          transform: translateY(-1px); border-color: rgba(143,228,255,0.58); background: rgba(143,228,255,0.13);
        }

        .pc-hero-panel { position: relative; overflow: hidden; min-height: 420px; }
        .pc-hero-image, .pc-detail-image, .pc-component-thumb { background: rgba(0,0,0,0.25); overflow: hidden; }
        .pc-hero-image { height: 100%; min-height: 420px; }
        .pc-hero-image img, .pc-detail-image img, .pc-component-thumb img { width: 100%; height: 100%; object-fit: cover; display: block; }
        .pc-hero-badge { position: absolute; left: 18px; right: 18px; bottom: 18px; padding: 18px; border: 1px solid var(--pc-border); border-radius: 20px; background: rgba(8, 11, 16, 0.78); backdrop-filter: blur(18px); }
        .pc-hero-badge strong, .pc-hero-badge span { display: block; }
        .pc-hero-badge span { color: var(--pc-muted); margin-top: 4px; }

        .pc-image-fallback { width: 100%; min-height: 180px; height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 8px; padding: 18px; text-align: center; color: var(--pc-muted); background: linear-gradient(135deg, rgba(143,228,255,0.12), rgba(201,167,255,0.12)), rgba(255,255,255,0.04); }
        .pc-image-fallback span { color: var(--pc-text); font-weight: 900; }
        .pc-image-fallback code { max-width: 100%; overflow-wrap: anywhere; color: var(--pc-accent); font-size: 0.78rem; }

        .pc-stats-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 14px; margin-top: 18px; }
        .pc-stat-card { padding: 22px; }
        .pc-stat-card span { display: block; color: var(--pc-muted); font-size: 0.9rem; }
        .pc-stat-card strong { display: block; margin-top: 8px; font-size: clamp(2rem, 4vw, 3rem); letter-spacing: -0.05em; }
        .pc-stat-card p { color: var(--pc-muted); line-height: 1.5; margin: 10px 0 0; }

        .pc-section { margin-top: 18px; padding: clamp(22px, 4vw, 36px); }
        .pc-section-header { max-width: 880px; }
        .pc-section-header h2 { margin: 0; font-size: clamp(2rem, 4vw, 3.7rem); line-height: 1; letter-spacing: -0.055em; }
        .pc-section-header p:not(.pc-eyebrow) { color: var(--pc-muted); line-height: 1.7; font-size: 1.03rem; }

        .pc-timeline { display: grid; grid-template-columns: repeat(4, 1fr); gap: 14px; margin-top: 28px; }
        .pc-timeline-item { padding: 20px; border: 1px solid var(--pc-border); border-radius: 22px; background: rgba(255,255,255,0.055); }
        .pc-timeline-item span { display: inline-flex; width: 42px; height: 42px; align-items: center; justify-content: center; margin-bottom: 14px; border-radius: 50%; color: #061014; background: linear-gradient(135deg, var(--pc-accent), var(--pc-accent-2)); font-weight: 900; }
        .pc-timeline-item h3 { margin: 0 0 8px; }
        .pc-timeline-item p { margin: 0; color: var(--pc-muted); line-height: 1.62; }

        .pc-two-column, .pc-lessons-layout { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-top: 16px; }
        .pc-narrative-card, .pc-cost-card, .pc-gpu-note, .pc-nist-card, .pc-checklist-card, .pc-overkill-card, .pc-final-card { padding: 24px; }
        .pc-narrative-card h3, .pc-cost-card h3, .pc-gpu-note h3, .pc-nist-card h3, .pc-checklist-card h3, .pc-final-card h3 { margin: 0 0 12px; font-size: 1.35rem; }
        .pc-narrative-card p, .pc-cost-card p, .pc-gpu-note p, .pc-nist-card p, .pc-final-card p, .pc-overkill-card p { color: var(--pc-muted); line-height: 1.72; }
        .pc-cost-card > span { color: var(--pc-accent); text-transform: uppercase; letter-spacing: .12em; font-size: .76rem; font-weight: 900; }
        .pc-cost-bars { display: grid; gap: 14px; margin-top: 18px; }
        .pc-cost-bars div { position: relative; padding-top: 28px; }
        .pc-cost-bars span { color: var(--pc-muted); position: absolute; left: 0; top: 0; }
        .pc-cost-bars strong { position: absolute; right: 0; top: 0; }
        .pc-cost-bars i { display: block; height: 12px; border-radius: 999px; background: linear-gradient(90deg, var(--pc-accent), var(--pc-accent-2)); }

        .pc-component-layout { display: grid; grid-template-columns: minmax(0, 0.9fr) minmax(340px, 1.1fr); gap: 18px; margin-top: 28px; }
        .pc-component-list { display: grid; gap: 12px; }
        .pc-component-card { display: grid; grid-template-columns: 112px 1fr; gap: 14px; width: 100%; padding: 12px; border: 1px solid var(--pc-border); border-radius: 20px; color: var(--pc-text); text-align: left; background: rgba(255,255,255,0.055); cursor: pointer; transition: 180ms ease; }
        .pc-component-card:hover, .pc-component-card.active { border-color: rgba(143,228,255,0.65); transform: translateY(-1px); background: rgba(143,228,255,0.1); }
        .pc-component-thumb { height: 92px; border-radius: 14px; }
        .pc-component-card span, .pc-component-detail > span { color: var(--pc-accent); text-transform: uppercase; letter-spacing: .12em; font-size: .7rem; font-weight: 900; }
        .pc-component-card h3 { margin: 6px 0 4px; font-size: 1rem; }
        .pc-component-card p { margin: 0; color: var(--pc-muted); line-height: 1.45; }
        .pc-component-detail { position: sticky; top: 20px; align-self: start; padding: 18px; }
        .pc-detail-image { height: 320px; border-radius: 18px; margin-bottom: 18px; }
        .pc-component-detail h3 { margin: 8px 0; font-size: 1.7rem; }
        .pc-component-detail p { color: var(--pc-muted); line-height: 1.65; }
        .pc-component-detail ul, .pc-checklist-card ul { margin: 18px 0 0; padding: 0; list-style: none; display: grid; gap: 10px; }
        .pc-component-detail li, .pc-checklist-card li { color: var(--pc-muted); line-height: 1.6; padding-left: 28px; position: relative; }
        .pc-component-detail li::before, .pc-checklist-card li::before { content: "✓"; position: absolute; left: 0; color: var(--pc-accent); font-weight: 900; }
        .pc-gpu-note { margin-top: 18px; }

        .pc-security-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 14px; margin-top: 28px; }
        .pc-security-grid article { padding: 22px; }
        .pc-security-grid h3 { margin: 0 0 10px; }
        .pc-security-grid p { margin: 0; color: var(--pc-muted); line-height: 1.65; }
        .pc-nist-card { margin-top: 16px; }

        .pc-overkill-card button { width: 100%; display: flex; justify-content: space-between; align-items: center; gap: 16px; padding: 16px 18px; text-align: left; }
        .pc-overkill-card button span { font-size: 1.2rem; font-weight: 900; }
        .pc-overkill-card button strong { color: var(--pc-accent); }
        .pc-final-card { margin-top: 16px; }

        @media (max-width: 980px) {
          .pc-hero, .pc-component-layout, .pc-two-column, .pc-lessons-layout { grid-template-columns: 1fr; }
          .pc-stats-grid, .pc-timeline, .pc-security-grid { grid-template-columns: repeat(2, 1fr); }
          .pc-component-detail { position: static; }
        }

        @media (max-width: 620px) {
          .pc-build-page { padding: 28px 12px 48px; }
          .pc-stats-grid, .pc-timeline, .pc-security-grid { grid-template-columns: 1fr; }
          .pc-component-card { grid-template-columns: 1fr; }
          .pc-component-thumb { height: 170px; }
          .pc-detail-image, .pc-hero-image, .pc-hero-panel { min-height: 280px; height: 280px; }
        }
      `}</style>
    </main>
  );
}
