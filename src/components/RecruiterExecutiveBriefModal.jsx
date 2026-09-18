import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FileCheck2,
  Copy,
  Check,
  ExternalLink,
  X,
  Briefcase,
  Shield,
  Zap,
  Award,
  Download,
  Mail,
  Phone,
  Terminal,
} from "lucide-react";
import { soundFX } from "../utils/soundEffects";
import { PROFILE } from "../data/profile";

export default function RecruiterExecutiveBriefModal({ isOpen, onClose }) {
  const [copied, setCopied] = useState(false);

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

  const candidateSummaryMarkdown = `### Candidate Executive Brief: Govind Sharma
**Target Roles:** Software Engineer | Full-Stack Developer | Backend Engineer
**Contact:** ${PROFILE.email} | ${PROFILE.phoneFormatted}
**Location:** ${PROFILE.location}
**Resume:** ${PROFILE.resumeUrl}
**GitHub:** ${PROFILE.socials.github} | **LinkedIn:** ${PROFILE.socials.linkedin}

---
#### Key Verified Metrics & Engineering Accomplishments:
1. **Algorithmic Problem Solving:** 2,000+ DSA challenges solved across LeetCode & CodeStudio (Dynamic Programming, Graphs, Trees, Heaps).
2. **Database Performance:** Reduced MongoDB query latency by 35% through compound B-Tree indexing and optimized aggregation pipelines.
3. **Real-Time Architecture:** Architected WebSocket event pipelines maintaining sub-50ms round-trip delivery.
4. **Client & Production Delivery:** Deployed 6+ production platforms with 0 downtime (Vizon Technolabs, Aerion MedTech, SK Foodz, Aarya Foundation).
5. **Frontend Speed:** Consistent 95+ Google Lighthouse scores across Performance, Accessibility, and SEO.

#### Core Technical Stack:
- **Languages:** JavaScript (ES6+), TypeScript, C++, HTML5/CSS3
- **Frontend:** React.js, Vite, Next.js, React Native / Expo, Tailwind CSS, Framer Motion
- **Backend & DB:** Node.js, Express.js, MongoDB (Mongoose), RESTful APIs, WebSockets (Socket.io), JWT / RBAC
- **DevOps & Tools:** Git/GitHub, Docker, CI/CD, Postman, Cloudflare, Vercel

*Availability: Immediate | Status: S-Rank Active*`;

  const copyBrief = () => {
    soundFX.playLevelUp();
    navigator.clipboard.writeText(candidateSummaryMarkdown);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

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

        {/* Modal Card */}
        <motion.div
          onClick={(e) => e.stopPropagation()}
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 20 }}
          className="relative w-full max-w-2xl bg-white dark:bg-[#0c0e15] border border-cyan-500/40 rounded-3xl p-5 sm:p-7 shadow-[0_0_60px_rgba(6,182,212,0.3)] text-slate-900 dark:text-slate-100 z-10 cursor-default"
        >
          {/* Header */}
          <div className="flex items-start justify-between gap-4 border-b border-slate-200 dark:border-white/10 pb-4">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-emerald-500 to-cyan-600 flex items-center justify-center text-white shadow-lg shadow-emerald-500/30">
                <FileCheck2 className="w-6 h-6" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono font-black text-emerald-600 dark:text-emerald-400 uppercase tracking-widest">
                    [ RECRUITER EXECUTIVE BRIEF // 30-SEC PITCH ]
                  </span>
                  <span className="px-2 py-0.5 rounded-full text-[9px] font-mono font-bold bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
                    IMMEDIATELY AVAILABLE
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-black font-['Rajdhani',sans-serif]">
                  Candidate Brief: Govind Sharma
                </h3>
              </div>
            </div>

            <button
              onClick={() => {
                soundFX.playClick();
                onClose();
              }}
              className="p-2 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/10 transition"
              aria-label="Close brief"
            >
              <X size={18} />
            </button>
          </div>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 my-4 font-mono text-center">
            <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/5">
              <div className="text-xl font-black text-cyan-500">2,000+</div>
              <div className="text-[10px] text-slate-500">LeetCode DSA</div>
            </div>
            <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/5">
              <div className="text-xl font-black text-emerald-500">-35%</div>
              <div className="text-[10px] text-slate-500">DB Query Latency</div>
            </div>
            <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/5">
              <div className="text-xl font-black text-violet-500">6+</div>
              <div className="text-[10px] text-slate-500">Production Ships</div>
            </div>
            <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/5">
              <div className="text-xl font-black text-blue-500">&lt;50ms</div>
              <div className="text-[10px] text-slate-500">Socket Latency</div>
            </div>
          </div>

          {/* 30-Second Summary */}
          <div className="p-3.5 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-xs font-mono text-slate-700 dark:text-slate-200 space-y-1.5">
            <div className="font-bold text-cyan-600 dark:text-cyan-400 uppercase">
              Executive Candidate Summary:
            </div>
            <p className="leading-relaxed">
              Full-Stack Software Engineer with commercial agency and startup experience (Vizon Technolabs, Aerion MedTech). Specializes in high-performance MERN & TypeScript architectures, secure authentication (JWT/RBAC), database query optimization, and real-time WebSockets. Proven record of delivering 4 client platforms with zero downtime.
            </p>
          </div>

          {/* Core Roles & Logistics */}
          <div className="my-4 grid sm:grid-cols-2 gap-3 text-xs font-mono">
            <div className="p-3 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/5 space-y-1">
              <span className="text-slate-500 text-[10px] uppercase font-bold block">Target Roles:</span>
              <span className="font-bold text-slate-800 dark:text-slate-200">
                Software Engineer, Full-Stack Developer, Backend Architect (Node/React/TypeScript)
              </span>
            </div>
            <div className="p-3 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/5 space-y-1">
              <span className="text-slate-500 text-[10px] uppercase font-bold block">Availability & Logistics:</span>
              <span className="font-bold text-slate-800 dark:text-slate-200">
                Immediate Notice | Remote (Global) or On-Site Relocation
              </span>
            </div>
          </div>

          {/* Action Bar */}
          <div className="pt-3 border-t border-slate-200 dark:border-white/10 flex flex-wrap items-center justify-between gap-3 font-mono text-xs">
            <button
              onClick={copyBrief}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold transition shadow-md active:scale-95 ${
                copied
                  ? "bg-emerald-600 text-white"
                  : "bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:brightness-110 shadow-cyan-500/20"
              }`}
            >
              {copied ? <Check size={14} /> : <Copy size={14} />}
              <span>{copied ? "COPIED TO CLIPBOARD!" : "COPY BRIEF FOR HIRING MANAGER"}</span>
            </button>

            <a
              href={PROFILE.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => soundFX.playClick()}
              className="flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-slate-100 dark:bg-white/10 hover:bg-slate-200 dark:hover:bg-white/20 text-slate-800 dark:text-white font-bold transition active:scale-95"
            >
              <span>Download PDF Resume</span>
              <ExternalLink size={13} />
            </a>

            <button
              onClick={() => {
                soundFX.playClick();
                onClose();
              }}
              className="ml-auto px-4 py-2 rounded-xl text-slate-500 hover:text-slate-700 dark:hover:text-white transition"
            >
              Close [Esc]
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
