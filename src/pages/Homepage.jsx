import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  MoveHorizontal,
} from "lucide-react";
import Navbar, { navItems } from "../components/Navbar";
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
import { soundFX } from "../utils/soundEffects";

const Homepage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [statusOpen, setStatusOpen] = useState(false);
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [showIntro, setShowIntro] = useState(true);
  const sectionRefs = useRef([]);
  const isScrollingRef = useRef(false);

  const sections = [
    { id: "about", title: "Monarch Profile", floor: "REALM 01", component: <About onOpenStatus={() => handleOpenStatus()} /> },
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
    if (currentIndex < totalSections - 1) {
      goToSection(currentIndex + 1);
    }
  };

  const prevSection = () => {
    if (currentIndex > 0) {
      goToSection(currentIndex - 1);
    }
  };

  const handleOpenStatus = () => {
    soundFX.playSystemAlert();
    setStatusOpen(true);
  };

  const handleOpenTerminal = () => {
    soundFX.playClick();
    setTerminalOpen(true);
  };

  const handleReplayIntro = () => {
    sessionStorage.removeItem("has_seen_awakening_intro");
    setShowIntro(false);
    setTimeout(() => setShowIntro(true), 50);
  };

  // SILKY NESTED BOUNDARY SCROLL ENGINE:
  // 1. Fully reads current section vertically without visible scrollbars.
  // 2. When moving back or forward, the next/previous section opens right at its TOP!
  useEffect(() => {
    const handleWheel = (e) => {
      if (statusOpen || terminalOpen) return;

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
          return; // Allow natural vertical reading inside active section
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
      // Scrolling Up (Back to Previous Section -> Opens TOP of Previous Section!)
      else if (delta < 0) {
        if (isScrollable && !isAtTop) {
          return; // Allow natural vertical reading back up
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
                sectionRefs.current[prevIdx].scrollTop = 0; // Guaranteed TOP of previous section!
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
  }, [currentIndex, totalSections, statusOpen, terminalOpen]);

  // Touch Swipe Gesture for mobile & tablets
  const touchStartRef = useRef({ x: 0, y: 0 });
  const handleTouchStart = (e) => {
    touchStartRef.current = {
      x: e.touches[0].clientX,
      y: e.touches[0].clientY,
    };
  };

  const handleTouchEnd = (e) => {
    const deltaX = e.changedTouches[0].clientX - touchStartRef.current.x;
    const deltaY = e.changedTouches[0].clientY - touchStartRef.current.y;

    if (Math.abs(deltaX) > 60 && Math.abs(deltaX) > Math.abs(deltaY) * 1.5) {
      if (deltaX < 0) {
        nextSection();
      } else {
        prevSection();
      }
    }
  };

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
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Cinematic Solo Leveling Awakening Intro Loader */}
      {showIntro && <AwakeningIntro onComplete={() => setShowIntro(false)} />}

      {/* Interactive Three.js 3D Background */}
      <ThreeBackground />

      {/* Holographic Hunter Reticle Cursor */}
      <CustomCursor />

      {/* Solo Leveling System Status Window Modal */}
      <StatusWindowModal
        isOpen={statusOpen}
        onClose={() => setStatusOpen(false)}
      />

      {/* Interactive Hunter System CLI Terminal */}
      <HunterTerminal
        isOpen={terminalOpen}
        onClose={() => setTerminalOpen(false)}
        onOpenStatus={handleOpenStatus}
      />

      {/* Floating Quest Notification HUD (Desktop only) */}
      <div className="hidden md:block">
        <QuestNotification onOpenStatus={handleOpenStatus} />
      </div>

      {/* Quantum Monarch Capsule Header (De-congested Dynamic Floating Island) */}
      <Navbar
        currentSectionIndex={currentIndex}
        onSelectSection={goToSection}
        onOpenStatus={handleOpenStatus}
        onOpenTerminal={handleOpenTerminal}
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
            className="w-screen h-full shrink-0 relative overflow-y-auto overflow-x-hidden no-scrollbar select-text pt-20 sm:pt-24 pb-16 sm:pb-24 px-4 sm:px-10"
            style={{ WebkitOverflowScrolling: "touch" }}
          >
            <div className="w-full max-w-6xl mx-auto min-h-full flex flex-col justify-between">
              <div>
                {sec.component}
              </div>

              {/* End of Section Realm Transition Indicator */}
              <div className="mt-12 mb-4 pt-6 border-t border-slate-200 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 font-mono text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 text-center sm:text-left">
                <div>
                  {idx > 0 ? (
                    <button
                      onClick={prevSection}
                      className="flex items-center gap-1.5 text-cyan-400 hover:text-cyan-300 font-bold transition"
                    >
                      <ChevronLeft size={14} />
                      <span>Prev: {sections[idx - 1].title}</span>
                    </button>
                  ) : (
                    <span>[ REALM 01 START ]</span>
                  )}
                </div>

                <div className="flex items-center gap-1.5 text-cyan-400">
                  <MoveHorizontal size={13} className="animate-pulse" />
                  <span>Swipe or scroll down to enter next realm</span>
                </div>

                <div>
                  {idx < totalSections - 1 ? (
                    <button
                      onClick={nextSection}
                      className="flex items-center gap-1.5 text-cyan-400 hover:text-cyan-300 font-bold transition"
                    >
                      <span>Next: {sections[idx + 1].title}</span>
                      <ChevronRight size={14} />
                    </button>
                  ) : (
                    <span>[ FINAL REALM REACHED ]</span>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </motion.div>

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