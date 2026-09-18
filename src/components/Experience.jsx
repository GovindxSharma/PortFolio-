import React from "react";
import { motion } from "framer-motion";
import { Activity, Cpu, Globe, Terminal, Zap, CheckCircle2, ExternalLink, Calendar } from "lucide-react";
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
      tech: ["Node.js", "Express.js", "MongoDB", "React.js", "JWT / RBAC", "RESTful APIs", "CI/CD"],
      platforms: [
        { name: "Aarya Foundation", url: "https://aaryagaushala.com/" },
        { name: "Vanividhya", url: "https://www.vanividhya.org/" },
        { name: "SK Foodz", url: "https://skfoodz.in" },
        { name: "CCS Compliance Tracker" },
      ],
      points: [
        "Full-Stack Client Delivery: Engineered and deployed 4 production-grade platforms from scratch, including Aarya Foundation and Vanividhya, streamlining operational workflows.",
        "Full-Cycle Delivery: Spearheaded development for SK Foodz and an internal CCS Compliance Tracker, driving both from requirements gathering to production release.",
        "Backend Architecture & Optimization: Architected scalable RESTful APIs secured with JWT/RBAC access control; optimized MongoDB indexing and aggregation queries, cutting data retrieval latency by 35%.",
        "Enterprise Systems Engineering: Built internal tracking and yard management modules handling real-time logistical updates, multi-user concurrency, and secure data storage.",
      ],
      impact: "Cut database query latency by 35% & delivered 4 live client production platforms with zero downtime.",
    },
    {
      company: "Aerion MedTech",
      role: "Software Development Intern",
      duration: "Aug 2025 – Oct 2025",
      status: "Completed",
      icon: Globe,
      location: "Remote",
      tech: ["React.js", "JavaScript", "Tailwind CSS", "Formspree", "SEO & Cloud Hosting"],
      platforms: [
        { name: "Aerion MedTech Platform", url: "https://aerionmedtech.com" },
      ],
      points: [
        "End-to-End Product Ownership: Owned the software development lifecycle for the company's core web platform from scratch, managing UI/UX design, frontend engineering, backend hosting, and domain deployment.",
        "Performance Optimization: Engineered customized client management tools and asset optimization pipelines, achieving consistent 95+ Google Lighthouse scores across performance, SEO, and accessibility.",
        "Automated Inquiry Capture: Streamlined client inquiry pipelines with automated Formspree webhook integrations for zero-drop conversion.",
      ],
      impact: "Achieved consistent 95+ Google Lighthouse score across all core web vitals.",
    },
  ];

  return (
    <section
      id="system-experience"
      className="relative px-1 sm:px-4 py-3 sm:py-6 overflow-hidden"
    >
      {/* Glow Orbs */}
      <div className="absolute top-10 left-10 h-80 w-80 bg-cyan-500/10 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 h-80 w-80 bg-violet-500/10 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto relative">

        {/* HEADER */}
        <div className="relative mb-4 sm:mb-6 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-white/70 dark:bg-[#12141c] px-3.5 py-1 text-[10px] sm:text-xs font-mono text-cyan-400 font-bold mb-2">
            <Terminal size={12} className="text-cyan-400" />
            <span>[ SYSTEM LOGS // GUILD EXPEDITIONS & PRODUCTION WORK ]</span>
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-slate-900 dark:text-[#f8fafc] font-['Rajdhani',sans-serif] tracking-tight">
            System Experience &{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 bg-clip-text text-transparent">
              Production Battles
            </span>
          </h2>

          <p className="text-xs sm:text-sm md:text-base text-slate-600 dark:text-slate-400 font-mono mt-1 sm:mt-1.5 max-w-2xl mx-auto">
            Real-world battlegrounds where enterprise client platforms were architected, optimized, and deployed to production.
          </p>

          {/* ONLINE BADGE */}
          <div className="mt-2.5 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-[10px] sm:text-xs">
            <Activity className="h-3 w-3 animate-pulse" />
            <span>PRODUCTION ACTIVE // ZERO DOWNTIME</span>
          </div>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
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
                  relative rounded-2xl sm:rounded-3xl p-5 sm:p-6
                  border transition-all duration-300
                  bg-white/85 dark:bg-[#101218]/90
                  backdrop-blur-xl
                  hover:-translate-y-1.5
                  flex flex-col justify-between
                  ${
                    isActive
                      ? "border-cyan-500/50 shadow-[0_0_25px_rgba(6,182,212,0.15)]"
                      : "border-slate-200 dark:border-white/10"
                  }
                `}
              >
                <div>
                  {/* TOP BAR */}
                  <div className="flex items-center justify-between gap-2 mb-3 sm:mb-4">
                    <div className="flex items-center gap-2.5 sm:gap-3">
                      <div className="flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-xl sm:rounded-2xl bg-gradient-to-br from-cyan-500 to-violet-600 text-white shadow-md">
                        <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
                      </div>
                      <div>
                        <h3 className="font-['Rajdhani',sans-serif] text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                          {exp.company}
                        </h3>
                        <p className="text-xs sm:text-sm font-semibold text-cyan-500 dark:text-cyan-400 font-mono">
                          {exp.role} • <span className="text-slate-400">{exp.location}</span>
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
                  <div className="mb-3 inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-slate-100 dark:bg-[#151822] text-[10px] sm:text-[11px] font-mono text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-white/5">
                    <Calendar size={12} className="text-cyan-500 shrink-0" />
                    <span>{exp.duration}</span>
                  </div>

                  {/* PROVEN IMPACT BADGE */}
                  {exp.impact && (
                    <div className="mb-3.5 p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-700 dark:text-cyan-300 font-mono text-xs flex items-start gap-2">
                      <Zap size={14} className="text-cyan-400 shrink-0 mt-0.5 animate-pulse" />
                      <span className="font-semibold">{exp.impact}</span>
                    </div>
                  )}

                  {/* CLIENT PLATFORMS SHIPPED */}
                  {exp.platforms && (
                    <div className="mb-3.5">
                      <span className="text-[10px] font-mono text-slate-400 uppercase font-bold block mb-1.5">
                        Platforms Deployed:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {exp.platforms.map((plat, idx) => (
                          plat.url ? (
                            <a
                              key={idx}
                              href={plat.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-[10px] font-mono px-2.5 py-1 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 inline-flex items-center gap-1 transition"
                            >
                              <span>{plat.name}</span>
                              <ExternalLink size={10} />
                            </a>
                          ) : (
                            <span
                              key={idx}
                              className="text-[10px] font-mono px-2 py-1 rounded-lg bg-slate-100 dark:bg-[#151822] text-slate-400 border border-slate-200 dark:border-white/5"
                            >
                              {plat.name}
                            </span>
                          )
                        ))}
                      </div>
                    </div>
                  )}

                  {/* TECH STACK CHIPS */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {exp.tech.map((t, idx) => (
                      <span
                        key={idx}
                        className="text-[9px] sm:text-[10px] font-mono px-2 py-0.5 rounded bg-slate-50 dark:bg-[#141720] text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/5 font-semibold"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* TERMINAL LOG OUTPUT */}
                <div className="rounded-xl bg-slate-900 dark:bg-[#0c0d12] p-3 sm:p-3.5 font-mono text-xs text-slate-300 border border-slate-800 dark:border-white/5 space-y-1.5 sm:space-y-2 mt-2">
                  <div className="flex items-center gap-1.5 text-[9px] sm:text-[10px] text-cyan-400 border-b border-white/5 pb-1 mb-1.5 font-bold">
                    <Terminal size={11} /> <span>PRODUCTION_RECORD.LOG</span>
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