import React, { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaChevronLeft,
  FaChevronRight,
  FaEye,
  FaTimes,
  FaLayerGroup,
  FaFire,
  FaRobot,
  FaCode,
  FaGamepad,
} from "react-icons/fa";
import {
  Sparkles,
  Swords,
  MoveHorizontal,
  LayoutGrid,
  Columns3,
  Search,
  X,
  RotateCcw,
  Zap,
  Target,
  Cpu,
  Download,
} from "lucide-react";
import projects from "../data/projects";
import { soundFX } from "../utils/soundEffects";

export default function ProjectsExperience() {
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState("grid"); // 'grid' | 'carousel'
  const [activeModalProject, setActiveModalProject] = useState(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const scrollContainerRef = useRef(null);

  const categories = [
    { id: "all", label: "All Dungeon Raids", icon: FaLayerGroup },
    { id: "featured", label: "S-Rank Featured", icon: FaFire },
    { id: "fullstack", label: "Full-Stack Web", icon: FaCode },
    { id: "ai-tools", label: "AI & Automation", icon: FaRobot },
    { id: "games-native", label: "Apps & Games", icon: FaGamepad },
  ];

  const getFilteredProjects = () => {
    let list = projects;
    switch (selectedFilter) {
      case "featured":
        list = projects.filter((p) => p.highlight);
        break;
      case "fullstack":
        list = projects.filter(
          (p) =>
            p.title.includes("Shop") ||
            p.title.includes("Chat") ||
            p.title.includes("Yard") ||
            p.title.includes("BuyIt") ||
            p.title.includes("CRUD") ||
            p.desc.includes("commerce") ||
            p.desc.includes("Full-stack") ||
            p.desc.includes("dashboard")
        );
        break;
      case "ai-tools":
        list = projects.filter(
          (p) =>
            p.title.includes("Skillbridge") ||
            p.title.includes("Screen") ||
            p.title.includes("YouTube") ||
            p.title.includes("Discord") ||
            p.title.includes("Telegram") ||
            p.desc.includes("Bot") ||
            p.desc.includes("AI") ||
            p.desc.includes("extension")
        );
        break;
      case "games-native":
        list = projects.filter(
          (p) =>
            p.title.includes("Ping Pong") ||
            p.title.includes("Music") ||
            p.title.includes("Calculator") ||
            p.title.includes("WCTM") ||
            p.desc.includes("game") ||
            p.desc.includes("Native")
        );
        break;
      default:
        list = projects;
        break;
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      list = list.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.desc.toLowerCase().includes(q) ||
          (Array.isArray(p.tech) && p.tech.some((t) => t.toLowerCase().includes(q))) ||
          (p.problem && p.problem.toLowerCase().includes(q)) ||
          (p.solution && p.solution.toLowerCase().includes(q)) ||
          (p.impact && p.impact.toLowerCase().includes(q))
      );
    }

    return list;
  };

  const filtered = getFilteredProjects();

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (!el || viewMode !== "carousel") return;

    const updateScrollProgress = () => {
      if (!el) return;
      const max = el.scrollWidth - el.clientWidth;
      if (max > 0) {
        setScrollProgress((el.scrollLeft / max) * 100);
      }
    };

    el.addEventListener("scroll", updateScrollProgress, { passive: true });
    updateScrollProgress();

    return () => {
      el.removeEventListener("scroll", updateScrollProgress);
    };
  }, [viewMode]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && activeModalProject) {
        setActiveModalProject(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeModalProject]);

  const handleScroll = (dir) => {
    soundFX.playClick();
    const el = scrollContainerRef.current;
    if (!el) return;
    const scrollAmount = 380;
    el.scrollBy({
      left: dir === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  const renderProjectCard = (p, i) => {
    const isRankS = p.highlight;

    return (
      <div
        key={p.title}
        onClick={() => {
          soundFX.playClick();
          setActiveModalProject(p);
        }}
        className={`
          relative h-full flex flex-col justify-between
          rounded-2xl sm:rounded-3xl p-4 sm:p-5
          border transition-all duration-300
          bg-white/90 dark:bg-[#101218]/95 backdrop-blur-xl
          hover:-translate-y-1.5 cursor-pointer group
          ${
            isRankS
              ? "border-cyan-400/70 shadow-[0_0_25px_rgba(6,182,212,0.18)] hover:shadow-[0_0_35px_rgba(6,182,212,0.35)]"
              : "border-slate-200 dark:border-white/10 hover:border-cyan-400/50"
          }
        `}
      >
        <div>
          {/* Top Bar */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div
                className={`flex h-11 w-11 items-center justify-center rounded-xl text-lg ${
                  isRankS
                    ? "bg-gradient-to-br from-cyan-400 to-violet-600 text-white shadow-[0_0_15px_rgba(6,182,212,0.4)]"
                    : "bg-slate-100 dark:bg-[#151822] text-cyan-400 border border-slate-200 dark:border-white/5"
                }`}
              >
                {p.icon}
              </div>
              <span className="text-xs font-mono text-slate-400 font-bold">
                #{String(i + 1).padStart(2, "0")}
              </span>
            </div>

            {/* Rank Badge */}
            {isRankS ? (
              <span className="inline-flex items-center gap-1 text-[11px] font-mono font-black px-2.5 py-1 rounded-full bg-cyan-500/20 text-cyan-400 border border-cyan-400/50 shadow-[0_0_10px_rgba(6,182,212,0.3)]">
                <Sparkles size={11} /> RANK S
              </span>
            ) : (
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-200 dark:bg-[#161922] text-slate-700 dark:text-slate-300 border border-transparent dark:border-white/5">
                RANK A
              </span>
            )}
          </div>

          {/* Project Title */}
          <h3 className="text-xl sm:text-2xl font-bold font-['Rajdhani',sans-serif] text-slate-900 dark:text-white group-hover:text-cyan-400 transition-colors">
            {p.title}
          </h3>

          {/* Description */}
          <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-2">
            {p.desc}
          </p>

          {/* Key Measured Impact */}
          {p.impact && (
            <div className="mt-3 flex items-start gap-1.5 p-2 rounded-xl bg-cyan-500/10 border border-cyan-500/25 text-cyan-600 dark:text-cyan-300 font-mono text-[11px]">
              <Zap size={13} className="text-cyan-400 shrink-0 mt-0.5 animate-pulse" />
              <span className="font-semibold leading-tight">{p.impact}</span>
            </div>
          )}

          {/* Core Tech Stack Pills */}
          {p.tech && (
            <div className="mt-3 flex flex-wrap gap-1">
              {p.tech.slice(0, 3).map((t, idx) => (
                <span
                  key={idx}
                  className="text-[9px] font-mono px-2 py-0.5 rounded-md bg-slate-100 dark:bg-[#151822] text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/5 font-medium"
                >
                  {t}
                </span>
              ))}
              {p.tech.length > 3 && (
                <span className="text-[9px] font-mono px-1.5 py-0.5 rounded text-cyan-400 font-bold">
                  +{p.tech.length - 3}
                </span>
              )}
            </div>
          )}
        </div>

        {/* Actions & Links */}
        <div className="mt-5 pt-3.5 border-t border-slate-100 dark:border-white/5 flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            {p.apk ? (
              <a
                href={p.apk}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => {
                  e.stopPropagation();
                  soundFX.playClick();
                }}
                onMouseEnter={() => soundFX.playHover()}
                className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 text-white text-xs font-mono font-bold hover:scale-105 transition shadow-[0_0_12px_rgba(16,185,129,0.35)]"
                title="Download Android APK (Google Drive Direct)"
              >
                <Download size={11} className="animate-bounce" />
                <span>Download APK</span>
              </a>
            ) : p.live && p.live !== "Coming Soon" ? (
              <a
                href={p.live}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => {
                  e.stopPropagation();
                  soundFX.playClick();
                }}
                onMouseEnter={() => soundFX.playHover()}
                className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xs font-mono font-bold hover:scale-105 transition shadow-[0_0_12px_rgba(6,182,212,0.3)]"
              >
                <FaExternalLinkAlt size={10} />
                <span>Live Demo</span>
              </a>
            ) : (
              <span className="text-xs font-mono text-slate-400 dark:text-slate-500 px-2 py-1 bg-slate-100 dark:bg-[#151822] rounded-lg">
                Coming Soon
              </span>
            )}

            {p.github && (
              <a
                href={p.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => {
                  e.stopPropagation();
                  soundFX.playClick();
                }}
                onMouseEnter={() => soundFX.playHover()}
                className="flex items-center gap-1.5 px-3 py-2 rounded-xl border border-slate-300 dark:border-white/10 hover:border-cyan-400 text-slate-700 dark:text-cyan-300 text-xs font-mono transition"
                title="View Source on GitHub"
              >
                <FaGithub size={13} />
                <span>Code</span>
              </a>
            )}
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              soundFX.playClick();
              setActiveModalProject(p);
            }}
            onMouseEnter={() => soundFX.playHover()}
            className="flex items-center gap-1 px-2.5 py-1.5 rounded-xl text-slate-500 dark:text-slate-400 hover:text-cyan-500 dark:hover:text-cyan-400 hover:bg-cyan-500/10 text-xs font-mono font-bold transition"
            title="Inspect Architecture"
          >
            <FaEye size={13} />
            <span className="hidden sm:inline">Inspect</span>
          </button>
        </div>
      </div>
    );
  };

  return (
    <section
      id="projects"
      className="relative px-1 sm:px-4 py-3 sm:py-6 overflow-hidden text-slate-900 dark:text-white"
    >
      {/* Ambient Glows */}
      <div className="absolute top-10 left-1/4 w-[500px] h-[500px] bg-cyan-500/10 blur-[170px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[500px] h-[500px] bg-violet-600/10 blur-[170px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative">

        {/* SECTION HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-4 sm:mb-5">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-white/70 dark:bg-[#12141c] px-3.5 py-1 text-xs font-mono text-cyan-400 font-bold mb-2">
              <Swords size={13} className="text-cyan-400" />
              <span>[ DUNGEON VAULT // 18+ PRODUCTION SYSTEMS ]</span>
            </div>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-slate-900 dark:text-[#f8fafc] font-['Rajdhani',sans-serif] tracking-tight">
              Artifacts &{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 bg-clip-text text-transparent">
                Dungeon Raids
              </span>
            </h2>
            <p className="mt-1 text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-mono">
              Explore 18+ engineered applications across Full-Stack, MedTech, AI Agents & Web Utilities.
            </p>
          </div>

          {/* VIEW MODE & NAVIGATION CONTROLS */}
          <div className="flex flex-wrap items-center gap-2.5 self-start md:self-auto">
            {/* View Mode Switcher */}
            <div className="flex items-center p-1 rounded-xl bg-white/80 dark:bg-[#12141c] border border-slate-200 dark:border-white/10 shadow-sm">
              <button
                onClick={() => {
                  soundFX.playClick();
                  setViewMode("carousel");
                }}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition ${
                  viewMode === "carousel"
                    ? "bg-cyan-500 text-black shadow-sm"
                    : "text-slate-500 hover:text-cyan-400"
                }`}
                title="Horizontal Vault View"
              >
                <Columns3 size={13} />
                <span className="hidden sm:inline">Track</span>
              </button>
              <button
                onClick={() => {
                  soundFX.playClick();
                  setViewMode("grid");
                }}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition ${
                  viewMode === "grid"
                    ? "bg-cyan-500 text-black shadow-sm"
                    : "text-slate-500 hover:text-cyan-400"
                }`}
                title="Responsive Grid View"
              >
                <LayoutGrid size={13} />
                <span className="hidden sm:inline">Grid</span>
              </button>
            </div>

            {/* Scroll Arrows (Only in Carousel Mode) */}
            {viewMode === "carousel" && (
              <div className="flex items-center gap-1.5">
                <button
                  onClick={() => handleScroll("left")}
                  onMouseEnter={() => soundFX.playHover()}
                  className="p-2.5 rounded-xl border border-slate-300 dark:border-white/10 bg-white dark:bg-[#101218] text-slate-800 dark:text-cyan-300 hover:border-cyan-400 transition active:scale-95"
                  aria-label="Scroll left"
                >
                  <FaChevronLeft size={12} />
                </button>
                <button
                  onClick={() => handleScroll("right")}
                  onMouseEnter={() => soundFX.playHover()}
                  className="p-2.5 rounded-xl border border-slate-300 dark:border-white/10 bg-white dark:bg-[#101218] text-slate-800 dark:text-cyan-300 hover:border-cyan-400 transition active:scale-95"
                  aria-label="Scroll right"
                >
                  <FaChevronRight size={12} />
                </button>
              </div>
            )}
          </div>
        </div>

        {/* SEARCH & FILTER BAR */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 mb-4">
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isSelected = selectedFilter === cat.id;

              return (
                <button
                  key={cat.id}
                  onClick={() => {
                    soundFX.playClick();
                    setSelectedFilter(cat.id);
                    if (scrollContainerRef.current) scrollContainerRef.current.scrollLeft = 0;
                  }}
                  onMouseEnter={() => soundFX.playHover()}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono font-bold whitespace-nowrap transition-all duration-200 ${
                    isSelected
                      ? "bg-gradient-to-r from-cyan-500 to-violet-600 text-white shadow-[0_0_12px_rgba(6,182,212,0.35)]"
                      : "bg-white/80 dark:bg-[#12141c]/90 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/10 hover:border-cyan-400/40"
                  }`}
                >
                  <Icon size={11} />
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>

          {/* Instant Search Input & Count Badge */}
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <div className="hidden xs:inline-flex items-center gap-1 px-2.5 py-1.5 rounded-xl bg-slate-100 dark:bg-[#141722] border border-slate-200 dark:border-white/10 text-[10px] font-mono text-cyan-600 dark:text-cyan-400 font-bold shrink-0">
              <span>{filtered.length} of {projects.length} Systems</span>
            </div>

            <div className="relative flex-1 sm:min-w-[220px] sm:max-w-xs">
              <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search tech, stack, or problem..."
                className="w-full pl-9 pr-8 py-1.5 rounded-xl bg-white/80 dark:bg-[#12141c] border border-slate-200 dark:border-white/10 text-xs font-mono text-slate-800 dark:text-slate-200 placeholder-slate-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
                  title="Clear search"
                >
                  <X size={13} />
                </button>
              )}
            </div>
          </div>
        </div>

        {/* PROJECT CONTENT VIEW */}
        {filtered.length === 0 ? (
          <div className="py-16 text-center rounded-3xl border border-slate-200 dark:border-white/10 bg-white/60 dark:bg-[#101218]/80 backdrop-blur-xl">
            <p className="font-mono text-slate-400 text-sm mb-3">
              No dungeon raids match "{searchQuery}" in this category.
            </p>
            <button
              onClick={() => {
                setSelectedFilter("all");
                setSearchQuery("");
              }}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-mono text-xs font-bold hover:bg-cyan-500/20 transition"
            >
              <RotateCcw size={12} />
              <span>Reset All Filters</span>
            </button>
          </div>
        ) : viewMode === "grid" ? (
          /* ================= RESPONSIVE GRID VIEW ================= */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pb-6 pt-1">
            {filtered.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: i * 0.03 }}
                className="h-full group"
              >
                {renderProjectCard(p, i)}
              </motion.div>
            ))}
          </div>
        ) : (
          /* ================= HORIZONTAL VAULT TRACK ================= */
          <>
            <div
              ref={scrollContainerRef}
              className="flex gap-5 overflow-x-auto pb-6 pt-2 snap-x snap-mandatory scroll-smooth cursor-grab active:cursor-grabbing no-scrollbar"
            >
              {filtered.map((p, i) => (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.35, delay: i * 0.03 }}
                  className="snap-start shrink-0 w-[290px] sm:w-[350px] md:w-[390px] group"
                >
                  {renderProjectCard(p, i)}
                </motion.div>
              ))}
            </div>

            {/* Dynamic Horizontal Progress Track Bar */}
            <div className="mt-1 flex items-center gap-3">
              <div className="flex-1 h-1.5 bg-slate-200 dark:bg-[#12141c] rounded-full overflow-hidden border border-slate-300 dark:border-white/5">
                <div
                  className="h-full bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-500 rounded-full transition-all duration-150 shadow-[0_0_10px_#00f0ff]"
                  style={{ width: `${Math.max(scrollProgress, 10)}%` }}
                />
              </div>
              <span className="text-[11px] font-mono text-cyan-400 shrink-0 font-bold">
                Showing {filtered.length} of {projects.length} Raids
              </span>
            </div>
          </>
        )}

      </div>

      {/* QUICK INSPECT MODAL */}
      {typeof document !== "undefined" &&
        createPortal(
          <AnimatePresence>
            {activeModalProject && (
              <div
                onClick={() => setActiveModalProject(null)}
                className="fixed inset-0 z-[120] flex items-center justify-center p-4 overflow-y-auto no-scrollbar cursor-pointer"
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 bg-black/60 dark:bg-black/80 backdrop-blur-md"
                />

                <motion.div
                  onClick={(e) => e.stopPropagation()}
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: 20 }}
                  className="relative w-full max-w-xl max-h-[85vh] overflow-y-auto rounded-3xl border border-slate-200 dark:border-cyan-500/50 bg-white dark:bg-[#101218] p-5 sm:p-7 text-slate-900 dark:text-white shadow-2xl backdrop-blur-2xl z-10 custom-scrollbar cursor-default"
                >
                  <div className="flex items-center justify-between border-b border-slate-200 dark:border-white/10 pb-3 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-300 text-xl border border-cyan-500/30">
                        {activeModalProject.icon}
                      </div>
                      <div>
                        <span className="text-[10px] font-mono text-cyan-600 dark:text-cyan-400 uppercase font-bold">
                          [ ARTIFACT INSPECTION // SYSTEM BLUEPRINT ]
                        </span>
                        <h3 className="text-xl sm:text-2xl font-bold font-['Rajdhani',sans-serif]">
                          {activeModalProject.title}
                        </h3>
                      </div>
                    </div>

                    <button
                      onClick={() => setActiveModalProject(null)}
                      className="rounded-full p-2 text-slate-400 hover:text-slate-700 dark:hover:text-white transition"
                      aria-label="Close modal"
                    >
                      <FaTimes size={16} />
                    </button>
                  </div>

                  {/* Brief Overview */}
                  <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                    {activeModalProject.desc}
                  </p>

                  {/* Architectural Breakdown Grid */}
                  <div className="space-y-3 mb-5 font-mono text-xs">
                    {/* 1. Problem Statement */}
                    {activeModalProject.problem && (
                      <div className="p-3.5 rounded-2xl bg-amber-500/10 border border-amber-500/25">
                        <span className="text-[10px] uppercase font-bold text-amber-600 dark:text-amber-400 flex items-center gap-1.5 mb-1.5">
                          <Target size={13} /> Problem Addressed
                        </span>
                        <p className="text-xs text-slate-800 dark:text-slate-200 leading-relaxed font-sans">
                          {activeModalProject.problem}
                        </p>
                      </div>
                    )}

                    {/* 2. Architecture & Decision (How & Why) */}
                    {activeModalProject.solution && (
                      <div className="p-3.5 rounded-2xl bg-violet-500/10 border border-violet-500/25">
                        <span className="text-[10px] uppercase font-bold text-violet-600 dark:text-violet-400 flex items-center gap-1.5 mb-1.5">
                          <Cpu size={13} /> Engineering Architecture (How & Why)
                        </span>
                        <p className="text-xs text-slate-800 dark:text-slate-200 leading-relaxed font-sans">
                          {activeModalProject.solution}
                        </p>
                      </div>
                    )}

                    {/* 3. Measured Impact */}
                    {activeModalProject.impact && (
                      <div className="p-3.5 rounded-2xl bg-cyan-500/10 border border-cyan-500/30">
                        <span className="text-[10px] uppercase font-bold text-cyan-600 dark:text-cyan-400 flex items-center gap-1.5 mb-1.5">
                          <Zap size={13} /> Measured Production Impact
                        </span>
                        <p className="text-xs text-cyan-700 dark:text-cyan-300 font-bold leading-relaxed font-sans">
                          {activeModalProject.impact}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Full Tech Stack Pills */}
                  {activeModalProject.tech && (
                    <div className="mb-5">
                      <span className="text-[10px] font-mono uppercase text-slate-500 dark:text-slate-400 font-bold block mb-1.5">
                        Technologies & Frameworks
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {activeModalProject.tech.map((t, idx) => (
                          <span
                            key={idx}
                            className="text-[10px] font-mono px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-800 dark:text-cyan-300 font-medium"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="flex flex-wrap items-center gap-3">
                    {activeModalProject.apk && (
                      <a
                        href={activeModalProject.apk}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => soundFX.playClick()}
                        className="flex-1 min-w-[140px] py-3 px-4 rounded-xl bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 text-white font-mono font-bold text-xs text-center shadow-lg hover:scale-[1.02] transition flex items-center justify-center gap-2"
                      >
                        <Download size={14} />
                        <span>Download Android APK</span>
                      </a>
                    )}
                    {activeModalProject.live && !activeModalProject.apk && activeModalProject.live !== "Coming Soon" && (
                      <a
                        href={activeModalProject.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => soundFX.playClick()}
                        className="flex-1 min-w-[140px] py-3 px-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-mono font-bold text-xs text-center shadow-lg hover:scale-[1.02] transition flex items-center justify-center gap-2"
                      >
                        <FaExternalLinkAlt size={12} />
                        <span>Launch Live System</span>
                      </a>
                    )}
                    {activeModalProject.github && (
                      <a
                        href={activeModalProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => soundFX.playClick()}
                        className="flex-1 min-w-[140px] py-3 px-4 rounded-xl border border-slate-300 dark:border-white/10 text-slate-800 dark:text-cyan-300 font-mono font-bold text-xs text-center hover:bg-slate-100 dark:hover:bg-cyan-500/10 transition"
                      >
                        GitHub Repository
                      </a>
                    )}
                  </div>
                </motion.div>
              </div>
            )}
          </AnimatePresence>,
          document.body
        )}

    </section>
  );
}