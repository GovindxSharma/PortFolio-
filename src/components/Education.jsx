import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";
import { ShieldAlert, Sparkles, CheckCircle2, ChevronRight, Award } from "lucide-react";
import { soundFX } from "../utils/soundEffects";

const educationData = [
  {
    floor: "FLOOR 5 • CURRENT SUMMIT",
    title: "Master of Computer Applications (MCA) — WCTM",
    subtitle: "Aug 2024 – 2026",
    desc: "World College of Technology and Management, Gurugram (MDU Affiliated). Specializing in Distributed Software Development, Cloud Architecture & Scalable Systems.",
    skills: ["React.js", "Node.js", "Express", "Distributed Systems", "Cloud & Docker"],
    current: true,
  },
  {
    floor: "FLOOR 4 • CLEARED",
    title: "Bachelor of Computer Applications (BCA) — MDU Rohtak",
    subtitle: "2020 – 2023",
    desc: "Maharshi Dayanand University, Rohtak. Rigorous foundation in Data Structures, Algorithms, Database Management, and Object-Oriented Software Design.",
    skills: ["DSA in C++", "Database Modeling", "SQL", "OOP", "System Architecture"],
    current: false,
  },
  {
    floor: "FLOOR 3 • CLEARED",
    title: "DSA in C++ & MERN Architecture — Coding Ninjas",
    subtitle: "2023",
    desc: "Intensive problem-solving bootcamp. Solved 2,000+ algorithmic challenges across LeetCode & CodeStudio spanning Trees, Graphs, Dynamic Programming & MERN engineering.",
    skills: ["C++", "2,000+ Problems", "Dynamic Programming", "MERN Stack", "LeetCode"],
    current: false,
  },
  {
    floor: "FLOOR 2 • CLEARED",
    title: "Adani Public School",
    subtitle: "2018 – 2020",
    desc: "Senior Secondary with core focus in Advanced Mathematics, Physics, Logic & Analytical Problem Solving.",
    skills: ["Analytical Logic", "Mathematics", "Problem Solving", "Science"],
    current: false,
  },
  {
    floor: "FLOOR 1 • CLEARED",
    title: "Aga Khan School",
    subtitle: "2006 – 2018",
    desc: "Foundational academic training instilling discipline, consistency, and core intellectual curiosity.",
    skills: ["Foundations", "Discipline", "Consistency", "Curiosity"],
    current: false,
  },
];

export default function Education() {
  return (
    <section
      id="education"
      className="relative py-12 md:py-20 px-2 sm:px-6 bg-slate-50/60 dark:bg-[#090a0f] overflow-hidden"
    >
      {/* Glow Orbs */}
      <div className="absolute top-0 left-0 w-[450px] h-[450px] bg-cyan-500/10 blur-[170px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-violet-500/10 blur-[170px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto relative">

        {/* HEADER */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-white/70 dark:bg-[#12141c] px-3.5 py-1 text-xs font-mono text-cyan-400 font-bold mb-3">
            <Award size={13} className="text-cyan-400" />
            <span>[ DUNGEON ASCENSION // KNOWLEDGE ARCHIVE ]</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 dark:text-[#f8fafc] font-['Rajdhani',sans-serif] tracking-tight">
            Dungeon Floor{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 bg-clip-text text-transparent">
              Clearance & Journey
            </span>
          </h2>

          <p className="text-slate-600 dark:text-slate-400 mt-2 text-sm sm:text-base font-mono">
            A structured evolution of computer science, algorithmic intellect, and engineering foundations.
          </p>
        </div>

        {/* TIMELINE / ASCENSION PATH */}
        <div className="relative">

          {/* Central / Left Line */}
          <div className="absolute left-4 sm:left-6 top-4 bottom-4 w-[2px] bg-gradient-to-b from-cyan-400 via-blue-500 to-violet-600 opacity-50" />

          <div className="space-y-6 sm:space-y-8">
            {educationData.map((edu, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                onMouseEnter={() => soundFX.playHover()}
                className="relative pl-12 sm:pl-16 group"
              >
                {/* NODE BADGE ON LINE */}
                <div className="absolute left-1.5 sm:left-3.5 top-3 -translate-x-1/2">
                  <div
                    className={`h-7 w-7 sm:h-8 sm:w-8 rounded-full flex items-center justify-center shadow-lg transition-transform group-hover:scale-125 ${
                      edu.current
                        ? "bg-gradient-to-r from-cyan-400 to-violet-600 text-white shadow-[0_0_15px_rgba(6,182,212,0.8)] animate-pulse"
                        : "bg-slate-900 dark:bg-[#12141c] text-cyan-400 border border-cyan-500/40"
                    }`}
                  >
                    <FaGraduationCap className="text-xs sm:text-sm" />
                  </div>

                  {edu.current && (
                    <div className="absolute -inset-1 rounded-full bg-cyan-400/30 animate-ping pointer-events-none" />
                  )}
                </div>

                {/* CONTENT CARD */}
                <div
                  className={`
                    relative rounded-2xl sm:rounded-3xl
                    border p-5 sm:p-6 transition-all duration-300
                    bg-white/90 dark:bg-[#101218]/90 backdrop-blur-xl
                    group-hover:-translate-y-1
                    ${
                      edu.current
                        ? "border-cyan-400/60 shadow-[0_0_25px_rgba(6,182,212,0.2)] group-hover:shadow-[0_0_35px_rgba(6,182,212,0.35)]"
                        : "border-slate-200 dark:border-white/10 group-hover:border-cyan-500/40"
                    }
                  `}
                >
                  {/* Floor Header */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span
                      className={`text-[10px] sm:text-[11px] font-mono font-bold px-2.5 py-0.5 rounded-full border ${
                        edu.current
                          ? "bg-cyan-500/20 text-cyan-400 border-cyan-400/50"
                          : "bg-slate-100 dark:bg-[#151822] text-slate-700 dark:text-slate-300 border-slate-200 dark:border-white/5"
                      }`}
                    >
                      {edu.floor}
                    </span>

                    <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                      📅 {edu.subtitle}
                    </span>
                  </div>

                  {/* Institution Title */}
                  <h3 className="text-lg sm:text-xl font-bold font-['Rajdhani',sans-serif] text-slate-900 dark:text-white group-hover:text-cyan-400 transition-colors">
                    {edu.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {edu.desc}
                  </p>

                  {/* Awakened Skills Pills */}
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-4 pt-3 border-t border-slate-100 dark:border-white/5">
                    {edu.skills.map((s, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-[#141720] text-slate-800 dark:text-slate-300 border border-slate-200 dark:border-white/5 group-hover:border-cyan-400/40 transition"
                      >
                        {s}
                      </span>
                    ))}
                  </div>

                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}