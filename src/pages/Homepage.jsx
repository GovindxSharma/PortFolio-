import React from "react";
import Navbar from "../components/Navbar";
import About from "../components/About";
import ProjectsExperience from "../components/ProjectsExperience";
import Education from "../components/Education";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import Experience from "../components/Experience";

const Homepage = () => {
  return (
    <div
      className="
        min-h-screen
        bg-slate-50
        text-slate-900
        dark:bg-slate-950
        dark:text-white
        transition-colors
        duration-300
      "
    >
      <Navbar />

      <main>
        <About />
        <Experience/>
        <ProjectsExperience />
        <Education />
        <Skills />
        <Contact />
      </main>
    </div>
  );
};

export default Homepage;