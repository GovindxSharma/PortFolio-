import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Layers,
  X,
  Server,
  Database,
  ShieldCheck,
  Zap,
  Globe,
  Radio,
  Cpu,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Download,
} from "lucide-react";
import { soundFX } from "../utils/soundEffects";

export default function SystemArchitectureModal({ isOpen, onClose }) {
  const [activeSystem, setActiveSystem] = useState("enterprise"); // 'enterprise' | 'mealfit'
  const [selectedNode, setSelectedNode] = useState(null);

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

  const enterpriseNodes = [
    {
      id: "client",
      title: "React / Vite Frontend",
      icon: Globe,
      role: "User Interface & State Management",
      tech: "React.js, Tailwind CSS, Framer Motion, Axios",
      why: "Delivers responsive, zero-jank UI with 60 FPS spring physics and sub-100ms initial DOM paint.",
      impact: "Consistent 95+ Google Lighthouse scores across performance and accessibility.",
    },
    {
      id: "edge",
      title: "Cloudflare Edge & CDN",
      icon: ShieldCheck,
      role: "Security, SSL & Asset Caching",
      tech: "Cloudflare, Brotli Compression, DDoS Shield",
      why: "Caches immutable static bundles at edge nodes closest to global users, terminating SSL with zero origin load.",
      impact: "Under 15ms TTFB (Time to First Byte) globally.",
    },
    {
      id: "gateway",
      title: "Node.js / Express API Gateway",
      icon: Server,
      role: "Application Server & Routing",
      tech: "Node.js (Event Loop), Express.js, Async/Await",
      why: "Non-blocking asynchronous I/O handles concurrent client transactions with lightweight memory footprints.",
      impact: "Served 4 commercial production platforms with zero downtime.",
    },
    {
      id: "security",
      title: "JWT & RBAC Middleware",
      icon: Cpu,
      role: "Authentication & Role-Based Access Control",
      tech: "JSON Web Tokens, bcrypt, Secure Cookies",
      why: "Stateless authorization tokens allow scalable horizontal container scaling without central session lookup bottlenecks.",
      impact: "Zero security breaches across all production client platforms.",
    },
    {
      id: "db",
      title: "MongoDB Compound Index Cluster",
      icon: Database,
      role: "High-Performance Document Store",
      tech: "MongoDB Atlas, Mongoose, B-Tree Compound Indices",
      why: "Indexed query filters (e.g. { userId: 1, status: 1, createdAt: -1 }) eliminate COLLSCAN full table scans.",
      impact: "Cut database query latency by 35% across high-volume collections.",
    },
    {
      id: "realtime",
      title: "Socket.io WebSocket Pipe",
      icon: Radio,
      role: "Bi-Directional Real-Time Dispatch",
      tech: "WebSockets, Socket.io, Duplex TCP Frames",
      why: "Replaces high-overhead HTTP polling (1.2 KB headers) with 2-byte frame packets for instantaneous sync.",
      impact: "Sub-50ms event delivery across live chat and notification systems.",
    },
  ];

  const mealfitNodes = [
    {
      id: "mf_mobile",
      title: "React Native / Expo Mobile App",
      icon: Globe,
      role: "Cross-Platform Mobile Client",
      tech: "React Native, Expo, TypeScript",
      why: "Single TypeScript codebase for iOS and Android with native performance and smooth gesture handling.",
      impact: "Native 60 FPS mobile experience for Indian dietary calibration.",
    },
    {
      id: "mf_engine",
      title: "Mifflin-St Jeor TDEE Engine",
      icon: Cpu,
      role: "Metabolic & Macro Calculation",
      tech: "Algorithmic formulas, Body Composition Logic",
      why: "Calculates precise Basal Metabolic Rate adjusted for Indian lifestyle activity multipliers.",
      impact: "Accurate daily calorie and macro targets generated in <5ms.",
    },
    {
      id: "mf_linear",
      title: "Linear Budget Optimizer",
      icon: Zap,
      role: "Constraint-Based Meal Recommender",
      tech: "Linear programming, Cost-per-Gram Algorithms",
      why: "Matches nutrient requirements against real local Kirana grocery costs (₹40 to ₹250/day).",
      impact: "Eliminates prohibitive diet costs by sourcing protein through affordable Indian staples.",
    },
    {
      id: "mf_store",
      title: "Kirana Grocery Knowledge Base",
      icon: Database,
      role: "Nutritional & Price Database",
      tech: "MongoDB Atlas, Aggregated Grocery Pricing",
      why: "Catalogs Indian staples (Sattu, Kala Chana, Moong, Paneer, Curd) with verified protein-per-rupee ratios.",
      impact: "Sub-100ms query latency for complete grocery basket generation.",
    },
  ];

  const activeNodes = activeSystem === "enterprise" ? enterpriseNodes : mealfitNodes;
  const currentSelected = selectedNode || activeNodes[0];

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

        {/* Modal Window */}
        <motion.div
          onClick={(e) => e.stopPropagation()}
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 20 }}
          className="relative w-full max-w-3xl bg-white dark:bg-[#0c0e15] border border-cyan-500/40 rounded-3xl p-5 sm:p-7 shadow-[0_0_60px_rgba(6,182,212,0.3)] text-slate-900 dark:text-slate-100 z-10 cursor-default"
        >
          {/* Header */}
          <div className="flex items-start justify-between gap-4 border-b border-slate-200 dark:border-white/10 pb-4">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-violet-600 to-cyan-500 flex items-center justify-center text-white shadow-lg shadow-violet-500/30">
                <Layers className="w-6 h-6" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono font-black text-cyan-600 dark:text-cyan-400 uppercase tracking-widest">
                    [ SYSTEM ARCHITECTURE BLUEPRINTS ]
                  </span>
                  <span className="px-2 py-0.5 rounded-full text-[9px] font-mono font-bold bg-cyan-500/10 text-cyan-500 border border-cyan-500/20">
                    PRODUCTION VERIFIED
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-black font-['Rajdhani',sans-serif]">
                  Interactive Architecture Blueprints
                </h3>
              </div>
            </div>

            <button
              onClick={() => {
                soundFX.playClick();
                onClose();
              }}
              className="p-2 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/10 transition"
              aria-label="Close architecture blueprint"
            >
              <X size={18} />
            </button>
          </div>

          {/* System Selector Toggle */}
          <div className="flex gap-2 my-4">
            <button
              onClick={() => {
                soundFX.playClick();
                setActiveSystem("enterprise");
                setSelectedNode(null);
              }}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition ${
                activeSystem === "enterprise"
                  ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-500/20"
                  : "bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-white/10"
              }`}
            >
              Vizon Technolabs Production Architecture (MERN + Sockets)
            </button>
            <div className="flex flex-wrap items-center justify-between gap-2">
              <button
                onClick={() => {
                  soundFX.playClick();
                  setActiveSystem("mealfit");
                  setSelectedNode(null);
                }}
                className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition ${
                  activeSystem === "mealfit"
                    ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-500/20"
                    : "bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-white/10"
                }`}
              >
                MealFit Mobile & Backend Architecture
              </button>

              {activeSystem === "mealfit" && (
                <a
                  href="https://drive.google.com/file/d/10Dea2nUxYs5ntmRBtK4Wr0ydxXs1Pkft/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => soundFX.playClick()}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 text-white font-mono font-bold text-xs shadow-md hover:scale-105 transition active:scale-95"
                  title="Download MealFit Android APK (Google Drive Direct)"
                >
                  <Download size={13} className="animate-bounce" />
                  <span>Download MealFit APK</span>
                </a>
              )}
            </div>
          </div>

          {/* Interactive Node Flowchart Strip */}
          <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/5 overflow-x-auto no-scrollbar">
            <div className="text-[10px] font-mono text-slate-500 uppercase font-bold mb-2">
              Click any architecture node to inspect engineering rationale & metrics:
            </div>

            <div className="flex items-center gap-2 min-w-max">
              {activeNodes.map((node, i) => {
                const Icon = node.icon;
                const isSelected = currentSelected.id === node.id;
                return (
                  <React.Fragment key={node.id}>
                    <button
                      onClick={() => {
                        soundFX.playClick();
                        setSelectedNode(node);
                      }}
                      onMouseEnter={() => soundFX.playHover()}
                      className={`flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-mono font-bold transition-all ${
                        isSelected
                          ? "bg-cyan-500 text-white shadow-lg shadow-cyan-500/30 scale-105"
                          : "bg-white dark:bg-[#12141c] text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/10 hover:border-cyan-400"
                      }`}
                    >
                      <Icon size={14} className={isSelected ? "text-white" : "text-cyan-500"} />
                      <span>{node.title}</span>
                    </button>
                    {i < activeNodes.length - 1 && (
                      <ArrowRight size={13} className="text-slate-400 shrink-0" />
                    )}
                  </React.Fragment>
                );
              })}
            </div>
          </div>

          {/* Node Deep Dive Inspector */}
          {currentSelected && (
            <motion.div
              key={currentSelected.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 p-4 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 space-y-3 font-mono"
            >
              <div className="flex items-center justify-between border-b border-cyan-500/20 pb-2">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold text-cyan-600 dark:text-cyan-400">
                    {currentSelected.title}
                  </span>
                  <span className="text-[10px] text-slate-500">[{currentSelected.role}]</span>
                </div>
                <span className="text-[11px] px-2 py-0.5 rounded-md bg-white/70 dark:bg-black/40 text-cyan-600 dark:text-cyan-300 font-bold">
                  {currentSelected.tech}
                </span>
              </div>

              <div className="grid sm:grid-cols-2 gap-3 text-xs">
                <div className="space-y-1">
                  <span className="text-slate-500 uppercase text-[10px] font-bold">Why Chosen (Architecture):</span>
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                    {currentSelected.why}
                  </p>
                </div>
                <div className="space-y-1">
                  <span className="text-slate-500 uppercase text-[10px] font-bold">Measurable Production Impact:</span>
                  <p className="text-emerald-600 dark:text-emerald-400 font-bold leading-relaxed">
                    {currentSelected.impact}
                  </p>
                </div>
              </div>
            </motion.div>
          )}

          {/* Footer Action */}
          <div className="mt-5 pt-3 border-t border-slate-200 dark:border-white/10 flex items-center justify-between">
            <span className="text-[11px] font-mono text-slate-500">
              Verified architectures running in production and live client applications
            </span>
            <button
              onClick={() => {
                soundFX.playClick();
                onClose();
              }}
              className="px-4 py-2 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-xs font-mono font-bold hover:opacity-90 active:scale-95 transition"
            >
              Close [Esc]
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
