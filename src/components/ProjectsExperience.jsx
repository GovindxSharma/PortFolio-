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
import { Sparkles, Swords, Compass, MoveHorizontal } from "lucide-react";
import projects from "../data/projects";
import { soundFX } from "../utils/soundEffects";

export default function ProjectsExperience() {
  const [selectedFilter, setSelectedFilter] = useState("all");
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
    switch (selectedFilter) {
      case "featured":
        return projects.filter((p) => p.highlight);
      case "fullstack":
        return projects.filter(
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
      case "ai-tools":
        return projects.filter(
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
      case "games-native":
        return projects.filter(
          (p) =>
            p.title.includes("Ping Pong") ||
            p.title.includes("Music") ||
            p.title.includes("Calculator") ||
            p.title.includes("WCTM") ||
            p.desc.includes("game") ||
            p.desc.includes("Native")
        );
      default:
        return projects;
    }
  };

  const filtered = getFilteredProjects();

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (!el) return;

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
  }, [filtered]);

  const handleScroll = (direction) => {
    soundFX.playClick();
    if (scrollContainerRef.current) {
      const { scrollLeft, clientWidth } = scrollContainerRef.current;
      const scrollAmount = clientWidth * 0.75;
      scrollContainerRef.current.scrollTo({
        left: direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="projects"
      className="relative py-12 md:py-20 px-2 sm:px-6 bg-slate-50/70 dark:bg-[#090a0f] overflow-hidden"
    >
      {/* Ambient Glows */}
      <div className="absolute top-10 left-1/4 w-[500px] h-[500px] bg-cyan-500/10 blur-[170px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[500px] h-[500px] bg-violet-600/10 blur-[170px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative">

        {/* SECTION HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-white/70 dark:bg-[#12141c] px-3.5 py-1 text-xs font-mono text-cyan-400 font-bold mb-3">
              <Swords size={13} className="text-cyan-400" />
              <span>[ DUNGEON VAULT // HORIZONTAL RAID TRACK ]</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 dark:text-[#f8fafc] font-['Rajdhani',sans-serif] tracking-tight">
              Artifacts &{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 bg-clip-text text-transparent">
                Dungeon Raids
              </span>
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-400 font-mono">
              Scroll horizontally with mousewheel, drag, or arrow controls to explore all 18+ production systems.
            </p>
          </div>

          {/* HORIZONTAL CONTROLS */}
          <div className="flex items-center gap-3 self-start md:self-auto">
            <span className="hidden sm:flex items-center gap-1.5 text-xs font-mono text-cyan-400 font-bold">
              <MoveHorizontal size={14} className="animate-pulse" />
              <span>HORIZONTAL SCROLL</span>
            </span>

            <button
              onClick={() => handleScroll("left")}
              onMouseEnter={() => soundFX.playHover()}
              className="p-3 rounded-xl border border-slate-300 dark:border-white/10 bg-white dark:bg-[#101218] text-slate-800 dark:text-cyan-300 hover:border-cyan-400 hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] transition active:scale-95"
              aria-label="Scroll left"
            >
              <FaChevronLeft size={14} />
            </button>
            <button
              onClick={() => handleScroll("right")}
              onMouseEnter={() => soundFX.playHover()}
              className="p-3 rounded-xl border border-slate-300 dark:border-white/10 bg-white dark:bg-[#101218] text-slate-800 dark:text-cyan-300 hover:border-cyan-400 hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] transition active:scale-95"
              aria-label="Scroll right"
            >
              <FaChevronRight size={14} />
            </button>
          </div>
        </div>

        {/* CATEGORY FILTER TABS */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-4 no-scrollbar">
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
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-bold whitespace-nowrap transition-all duration-200 ${
                  isSelected
                    ? "bg-gradient-to-r from-cyan-500 to-violet-600 text-white shadow-[0_0_15px_rgba(6,182,212,0.4)] scale-105"
                    : "bg-white/80 dark:bg-[#12141c]/90 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/10 hover:border-cyan-400/40"
                }`}
              >
                <Icon size={12} />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* HORIZONTAL SCROLL VAULT TRACK (No Visible Scrollbar) */}
        <div
          ref={scrollContainerRef}
          className="flex gap-5 overflow-x-auto pb-6 pt-3 snap-x snap-mandatory scroll-smooth cursor-grab active:cursor-grabbing no-scrollbar"
        >
          {filtered.map((p, i) => {
            const isRankS = p.highlight;

            return (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                className="snap-start shrink-0 w-[290px] sm:w-[350px] md:w-[390px] group"
              >
                <div
                  className={`
                    relative h-full flex flex-col justify-between
                    rounded-2xl sm:rounded-3xl p-5 sm:p-6
                    border transition-all duration-300
                    bg-white/90 dark:bg-[#101218]/95 backdrop-blur-xl
                    hover:-translate-y-2.5
                    ${
                      isRankS
                        ? "border-cyan-400/70 shadow-[0_0_25px_rgba(6,182,212,0.2)] hover:shadow-[0_0_35px_rgba(6,182,212,0.4)]"
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
                              ? "bg-gradient-to-br from-cyan-400 to-violet-600 text-white shadow-[0_0_15px_rgba(6,182,212,0.5)]"
                              : "bg-slate-100 dark:bg-[#151822] text-cyan-400 border border-slate-200 dark:border-white/5"
                          }`}
                        >
                          {p.icon}
                        </div>
                        <span className="text-xs font-mono text-slate-400">
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
                    <p className="mt-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-3">
                      {p.desc}
                    </p>
                  </div>

                  {/* Actions & Links */}
                  <div className="mt-6 pt-4 border-t border-slate-100 dark:border-white/5 flex items-center justify-between gap-2">
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
              </motion.div>
            );
          })}
        </div>

        {/* Dynamic Horizontal Progress Track Bar */}
        <div className="mt-2 flex items-center gap-3">
          <div className="flex-1 h-1.5 bg-slate-200 dark:bg-[#12141c] rounded-full overflow-hidden border border-slate-300 dark:border-white/5">
            <div
              className="h-full bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-500 rounded-full transition-all duration-150 shadow-[0_0_10px_#00f0ff]"
              style={{ width: `${Math.max(scrollProgress, 10)}%` }}
            />
          </div>
          <span className="text-[11px] font-mono text-cyan-400 shrink-0">
            {Math.round(scrollProgress)}% Scrolled
          </span>
        </div>

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
                    <span className="text-[10px] font-mono text-cyan-400 uppercase">
                      [ ARTIFACT INSPECTION ]
                    </span>
                    <h3 className="text-xl font-bold font-['Rajdhani',sans-serif]">
                      {activeModalProject.title}
                    </h3>
                  </div>
                </div>

                <button
                  onClick={() => setActiveModalProject(null)}
                  className="rounded-full p-2 text-slate-400 hover:text-white"
                >
                  <FaTimes size={16} />
                </button>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                {activeModalProject.desc}
              </p>

              <div className="flex items-center gap-3">
                {activeModalProject.live && activeModalProject.live !== "Coming Soon" && (
                  <a
                    href={activeModalProject.live}
                    target="_blank"
                    rel="noopener noreferrer"
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