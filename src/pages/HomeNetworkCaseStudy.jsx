import React from "react";
import { Link } from "react-router-dom";
import FloatingSocial from "../components/FloatingSocial";

const zones = [
  {
    id: "management",
    name: "Management",
    shortName: "Mgmt",
    purpose: "Network devices, controller, router/firewall, switches, access points, and administrative services.",
    access: "Only approved admin device paths. No guest, kids, IoT, media, or gaming access.",
    control: "Privileged plane",
    signal: "Admin path",
    metric: "Restricted",
    x: 19,
    y: 22,
    ring: "gold",
    lineRotation: "24deg",
  },
  {
    id: "trusted",
    name: "Home / Trusted",
    shortName: "Trusted",
    purpose: "Daily household devices that need normal internet access and limited shared services.",
    access: "Limited access to approved shared services. SSID broadcast disabled when device support allows.",
    control: "Household access",
    signal: "Known devices",
    metric: "Limited",
    x: 47,
    y: 18,
    ring: "navy",
    lineRotation: "76deg",
  },
  {
    id: "lab",
    name: "Home Lab / Work",
    shortName: "Lab",
    purpose: "Custom workstation, Synology NAS, lab systems, documentation, testing, learning, and secure remote access.",
    access: "Twingate or VPN-style trusted access only; YubiKey MFA required for administrative paths.",
    control: "Learning and build zone",
    signal: "ZTNA + MFA",
    metric: "MFA",
    x: 76,
    y: 27,
    ring: "crimson",
    lineRotation: "132deg",
  },
  {
    id: "school",
    name: "Kids / School",
    shortName: "School",
    purpose: "Schoolwork, education sites, approved learning tools, and age-appropriate internet access.",
    access: "Allowlist-first DNS policy. Alternate DNS and encrypted DNS bypass attempts blocked where practical.",
    control: "DNS guardrails",
    signal: "Allowlist",
    metric: "Filtered",
    x: 24,
    y: 64,
    ring: "navy",
    lineRotation: "-32deg",
  },
  {
    id: "iot",
    name: "IoT / Media",
    shortName: "IoT",
    purpose: "Home automation, cameras, TVs, streaming devices, printers, and low-trust smart devices.",
    access: "Internet-only by default; local exceptions allowed only for approved controllers or casting paths.",
    control: "Low-trust isolation",
    signal: "Internet only",
    metric: "Isolated",
    x: 53,
    y: 70,
    ring: "gold",
    lineRotation: "-104deg",
  },
  {
    id: "gaming",
    name: "Gaming",
    shortName: "Gaming",
    purpose: "Consoles, game PCs, and entertainment traffic separated from private devices and lab systems.",
    access: "Internet-focused access. No default path to trusted, management, kids, guest, or lab VLANs.",
    control: "Entertainment boundary",
    signal: "Egress only",
    metric: "Segmented",
    x: 79,
    y: 68,
    ring: "navy",
    lineRotation: "-148deg",
  },
  {
    id: "guest",
    name: "Guest",
    shortName: "Guest",
    purpose: "Visitor internet access with no visibility into household systems.",
    access: "Captive portal acceptance, client isolation, bandwidth limits, and internet-only firewall rules.",
    control: "Visitor containment",
    signal: "Portal",
    metric: "Contained",
    x: 88,
    y: 47,
    ring: "crimson",
    lineRotation: "180deg",
  },
];

const controls = [
  ["Govern", "Household security policy, acceptable use, risk decisions, and maintenance ownership."],
  ["Identify", "Asset inventory, VLAN classification, data locations, device ownership, and dependency mapping."],
  ["Protect", "MFA, segmented VLANs, encrypted DNS, secure configurations, patching, and access control."],
  ["Detect", "Firewall logs, DNS events, device health, failed login review, and service exposure checks."],
  ["Respond", "Contain affected VLAN, revoke credentials, rotate secrets, isolate device, document actions."],
  ["Recover", "Restore known-good backups, reapply configurations, validate DNS/firewall policies, review lessons learned."],
];

const architectureSteps = ["Internet", "Firewall / Router", "Managed Core Switch", "Access Points", "Lab Services"];

const securityModel = [
  "Every VLAN is treated as a separate trust boundary.",
  "Administrative access requires an approved device path plus YubiKey MFA.",
  "Remote access is handled through identity-aware access such as Twingate or a VPN overlay rather than exposed admin services.",
  "The custom PC build, Synology NAS, and lab systems support local work, backups, documentation, and controlled testing.",
  "Guest access uses captive portal acceptance and client isolation.",
  "Kids and school access uses allowlist-first DNS for school and education resources.",
  "IoT and media devices remain isolated from trusted, management, and lab networks.",
  "SSID broadcast is disabled where practical, but never treated as a primary security control.",
];

