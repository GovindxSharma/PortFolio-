import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code2,
  X,
  ExternalLink,
  Award,
  CheckCircle2,
  Terminal,
  Zap,
  Brain,
  Shield,
  Layers,
  Sparkles,
} from "lucide-react";
import { soundFX } from "../utils/soundEffects";
import { PROFILE } from "../data/profile";

export default function DsaSpotlightModal({ isOpen, onClose }) {
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

  if (!isOpen) return null;

  return typeof document !== "undefined"
    ? createPortal(
        <AnimatePresence>
      <div
        onClick={() => {
          soundFX.playClick();
          onClose();
        }}
        className="fixed inset-0 z-[110] flex items-center justify-center p-3 sm:p-5 overflow-y-auto no-scrollbar cursor-pointer"
      >
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          onClick={(e) => e.stopPropagation()}
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="relative w-full max-w-2xl bg-white dark:bg-[#0e1017] border border-cyan-500/40 rounded-3xl p-5 sm:p-7 shadow-[0_0_50px_rgba(6,182,212,0.25)] text-slate-900 dark:text-slate-100 z-10 cursor-default"
        >
          {/* Header */}
          <div className="flex items-start justify-between gap-4 border-b border-slate-200 dark:border-white/10 pb-4">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white shadow-lg shadow-cyan-500/30">
                <Brain className="w-6 h-6" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono font-black text-cyan-600 dark:text-cyan-400 uppercase tracking-widest">
                    [ ALGORITHMIC PROWESS & DATA STRUCTURES ]
                  </span>
                  <span className="px-2 py-0.5 rounded-full text-[9px] font-mono font-bold bg-amber-500/10 text-amber-500 border border-amber-500/20">
                    S-RANK SOLVER
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-black font-['Rajdhani',sans-serif] text-slate-900 dark:text-white">
                  2,000+ Algorithmic Challenges Solved
                </h3>
              </div>
            </div>

            <button
              onClick={() => {
                soundFX.playClick();
                onClose();
              }}
              className="p-2 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/10 transition"
              aria-label="Close modal"
            >
              <X size={18} />
            </button>
          </div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-3 gap-3 my-5">
            <div className="p-3 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/5 text-center">
              <div className="text-2xl font-black font-['Rajdhani',sans-serif] text-cyan-600 dark:text-cyan-400">
                2,000+
              </div>
              <div className="text-[10px] font-mono text-slate-500 uppercase">Total Problems</div>
            </div>
            <div className="p-3 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/5 text-center">
              <div className="text-2xl font-black font-['Rajdhani',sans-serif] text-violet-600 dark:text-violet-400">
                350+
              </div>
              <div className="text-[10px] font-mono text-slate-500 uppercase">DP & Memoization</div>
            </div>
            <div className="p-3 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/5 text-center">
              <div className="text-2xl font-black font-['Rajdhani',sans-serif] text-emerald-600 dark:text-emerald-400">
                98%
              </div>
              <div className="text-[10px] font-mono text-slate-500 uppercase">Avg Test Coverage</div>
            </div>
          </div>

          {/* Breakdown List */}
          <div className="space-y-3 max-h-72 overflow-y-auto pr-1 no-scrollbar">
            <div className="text-xs font-mono text-slate-500 uppercase font-bold flex items-center justify-between">
              <span>Core Problem-Solving Domains</span>
              <span>Solved Count</span>
            </div>

            {PROFILE.dsaMastery.map((item, idx) => (
              <div
                key={idx}
                className="p-3 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/5 space-y-1.5"
              >
                <div className="flex items-center justify-between text-xs font-bold">
                  <span className="text-slate-800 dark:text-slate-200 font-mono">
                    {item.topic}
                  </span>
                  <span className="font-mono text-cyan-600 dark:text-cyan-400">
                    {item.count}
                  </span>
                </div>
                <div className="w-full h-1.5 rounded-full bg-slate-200 dark:bg-white/10 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${item.mastery}%` }}
                    transition={{ duration: 0.6, delay: idx * 0.08 }}
                    className="h-full bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full"
                  />
                </div>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 font-mono leading-tight">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Real-world Impact Note */}
          <div className="mt-5 p-3.5 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-start gap-3">
            <Zap className="w-5 h-5 text-cyan-500 shrink-0 mt-0.5" />
            <div className="text-xs font-mono text-slate-700 dark:text-slate-300 leading-relaxed">
              <strong className="text-cyan-600 dark:text-cyan-400">How DSA is applied in Production:</strong> Used graph algorithms for multi-node logistics routing, sliding-window algorithms for real-time WebSocket packet buffering, and indexing B-Trees cutting MongoDB latency by 35%.
            </div>
          </div>

          {/* External Links / Footer Action */}
          <div className="mt-5 pt-4 border-t border-slate-200 dark:border-white/10 flex flex-wrap items-center justify-between gap-3">
            <a
              href={PROFILE.socials.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => soundFX.playClick()}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 text-amber-600 dark:text-amber-400 border border-amber-500/30 text-xs font-mono font-bold transition active:scale-95"
            >
              <span>LeetCode Profile</span>
              <ExternalLink size={13} />
            </a>

            <a
              href={PROFILE.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => soundFX.playClick()}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-100 dark:bg-white/10 hover:bg-slate-200 dark:hover:bg-white/20 text-slate-800 dark:text-slate-200 text-xs font-mono font-bold transition active:scale-95"
            >
              <span>GitHub Repositories</span>
              <ExternalLink size={13} />
            </a>

            <button
              onClick={() => {
                soundFX.playClick();
                onClose();
              }}
              className="ml-auto px-4 py-2 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-xs font-mono font-bold hover:opacity-90 active:scale-95 transition"
            >
              Close [Esc]
            </button>
          </div>
        </motion.div>
      </div>
        </AnimatePresence>,
        document.body
      )
    : null;
}
