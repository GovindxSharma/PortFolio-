import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import projects from "../data/projects";

export default function ProjectsExperience() {
  const featured = projects.filter((p) => p.highlight);
  const all = [...featured, ...projects.filter((p) => !p.highlight)];

  return (
    <section
      id="projects"
      className="relative py-24 px-6 bg-white dark:bg-slate-950 overflow-hidden"
    >
      {/* soft glow background */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/10 blur-[140px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-violet-500/10 blur-[140px] rounded-full" />

      <div className="max-w-5xl mx-auto">

        {/* HEADER */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white">
            Selected Work
          </h2>
          <p className="mt-3 text-slate-500 dark:text-slate-400">
            Real products shipped to production
          </p>
        </div>

        {/* LIST */}
        <div className="space-y-10">

          {all.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="
                group relative flex flex-col md:flex-row md:items-center justify-between
                gap-6 border-b border-slate-200 dark:border-slate-800 pb-8
              "
            >

              {/* hover glow line */}
              <div className="absolute left-0 bottom-0 h-[2px] w-0 bg-gradient-to-r from-cyan-500 to-violet-500 group-hover:w-full transition-all duration-500" />

              {/* LEFT */}
              <div className="flex gap-4 items-start max-w-xl">

                {/* index badge */}
                <div className="
                  mt-1 text-xs font-mono text-slate-500
                  group-hover:text-cyan-500 transition
                ">
                  {String(i + 1).padStart(2, "0")}
                </div>

                <div>
                  <h3 className="
                    text-2xl font-bold text-slate-900 dark:text-white
                    group-hover:text-cyan-500 transition
                  ">
                    {p.title}
                  </h3>

                  <p className="mt-2 text-slate-600 dark:text-slate-400 leading-relaxed">
                    {p.desc}
                  </p>

                  {p.highlight && (
                    <span className="
                      inline-block mt-3 text-xs px-3 py-1 rounded-full
                      bg-cyan-500/10 text-cyan-600 border border-cyan-500/20
                    ">
                      FEATURED
                    </span>
                  )}
                </div>
              </div>

              {/* RIGHT ACTIONS */}
              <div className="flex items-center gap-3 md:opacity-80 group-hover:opacity-100 transition">

                {p.live && p.live !== "Coming Soon" ? (
                  <a
                    href={p.live}
                    target="_blank"
                    className="
                      flex items-center gap-2 px-4 py-2 rounded-lg
                      bg-slate-900 text-white dark:bg-white dark:text-black
                      hover:scale-105 transition
                    "
                  >
                    <FaExternalLinkAlt size={12} />
                    Live
                  </a>
                ) : (
                  <span className="text-xs text-slate-500 px-3 py-2">
                    Coming Soon
                  </span>
                )}

                {p.github ? (
                  <a
                    href={p.github}
                    target="_blank"
                    className="
                      flex items-center gap-2 px-4 py-2 rounded-lg
                      border border-slate-300 dark:border-slate-700
                      hover:border-cyan-500 hover:text-cyan-500
                      transition
                    "
                  >
                    <FaGithub />
                    Code
                  </a>
                ) : (
                  <span className="text-xs text-slate-500">
                    Private
                  </span>
                )}

              </div>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}