const maintenance = [
  "Monthly reboot of router, switches, access points, and lab hardware.",
  "Monthly UPS battery exercise by running critical network equipment from backup power.",
  "Regular firmware and patch research before updating devices, Synology DSM, lab hosts, and workstation drivers.",
  "Configuration backups after meaningful changes, including network settings, NAS snapshots, and remote-access policy changes.",
  "Periodic Twingate or VPN device review to remove retired endpoints and validate no admin interfaces are publicly exposed.",
  "Lightweight change log instead of heavy enterprise templates.",
];

const dashboardStats = [
  ["7", "Trust zones"],
  ["Default", "Inter-zone stance"],
  ["MFA", "Admin access"],
  ["NAS", "Recovery layer"],
];

const labCapabilities = [
  {
    title: "Workstation Build",
    label: "PC Build",
    text:
      "A custom workstation anchors the lab for Windows administration, Linux testing, documentation, AI-capable workflows, storage experiments, and recovery practice.",
    to: "/case-studies/pc-build",
  },
  {
    title: "Synology NAS",
    label: "Storage Layer",
    text:
      "Centralized NAS storage supports snapshots, shared documentation, file recovery, and separation between active workstation data and longer-lived backup targets.",
  },
  {
    title: "Identity-Aware Access",
    label: "Remote Access",
    text:
      "Twingate-style ZTNA and VPN patterns keep administrative services off the public internet while allowing narrow access to approved lab and NAS services.",
  },
];

const usePrefersReducedMotion = () => {
  const [reducedMotion, setReducedMotion] = React.useState(false);

  React.useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  return reducedMotion;
};

