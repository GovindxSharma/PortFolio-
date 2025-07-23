import React, { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-slate-950/95 backdrop-blur-sm text-white px-6 py-4 flex items-center justify-between shadow-md border-b border-white/10">
      {/* Brand */}
      <div
        className="text-2xl font-light tracking-wide cursor-pointer bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent hover:scale-105 transition-transform"
        onClick={() => handleNavClick("about")}
      >
        &lt;Govind <span className="font-medium">Sharma</span> /&gt;
      </div>

      {/* Desktop Links */}
      <ul className="hidden md:flex space-x-8 text-sm font-medium tracking-wide">
        {["about", "projectexperience", "education", "strength", "contact"].map((id) => (
          <li key={id}>
            <a
              href={`#${id}`}
              onClick={() => handleNavClick(id)}
              className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
            >
              {id === "projectexperience" ? "Projects + Experience" : id.charAt(0).toUpperCase() + id.slice(1)}
            </a>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Button */}
      <button onClick={() => setMenuOpen(true)} className="md:hidden focus:outline-none">
        <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m0 6H4" />
        </svg>
      </button>

      {/* Mobile Sidebar */}
      <div className={`fixed top-0 left-0 w-64 h-full bg-slate-900/95 backdrop-blur-md text-white shadow-2xl border-r border-white/10 transform transition-transform duration-300 ease-in-out ${menuOpen ? "translate-x-0" : "-translate-x-full"} md:hidden`}>
        <div className="p-4 flex justify-between items-center border-b border-gray-700">
          <h2 className="text-xl font-semibold tracking-wide">Menu</h2>
          <button onClick={() => setMenuOpen(false)} className="text-white">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <ul className="p-6 space-y-4 text-base font-medium">
          {["about", "projectexperience", "education", "strength", "contact"].map((id) => (
            <li key={id}>
              <a
                href={`#${id}`}
                onClick={() => handleNavClick(id)}
                className="block text-gray-300 hover:text-blue-400 transition-colors duration-200"
              >
                {id === "projectexperience" ? "Projects + Experience" : id.charAt(0).toUpperCase() + id.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
