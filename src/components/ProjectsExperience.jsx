import React from "react";
import {
  FaCalculator,
  FaComments,
  FaShoppingCart,
  FaGamepad,
  FaMusic,
  FaRobot,
  FaGithub,
} from "react-icons/fa";
import {
  SiDiscord,
  SiTelegram,
  SiReact,
  SiYoutube,
} from "react-icons/si";
import { TbCapture } from "react-icons/tb";
import { PiShoppingBagFill } from "react-icons/pi";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Shopshere",
    icon: <FaShoppingCart />,
    desc: "Full-stack commerce app with Razorpay, admin dashboard, order mgmt.",
    live: "https://shopsheretheshoppingzone.onrender.com/",
    github: "https://github.com/GovindxSharma/ShopShereF",
  },
  {
    title: "Chat-to-talk",
    icon: <FaComments />,
    desc: "Real-time chat app using Socket.io with group support and private rooms.",
    live: "https://chat-to-talk.onrender.com",
    github: "https://github.com/GovindxSharma/Chatt",
  },
  {
    title: "Shopkart",
    icon: <FaShoppingCart />,
    desc: "React-based cart system with Context API and product filters.",
    live: "https://shopkart-bx9j.onrender.com",
    github: "https://github.com/GovindxSharma/Shopkart",
  },
  {
    title: "Yard Management System (YMS V2)",
    icon: <SiReact />,
    desc: "Warehouse logistics dashboard with tracking, analytics & dispatch control.",
    github: "https://github.com/GovindxSharma/YMs-v2",
  },
  {
    title: "BuyIt",
    icon: <FaShoppingCart />,
    desc: "Catalog UI for static product listing without backend functionality.",
    live: "https://buy-it-ocop.onrender.com",
    github: "https://github.com/GovindxSharma/Buy-It",
  },
  {
    title: "Skillbridge",
    icon: <FaRobot />,
    desc: "A professional platform to connect developers with opportunities.",
    live: "Coming Soon",
    github: "https://github.com/GovindxSharma/SkillBridge",
  },
  {
    title: "WCTM Native App",
    icon: <SiReact />,
    desc: "React Native app for campus event updates, news, and attendance tracking.",
    live: "https://drive.google.com/file/d/1ifGvpLulKBbvEOwR1BD-uVq03nG4z1mI/view",
    github: "https://github.com/GovindxSharma/wctm-app",
  },
  {
    title: "CRUD App (MERN)",
    icon: <SiReact />,
    desc: "Basic create-read-update-delete features.",
    live: "https://crud-xy5k.onrender.com",
    github: "https://github.com/GovindxSharma/CRUD",
  },
  {
    title: "Screen Capture Service",
    icon: <TbCapture />,
    desc: "A tool to capture screenshots for tracking activity.",
    github: "https://github.com/GovindxSharma/ScreenCapture",
  },
  {
    title: "YouTube PiP Extension",
    icon: <SiYoutube />,
    desc: "Chrome extension to watch YouTube in picture-in-picture mode.",
    github: "https://github.com/GovindxSharma/YouTube-PiP",
  },
  {
    title: "Discord Bot",
    icon: <SiDiscord />,
    desc: "A Discord bot with moderation, music & utility commands.",
    github: "https://github.com/GovindxSharma/DiscordAssistant",
  },
  {
    title: "Telegram Bot",
    icon: <SiTelegram />,
    desc: "Automates responses and commands in Telegram chats.",
    github: "https://github.com/GovindxSharma/TeleBot",
  },
  {
    title: "Ping Pong Game",
    icon: <FaGamepad />,
    desc: "Browser-based ping pong game with keyboard controls and scoring.",
    live: "https://pingpong-o8ct.onrender.com",
    github: "https://github.com/GovindxSharma/PingPong",
  },
  {
    title: "Music Player (Static)",
    icon: <FaMusic />,
    desc: "Frontend UI music player with modern design and theme toggler.",
    live: "https://music-player-pa29.onrender.com",
    github: "https://github.com/GovindxSharma/Music-Player",
  },
  {
    title: "Calculator",
    icon: <FaCalculator />,
    desc: "Responsive calculator with clear display and theme toggle.",
    live: "https://calculator-9f5l.onrender.com",
    github: "https://github.com/GovindxSharma/Calculator",
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
  }),
};

const ProjectsExperience = () => (
  <section
    id="projectexperience"
    className="scroll-mt-24 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-24 px-6 md:px-16 lg:px-32"
  >
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-14">
        <p className="text-sm text-gray-400 uppercase tracking-widest mb-2">My Work</p>
        <h2 className="text-3xl sm:text-4xl font-semibold text-white">
          <span className="text-blue-400">Projects</span>{" "}
          <span className="text-purple-400">& Experience</span>
        </h2>
        <div className="mt-2 w-10 h-0.5 bg-white/30 mx-auto rounded-full" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, i) => (
          <Tilt
            key={i}
            tiltMaxAngleX={25}
            tiltMaxAngleY={25}
            scale={1.05}
            transitionSpeed={250}
            glareEnable={false}
            className="rounded-2xl"
          >
            <motion.div
              className="bg-white/5 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-white/10 hover:border-blue-500 transition-all duration-300 hover:scale-[1.015] group h-full flex flex-col justify-between"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
            >
              <div>
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-500/20 text-blue-400 text-2xl mb-5">
                  {project.icon}
                </div>
                <h3 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors duration-200 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-6">
                  {project.desc}
                </p>
              </div>
              <div className="flex justify-between items-center text-sm font-medium mt-auto">
                {project.live && project.live !== "Coming Soon" ? (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-200 transition-colors"
                  >
                    🔗 Live
                  </a>
                ) : (
                  <span />
                )}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-gray-400 hover:text-gray-200 transition-colors"
                >
                  <FaGithub className="text-base" />
                  GitHub
                </a>
              </div>
            </motion.div>
          </Tilt>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsExperience;
