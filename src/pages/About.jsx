"use client";

import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import profileImage from "../assets/profile.jpg";

const sections = [
  {
    title: "Foundation",
    content: (
      <>
        <p>
          My path into Information Technology did not begin in a classroom or a lab—it began in the field, building from the ground up.
        </p>
        <p>
          While attending Northern Arizona University as an undergraduate student of Business Administration and Construction Management, I built my first home as an owner-builder. That experience was more than a project—it was a proving ground for discipline, accountability, and systems thinking under real-world constraints.
        </p>
        <p>
          In 2004, I took that foundation and launched my own construction company, building it from the ground up into a fully operational business.
        </p>
      </>
    ),
  },
  {
    title: "Systems Thinking",
    content: (
      <>
        <p>
          Construction at scale is not just about building structures—it is about building systems. Coordinating teams, managing timelines, controlling risk, and ensuring consistency required structured processes and constant optimization.
        </p>
        <p>
          Over time, I began to recognize that these same principles applied beyond physical environments.
        </p>
      </>
    ),
  },
  {
    title: "Inflection Point",
    content: (
      <>
        <p>
          My transition into Information Technology was not abrupt—it was a natural progression. Working in a high-volume operational environment supporting over a thousand users, I became increasingly focused on the systems that enabled scale.
        </p>
        <p>
          Troubleshooting, access control, and operational continuity became core areas of focus.
        </p>
      </>
    ),
  },
  {
    title: "Current Focus",
    content: (
      <>
        <p>
          Today, my focus is on building secure, resilient, and scalable systems. I am actively advancing my formal education in Information Technology while expanding hands-on expertise in networking, infrastructure, and security.
        </p>
        <p>
          My approach prioritizes reliability, operational integrity, and long-term sustainability.
        </p>
      </>
    ),
  },
  {
    title: "Perspective",
    content: (
      <>
        <p>
          What began as building physical structures has evolved into building digital systems—but the mindset remains the same.
        </p>
        <p>
          I approach technology as an operator, a builder, and a systems thinker—focused on solutions that are secure, intentional, and designed to scale.
        </p>
      </>
    ),
  },
];

const About = () => {
  return (
    <section className="min-h-screen bg-[#0f111a] text-white px-6 pt-28 pb-20">
      <div className="max-w-4xl mx-auto">

        {/* HEADER + IMAGE */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <div className="flex flex-col md:flex-row gap-10 items-start">

            {/* TEXT */}
            <div className="flex-1">
              <p className="text-sm tracking-[0.25em] text-gray-400 mb-4 uppercase">
                Professional Journey
              </p>

              <h1 className="text-4xl md:text-5xl font-semibold text-[var(--seal-gold)] mb-6 leading-tight">
                Built from the Ground Up — From Structures to Systems
              </h1>

              <p className="text-lg text-gray-300 leading-relaxed">
                I build secure, resilient systems with the mindset of an operator,
                the discipline of a builder, and the long-view thinking of a business owner.
              </p>
            </div>

            {/* IMAGE */}
            <div className="w-40 h-40 md:w-48 md:h-48 flex-shrink-0">
              <div className="w-full h-full rounded-xl overflow-hidden border border-gray-700 shadow-lg">
                <img
                  src={profileImage}
                  alt="Nick Coury portrait"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition duration-500 select-none pointer-events-auto"
                  loading="lazy"
                  draggable="false"
                  onContextMenu={(e) => e.preventDefault()}
                  onDragStart={(e) => e.preventDefault()}
                />
              </div>
            </div>

          </div>
        </motion.div>

        {/* CONTENT SECTIONS */}
        {sections.map((section, index) => (
          <motion.div
            key={section.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            viewport={{ once: true }}
            className="mb-12 border-b border-gray-800 pb-8"
          >
            <h2 className="text-xl font-semibold text-white mb-4">
              {section.title}
            </h2>

            <div className="text-gray-300 leading-7 space-y-4">
              {section.content}
            </div>
          </motion.div>
        ))}
        
        {/* FOOTER */}
        <footer className="mt-16 text-center text-xs text-gray-500 tracking-wider">
          © {new Date().getFullYear()} Nick Coury — All Rights Reserved
          <div className="mt-2 text-gray-600">
          </div>
        </footer>

      </div>
    </section>
  );
};

export default About;