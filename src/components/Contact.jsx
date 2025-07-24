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
      className="py-24 bg-gradient-to-br from-[#0F2648] via-[#09213F] to-[#050D1E] text-white px-4 sm:px-8 md:px-16 lg:px-32"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-3xl mx-auto text-center"
      >
        {/* Section Title */}
        <motion.div variants={fadeInUp} custom={0} className="mb-10">
          <p className="text-sm text-gray-400 uppercase tracking-widest mb-2">
            Get in Touch
          </p>
          <h2 className="text-3xl sm:text-4xl font-semibold text-white">
            <span className="text-blue-400">Contact</span> Me
          </h2>
          <div className="mt-2 w-10 h-0.5 bg-white/30 mx-auto rounded-full" />
        </motion.div>

        {/* Email */}
        <motion.div
          variants={fadeInUp}
          custom={1}
          className="flex flex-col sm:flex-row items-center justify-between bg-white/5 border border-white/10 rounded-xl px-4 py-5 backdrop-blur-md shadow-md w-full max-w-md mx-auto mb-6 space-y-3 sm:space-y-0 sm:space-x-4"
        >
          <a
            href={`mailto:${email}`}
            className="flex items-center text-base text-blue-300 hover:underline break-all"
          >
            <FaEnvelope className="text-blue-400 text-xl mr-2" />
            {email}
          </a>
          <button
            onClick={() => copyToClipboard(email)}
            className="text-gray-400 hover:text-blue-400 text-lg"
          >
            <FaCopy />
          </button>
        </motion.div>

        {/* Phone */}
        <motion.div
          variants={fadeInUp}
          custom={2}
          className="flex flex-col sm:flex-row items-center justify-between bg-white/5 border border-white/10 rounded-xl px-4 py-5 backdrop-blur-md shadow-md w-full max-w-md mx-auto mb-10 space-y-3 sm:space-y-0 sm:space-x-4"
        >
          <div className="flex items-center text-base">
            <FaPhone className="text-green-400 text-xl mr-2" />
            <span>{phone}</span>
          </div>
          <button
            onClick={() => copyToClipboard(phone)}
            className="text-gray-400 hover:text-green-400 text-lg"
          >
            <FaCopy />
          </button>
        </motion.div>

        {/* Social Links */}
        <motion.div
          variants={fadeInUp}
          custom={3}
          className="flex justify-center flex-wrap gap-6"
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
