import React from "react";

const Skills = () => {
  const skillGroups = [
    {
      title: "Frontend Engineering",
      items: [
        "React.js", "Next.js", "JavaScript (ES6+)", "TypeScript",
        "Redux Toolkit", "Context API", "Tailwind CSS",
        "HTML5", "CSS3", "Responsive UI Design",
        "Web Performance Optimization",
      ],
    },
    {
      title: "Backend Engineering",
      items: [
        "Node.js", "Express.js", "REST API Design",
        "Authentication & Authorization", "JWT", "OAuth (Google Login)",
        "Middleware Architecture", "Error Handling",
      ],
    },
    {
      title: "Databases & Data Modeling",
      items: [
        "MongoDB", "MySQL Basics", "PostgreSQL Basics",
        "Prisma ORM", "Mongoose ODM",
        "Database Design", "Schema Modeling",
      ],
    },
    {
      title: "System Design & Architecture",
      items: [
        "MVC Architecture",
        "Scalable Backend Design (Basics)",
        "Monolithic Architecture Understanding",
        "API Design Principles",
        "Rate Limiting (Basics)",
      ],
    },
    {
      title: "DevOps & Deployment",
      items: [
        "Git & GitHub",
        "Docker Basics",
        "CI/CD Basics",
        "Vercel Deployment",
        "Render Deployment",
        "Environment Management (.env)",
      ],
    },
    {
      title: "Software Engineering Fundamentals",
      items: [
        "Data Structures & Algorithms",
        "Problem Solving",
        "Object-Oriented Programming",
        "Clean Code Principles",
        "Debugging & Optimization",
      ],
    },
    {
      title: "Modern Integrations",
      items: [
        "Cloudinary (File Uploads)",
        "AI API Integration",
        "OpenAI / LLM Basics",
        "Third-party API Integration",
      ],
    },
  ];

  return (
    <section id="skills"className="relative py-24 px-6 bg-white dark:bg-slate-950">

      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white">
            Technical <span className="text-cyan-500">Expertise</span>
          </h2>

          <p className="mt-3 text-slate-500 dark:text-slate-400">
            Structured full-stack engineering & production-ready development skills
          </p>
        </div>

        {/* GRID SECTIONS */}
        <div className="grid md:grid-cols-2 gap-6">

          {skillGroups.map((group, i) => (
            <div
              key={i}
              className="
                rounded-2xl
                border border-slate-200 dark:border-slate-800
                bg-slate-50/60 dark:bg-slate-900/40
                p-6
                hover:border-cyan-500/30
                transition
              "
            >

              {/* TITLE */}
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
                {group.title}
              </h3>

              {/* ITEMS */}
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill, idx) => (
                  <span
                    key={idx}
                    className="
                      text-xs md:text-sm
                      px-3 py-1.5
                      rounded-full
                      border border-slate-200 dark:border-slate-800
                      text-slate-700 dark:text-slate-300
                      bg-white dark:bg-slate-950
                      hover:border-cyan-400/40
                      hover:text-cyan-500
                      transition
                    "
                  >
                    {skill}
                  </span>
                ))}
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Skills;