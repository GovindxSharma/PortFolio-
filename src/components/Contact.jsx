import React from "react";
import {
  FaEnvelope,
  FaPhone,
  FaCopy,
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaTelegram,
} from "react-icons/fa";
import { motion } from "framer-motion";

const email = "govindsharma2839@gmail.com";
const phone = "9712935176";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6 },
  }),
};

const Contact = () => {
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    alert(`Copied: ${text}`);
  };

  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-br from-[#0F2648] via-[#09213F] to-[#050D1E] text-white px-6 md:px-16 lg:px-32"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-3xl mx-auto text-center"
      >
        <motion.h2
          variants={fadeInUp}
          custom={0}
          className="text-3xl sm:text-4xl font-semibold text-white mb-14 tracking-wide"
        >
          Contact Me
        </motion.h2>

        {/* Email */}
        <motion.div
          variants={fadeInUp}
          custom={1}
          className="flex items-center justify-center bg-white/5 border border-white/10 rounded-xl p-5 backdrop-blur-md shadow-md w-full sm:w-96 mx-auto mb-6"
        >
          <a
            href={`mailto:${email}`}
            className="flex items-center text-lg text-blue-300 hover:underline"
          >
            <FaEnvelope className="text-blue-400 text-2xl mr-3" />
            {email}
          </a>
          <button
            onClick={() => copyToClipboard(email)}
            className="ml-3 text-gray-400 hover:text-blue-400"
          >
            <FaCopy />
          </button>
        </motion.div>

        {/* Phone */}
        <motion.div
          variants={fadeInUp}
          custom={2}
          className="flex items-center justify-center bg-white/5 border border-white/10 rounded-xl p-5 backdrop-blur-md shadow-md w-full sm:w-96 mx-auto mb-10"
        >
          <FaPhone className="text-green-400 text-2xl mr-3" />
          <span className="text-lg">{phone}</span>
          <button
            onClick={() => copyToClipboard(phone)}
            className="ml-3 text-gray-400 hover:text-green-400"
          >
            <FaCopy />
          </button>
        </motion.div>

        {/* Social Links */}
        <motion.div
          variants={fadeInUp}
          custom={3}
          className="flex justify-center space-x-6"
        >
          <a
            href="https://github.com/GovindxSharma"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white text-3xl transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/govind-sharmax30"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-white text-3xl transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://wa.me/9712935176"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-400 hover:text-white text-3xl transition"
          >
            <FaWhatsapp />
          </a>
          <a
            href="https://t.me/9712935176"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-white text-3xl transition"
          >
            <FaTelegram />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;
