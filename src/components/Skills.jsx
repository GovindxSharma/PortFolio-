import React from "react";
import { FaHtml5, FaJs, FaNodeJs, FaReact, FaBootstrap } from "react-icons/fa";
import { SiJquery, SiExpress, SiNextdotjs, SiRedux, SiTypescript, SiRender ,SiTailwindcss,SiMongodb} from "react-icons/si";
import { TbDatabase } from "react-icons/tb";

const skills = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-500 text-4xl" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400 text-4xl" /> },
  { name: "OOPs", icon: <TbDatabase className="text-blue-500 text-4xl" /> },
  { name: "Data Structure", icon: <TbDatabase className="text-green-500 text-4xl" /> },
  { name: "C++", icon: <TbDatabase className="text-indigo-500 text-4xl" /> },
  { name: "Bootstrap", icon: <FaBootstrap className="text-purple-500 text-4xl" /> },
  { name: "jQuery", icon: <SiJquery className="text-blue-400 text-4xl" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-600 text-4xl" /> },
  { name: "Express", icon: <SiExpress className="text-gray-400 text-4xl" /> },
  { name: "React", icon: <FaReact className="text-blue-400 text-4xl" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-white text-4xl" /> },
  { name: "Redux", icon: <SiRedux className="text-purple-400 text-4xl" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-500 text-4xl" /> },
  { name: "Render", icon: <SiRender className="text-gray-300 text-4xl" /> },
  { name: "TailwindCss", icon :<SiTailwindcss className="text-4xl text-blue-400"/>},
  { name: "MongoDB", icon :<SiMongodb className="text-4xl text-green-600"/>}
];

const Skills = () => {
  return (
    <section id="strength" className="py-12 bg-[#0F2648] text-white pt-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
      <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 mb-8 tracking-wide drop-shadow-lg">
      Strength
    </h2>
    
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center bg-gray-800 rounded-lg p-6 shadow-lg hover:scale-105 transition-transform"
            >
              {skill.icon}
              <p className="mt-2 text-lg font-semibold">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;