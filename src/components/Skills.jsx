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

const practicalSkillHighlights = {
  "React.js": {
    skill: "React.js",
    project: "Aerion MedTech & ShopSphere",
    impact: "Architected component hierarchy with memoization and custom hooks, delivering 95+ Lighthouse performance and fluid 60 FPS interactions.",
    metric: "95+ Lighthouse Score",
  },
  "Node.js": {
    skill: "Node.js",
    project: "Vizon Technolabs Production Services",
    impact: "Constructed asynchronous REST API microservices handling multi-client transactions with strict JWT/RBAC security.",
    metric: "Zero-Downtime APIs",
  },
  "Express.js": {
    skill: "Express.js",
    project: "Vizon Technolabs & Yard Management",
    impact: "Structured modular routing, centralized error-handling middlewares, and high-concurrency rate limiters.",
    metric: "Clean Middleware Pipeline",
  },
  "MongoDB": {
    skill: "MongoDB",
    project: "Vizon Technolabs & ShopSphere",
    impact: "Engineered compound indexes and aggregation pipelines, cutting data query retrieval latency by 35%.",
    metric: "-35% Query Latency",
  },
  "Socket.io (Real-time)": {
    skill: "Socket.io (Real-time)",
    project: "Chat-to-talk Platform",
    impact: "Built WebSocket event channels with connection heartbeats, achieving sub-50ms message propagation and instant presence.",
    metric: "<50ms Event Delivery",
  },
  "Data Structures & Algorithms": {
    skill: "Data Structures & Algorithms",
    project: "2,000+ Algorithmic Challenges (LeetCode / Coding Ninjas)",
    impact: "Deep algorithmic problem-solving across Trees, Dynamic Programming, Graphs, and Heaps with rigorous Big-O complexity optimization.",
    metric: "2,000+ Problems Cleared",
  },
  "TypeScript": {
    skill: "TypeScript",
    project: "Enterprise Client Codebases",
    impact: "Implemented strict interface contracts, union typing, and generic models, eliminating runtime type exceptions.",
    metric: "100% Type-Safe Contracts",
  },
  "Tailwind CSS": {
    skill: "Tailwind CSS",
    project: "Aerion MedTech, SK Foodz & Portfolio",
    impact: "Engineered responsive, theme-adaptive design systems with clean mobile-first breakpoints and zero layout shifts.",
    metric: "Mobile-First Fluid UX",
  },
  "Next.js": {
    skill: "Next.js",
    project: "SEO-Optimized Web Platforms",
    impact: "Leveraged server components and static generation for fast initial page load and automatic image optimization.",
    metric: "Sub-Second First Paint",
  },
  "Docker Containerization": {
    skill: "Docker Containerization",
    project: "Containerized Microservices",
    impact: "Authored multi-stage Dockerfiles reducing production image footprints and ensuring 100% local-to-cloud parity.",
    metric: "Reproducible Builds",
  },
  "OpenAI & LLM API Pipelines": {
    skill: "OpenAI & LLM API Pipelines",
    project: "Skillbridge & AI Productivity Extensions",
    impact: "Integrated prompt engineering pipelines, streaming token responses, and automated context injection with rate-limit fallbacks.",
    metric: "AI Generation Pipelines",
  },
};

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [activeHighlight, setActiveHighlight] = useState(practicalSkillHighlights["MongoDB"]);

  const filterCategories = [
    { id: "all", label: "All Skills" },
    { id: "frontend", label: "Frontend", match: "Frontend" },
    { id: "backend", label: "Backend", match: "Backend" },
    { id: "data", label: "Databases", match: "Databases" },
    { id: "fundamentals", label: "DSA & Core", match: "Fundamentals" },
    { id: "devops-ai", label: "Cloud & AI", match: ["DevOps", "AI"] },
  ];

  const filteredGroups = skillGroups.filter((group) => {
    if (selectedCategory === "all") return true;
    const cat = filterCategories.find((c) => c.id === selectedCategory);
    if (!cat) return true;
    if (Array.isArray(cat.match)) {
      return cat.match.some((m) => group.title.includes(m));
    }
    return group.title.includes(cat.match);
  });

  const handleSelectSkill = (skillName) => {
    soundFX.playClick();
    if (practicalSkillHighlights[skillName]) {
      setActiveHighlight(practicalSkillHighlights[skillName]);
    } else {
      setActiveHighlight({
        skill: skillName,
        project: "Enterprise & Practical Development",
        impact: `Actively employed in production workflows and system architectures to ensure high reliability and code quality.`,
        metric: "Production Verified",
      });
    }
  };
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
        <div className="text-center mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-white/70 dark:bg-[#12141c] px-3.5 py-1 text-xs font-mono text-cyan-600 dark:text-cyan-400 font-bold mb-2.5">
            <Zap size={13} className="text-cyan-400" />
            <span>[ AWAKENED SKILL MATRIX // PRACTICAL ENGINEERING APPLIED ]</span>
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-slate-900 dark:text-[#f8fafc] font-['Rajdhani',sans-serif] tracking-tight">
            Technical <span className="text-cyan-600 dark:text-cyan-400">Mastery</span> & Production Spells
          </h2>

          <p className="mt-1.5 text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-mono max-w-2xl mx-auto">
            Abilities tested through 2,000+ competitive algorithm challenges and high-concurrency production platforms.
          </p>
        </div>

        {/* PRACTICAL SPOTLIGHT HUD BANNER */}
        {activeHighlight && (
          <motion.div
            key={activeHighlight.skill}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 p-4 sm:p-5 rounded-2xl sm:rounded-3xl border border-cyan-400/50 bg-gradient-to-r from-cyan-500/10 via-white dark:via-[#101218] to-violet-600/10 shadow-[0_4px_25px_rgba(6,182,212,0.12)] backdrop-blur-xl"
          >
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-slate-200 dark:border-white/10 pb-3 mb-3">
              <div className="flex items-center gap-2.5">
                <span className="flex h-2.5 w-2.5 rounded-full bg-cyan-400 animate-ping" />
                <span className="text-xs font-mono font-bold uppercase text-cyan-600 dark:text-cyan-400 tracking-wider">
                  PRACTICAL SPOTLIGHT: {activeHighlight.skill}
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-700 dark:text-cyan-300 font-black border border-cyan-500/30">
                  {activeHighlight.metric}
                </span>
              </div>
              <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400 hidden sm:inline">
                Click any skill badge to inspect application & impact
              </span>
            </div>

            <div className="grid sm:grid-cols-12 gap-3 text-xs font-mono">
              <div className="sm:col-span-4">
                <span className="text-[10px] uppercase text-slate-500 dark:text-slate-400 font-bold block mb-1">
                  Production Application:
                </span>
                <p className="font-bold text-slate-900 dark:text-white font-['Rajdhani',sans-serif] text-sm sm:text-base">
                  {activeHighlight.project}
                </p>
              </div>
              <div className="sm:col-span-8">
                <span className="text-[10px] uppercase text-slate-500 dark:text-slate-400 font-bold block mb-1">
                  Engineered Solution & Measured Result:
                </span>
                <p className="text-slate-700 dark:text-slate-300 font-sans leading-relaxed text-xs sm:text-sm">
                  {activeHighlight.impact}
                </p>
              </div>
            </div>
          </motion.div>
        )}

        {/* CATEGORY FILTER TABS */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-2 mb-5 no-scrollbar">
          {filterCategories.map((cat) => {
            const isSelected = selectedCategory === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => {
                  soundFX.playClick();
                  setSelectedCategory(cat.id);
                }}
                onMouseEnter={() => soundFX.playHover()}
                className={`px-3 py-1.5 rounded-xl text-xs font-mono font-bold whitespace-nowrap transition-all duration-200 ${
                  isSelected
                    ? "bg-gradient-to-r from-cyan-500 to-violet-600 text-white shadow-[0_0_12px_rgba(6,182,212,0.35)]"
                    : "bg-white/80 dark:bg-[#12141c] text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/10 hover:border-cyan-400/40"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* SKILLS GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {filteredGroups.map((group, i) => {
            const Icon = group.icon;

            return (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                onMouseEnter={() => soundFX.playHover()}
                className="
                  group relative rounded-2xl sm:rounded-3xl p-5 sm:p-6
                  border border-slate-200 dark:border-white/10
                  bg-white/90 dark:bg-[#101218]/90
                  backdrop-blur-xl
                  hover:border-cyan-400/50
                  hover:shadow-[0_4px_20px_rgba(6,182,212,0.12)]
                  hover:-translate-y-1
                  transition-all duration-300
                  flex flex-col justify-between
                "
              >
                <div>
                  {/* Top Bar: Icon + Category + Mana */}
                  <div className="flex items-center justify-between mb-3.5">
                    <div className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500/20 to-violet-600/20 border border-cyan-500/30 text-cyan-600 dark:text-cyan-400 shadow-sm">
                      <Icon className="h-5 w-5" />
                    </div>

                    <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20">
                      ⚡ {group.mana}
                    </span>
                  </div>

                  {/* Category Title */}
                  <span className="text-[9px] sm:text-[10px] font-mono tracking-widest text-cyan-600 dark:text-cyan-400 block uppercase font-bold">
                    {group.category}
                  </span>

                  <h3 className="text-lg sm:text-xl font-bold font-['Rajdhani',sans-serif] text-slate-900 dark:text-white mt-0.5 mb-3.5 group-hover:text-cyan-500 dark:group-hover:text-cyan-400 transition-colors">
                    {group.title}
                  </h3>

                  {/* Skill Badges with Click-to-Inspect Spotlight */}
                  <div className="flex flex-wrap gap-1.5">
                    {group.items.map((skill, idx) => {
                      const isHighlighted = activeHighlight?.skill === skill;
                      const hasCaseStudy = Boolean(practicalSkillHighlights[skill]);

                      return (
                        <button
                          key={idx}
                          onClick={() => handleSelectSkill(skill)}
                          onMouseEnter={() => {
                            if (hasCaseStudy) {
                              setActiveHighlight(practicalSkillHighlights[skill]);
                            }
                          }}
                          className={`
                            text-xs font-mono
                            px-2.5 py-1
                            rounded-lg
                            border transition-all duration-150 text-left
                            ${
                              isHighlighted
                                ? "border-cyan-400 bg-cyan-500/15 text-cyan-700 dark:text-cyan-300 font-bold shadow-[0_0_10px_rgba(6,182,212,0.3)]"
                                : "border-slate-200 dark:border-white/5 text-slate-700 dark:text-slate-300 bg-slate-50 dark:bg-[#151822] hover:border-cyan-400/50 hover:text-cyan-600 dark:hover:text-cyan-400"
                            }
                          `}
                          title={`Click to inspect ${skill} production impact`}
                        >
                          {skill}
                          {hasCaseStudy && (
                            <span className="ml-1 text-[9px] text-cyan-500 opacity-75">●</span>
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Bottom Power Meter */}
                <div className="mt-4 pt-3 border-t border-slate-200 dark:border-white/5">
                  <div className="h-1 w-full bg-slate-200 dark:bg-[#0c0d12] rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: group.mana.split("%")[0] + "%" }}
                      transition={{ duration: 0.8, delay: i * 0.08 }}
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