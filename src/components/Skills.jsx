import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Code2,
  Server,
  Database,
  Layers,
  Cloud,
  Cpu,
  Sparkles,
  Zap,
  Swords,
  ShieldCheck,
} from "lucide-react";
import { soundFX } from "../utils/soundEffects";

const skillGroups = [
  {
    category: "ACTIVE COMBAT SKILLS",
    title: "Frontend Engineering",
    icon: Code2,
    mana: "96% Mastery",
    items: [
      "React.js",
      "Next.js",
      "JavaScript (ES6+)",
      "TypeScript",
      "Redux Toolkit",
      "Context API",
      "Three.js & WebGL",
      "Tailwind CSS",
      "HTML5 / CSS3",
      "Responsive UI/UX",
      "Framer Motion",
      "Web Performance",
    ],
  },
  {
    category: "SERVER CORE MAGIC",
    title: "Backend Engineering",
    icon: Server,
    mana: "98% Mastery",
    items: [
      "Node.js",
      "Express.js",
      "RESTful API Design",
      "JWT & Session Auth",
      "OAuth 2.0 (Google Login)",
      "Middleware Architecture",
      "Socket.io (Real-time)",
      "Error Handling & Logging",
      "Microservices (Basics)",
    ],
  },
  {
    category: "DATA RUNESTONES",
    title: "Databases & Data Modeling",
    icon: Database,
    mana: "94% Mastery",
    items: [
      "MongoDB",
      "Mongoose ODM",
      "Prisma ORM",
      "PostgreSQL Basics",
      "MySQL Basics",
      "Schema Design",
      "Data Indexing",
      "Aggregation Pipelines",
    ],
  },
  {
    category: "ARCHITECTURAL FORTRESS",
    title: "System Design & Architecture",
    icon: Layers,
    mana: "95% Mastery",
    items: [
      "MVC Architecture",
      "Scalable Backend Design",
      "Monolithic & Modular",
      "API Design Principles",
      "Rate Limiting & Security",
      "High-Concurrency Caching",
    ],
  },
  {
    category: "DEVOPS CONJURATION",
    title: "DevOps & Deployment",
    icon: Cloud,
    mana: "92% Mastery",
    items: [
      "Git & GitHub Actions",
      "Docker Containerization",
      "CI/CD Pipelines",
      "Vercel Deployment",
      "Render Deployment",
      "Environment Management",
      "Cloudflare CDN",
    ],
  },
  {
    category: "PASSIVE COGNITIVE BUFFS",
    title: "Engineering Fundamentals",
    icon: Cpu,
    mana: "99% Mastery",
    items: [
      "Data Structures & Algorithms",
      "Problem Solving & Logic",
      "Object-Oriented Programming",
      "Clean Code Principles",
      "Debugging & Profiling",
      "Complexity Analysis (Big-O)",
    ],
  },
  {
    category: "AI & THIRD-PARTY INVOCATIONS",
    title: "Modern AI & Integrations",
    icon: Sparkles,
    mana: "97% Mastery",
    items: [
      "OpenAI & LLM API Pipelines",
      "AI Prompt Engineering",
      "Cloudinary File Streaming",
      "Razorpay Payment Gateway",
      "Formspree Webhooks",
      "Third-Party SDKs",
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative py-3 sm:py-6 px-1 sm:px-4 overflow-hidden"
    >
      {/* Background Glows */}
      <div className="absolute top-1/4 right-0 w-[450px] h-[450px] bg-cyan-500/10 blur-[170px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-[450px] h-[450px] bg-violet-600/10 blur-[170px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative">

        {/* HEADER */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-white/70 dark:bg-[#12141c] px-3.5 py-1 text-xs font-mono text-cyan-400 font-bold mb-3">
            <Zap size={13} className="text-cyan-400" />
            <span>[ AWAKENED SKILL MATRIX // COMBAT ABILITIES ]</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 dark:text-[#f8fafc] font-['Rajdhani',sans-serif] tracking-tight">
            Technical <span className="text-cyan-400">Mastery</span> & Awakened Spells
          </h2>

          <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-400 font-mono">
            High-tier abilities forged through real engineering battles, competitive coding, and scalable production deployments.
          </p>
        </div>

        {/* SKILLS GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillGroups.map((group, i) => {
            const Icon = group.icon;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                onMouseEnter={() => soundFX.playHover()}
                className="
                  group relative rounded-3xl p-6
                  border border-slate-200 dark:border-white/10
                  bg-white/90 dark:bg-[#101218]/90
                  backdrop-blur-xl
                  hover:border-cyan-400/50
                  hover:shadow-[0_0_25px_rgba(6,182,212,0.15)]
                  hover:-translate-y-1.5
                  transition-all duration-300
                  flex flex-col justify-between
                "
              >
                <div>
                  {/* Top Bar: Icon + Category + Mana */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500/20 to-violet-600/20 border border-cyan-500/30 text-cyan-400 shadow-[0_0_12px_rgba(6,182,212,0.2)]">
                      <Icon className="h-5 w-5" />
                    </div>

                    <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                      ⚡ {group.mana}
                    </span>
                  </div>

                  {/* Category Title */}
                  <span className="text-[10px] font-mono tracking-widest text-cyan-400 block uppercase font-bold">
                    {group.category}
                  </span>

                  <h3 className="text-xl font-bold font-['Rajdhani',sans-serif] text-slate-900 dark:text-white mt-0.5 mb-4 group-hover:text-cyan-400 transition-colors">
                    {group.title}
                  </h3>

                  {/* Skill Badges */}
                  <div className="flex flex-wrap gap-1.5">
                    {group.items.map((skill, idx) => (
                      <span
                        key={idx}
                        className="
                          text-xs font-mono
                          px-2.5 py-1
                          rounded-lg
                          border border-slate-200 dark:border-white/5
                          text-slate-700 dark:text-slate-300
                          bg-slate-50 dark:bg-[#151822]
                          hover:!border-cyan-400 hover:!text-cyan-400
                          transition-all duration-150 cursor-default
                        "
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Power Meter */}
                <div className="mt-5 pt-3 border-t border-slate-200 dark:border-white/5">
                  <div className="h-1 w-full bg-slate-200 dark:bg-[#0c0d12] rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: group.mana.split("%")[0] + "%" }}
                      transition={{ duration: 0.8, delay: i * 0.1 }}
                      className="h-full bg-gradient-to-r from-cyan-400 to-violet-500 rounded-full shadow-[0_0_8px_rgba(6,182,212,0.6)]"
                    />
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}