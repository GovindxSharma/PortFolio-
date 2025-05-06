import React from "react";

const About = () => {
  const resumeUrl =
    "https://drive.google.com/file/d/1T1SOOB7dzI80xantzYoEkzhcgEa0mpTl/view?usp=drive_link"; // Replace with your actual resume URL

  return (
    <section id="about" className="bg-gray-900 text-white py-16 pt-30 px-6 md:px-16 lg:px-32">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-blue-400 mb-6">About Me</h2>
        
        <p className="text-lg text-gray-300 leading-relaxed">
          <span className="text-2xl">🙏 Namaste! 👋</span>
          <br />
          I'm <span className="text-blue-400 font-semibold">Govind</span>, a dedicated full-stack developer with a strong focus on{" "}
          <span className="text-blue-400 font-semibold">backend engineering</span>. 
          I specialize in building <span className="text-blue-400">scalable, high-performance applications</span> using technologies like{" "}
          <span className="text-blue-400">JavaScript, TypeScript, Node.js</span>, and various databases.
        </p>

        <p className="text-lg text-gray-300 mt-4">
          A **fast learner** and **problem solver**, I thrive on tackling challenges, optimizing systems, and crafting innovative solutions. 
          My goal is to keep evolving, contribute to impactful projects, and push the boundaries of development.
        </p>

        <div className="mt-8 flex justify-center">
          <a
            href={resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg shadow-md transition duration-300"
          >
            View Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
