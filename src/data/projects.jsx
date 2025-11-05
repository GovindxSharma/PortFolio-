import React from "react";
import {
  FaCalculator,
  FaComments,
  FaShoppingCart,
  FaGamepad,
  FaMusic,
  FaRobot,
  FaGlobe,
  FaGithub,
} from "react-icons/fa";
import {
  SiDiscord,
  SiTelegram,
  SiReact,
  SiYoutube,
} from "react-icons/si";
import { TbCapture } from "react-icons/tb";

const projects = [
  // 🌟 Featured Projects
  {
    title: "Aerion Medtech",
    icon: <FaGlobe />,
    desc: "Corporate site for a MedTech startup featuring responsive UI, polished UX, and Formspree integration.",
    live: "https://aerionmedtech.com",
    highlight: true,
  },
  {
    title: "SK Foodz",
    icon: <FaGlobe />,
    desc: "Modern product-based site for a healthy food brand with category filtering and clean design.",
    live: "https://skfoodz.onrender.com",
    highlight: true,
  },
  {
    title: "Bunty Saloon",
    icon: <FaGlobe />,
    desc: "Professional landing page for a grooming salon featuring service sections, testimonials, and booking form.",
    live: "https://buntysaloon.onrender.com",
    highlight: true,
  },

  // ⚙️ Full-Stack & Web Apps
  {
    title: "Shopshere",
    icon: <FaShoppingCart />,
    desc: "Full-stack commerce app with Razorpay integration, admin dashboard, and order management.",
    live: "https://shopsheretheshoppingzone.onrender.com/",
    github: "https://github.com/GovindxSharma/ShopShereF",
  },
  {
    title: "Chat-to-talk",
    icon: <FaComments />,
    desc: "Real-time chat app built with Socket.io supporting private rooms and group messaging.",
    live: "https://chat-to-talk.onrender.com",
    github: "https://github.com/GovindxSharma/Chatt",
  },
  {
    title: "Shopkart",
    icon: <FaShoppingCart />,
    desc: "React-based e-commerce cart system using Context API and category-based filters.",
    live: "https://shopkart-bx9j.onrender.com",
    github: "https://github.com/GovindxSharma/Shopkart",
  },
  {
    title: "Yard Management System (YMS V2)",
    icon: <SiReact />,
    desc: "Warehouse logistics dashboard for tracking shipments, analytics, and dispatch control.",
    github: "https://github.com/GovindxSharma/YMs-v2",
  },
  {
    title: "BuyIt",
    icon: <FaShoppingCart />,
    desc: "Frontend catalog UI for static product listing and basic interactions.",
    live: "https://buy-it-ocop.onrender.com",
    github: "https://github.com/GovindxSharma/Buy-It",
  },
  {
    title: "Skillbridge",
    icon: <FaRobot />,
    desc: "AI-driven professional platform connecting developers with global opportunities.",
    live: "Coming Soon",
    github: "https://github.com/GovindxSharma/SkillBridge",
  },
  {
    title: "WCTM Native App",
    icon: <SiReact />,
    desc: "React Native app for college event updates, announcements, and attendance tracking.",
    live: "https://drive.google.com/file/d/1ifGvpLulKBbvEOwR1BD-uVq03nG4z1mI/view",
    github: "https://github.com/GovindxSharma/wctm-app",
  },
  {
    title: "CRUD App (MERN)",
    icon: <SiReact />,
    desc: "Basic MERN CRUD application with Create, Read, Update, and Delete operations.",
    live: "https://crud-xy5k.onrender.com",
    github: "https://github.com/GovindxSharma/CRUD",
  },

  // 🧠 Utilities & Tools
  {
    title: "Screen Capture Service",
    icon: <TbCapture />,
    desc: "Browser-based tool for capturing screenshots for tracking or visual reporting.",
    github: "https://github.com/GovindxSharma/ScreenCapture",
  },
  {
    title: "YouTube PiP Extension",
    icon: <SiYoutube />,
    desc: "Chrome extension allowing YouTube playback in picture-in-picture mode.",
    github: "https://github.com/GovindxSharma/YouTube-PiP",
  },
  {
    title: "Discord Bot",
    icon: <SiDiscord />,
    desc: "Feature-rich Discord bot offering moderation, music, and utility commands.",
    github: "https://github.com/GovindxSharma/DiscordAssistant",
  },
    {
    title: "Telegram Bot",
    icon: <SiTelegram />,
    desc: "Automates Telegram responses with command triggers and custom workflows.",
    github: "https://github.com/GovindxSharma/TeleBot",
  },

  // 🎮 Fun Projects
  {
    title: "Ping Pong Game",
    icon: <FaGamepad />,
    desc: "Interactive browser-based ping pong game with scoring and smooth controls.",
    live: "https://pingpong-o8ct.onrender.com",
    github: "https://github.com/GovindxSharma/PingPong",
  },
  {
    title: "Music Player (Static)",
    icon: <FaMusic />,
    desc: "Frontend-only music player UI with light/dark mode and modern interface.",
    live: "https://music-player-pa29.onrender.com",
    github: "https://github.com/GovindxSharma/Music-Player",
  },
  {
    title: "Calculator",
    icon: <FaCalculator />,
    desc: "Responsive calculator app with clean design, history log, and theme toggle.",
    live: "https://calculator-9f5l.onrender.com",
    github: "https://github.com/GovindxSharma/Calculator",
  },
];

export default projects;
