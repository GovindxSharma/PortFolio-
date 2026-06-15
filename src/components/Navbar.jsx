import { useState, useEffect } from "react";
import {
  User,
  Briefcase,
  Code2,
  Mail,
  Menu,
  Building2,
  GraduationCap,
  Sun,
  Moon,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

const navItems = [
  { id: "about", icon: User, label: "About" },
  { id: "system-experience", icon: Building2, label: "System Experience" },
  { id: "projects", icon: Briefcase, label: "Projects" },
  { id: "education", icon: GraduationCap, label: "Education" },
  { id: "skills", icon: Code2, label: "Skills" },
  { id: "contact", icon: Mail, label: "Contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("about");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [visible, setVisible] = useState(true);

  const { darkMode, toggleTheme } = useTheme();

  useEffect(() => {
    const sections = navItems.map((item) =>
      document.getElementById(item.id)
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.55 }
    );

    sections.forEach((sec) => sec && observer.observe(sec));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    let last = 0;

    const handle = () => {
      const curr = window.scrollY;
      setVisible(!(curr > last && curr > 120));
      last = curr;
    };

    window.addEventListener("scroll", handle);
    return () => window.removeEventListener("scroll", handle);
  }, []);

  const scrollToSection = (id) => {
    if (id === "top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    setMobileOpen(false);
  };

  return (
    <>
      {/* ================= TOP NAME (SLIM MOBILE FIX) ================= */}
      <motion.div
        animate={{ y: visible ? 0 : -120 }}
        transition={{ type: "spring", stiffness: 120, damping: 20 }}
        className="fixed top-3 md:top-6 left-1/2 -translate-x-1/2 z-50 cursor-pointer scale-[0.82] md:scale-100"
        onClick={() => scrollToSection("top")}
      >
        <div className="relative group">
          <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-500 blur opacity-40 group-hover:opacity-70 transition" />

          <div className="relative flex items-center gap-3 rounded-full border border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-900/80 px-4 py-2 backdrop-blur-xl shadow-lg">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-violet-500 font-bold text-black">
              GS
            </div>

            <div>
              <h1 className="text-xs md:text-sm font-semibold text-slate-900 dark:text-white">
                Govind Sharma
              </h1>
              <p className="text-[10px] md:text-xs text-slate-500 dark:text-slate-400">
                Full Stack Developer
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* ================= THEME TOGGLE (MOBILE FIXED) ================= */}
      <button
        onClick={toggleTheme}
        className="fixed top-3 left-3 md:top-5 md:left-5 z-50 rounded-full p-2 md:p-3 border border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl shadow-lg"
      >
        {darkMode ? (
          <Sun className="h-4 w-4 md:h-5 md:w-5 text-yellow-400" />
        ) : (
          <Moon className="h-4 w-4 md:h-5 md:w-5 text-slate-900" />
        )}
      </button>

      {/* ================= DESKTOP DOCK (UNCHANGED) ================= */}
      <motion.div
        animate={{ y: visible ? 0 : 120 }}
        className="fixed bottom-8 left-1/2 z-50 hidden -translate-x-1/2 md:block"
      >
        <div className="flex items-center gap-2 rounded-full border border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-900/80 p-3 backdrop-blur-3xl">

          {navItems.map((item) => {
            const Icon = item.icon;

            return (
              <div key={item.id} className="relative group">
                <motion.button
                  onClick={() => scrollToSection(item.id)}
                  whileHover={{ y: -8, scale: 1.2 }}
                  className="relative flex h-14 w-14 items-center justify-center"
                >
                  {active === item.id && (
                    <motion.div
                      layoutId="activeDock"
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 to-violet-500"
                    />
                  )}

                  <Icon
                    className={`relative z-10 h-6 w-6 ${
                      active === item.id
                        ? "text-white"
                        : "text-slate-700 dark:text-slate-300"
                    }`}
                  />
                </motion.button>

                <div className="pointer-events-none absolute -top-12 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-200">
                  <div className="px-3 py-1 text-xs rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 shadow-md text-slate-900 dark:text-white">
                    {item.label}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </motion.div>

      {/* ================= MOBILE BUTTON (SLIM FIX) ================= */}
      <button
        onClick={() => setMobileOpen(true)}
        className="fixed right-3 top-3 md:right-5 md:top-5 z-50 md:hidden rounded-full border border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-900/80 p-2 backdrop-blur-xl"
      >
        <Menu className="h-5 w-5" />
      </button>

      {/* ================= MOBILE MENU ================= */}
      <AnimatePresence>
      {mobileOpen && (
        <>
          {/* BACKDROP */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />
    
          {/* SHEET */}
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", stiffness: 130, damping: 20 }}
            className="fixed bottom-0 left-0 right-0 z-50 rounded-t-[28px] border border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-950/95 backdrop-blur-2xl p-5"
          >
            {/* HANDLE */}
            <div className="flex justify-center mb-4">
              <div className="h-1 w-14 rounded-full bg-slate-300 dark:bg-slate-700" />
            </div>
    
            {/* TITLE */}
            <div className="text-center mb-5">
              <h3 className="text-sm font-semibold text-slate-900 dark:text-white">
                Navigate
              </h3>
              <p className="text-[11px] text-slate-500 dark:text-slate-400">
                Quick access to sections
              </p>
            </div>
    
            {/* GRID NAV */}
            <div className="grid grid-cols-2 gap-3">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = active === item.id;
    
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`
                      flex flex-col items-start gap-3 p-4 rounded-2xl border transition
                      ${
                        isActive
                          ? "bg-gradient-to-br from-cyan-500/10 to-violet-500/10 border-cyan-400/30 shadow-sm"
                          : "bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800"
                      }
                    `}
                  >
                    <div
                      className={`
                        h-10 w-10 flex items-center justify-center rounded-xl
                        ${
                          isActive
                            ? "bg-gradient-to-r from-cyan-500 to-violet-500 text-white"
                            : "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                        }
                      `}
                    >
                      <Icon className="h-5 w-5" />
                    </div>
    
                    <span
                      className={`text-sm font-semibold ${
                        isActive
                          ? "text-slate-900 dark:text-white"
                          : "text-slate-700 dark:text-slate-300"
                      }`}
                    >
                      {item.label}
                    </span>
                  </button>
                );
              })}
            </div>
    
            {/* ACTION BAR */}
            <div className="mt-5 flex gap-3">
              <button
                onClick={() => scrollToSection("top")}
                className="flex-1 rounded-2xl bg-gradient-to-r from-cyan-500 to-violet-500 py-3 text-white font-semibold active:scale-[0.98] transition"
              >
                Back to Top ↑
              </button>
    
              <button
                onClick={() => setMobileOpen(false)}
                className="px-5 rounded-2xl border border-slate-200 dark:border-slate-800 text-sm text-slate-700 dark:text-slate-300"
              >
                Close
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
    </>
  );
}