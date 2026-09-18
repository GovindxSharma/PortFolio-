import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Swords, Shield, Zap, Sparkles, Flame, Snowflake, Crown, CheckCircle2 } from "lucide-react";
import { soundFX } from "../utils/soundEffects";

const shadowCommanders = [
  {
    id: "igris",
    name: "Igris (Blood-Red Commander)",
    title: "Master of Clean Code & Algorithms",
    role: "DSA & Data Structures General",
    rank: "Marshal Grade",
    icon: Swords,
    color: "from-red-600 to-rose-700",
    glow: "rgba(239, 68, 68, 0.4)",
    quote: "My blade strikes with O(1) optimal time complexity.",
    buff: "+100% Algorithmic Precision & Code Architecture",
    stats: { Atk: "98/100", Def: "95/100", Speed: "99/100", Mana: "3,500 MP" },
  },
  {
    id: "beru",
    name: "Beru (Ant King Devourer)",
    title: "Monarch of Backend & High Concurrency",
    role: "Node.js & Distributed Systems",
    rank: "Grand Marshal",
    icon: Crown,
    color: "from-cyan-500 to-blue-700",
    glow: "rgba(6, 182, 212, 0.5)",
    quote: "My King! I shall consume all server latency and crash bugs!",
    buff: "+200% High-Concurrency Backend Throughput",
    stats: { Atk: "100/100", Def: "92/100", Speed: "100/100", Mana: "5,000 MP" },
  },
  {
    id: "iron",
    name: "Iron (Shield Vanguard)",
    title: "Guardian of DevOps & Infrastructure",
    role: "Docker, CI/CD & Cloud Reliability",
    rank: "Elite Knight",
    icon: Shield,
    color: "from-amber-500 to-orange-700",
    glow: "rgba(245, 158, 11, 0.4)",
    quote: "No DDoS or deployment outage shall pierce my shield.",
    buff: "+150% Server Uptime & Zero Downtime Deploys",
    stats: { Atk: "90/100", Def: "100/100", Speed: "85/100", Mana: "2,800 MP" },
  },
  {
    id: "tank",
    name: "Tank (Frost Beast Core)",
    title: "Architect of Ultra-Fast UI/UX & Responsive Engines",
    role: "React, Vite, Tailwind CSS & Fluid Interactions",
    rank: "Elite Knight",
    icon: Snowflake,
    color: "from-violet-500 to-purple-800",
    glow: "rgba(147, 51, 234, 0.5)",
    quote: "Eliminating dropped frames into silky smooth 60 FPS across all devices.",
    buff: "+120% Visual Fluidity, Responsiveness & Accessible UX",
    stats: { Atk: "92/100", Def: "96/100", Speed: "94/100", Mana: "3,200 MP" },
  },
];

