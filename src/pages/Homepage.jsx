import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  MoveHorizontal,
} from "lucide-react";
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
  const [statusOpen, setStatusOpen] = useState(false);
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [simulatorOpen, setSimulatorOpen] = useState(false);
  const [recruiterBriefOpen, setRecruiterBriefOpen] = useState(false);
  const [architectureOpen, setArchitectureOpen] = useState(false);
  const [showIntro, setShowIntro] = useState(false);
  const sectionRefs = useRef([]);
  const isScrollingRef = useRef(false);

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

  // ALWAYS RESET SCROLL TO TOP WHEN ENTERING ANY SECTION (Forward OR Backward!)
  useEffect(() => {
    if (sectionRefs.current[currentIndex]) {
      sectionRefs.current[currentIndex].scrollTop = 0;
    }
  }, [currentIndex]);

  const goToSection = (index) => {
    if (index === currentIndex || index < 0 || index >= totalSections) return;
    soundFX.playClick();
    setCurrentIndex(index);
  };

  const nextSection = () => {
    if (currentIndex < totalSections - 1 && !isScrollingRef.current) {
      isScrollingRef.current = true;
      soundFX.playClick();
      setCurrentIndex((prev) => prev + 1);
      setTimeout(() => {
        isScrollingRef.current = false;
      }, 1000);
    }
  };

  const prevSection = () => {
    if (currentIndex > 0 && !isScrollingRef.current) {
      isScrollingRef.current = true;
      soundFX.playClick();
      setCurrentIndex((prev) => prev - 1);
      setTimeout(() => {
        isScrollingRef.current = false;
      }, 1000);
    }
  };

  const handleReplayIntro = () => {
    sessionStorage.removeItem("has_seen_awakening_intro");
    setShowIntro(false);
    setTimeout(() => setShowIntro(true), 50);
  };

  // DESKTOP MOUSEWHEEL NESTED BOUNDARY SCROLL ENGINE
  useEffect(() => {
    const handleWheel = (e) => {
      if (
        statusOpen ||
        terminalOpen ||
        simulatorOpen ||
        recruiterBriefOpen ||
        architectureOpen
      ) {
        return;
      }

      const activeEl = sectionRefs.current[currentIndex];
      if (!activeEl) return;

      const { scrollTop, scrollHeight, clientHeight } = activeEl;
      const isScrollable = scrollHeight > clientHeight + 10;
      const isAtTop = scrollTop <= 10;
      const isAtBottom = scrollTop + clientHeight >= scrollHeight - 10;

      const delta = e.deltaY;

      // Scrolling Down
      if (delta > 0) {
        if (isScrollable && !isAtBottom) {
          return;
        }

        e.preventDefault();
        if (isScrollingRef.current) return;

        if (currentIndex < totalSections - 1) {
          isScrollingRef.current = true;
          soundFX.playClick();
          setCurrentIndex((prev) => {
            const nextIdx = prev + 1;
            setTimeout(() => {
              if (sectionRefs.current[nextIdx]) {
                sectionRefs.current[nextIdx].scrollTop = 0;
              }
              isScrollingRef.current = false;
            }, 1200);
            return nextIdx;
          });
        }
      }
      // Scrolling Up
      else if (delta < 0) {
        if (isScrollable && !isAtTop) {
          return;
        }

        e.preventDefault();
        if (isScrollingRef.current) return;

        if (currentIndex > 0) {
          isScrollingRef.current = true;
          soundFX.playClick();
          setCurrentIndex((prev) => {
            const prevIdx = prev - 1;
            setTimeout(() => {
              if (sectionRefs.current[prevIdx]) {
                sectionRefs.current[prevIdx].scrollTop = 0;
              }
              isScrollingRef.current = false;
            }, 1200);
            return prevIdx;
          });
        }
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [
    currentIndex,
    totalSections,
    statusOpen,
    terminalOpen,
    simulatorOpen,
    recruiterBriefOpen,
    architectureOpen,
  ]);

  // BULLETPROOF MOBILE TOUCH BOUNDARY ENGINE + PULL-TO-REFRESH PREVENTION
  useEffect(() => {
    const el = sectionRefs.current[currentIndex];
    if (!el) return;

    let touchStartY = 0;
    let touchStartX = 0;
    let touchStartScrollTop = 0;
    let isTouching = false;

    const onTouchStart = (e) => {
      touchStartY = e.touches[0].clientY;
      touchStartX = e.touches[0].clientX;
      touchStartScrollTop = el.scrollTop;
      isTouching = true;
    };

    const onTouchMove = (e) => {
      if (!isTouching) return;
      const currentY = e.touches[0].clientY;
      const currentX = e.touches[0].clientX;
      const deltaY = touchStartY - currentY; // Positive = Dragging UP (scrolling DOWN), Negative = Dragging DOWN (scrolling UP)
      const deltaX = touchStartX - currentX;

      const isAtTop = el.scrollTop <= 2;
      const isAtBottom = el.scrollTop + el.clientHeight >= el.scrollHeight - 5;

      // PREVENT BROWSER PULL-TO-REFRESH:
      // When at top of page and dragging finger down (scrolling up), cancel native refresh gesture!
      if (isAtTop && deltaY < 0 && Math.abs(deltaY) > Math.abs(deltaX)) {
        if (e.cancelable) {
          e.preventDefault();
        }
      }

      // Prevent bottom rubber-band lock when scrolling down past bottom
      if (isAtBottom && deltaY > 0 && Math.abs(deltaY) > Math.abs(deltaX)) {
        if (e.cancelable) {
          e.preventDefault();
        }
      }
    };

    const onTouchEnd = (e) => {
      if (
        !isTouching ||
        statusOpen ||
        terminalOpen ||
        simulatorOpen ||
        recruiterBriefOpen ||
        architectureOpen ||
        isScrollingRef.current
      ) {
        return;
      }
      isTouching = false;

      const touchEndY = e.changedTouches[0].clientY;
      const touchEndX = e.changedTouches[0].clientX;
      const deltaY = touchStartY - touchEndY; // Positive = Swiping UP (scrolling DOWN), Negative = Swiping DOWN (scrolling UP)
      const deltaX = touchStartX - touchEndX;

      // 1. Horizontal Swipe (Swipe Left -> Next, Swipe Right -> Prev)
      if (Math.abs(deltaX) > 40 && Math.abs(deltaX) > Math.abs(deltaY) * 1.1) {
        if (deltaX > 0) {
          nextSection();
        } else {
          prevSection();
        }
        return;
      }

      // 2. Vertical Boundary Auto-Scroll:
      const { scrollTop, scrollHeight, clientHeight } = el;
      const isScrollable = scrollHeight > clientHeight + 10;
      const isAtBottom = scrollTop + clientHeight >= scrollHeight - 20;
      const isAtTop = scrollTop <= 15;

      // Swiping UP (Scrolling DOWN) -> Reached bottom of section -> Go to NEXT realm!
      if (deltaY > 30) {
        const wasNearBottom = touchStartScrollTop + clientHeight >= scrollHeight - 40;
        if (!isScrollable || isAtBottom || wasNearBottom) {
          nextSection();
        }
      }
      // Swiping DOWN (Scrolling UP) -> Reached top of section -> Go to PREVIOUS realm (NO RELOAD)!
      else if (deltaY < -30) {
        const wasNearTop = touchStartScrollTop <= 25;
        if (!isScrollable || isAtTop || wasNearTop) {
          prevSection();
        }
      }
    };

    el.addEventListener("touchstart", onTouchStart, { passive: true });
    el.addEventListener("touchmove", onTouchMove, { passive: false }); // Non-passive allows e.preventDefault()
    el.addEventListener("touchend", onTouchEnd, { passive: true });

    return () => {
      el.removeEventListener("touchstart", onTouchStart);
      el.removeEventListener("touchmove", onTouchMove);
      el.removeEventListener("touchend", onTouchEnd);
    };
  }, [
    currentIndex,
    totalSections,
    statusOpen,
    terminalOpen,
    simulatorOpen,
    recruiterBriefOpen,
    architectureOpen,
  ]);

  // Keyboard Navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (
        document.activeElement?.tagName === "INPUT" ||
        document.activeElement?.tagName === "TEXTAREA"
      ) {
        return;
      }

      if (e.key === "ArrowRight" || e.key === "PageDown") {
        e.preventDefault();
        nextSection();
      } else if (e.key === "ArrowLeft" || e.key === "PageUp") {
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
    <div
      className="
        relative
        w-screen
        h-screen
        overflow-hidden
        bg-slate-100
        text-slate-900
        dark:bg-[#090a0f]
        dark:text-[#f8fafc]
        transition-colors
        duration-500
        select-none
        no-scrollbar
      "
      style={{ overscrollBehavior: "none", touchAction: "pan-y pinch-zoom" }}
    >
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

      {/* DESKTOP SIDE GATES */}
      {currentIndex > 0 && (
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          onClick={prevSection}
          onMouseEnter={() => soundFX.playHover()}
          className="hidden md:flex fixed left-4 top-1/2 -translate-y-1/2 z-30 p-3.5 rounded-2xl border border-white/10 bg-white/85 dark:bg-[#101218]/90 text-cyan-400 shadow-[0_0_25px_rgba(0,0,0,0.5)] backdrop-blur-xl hover:border-cyan-400 hover:scale-110 active:scale-95 transition group pointer-events-auto"
          title={`Previous: ${sections[currentIndex - 1]?.title}`}
        >
          <ChevronLeft size={22} className="group-hover:-translate-x-1 transition-transform" />
          <span className="sr-only">Previous Realm</span>
        </motion.button>
      )}

      {currentIndex < totalSections - 1 && (
        <motion.button
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
          onClick={nextSection}
          onMouseEnter={() => soundFX.playHover()}
          className="hidden md:flex fixed right-4 top-1/2 -translate-y-1/2 z-30 p-3.5 rounded-2xl border border-white/10 bg-white/85 dark:bg-[#101218]/90 text-cyan-400 shadow-[0_0_25px_rgba(0,0,0,0.5)] backdrop-blur-xl hover:border-cyan-400 hover:scale-110 active:scale-95 transition group pointer-events-auto"
          title={`Next: ${sections[currentIndex + 1]?.title}`}
        >
          <ChevronRight size={22} className="group-hover:translate-x-1 transition-transform" />
          <span className="sr-only">Next Realm</span>
        </motion.button>
      )}

      {/* ================= CINEMATIC MATTE BLACK 3D HORIZONTAL TRACK ================= */}
      <motion.div
        animate={{ x: `-${currentIndex * 100}vw` }}
        transition={{
          duration: 1.15,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="flex flex-row w-[700vw] h-full"
      >
        {sections.map((sec, idx) => (
          <div
            key={sec.id}
            ref={(el) => (sectionRefs.current[idx] = el)}
            className="w-screen h-full shrink-0 relative overflow-y-auto overflow-x-hidden no-scrollbar select-text pt-13 sm:pt-15 pb-16 sm:pb-18 px-2.5 sm:px-6 flex flex-col justify-center"
            style={{
              WebkitOverflowScrolling: "touch",
              overscrollBehaviorY: "none",
              overscrollBehavior: "none",
            }}
          >
            <div className="w-full max-w-6xl mx-auto my-auto">
              {sec.component}

              {/* Mobile-Only Quick Realm Advancement Footer */}
              <div className="mt-4 pt-2 border-t border-slate-200/50 dark:border-white/5 flex md:hidden items-center justify-between gap-2 font-mono text-[10px] text-slate-500">
                {idx > 0 ? (
                  <button
                    onClick={prevSection}
                    className="flex items-center gap-1 py-1 px-2.5 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-600 dark:text-cyan-400 font-bold"
                  >
                    <ChevronLeft size={13} />
                    <span>Prev</span>
                  </button>
                ) : (
                  <span>[ REALM 01 ]</span>
                )}

                <div className="flex items-center gap-1 text-cyan-600 dark:text-cyan-400">
                  <MoveHorizontal size={12} className="animate-pulse" />
                  <span>Swipe</span>
                </div>

                {idx < totalSections - 1 ? (
                  <button
                    onClick={nextSection}
                    className="flex items-center gap-1 py-1 px-2.5 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-600 dark:text-cyan-400 font-bold"
                  >
                    <span>Next</span>
                    <ChevronRight size={13} />
                  </button>
                ) : (
                  <span>[ END ]</span>
                )}
              </div>
            </div>
          </div>

        ))}
      </motion.div>

      {/* Floating Realm Minimap Teleport HUD */}
      <RealmMinimap
        sections={sections}
        currentIndex={currentIndex}
        onSelectSection={goToSection}
        onOpenTerminal={handleOpenTerminal}
      />

      {/* RAZOR-THIN LASER PROGRESS BAR (BOTTOM) */}
      <div className="fixed bottom-0 left-0 right-0 h-[2px] bg-slate-200 dark:bg-white/5 z-30 pointer-events-none">
        <motion.div
          animate={{ width: `${((currentIndex + 1) / totalSections) * 100}%` }}
          transition={{ duration: 1.15, ease: [0.16, 1, 0.3, 1] }}
          className="h-full bg-gradient-to-r from-cyan-400 via-violet-500 to-amber-400 shadow-[0_0_10px_#00f0ff]"
        />
      </div>

    </div>
  );
};

export default Homepage;