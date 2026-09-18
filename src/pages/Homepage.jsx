import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
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

      {/* DESKTOP SIDE GATES */}
      {currentIndex > 0 && (
        <button
          onClick={prevSection}
          onMouseEnter={() => soundFX.playHover()}
          className="hidden xl:flex fixed left-4 top-1/2 -translate-y-1/2 z-30 p-3.5 rounded-2xl border border-slate-200 dark:border-white/10 bg-white/85 dark:bg-[#101218]/90 text-cyan-500 shadow-xl backdrop-blur-xl hover:border-cyan-400 hover:scale-110 active:scale-95 transition group pointer-events-auto"
          title={`Previous: ${sections[currentIndex - 1]?.title}`}
        >
          <ChevronLeft size={22} className="group-hover:-translate-x-1 transition-transform" />
          <span className="sr-only">Previous Realm</span>
        </button>
      )}

      {currentIndex < totalSections - 1 && (
        <button
          onClick={nextSection}
          onMouseEnter={() => soundFX.playHover()}
          className="hidden xl:flex fixed right-4 top-1/2 -translate-y-1/2 z-30 p-3.5 rounded-2xl border border-slate-200 dark:border-white/10 bg-white/85 dark:bg-[#101218]/90 text-cyan-500 shadow-xl backdrop-blur-xl hover:border-cyan-400 hover:scale-110 active:scale-95 transition group pointer-events-auto"
          title={`Next: ${sections[currentIndex + 1]?.title}`}
        >
          <ChevronRight size={22} className="group-hover:translate-x-1 transition-transform" />
          <span className="sr-only">Next Realm</span>
        </button>
      )}

      {/* ================= VERTICAL SEAMLESS REALMS ================= */}
      <main className="relative z-10 w-full flex flex-col">
        {sections.map((sec, idx) => (
          <section
            key={sec.id}
            id={sec.id}
            ref={(el) => (sectionRefs.current[idx] = el)}
            className={`w-full max-w-6xl mx-auto px-3 sm:px-6 md:px-8 scroll-mt-24 ${
              idx === 0
                ? "pt-24 sm:pt-28 pb-12 sm:pb-16 min-h-[90vh] flex flex-col justify-center"
                : "py-10 sm:py-16 md:py-20"
            }`}
          >
            {sec.component}
          </section>
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