import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { soundFX } from "../utils/soundEffects";
import {
  User,
  Cpu,
  Layers,
  Users,
  GraduationCap,
  Sparkles,
  Send,
  Compass,
  Command,
} from "lucide-react";

export default function RealmMinimap({
  sections,
  currentIndex,
  onSelectSection,
  onOpenTerminal,
}) {
  const [hoveredIdx, setHoveredIdx] = useState(null);

  const icons = [
    User,
    Cpu,
    Layers,
    Users,
    GraduationCap,
    Sparkles,
    Send,
  ];

  return (
    <aside
      aria-label="Realm Navigation Minimap"
      className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 flex items-center gap-1.5 p-1.5 sm:p-2 rounded-2xl bg-white/90 dark:bg-[#0c0e14]/90 border border-slate-200 dark:border-white/10 shadow-2xl backdrop-blur-xl pointer-events-auto select-none"
    >
      {/* Quick Terminal Trigger Pill */}
      <button
        onClick={() => {
          soundFX.playClick();
          onOpenTerminal();
        }}
        onMouseEnter={() => soundFX.playHover()}
        title="Open Hunter Terminal CLI (Press ~ or `)"
        className="hidden sm:flex items-center gap-1 px-2.5 py-1.5 rounded-xl bg-slate-100 dark:bg-white/5 hover:bg-cyan-500/15 text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 text-[11px] font-mono font-bold border border-slate-200 dark:border-white/5 transition active:scale-95"
      >
        <Command size={12} className="text-cyan-500" />
        <span className="hidden md:inline">CLI [~]</span>
      </button>

      <div className="hidden sm:block h-4 w-px bg-slate-300 dark:bg-white/10 mx-0.5" />

      {/* Realm Nodes */}
      <div className="flex items-center gap-1">
        {sections.map((sec, idx) => {
          const isActive = idx === currentIndex;
          const isHovered = hoveredIdx === idx;
          const Icon = icons[idx] || Compass;

          return (
            <div key={sec.id} className="relative">
              <button
                onClick={() => {
                  soundFX.playClick();
                  onSelectSection(idx);
                }}
                onMouseEnter={() => {
                  setHoveredIdx(idx);
                  soundFX.playHover();
                }}
                onMouseLeave={() => setHoveredIdx(null)}
                aria-label={`Go to ${sec.title}`}
                className={`
                  relative flex items-center justify-center
                  h-8 sm:h-9 px-2.5 sm:px-3 rounded-xl
                  transition-all duration-200
                  ${
                    isActive
                      ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-[0_0_15px_rgba(6,182,212,0.45)] scale-105"
                      : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/10"
                  }
                `}
              >
                <div className="flex items-center gap-1.5">
                  <Icon size={14} className={isActive ? "text-white animate-pulse" : ""} />
                  <span
                    className={`
                      text-[11px] font-mono font-bold tracking-tight
                      ${isActive ? "inline" : "hidden lg:inline"}
                    `}
                  >
                    0{idx + 1}
                  </span>
                  {isActive && (
                    <span className="hidden md:inline text-[11px] font-mono font-bold max-w-[90px] truncate">
                      {sec.title}
                    </span>
                  )}
                </div>

                {/* Subtle active pulse dot */}
                {isActive && (
                  <span className="absolute -top-1 -right-1 flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-300 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-white" />
                  </span>
                )}
              </button>

              {/* Tooltip on Hover */}
              <AnimatePresence>
                {isHovered && !isActive && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.95 }}
                    animate={{ opacity: 1, y: -4, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.95 }}
                    transition={{ duration: 0.15 }}
                    className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 pointer-events-none z-50 whitespace-nowrap"
                  >
                    <div className="px-2.5 py-1 rounded-lg bg-slate-900 text-slate-100 border border-slate-700 text-[10px] font-mono font-bold shadow-xl flex items-center gap-1.5">
                      <span className="text-cyan-400 font-black">[{sec.floor}]</span>
                      <span>{sec.title}</span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>

      {/* Keyboard Hint */}
      <div className="hidden xl:flex items-center gap-1 pl-1 pr-2 text-[10px] font-mono text-slate-600 dark:text-slate-400">
        <span className="px-1.5 py-0.5 rounded bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 font-bold">←</span>
        <span className="px-1.5 py-0.5 rounded bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 font-bold">→</span>
        <span>to jump</span>
      </div>
    </aside>
  );
}
