import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";
import { Award, CheckCircle2, ChevronRight, Sparkles } from "lucide-react";
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
    desc: "Maharshi Dayanand University. Rigorous foundation in Data Structures, Algorithms, Database Management, and Object-Oriented Software Design.",
    skills: ["DSA in C++", "Database Modeling", "SQL", "OOP"],
    current: false,
  },
  {
    floor: "FLOOR 3 • CLEARED",
    title: "DSA in C++ & MERN Architecture — Coding Ninjas",
    subtitle: "2023",
    desc: "Intensive problem-solving bootcamp. Solved 2,000+ algorithmic challenges across LeetCode & CodeStudio spanning Trees, Graphs, DP & MERN.",
    skills: ["C++", "2,000+ Problems", "Dynamic Programming", "MERN Stack"],
    current: false,
  },
  {
    floor: "FLOOR 2 • CLEARED",
    title: "Adani Public School",
    subtitle: "2018 – 2020",
    desc: "Senior Secondary with core focus in Advanced Mathematics, Physics, Logic & Analytical Problem Solving.",
    skills: ["Mathematics", "Analytical Logic", "Physics"],
    current: false,
  },
  {
    floor: "FLOOR 1 • CLEARED",
    title: "Aga Khan School",
    subtitle: "2006 – 2018",
    desc: "Foundational academic schooling instilling discipline, consistency, and core intellectual curiosity.",
    skills: ["Foundations", "Discipline", "Consistency"],
    current: false,
  },
];

export default function Education() {
  const currentSummit = educationData[0];
  const clearedFloors = educationData.slice(1);

  return (
    <section
      id="education"
      className="relative py-1 sm:py-2 px-1 sm:px-3 overflow-hidden"
    >
      {/* Glow Orbs */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-cyan-500/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-violet-500/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto relative">

        {/* HEADER */}
        <div className="text-center mb-3 sm:mb-4">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-cyan-500/30 bg-white/70 dark:bg-[#12141c] px-3 py-0.5 text-[10px] font-mono text-cyan-500 dark:text-cyan-400 font-bold mb-1">
            <Award size={11} />
            <span>[ DUNGEON ASCENSION // KNOWLEDGE ARCHIVE ]</span>
          </div>

          <h2 className="text-xl sm:text-3xl md:text-4xl font-black text-slate-900 dark:text-[#f8fafc] font-['Rajdhani',sans-serif] tracking-tight">
            Dungeon Floor{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 bg-clip-text text-transparent">
              Clearance & Journey
            </span>
          </h2>

          <p className="text-slate-600 dark:text-slate-400 text-[11px] sm:text-xs font-mono mt-0.5">
            Structured evolution of computer science, algorithmic intellect, and engineering foundations.
          </p>
        </div>

        {/* HERO CARD: CURRENT SUMMIT (FLOOR 5) */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          onMouseEnter={() => soundFX.playHover()}
          className="relative rounded-2xl border border-cyan-500/50 bg-gradient-to-r from-cyan-500/10 via-white dark:via-[#101218] to-violet-600/10 p-3.5 sm:p-4 shadow-lg backdrop-blur-xl mb-3"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 dark:border-white/10 pb-2 mb-2">
            <div className="flex items-center gap-2.5">
              <div className="h-8 w-8 rounded-xl bg-gradient-to-r from-cyan-400 to-violet-600 text-white flex items-center justify-center shadow-md animate-pulse shrink-0">
                <FaGraduationCap className="text-sm" />
              </div>
              <div>
                <span className="text-[10px] font-mono font-bold text-cyan-600 dark:text-cyan-400 uppercase">
                  {currentSummit.floor}
                </span>
                <h3 className="font-['Rajdhani',sans-serif] text-base sm:text-lg font-bold text-slate-900 dark:text-white leading-tight">
                  {currentSummit.title}
                </h3>
              </div>
            </div>
            <span className="text-[10px] font-mono text-slate-500 shrink-0">
              🗓️ {currentSummit.subtitle}
            </span>
          </div>

          <p className="text-[11.5px] text-slate-700 dark:text-slate-300 leading-relaxed font-sans mb-2">
            {currentSummit.desc}
          </p>

          <div className="flex flex-wrap gap-1">
            {currentSummit.skills.map((skill, idx) => (
              <span
                key={idx}
                className="text-[9px] font-mono px-2 py-0.5 rounded-md bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 border border-cyan-500/25 font-semibold"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>

        {/* 2x2 GRID FOR FLOORS 4, 3, 2, 1 */}
        <div className="grid sm:grid-cols-2 gap-2.5">
          {clearedFloors.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              onMouseEnter={() => soundFX.playHover()}
              className="p-3 rounded-xl border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-[#101218]/90 backdrop-blur-xl hover:border-cyan-400/50 transition flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-1 mb-1">
                  <span className="text-[9px] font-mono font-bold px-2 py-0.2 rounded bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-white/5">
                    {edu.floor}
                  </span>
                  <span className="text-[9px] font-mono text-slate-500">
                    {edu.subtitle}
                  </span>
                </div>

                <h4 className="font-['Rajdhani',sans-serif] text-sm font-bold text-slate-900 dark:text-white leading-tight mt-1">
                  {edu.title}
                </h4>

                <p className="text-[10.5px] text-slate-600 dark:text-slate-400 leading-snug mt-1 font-sans">
                  {edu.desc}
                </p>
              </div>

              <div className="flex flex-wrap gap-1 mt-2">
                {edu.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="text-[8.5px] font-mono px-1.5 py-0.2 rounded bg-slate-50 dark:bg-[#141720] text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-white/5"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}