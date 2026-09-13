import React from "react";
import { motion } from "framer-motion";
import { Activity, Cpu, Globe, Terminal, Zap, CheckCircle2, ExternalLink } from "lucide-react";
import { soundFX } from "../utils/soundEffects";

const Experience = () => {
  const experiences = [
    {
      company: "Vizon Technolabs",
      role: "Software Developer",
      duration: "Nov 2025 – Present",
      status: "Active System",
      icon: Cpu,
      location: "Remote",
      tech: ["Node.js", "Express.js", "MongoDB", "React.js", "JWT/RBAC", "REST APIs"],
      platforms: [
        { name: "Aarya Foundation", url: "https://aaryagaushala.com/" },
        { name: "Vanividhya", url: "https://www.vanividhya.org/" },
        { name: "SK Foodz", url: "https://skfoodz.in" },
      ],
      points: [
        "Shipped 4 production client platforms with zero downtime from requirements to deployment.",
        "Optimized MongoDB compound indices & aggregation queries, cutting query retrieval latency by 35%.",
        "Engineered scalable RESTful APIs with JWT & role-based access control (RBAC).",
      ],
      impact: "-35% DB Query Latency & 4 Live Client Systems",
    },
    {
      company: "Aerion MedTech",
      role: "Software Development Intern",
      duration: "Aug 2025 – Oct 2025",
      status: "Completed",
      icon: Globe,
      location: "Remote",
      tech: ["React.js", "JavaScript", "Tailwind CSS", "Formspree", "SEO & Cloud"],
      platforms: [
        { name: "Aerion MedTech Platform", url: "https://aerionmedtech.com" },
      ],
      points: [
        "Owned full SDLC from wireframes to cloud hosting with automated client inquiry routing.",
        "Achieved consistent 95+ Google Lighthouse scores across performance, SEO, and accessibility.",
        "Built responsive 60 FPS mobile UI with asset optimization and zero layout shifts.",
      ],
      impact: "95+ Google Lighthouse Score Across All Core Web Vitals",
    },
  ];

  return (
    <section
      id="system-experience"
      className="relative px-1 sm:px-3 py-1 sm:py-2 overflow-hidden"
    >
      {/* Glow Orbs */}
      <div className="absolute top-10 left-10 h-64 w-64 bg-cyan-500/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 h-64 w-64 bg-violet-500/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto relative">

        {/* HEADER */}
        <div className="relative mb-3 sm:mb-4 text-center">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-cyan-500/30 bg-white/70 dark:bg-[#12141c] px-3 py-0.5 text-[10px] font-mono text-cyan-500 dark:text-cyan-400 font-bold mb-1.5">
            <Terminal size={11} />
            <span>[ SYSTEM LOGS // GUILD EXPEDITIONS & PRODUCTION WORK ]</span>
          </div>

          <h2 className="text-xl sm:text-3xl md:text-4xl font-black text-slate-900 dark:text-[#f8fafc] font-['Rajdhani',sans-serif] tracking-tight">
            System Experience &{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 bg-clip-text text-transparent">
              Production Battles
            </span>
          </h2>

          <p className="text-[11px] sm:text-xs text-slate-600 dark:text-slate-400 font-mono mt-1">
            Real-world battlegrounds where enterprise client platforms were architected, optimized, and deployed to production.
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-3 sm:gap-4 lg:gap-5">
          {experiences.map((exp, i) => {
            const Icon = exp.icon;
            const isActive = exp.status === "Active System";

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.1 }}
                onMouseEnter={() => soundFX.playHover()}
                className={`
                  relative rounded-2xl p-3.5 sm:p-4
                  border transition-all duration-300
                  bg-white/85 dark:bg-[#101218]/90
                  backdrop-blur-xl
                  hover:-translate-y-1
                  flex flex-col justify-between
                  ${
                    isActive
                      ? "border-cyan-500/50 shadow-[0_0_20px_rgba(6,182,212,0.15)]"
                      : "border-slate-200 dark:border-white/10"
                  }
                `}
              >
                <div>
                  {/* TOP BAR */}
                  <div className="flex items-start justify-between gap-2 mb-2.5">
                    <div className="flex items-center gap-2.5">
                      <div className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-violet-600 text-white shadow-sm shrink-0">
                        <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
                      </div>
                      <div>
                        <h3 className="font-['Rajdhani',sans-serif] text-base sm:text-lg font-bold text-slate-900 dark:text-white leading-tight">
                          {exp.company}
                        </h3>
                        <p className="text-[11px] font-semibold text-cyan-600 dark:text-cyan-400 font-mono">
                          {exp.role} • <span className="text-slate-400">{exp.location}</span>
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col items-end gap-1 shrink-0">
                      <span
                        className={`text-[9px] font-mono font-bold px-2 py-0.5 rounded-full border ${
                          isActive
                            ? "text-emerald-500 border-emerald-500/40 bg-emerald-500/10 animate-pulse"
                            : "text-cyan-500 border-cyan-500/40 bg-cyan-500/10"
                        }`}
                      >
                        {exp.status}
                      </span>
                      <span className="text-[9.5px] font-mono text-slate-500">
                        {exp.duration}
                      </span>
                    </div>
                  </div>

                  {/* PROVEN IMPACT BADGE */}
                  {exp.impact && (
                    <div className="mb-2.5 p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/25 text-cyan-700 dark:text-cyan-300 font-mono text-[11px] flex items-center gap-1.5">
                      <Zap size={12} className="text-cyan-500 shrink-0 animate-pulse" />
                      <span className="font-bold truncate">{exp.impact}</span>
                    </div>
                  )}

                  {/* CLIENT PLATFORMS SHIPPED */}
                  {exp.platforms && (
                    <div className="mb-2.5 flex flex-wrap items-center gap-1.5">
                      <span className="text-[9px] font-mono text-slate-400 uppercase font-bold">
                        Platforms:
                      </span>
                      {exp.platforms.map((plat, idx) => (
                        plat.url ? (
                          <a
                            key={idx}
                            href={plat.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[9.5px] font-mono px-2 py-0.5 rounded-md bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-600 dark:text-cyan-400 border border-cyan-500/30 inline-flex items-center gap-1 transition"
                          >
                            <span>{plat.name}</span>
                            <ExternalLink size={9} />
                          </a>
                        ) : (
                          <span
                            key={idx}
                            className="text-[9.5px] font-mono px-2 py-0.5 rounded-md bg-slate-100 dark:bg-[#151822] text-slate-400 border border-slate-200 dark:border-white/5"
                          >
                            {plat.name}
                          </span>
                        )
                      ))}
                    </div>
                  )}

                  {/* TECH STACK CHIPS */}
                  <div className="flex flex-wrap gap-1 mb-2.5">
                    {exp.tech.map((t, idx) => (
                      <span
                        key={idx}
                        className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-slate-50 dark:bg-[#141720] text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/5 font-semibold"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* TERMINAL LOG OUTPUT */}
                <div className="rounded-xl bg-slate-900 dark:bg-[#0c0d12] p-2.5 font-mono text-xs text-slate-300 border border-slate-800 dark:border-white/5 space-y-1">
                  <div className="flex items-center gap-1 text-[9px] text-cyan-400 border-b border-white/5 pb-1 font-bold">
                    <Terminal size={10} /> <span>PRODUCTION_RECORD.LOG</span>
                  </div>
                  {exp.points.map((p, idx) => (
                    <div key={idx} className="flex items-start gap-1 leading-snug">
                      <span className="text-cyan-400 select-none font-bold text-[9px]">&gt;</span>
                      <span className="text-slate-300 text-[10px] leading-tight">{p}</span>
                    </div>
                  ))}
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Experience;