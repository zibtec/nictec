"use client";

import React from "react";
import * as FramerMotion from "framer-motion";
import FloatingSocial from "../components/FloatingSocial";
import profileImage from "../assets/profile.jpg";

const completedCourses = [
  "Technological  Globalization",
  "Power, Influence and  Leadership",
  "M.S., Information Technology Management",
  "Operations and Innovation",
  "IT Sourcing and Development in a Global Economy",
  "Financial Management for IT Professionals",
];

const bachelorCourses = [
  "Project Management",
  "Technical Communication",
  "Information Technology Management",
  "Current and Emerging Technology",
  "Principles of Management",
  "Organizational Behavior and Leadership",
  "Introduction to IT",
  "Network and Security Foundations",
  "Network and Security Applications",
  "Business of IT Applications",
  "Spreadsheets",
  "Scripting and Programmng Foundations",
  "Networks",
  "Linux Foundations",
  "Web Development Applications",
  "User Interface Design",
  "Web Development Foundations",
  "Cloud Foundations",
  "Data Management Applications",
  "Data Management Foundations",
  "B.S. IT Capstone Written Project",
];

const sections = [
  {
    title: "Foundation",
    content: (
      <>
        <p>
          My path into technology did not start behind a screen-it started in
          the field. Shortly after high school, I earned my Arizona real estate
          license, gaining early exposure to contracts, client trust, and
          regulated environments.
        </p>
        <p>
          While studying Business Administration and Construction Management at
          Northern Arizona University, I built my first home in Flagstaff as an
          owner-builder, completing the project in 2003. During this time, I
          also earned my private pilot license, reinforcing discipline,
          preparation, and respect for systems where precision matters.
        </p>
        <p>
          In 2004, I founded my construction company, building from the ground up into a fully operational 
          construction business. This experience shaped my core approach: plan deliberately, execute
          with precision, and take full ownership of outcomes.
        </p>
      </>
    ),
  },
  {
    title: "A Shift in Focus",
    content: (
      <>
        <p>
          For years, my work centered on construction, real estate operations,
          and business systems-environments where quality, compliance, and
          accountability were essential. The underlying principles were
          consistent: coordination, risk management, and problem-solving under
          real constraints.
        </p>
        <p>
          The pandemic created an inflection point that led me to transition
          into technology. What began as curiosity quickly became a focused
          shift into understanding how systems are designed, how they fail, and
          how they can be improved.
        </p>
      </>
    ),
  },
  {
    title: "Building, Reimagined",
    content: (
      <>
        <p>
          I approached technology the same way I approached construction-by
          building from the ground up. This included assembling systems,
          working directly with hardware, and developing a deep understanding
          of performance, reliability, and scalability.
        </p>
        <p>
          I designed and managed my own network environment, implementing VLAN
          segmentation to separate IoT devices, home systems, work
          infrastructure, and user environments. This evolved into a broader
          focus on control, security, and intentional system design,
          incorporating DNS management, VPN access, remote storage, and
          cloud-connected environments.
        </p>
      </>
    ),
  },
  {
    title: "Systems Thinking",
    content: (
      <>
        <p>
          Supporting large-scale, technology-driven environments reinforced a
          principle I had learned years earlier: effective systems are built,
          not improvised.
        </p>
        <p>
          While working at Amazon, I operated within a high-volume environment
          where reliability, access, and rapid issue resolution were critical.
          This experience became the catalyst for my formal transition into
          Information Technology and led me to complete both a Bachelor's and
          Master's degree in IT.
        </p>
        <p>
          Whether physical or digital, the objective remains the same: build
          systems that are resilient, scalable, and dependable.
        </p>
      </>
    ),
  },
  {
    title: "Current Focus",
    content: (
      <>
        <p>
          Today, I am advancing and applying my capabilities in networking,
          infrastructure, and cybersecurity. I actively work with established
          frameworks such as NIST and CIS, while expanding into areas like AI
          risk management and modern security practices.
        </p>
        <p>
          My approach combines structured knowledge with hands-on
          application-focusing on how systems perform, where risks emerge, and
          how they can be secured and improved. I bring a practical,
          operations-driven background to IT environments where uptime,
          security, compliance, and reliability are critical.
        </p>
      </>
    ),
  },
  {
    title: "Perspective",
    content: (
      <>
        <p>The tools have changed, but the mindset has not.</p>
        <p>
          I approach every system with an ownership mindset-designed to
          function reliably, scale effectively, and withstand real-world
          demands. Whether working with infrastructure, networks, or security
          controls, the standard remains consistent: it must be built with
          purpose, executed correctly, and able to stand on its own.
        </p>
        <p>
          Because the goal is not just to make something work-it is to build
          something that lasts.
        </p>
      </>
    ),
  },
];

