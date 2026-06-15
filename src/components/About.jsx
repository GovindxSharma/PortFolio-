import React from "react";
import { ArrowUpRight, Sparkles } from "lucide-react";

const About = () => {
  const resumeUrl =
    "https://drive.google.com/file/d/1hzAaMHUEFeLnl0hI6LkEGuo4jBbR5wWF/view?usp=drive_link";

  const techStack = [
    "React",
    "Node.js",
    "Express",
    "MongoDB",
    "TypeScript",
    "Tailwind CSS",
    "AI",
    "JavaScript",
  ];

  return (
    <section
      id="about"
      className="relative overflow-hidden scroll-mt-20 px-6 py-16 md:py-20"
    >
      {/* Background Glow */}
      <div className="absolute left-0 top-10 h-60 w-60 rounded-full bg-cyan-500/10 blur-[120px]" />
      <div className="absolute bottom-0 right-0 h-60 w-60 rounded-full bg-violet-500/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid items-center gap-10 lg:grid-cols-2">

          {/* LEFT */}
          <div className="text-center lg:text-left">

            {/* Badge */}
            <div className="inline-flex items-center justify-center lg:justify-start gap-2 rounded-full border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 py-1.5 shadow-sm">
              <Sparkles size={14} className="text-cyan-500" />
              <span className="text-xs md:text-sm font-medium text-slate-800 dark:text-slate-200">
                Available for Opportunities
              </span>
            </div>

            {/* Heading */}
            <h2 className="mt-5 text-3xl md:text-6xl font-black leading-tight text-slate-950 dark:text-slate-100">
              Crafting{" "}
              <span className="bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-500 bg-clip-text text-transparent">
                Scalable
              </span>
              <br />
              Digital Products
            </h2>

            {/* Text */}
            <p className="mt-5 text-sm md:text-lg text-slate-800 dark:text-slate-300 leading-relaxed">
              I'm Govind Sharma, a Full-Stack Developer focused on building
              performant backend systems and beautiful user experiences.
            </p>

            <p className="mt-3 text-sm md:text-base text-slate-600 dark:text-slate-400">
              I specialize in JavaScript, TypeScript, Node.js, React, MongoDB,
              and AI-powered applications.
            </p>

            {/* Tech */}
            <div className="mt-5 flex flex-wrap justify-center lg:justify-start gap-2">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 py-1 text-xs md:text-sm text-slate-700 dark:text-slate-200"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Button */}
            <div className="mt-6 flex justify-center lg:justify-start">
              <a
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-600 px-6 py-3 text-sm md:text-base font-semibold text-white hover:scale-105 transition"
              >
                View Resume
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative flex justify-center">
            <div className="absolute -inset-4 rounded-[30px] bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-violet-500/20 blur-2xl" />

            <div className="relative overflow-hidden rounded-2xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 p-4 shadow-lg w-full max-w-sm">
              <img
                src="/github.png"
                alt="profile"
                className="h-[260px] md:h-[360px] w-full max-w-sm rounded-xl object-cover"
              />

              {/* Stats */}
              <div className="mt-4 grid grid-cols-3 gap-2">
                <div className="rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 p-3 text-center">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    10+
                  </h3>
                  <p className="text-[10px] text-slate-600 dark:text-slate-400">
                    Projects
                  </p>
                </div>

                <div className="rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 p-3 text-center">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    MERN
                  </h3>
                  <p className="text-[10px] text-slate-600 dark:text-slate-400">
                    Stack
                  </p>
                </div>

                <div className="rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 p-3 text-center">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    AI
                  </h3>
                  <p className="text-[10px] text-slate-600 dark:text-slate-400">
                    Powered
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;