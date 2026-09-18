import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";
import { ShieldAlert, Sparkles, CheckCircle2, ChevronRight, Award, Calendar } from "lucide-react";
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
  const currentFloor = educationData[0];
  const clearedFloors = educationData.slice(1);

  return (
    <section
      id="education"
      className="relative py-2 sm:py-4 px-1 sm:px-4 overflow-hidden"
    >
      {/* Glow Orbs */}
      <div className="absolute top-0 left-0 w-[450px] h-[450px] bg-cyan-500/10 blur-[170px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-violet-500/10 blur-[170px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto relative">

        {/* HEADER */}
        <div className="text-center mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-white/70 dark:bg-[#12141c] px-3.5 py-1 text-xs font-mono text-cyan-400 font-bold mb-2.5">
            <Award size={13} className="text-cyan-400" />
            <span>[ DUNGEON ASCENSION // KNOWLEDGE ARCHIVE ]</span>
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-slate-900 dark:text-[#f8fafc] font-['Rajdhani',sans-serif] tracking-tight">
            Dungeon Floor{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 bg-clip-text text-transparent">
              Clearance & Journey
            </span>
          </h2>

          <p className="text-slate-600 dark:text-slate-400 mt-1.5 text-xs sm:text-sm font-mono max-w-2xl mx-auto">
            A structured evolution of computer science, algorithmic intellect, and engineering foundations.
          </p>
        </div>

        {/* SMART 2-COLUMN DESKTOP GRID */}
        <div className="grid lg:grid-cols-12 gap-5 sm:gap-6 items-stretch">

          {/* LEFT: CURRENT SUMMIT HERO CARD (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            onMouseEnter={() => soundFX.playHover()}
            className="lg:col-span-5 h-full flex flex-col justify-between rounded-3xl border border-cyan-400/70 p-6 sm:p-7 bg-white/90 dark:bg-[#101218]/95 shadow-[0_0_30px_rgba(6,182,212,0.22)] backdrop-blur-2xl relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-400/10 rounded-full blur-[70px] pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="inline-flex items-center gap-1.5 text-xs font-mono font-black px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-400 border border-cyan-400/50 shadow-[0_0_12px_rgba(6,182,212,0.4)]">
                  <Sparkles size={13} className="animate-spin" style={{ animationDuration: "4s" }} />
                  {currentFloor.floor}
                </span>

                <span className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-400 font-bold">
                  <Calendar size={13} className="text-cyan-400" />
                  <span>{currentFloor.subtitle}</span>
                </span>
              </div>

              <div className="flex items-center gap-3.5 mb-3">
                <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-cyan-400 to-violet-600 text-white flex items-center justify-center shadow-lg shadow-cyan-500/30 shrink-0">
                  <FaGraduationCap size={22} />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold font-['Rajdhani',sans-serif] text-slate-900 dark:text-white leading-tight">
                    {currentFloor.title}
                  </h3>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-sans mt-3">
                {currentFloor.desc}
              </p>
            </div>

            <div className="mt-5 pt-4 border-t border-slate-200 dark:border-white/10">
              <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-wider block mb-2 font-bold">
                CORE AWAKENED SKILLS:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {currentFloor.skills.map((s, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-mono px-2.5 py-1 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 font-semibold"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* RIGHT: 4 CLEARED FLOORS IN A 2x2 GRID (7 cols) */}
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-3.5 sm:gap-4">
            {clearedFloors.map((edu, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                onMouseEnter={() => soundFX.playHover()}
                className="
                  rounded-2xl border border-slate-200 dark:border-white/10
                  bg-white/85 dark:bg-[#101218]/90 backdrop-blur-xl p-4 sm:p-5
                  hover:border-cyan-400/50 hover:shadow-[0_0_20px_rgba(6,182,212,0.12)]
                  hover:-translate-y-1 transition-all duration-300
                  flex flex-col justify-between group
                "
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-slate-100 dark:bg-[#151822] text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/5">
                      {edu.floor}
                    </span>
                    <span className="text-[11px] font-mono text-slate-400">
                      {edu.subtitle}
                    </span>
                  </div>

                  <h4 className="text-base sm:text-lg font-bold font-['Rajdhani',sans-serif] text-slate-900 dark:text-white group-hover:text-cyan-400 transition-colors leading-tight">
                    {edu.title}
                  </h4>

                  <p className="mt-1.5 text-xs text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-3">
                    {edu.desc}
                  </p>
                </div>

                <div className="mt-3 pt-2.5 border-t border-slate-100 dark:border-white/5 flex flex-wrap gap-1">
                  {edu.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-slate-100 dark:bg-[#141720] text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/5"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}