import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import {
  Sparkles,
  Zap,
  Sliders,
  Move,
  Layers,
  Activity,
  Copy,
  Check,
  RotateCcw,
  Play,
  Cpu,
  Radio,
  Gauge,
  CheckCircle2,
} from "lucide-react";
import { soundFX } from "../utils/soundEffects";

export default function UiUxMotionLab() {
  const [activeTab, setActiveTab] = useState("physics"); // 'physics' | 'glass' | 'stream' | 'algo'

  // Tab 1: Spring Physics State
  const [stiffness, setStiffness] = useState(400);
  const [damping, setDamping] = useState(25);
  const [mass, setMass] = useState(1);
  const [fps, setFps] = useState(60);
  const [dragCount, setDragCount] = useState(0);

  // Tab 2: Design Token & Glassmorphism Shader State
  const [blurAmount, setBlurAmount] = useState(16);
  const [bgAlpha, setBgAlpha] = useState(0.85);
  const [glowIntensity, setGlowIntensity] = useState(30);
  const [borderRadius, setBorderRadius] = useState(24);
  const [copiedCode, setCopiedCode] = useState(false);

  // Tab 3: Real-Time Streamer Simulation
  const [isStreaming, setIsStreaming] = useState(false);
  const [packets, setPackets] = useState([]);
  const [avgLatency, setAvgLatency] = useState(28);

  // Tab 4: B-Tree vs Scan Simulation
  const [isRacing, setIsRacing] = useState(false);
  const [indexProgress, setIndexProgress] = useState(0);
  const [scanProgress, setScanProgress] = useState(0);
  const [raceWinner, setRaceWinner] = useState(null);

  // FPS Monitor
  useEffect(() => {
    let frameCount = 0;
    let lastTime = performance.now();
    let animId;

    const calculateFps = (now) => {
      frameCount++;
      if (now - lastTime >= 1000) {
        setFps(Math.round((frameCount * 1000) / (now - lastTime)));
        frameCount = 0;
        lastTime = now;
      }
      animId = requestAnimationFrame(calculateFps);
    };

    animId = requestAnimationFrame(calculateFps);
    return () => cancelAnimationFrame(animId);
  }, []);

  // Preset Handlers for Motion
  const applyMotionPreset = (preset) => {
    soundFX.playClick();
    if (preset === "snappy") {
      setStiffness(600);
      setDamping(30);
      setMass(0.8);
    } else if (preset === "liquid") {
      setStiffness(250);
      setDamping(20);
      setMass(1.2);
    } else if (preset === "bouncy") {
      setStiffness(500);
      setDamping(12);
      setMass(1);
    } else if (preset === "heavy") {
      setStiffness(200);
      setDamping(35);
      setMass(2.5);
    }
  };

  // Copy CSS Tokens
  const handleCopyTokens = () => {
    soundFX.playClick();
    const css = `/* Govind's Glassmorphism & UI Tokens */
.custom-hologram-card {
  backdrop-filter: blur(${blurAmount}px);
  -webkit-backdrop-filter: blur(${blurAmount}px);
  background-color: rgba(16, 18, 24, ${bgAlpha});
  border-radius: ${borderRadius}px;
  border: 1px solid rgba(6, 182, 212, ${glowIntensity / 100});
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5), 0 0 ${glowIntensity}px rgba(6, 182, 212, ${glowIntensity / 200});
}`;
    navigator.clipboard.writeText(css);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  // Run WebSocket Stream Simulator
  const triggerStreamBurst = () => {
    soundFX.playClick();
    setIsStreaming(true);
    setPackets([]);

    let count = 0;
    const interval = setInterval(() => {
      count++;
      const latency = Math.floor(18 + Math.random() * 16);
      setPackets((prev) => [
        { id: count, timestamp: new Date().toLocaleTimeString(), latency, status: "ACK_DELIVERED" },
        ...prev.slice(0, 7),
      ]);
      setAvgLatency(latency);

      if (count >= 15) {
        clearInterval(interval);
        setIsStreaming(false);
        soundFX.playLevelUp();
        confetti({
          particleCount: 50,
          spread: 60,
          origin: { y: 0.7 },
          colors: ["#00f0ff", "#a855f7", "#10b981"],
        });
      }
    }, 120);
  };

  // Run B-Tree Index Race
  const runAlgorithmRace = () => {
    soundFX.playClick();
    setIsRacing(true);
    setIndexProgress(0);
    setScanProgress(0);
    setRaceWinner(null);

    // B-Tree finishes in ~200ms
    setTimeout(() => {
      setIndexProgress(100);
      setRaceWinner("B-Tree IXSCAN (1 Step / 3.8ms)");
      soundFX.playLevelUp();
    }, 220);

    // Full scan takes 1400ms
    let p = 0;
    const interval = setInterval(() => {
      p += 8;
      setScanProgress(Math.min(p, 100));
      if (p >= 100) {
        clearInterval(interval);
        setIsRacing(false);
      }
    }, 100);
  };

  return (
    <div className="mt-8 rounded-3xl border border-cyan-500/30 bg-slate-900/60 dark:bg-[#0b0d13]/90 backdrop-blur-2xl p-4 sm:p-7 shadow-[0_10px_40px_rgba(0,0,0,0.4)]">
      {/* Top Banner */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-slate-200/20 dark:border-white/10 pb-4 mb-5">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-cyan-500 to-violet-600 flex items-center justify-center text-white shadow-lg shadow-cyan-500/30">
            <Activity className="h-5 w-5 animate-pulse" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono font-bold tracking-widest text-cyan-400 uppercase">
                [ INTERACTIVE ENGINEERING LAB // LIVE SANDBOX ]
              </span>
              <span className="px-2 py-0.2 rounded-full text-[9px] font-mono font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                {fps} FPS ACTIVE
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold font-['Rajdhani',sans-serif] text-slate-900 dark:text-white">
              Live UI/UX Motion & System Architecture Playground
            </h3>
          </div>
        </div>

        {/* Tab Selection Chips */}
        <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-slate-800/60 dark:bg-black/40 border border-white/5">
          {[
            { id: "physics", label: "Spring Motion", icon: Move },
            { id: "glass", label: "Token Shader", icon: Sliders },
            { id: "stream", label: "Real-time Stream", icon: Radio },
            { id: "algo", label: "B-Tree Index Race", icon: Cpu },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => {
                  soundFX.playClick();
                  setActiveTab(tab.id);
                }}
                onMouseEnter={() => soundFX.playHover()}
                className={`flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition ${
                  isActive
                    ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md"
                    : "text-slate-400 hover:text-white hover:bg-white/5"
                }`}
              >
                <Icon size={12} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* ================= TAB 1: SPRING PHYSICS & MICRO-INTERACTIONS ================= */}
      {activeTab === "physics" && (
        <div className="grid lg:grid-cols-12 gap-6 items-center">
          {/* Controls */}
          <div className="lg:col-span-6 space-y-4 font-mono text-xs">
            <div className="flex items-center justify-between">
              <span className="text-slate-400 font-bold uppercase">Physics Calibration:</span>
              <span className="text-cyan-400 font-bold">Framer Motion Spring Engine</span>
            </div>

            {/* Presets */}
            <div className="flex flex-wrap gap-1.5">
              <span className="text-slate-500 self-center mr-1 text-[11px]">Presets:</span>
              {[
                { id: "snappy", label: "Snappy UI" },
                { id: "liquid", label: "Liquid Fluid" },
                { id: "bouncy", label: "Elastic Bouncy" },
                { id: "heavy", label: "Heavy Mass" },
              ].map((p) => (
                <button
                  key={p.id}
                  onClick={() => applyMotionPreset(p.id)}
                  className="px-2.5 py-1 rounded-lg bg-slate-800/80 hover:bg-cyan-500/20 text-slate-300 hover:text-cyan-400 border border-white/10 hover:border-cyan-400/40 text-[11px] font-bold transition"
                >
                  {p.label}
                </button>
              ))}
            </div>

            {/* Stiffness Slider */}
            <div className="p-3 rounded-2xl bg-white/5 border border-white/5 space-y-1.5">
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-300">Stiffness (k): {stiffness}</span>
                <span className="text-slate-500">Fast snap & velocity</span>
              </div>
              <input
                type="range"
                min="100"
                max="900"
                step="25"
                value={stiffness}
                onChange={(e) => setStiffness(Number(e.target.value))}
                className="w-full accent-cyan-400 cursor-pointer"
              />
            </div>

            {/* Damping Slider */}
            <div className="p-3 rounded-2xl bg-white/5 border border-white/5 space-y-1.5">
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-300">Damping (c): {damping}</span>
                <span className="text-slate-500">Oscillation friction</span>
              </div>
              <input
                type="range"
                min="5"
                max="60"
                step="1"
                value={damping}
                onChange={(e) => setDamping(Number(e.target.value))}
                className="w-full accent-violet-400 cursor-pointer"
              />
            </div>

            {/* Mass Slider */}
            <div className="p-3 rounded-2xl bg-white/5 border border-white/5 space-y-1.5">
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-300">Mass (m): {mass}</span>
                <span className="text-slate-500">Inertial weight</span>
              </div>
              <input
                type="range"
                min="0.2"
                max="4"
                step="0.1"
                value={mass}
                onChange={(e) => setMass(Number(e.target.value))}
                className="w-full accent-blue-400 cursor-pointer"
              />
            </div>
          </div>

          {/* Interactive Drag & Kinetic Playground */}
          <div className="lg:col-span-6 flex flex-col items-center justify-center p-6 rounded-3xl bg-slate-950/80 border border-cyan-500/20 relative min-h-[260px] overflow-hidden">
            <div className="absolute top-3 left-3 flex items-center gap-1.5 text-[10px] font-mono text-cyan-400">
              <Move size={12} />
              <span>DRAG ANYWHERE TO TEST PHYSICS</span>
            </div>

            <div className="absolute top-3 right-3 text-[10px] font-mono text-slate-500">
              Drags: {dragCount}
            </div>

            <motion.div
              drag
              dragConstraints={{ left: -120, right: 120, top: -70, bottom: 70 }}
              dragElastic={0.25}
              onDragStart={() => {
                soundFX.playHover();
                setDragCount((prev) => prev + 1);
              }}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              animate={{ x: 0, y: 0 }}
              transition={{ type: "spring", stiffness, damping, mass }}
              className="cursor-grab active:cursor-grabbing p-6 rounded-3xl bg-gradient-to-br from-cyan-500/20 via-blue-600/30 to-violet-600/40 border border-cyan-400/60 shadow-[0_0_35px_rgba(6,182,212,0.35)] backdrop-blur-xl flex flex-col items-center justify-center text-center select-none"
            >
              <div className="h-12 w-12 rounded-2xl bg-cyan-400 text-black flex items-center justify-center shadow-lg mb-2">
                <Sparkles size={24} />
              </div>
              <span className="font-bold text-white font-['Rajdhani',sans-serif] text-base">
                Interactive Mana Orb
              </span>
              <span className="text-[10px] font-mono text-cyan-300 mt-0.5">
                Release to snap with spring physics
              </span>
            </motion.div>

            <div className="mt-4 text-[11px] font-mono text-slate-400 text-center">
              Testing active 60 FPS spring telemetry & gesture boundary constraints.
            </div>
          </div>
        </div>
      )}

      {/* ================= TAB 2: GLASSMORPHISM & TOKEN SHADER ================= */}
      {activeTab === "glass" && (
        <div className="grid lg:grid-cols-12 gap-6 items-center">
          {/* Token Controls */}
          <div className="lg:col-span-6 space-y-4 font-mono text-xs">
            <div className="flex items-center justify-between">
              <span className="text-slate-400 font-bold uppercase">Design Token Shader:</span>
              <button
                onClick={handleCopyTokens}
                className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-cyan-500/20 text-cyan-300 hover:bg-cyan-500/30 border border-cyan-500/40 text-[11px] font-bold transition active:scale-95"
              >
                {copiedCode ? <Check size={12} /> : <Copy size={12} />}
                <span>{copiedCode ? "Tokens Copied!" : "Copy CSS Tokens"}</span>
              </button>
            </div>

            {/* Blur Slider */}
            <div className="p-3 rounded-2xl bg-white/5 border border-white/5 space-y-1.5">
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-300">Backdrop Blur: {blurAmount}px</span>
              </div>
              <input
                type="range"
                min="0"
                max="32"
                value={blurAmount}
                onChange={(e) => setBlurAmount(Number(e.target.value))}
                className="w-full accent-cyan-400 cursor-pointer"
              />
            </div>

            {/* Background Opacity Slider */}
            <div className="p-3 rounded-2xl bg-white/5 border border-white/5 space-y-1.5">
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-300">Surface Opacity: {Math.round(bgAlpha * 100)}%</span>
              </div>
              <input
                type="range"
                min="0.1"
                max="0.95"
                step="0.05"
                value={bgAlpha}
                onChange={(e) => setBgAlpha(Number(e.target.value))}
                className="w-full accent-blue-400 cursor-pointer"
              />
            </div>

            {/* Glow Intensity Slider */}
            <div className="p-3 rounded-2xl bg-white/5 border border-white/5 space-y-1.5">
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-300">Glow & Elevation: {glowIntensity}px</span>
              </div>
              <input
                type="range"
                min="0"
                max="60"
                value={glowIntensity}
                onChange={(e) => setGlowIntensity(Number(e.target.value))}
                className="w-full accent-violet-400 cursor-pointer"
              />
            </div>

            {/* Border Radius */}
            <div className="p-3 rounded-2xl bg-white/5 border border-white/5 space-y-1.5">
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-300">Border Radius: {borderRadius}px</span>
              </div>
              <input
                type="range"
                min="8"
                max="36"
                value={borderRadius}
                onChange={(e) => setBorderRadius(Number(e.target.value))}
                className="w-full accent-emerald-400 cursor-pointer"
              />
            </div>
          </div>

          {/* Live Render Preview Card */}
          <div className="lg:col-span-6 flex flex-col items-center justify-center p-6 rounded-3xl bg-slate-950/80 border border-white/10 relative min-h-[260px] overflow-hidden">
            {/* Background decorative elements to show backdrop blur */}
            <div className="absolute -top-6 -left-6 w-32 h-32 rounded-full bg-cyan-500/30 blur-xl pointer-events-none" />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full bg-violet-600/40 blur-xl pointer-events-none" />

            <div
              style={{
                backdropFilter: `blur(${blurAmount}px)`,
                WebkitBackdropFilter: `blur(${blurAmount}px)`,
                backgroundColor: `rgba(16, 18, 24, ${bgAlpha})`,
                borderRadius: `${borderRadius}px`,
                border: `1px solid rgba(6, 182, 212, ${glowIntensity / 100})`,
                boxShadow: `0 10px 30px rgba(0,0,0,0.5), 0 0 ${glowIntensity}px rgba(6, 182, 212, ${glowIntensity / 200})`,
              }}
              className="w-full max-w-sm p-6 text-white transition-all duration-150 relative z-10"
            >
              <div className="flex items-center justify-between mb-3 border-b border-white/10 pb-2">
                <span className="text-xs font-mono font-bold text-cyan-400 flex items-center gap-1.5">
                  <Sliders size={13} /> DYNAMIC TOKEN CARD
                </span>
                <span className="text-[10px] font-mono text-emerald-400 font-bold">LIVE RENDER</span>
              </div>
              <h4 className="text-lg font-bold font-['Rajdhani',sans-serif]">
                Scalable Production UI Engine
              </h4>
              <p className="text-xs font-mono text-slate-300 mt-1 leading-relaxed">
                Adaptive lighting, hardware-accelerated shaders, and pixel-precise design token matrices.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* ================= TAB 3: REAL-TIME WEBSOCKET STREAM ================= */}
      {activeTab === "stream" && (
        <div className="grid lg:grid-cols-12 gap-6 items-center">
          <div className="lg:col-span-5 space-y-4 font-mono text-xs">
            <span className="text-slate-400 font-bold uppercase block">
              WebSocket Event Channel Simulation:
            </span>
            <p className="text-slate-300 leading-relaxed font-sans text-xs">
              Simulates real-world bidirectional Socket.io packet broadcasts with sequence validation and round-trip ping verification.
            </p>

            <button
              onClick={triggerStreamBurst}
              disabled={isStreaming}
              className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-violet-600 text-white font-mono font-bold text-xs shadow-lg hover:scale-105 active:scale-95 transition disabled:opacity-50 flex items-center justify-center gap-2"
            >
              <Radio size={14} className={isStreaming ? "animate-spin" : ""} />
              <span>{isStreaming ? "Streaming Packets..." : "Emit 15 Real-Time WebSocket Events"}</span>
            </button>

            <div className="grid grid-cols-2 gap-2">
              <div className="p-3 rounded-2xl bg-white/5 border border-white/5 text-center">
                <div className="text-xl font-bold font-['Rajdhani',sans-serif] text-cyan-400">
                  {avgLatency} ms
                </div>
                <div className="text-[10px] text-slate-500">Live Roundtrip Ping</div>
              </div>
              <div className="p-3 rounded-2xl bg-white/5 border border-white/5 text-center">
                <div className="text-xl font-bold font-['Rajdhani',sans-serif] text-emerald-400">
                  0%
                </div>
                <div className="text-[10px] text-slate-500">Packet Loss Rate</div>
              </div>
            </div>
          </div>

          {/* Packet Telemetry Stream */}
          <div className="lg:col-span-7 p-4 rounded-3xl bg-slate-950/90 border border-cyan-500/30 font-mono text-xs max-h-64 overflow-y-auto no-scrollbar">
            <div className="flex items-center justify-between border-b border-white/10 pb-2 mb-2 text-[10px] text-slate-400 font-bold">
              <span>PACKET ID & TIMESTAMP</span>
              <span>LATENCY</span>
              <span>VERIFICATION</span>
            </div>

            {packets.length === 0 ? (
              <div className="py-8 text-center text-slate-500">
                Click "Emit 15 Real-Time WebSocket Events" to stream live events.
              </div>
            ) : (
              <div className="space-y-1.5">
                {packets.map((pkt) => (
                  <div
                    key={pkt.id}
                    className="flex items-center justify-between p-2 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-[11px]"
                  >
                    <span className="text-slate-300">
                      #{String(pkt.id).padStart(2, "0")} [{pkt.timestamp}]
                    </span>
                    <span className="text-cyan-400 font-bold">{pkt.latency}ms</span>
                    <span className="text-emerald-400 font-bold flex items-center gap-1">
                      <CheckCircle2 size={12} /> {pkt.status}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* ================= TAB 4: B-TREE INDEXING RACE ================= */}
      {activeTab === "algo" && (
        <div className="grid lg:grid-cols-12 gap-6 items-center">
          <div className="lg:col-span-5 space-y-4 font-mono text-xs">
            <span className="text-slate-400 font-bold uppercase block">
              Database Query Latency Benchmark:
            </span>
            <p className="text-slate-300 leading-relaxed font-sans text-xs">
              Direct live comparison demonstrating why B-Tree indexing cuts MongoDB data retrieval latency by 35% to 97% across 100,000 documents.
            </p>

            <button
              onClick={runAlgorithmRace}
              disabled={isRacing}
              className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 text-white font-mono font-bold text-xs shadow-lg hover:scale-105 active:scale-95 transition disabled:opacity-50 flex items-center justify-center gap-2"
            >
              <Play size={14} />
              <span>{isRacing ? "Benchmarking Queries..." : "Run Index Performance Benchmark"}</span>
            </button>
          </div>

          {/* Race Bars */}
          <div className="lg:col-span-7 p-5 rounded-3xl bg-slate-950/90 border border-white/10 font-mono text-xs space-y-4">
            {/* 1. B-Tree Index */}
            <div>
              <div className="flex items-center justify-between text-xs mb-1.5">
                <span className="text-cyan-400 font-bold">1. B-Tree Index (IXSCAN): 3.8ms</span>
                <span className="text-emerald-400 font-bold">1 Document Examined</span>
              </div>
              <div className="h-3 w-full bg-slate-800 rounded-full overflow-hidden border border-cyan-500/30">
                <div
                  style={{ width: `${indexProgress}%` }}
                  className="h-full bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-full transition-all duration-200"
                />
              </div>
            </div>

            {/* 2. Full Table Scan */}
            <div>
              <div className="flex items-center justify-between text-xs mb-1.5">
                <span className="text-rose-400 font-bold">2. Full Table Scan (COLLSCAN): 146.8ms</span>
                <span className="text-slate-400 font-bold">100,000 Documents Examined</span>
              </div>
              <div className="h-3 w-full bg-slate-800 rounded-full overflow-hidden border border-rose-500/30">
                <div
                  style={{ width: `${scanProgress}%` }}
                  className="h-full bg-gradient-to-r from-rose-500 to-amber-500 rounded-full transition-all duration-100"
                />
              </div>
            </div>

            {raceWinner && (
              <div className="p-3 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 font-bold flex items-center gap-2">
                <Sparkles size={14} className="text-cyan-400 animate-spin" />
                <span>Benchmark Result: {raceWinner} — 97.4% Latency Reduction!</span>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
