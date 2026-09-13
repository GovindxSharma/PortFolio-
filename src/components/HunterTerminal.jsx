import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, X, Minimize2, Maximize2, Sparkles, Send } from "lucide-react";
import { soundFX } from "../utils/soundEffects";
import { useTheme } from "../context/ThemeContext";

export default function HunterTerminal({ isOpen, onClose, onOpenStatus }) {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState([
    { type: "system", text: "SYSTEM CLI v2.0 // SHADOW MONARCH CONSOLE INITIALIZED" },
    { type: "system", text: "Type 'help' to view commands or 'status' to open hunter attributes." },
  ]);
  const bottomRef = useRef(null);
  const inputRef = useRef(null);
  const { setThemeMode } = useTheme();

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
      soundFX.playClick();
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const [cmdStack, setCmdStack] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);

  const executeCommand = (rawCmd) => {
    const trimmed = (rawCmd || "").trim();
    if (!trimmed) return;
    const cmd = trimmed.toLowerCase();

    soundFX.playClick();
    setCmdStack((prev) => [...prev, trimmed]);
    setHistoryIndex(-1);

    const newHistory = [...history, { type: "user", text: `> ${trimmed}` }];

    const parts = cmd.split(" ");
    const mainCmd = parts[0];
    const arg = parts[1];

    switch (mainCmd) {
      case "help":
        newHistory.push({
          type: "output",
          text: `AVAILABLE COMMANDS:
  • help             - Show this instruction manual
  • status           - Open S-Rank Hunter Status Window
  • arise            - Unleash the Shadow Monarch summoning resonance
  • projects         - List top featured projects and live URLs
  • skills           - Display technical mana & stack masteries
  • exp              - Display battle and engineering experience
  • contact / hire   - Display communication frequencies
  • resume           - Launch Govind's full PDF resume
  • theme <dark|light|red> - Switch visual domain
  • clear            - Clear terminal screen history
  • exit             - Close terminal window`,
        });
        break;

      case "status":
        newHistory.push({ type: "output", text: "✨ [STATUS]: Opening S-Rank Hunter Status Window..." });
        if (onOpenStatus) {
          onOpenStatus();
        }
        break;

      case "arise":
        soundFX.playArise();
        newHistory.push({
          type: "special",
          text: "✨ [ARISE ACTIVATED]: The Shadow Monarch's domain expands. Shadow extraction complete.",
        });
        break;

      case "projects":
        newHistory.push({
          type: "output",
          text: `FEATURED DUNGEON PROJECTS:
  1. Aerion Medtech (Live) -> https://aerionmedtech.com
  2. SK Foodz (Live) -> https://skfoodz.in
  3. Bunty Saloon (Live) -> https://buntysaloon.onrender.com
  4. Shopshere (E-Commerce) -> https://shopsheretheshoppingzone.onrender.com/
  5. Chat-to-talk (Real-time Chat) -> https://chat-to-talk.onrender.com
  (Navigate to Realm 3 for 18+ interactive project raids!)`,
        });
        break;

      case "skills":
        newHistory.push({
          type: "output",
          text: `AWAKENED SKILL BREAKDOWN:
  • Frontend: React.js, Next.js, TypeScript, Three.js, Tailwind CSS (96%)
  • Backend: Node.js, Express.js, REST APIs, Socket.io, JWT (98%)
  • Database: MongoDB, Mongoose, Prisma, PostgreSQL (94%)
  • AI: OpenAI APIs, LLM Prompts, Cloud Integrations (97%)
  • Fundamentals: DSA in C++, System Design, Big-O (99%)`,
        });
        break;

      case "exp":
        newHistory.push({
          type: "output",
          text: `SYSTEM EXPERIENCE LOGS:
  • Vizon Technolabs (Oct 2025 – Present) | Software Developer
  • Aerion MedTech (Aug 2025 – Oct 2025) | Software Development Intern`,
        });
        break;

      case "contact":
      case "hire":
        newHistory.push({
          type: "output",
          text: `COMMUNICATION CHANNELS:
  • Email: govindsharma2839@gmail.com
  • Phone/WA: +91 9712935176
  • GitHub: https://github.com/GovindxSharma
  • LinkedIn: https://www.linkedin.com/in/govind-sharmax30/`,
        });
        break;

      case "resume":
        window.open(
          "https://drive.google.com/file/d/1-DH9zTJ3Ft05GeR1M6ceR1umdA_1H0zQ/view?usp=drive_link",
          "_blank"
        );
        newHistory.push({ type: "output", text: "Opening Govind's Resume in a new tab..." });
        break;

      case "theme":
        if (arg === "dark" || arg === "light" || arg === "red") {
          setThemeMode(arg);
          newHistory.push({
            type: "output",
            text: `Domain switched to '${arg.toUpperCase()}'.`,
          });
        } else {
          newHistory.push({
            type: "error",
            text: "Usage: theme dark | theme light | theme red",
          });
        }
        break;

      case "clear":
        setHistory([]);
        setInput("");
        return;

      case "exit":
      case "quit":
        onClose();
        return;

      case "sudo":
        newHistory.push({
          type: "error",
          text: "PERMISSION GRANTED: Monarch Govind Sharma holds absolute root privileges.",
        });
        break;

      default:
        newHistory.push({
          type: "error",
          text: `Command not recognized: '${cmd}'. Type 'help' for command list.`,
        });
    }

    setHistory(newHistory);
    setInput("");
  };

  const handleCommand = (e) => {
    e.preventDefault();
    executeCommand(input);
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowUp") {
      e.preventDefault();
      if (cmdStack.length === 0) return;
      const nextIndex = historyIndex === -1 ? cmdStack.length - 1 : Math.max(0, historyIndex - 1);
      setHistoryIndex(nextIndex);
      setInput(cmdStack[nextIndex] || "");
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (cmdStack.length === 0 || historyIndex === -1) return;
      const nextIndex = historyIndex + 1;
      if (nextIndex >= cmdStack.length) {
        setHistoryIndex(-1);
        setInput("");
      } else {
        setHistoryIndex(nextIndex);
        setInput(cmdStack[nextIndex] || "");
      }
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[80] flex items-center justify-center p-3 sm:p-4 md:p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 dark:bg-black/75 backdrop-blur-md"
          />

          {/* Terminal Window */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 25 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 25 }}
            className="
              relative w-full max-w-2xl h-[480px]
              rounded-2xl sm:rounded-3xl
              border border-slate-300 dark:border-cyan-500/50
              bg-white dark:bg-[#101218]/95 text-slate-900 dark:text-white
              shadow-2xl
              backdrop-blur-2xl
              flex flex-col
              overflow-hidden
              z-10
            "
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-[#0c0d12] text-xs font-mono text-cyan-600 dark:text-cyan-400">
              <div className="flex items-center gap-2">
                <div className="flex gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-rose-500/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-500/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
                </div>
                <span className="font-bold ml-2">govind@monarch-terminal: ~</span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={onClose}
                  className="p-1 text-slate-400 hover:text-white transition"
                >
                  <X size={15} />
                </button>
              </div>
            </div>

            {/* Output Screen (No Scrollbar) */}
            <div className="flex-1 p-4 overflow-y-auto font-mono text-xs space-y-2 no-scrollbar select-text">
              {history.map((h, i) => (
                <div
                  key={i}
                  className={`leading-relaxed whitespace-pre-wrap ${
                    h.type === "system"
                      ? "text-cyan-400 font-bold"
                      : h.type === "user"
                      ? "text-amber-300 font-bold"
                      : h.type === "special"
                      ? "text-violet-400 font-bold bg-[#141722] p-2 rounded-lg border border-violet-500/30"
                      : h.type === "error"
                      ? "text-rose-400"
                      : "text-slate-300"
                  }`}
                >
                  {h.text}
                </div>
              ))}
              <div ref={bottomRef} />
            </div>

            {/* Quick Command Pills Dock */}
            <div className="flex items-center gap-1.5 px-4 py-2 border-t border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-[#0c0d12] overflow-x-auto no-scrollbar text-[10px] font-mono">
              <span className="text-slate-400 font-bold shrink-0">QUICK CMDS:</span>
              {["help", "projects", "skills", "exp", "status", "hire", "clear"].map((cmd) => (
                <button
                  key={cmd}
                  type="button"
                  onClick={() => {
                    soundFX.playClick();
                    executeCommand(cmd);
                  }}
                  onMouseEnter={() => soundFX.playHover()}
                  className="px-2 py-0.5 rounded-md bg-white dark:bg-[#161a24] hover:bg-cyan-500/20 text-slate-700 dark:text-cyan-300 border border-slate-300 dark:border-white/10 hover:border-cyan-400 transition shrink-0"
                >
                  {cmd}
                </button>
              ))}
            </div>

            {/* Input Line */}
            <form
              onSubmit={handleCommand}
              className="flex items-center gap-2 px-4 py-3 border-t border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-[#090a0f]"
            >
              <span className="text-cyan-600 dark:text-cyan-400 font-mono font-bold text-sm select-none">&gt;</span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Type 'help', 'arise', 'projects', 'status'..."
                className="flex-1 bg-transparent text-slate-900 dark:text-white font-mono text-xs focus:outline-none placeholder:text-slate-400 dark:placeholder:text-slate-600"
              />
              <button
                type="submit"
                className="p-1.5 rounded-lg bg-cyan-500/20 text-cyan-600 dark:text-cyan-300 border border-cyan-500/40 hover:bg-cyan-500/30 transition"
              >
                <Send size={13} />
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
