import React from "react";
import {
  FaCalculator, FaComments, FaShoppingCart, FaGamepad, FaMusic, FaRobot,
} from "react-icons/fa";
import {
  SiDiscord, SiTelegram, SiReact, SiYoutube,
} from "react-icons/si";
import { TbCapture } from "react-icons/tb";
import { PiShoppingBagFill } from "react-icons/pi";

const projects = [
  {
    title: "Shopshere",
    icon: <FaShoppingCart />, 
    desc: "Full-stack commerce app with Razorpay, admin dashboard, order mgmt.",
    live: "https://shopsheretheshoppingzone.onrender.com/",
    github: "https://github.com/your-username/shopshere",
  },
  {
    title: "Chatto",
    icon: <FaComments />, 
    desc: "Real-time chat app using Socket.io with group support and private rooms.",
    github: "https://github.com/your-username/chatto",
  },
  {
    title: "Shopkart",
    icon: <FaShoppingCart />, 
    desc: "React-based cart system with Context API and product filters.",
    github: "https://github.com/your-username/shopkart",
  },
  {
    title: "Yard Management System (YMS V2)",
    icon: <SiReact />, 
    desc: "Warehouse logistics dashboard with tracking, analytics & dispatch control.",
    github: "https://github.com/your-username/yms-v2",
  },
  {
    title: "BuyIt",
    icon: <FaShoppingCart />, 
    desc: "MERN-based e-commerce site with cart, product pages & payment gateway.",
    live: "https://buyit.yourdomain.com",
    github: "https://github.com/your-username/buyit",
  },
  {
    title: "Skillbridge",
    icon: <FaRobot />, 
    desc: "A professional platform to connect developers with opportunities.",
    github: "https://github.com/your-username/skillbridge",
  },
  {
    title: "Talk",
    icon: <FaComments />, 
    desc: "Full-duplex video & voice chat app using WebRTC with signaling server.",
    github: "https://github.com/your-username/talk",
  },
  {
    title: "WCTM Native App",
    icon: <SiReact />, 
    desc: "React Native app for campus event updates, news, and attendance tracking.",
    github: "https://github.com/your-username/wctm-native",
  },
  {
    title: "CRUD App (MERN)",
    icon: <SiReact />, 
    desc: "User management with create-read-update-delete features and auth.",
    github: "https://github.com/your-username/crud-mern",
  },
  {
    title: "Screen Capture Service",
    icon: <TbCapture />, 
    desc: "A tool to capture, annotate and download browser screens.",
    github: "https://github.com/your-username/screencapture",
  },
  {
    title: "YouTube PiP Extension",
    icon: <SiYoutube />, 
    desc: "Chrome extension to watch YouTube in picture-in-picture mode.",
    github: "https://github.com/your-username/youtube-pip",
  },
  {
    title: "Discord Bot",
    icon: <SiDiscord />, 
    desc: "A Discord bot with moderation, music & utility commands.",
    github: "https://github.com/your-username/discord-bot",
  },
  {
    title: "Telegram Bot",
    icon: <SiTelegram />, 
    desc: "Automates responses and commands in Telegram chats.",
    github: "https://github.com/your-username/telegram-bot",
  },
  {
    title: "Ping Pong Game",
    icon: <FaGamepad />, 
    desc: "Browser-based ping pong game with keyboard controls and scoring.",
    github: "https://github.com/your-username/pingpong",
  },
  {
    title: "Music Player (Static)",
    icon: <FaMusic />, 
    desc: "Frontend UI music player with modern design and theme toggler.",
    github: "https://github.com/your-username/music-player-static",
  },
  {
    title: "Static E-commerce",
    icon: <PiShoppingBagFill />, 
    desc: "Catalog UI for static product listing without backend functionality.",
    github: "https://github.com/your-username/static-ecommerce",
  },
  {
    title: "Calculator",
    icon: <FaCalculator />, 
    desc: "Responsive calculator with clear display and theme toggle.",
    github: "https://github.com/your-username/calculator",
  },
];

const ProjectsExperience = () => (
  <section
    id="projectexperience"
    className="scroll-mt-24 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-24 px-6 md:px-16 lg:px-32"
  >
    <div className="max-w-6xl mx-auto">
    <div className="text-center mb-14 animate-fade-in-up">
    <p className="text-sm text-gray-400 uppercase tracking-widest mb-2">
      My Work
    </p>
    <h2 className="text-3xl sm:text-4xl font-semibold text-white">
      <span className="text-blue-400">Projects</span>{" "}
      <span className="text-purple-400">& Experience</span>
    </h2>
    <div className="mt-2 w-10 h-0.5 bg-white/30 mx-auto rounded-full" />
  </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 animate-fade-in-up">
        {projects.map((project, i) => (
          <div
  key={i}
  className="bg-white/5 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-white/10 hover:border-blue-500 transition-all duration-300 hover:scale-[1.02] group"
>
  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-500/20 text-blue-400 text-2xl mb-5">
    {project.icon}
  </div>

  <h3 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors duration-200 mb-2">
    {project.title}
  </h3>

  <p className="text-gray-300 text-sm leading-relaxed mb-4">
    {project.desc}
  </p>

  <div className="flex gap-4 text-sm font-medium">
    {project.live && (
      <a
        href={project.live}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-400 hover:text-blue-200 transition-colors"
      >
        🔗 Live
      </a>
    )}
    <a
      href={project.github}
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-400 hover:text-gray-200 transition-colors"
    >
      🧠 GitHub
    </a>
  </div>
</div>

        ))}
      </div>
    </div>
  </section>
);

export default ProjectsExperience;