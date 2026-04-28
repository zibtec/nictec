import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/legacy.css";

export default function ConvertedHomepage() {
  const [current, setCurrent] = useState("");

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll(".section"));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.15 }
    );

    sections.forEach((s) => observer.observe(s));

    const onScroll = () => {
      let cur = "";
      sections.forEach((section) => {
        const top = section.offsetTop;
        if (window.scrollY >= top - 200) cur = section.getAttribute("id");
      });
      setCurrent(cur);
    };

    window.addEventListener("scroll", onScroll);
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="converted-root">
      <aside className="sidebar">
        <div>
          <h1>Nick Coury</h1>
          <p>IT • Infrastructure • Security</p>

          <nav className="nav-links">
            <a href="#summary" className={current === "summary" ? "active" : ""}>Summary</a>
            <a href="#experience" className={current === "experience" ? "active" : ""}>Experience</a>
            <a href="#initiatives" className={current === "initiatives" ? "active" : ""}>Systems & Data</a>
            <a href="#education" className={current === "education" ? "active" : ""}>Education</a>
          </nav>
        </div>

        <div className="sidebar-footer">
          <p>Tucson, AZ</p>
          <p>
            <a href="mailto:nick@nickcoury.co">Email</a>
          </p>
          <p>
            <a href="https://www.linkedin.com/in/nickacoury" target="_blank" rel="noreferrer">LinkedIn</a>
          </p>
        </div>
      </aside>

      <main className="main">
        <section className="section hero" id="summary">
          <h1>
            20+ Years of Leadership.
            <br />
            Re-engineered for the Digital Age.
          </h1>

          <p className="subheadline">
            IT Operations • Security • Network & Infrastructure • AI Governance • Operational Resilience
          </p>

          <p>
            Information Management and IT professional with 20+ years of experience across construction,
            real estate, and operations. Proven ability to manage systems, maintain data integrity,
            and support high-demand environments.
          </p>

          <p>
            Recently completed a Master’s in Information Technology, with hands-on experience designing
            secure, segmented environments and implementing real-world infrastructure and data solutions.
          </p>
        </section>

        <section className="section" id="experience">
          <h2>Experience</h2>

          <div className="job">
            <h3>Amazon</h3>
            <span>Operations & IT Support | 2019 – 2023</span>
            <ul>
              <li>Reduced downtime 20–30% through rapid system troubleshooting</li>
              <li>Improved system reliability and reduced repeat incidents</li>
              <li>Maintained data integrity across high-volume AWS-integrated systems</li>
            </ul>
          </div>

          <div className="job">
            <h3>Great American Investment Corp.</h3>
            <span>Broker / Network Administrator | 1999 – 2025</span>
            <ul>
              <li>Administered secure systems handling sensitive financial data</li>
              <li>Implemented governance, monitoring, and access control</li>
              <li>Improved data protection and compliance processes</li>
            </ul>
          </div>

          <div className="job">
            <h3>Around the Mountain Builders</h3>
            <span>Founder / IT Manager | 2004 – 2019</span>
            <ul>
              <li>Designed systems for construction and procurement workflows</li>
              <li>Implemented document management and data governance practices</li>
              <li>Led business continuity and disaster recovery strategies</li>
            </ul>
          </div>
        </section>

        <section className="section" id="initiatives">
          <h2>Systems & Data Initiatives</h2>

          <ul className="bullets">
            <li>Architected segmented environments and secure network structures</li>
            <li>Implemented access control, monitoring, and governance frameworks</li>
            <li>Designed infrastructure aligned with resilience and recovery planning</li>
            <li>Built logging and reporting systems for operational visibility</li>
          </ul>
        </section>

        <section className="section" id="education">
          <h2>Education & Certifications</h2>

          <ul className="bullets">
            <li>Master of Science, Information Technology – WGU (2025)</li>
            <li>Bachelor of Science, Information Technology – WGU (2025)</li>
            <li>AWS Certified Cloud Practitioner</li>
            <li>CompTIA Certifications (Network, Security, Project+)</li>
          </ul>
        </section>
      </main>
    </div>
  );
}