const About = () => {
  React.useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  return (
    <section
      className="about-page min-h-screen px-6 pt-28 pb-20 text-white"
      onContextMenu={(event) => event.preventDefault()}
    >
      <FloatingSocial />

      <div className="mx-auto max-w-4xl">
        <FramerMotion.motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="about-intro-row"
        >
          <div className="about-intro-copy">
            <h1 className="about-intro-subtitle">
              20+ Years of Leadership. Re-engineered for the Digital Age.
            </h1>
          </div>

          <div className="about-portrait-container">
            <div className="about-portrait-frame" aria-label="Nick Coury portrait">
              <img
                src={profileImage}
                alt="Nick Coury"
                className="about-portrait-image"
                loading="eager"
                draggable="false"
                onDragStart={(event) => event.preventDefault()}
                onContextMenu={(event) => event.preventDefault()}
              />
              <span className="about-portrait-watermark" aria-hidden="true">
                &copy; {new Date().getFullYear()} Nick Coury - All Rights Reserved
              </span>
              <span
                className="about-portrait-shield"
                aria-hidden="true"
                onContextMenu={(event) => event.preventDefault()}
              />
            </div>

            <div className="about-side-education">
              <h2>Education</h2>

              <ul className="bullets">
                <li>
                  <span className="education-degree-line">
                    Master of Science, Information Technology
                  </span>
                  <span className="education-school-line">
                    Western Governors University (May 2025)
                  </span>
                  <span className="courses-hover-wrap">
                    <button
                      type="button"
                      className="courses-hover-trigger ml-3 italic text-sm text-[var(--seal-gold)]"
                      aria-describedby="masters-courses-popover"
                    >
                      Courses Completed
                    </button>

                    <span
                      id="masters-courses-popover"
                      className="courses-hover-popover"
                      role="tooltip"
                    >
                      <span className="courses-hover-title">
                        M.S. Information Technology Management
                      </span>
                      <span className="courses-hover-list">
                        {completedCourses.map((course) => (
                          <span key={course}>{course}</span>
                        ))}
                      </span>
                    </span>
                  </span>
                </li>

                <li>
                  <span className="education-degree-line">
                    Bachelor of Science, Information Technology
                  </span>
                  <span className="education-school-line">
                    Western Governors University (Sep 2025)
                  </span>
                  <span className="courses-hover-wrap">
                    <button
                      type="button"
                      className="courses-hover-trigger ml-3 italic text-sm text-[var(--seal-gold)]"
                      aria-describedby="bachelors-courses-popover"
                    >
                      Courses Completed
                    </button>

                    <span
                      id="bachelors-courses-popover"
                      className="courses-hover-popover courses-hover-popover-wide"
                      role="tooltip"
                    >
                      <span className="courses-hover-title">
                        B.S. Information Technology
                      </span>
                      <span className="courses-hover-list courses-hover-list-two">
                        {bachelorCourses.map((course) => (
                          <span key={course}>{course}</span>
                        ))}
                      </span>
                    </span>
                  </span>
                </li>

                <li>
                  <span className="education-degree-line">
                    Bachelor of Arts, Liberal Studies
                  </span>
                  <span className="education-school-line">
                    Northern Arizona University (Jun 2004)
                  </span>
                  <div className="italic text-sm">
                    Focus in Business Administration and an Emphasis in Construction Management
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </FramerMotion.motion.div>

      </div>

      <div className="mx-auto max-w-4xl">

        {sections.map((section, index) => (
          <FramerMotion.motion.div
            key={section.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            viewport={{ once: true }}
            className="mb-12 border-b border-gray-800 pb-8"
          >
            <h2 className="mb-4 text-xl font-semibold text-white">
              {section.title}
            </h2>

            <div className="space-y-4 leading-7 text-gray-300">
              {section.content}
            </div>
          </FramerMotion.motion.div>
        ))}

        <footer className="mt-16 text-center text-xs tracking-wider text-[var(--seal-gold)]">
          &copy; {new Date().getFullYear()} Nick Coury - All Rights Reserved
        </footer>
      </div>
    </section>
  );
};

export default About;
