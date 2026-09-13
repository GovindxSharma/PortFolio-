import React, { useState, useRef, useEffect } from "react";
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
} from "lucide-react";
import projects from "../data/projects";
import { soundFX } from "../utils/soundEffects";

export default function ProjectsExperience() {
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState("carousel"); // 'carousel' | 'grid'
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
          p.desc.toLowerCase().includes(q)
      );
    }

    return list;
  };

  const filtered = getFilteredProjects();

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (!el || viewMode !== "carousel") return;

    const handleWheel = (e) => {
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        if (
          (e.deltaY > 0 && el.scrollLeft < el.scrollWidth - el.clientWidth - 5) ||
          (e.deltaY < 0 && el.scrollLeft > 5)
        ) {
          e.preventDefault();
          el.scrollLeft += e.deltaY * 1.5;
        }
      }
      updateScrollProgress();
    };

    const updateScrollProgress = () => {
      if (!el) return;
      const max = el.scrollWidth - el.clientWidth;
      if (max > 0) {
        setScrollProgress((el.scrollLeft / max) * 100);
      }
    };

    el.addEventListener("wheel", handleWheel, { passive: false });
    el.addEventListener("scroll", updateScrollProgress);

    return () => {
      el.removeEventListener("wheel", handleWheel);
      el.removeEventListener("scroll", updateScrollProgress);
    };
  }, [viewMode]);

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
        className={`
          relative h-full flex flex-col justify-between
          rounded-2xl sm:rounded-3xl p-5 sm:p-6
          border transition-all duration-300
          bg-white/90 dark:bg-[#101218]/95 backdrop-blur-xl
          hover:-translate-y-2
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
            {p.live && p.live !== "Coming Soon" ? (
              <a
                href={p.live}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundFX.playClick()}
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
                onClick={() => soundFX.playClick()}
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
            onClick={() => {
              soundFX.playClick();
              setActiveModalProject(p);
            }}
            onMouseEnter={() => soundFX.playHover()}
            className="p-2 rounded-xl text-slate-400 hover:text-cyan-400 hover:bg-cyan-500/10 transition"
            title="Quick Inspect"
          >
            <FaEye size={14} />
          </button>
        </div>
      </div>
    );
  };

  return (
    <section
      id="projects"
      className="relative min-h-[90vh] flex flex-col justify-center px-3 sm:px-6 md:px-12 py-10 md:py-16 overflow-hidden bg-slate-50/50 dark:bg-[#07080c] text-slate-900 dark:text-white"
    >
      {/* Ambient Glows */}
      <div className="absolute top-10 left-1/4 w-[500px] h-[500px] bg-cyan-500/10 blur-[170px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[500px] h-[500px] bg-violet-600/10 blur-[170px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative">

        {/* SECTION HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 mb-6">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-white/70 dark:bg-[#12141c] px-3.5 py-1 text-xs font-mono text-cyan-400 font-bold mb-2.5">
              <Swords size={13} className="text-cyan-400" />
              <span>[ DUNGEON VAULT // 18+ PRODUCTION SYSTEMS ]</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 dark:text-[#f8fafc] font-['Rajdhani',sans-serif] tracking-tight">
              Artifacts &{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 bg-clip-text text-transparent">
                Dungeon Raids
              </span>
            </h2>
            <p className="mt-1.5 text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-mono">
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
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 mb-5">
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

          {/* Instant Search Input */}
          <div className="relative min-w-[220px] sm:max-w-xs w-full sm:w-auto">
            <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search projects or tech..."
              className="w-full pl-9 pr-8 py-1.5 rounded-xl bg-white/80 dark:bg-[#12141c] border border-slate-200 dark:border-white/10 text-xs font-mono text-slate-800 dark:text-slate-200 placeholder-slate-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
              >
                <X size={13} />
              </button>
            )}
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
      <AnimatePresence>
        {activeModalProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto no-scrollbar">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveModalProject(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-lg rounded-3xl border border-cyan-500/50 bg-[#101218] p-6 text-white shadow-[0_0_50px_rgba(0,0,0,0.8)] backdrop-blur-2xl z-10"
            >
              <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-cyan-500/20 text-cyan-300 text-xl border border-cyan-500/30">
                    {activeModalProject.icon}
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-cyan-400 uppercase font-bold">
                      [ ARTIFACT INSPECTION ]
                    </span>
                    <h3 className="text-xl font-bold font-['Rajdhani',sans-serif]">
                      {activeModalProject.title}
                    </h3>
                  </div>
                </div>

                <button
                  onClick={() => setActiveModalProject(null)}
                  className="rounded-full p-2 text-slate-400 hover:text-white transition"
                >
                  <FaTimes size={16} />
                </button>
              </div>

              {/* Brief Overview */}
              <p className="text-sm text-slate-300 leading-relaxed mb-4">
                {activeModalProject.desc}
              </p>

              {/* Architectural Breakdown Grid */}
              <div className="space-y-2.5 mb-5 font-mono text-xs">
                {/* 1. Problem Statement */}
                {activeModalProject.problem && (
                  <div className="p-3 rounded-2xl bg-amber-500/10 border border-amber-500/25">
                    <span className="text-[10px] uppercase font-bold text-amber-400 flex items-center gap-1.5 mb-1">
                      <Target size={12} /> Problem Addressed
                    </span>
                    <p className="text-xs text-slate-200 leading-relaxed font-sans">
                      {activeModalProject.problem}
                    </p>
                  </div>
                )}

                {/* 2. Architecture & Decision (How & Why) */}
                {activeModalProject.solution && (
                  <div className="p-3 rounded-2xl bg-violet-500/10 border border-violet-500/25">
                    <span className="text-[10px] uppercase font-bold text-violet-400 flex items-center gap-1.5 mb-1">
                      <Cpu size={12} /> Engineering Architecture (How & Why)
                    </span>
                    <p className="text-xs text-slate-200 leading-relaxed font-sans">
                      {activeModalProject.solution}
                    </p>
                  </div>
                )}

                {/* 3. Measured Impact */}
                {activeModalProject.impact && (
                  <div className="p-3 rounded-2xl bg-cyan-500/10 border border-cyan-500/30">
                    <span className="text-[10px] uppercase font-bold text-cyan-400 flex items-center gap-1.5 mb-1">
                      <Zap size={12} /> Measured Production Impact
                    </span>
                    <p className="text-xs text-cyan-300 font-bold leading-relaxed font-sans">
                      {activeModalProject.impact}
                    </p>
                  </div>
                )}
              </div>

              {/* Full Tech Stack Pills */}
              {activeModalProject.tech && (
                <div className="mb-5">
                  <span className="text-[10px] font-mono uppercase text-slate-400 font-bold block mb-1.5">
                    Technologies & Frameworks
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {activeModalProject.tech.map((t, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] font-mono px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-cyan-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex items-center gap-3">
                {activeModalProject.live && activeModalProject.live !== "Coming Soon" && (
                  <a
                    href={activeModalProject.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => soundFX.playClick()}
                    className="flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-600 text-white font-mono font-bold text-xs text-center shadow-lg hover:scale-[1.02] transition"
                  >
                    Launch System 🚀
                  </a>
                )}
                {activeModalProject.github && (
                  <a
                    href={activeModalProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => soundFX.playClick()}
                    className="flex-1 py-3 px-4 rounded-xl border border-white/10 text-cyan-300 font-mono font-bold text-xs text-center hover:bg-cyan-500/10 transition"
                  >
                    GitHub Source Code
                  </a>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}