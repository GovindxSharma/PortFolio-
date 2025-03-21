import React from "react";
import { FaTasks, FaComments, FaShoppingCart, FaGamepad, FaRobot, FaMusic, FaCamera } from "react-icons/fa";
import { SiDiscord, SiTelegram, SiReact } from "react-icons/si";

const projects = [
  {
    name: "Todo App",
    icon: <FaTasks className="text-blue-400 text-4xl" />,
    description: "A simple task manager to add, edit, and delete tasks efficiently."
  },
  {
    name: "Chatting App",
    icon: <FaComments className="text-green-400 text-4xl" />,
    description: "A real-time chat application with group and private messaging."
  },
  {
    name: "E-commerce",
    icon: <FaShoppingCart className="text-yellow-400 text-4xl" />,
    description: "A fully functional e-commerce platform with payments and cart features."
  },
  {
    name: "Yard Management System",
    icon: <SiReact className="text-purple-400 text-4xl" />,
    description: "A logistics solution for tracking and managing warehouse inventory."
  },
  {
    name: "Ping Pong Game",
    icon: <FaGamepad className="text-red-400 text-4xl" />,
    description: "A simple yet engaging ping pong game with AI opponent mode."
  },
  {
    name: "Screen Capture",
    icon: <FaCamera className="text-gray-400 text-4xl" />,
    description: "A tool to capture and edit screenshots with annotation features."
  },
  {
    name: "Music Player",
    icon: <FaMusic className="text-indigo-400 text-4xl" />,
    description: "A modern music player with playlists, equalizer, and streaming support."
  },
  {
    name: "Static E-commerce",
    icon: <FaShoppingCart className="text-green-500 text-4xl" />,
    description: "A basic static e-commerce site for showcasing products and catalogs."
  },
  {
    name: "Telegram Bot",
    icon: <SiTelegram className="text-blue-400 text-4xl" />,
    description: "A smart Telegram bot to automate tasks and respond to queries."
  },
  {
    name: "Discord Bot",
    icon: <SiDiscord className="text-purple-500 text-4xl" />,
    description: "A feature-rich Discord bot for moderation, music, and automation."
  },
  {
    name: "All About Pets",
    icon: <FaRobot className="text-yellow-500 text-4xl" />,
    description: "A pet adoption platform connecting pet owners with caregivers."
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-12 bg-slate-900 pt-20 text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Section Title */}
        <h2 className="text-5xl font-extrabold text-white mb-8 relative inline-block">
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
            Projects
          </span>
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-blue-500 rounded-full"></div>
        </h2>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center bg-gray-800 rounded-lg p-6 shadow-lg hover:scale-105 transition-transform text-center"
            >
              {project.icon}
              <h3 className="mt-3 text-xl font-semibold">{project.name}</h3>
              <p className="mt-2 text-gray-300 text-sm">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