export default function ShadowArmy() {
  const [activeCommander, setActiveCommander] = useState(shadowCommanders[0]);

  const handleSelect = (commander) => {
    soundFX.playArise();
    setActiveCommander(commander);
  };

  return (
    <section className="relative py-3 sm:py-6 px-1 sm:px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto relative">

        {/* Section Header */}
        <div className="text-center mb-5 sm:mb-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-white/70 dark:bg-[#12141c] px-3.5 py-1 text-xs font-mono text-violet-400 font-bold mb-2.5">
            <Sparkles size={13} className="text-violet-400" />
            <span>[ SHADOW EXTRACTION STATION // ALLIED COMMANDERS ]</span>
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black font-['Rajdhani',sans-serif] text-slate-900 dark:text-[#f8fafc]">
            The Shadow Army of{" "}
            <span className="bg-gradient-to-r from-violet-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Engineering Disciplines
            </span>
          </h2>

          <p className="mt-1.5 text-xs sm:text-sm md:text-base text-slate-600 dark:text-slate-400 font-mono max-w-2xl mx-auto">
            Click to summon and inspect Govind's specialized shadow commanders commanding each technical domain.
          </p>
        </div>

        {/* COMMANDERS SELECTOR DOCK */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 mb-4 sm:mb-5">
          {shadowCommanders.map((c) => {
            const Icon = c.icon;
            const isSelected = activeCommander.id === c.id;

            return (
              <motion.button
                key={c.id}
                onClick={() => handleSelect(c)}
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className={`
                  p-3.5 sm:p-4 rounded-2xl border transition-all duration-300 text-left flex flex-col justify-between
                  bg-white/80 dark:bg-[#101218]/90 backdrop-blur-xl
                  ${
                    isSelected
                      ? "border-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.3)]"
                      : "border-slate-200 dark:border-white/10 hover:border-violet-500/40"
                  }
                `}
              >
                <div className="flex items-center justify-between mb-2.5">
                  <div
                    className={`h-9 w-9 sm:h-10 sm:w-10 rounded-xl flex items-center justify-center text-white bg-gradient-to-br ${c.color} shadow-lg`}
                  >
                    <Icon size={18} />
                  </div>
                  <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                    {c.rank}
                  </span>
                </div>

                <div>
                  <h4 className="text-sm font-bold font-['Rajdhani',sans-serif] text-slate-900 dark:text-white">
                    {c.name.split(" ")[0]}
                  </h4>
                  <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400 block truncate">
                    {c.role}
                  </span>
                </div>
              </motion.button>
            );
          })}
        </div>

        {/* ACTIVE COMMANDER SPOTLIGHT CARD */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCommander.id}
            initial={{ opacity: 0, y: 15, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -15, scale: 0.98 }}
            transition={{ duration: 0.3 }}
            className="
              relative rounded-3xl border border-cyan-500/40
              bg-white/90 dark:bg-[#101218]/95 backdrop-blur-2xl p-5 sm:p-6
              shadow-[0_0_40px_rgba(0,0,0,0.6)] text-slate-900 dark:text-white overflow-hidden
            "
          >
            {/* Ambient Background Aura */}
            <div
              className="absolute -right-20 -top-20 w-80 h-80 rounded-full blur-[120px] pointer-events-none opacity-30"
              style={{ background: activeCommander.glow }}
            />

            <div className="grid md:grid-cols-12 gap-5 sm:gap-7 items-center relative z-10">

              {/* Left Info (7 cols) */}
              <div className="md:col-span-7 space-y-3">
                <div className="flex items-center gap-2 font-mono text-xs text-cyan-400">
                  <span className="h-2 w-2 rounded-full bg-cyan-400 animate-ping" />
                  <span>[ SHADOW COMMANDER EXTRACTED & READY ]</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black font-['Rajdhani',sans-serif]">
                  {activeCommander.name}
                </h3>

                <p className="text-sm font-semibold text-cyan-400 font-mono">
                  {activeCommander.title}
                </p>

                {/* Quote in voice bubble */}
                <div className="p-3.5 rounded-2xl bg-slate-100 dark:bg-[#0c0d12] border border-slate-200 dark:border-white/5 text-xs sm:text-sm italic text-slate-700 dark:text-slate-300">
                  "{activeCommander.quote}"
                </div>

                {/* Applied Passive Buff */}
                <div className="flex items-center gap-2 p-3 rounded-xl bg-gradient-to-r from-violet-500/15 to-cyan-500/15 border border-cyan-500/30 font-mono text-xs text-cyan-400 font-bold">
                  <Sparkles size={14} className="text-cyan-400 animate-pulse" />
                  <span>BUFF: {activeCommander.buff}</span>
                </div>
              </div>

              {/* Right Combat Stats (5 cols) */}
              <div className="md:col-span-5 space-y-3 font-mono text-xs">
                <div className="p-4 rounded-2xl bg-slate-100 dark:bg-[#0c0d12] border border-slate-200 dark:border-white/5 space-y-2.5">
                  <span className="text-[10px] text-cyan-400 font-bold uppercase block border-b border-slate-200 dark:border-white/5 pb-1">
                    COMMANDER COMBAT METRICS
                  </span>

                  {Object.entries(activeCommander.stats).map(([k, v]) => (
                    <div key={k} className="flex items-center justify-between">
                      <span className="text-slate-500 dark:text-slate-400">{k}:</span>
                      <span className="font-bold text-slate-900 dark:text-cyan-300">{v}</span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => soundFX.playArise()}
                  className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-600 text-white font-bold font-mono text-xs shadow-lg hover:scale-105 transition flex items-center justify-center gap-2"
                >
                  <Zap size={14} />
                  <span>Summon Resonance</span>
                </button>
              </div>

            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
