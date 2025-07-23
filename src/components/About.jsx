import React from "react";

const About = () => {
  const resumeUrl =
    "https://drive.google.com/file/d/1Lst3cr9luApujRO9Zt5aQPtzAN7K-T_L/view?usp=sharing";

  return (
    <section
      id="about"
      className="scroll-mt-24 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-20 px-4 sm:px-8 md:px-16 lg:px-32"
    >
      <div className="max-w-5xl mx-auto bg-white/5 backdrop-blur-md rounded-3xl p-8 sm:p-10 md:p-14 shadow-2xl border border-white/10 animate-fade-in-up">
        <div className="flex flex-col md:flex-row items-center gap-10">
          
          {/* Text Content */}
          <div className="md:w-2/3 text-center md:text-left">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-400 mb-2">
              Govind Sharma
            </h2>
            <p className="text-xs sm:text-sm text-gray-400 mb-4">Full-Stack Developer</p>

            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
              Hello! I'm a passionate and performance-driven full-stack developer with a strong inclination toward{" "}
              <span className="text-blue-400 font-medium">backend engineering</span>. I build{" "}
              <span className="text-blue-400 font-medium">robust, scalable systems</span> using{" "}
              <span className="text-blue-400">JavaScript, TypeScript, Node.js</span>, and modern database technologies.
            </p>

            <p className="text-gray-400 text-sm sm:text-base mt-4">
              I enjoy solving complex problems, optimizing backend architecture, and collaborating across the stack to build impactful, real-world applications. I'm currently diving deeper into system design, distributed architecture, and contributing to scalable full-stack projects.
            </p>

            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-6 px-6 py-2 sm:px-8 sm:py-3 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white text-sm sm:text-base font-semibold rounded-full shadow-md transition duration-300"
            >
              View Resume
            </a>
          </div>

          {/* Profile Image */}
          <div className="md:w-1/3 flex justify-center">
            <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-52 md:h-52 rounded-full overflow-hidden border-4 border-blue-500 shadow-xl">
              <img
                src="/github.png"
                alt="Govind Sharma"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
