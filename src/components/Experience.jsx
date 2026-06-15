import React from "react";
import { motion } from "framer-motion";
import { Activity, Cpu, Globe } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      company: "Aerion MedTech",
      role: "Software Development Intern",
      duration: "Aug 2025 – Oct 2025",
      status: "Completed",
      icon: Globe,
      points: [
        "Built and deployed full company website from scratch",
        "Handled UI/UX, hosting, optimization & production release",
      ],
    },
    {
      company: "Vizon Technolabs",
      role: "Software Developer",
      duration: "Oct 2025 – Present",
      status: "Active",
      icon: Cpu,
      points: [
        "Delivered multiple client production systems (booking, compliance, foundations)",
        "Handled full lifecycle: requirement → build → deploy",
      ],
    },
  ];

  return (
    <section
      id="system-experience"
      className="relative px-5 md:px-6 py-16 md:py-20 bg-white dark:bg-slate-950 overflow-hidden"
    >
      {/* soft glow */}
      <div className="absolute top-10 left-10 h-72 w-72 bg-cyan-500/10 blur-[140px] rounded-full" />
      <div className="absolute bottom-10 right-10 h-72 w-72 bg-violet-500/10 blur-[140px] rounded-full" />

      <div className="max-w-5xl mx-auto">

        {/* HEADER */}
        <div className="relative mb-8 md:mb-10 text-center">

          {/* Title */}
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white">
            System Experience
          </h2>

          <p className="text-sm md:text-base text-slate-500 dark:text-slate-400 mt-2">
            Live execution modules from real projects
          </p>

          {/* STATUS */}
          <div className="absolute right-0 top-[-8px] md:top-0 flex items-center gap-2 text-[10px] md:text-xs text-slate-500">
            <Activity className="h-4 w-4 text-green-500 animate-pulse" />
            SYSTEM ONLINE
          </div>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-4 md:gap-6">

          {experiences.map((exp, i) => {
            const Icon = exp.icon;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="
                  relative p-4 md:p-6 rounded-2xl
                  border border-slate-200 dark:border-slate-800
                  bg-slate-50 dark:bg-slate-900/60
                  backdrop-blur-xl
                  hover:shadow-2xl
                  transition
                "
              >
                {/* TOP BAR */}
                <div className="flex items-center justify-between mb-4">

                  <div className="flex items-center gap-2">
                    <Icon className="h-5 w-5 text-cyan-500" />
                    <h3 className="font-bold text-slate-900 dark:text-white">
                      {exp.company}
                    </h3>
                  </div>

                  {/* STATUS */}
                  <span
                    className={`text-[10px] px-2 py-1 rounded-full border ${
                      exp.status === "Active"
                        ? "text-green-500 border-green-500/30 bg-green-500/10 animate-pulse"
                        : "text-blue-500 border-blue-500/30 bg-blue-500/10"
                    }`}
                  >
                    {exp.status}
                  </span>
                </div>

                {/* ROLE */}
                <p className="text-xs md:text-sm text-cyan-600 dark:text-cyan-400 font-medium">
                  {exp.role}
                </p>

                <p className="text-xs text-slate-500 mt-1">
                  {exp.duration}
                </p>

                {/* OUTPUT LOG */}
                <div className="mt-4 space-y-2 font-mono text-xs leading-relaxed">
                  {exp.points.map((p, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="text-slate-700 dark:text-slate-300"
                    >
                      <span className="text-green-500 mr-2">$</span>
                      {p}
                    </motion.div>
                  ))}
                </div>

              </motion.div>
            );
          })}

        </div>
      </div>
    </section>
  );
};

export default Experience;