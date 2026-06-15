import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";

const educationData = [
  {
    title: "WCTM College",
    subtitle: "2024 - Present",
    desc: "Computer Science focused on Software Dev, Cloud & AI",
    skills: ["React", "Node", "AI", "Cloud"],
  },
  {
    title: "Maharshi Dayanand University",
    subtitle: "2020 - 2023",
    desc: "BCA with DSA & Full Stack Engineering focus",
    skills: ["DSA", "MERN", "System Design"],
  },
  {
    title: "Coding Ninjas",
    subtitle: "2023",
    desc: "C++, DSA & MERN Stack Development",
    skills: ["C++", "DSA", "MERN"],
  },
  {
    title: "Adani Public School",
    subtitle: "2018 - 2020",
    desc: "Science & Math foundation",
    skills: ["Logic", "Math", "Problem Solving"],
  },
  {
    title: "Aga Khan School",
    subtitle: "2006 - 2018",
    desc: "Early academic foundation",
    skills: ["Basics", "Discipline", "Consistency"],
  },
];

export default function Education() {
  return (
    <section
      id="education"
      className="relative py-24 px-6 bg-white dark:bg-slate-950 overflow-hidden"
    >
      {/* soft ambient light */}
      <div className="absolute top-0 left-0 w-[450px] h-[450px] bg-cyan-500/10 blur-[160px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-violet-500/10 blur-[160px] rounded-full" />

      <div className="max-w-3xl mx-auto relative">

        {/* HEADER */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white">
            Development Journey
          </h2>
          <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm">
            A structured evolution of real-world developer skills
          </p>
        </div>

        {/* CORE LINE */}
        <div className="relative">

          <div className="absolute left-3 top-0 bottom-0 w-[2px] bg-gradient-to-b from-cyan-500 via-blue-500 to-violet-500 opacity-40" />

          {educationData.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="relative pl-12 pb-8 group"
            >

              {/* NODE */}
              <div className="absolute left-0 top-1.5">
                <div className="h-6 w-6 rounded-full bg-slate-900 dark:bg-white flex items-center justify-center shadow-lg">
                  <FaGraduationCap className="text-cyan-500 text-sm" />
                </div>

                {/* pulse ring */}
                <div className="absolute inset-0 h-6 w-6 rounded-full bg-cyan-500/20 animate-ping" />
              </div>

              {/* CONTENT CARD */}
              <div className="
                relative
                rounded-xl
                border border-slate-200 dark:border-slate-800
                bg-white/60 dark:bg-slate-900/40
                backdrop-blur-xl
                p-4
                transition-all duration-300
                group-hover:translate-x-1
                group-hover:border-cyan-500/40
              ">

                {/* top row */}
                <div className="flex items-center justify-between">
                  <h3 className="text-md font-semibold text-slate-900 dark:text-white group-hover:text-cyan-500 transition">
                    {edu.title}
                  </h3>

                  <span className="text-[11px] text-slate-500">
                    {edu.subtitle}
                  </span>
                </div>

                {/* description */}
                <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">
                  {edu.desc}
                </p>

                {/* SKILL PILLS (IMPORTANT PART) */}
                <div className="flex flex-wrap gap-2 mt-3">
                  {edu.skills.map((s, idx) => (
                    <motion.span
                      key={idx}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.05 + idx * 0.03 }}
                      className="
                        text-[11px]
                        px-2 py-1
                        rounded-full
                        bg-slate-100 dark:bg-slate-800
                        text-slate-700 dark:text-slate-300
                        border border-slate-200 dark:border-slate-700
                        hover:border-cyan-500/40
                        transition
                      "
                    >
                      {s}
                    </motion.span>
                  ))}
                </div>

              </div>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}