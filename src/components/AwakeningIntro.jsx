import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldAlert, Zap, Swords, Terminal, Sparkles, ChevronRight } from "lucide-react";
import { soundFX } from "../utils/soundEffects";

export default function AwakeningIntro({ onComplete }) {
  const [phase, setPhase] = useState(0);
  const [progress, setProgress] = useState(0);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    // Check if intro has already been shown in this session
    const hasSeenIntro = sessionStorage.getItem("has_seen_awakening_intro");
    if (hasSeenIntro === "true") {
      setDismissed(true);
      if (onComplete) onComplete();
      return;
    }

    soundFX.playSystemAlert();

    // Progress counter
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 2;
      });
    }, 35);

    // Phases
    const t1 = setTimeout(() => {
      setPhase(1); // Warning phase
      soundFX.playSystemAlert();
    }, 1200);

    const t2 = setTimeout(() => {
      setPhase(2); // Monarch Eye Awakening
      soundFX.playArise();
    }, 2800);

    const t3 = setTimeout(() => {
      setPhase(3); // Access Granted
      soundFX.playLevelUp();
    }, 4500);

    const t4 = setTimeout(() => {
      handleComplete();
    }, 5600);

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        handleComplete();
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      clearInterval(interval);
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleComplete = () => {
    sessionStorage.setItem("has_seen_awakening_intro", "true");
    setDismissed(true);
    if (onComplete) onComplete();
  };

  if (dismissed) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 1.08, filter: "blur(15px)" }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="fixed inset-0 z-[200] bg-[#02050f] text-white flex flex-col items-center justify-center p-4 select-none overflow-hidden"
      >
        {/* Futuristic Background Grid & Scanlines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#071739_1px,transparent_1px),linear-gradient(to_bottom,#071739_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30" />
        
        {/* Pulsing Central Energy Halo */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/15 rounded-full blur-[140px] pointer-events-none animate-pulse" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-violet-600/20 rounded-full blur-[100px] pointer-events-none" />

        {/* Top Floating System Status Tag */}
        <div className="absolute top-6 left-6 right-6 flex items-center justify-between font-mono text-xs text-cyan-400">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-cyan-400 animate-ping" />
            <span>[ SYSTEM PROTOCOL: HUNTER_AWAKENING_V2.0 ]</span>
          </div>

          <button
            onClick={handleComplete}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-cyan-500/40 bg-cyan-950/40 text-cyan-300 hover:bg-cyan-500/20 transition text-[11px] font-bold"
          >
            <span>Skip [ESC]</span>
            <ChevronRight size={13} />
          </button>
        </div>

        {/* CENTRAL HOLOGRAPHIC CONTAINER */}
        <div className="relative w-full max-w-xl mx-auto text-center z-10 px-4">

          {/* Phase 0: System Boot Loading */}
          {phase === 0 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="space-y-4"
            >
              <div className="h-16 w-16 mx-auto rounded-2xl bg-cyan-500/10 border border-cyan-400 flex items-center justify-center text-cyan-400 shadow-[0_0_25px_rgba(6,182,212,0.5)]">
                <Terminal size={32} className="animate-pulse" />
              </div>

              <div className="text-[11px] font-mono text-cyan-400 tracking-widest uppercase">
                CONNECTING TO MONARCH NEURAL CORE...
              </div>

              <h2 className="text-2xl sm:text-3xl font-black font-['Orbitron',sans-serif] text-white">
                INITIALIZING SYSTEM
              </h2>

              {/* Progress Bar */}
              <div className="w-full max-w-sm mx-auto h-2 bg-slate-900 rounded-full overflow-hidden border border-cyan-500/30 p-[1px]">
                <div
                  className="h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 rounded-full transition-all duration-75 shadow-[0_0_10px_#00f0ff]"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <div className="font-mono text-xs text-slate-400">{progress}% LOADED</div>
            </motion.div>
          )}

          {/* Phase 1: Hunter Detection Alert */}
          {phase === 1 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.85 }}
              className="space-y-4"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/20 border border-red-500/50 text-red-400 text-xs font-mono font-bold animate-pulse">
                <ShieldAlert size={14} />
                <span>CRITICAL HUNTER DETECTED</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-black font-['Orbitron',sans-serif] text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-cyan-300 to-white drop-shadow-[0_0_30px_rgba(239,68,68,0.7)]">
                GOVIND SHARMA
              </h1>

              <div className="text-xs sm:text-sm font-mono text-cyan-300">
                CLASS: SHADOW MONARCH FULL-STACK ARCHITECT // LEVEL 99
              </div>
            </motion.div>
          )}

          {/* Phase 2: Monarch Blue Eye Awakening */}
          {phase === 2 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.2 }}
              className="space-y-6"
            >
              {/* Glowing Monarch Eye Symbol */}
              <div className="relative h-28 w-28 mx-auto flex items-center justify-center">
                <div className="absolute inset-0 rounded-full bg-cyan-400/30 blur-2xl animate-ping" />
                <div className="absolute inset-2 rounded-full border-2 border-cyan-400 shadow-[0_0_30px_#00f0ff] animate-spin" style={{ animationDuration: "6s" }} />
                <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 via-blue-600 to-violet-700 text-black shadow-[0_0_40px_rgba(0,240,255,0.9)]">
                  <Swords size={38} className="text-white" />
                </div>
              </div>

              <div className="font-['Cinzel',serif] text-4xl sm:text-6xl font-black tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-white to-violet-400 drop-shadow-[0_0_35px_rgba(0,240,255,0.9)]">
                ARISE
              </div>

              <div className="text-xs font-mono text-cyan-300 uppercase tracking-widest">
                일어서라 • THE SYSTEM HAS CHOSEN ITS MONARCH
              </div>
            </motion.div>
          )}

          {/* Phase 3: Access Granted */}
          {phase === 3 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-4"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-500/20 border border-green-500/60 text-green-400 text-xs font-mono font-bold shadow-[0_0_20px_rgba(34,197,94,0.4)]">
                <Sparkles size={14} />
                <span>AWAKENING COMPLETE • ACCESS GRANTED</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold font-['Rajdhani',sans-serif] text-white">
                Welcome to the Monarch's Realm
              </h2>

              <p className="text-xs font-mono text-slate-400">
                Entering Govind Sharma's 3D Portfolio Domain...
              </p>
            </motion.div>
          )}

        </div>

        {/* Bottom Tech Brackets */}
        <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between font-mono text-[10px] text-slate-500">
          <span>COORDINATES: LAT 28.4595° N, LON 77.0266° E</span>
          <span>MANA CAPACITY: 100% (PEAK)</span>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
