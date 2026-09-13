import React, { useState } from "react";
import {
  User,
  Briefcase,
  Code2,
  Mail,
  Building2,
  GraduationCap,
  Sun,
  Moon,
  Volume2,
  VolumeX,
  Sparkles,
  Zap,
  Terminal,
  Flame,
  RotateCcw,
  Layers,
  ChevronDown,
  X,
  Compass,
  FileText,
  ArrowUpRight,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import { soundFX } from "../utils/soundEffects";

export const navItems = [
  { id: "about", icon: User, label: "Monarch Profile", floor: "REALM 01" },
  { id: "system-experience", icon: Building2, label: "System Logs", floor: "REALM 02" },
  { id: "projects", icon: Briefcase, label: "Dungeon Raids", floor: "REALM 03" },
  { id: "shadow-army", icon: Sparkles, label: "Shadow Army", floor: "REALM 04" },
  { id: "education", icon: GraduationCap, label: "Ascension Path", floor: "REALM 05" },
  { id: "skills", icon: Code2, label: "Awakened Skills", floor: "REALM 06" },
  { id: "contact", icon: Mail, label: "Summon Portal", floor: "REALM 07" },
];

export default function Navbar({
  currentSectionIndex = 0,
  onSelectSection,
  onOpenStatus,
  onOpenTerminal,
  onReplayIntro,
}) {
  const [hudOpen, setHudOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(() => soundFX.isMuted());

  const { darkMode, isRedGate, isSystemTheme, toggleTheme, toggleRedGate, resetToSystemTheme } = useTheme();

  const handleToggleMute = () => {
    const muted = soundFX.toggleMute();
    setIsMuted(muted);
  };

  const handleNavigate = (index) => {
    soundFX.playClick();
    if (onSelectSection) {
      onSelectSection(index);
    }
    setHudOpen(false);
  };

  return (
    <>
      {/* ================= QUANTUM MONARCH CAPSULE (Dynamic Floating Command Island) ================= */}
      <header className="fixed top-3 sm:top-5 left-0 right-0 z-40 flex justify-center px-3 pointer-events-none">
        <nav aria-label="Main Navigation" className="relative pointer-events-auto">

          {/* Glowing Ambient Halo */}
          <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-violet-600/20 blur-md opacity-70" />

          {/* Sleek Floating Capsule Bar */}
          <div className="relative flex items-center gap-1.5 sm:gap-3 rounded-full border border-slate-200/90 dark:border-white/10 bg-white/95 dark:bg-[#101218]/90 py-1.5 px-2.5 sm:px-4 backdrop-blur-2xl shadow-[0_4px_20px_rgba(0,0,0,0.06)] dark:shadow-[0_10px_35px_rgba(0,0,0,0.4)]">

            {/* Left: Monarch Crest & Avatar */}
            <button
              onClick={() => handleNavigate(0)}
              onMouseEnter={() => soundFX.playHover()}
              className="flex items-center gap-2 group"
              title="Return to Monarch Profile (Realm 01)"
            >
              <div className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 via-blue-500 to-violet-600 font-['Orbitron',sans-serif] text-[10px] sm:text-xs font-black text-black shadow-[0_0_10px_rgba(6,182,212,0.6)] group-hover:scale-105 transition-transform">
                GS
              </div>

              <div className="text-left hidden xs:block sm:block">
                <div className="flex items-center gap-1">
                  <span className="text-xs font-bold text-slate-900 dark:text-white font-['Rajdhani',sans-serif]">
                    Govind Sharma
                  </span>
                  <span className="text-[8px] font-mono px-1 py-0.2 rounded bg-cyan-500/20 text-cyan-600 dark:text-cyan-400 font-extrabold border border-cyan-500/40">
                    S-RANK
                  </span>
                </div>
              </div>
            </button>

            {/* Middle Divider */}
            <div className="h-4 w-[1px] bg-slate-200 dark:bg-white/10 mx-0.5 sm:mx-1" />

            {/* Active Floor Badge (Click to open Realm Map) */}
            <button
              onClick={() => {
                soundFX.playClick();
                setHudOpen((prev) => !prev);
              }}
              onMouseEnter={() => soundFX.playHover()}
              className="flex items-center gap-1.5 px-2 sm:px-2.5 py-1 rounded-full bg-slate-100 dark:bg-[#161922] border border-slate-200 dark:border-white/10 text-[10px] sm:text-xs font-mono font-bold text-slate-800 dark:text-cyan-300 hover:border-cyan-400 transition"
              title="Click to explore all 7 realms"
            >
              <span className="text-cyan-600 dark:text-cyan-400">{navItems[currentSectionIndex]?.floor}</span>
              <span className="text-slate-400 hidden sm:inline">•</span>
              <span className="truncate max-w-[90px] sm:max-w-[130px] hidden sm:inline">
                {navItems[currentSectionIndex]?.label}
              </span>
              <ChevronDown size={12} className={`text-slate-400 transition-transform duration-300 ${hudOpen ? "rotate-180" : ""}`} />
            </button>

            {/* Right: Status Trigger */}
            <button
              onClick={() => {
                soundFX.playClick();
                if (onOpenStatus) onOpenStatus();
              }}
              onMouseEnter={() => soundFX.playHover()}
              className="flex items-center gap-1 px-2.5 sm:px-3 py-1 rounded-full bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 text-[10px] sm:text-xs font-mono font-bold text-cyan-600 dark:text-cyan-400 transition active:scale-95"
              title="Open Hunter Status Window"
            >
              <Zap size={12} className="text-cyan-500 dark:text-cyan-400 animate-pulse" />
              <span>STATUS</span>
            </button>

            {/* Right: Command Hub Toggle (✦) */}
            <button
              onClick={() => {
                soundFX.playClick();
                setHudOpen((prev) => !prev);
              }}
              onMouseEnter={() => soundFX.playHover()}
              className={`p-1.5 sm:p-2 rounded-full border transition ${
                hudOpen
                  ? "bg-cyan-500 text-black border-cyan-400 shadow-[0_0_12px_#00f0ff]"
                  : "border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-[#161922] text-slate-700 dark:text-slate-300 hover:text-cyan-500 hover:border-cyan-400"
              }`}
              title="Toggle Command & Settings HUD"
            >
              {hudOpen ? <X size={14} /> : <Sparkles size={14} />}
            </button>

          </div>

          {/* ================= COMMAND DECK POPUP MODAL ================= */}
          <AnimatePresence>
            {hudOpen && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: -8 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -8 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="
                  absolute top-full mt-2 left-1/2 -translate-x-1/2
                  w-[92vw] max-w-lg
                  rounded-3xl border border-slate-200 dark:border-white/10
                  bg-white/95 dark:bg-[#101218]/95 p-4 sm:p-5
                  text-slate-900 dark:text-white shadow-[0_15px_40px_rgba(0,0,0,0.12)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.8)]
                  backdrop-blur-3xl z-50
                "
              >
                {/* Header Strip */}
                <div className="flex items-center justify-between border-b border-slate-200 dark:border-white/10 pb-2.5 mb-3 font-mono text-[10px] text-cyan-600 dark:text-cyan-400">
                  <span className="flex items-center gap-1.5 font-bold">
                    <Compass size={12} /> COMMAND DECK & REALM SELECTOR
                  </span>
                  <span className="text-slate-500 dark:text-slate-400">
                    {isSystemTheme ? "THEME: SYSTEM OS" : `THEME: ${darkMode ? "DARK" : "LIGHT"}`}
                  </span>
                </div>

                {/* Quick Controls Bar */}
                <div className="grid grid-cols-4 gap-2 mb-4">
                  {/* Theme Toggle */}
                  <button
                    onClick={() => {
                      soundFX.playClick();
                      toggleTheme();
                    }}
                    className="flex flex-col items-center justify-center gap-1 p-2.5 rounded-2xl bg-slate-100 dark:bg-[#141720] border border-slate-200 dark:border-white/5 hover:border-cyan-400/50 text-slate-800 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-300 transition"
                    title="Toggle Light / Dark theme"
                  >
                    {darkMode ? <Sun size={16} className="text-amber-500 dark:text-cyan-400" /> : <Moon size={16} className="text-indigo-600" />}
                    <span className="text-[9px] font-mono font-bold">{darkMode ? "Light" : "Dark"}</span>
                  </button>

                  {/* Red Gate Mode */}
                  <button
                    onClick={() => {
                      soundFX.playArise();
                      toggleRedGate();
                    }}
                    className={`flex flex-col items-center justify-center gap-1 p-2.5 rounded-2xl border transition ${
                      isRedGate
                        ? "bg-red-600/30 border-red-500 text-red-500 dark:text-red-400 animate-pulse"
                        : "bg-slate-100 dark:bg-[#141720] border-slate-200 dark:border-white/5 text-slate-700 dark:text-slate-400 hover:text-red-500"
                    }`}
                    title="Toggle Red Gate boss mode"
                  >
                    <Flame size={16} />
                    <span className="text-[9px] font-mono font-bold">{isRedGate ? "Active" : "Red Gate"}</span>
                  </button>

                  {/* Sound Toggle */}
                  <button
                    onClick={handleToggleMute}
                    className="flex flex-col items-center justify-center gap-1 p-2.5 rounded-2xl bg-slate-100 dark:bg-[#141720] border border-slate-200 dark:border-white/5 hover:border-cyan-400/50 text-slate-800 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-300 transition"
                    title="Toggle sound effects"
                  >
                    {isMuted ? <VolumeX size={16} className="text-slate-400" /> : <Volume2 size={16} className="text-cyan-600 dark:text-cyan-400" />}
                    <span className="text-[9px] font-mono font-bold">{isMuted ? "Muted" : "Audio"}</span>
                  </button>

                  {/* Terminal CLI */}
                  <button
                    onClick={() => {
                      soundFX.playClick();
                      setHudOpen(false);
                      if (onOpenTerminal) onOpenTerminal();
                    }}
                    className="flex flex-col items-center justify-center gap-1 p-2.5 rounded-2xl bg-slate-100 dark:bg-[#141720] border border-slate-200 dark:border-white/5 hover:border-cyan-400/50 text-cyan-600 dark:text-cyan-400 transition"
                    title="Open Hunter CLI Terminal (~)"
                  >
                    <Terminal size={16} />
                    <span className="text-[9px] font-mono font-bold">CLI (~)</span>
                  </button>
                </div>

                {/* 7-Realm Grid List */}
                <div className="space-y-1.5 max-h-[220px] overflow-y-auto pr-1 no-scrollbar">
                  {navItems.map((item, idx) => {
                    const Icon = item.icon;
                    const isActive = currentSectionIndex === idx;

                    return (
                      <button
                        key={item.id}
                        onClick={() => handleNavigate(idx)}
                        className={`
                          w-full flex items-center justify-between p-2.5 rounded-xl border transition text-left
                          ${
                            isActive
                              ? "bg-cyan-500/20 border-cyan-400/60 text-white shadow-[0_0_12px_rgba(6,182,212,0.2)]"
                              : "bg-[#141720]/80 border-white/5 text-slate-300 hover:border-cyan-400/30 hover:bg-[#171b26]"
                          }
                        `}
                      >
                        <div className="flex items-center gap-2.5">
                          <div className={`p-1.5 rounded-lg ${isActive ? "bg-cyan-500 text-black" : "bg-[#1d2230] text-cyan-400"}`}>
                            <Icon size={14} />
                          </div>
                          <div>
                            <span className="text-xs font-bold font-['Rajdhani',sans-serif] block">
                              {item.label}
                            </span>
                          </div>
                        </div>

                        <span className="text-[10px] font-mono text-cyan-400 font-semibold">
                          {item.floor}
                        </span>
                      </button>
                    );
                  })}
                </div>

                {/* Direct Resume Action */}
                <a
                  href="https://drive.google.com/file/d/1-DH9zTJ3Ft05GeR1M6ceR1umdA_1H0zQ/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => soundFX.playClick()}
                  className="w-full mt-3 py-2.5 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 hover:border-cyan-400 text-cyan-600 dark:text-cyan-300 hover:text-cyan-700 dark:hover:text-white font-mono text-xs font-bold flex items-center justify-center gap-2 transition"
                >
                  <FileText size={13} />
                  <span>View Hunter Resume (PDF)</span>
                  <ArrowUpRight size={13} />
                </a>

                {/* Replay Intro Trigger */}
                {onReplayIntro && (
                  <button
                    onClick={() => {
                      soundFX.playClick();
                      setHudOpen(false);
                      onReplayIntro();
                    }}
                    className="w-full mt-2 py-2 rounded-xl bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 border border-slate-200 dark:border-white/5 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white font-mono text-[10px] flex items-center justify-center gap-1.5 transition"
                  >
                    <RotateCcw size={12} /> Replay Awakening Sequence
                  </button>
                )}

              </motion.div>
            )}
          </AnimatePresence>

        </nav>
      </header>

      {/* ================= DESKTOP FLOATING DOCK ================= */}
      <div className="fixed bottom-6 left-1/2 z-40 hidden md:block -translate-x-1/2">
        <div className="relative group">
          <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-600 blur-md opacity-25 group-hover:opacity-50 transition duration-500" />

          <div className="relative flex items-center gap-1.5 rounded-full border border-slate-200/90 dark:border-white/10 bg-white/95 dark:bg-[#101218]/90 p-2 sm:p-2.5 backdrop-blur-3xl shadow-[0_8px_30px_rgba(0,0,0,0.08)] dark:shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
            {navItems.map((item, idx) => {
              const Icon = item.icon;
              const isActive = currentSectionIndex === idx;

              return (
                <div key={item.id} className="relative group/item">
                  <motion.button
                    onClick={() => handleNavigate(idx)}
                    onMouseEnter={() => soundFX.playHover()}
                    whileHover={{ y: -5, scale: 1.12 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative flex h-11 w-11 items-center justify-center rounded-full transition-all"
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeDock"
                        className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 via-blue-600 to-violet-600 shadow-[0_0_20px_rgba(6,182,212,0.6)]"
                      />
                    )}

                    <Icon
                      className={`relative z-10 h-5 w-5 transition-colors ${
                        isActive
                          ? "text-white"
                          : "text-slate-500 dark:text-slate-400 group-hover/item:text-cyan-500 dark:group-hover/item:text-cyan-400"
                      }`}
                    />
                  </motion.button>

                  <div className="pointer-events-none absolute -top-11 left-1/2 -translate-x-1/2 opacity-0 group-hover/item:opacity-100 transition-all duration-200 scale-95 group-hover/item:scale-100">
                    <div className="px-2.5 py-1 text-[11px] font-mono font-bold rounded-lg bg-slate-900 dark:bg-[#0c0d12] text-white dark:text-cyan-300 border border-slate-700 dark:border-white/10 shadow-xl whitespace-nowrap">
                      {item.floor}: {item.label}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}