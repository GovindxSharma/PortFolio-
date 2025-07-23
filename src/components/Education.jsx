import React, { useRef, useEffect, useState } from "react";
import { FaLaptopCode } from "react-icons/fa";

const educationData = [
  {
    title: "WCTM College",
    subtitle: "2024 - Present",
    description: (
      <>
        Currently pursuing <strong>Computer Science</strong> with focus on{" "}
        <strong>Software Development</strong>, <strong>Cloud</strong>, and <strong>AI</strong>.
      </>
    ),
    color: "text-[#00ADB5] border-[#00ADB5] bg-white/5",
  },
  {
    title: "Maharshi Dayanand University",
    subtitle: "2020 - 2023",
    description: (
      <>
        Graduated with <strong>BCA</strong>. Focus on{" "}
        <strong>Data Structures</strong> and <strong>Full-Stack Engineering</strong>.
      </>
    ),
    color: "text-[#66FCF1] border-[#66FCF1] bg-white/10",
  },
  {
    title: "Coding Ninjas",
    subtitle: "2023",
    description: (
      <ul className="list-disc list-inside space-y-1">
        <li><strong>C++</strong> Foundations</li>
        <li><strong>DSA</strong> Mastery</li>
        <li><strong>MERN</strong> Stack Development</li>
      </ul>
    ),
    color: "text-[#FF69B4] border-[#FF69B4] bg-white/5",
  },
  {
    title: "Adani Public School",
    subtitle: "2018 - 2020",
    description: (
      <>
        Completed <strong>Higher Secondary</strong> with major in{" "}
        <strong>Science & Math</strong>.
      </>
    ),
    color: "text-[#FFBF00] border-[#FFBF00] bg-white/10",
  },
  {
    title: "Aga Khan School",
    subtitle: "2006 - 2018",
    description: (
      <>
        Strong academic and extracurricular background during early schooling.
      </>
    ),
    color: "text-[#A8DF8E] border-[#A8DF8E] bg-white/5",
  },
];

const Education = () => {
  const sectionRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const sectionTop = sectionRef.current.offsetTop;
      const sectionHeight = sectionRef.current.offsetHeight;
      const scrollTop = window.scrollY + window.innerHeight / 2;

      const scrolled = Math.min(
        Math.max(scrollTop - sectionTop, 0),
        sectionHeight
      );

      const percentage = (scrolled / sectionHeight) * 100;
      setProgress(percentage);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="education"
      className="scroll-mt-24 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-24 px-6 md:px-16 lg:px-32"
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14 animate-fade-in-up">
          <p className="text-sm text-gray-400 uppercase tracking-widest mb-2">
            Learning Journey
          </p>
          <h2 className="text-3xl sm:text-4xl font-semibold text-white">
            <span className="text-blue-400">Education</span>
          </h2>
          <div className="mt-2 w-10 h-0.5 bg-white/30 mx-auto rounded-full" />
        </div>

        {/* Timeline with scroll tracker */}
        <div ref={sectionRef} className="relative">
          {/* Center Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-white/10 rounded-full" />

          {/* Floating Scroll Icon */}
          <div
            className="absolute left-1/2 transform -translate-x-1/2 z-20 transition-all duration-200"
            style={{ top: `${progress}%` }}
          >
            <div className="w-10 h-10 bg-white/10 text-blue-400 p-2 rounded-full shadow-md flex items-center justify-center">
              <FaLaptopCode className="w-6 h-6 animate-pulse" />
            </div>
          </div>

          {/* Timeline Items */}
          {educationData.map((edu, index) => {
            const isLeft = index % 2 === 0;
            return (
              <div
                key={index}
                className={`relative mb-12 flex flex-col md:flex-row ${
                  isLeft ? "md:items-end" : "md:flex-row-reverse md:items-start"
                }`}
              >
                {/* Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 bg-blue-500 w-4 h-4 rounded-full z-10 border-4 border-black shadow-md" />

                {/* Card */}
                <div
                  className={`w-full md:w-1/2 p-6 sm:p-8 ${edu.color} rounded-2xl shadow-xl backdrop-blur-lg transition-transform duration-300 hover:scale-[1.02] border border-white/10 ${
                    isLeft ? "md:pr-12" : "md:pl-12"
                  }`}
                >
                  <h3 className={`text-xl font-bold mb-1 ${edu.color.split(" ")[1]}`}>
                    {edu.title}
                  </h3>
                  <p className="text-sm text-gray-400 mb-3">{edu.subtitle}</p>
                  <div className="text-gray-300 text-base leading-relaxed">
                    {edu.description}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Education;
