import React from "react";

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
    year: "2025",
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

export default function HomeLab() {
  return React.createElement(
    "section",
    { className: "mt-20" },
    React.createElement(
      "h2",
      { className: "font-display text-3xl font-bold text-[var(--ethereal-ivory)] md:text-4xl" },
      "Home Lab"
    ),
    React.createElement(
      "div",
      { className: "project-grid mt-8" },
      projects.map(({ number, title, year, text, accent }) =>
        React.createElement(
          "article",
          { key: title, className: `project-card project-card-${accent}` },
          React.createElement(
            "div",
            { className: "project-card-top" },
            React.createElement("span", null, number)
          ),
          React.createElement("h3", null, title),
          React.createElement("p", null, text),
          React.createElement("small", null, year)
        )
      )
    )
  );
}
