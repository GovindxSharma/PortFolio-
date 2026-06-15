import React, { useState } from "react";
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

export default function Contact() {
  const [toast, setToast] = useState("");

  const copyToClipboard = (text, label) => {
    navigator.clipboard.writeText(text);
    setToast(`${label} copied`);
    setTimeout(() => setToast(""), 1200);
  };

  const card =
    "bg-white/60 dark:bg-white/5 border border-slate-200 dark:border-white/10 backdrop-blur-xl";

  const textPrimary =
    "text-slate-900 dark:text-white";

  const textMuted =
    "text-slate-600 dark:text-gray-400";

  return (
    <section id="contact" className="relative min-h-screen flex items-center justify-center px-6 py-24 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-[#050816] dark:via-[#050816] dark:to-[#02040a] text-black dark:text-white">

      {/* glow background */}
      <div className="absolute top-[-150px] left-[-150px] w-[500px] h-[500px] bg-cyan-400/20 dark:bg-cyan-500/20 blur-[160px] rounded-full" />
      <div className="absolute bottom-[-150px] right-[-150px] w-[500px] h-[500px] bg-violet-400/20 dark:bg-violet-500/20 blur-[160px] rounded-full" />

      {/* toast */}
      {toast && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed bottom-8 left-1/2 -translate-x-1/2 px-5 py-2 rounded-full text-sm
          bg-white/80 dark:bg-white/10 border border-slate-200 dark:border-white/10 backdrop-blur-xl"
        >
          {toast}
        </motion.div>
      )}

      <div className="max-w-5xl w-full grid md:grid-cols-2 gap-14 items-center">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className={`text-xs tracking-[0.3em] uppercase ${textMuted}`}>
            Contact Developer
          </p>

          <h2 className={`text-5xl md:text-6xl font-black leading-tight mt-3 ${textPrimary}`}>
            Let’s Build
            <span className="block bg-gradient-to-r from-cyan-500 to-violet-500 bg-clip-text text-transparent">
              Something Real
            </span>
          </h2>

          <p className={`mt-5 leading-relaxed ${textMuted}`}>
            Full-stack developer focused on scalable systems, clean architecture,
            and AI-powered applications.
          </p>

          {/* status */}
          <div className="mt-8 flex items-center gap-3">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute h-full w-full rounded-full bg-green-400 opacity-70"></span>
              <span className="relative h-3 w-3 rounded-full bg-green-500"></span>
            </span>
            <p className={`text-sm ${textMuted}`}>Available for opportunities</p>
          </div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className={`p-6 rounded-3xl ${card} shadow-2xl`}>

            {/* EMAIL */}
            <div
              onClick={() => copyToClipboard(email, "Email")}
              className="flex items-center justify-between p-4 rounded-2xl bg-white/40 dark:bg-white/5 hover:scale-[1.02] transition cursor-pointer mb-4"
            >
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-cyan-500" />
                <span className="text-sm">{email}</span>
              </div>
              <FaCopy className="opacity-60 hover:opacity-100" />
            </div>

            {/* PHONE */}
            <div
              onClick={() => copyToClipboard(phone, "Phone")}
              className="flex items-center justify-between p-4 rounded-2xl bg-white/40 dark:bg-white/5 hover:scale-[1.02] transition cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <FaPhone className="text-violet-500" />
                <span className="text-sm">{phone}</span>
              </div>
              <FaCopy className="opacity-60 hover:opacity-100" />
            </div>

            {/* SOCIALS */}
            <div className="grid grid-cols-4 gap-3 mt-8">

              {[
                { icon: <FaGithub />, link: "https://github.com/GovindxSharma" },
                { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/govind-sharmax30/" },
                { icon: <FaWhatsapp />, link: "https://wa.me/9712935176" },
                { icon: <FaTelegram />, link: "9712935176" },
              ].map((s, i) => (
                <motion.a
                  key={i}
                  href={s.link}
                  target="_blank"
                  whileHover={{ scale: 1.12 }}
                  className="
                    h-12 w-12 flex items-center justify-center rounded-xl
                    bg-white/40 dark:bg-white/5
                    border border-slate-200 dark:border-white/10
                    hover:border-cyan-400 transition
                  "
                >
                  {s.icon}
                </motion.a>
              ))}

            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}