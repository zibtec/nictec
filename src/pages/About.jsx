"use client";

import React from "react";
import * as FramerMotion from "framer-motion";

const completedCourses = [
  "MBT2 Technological  Globalization",
  "LZT2 Power, Influence and  Leadership",
  "C498 M.S., Information Technology Management",
  "C927 Operations and Innovation",
  "C929 IT Sourcing and Development in a Global Economy",
  "C928 Financial Management for IT Professionals",
];

const sections = [
  {
    title: "Foundation",
    content: (
      <>
        <p>
          My path into technology did not start behind a screen. It started in
          the field. While studying Business Administration and Construction
          Management at Northern Arizona University, I took on the challenge of
          building my first home as an owner-builder.
        </p>
        <p>
          That experience shaped how I think: plan carefully, execute
          deliberately, and take full ownership of outcomes. In 2004, I carried
          that mindset into launching my own construction company, building it
          from the ground up into a fully operational business.
        </p>
      </>
    ),
  },
  {
    title: "A Shift in Focus",
    content: (
      <>
        <p>
          For years, my work revolved around physical structures, but the
          underlying principles were always the same: coordination, systems,
          and problem-solving under real constraints.
        </p>
        <p>
          When the pandemic hit, it created an unexpected inflection point.
          What started as curiosity quickly became a full transition, diving
          into technology not as a hobby, but as a new foundation to build on.
        </p>
      </>
    ),
  },
  {
    title: "Building, Reimagined",
    content: (
      <>
        <p>
          I approached technology the same way I approached construction: by
          building from the ground up. That meant assembling my own systems,
          learning hardware at a granular level, and pushing into modern
          performance standards, most recently completing a PCIe 5-based build
          designed for longevity and scalability.
        </p>
        <p>
          At the same time, I began designing and managing my own network
          environment, segmenting traffic across multiple VLANs to separate IoT
          devices, home systems, work infrastructure, and family use. It became
          less about connectivity, and more about control, security, and
          intentional design.
        </p>
      </>
    ),
  },
  {
    title: "Systems Thinking",
    content: (
      <>
        <p>
          That hands-on work naturally expanded into a deeper focus on systems.
          Supporting large user environments and managing access, reliability,
          and troubleshooting reinforced something I had already learned years
          before: good systems are built, not improvised.
        </p>
        <p>
          Whether physical or digital, the goal is the same: create
          environments that are predictable, resilient, and capable of scaling
          without breaking.
        </p>
      </>
    ),
  },
  {
    title: "Current Focus",
    content: (
      <>
        <p>
          Today, I am continuing to build in a different domain, focusing on
          networking, infrastructure, and security, while advancing my formal
          education in Information Technology.
        </p>
        <p>
          My work is centered on creating systems that are not just functional,
          but dependable, designed with intention, structured for clarity, and
          built to last.
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
          I approach everything with an ownership mindset, as if I am the one
          who has to live with the outcome long after it is delivered. The
          difference now is that the structures I build are not physical. They
          are digital, interconnected, and constantly evolving.
        </p>
        <p>
          Whether I am building infrastructure, designing a network, or solving
          a system issue, the standard is the same: it has to be done right,
          built with purpose, and able to stand on its own without constant
          correction.
        </p>
        <p>
          That means thinking beyond the immediate task, anticipating failure
          points, designing for resilience, and holding a level of quality that
          reflects something I would stand behind personally.
        </p>
        <p>
          Because in the end, the goal is not just to make something work. It
          is to build something that lasts.
        </p>
      </>
    ),
  },
];

const About = () => {
  const [showCourses, setShowCourses] = React.useState(false);

  React.useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  return (
    <section className="min-h-screen bg-[#0f111a] px-6 pt-28 pb-20 text-white">
      <div className="mx-auto max-w-4xl">
        {/* Hero removed per request; page content begins here */}

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

        <FramerMotion.motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: sections.length * 0.05 }}
          viewport={{ once: true }}
          className="mb-12 border-b border-gray-800 pb-8"
        >
          <h2 className="mb-4 text-xl font-semibold text-white">Education</h2>

          <div className="space-y-4 leading-7 text-gray-300">
            <ul className="bullets">
              <li className="flex items-center">
                <span>Master of Science, Information Technology – Western Governors University (May 2025)</span>
                <button
                  type="button"
                  onClick={() => setShowCourses(true)}
                  className="ml-3 italic text-sm text-[var(--seal-gold)]"
                >
                  Courses completed
                </button>
              </li>

              <li className="flex items-center">
                <span>Bachelor of Science, Information Technology – Western Governors University (Sep 2025)</span>
                <button
                  type="button"
                  onClick={() => window.alert('Courses completed')}
                  className="ml-3 italic text-sm text-[var(--seal-gold)]"
                >
                  Courses completed
                </button>
              </li>

              <li>
                Bachelor of Arts, Liberal Studies – Northern Arizona University (Jun 2004)
                <div className="italic text-sm">
                  Focus in Business Administration and an Emphasis in Construction Management
                </div>
              </li>
            </ul>
          </div>
        </FramerMotion.motion.div>

        <footer className="mt-16 text-center text-xs tracking-wider text-[var(--seal-gold)]">
          &copy; {new Date().getFullYear()} Nick Coury - All Rights Reserved
        </footer>
      </div>
    </section>
  );
};

export default About;
