import React, { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false); // Close mobile menu after clicking
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-slate-950 text-white px-6 py-4 flex items-center justify-between shadow-md">
      <div className="text-2xl font-extralight tracking-wider cursor-pointer" onClick={() => handleNavClick("about")}>
      <span>{"<Govid "}</span>
      <span>{" Sharma />"}</span>
      </div>

      {/* Desktop Navbar */}
      <ul className="hidden md:flex space-x-6 text-lg">
        <li><a href="#about" onClick={() => handleNavClick("about")}>About</a></li>
        <li><a href="#experience" onClick={() => handleNavClick("experience")}>Experience</a></li>
        <li><a href="#education" onClick={() => handleNavClick("education")}>Education</a></li>
        <li><a href="#strength" onClick={() => handleNavClick("strength")}>Strength</a></li>
        <li><a href="#projects" onClick={() => handleNavClick("projects")}>Projects</a></li>
        <li><a href="#contact" onClick={() => handleNavClick("contact")}>Contact</a></li>
      </ul>

      {/* Mobile Menu Button */}
      <button onClick={() => setMenuOpen(true)} className="md:hidden">
        <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </button>

      {/* Mobile Sidebar Menu */}
      <div className={`fixed top-0 left-0 w-64 h-full bg-slate-900 text-white shadow-lg transform transition-transform duration-300 ${menuOpen ? "translate-x-0" : "-translate-x-full"} md:hidden`}>
        <div className="p-4 flex justify-between items-center border-b border-gray-700">
          <h2 className="text-xl font-bold">Menu</h2>
          <button onClick={() => setMenuOpen(false)}>
            <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <ul className="p-4 space-y-4 text-lg">
          <li><a href="#about" onClick={() => handleNavClick("about")}>About</a></li>
          <li><a href="#experience" onClick={() => handleNavClick("experience")}>Experience</a></li>
          <li><a href="#education" onClick={() => handleNavClick("education")}>Education</a></li>
          <li><a href="#strength" onClick={() => handleNavClick("strength")}>Strength</a></li>
          <li><a href="#projects" onClick={() => handleNavClick("projects")}>Projects</a></li>
          <li><a href="#contact" onClick={() => handleNavClick("contact")}>Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
