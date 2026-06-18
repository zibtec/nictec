import React from "react";
import "./HomeNetworkCaseStudy.css";

const zones = [
  {
    name: "Management",
    purpose: "Network devices, controller, router/firewall, switches, access points, and administrative services.",
    access: "Only approved admin device paths. No guest, kids, IoT, media, or gaming access.",
  },
  {
    name: "Home / Trusted",
    purpose: "Daily household devices that need normal internet access and limited shared services.",
    access: "Limited access to approved shared services. SSID broadcast disabled when device support allows.",
  },
  {
    name: "Home Lab / Work",
    purpose: "Servers, lab systems, NAS, documentation, testing, learning, and secure remote access.",
    access: "VPN or trusted internal admin path only; YubiKey MFA required for administrative access.",
  },
  {
    name: "Kids / School",
    purpose: "Schoolwork, education sites, approved learning tools, and age-appropriate internet access.",
    access: "Allowlist-first DNS policy. Alternate DNS and encrypted DNS bypass attempts blocked where practical.",
  },
  {
    name: "IoT / Media",
    purpose: "Home automation, cameras, TVs, streaming devices, printers, and low-trust smart devices.",
    access: "Internet-only by default; local exceptions allowed only for approved controllers or casting paths.",
  },
  {
    name: "Gaming",
    purpose: "Consoles, game PCs, and entertainment traffic separated from private devices and lab systems.",
    access: "Internet-focused access. No default path to trusted, management, kids, guest, or lab VLANs.",
  },
  {
    name: "Guest",
    purpose: "Visitor internet access with no visibility into household systems.",
    access: "Captive portal acceptance, client isolation, bandwidth limits, and internet-only firewall rules.",
  },
];

const controls = [
  ["NIST CSF Govern", "Household security policy, acceptable use, risk decisions, and maintenance ownership."],
  ["NIST CSF Identify", "Asset inventory, VLAN classification, data locations, device ownership, and dependency mapping."],
  ["NIST CSF Protect", "MFA, segmented VLANs, encrypted DNS, secure configurations, patching, and access control."],
  ["NIST CSF Detect", "Firewall logs, DNS events, device health, failed login review, and service exposure checks."],
  ["NIST CSF Respond", "Contain affected VLAN, revoke credentials, rotate secrets, isolate device, document actions."],
  ["NIST CSF Recover", "Restore known-good backups, reapply configurations, validate DNS/firewall policies, review lessons learned."],
];

export default function HomeNetworkCaseStudy() {
  return (
    <main className="hn-shell">
      <section className="hn-hero">
        <p className="hn-eyebrow">Portfolio Case Study</p>
        <h1>Standards-Aligned Home Network Security Architecture</h1>
        <p>
          A non-commercial home lab designed around the CIA triad, NIST CSF, selected NIST SP 800-53 controls,
          and CIS device-hardening practices. The design uses segmented VLANs, default-deny inter-zone policy,
          encrypted DNS, YubiKey-enabled MFA, captive guest access, and lightweight operational maintenance.
        </p>
      </section>

      <section className="hn-diagram" aria-label="Home network architecture wireframe">
        <div className="hn-flow">
          <span>Internet</span>
          <span>Modem / ONT</span>
          <span>Firewall / Router</span>
          <span>Managed Core Switch</span>
          <span>Access Points</span>
        </div>
        <div className="hn-default-deny">Default deny between VLANs. Explicit allow rules only.</div>
        <div className="hn-zones">
          {zones.map((zone) => (
            <article className="hn-zone" key={zone.name}>
              <h3>{zone.name}</h3>
              <p>{zone.purpose}</p>
              <strong>{zone.access}</strong>
            </article>
          ))}
        </div>
      </section>

      <section className="hn-grid-two">
        <article className="hn-card">
          <h2>Security Model</h2>
          <ul>
            <li>Every VLAN is treated as a separate trust boundary.</li>
            <li>Administrative access requires approved device path plus YubiKey MFA.</li>
            <li>Guest access uses captive portal acceptance and client isolation.</li>
            <li>Kids/school access uses allowlist-first DNS for school and education resources.</li>
            <li>IoT and media devices remain isolated from trusted, management, and lab networks.</li>
            <li>SSID broadcast is disabled where practical, but never treated as a primary security control.</li>
          </ul>
        </article>

        <article className="hn-card">
          <h2>Operational Maintenance</h2>
          <ul>
            <li>Monthly reboot of router, switches, access points, and lab hardware.</li>
            <li>Monthly UPS battery exercise by running critical network equipment from backup power.</li>
            <li>Regular firmware and patch research before updating devices.</li>
            <li>Configuration backups after meaningful changes.</li>
            <li>Lightweight change log instead of heavy enterprise templates.</li>
          </ul>
        </article>
      </section>

      <section className="hn-card">
        <h2>Framework Crosswalk</h2>
        <div className="hn-control-list">
          {controls.map(([framework, example]) => (
            <div className="hn-control" key={framework}>
              <span>{framework}</span>
              <p>{example}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
