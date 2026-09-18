import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import {
  Shield,
  Zap,
  Flame,
  Award,
  Sparkles,
  X,
  Swords,
  Layers,
  Cpu,
  Brain,
  Compass,
  CheckCircle2,
  FileText,
  ArrowUpRight,
} from "lucide-react";
import { soundFX } from "../utils/soundEffects";
import { PROFILE } from "../data/profile";

export default function StatusWindowModal({ isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState("stats");

  const stats = [
    { name: "Strength (System Architecture)", val: 98, max: 100, icon: Shield, desc: "Distributed scalable backend & clean architecture" },
    { name: "Agility (Frontend Speed & FPS)", val: 96, max: 100, icon: Zap, desc: "React, Vite, Tailwind CSS 60 FPS visual smoothness & clean UI" },
    { name: "Intelligence (DSA & AI Logic)", val: 99, max: 100, icon: Brain, desc: "Data structures, problem solving, OpenAI/LLM pipelines" },
    { name: "Vitality (Code Resilience & Testing)", val: 95, max: 100, icon: Flame, desc: "Type safety, error handling, Docker & CI/CD deployment" },
    { name: "Sense (UI/UX Intuition & Polish)", val: 97, max: 100, icon: Compass, desc: "Vibrant aesthetics, micro-interactions, responsive UX" },
  ];

  const shadowSkills = [
    {
      name: "Shadow Extraction [Lv. MAX]",
      type: "Special Active Skill",
      desc: "Extracts real-world business requirements and resurrects them as high-performance full-stack web applications.",
      mana: "250 MP",
      cooldown: "Instant",
    },
    {
      name: "Monarch's Domain [Passive]",
      type: "Exclusive Buff",
      desc: "All frontend and backend nodes within Govind's tech stack gain +100% responsiveness and zero render bottlenecks.",
      mana: "0 MP",
      cooldown: "Always Active",
    },
    {
      name: "Ruler's Authority [Lv. 9]",
      type: "Telekinesis / Motion",
      desc: "Controls DOM elements, reactive state, and Framer Motion spring physics with clean, seamless precision.",
      mana: "120 MP",
      cooldown: "5s",
    },
    {
      name: "Dungeon Master (MERN Stack)",
      type: "Mastery Class Skill",
      desc: "Deep mastery over React, Node.js, Express, MongoDB, and TypeScript production architectures.",
      mana: "180 MP",
      cooldown: "Instant",
    },
  ];

  const titles = [
    "2,000+ Algorithmic Problems Solved (LeetCode / CodeStudio)",
    "Production Full-Stack Engineer (6+ Deployed Systems)",
    "Vizon Technolabs & Aerion MedTech Software Engineer",
    "Database Optimization: -35% Query Latency via Indexing",
    "Real-Time Engineer: Sub-50ms WebSocket Event Propagation",
    "Frontend Performance: Consistent 95+ Lighthouse Scores",
  ];

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        soundFX.playClick();
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          onClick={() => {
            soundFX.playClick();
            onClose();
          }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-4 md:p-6 overflow-y-auto no-scrollbar cursor-pointer"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/85 backdrop-blur-md"
          />

          {/* Holographic Matte Black Window */}
          <motion.div
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, scale: 0.85, y: 25 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 25 }}
            transition={{ type: "spring", stiffness: 240, damping: 22 }}
            className="
              relative w-full max-w-2xl
              rounded-2xl sm:rounded-3xl
              border border-cyan-500/50
              bg-[#101218]/95
              p-5 sm:p-7
              text-white
              shadow-[0_0_60px_rgba(0,0,0,0.8)]
              backdrop-blur-2xl
              overflow-hidden
              z-10
              my-auto
              cursor-default
            "
          >
            {/* System Scanlines Effect */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent pointer-events-none opacity-30 animate-pulse" />
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-violet-500 to-transparent" />

            {/* Corner Tech Brackets */}
            <div className="absolute top-3 left-3 w-3 h-3 border-t-2 border-l-2 border-cyan-400" />
            <div className="absolute top-3 right-3 w-3 h-3 border-t-2 border-r-2 border-cyan-400" />
            <div className="absolute bottom-3 left-3 w-3 h-3 border-b-2 border-l-2 border-cyan-400" />
            <div className="absolute bottom-3 right-3 w-3 h-3 border-b-2 border-r-2 border-cyan-400" />

            {/* Header */}
            <div className="relative flex items-center justify-between border-b border-white/10 pb-4 mb-5">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-violet-600 shadow-[0_0_15px_rgba(6,182,212,0.4)]">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[11px] uppercase tracking-widest text-cyan-400 font-bold">
                      [ SYSTEM STATUS WINDOW ]
                    </span>
                    <span className="animate-pulse rounded px-1.5 py-0.5 text-[10px] font-bold bg-rose-500/20 text-rose-400 border border-rose-500/30">
                      RANK-S
                    </span>
                  </div>
                  <h3 className="font-['Orbitron',sans-serif] text-xl sm:text-2xl font-black text-white tracking-wide">
                    GOVIND SHARMA
                  </h3>
                </div>
              </div>

              <button
                onClick={() => {
                  soundFX.playClick();
                  onClose();
                }}
                className="rounded-full p-2 text-slate-400 hover:bg-white/10 hover:text-white transition"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Hunter Header Attributes */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mb-5 p-3 rounded-xl bg-[#0c0d12] border border-white/5 text-xs font-mono">
              <div>
                <span className="text-slate-400 block text-[10px]">JOB CLASS</span>
                <span className="font-bold text-white">Shadow Architect</span>
              </div>
              <div>
                <span className="text-slate-400 block text-[10px]">LEVEL</span>
                <span className="font-bold text-cyan-400">Lv. 99 (Max)</span>
              </div>
              <div>
                <span className="text-slate-400 block text-[10px]">FATIGUE</span>
                <span className="font-bold text-emerald-400">0% (Peak State)</span>
              </div>
              <div>
                <span className="text-slate-400 block text-[10px]">CURRENT GUILD</span>
                <span className="font-bold text-violet-400">Full-Stack S-Rank</span>
              </div>
            </div>

            {/* HP / MP Gauges */}
            <div className="space-y-2 mb-5">
              <div>
                <div className="flex justify-between text-xs font-mono mb-1">
                  <span className="text-rose-400 font-semibold flex items-center gap-1">
                    <Flame className="h-3.5 w-3.5" /> HP (Uptime / Resilience)
                  </span>
                  <span className="text-rose-300 font-bold">48,500 / 48,500</span>
                </div>
                <div className="h-2 w-full bg-[#0c0d12] rounded-full overflow-hidden border border-rose-500/20 p-[1px]">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-rose-600 via-rose-500 to-rose-400 rounded-full shadow-[0_0_10px_rgba(244,63,94,0.5)]"
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-mono mb-1">
                  <span className="text-cyan-400 font-semibold flex items-center gap-1">
                    <Zap className="h-3.5 w-3.5" /> MP (Mana / Code Flow)
                  </span>
                  <span className="text-cyan-300 font-bold">92,000 / 92,000</span>
                </div>
                <div className="h-2 w-full bg-[#0c0d12] rounded-full overflow-hidden border border-cyan-500/20 p-[1px]">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-blue-600 via-cyan-500 to-cyan-300 rounded-full shadow-[0_0_10px_rgba(6,182,212,0.5)]"
                  />
                </div>
              </div>
            </div>

            {/* Tabs */}
            <div className="flex gap-2 border-b border-white/10 pb-3 mb-4">
              <button
                onClick={() => {
                  soundFX.playHover();
                  setActiveTab("stats");
                }}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition ${
                  activeTab === "stats"
                    ? "bg-cyan-500/20 text-cyan-300 border border-cyan-400/50 shadow-[0_0_10px_rgba(6,182,212,0.3)]"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <Cpu className="h-3.5 w-3.5" /> Attributes
              </button>
              <button
                onClick={() => {
                  soundFX.playHover();
                  setActiveTab("skills");
                }}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition ${
                  activeTab === "skills"
                    ? "bg-cyan-500/20 text-cyan-300 border border-cyan-400/50 shadow-[0_0_10px_rgba(6,182,212,0.3)]"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <Swords className="h-3.5 w-3.5" /> Shadow Skills
              </button>
              <button
                onClick={() => {
                  soundFX.playHover();
                  setActiveTab("titles");
                }}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition ${
                  activeTab === "titles"
                    ? "bg-cyan-500/20 text-cyan-300 border border-cyan-400/50 shadow-[0_0_10px_rgba(6,182,212,0.3)]"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <Layers className="h-3.5 w-3.5" /> Acquired Titles
              </button>
            </div>

            {/* Tab Content (No Visible Scrollbar) */}
            <div className="max-h-[260px] overflow-y-auto pr-1 space-y-3 no-scrollbar">
              {activeTab === "stats" && (
                <div className="space-y-2.5">
                  {stats.map((s, i) => {
                    const Icon = s.icon;
                    return (
                      <div
                        key={i}
                        className="p-2.5 rounded-xl bg-[#0c0d12] border border-white/5 hover:border-cyan-400/30 transition"
                      >
                        <div className="flex items-center justify-between text-xs font-mono mb-1">
                          <div className="flex items-center gap-2">
                            <Icon className="h-4 w-4 text-cyan-400" />
                            <span className="font-semibold text-white">{s.name}</span>
                          </div>
                          <span className="text-cyan-400 font-bold text-sm">
                            {s.val} / {s.max}
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-400 mb-1.5">{s.desc}</p>
                        <div className="h-1.5 w-full bg-[#161922] rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${(s.val / s.max) * 100}%` }}
                            transition={{ duration: 0.6, delay: i * 0.08 }}
                            className="h-full bg-gradient-to-r from-cyan-500 to-violet-500 rounded-full"
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}

              {activeTab === "skills" && (
                <div className="space-y-2.5">
                  {shadowSkills.map((sk, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-[#0c0d12] border border-white/5 hover:border-violet-400/30 transition"
                    >
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="text-xs font-bold text-violet-300 font-mono">
                          {sk.name}
                        </h4>
                        <span className="text-[10px] px-2 py-0.5 rounded bg-violet-500/20 text-violet-300 border border-violet-500/30">
                          {sk.type}
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-300 mb-2 leading-relaxed">
                        {sk.desc}
                      </p>
                      <div className="flex gap-4 text-[10px] font-mono text-slate-400">
                        <span>Cost: <span className="text-cyan-400">{sk.mana}</span></span>
                        <span>Cooldown: <span className="text-violet-400">{sk.cooldown}</span></span>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === "titles" && (
                <div className="grid sm:grid-cols-2 gap-2.5">
                  {titles.map((title, i) => (
                    <div
                      key={i}
                      className="p-3 rounded-xl bg-[#0c0d12] border border-white/5 flex items-center gap-2.5"
                    >
                      <CheckCircle2 className="h-4 w-4 text-cyan-400 shrink-0" />
                      <span className="text-xs font-semibold text-slate-200">{title}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Bottom Alert */}
            <div className="mt-4 pt-3 border-t border-white/10 flex flex-wrap items-center justify-between gap-2.5 text-[11px] text-slate-400 font-mono">
              <span className="flex items-center gap-1.5 text-cyan-400">
                <Sparkles className="h-3.5 w-3.5" /> All systems functioning at Monarch capacity
              </span>
              <div className="flex items-center gap-2">
                <a
                  href={PROFILE.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => soundFX.playClick()}
                  className="text-xs px-3 py-1.5 rounded-lg border border-cyan-500/40 bg-cyan-500/10 hover:bg-cyan-500/25 text-cyan-300 font-bold transition flex items-center gap-1.5 active:scale-95 shadow-[0_0_12px_rgba(6,182,212,0.2)]"
                >
                  <FileText className="h-3.5 w-3.5" />
                  <span>Resume (PDF)</span>
                  <ArrowUpRight className="h-3 w-3" />
                </a>
                <button
                  onClick={() => {
                    soundFX.playLevelUp();
                    confetti({
                      particleCount: 80,
                      spread: 70,
                      origin: { y: 0.6 },
                      colors: ["#00f0ff", "#a855f7", "#3b82f6", "#10b981", "#fbbf24"],
                    });
                  }}
                  className="text-xs px-3 py-1.5 rounded-lg bg-gradient-to-r from-cyan-500 to-violet-600 text-white font-bold hover:scale-105 active:scale-95 transition shadow-[0_0_15px_rgba(6,182,212,0.3)] flex items-center gap-1.5"
                >
                  <Sparkles className="h-3.5 w-3.5" />
                  <span>Claim Blessing</span>
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
