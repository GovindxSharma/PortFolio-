import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AlertCircle, CheckCircle, ChevronDown, ChevronUp, Sparkles, Trophy, X } from "lucide-react";
import confetti from "canvas-confetti";
import { soundFX } from "../utils/soundEffects";

export default function QuestNotification({ onOpenStatus }) {
  const [minimized, setMinimized] = useState(false);
  const [closed, setClosed] = useState(false);
  const [completed, setCompleted] = useState(() => {
    return localStorage.getItem("daily_quest_completed") === "true";
  });
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      soundFX.playSystemAlert();
    }, 1500);

    const handleScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      if (total > 0) {
        const current = (window.scrollY / total) * 100;
        setScrollProgress(Math.min(100, Math.round(current)));
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClaimReward = () => {
    soundFX.playLevelUp();
    setCompleted(true);
    localStorage.setItem("daily_quest_completed", "true");

    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.8 },
      colors: ["#00f0ff", "#9333ea", "#3b82f6", "#ffffff", "#ffd700"],
    });
  };

  if (closed) return null;

  return (
    <motion.div
      initial={{ x: 120, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 120, damping: 15, delay: 1 }}
      className="fixed bottom-16 sm:bottom-24 right-2 sm:right-6 z-40 max-w-[270px] sm:max-w-[340px] select-none"
    >
      <div className="relative rounded-2xl border-2 border-cyan-500/80 bg-[#040b18]/95 dark:bg-[#030914]/95 backdrop-blur-xl shadow-[0_0_25px_rgba(6,182,212,0.4)] p-3 text-white overflow-hidden">
        {/* Glow Line */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />

        {/* Header */}
        <div className="flex items-center justify-between gap-2 mb-1.5">
          <div className="flex items-center gap-1.5">
            <span className="flex h-2 w-2 rounded-full bg-cyan-400 animate-ping" />
            <span className="text-[9px] sm:text-[10px] font-mono font-bold tracking-widest text-cyan-400 uppercase">
              [ QUEST ALERT ]
            </span>
          </div>

          <div className="flex items-center gap-1">
            <button
              onClick={() => {
                soundFX.playClick();
                setMinimized(!minimized);
              }}
              className="p-1 text-slate-400 hover:text-white transition"
              title={minimized ? "Expand" : "Minimize"}
            >
              {minimized ? <ChevronUp size={13} /> : <ChevronDown size={13} />}
            </button>
            <button
              onClick={() => {
                soundFX.playClick();
                setClosed(true);
              }}
              className="p-1 text-slate-400 hover:text-white transition"
              title="Dismiss"
            >
              <X size={13} />
            </button>
          </div>
        </div>

        {/* Title */}
        <h4 className="text-[11px] sm:text-xs font-bold text-white font-['Rajdhani',sans-serif] tracking-wide mb-1 flex items-center gap-1.5">
          <Sparkles className="h-3 w-3 text-cyan-400" />
          Daily Quest: Explore Shadow Monarch
        </h4>

        {!minimized && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="space-y-1.5 text-[10px] sm:text-[11px]"
          >
            <p className="text-slate-300 text-[10px] sm:text-[11px] leading-relaxed line-clamp-2 sm:line-clamp-none">
              Explore Govind's projects, combat skills, and system logs to awaken developer blessings.
            </p>

            {/* Progress Bar */}
            <div>
              <div className="flex justify-between text-[9px] sm:text-[10px] font-mono text-cyan-300 mb-0.5">
                <span>Dungeon Exploration</span>
                <span>{scrollProgress}% / 100%</span>
              </div>
              <div className="h-1.5 w-full bg-slate-900 rounded-full overflow-hidden border border-cyan-500/30">
                <div
                  className="h-full bg-gradient-to-r from-cyan-500 to-violet-500 rounded-full transition-all duration-300"
                  style={{ width: `${Math.max(scrollProgress, completed ? 100 : 15)}%` }}
                />
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-1.5 pt-1">
              {!completed ? (
                <button
                  onClick={handleClaimReward}
                  className="flex-1 py-1 px-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-black font-bold text-[10px] sm:text-[11px] font-mono uppercase tracking-wider flex items-center justify-center gap-1 shadow-[0_0_12px_rgba(6,182,212,0.5)] transition active:scale-95"
                >
                  <Trophy size={11} /> Claim EXP
                </button>
              ) : (
                <div className="flex-1 py-1 px-2 rounded-lg bg-green-500/20 border border-green-500/40 text-green-400 font-mono text-[9px] font-bold flex items-center justify-center gap-1">
                  <CheckCircle size={11} /> QUEST DONE (+500 EXP)
                </div>
              )}

              <button
                onClick={() => {
                  soundFX.playClick();
                  onOpenStatus();
                }}
                className="py-1 px-2 rounded-lg border border-cyan-500/40 bg-cyan-950/40 hover:bg-cyan-500/20 text-cyan-300 text-[10px] font-mono transition"
                title="View Hunter Status"
              >
                Status
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}
