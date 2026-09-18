import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import Navbar from "../components/Navbar";
import About from "../components/About";
import ProjectsExperience from "../components/ProjectsExperience";
import ShadowArmy from "../components/ShadowArmy";
import Education from "../components/Education";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import Experience from "../components/Experience";
import ThreeBackground from "../components/ThreeBackground";
import CustomCursor from "../components/CustomCursor";
import StatusWindowModal from "../components/StatusWindowModal";
import QuestNotification from "../components/QuestNotification";
import AwakeningIntro from "../components/AwakeningIntro";
import HunterTerminal from "../components/HunterTerminal";
import RealmMinimap from "../components/RealmMinimap";
import ArchitectureSimulatorModal from "../components/ArchitectureSimulatorModal";
import RecruiterExecutiveBriefModal from "../components/RecruiterExecutiveBriefModal";
import SystemArchitectureModal from "../components/SystemArchitectureModal";
import { soundFX } from "../utils/soundEffects";

const Homepage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scrollPercent, setScrollPercent] = useState(0);
  const [statusOpen, setStatusOpen] = useState(false);
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [simulatorOpen, setSimulatorOpen] = useState(false);
  const [recruiterBriefOpen, setRecruiterBriefOpen] = useState(false);
  const [architectureOpen, setArchitectureOpen] = useState(false);
  const [showIntro, setShowIntro] = useState(false);
  const sectionRefs = useRef([]);

  const handleOpenStatus = () => {
    soundFX.playSystemAlert();
    setStatusOpen(true);
  };

  const handleOpenTerminal = () => {
    soundFX.playClick();
    setTerminalOpen(true);
  };

  const handleOpenSimulator = () => {
    soundFX.playClick();
    setSimulatorOpen(true);
  };

  const handleOpenRecruiterBrief = () => {
    soundFX.playLevelUp();
    setRecruiterBriefOpen(true);
  };

  const handleOpenArchitecture = () => {
    soundFX.playClick();
    setArchitectureOpen(true);
  };

  const sections = [
    {
      id: "about",
      title: "Monarch Profile",
      floor: "REALM 01",
      component: (
        <About
          onOpenStatus={handleOpenStatus}
          onOpenRecruiterBrief={handleOpenRecruiterBrief}
          onOpenSimulator={handleOpenSimulator}
          onOpenArchitecture={handleOpenArchitecture}
        />
      ),
    },
    { id: "system-experience", title: "System Logs", floor: "REALM 02", component: <Experience /> },
    { id: "projects", title: "Dungeon Raids", floor: "REALM 03", component: <ProjectsExperience /> },
    { id: "shadow-army", title: "Shadow Army", floor: "REALM 04", component: <ShadowArmy /> },
    { id: "education", title: "Ascension Path", floor: "REALM 05", component: <Education /> },
    { id: "skills", title: "Awakened Skills", floor: "REALM 06", component: <Skills /> },
    { id: "contact", title: "Summon Portal", floor: "REALM 07", component: <Contact /> },
  ];

  const totalSections = sections.length;

  const goToSection = (index) => {
    if (index < 0 || index >= totalSections) return;
    soundFX.playClick();
    setCurrentIndex(index);
    const target = sectionRefs.current[index];
    if (target) {
      const navOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const nextSection = () => {
    if (currentIndex < totalSections - 1) {
      goToSection(currentIndex + 1);
    }
  };

  const prevSection = () => {
    if (currentIndex > 0) {
      goToSection(currentIndex - 1);
    }
  };

  const handleReplayIntro = () => {
    sessionStorage.removeItem("has_seen_awakening_intro");
    setShowIntro(false);
    setTimeout(() => setShowIntro(true), 50);
  };

  // Passive, high-performance scroll spy for real-time realm & progress tracking
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const winScroll = window.scrollY || document.documentElement.scrollTop;
          const height = document.documentElement.scrollHeight - window.innerHeight;
          if (height > 0) {
            setScrollPercent(Math.min(100, Math.max(0, (winScroll / height) * 100)));
          }

          // Active section detection
          const scrollPos = winScroll + 220;
          let activeIdx = 0;
          sectionRefs.current.forEach((el, idx) => {
            if (el && el.offsetTop <= scrollPos) {
              activeIdx = idx;
            }
          });
          setCurrentIndex(activeIdx);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Keyboard Navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (
        document.activeElement?.tagName === "INPUT" ||
        document.activeElement?.tagName === "TEXTAREA"
      ) {
        return;
      }

      if (e.key === "PageDown") {
        e.preventDefault();
        nextSection();
      } else if (e.key === "PageUp") {
        e.preventDefault();
        prevSection();
      } else if (e.key === "`" || e.key === "~") {
        e.preventDefault();
        setTerminalOpen((prev) => !prev);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex]);

  return (
    <div className="relative min-h-screen w-full bg-slate-100 text-slate-900 dark:bg-[#090a0f] dark:text-[#f8fafc] transition-colors duration-500 overflow-x-hidden">
      {/* Interactive Ambient Background */}
      <ThreeBackground />

      {/* Holographic Hunter Reticle Cursor */}
      <CustomCursor />

      {/* Solo Leveling System Status Window Modal */}
      <StatusWindowModal
        isOpen={statusOpen}
        onClose={() => setStatusOpen(false)}
      />

      {/* Live System Architecture Simulator Modal */}
      <ArchitectureSimulatorModal
        isOpen={simulatorOpen}
        onClose={() => setSimulatorOpen(false)}
      />

      {/* Recruiter 1-Click Executive Brief Modal */}
      <RecruiterExecutiveBriefModal
        isOpen={recruiterBriefOpen}
        onClose={() => setRecruiterBriefOpen(false)}
      />

      {/* System Architecture Blueprints Modal */}
      <SystemArchitectureModal
        isOpen={architectureOpen}
        onClose={() => setArchitectureOpen(false)}
      />

      {/* Interactive Hunter System CLI Terminal */}
      <HunterTerminal
        isOpen={terminalOpen}
        onClose={() => setTerminalOpen(false)}
        onOpenStatus={handleOpenStatus}
        onOpenSimulator={handleOpenSimulator}
        onOpenRecruiterBrief={handleOpenRecruiterBrief}
        onOpenArchitecture={handleOpenArchitecture}
      />

      {/* Floating Quest Notification HUD (Desktop only) */}
      <div className="hidden md:block">
        <QuestNotification onOpenStatus={handleOpenStatus} />
      </div>

      {/* Awakening Intro (if replayed) */}
      {showIntro && <AwakeningIntro onComplete={() => setShowIntro(false)} />}

      {/* Quantum Monarch Dynamic Capsule Header */}
      <Navbar
        currentSectionIndex={currentIndex}
        onSelectSection={goToSection}
        onOpenStatus={handleOpenStatus}
        onOpenTerminal={handleOpenTerminal}
        onOpenSimulator={handleOpenSimulator}
        onOpenRecruiterBrief={handleOpenRecruiterBrief}
        onOpenArchitecture={handleOpenArchitecture}
        onReplayIntro={handleReplayIntro}
      />

      {/* ================= HOLOGRAPHIC REALM SIDE GATES (DESKTOP) ================= */}
      <AnimatePresence>
        {currentIndex > 0 && (
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.3 }}
            className="hidden xl:flex fixed left-5 top-1/2 -translate-y-1/2 z-30 pointer-events-auto"
          >
            <button
              onClick={prevSection}
              onMouseEnter={() => soundFX.playHover()}
              className="group relative flex items-center gap-2 p-2 rounded-2xl border border-slate-200/90 dark:border-cyan-500/30 bg-white/95 dark:bg-[#0e1017]/95 text-slate-800 dark:text-cyan-300 shadow-[0_10px_35px_rgba(0,0,0,0.2)] backdrop-blur-2xl hover:border-cyan-400 hover:shadow-[0_0_25px_rgba(6,182,212,0.4)] transition-all duration-300 active:scale-95"
              title={`Ascend to: ${sections[currentIndex - 1]?.title}`}
            >
              {/* Outer pulsing glow halo on hover */}
              <div className="absolute -inset-1 rounded-2xl bg-cyan-400/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Icon Capsule */}
              <div className="relative h-10 w-10 rounded-xl bg-gradient-to-br from-cyan-500/20 to-violet-600/20 border border-cyan-500/40 flex items-center justify-center text-cyan-500 dark:text-cyan-400 group-hover:scale-110 transition-transform">
                <ChevronLeft size={20} className="group-hover:-translate-x-0.5 transition-transform" />
              </div>

              {/* Slide-out Preview Label on Hover */}
              <div className="relative max-w-0 overflow-hidden whitespace-nowrap opacity-0 group-hover:max-w-xs group-hover:opacity-100 group-hover:pr-2.5 transition-all duration-300 text-left font-mono">
                <div className="flex items-center gap-1.5 text-[9px] text-cyan-600 dark:text-cyan-400 font-bold uppercase tracking-wider">
                  <span>[ ASCEND REALM ]</span>
                  <span className="text-[8px] px-1 py-0.2 rounded bg-cyan-500/20">PgUp</span>
                </div>
                <div className="text-xs font-bold text-slate-900 dark:text-white font-['Rajdhani',sans-serif] truncate max-w-[140px]">
                  {sections[currentIndex - 1]?.title}
                </div>
              </div>
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {currentIndex < totalSections - 1 && (
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 30 }}
            transition={{ duration: 0.3 }}
            className="hidden xl:flex fixed right-5 top-1/2 -translate-y-1/2 z-30 pointer-events-auto"
          >
            <button
              onClick={nextSection}
              onMouseEnter={() => soundFX.playHover()}
              className="group relative flex items-center gap-2 p-2 rounded-2xl border border-slate-200/90 dark:border-cyan-500/30 bg-white/95 dark:bg-[#0e1017]/95 text-slate-800 dark:text-cyan-300 shadow-[0_10px_35px_rgba(0,0,0,0.2)] backdrop-blur-2xl hover:border-cyan-400 hover:shadow-[0_0_25px_rgba(6,182,212,0.4)] transition-all duration-300 active:scale-95"
              title={`Descend to: ${sections[currentIndex + 1]?.title}`}
            >
              {/* Outer pulsing glow halo on hover */}
              <div className="absolute -inset-1 rounded-2xl bg-cyan-400/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Slide-out Preview Label on Hover */}
              <div className="relative max-w-0 overflow-hidden whitespace-nowrap opacity-0 group-hover:max-w-xs group-hover:opacity-100 group-hover:pl-2.5 transition-all duration-300 text-right font-mono">
                <div className="flex items-center justify-end gap-1.5 text-[9px] text-cyan-600 dark:text-cyan-400 font-bold uppercase tracking-wider">
                  <span className="text-[8px] px-1 py-0.2 rounded bg-cyan-500/20">PgDn</span>
                  <span>[ DESCEND REALM ]</span>
                </div>
                <div className="text-xs font-bold text-slate-900 dark:text-white font-['Rajdhani',sans-serif] truncate max-w-[140px]">
                  {sections[currentIndex + 1]?.title}
                </div>
              </div>

              {/* Icon Capsule */}
              <div className="relative h-10 w-10 rounded-xl bg-gradient-to-br from-cyan-500/20 to-violet-600/20 border border-cyan-500/40 flex items-center justify-center text-cyan-500 dark:text-cyan-400 group-hover:scale-110 transition-transform">
                <ChevronRight size={20} className="group-hover:translate-x-0.5 transition-transform" />
              </div>
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ================= VERTICAL SEAMLESS REALMS ================= */}
      <main className="relative z-10 w-full flex flex-col">
        {sections.map((sec, idx) => (
          <React.Fragment key={sec.id}>
            {/* Holographic Monarch Realm Divider */}
            {idx > 0 && (
              <div className="w-full max-w-5xl mx-auto px-6 my-8 sm:my-12 flex items-center gap-4 select-none">
                <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/40 dark:border-violet-500/40 bg-white/90 dark:bg-[#0c0e18]/90 text-xs font-mono font-bold text-cyan-600 dark:text-cyan-300 tracking-wider shadow-[0_0_20px_rgba(6,182,212,0.2)] backdrop-blur-xl">
                  <span className="h-2 w-2 rounded-full bg-cyan-400 animate-ping" />
                  <span>{sec.floor} // {sec.title.toUpperCase()}</span>
                </div>
                <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent via-violet-500/50 to-transparent" />
              </div>
            )}

            <div
              id={sec.id}
              ref={(el) => (sectionRefs.current[idx] = el)}
              className={`w-full max-w-6xl mx-auto px-4 sm:px-6 md:px-8 scroll-mt-24 ${
                idx === 0
                  ? "pt-24 sm:pt-32 pb-14 sm:pb-20 min-h-[92vh] flex flex-col justify-center"
                  : "py-8 sm:py-14"
              }`}
            >
              <motion.div
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
              >
                {sec.component}
              </motion.div>
            </div>
          </React.Fragment>
        ))}
      </main>

      {/* Floating Realm Minimap Teleport HUD */}
      <RealmMinimap
        sections={sections}
        currentIndex={currentIndex}
        onSelectSection={goToSection}
        onOpenTerminal={handleOpenTerminal}
      />

      {/* RAZOR-THIN LASER PROGRESS BAR (BOTTOM) */}
      <div className="fixed bottom-0 left-0 right-0 h-[2px] bg-slate-200 dark:bg-white/5 z-30 pointer-events-none">
        <div
          style={{ width: `${scrollPercent}%` }}
          className="h-full bg-gradient-to-r from-cyan-400 via-violet-500 to-amber-400 shadow-[0_0_10px_#00f0ff] transition-all duration-75"
        />
      </div>
    </div>
  );
};

export default Homepage;