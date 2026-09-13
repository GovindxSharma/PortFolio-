import React, { useState } from "react";
import { ArrowUpRight, Sparkles, Zap, Shield, Swords, Terminal, Download, UserCheck, Brain } from "lucide-react";
import { motion } from "framer-motion";
import { soundFX } from "../utils/soundEffects";
import { PROFILE } from "../data/profile";
import DsaSpotlightModal from "./DsaSpotlightModal";

const About = ({ onOpenStatus }) => {
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
      className="relative overflow-hidden py-3 sm:py-6 px-1 sm:px-4 flex items-center"
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
            animate={{ opacity: [0, 1, 1, 0], scale: [0.5, 1.1, 1.2, 1.5], letterSpacing: ["0.2em", "0.6em", "0.8em"] }}
            transition={{ duration: 1.6 }}
            className="relative font-['Cinzel',serif] text-4xl sm:text-7xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-white to-violet-500 drop-shadow-[0_0_35px_rgba(0,240,255,0.9)] select-none text-center"
          >
            ARISE
            <span className="block text-base sm:text-2xl font-mono text-cyan-300 tracking-widest mt-2 font-normal">
              일어서라 • SHADOW MONARCH DOMAIN
            </span>
          </motion.div>
        </div>
      )}

      {/* Ambient Glows */}
      <div className="absolute left-0 top-1/4 h-80 w-80 rounded-full bg-cyan-500/10 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 h-96 w-96 rounded-full bg-violet-600/10 blur-[170px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl w-full">
        <div className="grid items-center gap-8 lg:gap-14 lg:grid-cols-12">

          {/* LEFT CONTENT (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 text-center lg:text-left"
          >
            {/* Solo Leveling Hunter Tag Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-white/70 dark:bg-[#12141c]/90 px-3.5 py-1.5 shadow-lg backdrop-blur-xl">
              <span className="flex h-2 w-2 rounded-full bg-cyan-400 animate-ping" />
              <span className="text-[10px] sm:text-xs font-mono font-bold tracking-widest text-cyan-500 dark:text-cyan-300 uppercase">
                [ S-RANK SYSTEM ARCHITECT // AWAKENED ]
              </span>
            </div>

            {/* Main Headline */}
            <h2 className="mt-4 sm:mt-5 text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[1.1] text-slate-950 dark:text-[#f8fafc] font-['Rajdhani',sans-serif] tracking-tight">
              Architecting{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(6,182,212,0.4)]">
                Scalable Digital
              </span>
              <br />
              Kingdoms with Code
            </h2>

            {/* Intro paragraph */}
            <p className="mt-4 sm:mt-5 text-sm sm:text-lg md:text-xl text-slate-700 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              I'm <span className="text-cyan-500 dark:text-cyan-400 font-bold">Govind Sharma</span>, a Full-Stack Engineer with production experience building real-time systems, scalable REST/WebSocket APIs, and secure payment workflows. Proven track record of shipping 6+ production platforms with deep algorithmic problem-solving and database optimization.
            </p>

            {/* Sub-text */}
            <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-mono">
              Specialized in high-concurrency Node/Express architectures, 60 FPS React interfaces, and low-latency MongoDB indexing.
            </p>

            {/* Awakened Runes / Tech Stack Chips */}
            <div className="mt-5 flex flex-wrap justify-center lg:justify-start gap-1.5 sm:gap-2 max-w-xl">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  onMouseEnter={() => soundFX.playHover()}
                  className="rounded-lg border border-slate-300/80 dark:border-white/10 bg-white/70 dark:bg-[#12141c]/80 px-2.5 py-1 text-[11px] sm:text-xs font-mono font-medium text-slate-800 dark:text-slate-200 hover:border-cyan-400 hover:text-cyan-400 transition cursor-default backdrop-blur-md"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Primary Action Buttons */}
            <div className="mt-6 sm:mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-2.5 sm:gap-3.5">
              {/* ARISE (일어서라) Button */}
              <button
                onClick={handleArise}
                onMouseEnter={() => soundFX.playHover()}
                className="w-full sm:w-auto group relative inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-500 p-[2px] font-mono font-bold shadow-[0_0_25px_rgba(147,51,234,0.4)] hover:shadow-[0_0_35px_rgba(0,240,255,0.7)] transition hover:scale-105 active:scale-95"
              >
                <span className="w-full flex items-center justify-center gap-2 rounded-[10px] bg-[#0c0d12] px-5 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base text-white transition group-hover:bg-opacity-80">
                  <Swords className="h-4 w-4 text-cyan-400 animate-pulse" />
                  <span>ARISE (일어서라)</span>
                </span>
              </button>

              {/* View Resume Button */}
              <a
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundFX.playClick()}
                onMouseEnter={() => soundFX.playHover()}
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-violet-600 px-5 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base font-bold text-white shadow-lg hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:scale-105 transition"
              >
                <span>View Resume</span>
                <ArrowUpRight className="h-4 w-4" />
              </a>

              {/* Status Window Open */}
              <button
                onClick={() => {
                  soundFX.playClick();
                  if (onOpenStatus) onOpenStatus();
                }}
                onMouseEnter={() => soundFX.playHover()}
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 dark:border-white/10 bg-white/60 dark:bg-[#12141c]/80 px-4 sm:px-5 py-2.5 sm:py-3 text-sm sm:text-base font-mono font-bold text-slate-800 dark:text-cyan-300 hover:border-cyan-400 transition"
              >
                <Zap className="h-4 w-4 text-cyan-400" />
                <span>Hunter Status</span>
              </button>
            </div>
          </motion.div>

          {/* RIGHT HUNTER PROFILE CARD (Plain & Simple, Zero Dizzying 3D) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-5 relative flex flex-col items-center w-full max-w-sm mx-auto"
          >
            {/* Subtle Static Ambient Glow */}
            <div className="absolute -inset-3 rounded-3xl bg-gradient-to-r from-cyan-500/15 via-blue-500/10 to-violet-600/15 blur-2xl pointer-events-none" />

            {/* Clean Hunter Card */}
            <div className="relative w-full rounded-3xl border border-slate-200/80 dark:border-white/10 bg-white/90 dark:bg-[#101218]/95 p-4 sm:p-5 shadow-2xl backdrop-blur-2xl overflow-hidden">
              {/* Header Label */}
              <div className="flex items-center justify-between border-b border-slate-200 dark:border-white/10 pb-2.5 mb-3 font-mono text-[10px] sm:text-[11px] text-cyan-400">
                <span className="flex items-center gap-1.5 font-bold tracking-wider">
                  <Terminal size={12} /> HUNTER DOSSIER
                </span>
                <span className="flex items-center gap-1.5 font-bold text-emerald-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  AVAILABLE
                </span>
              </div>

              {/* Developer Profile Visual (Plain, Clean, Focused) */}
              <div className="relative rounded-2xl bg-gradient-to-b from-slate-100 to-slate-200/70 dark:from-[#0d0f15] dark:to-[#090a0e] border border-slate-200 dark:border-white/5 p-5 flex flex-col items-center text-center">
                {/* Profile Avatar */}
                <div className="relative mb-3">
                  <div className="h-24 w-24 sm:h-28 sm:w-28 rounded-2xl p-1 bg-gradient-to-tr from-cyan-500 via-blue-500 to-violet-600 shadow-[0_0_20px_rgba(6,182,212,0.25)]">
                    <img
                      src="/github.png"
                      alt="Govind Sharma"
                      className="h-full w-full rounded-[14px] object-cover bg-[#0a0c10]"
                    />
                  </div>
                  <div className="absolute -bottom-1 -right-1 px-2 py-0.5 rounded-full bg-cyan-500 text-black font-mono text-[9px] font-black tracking-wider shadow-md">
                    LV. 99
                  </div>
                </div>

                {/* Name & Title */}
                <h3 className="text-xl font-bold font-['Rajdhani',sans-serif] text-slate-900 dark:text-white tracking-wide">
                  Govind Sharma
                </h3>
                <p className="text-xs font-mono text-cyan-600 dark:text-cyan-400 font-bold mt-0.5">
                  Full-Stack Developer & Software Architect
                </p>

                {/* Class Badge */}
                <div className="mt-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-200/80 dark:bg-white/5 border border-slate-300/80 dark:border-white/10 text-[11px] font-mono font-medium text-slate-700 dark:text-slate-300">
                  <Shield size={12} className="text-cyan-400" />
                  <span>S-Rank · Shadow Monarch</span>
                </div>

                {/* Focus Badges */}
                <div className="mt-3.5 flex flex-wrap justify-center gap-1.5">
                  {["React & Vite", "Node & Express", "MongoDB", "AI APIs"].map((pill, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white dark:bg-[#141722] border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 font-semibold"
                    >
                      {pill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Quantified Production Impact Grid */}
              <div className="mt-3 sm:mt-4 grid grid-cols-2 gap-1.5 sm:gap-2 text-center font-mono">
                <div
                  onClick={() => {
                    soundFX.playClick();
                    setDsaModalOpen(true);
                  }}
                  onMouseEnter={() => soundFX.playHover()}
                  className="rounded-xl border border-cyan-500/40 dark:border-cyan-400/30 bg-cyan-500/5 dark:bg-[#141720] p-2 hover:border-cyan-400 dark:hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/20 transition cursor-pointer group"
                  title="Click to view Algorithmic Mastery Breakdown"
                >
                  <div className="flex items-center justify-center gap-1">
                    <h3 className="text-base sm:text-lg font-black text-cyan-600 dark:text-cyan-300 font-['Rajdhani',sans-serif]">
                      2,000+
                    </h3>
                    <Brain className="w-3.5 h-3.5 text-cyan-500 group-hover:scale-125 transition-transform" />
                  </div>
                  <p className="text-[9px] text-slate-600 dark:text-slate-400 uppercase font-semibold">
                    DSA Solved (LeetCode)
                  </p>
                  <span className="text-[8px] text-cyan-600 dark:text-cyan-400 font-bold block">
                    [View Ledger &rarr;]
                  </span>
                </div>

                <div className="rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-[#141720] p-2 hover:border-cyan-400/40 transition">
                  <h3 className="text-base sm:text-lg font-black text-emerald-500 dark:text-emerald-400 font-['Rajdhani',sans-serif]">
                    -35% Latency
                  </h3>
                  <p className="text-[9px] text-slate-500 dark:text-slate-400 uppercase font-semibold">
                    DB Indexing Speedup
                  </p>
                </div>

                <div className="rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-[#141720] p-2 hover:border-cyan-400/40 transition">
                  <h3 className="text-base sm:text-lg font-black text-violet-500 dark:text-violet-400 font-['Rajdhani',sans-serif]">
                    95+ Score
                  </h3>
                  <p className="text-[9px] text-slate-500 dark:text-slate-400 uppercase font-semibold">
                    Lighthouse SEO & Speed
                  </p>
                </div>

                <div className="rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-[#141720] p-2 hover:border-cyan-400/40 transition">
                  <h3 className="text-base sm:text-lg font-black text-blue-500 dark:text-blue-400 font-['Rajdhani',sans-serif]">
                    &lt;50ms
                  </h3>
                  <p className="text-[9px] text-slate-500 dark:text-slate-400 uppercase font-semibold">
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