export default function HomeNetworkCaseStudy() {
  const [activeZoneId, setActiveZoneId] = React.useState("lab");
  const reducedMotion = usePrefersReducedMotion();
  const activeZone = zones.find((zone) => zone.id === activeZoneId) ?? zones[0];

  React.useEffect(() => {
    if (reducedMotion) {
      return undefined;
    }

    const interval = window.setInterval(() => {
      setActiveZoneId((currentId) => {
        const currentIndex = zones.findIndex((zone) => zone.id === currentId);
        return zones[(currentIndex + 1) % zones.length].id;
      });
    }, 5200);

    return () => window.clearInterval(interval);
  }, [reducedMotion]);

  return (
    <div className="portfolio-page-shell home-lab-page min-h-screen text-[var(--velvet-obsidian)]">
      <FloatingSocial />

      <main className="page-root mx-auto max-w-7xl px-6 pb-24 pt-44 lg:pt-32">
        <Link
          to="/case-studies"
          className="inline-flex text-sm font-semibold text-[var(--seal-gold)] underline decoration-[rgba(194,145,44,0.55)] underline-offset-4 transition hover:text-[var(--ethereal-ivory)]"
        >
          Back to Case Studies
        </Link>

        <section className="home-lab-hero mt-8">
          <div className="home-lab-hero-copy">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--seal-gold)]">Interactive Case Study</div>
            <h1 className="font-display mt-3 text-4xl font-bold leading-tight text-[var(--ethereal-ivory)] md:text-6xl">
              Home Lab Security Architecture
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-8 text-[rgba(247,235,224,0.84)] md:text-lg">
              A non-commercial network lab built to practice Zero Trust thinking, segmented operations, DNS governance,
              hardware-backed MFA, secure remote access, resilient storage, and practical NIST CSF alignment without exposing private household details.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
              {dashboardStats.map(([value, label]) => (
                <div key={label} className="home-lab-stat">
                  <span>{value}</span>
                  <small>{label}</small>
                </div>
              ))}
            </div>
          </div>

          <aside className="home-lab-command glass">
            <div className="home-lab-command-top">
              <span>Selected zone</span>
              <strong>{activeZone.metric}</strong>
            </div>
            <h2 className="font-display">{activeZone.name}</h2>
            <p>{activeZone.purpose}</p>
            <div className="home-lab-command-rule">
              <span>{activeZone.control}</span>
              <p>{activeZone.access}</p>
            </div>
          </aside>
        </section>

        <section className="home-lab-console mt-12">
          <div className="home-lab-map glass" aria-label="Interactive home lab network diagram">
            <div className="home-lab-map-header">
              <div>
                <span>Network Console</span>
                <h2 className="font-display">Move over a zone to inspect its boundary</h2>
              </div>
              <p>Default deny between VLANs</p>
            </div>

            <div className="home-lab-stage">
              <div className="home-lab-backbone" aria-hidden="true">
                {architectureSteps.map((step, index) => (
                  <React.Fragment key={step}>
                    <div className="home-lab-backbone-node">
                      <span>{String(index + 1).padStart(2, "0")}</span>
                      <strong>{step}</strong>
                    </div>
                    {index < architectureSteps.length - 1 ? <div className="home-lab-backbone-line" /> : null}
                  </React.Fragment>
                ))}
              </div>

              <div className="home-lab-core" aria-hidden="true">
                <span>Firewall</span>
                <strong>Policy Core</strong>
              </div>

              {zones.map((zone) => (
                <button
                  key={zone.id}
                  type="button"
                  className={`home-lab-zone home-lab-zone-${zone.ring} ${activeZoneId === zone.id ? "active" : ""}`}
                  style={{
                    "--zone-x": `${zone.x}%`,
                    "--zone-y": `${zone.y}%`,
                    "--line-rotation": zone.lineRotation,
                  }}
                  onMouseEnter={() => setActiveZoneId(zone.id)}
                  onFocus={() => setActiveZoneId(zone.id)}
                  onClick={() => setActiveZoneId(zone.id)}
                  aria-pressed={activeZoneId === zone.id}
                >
                  <span className="home-lab-zone-orbit" aria-hidden="true" />
                  <span className="home-lab-zone-label">{zone.shortName}</span>
                  <small>{zone.signal}</small>
                </button>
              ))}
            </div>
          </div>

          <aside className="home-lab-inspector glass" aria-live="polite">
            <div className="home-lab-inspector-kicker">Active Inspection</div>
            <h2 className="font-display">{activeZone.name}</h2>
            <dl>
              <div>
                <dt>Purpose</dt>
                <dd>{activeZone.purpose}</dd>
              </div>
              <div>
                <dt>Access rule</dt>
                <dd>{activeZone.access}</dd>
              </div>
              <div>
                <dt>Control idea</dt>
                <dd>{activeZone.control}</dd>
              </div>
            </dl>
          </aside>
        </section>

        <section className="home-lab-zone-strip mt-10" aria-label="Network zones">
          {zones.map((zone) => (
            <button
              type="button"
              key={zone.id}
              className={activeZoneId === zone.id ? "active" : ""}
              onMouseEnter={() => setActiveZoneId(zone.id)}
              onFocus={() => setActiveZoneId(zone.id)}
              onClick={() => setActiveZoneId(zone.id)}
            >
              <span>{zone.name}</span>
              <small>{zone.metric}</small>
            </button>
          ))}
        </section>

        <section className="home-lab-capabilities mt-12">
          {labCapabilities.map((item) => {
            const content = (
              <>
                <span>{item.label}</span>
                <h2 className="font-display">{item.title}</h2>
                <p>{item.text}</p>
              </>
            );

            return item.to ? (
              <Link key={item.title} to={item.to} className="home-lab-capability glass">
                {content}
              </Link>
            ) : (
              <article key={item.title} className="home-lab-capability glass">
                {content}
              </article>
            );
          })}
        </section>

        <section className="mt-14 grid gap-6 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
          <article className="home-lab-playbook glass">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--seal-gold)]">Operating Model</div>
            <h2 className="font-display mt-3 text-3xl font-bold text-[var(--ethereal-ivory)]">Security that is practiced, not just described.</h2>
            <p className="mt-4 text-sm leading-7 text-[rgba(247,235,224,0.84)]">
              The lab turns governance ideas into repeatable habits: classify assets, separate trust boundaries,
              constrain access, watch for drift, document changes, and recover from known-good configurations.
            </p>
            <div className="mt-7 grid gap-3">
              {securityModel.map((item, index) => (
                <div key={item} className="home-lab-playbook-row">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </article>

          <article className="home-lab-rhythm glass">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--seal-gold)]">Maintenance Rhythm</div>
            <h2 className="font-display mt-3 text-3xl font-bold text-[var(--ethereal-ivory)]">Small routines keep the system honest.</h2>
            <div className="mt-7">
              {maintenance.map((item, index) => (
                <div key={item} className="home-lab-timeline-item">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </article>
        </section>

        <section className="home-lab-framework mt-12 glass">
          <div className="home-lab-framework-heading">
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--seal-gold)]">Framework Crosswalk</div>
              <h2 className="font-display mt-3 text-3xl font-bold text-[var(--ethereal-ivory)]">NIST CSF as a practical learning loop</h2>
            </div>
            <p>
              Each function maps to visible decisions in the lab, from inventory and configuration through response and recovery.
            </p>
          </div>

          <div className="home-lab-control-wheel">
            {controls.map(([framework, example], index) => (
              <article key={framework} style={{ "--control-index": index }}>
                <span>{framework}</span>
                <p>{example}</p>
              </article>
            ))}
          </div>
        </section>

        <footer className="mt-16 text-center text-xs tracking-wider text-[var(--seal-gold)]">
          &copy; {new Date().getFullYear()} Nick Coury - All Rights Reserved
        </footer>
      </main>
    </div>
  );
}
