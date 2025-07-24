import React from "react";
import Tilt from "react-parallax-tilt";
import {
  FaHtml5, FaJs, FaNodeJs, FaReact, FaBootstrap,
} from "react-icons/fa";
import {
  SiJquery, SiExpress, SiNextdotjs, SiRedux,
  SiTypescript, SiRender, SiTailwindcss, SiMongodb,
} from "react-icons/si";
import { TbDatabase } from "react-icons/tb";
import { motion } from "framer-motion";

// Skills Data
const skills = {
  Frontend: [
    { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
    { name: "React", icon: <FaReact className="text-blue-400" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-blue-400" /> },
    { name: "Bootstrap", icon: <FaBootstrap className="text-purple-500" /> },
    { name: "jQuery", icon: <SiJquery className="text-blue-300" /> },
  ],
  Backend: [
    { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
    { name: "Express", icon: <SiExpress className="text-gray-300" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
  ],
  Tools: [
    { name: "Redux", icon: <SiRedux className="text-purple-400" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
    { name: "Render", icon: <SiRender className="text-gray-400" /> },
  ],
  Concepts: [
    { name: "OOPs", icon: <TbDatabase className="text-blue-400" /> },
    { name: "Data Structures", icon: <TbDatabase className="text-green-400" /> },
    { name: "C++", icon: <TbDatabase className="text-indigo-400" /> },
  ],
};

// Animation
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.05, duration: 0.6 },
  }),
};

const Skills = () => {
  return (
    <section
      id="strength"
      className="bg-gradient-to-br from-[#0a0f24] via-[#0c1a3c] to-[#050d1e] text-white py-24 px-6 md:px-16 lg:px-32"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="max-w-6xl mx-auto text-center"
      >
        {/* Section Heading */}
        <div className="text-center mb-14">
          <p className="text-sm text-gray-400 uppercase tracking-widest mb-2">
            Technical Arsenal
          </p>
          <h2 className="text-3xl sm:text-4xl font-semibold text-white">
            <span className="text-blue-400">Strengths</span>{" "}
            <span className="text-purple-400">& Skills</span>
          </h2>
          <div className="mt-2 w-10 h-0.5 bg-white/30 mx-auto rounded-full" />
        </div>

        {/* Skill Categories */}
        {Object.entries(skills).map(([category, list], idx) => (
          <div key={category} className="mb-20">
            <motion.h3
              className="text-xl sm:text-2xl font-semibold text-white mb-8 tracking-widest uppercase"
              custom={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              {category}
            </motion.h3>

            {/* Skill Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 place-items-center">
              {list.map((skill, i) => (
                <Tilt key={i} tiltMaxAngleX={10} tiltMaxAngleY={10} glareEnable={false}>
                  <motion.div
                    className="w-28 h-28 sm:w-32 sm:h-32 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl flex flex-col items-center justify-center hover:border-cyan-300 transition-all duration-300 hover:scale-105 shadow-md hover:shadow-cyan-500/20"
                    custom={i}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                  >
                    <div className="text-3xl sm:text-4xl mb-2">{skill.icon}</div>
                    <p className="text-sm font-medium text-center text-gray-300">{skill.name}</p>
                  </motion.div>
                </Tilt>
              ))}
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;
