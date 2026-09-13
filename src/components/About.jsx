import React, { useState } from "react";
import {
  ArrowUpRight,
  Zap,
  Shield,
  Swords,
  Terminal,
  Brain,
  FileCheck2,
  Cpu,
  Layers,
} from "lucide-react";
import { motion } from "framer-motion";
import { soundFX } from "../utils/soundEffects";
import { PROFILE } from "../data/profile";
import DsaSpotlightModal from "./DsaSpotlightModal";

const About = ({
  onOpenStatus,
  onOpenRecruiterBrief,
  onOpenSimulator,
  onOpenArchitecture,
}) => {
  const [ariseActive, setAriseActive] = useState(false);
  const [dsaModalOpen, setDsaModalOpen] = useState(false);

  const resumeUrl = PROFILE.resumeUrl;

  const techStack = [
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "TypeScript",
    "Three.js",
    "Tailwind CSS",
    "Next.js",
    "AI & LLMs",
    "Docker",
    "REST APIs",
    "Socket.io",
  ];

  const handleArise = () => {
    soundFX.playArise();
    setAriseActive(true);
    setTimeout(() => {
      setAriseActive(false);
    }, 1800);
  };

  return (
    <section
      id="about"
      className="relative overflow-hidden py-1 sm:py-3 px-1 sm:px-3 flex items-center"
    >
      {/* ARISE Screen Flash & Shadow Resonance Effect */}
      {ariseActive && (
        <div className="fixed inset-0 z-50 pointer-events-none flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: [0, 0.85, 0], scale: [0.8, 1.3, 2] }}
            transition={{ duration: 1.6, ease: "easeOut" }}
            className="absolute inset-0 bg-gradient-to-t from-violet-950/80 via-cyan-900/50 to-purple-950/90 mix-blend-screen"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.5, letterSpacing: "0.2em" }}
            animate={{
              opacity: [0, 1, 1, 0],
              scale: [0.5, 1.1, 1.2, 1.5],
              letterSpacing: ["0.2em", "0.6em", "0.8em"],
            }}
            transition={{ duration: 1.6 }}
            className="relative font-['Cinzel',serif] text-3xl sm:text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-white to-violet-500 drop-shadow-[0_0_35px_rgba(0,240,255,0.9)] select-none text-center"
          >
            ARISE
            <span className="block text-xs sm:text-xl font-mono text-cyan-300 tracking-widest mt-1.5 font-normal">
              일어서라 • SHADOW MONARCH DOMAIN
            </span>
          </motion.div>
        </div>
      )}

      {/* Ambient Glows */}
      <div className="absolute left-0 top-1/4 h-64 w-64 rounded-full bg-cyan-500/10 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-6 right-0 h-72 w-72 rounded-full bg-violet-600/10 blur-[150px] pointer-events-none" />

      <div className="relative mx-auto max-w-6xl w-full">
        <div className="grid items-center gap-5 sm:gap-6 lg:gap-8 lg:grid-cols-12">

          {/* LEFT CONTENT (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 text-center lg:text-left"
          >
            {/* Solo Leveling Hunter Tag Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-white/70 dark:bg-[#12141c]/90 px-3 py-1 shadow-sm backdrop-blur-xl">
              <span className="flex h-2 w-2 rounded-full bg-cyan-400 animate-ping" />
              <span className="text-[10px] sm:text-[11px] font-mono font-bold tracking-widest text-cyan-600 dark:text-cyan-300 uppercase">
                [ S-RANK SYSTEM ARCHITECT // AWAKENED ]
              </span>
            </div>

            {/* Main Headline (Refined Proportion: 2xl to 5xl instead of 7xl) */}
            <h2 className="mt-2.5 sm:mt-3 text-2xl sm:text-3xl md:text-4xl lg:text-[44px] font-black leading-[1.12] text-slate-950 dark:text-[#f8fafc] font-['Rajdhani',sans-serif] tracking-tight">
              Architecting{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(6,182,212,0.35)]">
                Scalable Digital
              </span>
              <br />
              Kingdoms with Code
            </h2>

            {/* Intro paragraph (Calibrated size: text-xs to text-sm) */}
            <p className="mt-2 sm:mt-3 text-xs sm:text-sm md:text-[14.5px] text-slate-700 dark:text-slate-300 leading-relaxed max-w-xl mx-auto lg:mx-0">
              I'm <span className="text-cyan-600 dark:text-cyan-400 font-bold">Govind Sharma</span>, a Full-Stack Engineer with production experience shipping real-time web systems, scalable REST/WebSocket APIs, and optimized databases. Shipped 6+ production platforms backed by 2,000+ algorithmic solutions and -35% query latency speedups.
            </p>

            {/* Sub-text */}
            <p className="mt-1 text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 font-mono">
              Specialized in Node/Express micro-architectures, 60 FPS React UX, and MongoDB compound B-Trees.
            </p>

            {/* Awakened Runes / Tech Stack Chips */}
            <div className="mt-3 flex flex-wrap justify-center lg:justify-start gap-1 sm:gap-1.5 max-w-xl">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  onMouseEnter={() => soundFX.playHover()}
                  className="rounded-md border border-slate-300/70 dark:border-white/10 bg-white/70 dark:bg-[#12141c]/80 px-2 py-0.5 text-[10.5px] sm:text-[11px] font-mono font-medium text-slate-800 dark:text-slate-200 hover:border-cyan-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition cursor-default backdrop-blur-md"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Proof-of-Work Interactive Badges */}
            <div className="mt-3 flex flex-wrap items-center justify-center lg:justify-start gap-1.5">
              <button
                onClick={() => {
                  soundFX.playClick();
                  if (onOpenSimulator) onOpenSimulator();
                }}
                onMouseEnter={() => soundFX.playHover()}
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] sm:text-[10.5px] font-mono font-bold bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-700 dark:text-cyan-300 border border-cyan-500/30 transition active:scale-95 shadow-xs"
              >
                <Cpu size={11} className="text-cyan-500" />
                <span>Architecture Lab Simulator &rarr;</span>
              </button>
              <button
                onClick={() => {
                  soundFX.playClick();
                  if (onOpenArchitecture) onOpenArchitecture();
                }}
                onMouseEnter={() => soundFX.playHover()}
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] sm:text-[10.5px] font-mono font-bold bg-violet-500/10 hover:bg-violet-500/20 text-violet-700 dark:text-violet-300 border border-violet-500/30 transition active:scale-95 shadow-xs"
              >
                <Layers size={11} className="text-violet-500" />
                <span>System Blueprints &rarr;</span>
              </button>
            </div>

            {/* Primary Action Buttons (Crisp, Compact, Not Clunky) */}
            <div className="mt-4 flex flex-wrap items-center justify-center lg:justify-start gap-2">
              {/* ARISE Button */}
              <button
                onClick={handleArise}
                onMouseEnter={() => soundFX.playHover()}
                className="group relative inline-flex items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-500 p-[1.5px] font-mono font-bold shadow-md hover:shadow-cyan-500/30 transition hover:scale-105 active:scale-95 text-xs sm:text-[13px]"
              >
                <span className="flex items-center justify-center gap-1.5 rounded-[10px] bg-[#0c0d12] px-3.5 sm:px-4 py-2 text-white transition group-hover:bg-opacity-80">
                  <Swords className="h-3.5 w-3.5 text-cyan-400 animate-pulse" />
                  <span>ARISE</span>
                </span>
              </button>

              {/* View Resume Button */}
              <a
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundFX.playClick()}
                onMouseEnter={() => soundFX.playHover()}
                className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-violet-600 px-3.5 sm:px-4 py-2 text-xs sm:text-[13px] font-bold text-white shadow-md hover:shadow-cyan-500/30 hover:scale-105 transition"
              >
                <span>Resume (PDF)</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>

              {/* 1-Click Recruiter Brief */}
              <button
                onClick={() => {
                  soundFX.playLevelUp();
                  if (onOpenRecruiterBrief) onOpenRecruiterBrief();
                }}
                onMouseEnter={() => soundFX.playHover()}
                className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-emerald-500/15 hover:bg-emerald-500/25 border border-emerald-500/30 text-emerald-700 dark:text-emerald-300 px-3.5 sm:px-4 py-2 text-xs sm:text-[13px] font-mono font-bold transition hover:scale-105 active:scale-95 shadow-xs"
              >
                <FileCheck2 className="h-3.5 w-3.5 text-emerald-500" />
                <span>Recruiter Brief</span>
              </button>

              {/* Hunter Status */}
              <button
                onClick={() => {
                  soundFX.playClick();
                  if (onOpenStatus) onOpenStatus();
                }}
                onMouseEnter={() => soundFX.playHover()}
                className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-slate-300 dark:border-white/10 bg-white/60 dark:bg-[#12141c]/80 px-3 sm:px-3.5 py-2 text-xs sm:text-[13px] font-mono font-bold text-slate-800 dark:text-cyan-300 hover:border-cyan-400 transition hover:scale-105"
              >
                <Zap className="h-3.5 w-3.5 text-cyan-400" />
                <span>Hunter Status</span>
              </button>
            </div>

          </motion.div>

          {/* RIGHT HUNTER PROFILE CARD (Sleek, Compact, Zero Overhead) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-5 relative flex flex-col items-center w-full max-w-sm mx-auto"
          >
            {/* Ambient Glow */}
            <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-violet-600/10 blur-xl pointer-events-none" />

            {/* Clean Hunter Card */}
            <div className="relative w-full rounded-2xl border border-slate-200/80 dark:border-white/10 bg-white/90 dark:bg-[#101218]/95 p-3.5 sm:p-4 shadow-xl backdrop-blur-xl overflow-hidden">
              {/* Header Label */}
              <div className="flex items-center justify-between border-b border-slate-200 dark:border-white/10 pb-2 mb-2.5 font-mono text-[10px] text-cyan-500 dark:text-cyan-400">
                <span className="flex items-center gap-1 font-bold tracking-wider">
                  <Terminal size={11} /> HUNTER DOSSIER
                </span>
                <span className="flex items-center gap-1 font-bold text-emerald-500">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  AVAILABLE
                </span>
              </div>

              {/* Developer Profile Visual */}
              <div className="relative rounded-xl bg-gradient-to-b from-slate-100 to-slate-200/60 dark:from-[#0d0f15] dark:to-[#090a0e] border border-slate-200 dark:border-white/5 p-3 sm:p-3.5 flex flex-col items-center text-center">
                {/* Profile Avatar */}
                <div className="relative mb-2">
                  <div className="h-16 w-16 sm:h-20 sm:w-20 rounded-xl p-0.5 bg-gradient-to-tr from-cyan-500 via-blue-500 to-violet-600 shadow-md">
                    <img
                      src="/github.png"
                      alt="Govind Sharma"
                      className="h-full w-full rounded-[10px] object-cover bg-[#0a0c10]"
                    />
                  </div>
                  <div className="absolute -bottom-1 -right-1 px-1.5 py-0.2 rounded-full bg-cyan-500 text-black font-mono text-[8px] font-black tracking-wider shadow-sm">
                    LV. 100
                  </div>
                </div>

                {/* Name & Title */}
                <h3 className="text-base sm:text-lg font-bold font-['Rajdhani',sans-serif] text-slate-900 dark:text-white tracking-wide">
                  Govind Sharma
                </h3>
                <p className="text-[11px] font-mono text-cyan-600 dark:text-cyan-400 font-bold">
                  Full-Stack Software Engineer
                </p>

                {/* Class Badge */}
                <div className="mt-2 inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-slate-200/80 dark:bg-white/5 border border-slate-300/80 dark:border-white/10 text-[10px] font-mono font-medium text-slate-700 dark:text-slate-300">
                  <Shield size={11} className="text-cyan-400" />
                  <span>S-Rank · Shadow Monarch</span>
                </div>

                {/* Focus Badges */}
                <div className="mt-2 flex flex-wrap justify-center gap-1">
                  {["React & Vite", "Node & Express", "MongoDB", "AI / LLM"].map((pill, idx) => (
                    <span
                      key={idx}
                      className="text-[9.5px] font-mono px-1.5 py-0.5 rounded bg-white dark:bg-[#141722] border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 font-semibold"
                    >
                      {pill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Quantified Production Impact Grid */}
              <div className="mt-2.5 grid grid-cols-2 gap-1.5 text-center font-mono">
                <div
                  onClick={() => {
                    soundFX.playClick();
                    setDsaModalOpen(true);
                  }}
                  onMouseEnter={() => soundFX.playHover()}
                  className="rounded-xl border border-cyan-500/40 dark:border-cyan-400/30 bg-cyan-500/5 dark:bg-[#141720] p-1.5 hover:border-cyan-400 dark:hover:border-cyan-400 hover:shadow-sm transition cursor-pointer group"
                  title="Click to view Algorithmic Mastery Breakdown"
                >
                  <div className="flex items-center justify-center gap-1">
                    <h3 className="text-sm sm:text-base font-black text-cyan-600 dark:text-cyan-300 font-['Rajdhani',sans-serif]">
                      2,000+
                    </h3>
                    <Brain className="w-3 h-3 text-cyan-500 group-hover:scale-125 transition-transform" />
                  </div>
                  <p className="text-[8.5px] text-slate-600 dark:text-slate-400 uppercase font-semibold">
                    DSA Solved (LeetCode)
                  </p>
                  <span className="text-[7.5px] text-cyan-600 dark:text-cyan-400 font-bold block">
                    [View Ledger &rarr;]
                  </span>
                </div>

                <div className="rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-[#141720] p-1.5 hover:border-cyan-400/40 transition">
                  <h3 className="text-sm sm:text-base font-black text-emerald-600 dark:text-emerald-400 font-['Rajdhani',sans-serif]">
                    -35% Latency
                  </h3>
                  <p className="text-[8.5px] text-slate-500 dark:text-slate-400 uppercase font-semibold">
                    DB Indexing Speedup
                  </p>
                </div>

                <div className="rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-[#141720] p-1.5 hover:border-cyan-400/40 transition">
                  <h3 className="text-sm sm:text-base font-black text-violet-600 dark:text-violet-400 font-['Rajdhani',sans-serif]">
                    95+ Score
                  </h3>
                  <p className="text-[8.5px] text-slate-500 dark:text-slate-400 uppercase font-semibold">
                    Lighthouse Speed
                  </p>
                </div>

                <div className="rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-[#141720] p-1.5 hover:border-cyan-400/40 transition">
                  <h3 className="text-sm sm:text-base font-black text-blue-600 dark:text-blue-400 font-['Rajdhani',sans-serif]">
                    &lt;50ms
                  </h3>
                  <p className="text-[8.5px] text-slate-500 dark:text-slate-400 uppercase font-semibold">
                    WebSocket Events
                  </p>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>

      {/* Algorithmic Prowess Ledger Modal */}
      <DsaSpotlightModal
        isOpen={dsaModalOpen}
        onClose={() => setDsaModalOpen(false)}
      />
    </section>
  );
};

export default About;
