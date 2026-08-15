import React from "react";
import { motion } from "framer-motion";
import { Activity, Cpu, Globe, Terminal, ShieldCheck, CheckCircle2 } from "lucide-react";
import { soundFX } from "../utils/soundEffects";

const Experience = () => {
  const experiences = [
    {
      company: "Aerion MedTech",
      role: "Software Development Intern",
      duration: "Aug 2025 – Oct 2025",
      status: "Completed",
      icon: Globe,
      tech: ["React.js", "JavaScript", "Tailwind CSS", "Formspree", "SEO & Deploy"],
      points: [
        "Architected and deployed full commercial MedTech production website from scratch.",
        "Engineered responsive UI/UX, cross-browser optimization & cloud production release.",
        "Streamlined client inquiry pipelines with automated Formspree webhook integrations.",
      ],
    },
    {
      company: "Vizon Technolabs",
      role: "Software Developer",
      duration: "Oct 2025 – Present",
      status: "Active System",
      icon: Cpu,
      tech: ["React", "Node.js", "Express", "MongoDB", "REST APIs", "Production CI/CD"],
      points: [
        "Delivered mission-critical enterprise client production systems (booking, compliance, foundational portals).",
        "Orchestrated full lifecycle engineering: client requirement analysis → architecture design → build → automated deployment.",
        "Optimized backend throughput, database indexing, and state management latency.",
      ],
    },
  ];

  return (
    <section
      id="system-experience"
      className="relative px-2 sm:px-6 py-4 sm:py-12 bg-white/70 dark:bg-[#090a0f] overflow-hidden"
    >
      {/* Glow Orbs */}
      <div className="absolute top-10 left-10 h-80 w-80 bg-cyan-500/10 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 h-80 w-80 bg-violet-500/10 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto relative">

        {/* HEADER */}
        <div className="relative mb-6 sm:mb-12 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-white/70 dark:bg-[#12141c] px-3.5 py-1 text-[10px] sm:text-xs font-mono text-cyan-400 font-bold mb-2 sm:mb-3">
            <Terminal size={12} className="text-cyan-400" />
            <span>[ SYSTEM LOGS // GUILD EXPEDITIONS ]</span>
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-slate-900 dark:text-[#f8fafc] font-['Rajdhani',sans-serif] tracking-tight">
            System Experience &{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 bg-clip-text text-transparent">
              Guild Battles
            </span>
          </h2>

          <p className="text-xs sm:text-base text-slate-600 dark:text-slate-400 font-mono mt-1 sm:mt-2">
            Real-world battlefields where mission-critical web applications were forged and deployed.
          </p>

          {/* ONLINE BADGE */}
          <div className="mt-3 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-[10px] sm:text-xs">
            <Activity className="h-3 w-3 animate-pulse" />
            <span>ALL SYSTEMS OPERATIONAL</span>
          </div>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          {experiences.map((exp, i) => {
            const Icon = exp.icon;
            const isActive = exp.status === "Active System";

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                onMouseEnter={() => soundFX.playHover()}
                className={`
                  relative rounded-2xl sm:rounded-3xl p-4 sm:p-7
                  border transition-all duration-300
                  bg-white/80 dark:bg-[#101218]/90
                  backdrop-blur-xl
                  hover:-translate-y-1
                  ${
                    isActive
                      ? "border-cyan-500/50 shadow-[0_0_25px_rgba(6,182,212,0.15)]"
                      : "border-slate-200 dark:border-white/10"
                  }
                `}
              >
                {/* TOP BAR */}
                <div className="flex items-center justify-between gap-2 mb-3 sm:mb-4">
                  <div className="flex items-center gap-2.5 sm:gap-3">
                    <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl sm:rounded-2xl bg-gradient-to-br from-cyan-500 to-violet-600 text-white shadow-md">
                      <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
                    </div>
                    <div>
                      <h3 className="font-['Rajdhani',sans-serif] text-lg sm:text-2xl font-bold text-slate-900 dark:text-white">
                        {exp.company}
                      </h3>
                      <p className="text-xs sm:text-sm font-semibold text-cyan-400 font-mono">
                        {exp.role}
                      </p>
                    </div>
                  </div>

                  {/* STATUS */}
                  <span
                    className={`text-[9px] sm:text-[11px] font-mono font-bold px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full border ${
                      isActive
                        ? "text-emerald-400 border-emerald-500/40 bg-emerald-500/10 animate-pulse"
                        : "text-cyan-400 border-cyan-500/40 bg-cyan-500/10"
                    }`}
                  >
                    {exp.status}
                  </span>
                </div>

                {/* DURATION BADGE */}
                <div className="mb-3 inline-block px-2.5 py-0.5 rounded-md bg-slate-100 dark:bg-[#151822] text-[10px] sm:text-[11px] font-mono text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-white/5">
                  🗓️ {exp.duration}
                </div>

                {/* TECH STACK CHIPS */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {exp.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="text-[9px] sm:text-[10px] font-mono px-2 py-0.5 rounded bg-slate-50 dark:bg-[#141720] text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/5"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* TERMINAL LOG OUTPUT */}
                <div className="rounded-xl bg-slate-900 dark:bg-[#0c0d12] p-3 sm:p-3.5 font-mono text-xs text-slate-300 border border-slate-800 dark:border-white/5 space-y-1.5 sm:space-y-2">
                  <div className="flex items-center gap-1.5 text-[9px] sm:text-[10px] text-cyan-400 border-b border-white/5 pb-1 mb-1.5">
                    <Terminal size={10} /> <span>EXECUTION_LOG.SH</span>
                  </div>
                  {exp.points.map((p, idx) => (
                    <div key={idx} className="flex items-start gap-1.5 leading-relaxed">
                      <span className="text-cyan-400 select-none font-bold text-[10px] sm:text-xs">&gt;</span>
                      <span className="text-slate-300 text-[10px] sm:text-[11px]">{p}</span>
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