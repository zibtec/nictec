"use client";

import React from "react";
import { motion } from "framer-motion";

const timeline = [
  {
    title: "Foundation",
    content: (
      <>
        <p className="mb-4">
          My path into Information Technology was not traditional—it was built through real-world 
          problem solving, operational experience, and a growing passion for secure, reliable systems.
        </p>
        <p>
          For over two decades, my professional background focused on business operations, construction, 
          and real estate. Technology was always present, but it wasn’t the primary focus—until I began 
          working in a high-volume operational environment supporting over a thousand users at a time.
        </p>
      </>
    ),
  },
  {
    title: "Inflection Point",
    content: (
      <p>
        While working as a Process Assistant, I became increasingly involved in resolving technical 
        issues at the workstation level. By identifying and resolving common problems directly, I was 
        able to reduce delays, assist users in real time, and minimize the need for escalations. 
        These small, consistent improvements sparked a deeper interest in IT support, systems, and 
        infrastructure.
      </p>
    ),
  },
  {
    title: "Catalyst",
    content: (
      <p>
        At the same time, global events in 2020 introduced a new challenge—transitioning everyday life, 
        including education, into the home. This required a complete shift in how I approached networking, 
        performance, and security. What began as a need to improve connectivity quickly evolved into 
        designing a structured, secure environment capable of supporting multiple users and devices.
      </p>
    ),
  },
  {
    title: "Expansion",
    content: (
      <>
        <p className="mb-4">
          I began building a home lab environment that mirrored enterprise design principles—segmenting 
          networks, controlling access, and improving visibility across systems.
        </p>
        <p>
          As the environment matured, I expanded into layered security controls, including DNS-level 
          filtering for content governance and hardware-based authentication for identity protection. 
          What started as a practical solution evolved into a structured architecture aligned with 
          real-world security practices.
        </p>
      </>
    ),
  },
  {
    title: "Formalization",
    content: (
      <p>
        This hands-on experience ultimately led me to formally pursue Information Technology through 
        higher education, where I am currently advancing my knowledge in systems, networking, and security 
        at both the undergraduate and graduate levels.
      </p>
    ),
  },
  {
    title: "Present Direction",
    content: (
      <p>
        Today, I focus on building secure, scalable systems while continuously learning and aligning 
        with modern frameworks and best practices. My approach is simple: understand the problem, 
        design with intention, and implement solutions that are both practical and resilient.
      </p>
    ),
  },
];

const About = () => {
  return (
    <section id="about" className="py-24 px-6 max-w-4xl mx-auto">

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-20"
      >
        <h1 className="text-4xl font-bold mb-4">About</h1>
        <p className="text-gray-400 max-w-xl">
          A progression shaped by real-world execution, operational leadership, 
          and a commitment to building secure, scalable systems.
        </p>
      </motion.div>

      {/* Timeline */}
      <div className="relative border-l border-gray-700 pl-8 space-y-16">

        {timeline.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="relative group"
          >

            {/* Timeline Dot */}
            <div className="absolute -left-[34px] top-2 w-4 h-4 bg-amber-400 rounded-full 
                            group-hover:scale-125 transition-transform duration-300" />

            {/* Card */}
            <div className="bg-[#0f172a] p-6 rounded-xl border border-gray-800 
                            hover:border-amber-400 transition-all duration-300 
                            hover:translate-x-1 hover:shadow-[0_0_25px_rgba(255,215,0,0.08)]">

              <h2 className="text-xl font-semibold mb-3">{item.title}</h2>

              <div className="text-gray-400 leading-relaxed">
                {item.content}
              </div>

            </div>
          </motion.div>
        ))}

      </div>

      {/* Closing */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mt-24 text-center"
      >
        <p className="text-gray-500 max-w-xl mx-auto">
          What began as solving practical problems has evolved into building systems 
          that are secure, intentional, and designed to scale.
        </p>
      </motion.div>

    </section>
  );
};

export default About;