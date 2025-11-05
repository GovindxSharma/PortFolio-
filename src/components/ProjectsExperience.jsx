import React from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import {
  FaGithub,
  FaGlobe,
  FaCodeBranch,
  FaExternalLinkAlt,
} from "react-icons/fa";
import projects from "../data/projects";

const fadeInUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay },
  },
});

export default function ProjectsExperience() {
  const featured = projects.filter((p) => p.highlight);
  const others = projects.filter((p) => !p.highlight);

  return (
    <section
      id="projects"
      className="relative bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white py-24 px-6 md:px-12 lg:px-24 overflow-hidden"
    >
      {/* background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-blue-500/20 blur-[150px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-500/20 blur-[150px] rounded-full" />
      </div>

      {/* header */}
      <motion.div
        variants={fadeInUp(0.2)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative text-center mb-16"
      >
        <p className="text-sm uppercase tracking-widest text-gray-400 mb-2">
          My Work
        </p>
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Projects & Experience
        </h2>
        <p className="mt-3 text-gray-400 max-w-2xl mx-auto">
          A showcase of my best full-stack, frontend, and AI-powered projects
          — built with precision, creativity, and performance in mind.
        </p>
      </motion.div>

      {/* Featured projects */}
      <div className="flex flex-wrap justify-center gap-10 mb-20">
        {featured.map((p, i) => (
          <Tilt key={i} tiltMaxAngleX={10} tiltMaxAngleY={10} scale={1.07}>
            <motion.div
              variants={fadeInUp(i * 0.15 + 0.3)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.04 }}
              className="relative group w-[320px] md:w-[360px] rounded-3xl p-[2px] bg-gradient-to-br from-blue-500/40 to-purple-500/40 hover:from-blue-500/60 hover:to-purple-500/60 transition-all duration-700"
            >
              <div className="rounded-3xl p-7 bg-gray-950/80 backdrop-blur-xl border border-white/10 shadow-2xl group-hover:shadow-blue-500/20 transition-all duration-700">
                <div className="flex flex-col items-start">
                  <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-500 text-white text-2xl mb-4 shadow-lg shadow-blue-500/20">
                    {p.icon || <FaGlobe />}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
                  <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                    {p.desc}
                  </p>
                  <div className="flex justify-between items-center w-full">
                    {p.live && p.live !== "Coming Soon" ? (
                      <a
                        href={p.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 text-sm font-medium rounded-md bg-blue-600/30 hover:bg-blue-600/50 text-blue-200 transition flex items-center gap-2"
                      >
                        <FaExternalLinkAlt size={13} />
                        Live
                      </a>
                    ) : (
                      <span className="px-4 py-2 text-sm rounded-md bg-gray-700/30 text-gray-400 italic">
                        Coming Soon
                      </span>
                    )}

                    {p.github ? (
                      <a
                        href={p.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 flex items-center gap-2 text-sm rounded-md bg-white/10 hover:bg-white/20 text-gray-300 transition"
                      >
                        <FaGithub />
                        Code
                      </a>
                    ) : (
                      <span className="px-4 py-2 text-sm rounded-md bg-gray-700/20 text-gray-500">
                        Private Repo
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </Tilt>
        ))}
      </div>

      {/* Other projects grid */}
      <motion.div
        variants={fadeInUp(0.5)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
      >
        {others.map((p, i) => (
          <Tilt key={i} tiltMaxAngleX={6} tiltMaxAngleY={6} scale={1.03}>
            <motion.div
              whileHover={{ y: -6, scale: 1.02 }}
              className="p-6 rounded-2xl bg-gradient-to-br from-gray-800/40 to-gray-900/40 border border-white/10 backdrop-blur-lg hover:from-blue-600/10 hover:to-purple-600/10 hover:border-blue-500/30 transition-all duration-500"
            >
              <div className="mb-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-500/20 text-blue-300 text-xl shadow-md shadow-blue-500/20">
                  {p.icon || <FaGlobe />}
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-2">{p.title}</h3>
              <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                {p.desc}
              </p>
              <div className="flex justify-between text-sm">
                {p.live && p.live !== "Coming Soon" ? (
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 flex items-center gap-2 rounded-md bg-blue-500/20 hover:bg-blue-500/40 text-blue-300 transition"
                  >
                    <FaExternalLinkAlt size={12} />
                    Live
                  </a>
                ) : (
                  <span className="text-gray-500 italic text-xs bg-gray-700/20 px-3 py-1.5 rounded-md">
                    Coming Soon
                  </span>
                )}

                {p.github ? (
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-white/10 hover:bg-white/20 text-gray-300 transition"
                  >
                    <FaCodeBranch className="text-sm" />
                    Code
                  </a>
                ) : (
                  <span className="text-gray-500 italic text-xs bg-gray-700/20 px-3 py-1.5 rounded-md">
                    Private Repo
                  </span>
                )}
              </div>
            </motion.div>
          </Tilt>
        ))}
      </motion.div>
    </section>
  );
}
