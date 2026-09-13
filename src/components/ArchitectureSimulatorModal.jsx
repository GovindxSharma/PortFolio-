import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Cpu,
  Database,
  Radio,
  Zap,
  CheckCircle2,
  X,
  Play,
  RotateCcw,
  Sparkles,
  ArrowRight,
  TrendingDown,
  Gauge,
  Layers,
  ShoppingBag,
} from "lucide-react";
import { soundFX } from "../utils/soundEffects";

export default function ArchitectureSimulatorModal({ isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState("database"); // 'database' | 'websocket' | 'mealfit'

  // Tab 1: DB Indexing State
  const [useIndex, setUseIndex] = useState(true);
  const [dbSimulating, setDbSimulating] = useState(false);
  const [dbResult, setDbResult] = useState(null);

  // Tab 2: WebSocket Simulation State
  const [wsSimulating, setWsSimulating] = useState(false);
  const [packetsSent, setPacketsSent] = useState(0);
  const [wsLatency, setWsLatency] = useState(24);
  const [httpLatency, setHttpLatency] = useState(210);

  // Tab 3: MealFit Algorithm State
  const [budget, setBudget] = useState(120);
  const [proteinTarget, setProteinTarget] = useState(85);

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

  // Run DB Query Simulation
  const runDbSimulation = () => {
    soundFX.playClick();
    setDbSimulating(true);
    setDbResult(null);

    setTimeout(() => {
      soundFX.playLevelUp();
      setDbSimulating(false);
      setDbResult({
        scanType: useIndex ? "IXSCAN (B-Tree Index)" : "COLLSCAN (Full Table Scan)",
        docsExamined: useIndex ? 1 : 100000,
        keysExamined: useIndex ? 1 : 0,
        executionTimeMs: useIndex ? 4.2 : 146.8,
        memoryUsedKB: useIndex ? 12 : 12400,
        latencyCut: useIndex ? "97.1%" : "0%",
      });
    }, useIndex ? 350 : 800);
  };

  // Run WebSocket Packet Burst
  const runWsSimulation = () => {
    soundFX.playClick();
    setWsSimulating(true);
    setPacketsSent(0);

    let count = 0;
    const interval = setInterval(() => {
      count += 10;
      setPacketsSent(count);
      setWsLatency(Math.floor(20 + Math.random() * 12));
      setHttpLatency(Math.floor(180 + Math.random() * 60));

      if (count >= 100) {
        clearInterval(interval);
        setWsSimulating(false);
        soundFX.playLevelUp();
      }
    }, 80);
  };

  // Compute MealFit Linear Diet Plan
  const calculateMealFitPlan = () => {
    const isBudgetStrict = budget < 90;
    const proteinCostPerGram = isBudgetStrict ? 1.1 : 1.4;
    const estimatedProtein = Math.min(proteinTarget, Math.round(budget / proteinCostPerGram));
    const estimatedCalories = Math.round(1600 + (budget / 250) * 1000);
    
    const items = isBudgetStrict
      ? [
          { name: "Roasted Kala Chana (100g)", protein: "20g", cal: "380", cost: "₹18" },
          { name: "Sattu Drink w/ Lemon (60g)", protein: "15g", cal: "240", cost: "₹15" },
          { name: "Double Toned Milk / Curd (300ml)", protein: "10g", cal: "180", cost: "₹16" },
          { name: "Moong Dal Khichdi (250g)", protein: "18g", cal: "450", cost: "₹22" },
        ]
      : [
          { name: "Low-Fat Paneer / Soya Chunks (150g)", protein: "35g", cal: "320", cost: "₹45" },
          { name: "Sprouted Moong & Chana Bowl", protein: "18g", cal: "260", cost: "₹20" },
          { name: "Boiled Eggs / Tofu Plate (4 pcs)", protein: "24g", cal: "280", cost: "₹30" },
          { name: "Brown Rice & High-Protein Dal", protein: "16g", cal: "420", cost: "₹25" },
        ];

    return { estimatedProtein, estimatedCalories, items };
  };

  const mealPlan = calculateMealFitPlan();

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div
        onClick={() => {
          soundFX.playClick();
          onClose();
        }}
        className="fixed inset-0 z-[120] flex items-center justify-center p-3 sm:p-5 overflow-y-auto no-scrollbar cursor-pointer"
      >
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/85 backdrop-blur-md"
        />

        {/* Modal Card */}
        <motion.div
          onClick={(e) => e.stopPropagation()}
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 20 }}
          className="relative w-full max-w-3xl bg-white dark:bg-[#0c0e15] border border-cyan-500/40 rounded-3xl p-5 sm:p-7 shadow-[0_0_60px_rgba(6,182,212,0.3)] text-slate-900 dark:text-slate-100 z-10 cursor-default"
        >
          {/* Top Bar */}
          <div className="flex items-start justify-between gap-4 border-b border-slate-200 dark:border-white/10 pb-4">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white shadow-lg shadow-cyan-500/30">
                <Cpu className="w-6 h-6" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono font-black text-cyan-600 dark:text-cyan-400 uppercase tracking-widest">
                    [ LIVE ENGINEERING LAB // PROOF OF WORK ]
                  </span>
                  <span className="px-2 py-0.5 rounded-full text-[9px] font-mono font-bold bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
                    INTERACTIVE SIMULATOR
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-black font-['Rajdhani',sans-serif]">
                  Production System Architecture Simulator
                </h3>
              </div>
            </div>

            <button
              onClick={() => {
                soundFX.playClick();
                onClose();
              }}
              className="p-2 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/10 transition"
              aria-label="Close simulator"
            >
              <X size={18} />
            </button>
          </div>

          {/* Tab Navigation */}
          <div className="flex flex-wrap gap-2 my-4">
            {[
              { id: "database", label: "MongoDB Query Optimizer", icon: Database, metric: "-35% to -97% Latency" },
              { id: "websocket", label: "WebSocket vs HTTP Polling", icon: Radio, metric: "<30ms vs 200ms+" },
              { id: "mealfit", label: "MealFit Linear Nutrition Engine", icon: ShoppingBag, metric: "₹40–₹250/day" },
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
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-mono font-bold transition-all ${
                    isActive
                      ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-500/20"
                      : "bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-white/10"
                  }`}
                >
                  <Icon size={14} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* TAB 1: MONGODB INDEXING SIMULATION */}
          {activeTab === "database" && (
            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/5 space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-xs font-mono font-bold text-slate-700 dark:text-slate-300">
                    Query Payload:
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-mono text-slate-500">Compound B-Tree Index:</span>
                    <button
                      onClick={() => setUseIndex(!useIndex)}
                      className={`px-3 py-1 rounded-lg text-xs font-mono font-bold transition ${
                        useIndex
                          ? "bg-emerald-500/20 text-emerald-500 border border-emerald-500/40"
                          : "bg-rose-500/20 text-rose-400 border border-rose-500/40"
                      }`}
                    >
                      {useIndex ? "ENABLED { userId: 1, status: 1 }" : "DISABLED (COLLSCAN)"}
                    </button>
                  </div>
                </div>

                <div className="p-2.5 rounded-xl bg-slate-900 text-cyan-300 font-mono text-xs overflow-x-auto">
                  <code>db.orders.find({`{ userId: "hunter_982", status: "completed" }`}).sort({`{ createdAt: -1 }`})</code>
                </div>

                <button
                  onClick={runDbSimulation}
                  disabled={dbSimulating}
                  className="w-full py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-mono text-xs font-bold tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20 active:scale-98 transition disabled:opacity-50"
                >
                  <Play size={14} className={dbSimulating ? "animate-spin" : ""} />
                  <span>{dbSimulating ? "RUNNING QUERY EXPLAIN PLAN..." : "EXECUTE QUERY SIMULATION"}</span>
                </button>
              </div>

              {/* Simulation Result Output */}
              {dbResult && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 space-y-3"
                >
                  <div className="flex items-center justify-between text-xs font-mono font-bold text-cyan-600 dark:text-cyan-400">
                    <span className="flex items-center gap-1.5">
                      <CheckCircle2 size={14} /> EXPLAIN PLAN TELEMETRY:
                    </span>
                    <span>{dbResult.scanType}</span>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center font-mono">
                    <div className="p-2.5 rounded-xl bg-white/60 dark:bg-black/30 border border-slate-200 dark:border-white/5">
                      <div className="text-base sm:text-lg font-black text-cyan-500">
                        {dbResult.executionTimeMs} ms
                      </div>
                      <div className="text-[10px] text-slate-500">Execution Time</div>
                    </div>
                    <div className="p-2.5 rounded-xl bg-white/60 dark:bg-black/30 border border-slate-200 dark:border-white/5">
                      <div className="text-base sm:text-lg font-black text-violet-500">
                        {dbResult.docsExamined.toLocaleString()}
                      </div>
                      <div className="text-[10px] text-slate-500">Docs Scanned</div>
                    </div>
                    <div className="p-2.5 rounded-xl bg-white/60 dark:bg-black/30 border border-slate-200 dark:border-white/5">
                      <div className="text-base sm:text-lg font-black text-emerald-500">
                        {dbResult.memoryUsedKB} KB
                      </div>
                      <div className="text-[10px] text-slate-500">RAM Allocated</div>
                    </div>
                    <div className="p-2.5 rounded-xl bg-white/60 dark:bg-black/30 border border-slate-200 dark:border-white/5">
                      <div className="text-base sm:text-lg font-black text-amber-500">
                        {dbResult.latencyCut}
                      </div>
                      <div className="text-[10px] text-slate-500">Latency Cut</div>
                    </div>
                  </div>

                  <p className="text-xs font-mono text-slate-600 dark:text-slate-300">
                    <strong>Engineering Takeaway:</strong> Without compounding indices, MongoDB performs an O(N) full table scan loading 100k documents into memory. By index-bounding with B-Trees, queries execute in O(log N) with zero sorting memory overhead.
                  </p>
                </motion.div>
              )}
            </div>
          )}

          {/* TAB 2: WEBSOCKET VS HTTP POLLING */}
          {activeTab === "websocket" && (
            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/5 space-y-3">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="font-bold text-slate-700 dark:text-slate-300">
                    Transmit 100 Live Event Frames:
                  </span>
                  <span className="text-cyan-500 font-bold">Packets Delivered: {packetsSent} / 100</span>
                </div>

                <div className="w-full h-2 rounded-full bg-slate-200 dark:bg-white/10 overflow-hidden">
                  <div
                    style={{ width: `${packetsSent}%` }}
                    className="h-full bg-gradient-to-r from-cyan-400 to-blue-600 transition-all duration-100"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-center font-mono">
                    <div className="text-xs font-bold text-cyan-600 dark:text-cyan-400 mb-1">
                      WebSocket Protocol (Socket.io)
                    </div>
                    <div className="text-2xl font-black text-cyan-500">{wsLatency} ms</div>
                    <div className="text-[10px] text-slate-500 mt-1">2-Byte Header · Persistent TCP Pipe</div>
                  </div>

                  <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-center font-mono">
                    <div className="text-xs font-bold text-rose-500 mb-1">
                      HTTP Short Polling
                    </div>
                    <div className="text-2xl font-black text-rose-500">{httpLatency} ms</div>
                    <div className="text-[10px] text-slate-500 mt-1">1.2 KB HTTP Headers Per Request · TCP Reconnection</div>
                  </div>
                </div>

                <button
                  onClick={runWsSimulation}
                  disabled={wsSimulating}
                  className="w-full py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-mono text-xs font-bold tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20 active:scale-98 transition disabled:opacity-50"
                >
                  <Radio size={14} className={wsSimulating ? "animate-pulse text-cyan-300" : ""} />
                  <span>{wsSimulating ? "EMITTING SOCKET EVENTS..." : "SEND 100 REAL-TIME PACKETS"}</span>
                </button>
              </div>

              <div className="p-3.5 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-slate-700 dark:text-slate-300">
                <strong>Why WebSockets for Real-Time Apps:</strong> By maintaining a single long-lived duplex TCP connection, packet overhead drops from ~1.2 KB to 2 bytes per message, guaranteeing sub-50ms dispatch for notifications, chat, and live tracking.
              </div>
            </div>
          )}

          {/* TAB 3: MEALFIT LINEAR NUTRITION CALIBRATOR */}
          {activeTab === "mealfit" && (
            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/5 space-y-4 font-mono">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <div className="flex justify-between text-xs font-bold mb-1.5">
                      <span>Daily Budget:</span>
                      <span className="text-cyan-500">₹{budget}/day</span>
                    </div>
                    <input
                      type="range"
                      min="40"
                      max="250"
                      step="10"
                      value={budget}
                      onChange={(e) => setBudget(Number(e.target.value))}
                      className="w-full accent-cyan-500 cursor-pointer"
                    />
                    <div className="flex justify-between text-[10px] text-slate-500 mt-1">
                      <span>₹40 (Hostel/Strict)</span>
                      <span>₹120 (Standard)</span>
                      <span>₹250 (Premium)</span>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs font-bold mb-1.5">
                      <span>Target Protein:</span>
                      <span className="text-violet-500">{proteinTarget}g</span>
                    </div>
                    <input
                      type="range"
                      min="50"
                      max="140"
                      step="5"
                      value={proteinTarget}
                      onChange={(e) => setProteinTarget(Number(e.target.value))}
                      className="w-full accent-violet-500 cursor-pointer"
                    />
                    <div className="flex justify-between text-[10px] text-slate-500 mt-1">
                      <span>50g (Maintenance)</span>
                      <span>90g (Fitness)</span>
                      <span>140g (Hypertrophy)</span>
                    </div>
                  </div>
                </div>

                {/* Live Algorithm Output */}
                <div className="p-3 rounded-xl bg-slate-100 dark:bg-black/40 border border-slate-200 dark:border-white/5 space-y-2">
                  <div className="flex items-center justify-between text-xs font-bold text-slate-800 dark:text-slate-200">
                    <span>Generated Kirana Grocery Basket:</span>
                    <span className="text-emerald-500">
                      {mealPlan.estimatedProtein}g Protein / {mealPlan.estimatedCalories} kcal
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px]">
                    {mealPlan.items.map((item, idx) => (
                      <div
                        key={idx}
                        className="p-2 rounded-lg bg-white dark:bg-[#12141d] border border-slate-200 dark:border-white/5 flex items-center justify-between"
                      >
                        <span className="text-slate-700 dark:text-slate-300 font-medium truncate max-w-[160px]">
                          {item.name}
                        </span>
                        <div className="flex items-center gap-1.5 shrink-0">
                          <span className="text-violet-500 font-bold">{item.protein}</span>
                          <span className="text-slate-400">|</span>
                          <span className="text-emerald-500 font-bold">{item.cost}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-violet-500/10 border border-violet-500/20 text-xs font-mono text-slate-700 dark:text-slate-300">
                <strong>Real Production Logic in MealFit:</strong> Implemented linear programming algorithms matching Indian local Kirana staples (Sattu, Chana, Moong, Paneer) to protein requirements while keeping total daily expenditure constrained to user budget limits.
              </div>
            </div>
          )}

          {/* Footer Action */}
          <div className="mt-5 pt-3 border-t border-slate-200 dark:border-white/10 flex items-center justify-between">
            <span className="text-[11px] font-mono text-slate-500">
              Interactive telemetry powered by client-side browser benchmarking
            </span>
            <button
              onClick={() => {
                soundFX.playClick();
                onClose();
              }}
              className="px-4 py-2 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-xs font-mono font-bold hover:opacity-90 active:scale-95 transition"
            >
              Close Simulator [Esc]
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
