import React, { useState } from "react";
import {
  FaEnvelope,
  FaPhone,
  FaCopy,
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaTelegram,
  FaCheck,
  FaPaperPlane,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, MessageSquare, Send, CheckCircle2, Shield, FileText, ArrowUpRight } from "lucide-react";
import { soundFX } from "../utils/soundEffects";

const email = "govindsharma2839@gmail.com";
const phone = "9712935176";

export default function Contact() {
  const [toast, setToast] = useState("");
  const [senderName, setSenderName] = useState("");
  const [senderEmail, setSenderEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sentSuccess, setSentSuccess] = useState(false);

  const copyToClipboard = (text, label) => {
    soundFX.playClick();
    navigator.clipboard.writeText(text);
    setToast(`${label} copied to clipboard!`);
    setTimeout(() => setToast(""), 2000);
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    soundFX.playLevelUp();
    const subject = encodeURIComponent(`Guild Transmission from ${senderName || "Recruiter / Collaborator"}`);
    const body = encodeURIComponent(
      `Hello Govind,\n\n${message}\n\nSender Contact: ${senderEmail || "N/A"}\nName: ${senderName || "Anonymous"}`
    );
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
    setSentSuccess(true);
    setTimeout(() => {
      setSentSuccess(false);
      setSenderName("");
      setSenderEmail("");
      setMessage("");
    }, 4000);
  };

  return (
    <section
      id="contact"
      className="relative flex items-center justify-center px-1 sm:px-4 py-3 sm:py-6 overflow-hidden text-slate-900 dark:text-white"
    >
      {/* Background Mana Glowing Nebulae */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-cyan-400/10 blur-[180px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[500px] h-[500px] bg-violet-500/10 blur-[180px] rounded-full pointer-events-none" />

      {/* Floating Copy Toast Alert */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.9 }}
            className="fixed bottom-24 left-1/2 -translate-x-1/2 z-50 px-5 py-2.5 rounded-full text-xs font-mono font-bold
            bg-[#101218] border border-cyan-400 text-cyan-300 shadow-[0_0_25px_rgba(6,182,212,0.4)] backdrop-blur-xl flex items-center gap-2"
          >
            <CheckCircle2 size={14} className="text-cyan-400 animate-pulse" />
            <span>{toast}</span>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-6xl w-full grid lg:grid-cols-12 gap-8 lg:gap-14 items-center relative">

        {/* LEFT INFORMATION (5 cols) */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 text-center lg:text-left"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-white/70 dark:bg-[#12141c] px-3.5 py-1 text-xs font-mono text-cyan-400 font-bold mb-3">
            <MessageSquare size={13} className="text-cyan-400" />
            <span>[ SUMMON PORTAL // TRANSMISSION ]</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black font-['Rajdhani',sans-serif] leading-[1.1] text-slate-900 dark:text-[#f8fafc]">
            Summon The{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 bg-clip-text text-transparent">
              Shadow Monarch
            </span>
          </h2>

          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-mono">
            Looking for an S-Rank Full-Stack Architect to lead software engineering, build production web apps, or conquer ambitious engineering quests? Transmit your signal below.
          </p>

          {/* Hunter Availability Beacon */}
          <div className="mt-5 inline-flex items-center justify-center lg:justify-start gap-3 p-3 rounded-2xl bg-white/80 dark:bg-[#12141c] border border-slate-200 dark:border-white/10 backdrop-blur-md">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative h-3 w-3 rounded-full bg-emerald-500" />
            </span>
            <span className="text-xs font-mono font-bold text-slate-800 dark:text-cyan-200">
              Active For Opportunities & High-Level Quests
            </span>
          </div>

          {/* Quick Copy Contact Cards */}
          <div className="mt-6 space-y-2.5">
            {/* Email Card */}
            <div
              onClick={() => copyToClipboard(email, "Email")}
              onMouseEnter={() => soundFX.playHover()}
              className="flex items-center justify-between p-3.5 rounded-2xl bg-white/80 dark:bg-[#101218] border border-slate-200 dark:border-white/10 hover:border-cyan-400 dark:hover:shadow-[0_0_20px_rgba(6,182,212,0.2)] transition cursor-pointer group"
            >
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 group-hover:scale-110 transition">
                  <FaEnvelope size={14} />
                </div>
                <div className="text-left">
                  <span className="text-[10px] font-mono text-slate-400 uppercase block">DIRECT EMAIL</span>
                  <span className="text-xs sm:text-sm font-mono font-bold text-slate-900 dark:text-white">
                    {email}
                  </span>
                </div>
              </div>
              <FaCopy className="text-slate-400 group-hover:text-cyan-400 transition" />
            </div>

            {/* Phone Card */}
            <div
              onClick={() => copyToClipboard(phone, "Phone")}
              onMouseEnter={() => soundFX.playHover()}
              className="flex items-center justify-between p-3.5 rounded-2xl bg-white/80 dark:bg-[#101218] border border-slate-200 dark:border-white/10 hover:border-cyan-400 dark:hover:shadow-[0_0_20px_rgba(6,182,212,0.2)] transition cursor-pointer group"
            >
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20 group-hover:scale-110 transition">
                  <FaPhone size={14} />
                </div>
                <div className="text-left">
                  <span className="text-[10px] font-mono text-slate-400 uppercase block">PHONE / WHATSAPP</span>
                  <span className="text-xs sm:text-sm font-mono font-bold text-slate-900 dark:text-white">
                    +91 {phone}
                  </span>
                </div>
              </div>
              <FaCopy className="text-slate-400 group-hover:text-cyan-400 transition" />
            </div>
          </div>

          {/* Social Crystal Orbs */}
          <div className="grid grid-cols-4 gap-2.5 mt-5">
            {[
              { name: "GitHub", icon: <FaGithub size={17} />, link: "https://github.com/GovindxSharma" },
              { name: "LinkedIn", icon: <FaLinkedin size={17} />, link: "https://www.linkedin.com/in/govind-sharmax30/" },
              { name: "WhatsApp", icon: <FaWhatsapp size={17} />, link: "https://wa.me/9712935176" },
              { name: "Telegram", icon: <FaTelegram size={17} />, link: "https://t.me/9712935176" },
            ].map((s, i) => (
              <motion.a
                key={i}
                href={s.link}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundFX.playClick()}
                onMouseEnter={() => soundFX.playHover()}
                whileHover={{ scale: 1.08, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="
                  h-12 w-full flex items-center justify-center rounded-2xl
                  bg-white/80 dark:bg-[#101218]
                  border border-slate-200 dark:border-white/10
                  text-slate-700 dark:text-cyan-300
                  hover:border-cyan-400 hover:text-cyan-400
                  transition-all duration-200
                "
                title={s.name}
              >
                {s.icon}
              </motion.a>
            ))}
          </div>

          {/* Official Dossier / Resume Link */}
          <div className="mt-4">
            <a
              href="https://drive.google.com/file/d/1-DH9zTJ3Ft05GeR1M6ceR1umdA_1H0zQ/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => soundFX.playClick()}
              onMouseEnter={() => soundFX.playHover()}
              className="flex items-center justify-between p-3.5 rounded-2xl bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-violet-600/10 border border-cyan-500/30 hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(6,182,212,0.25)] transition cursor-pointer group"
            >
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 group-hover:scale-110 transition">
                  <FileText size={14} />
                </div>
                <div className="text-left">
                  <span className="text-[10px] font-mono text-cyan-500 dark:text-cyan-400 uppercase font-bold block">
                    OFFICIAL DOSSIER
                  </span>
                  <span className="text-xs sm:text-sm font-mono font-bold text-slate-900 dark:text-white">
                    View Govind's Resume (PDF)
                  </span>
                </div>
              </div>
              <ArrowUpRight className="text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" size={18} />
            </a>
          </div>

        </motion.div>

        {/* RIGHT TRANSMISSION FORM (7 cols) */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7"
        >
          <div className="relative rounded-3xl border border-slate-200 dark:border-white/10 bg-white/90 dark:bg-[#101218]/95 p-5 sm:p-8 shadow-2xl backdrop-blur-2xl overflow-hidden">
            {/* Top Glowing Edge */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />

            <div className="flex items-center justify-between border-b border-slate-200 dark:border-white/10 pb-3 mb-5 font-mono text-xs text-cyan-400">
              <span className="flex items-center gap-2">
                <Send size={13} /> GUILD TRANSMISSION FORM
              </span>
              <span className="text-[10px] text-slate-400">ENCRYPTION: ACTIVE</span>
            </div>

            {sentSuccess ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 text-center space-y-3"
              >
                <div className="h-16 w-16 mx-auto rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500/40 shadow-[0_0_20px_rgba(34,197,94,0.3)]">
                  <CheckCircle2 size={32} />
                </div>
                <h4 className="text-xl font-bold font-['Rajdhani',sans-serif] text-slate-900 dark:text-white">
                  Transmission Dispatched!
                </h4>
                <p className="text-xs font-mono text-slate-500 dark:text-slate-400 max-w-sm mx-auto">
                  Your message has opened in your email client to reach Govind Sharma directly.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSendMessage} className="space-y-3.5 font-mono text-xs">
                <div>
                  <label className="block text-slate-700 dark:text-slate-300 font-bold mb-1.5 uppercase text-[11px]">
                    Your Name / Guild:
                  </label>
                  <input
                    type="text"
                    required
                    value={senderName}
                    onChange={(e) => setSenderName(e.target.value)}
                    placeholder="e.g. Sung Jin-Woo / Tech Lead"
                    className="w-full rounded-xl border border-slate-300 dark:border-white/10 bg-slate-50 dark:bg-[#0c0d12] px-4 py-3 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-600 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition"
                  />
                </div>

                <div>
                  <label className="block text-slate-700 dark:text-slate-300 font-bold mb-1.5 uppercase text-[11px]">
                    Your Email Address:
                  </label>
                  <input
                    type="email"
                    required
                    value={senderEmail}
                    onChange={(e) => setSenderEmail(e.target.value)}
                    placeholder="e.g. hunter@association.org"
                    className="w-full rounded-xl border border-slate-300 dark:border-white/10 bg-slate-50 dark:bg-[#0c0d12] px-4 py-3 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-600 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition"
                  />
                </div>

                <div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 mb-1.5">
                    <label className="block text-slate-700 dark:text-slate-300 font-bold uppercase text-[11px]">
                      Quest Transmission Message:
                    </label>
                    <span className="text-[10px] text-slate-500 font-mono">
                      Click a template or write custom:
                    </span>
                  </div>

                  {/* 1-Click Preset Template Chips */}
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {[
                      {
                        label: "💼 Full-Time Role",
                        text: "Hi Govind, we reviewed your production platforms and 2,000+ LeetCode DSA background. We'd love to speak with you regarding a Software Engineer role at our organization.",
                      },
                      {
                        label: "⚡ Production Project",
                        text: "Hi Govind, we have an ambitious web platform project and would like your full-stack expertise to architect and build the system.",
                      },
                      {
                        label: "☕ Architecture Chat",
                        text: "Hi Govind, loved your database optimization and full-stack work. Would like to connect for an engineering chat!",
                      },
                    ].map((preset, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => {
                          soundFX.playClick();
                          setMessage(preset.text);
                        }}
                        onMouseEnter={() => soundFX.playHover()}
                        className="text-[10px] font-mono px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-[#141722] hover:bg-cyan-500/15 border border-slate-200 dark:border-white/10 hover:border-cyan-400 text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-300 transition"
                      >
                        {preset.label}
                      </button>
                    ))}
                  </div>

                  <textarea
                    rows={4}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Describe your project, hiring opportunity, or architectural inquiry..."
                    className="w-full rounded-xl border border-slate-300 dark:border-white/10 bg-slate-50 dark:bg-[#0c0d12] px-4 py-3 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-600 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition resize-none"
                  />
                </div>

                <button
                  type="submit"
                  onMouseEnter={() => soundFX.playHover()}
                  className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-violet-600 text-white font-mono font-bold text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.6)] hover:scale-[1.01] active:scale-[0.99] transition"
                >
                  <FaPaperPlane size={13} />
                  <span>Transmit Transmission To Govind</span>
                </button>
              </form>
            )}

          </div>
        </motion.div>

      </div>
    </section>
  );
}