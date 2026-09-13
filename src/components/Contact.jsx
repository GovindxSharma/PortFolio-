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
import { PROFILE } from "../data/profile";

const email = PROFILE.email;
const phone = PROFILE.phone;

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
      className="relative flex items-center justify-center px-1 sm:px-4 py-2 sm:py-3 overflow-hidden text-slate-900 dark:text-white"
    >
      {/* Background Mana Glowing Nebulae */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-cyan-400/10 blur-[180px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[500px] h-[500px] bg-violet-500/10 blur-[180px] rounded-full pointer-events-none" />

      {/* Floating Copy Toast Alert */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-20 left-1/2 -translate-x-1/2 z-50 px-4 py-2 rounded-full text-xs font-mono font-bold
            bg-[#101218] border border-cyan-400 text-cyan-300 shadow-[0_0_20px_rgba(6,182,212,0.4)] backdrop-blur-xl flex items-center gap-2"
          >
            <CheckCircle2 size={13} className="text-cyan-400 animate-pulse" />
            <span>{toast}</span>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-6xl w-full grid lg:grid-cols-12 gap-5 lg:gap-8 items-center relative">

        {/* LEFT INFORMATION (5 cols) */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-5 text-center lg:text-left"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-white/70 dark:bg-[#12141c] px-3 py-0.5 text-xs font-mono text-cyan-400 font-bold mb-1.5">
            <MessageSquare size={12} className="text-cyan-400" />
            <span>[ SUMMON PORTAL // TRANSMISSION ]</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black font-['Rajdhani',sans-serif] leading-tight text-slate-900 dark:text-[#f8fafc]">
            Summon The{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 bg-clip-text text-transparent">
              Shadow Monarch
            </span>
          </h2>

          <p className="mt-1 text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-mono">
            Looking for an S-Rank Full-Stack Architect to lead software engineering, build production web apps, or conquer ambitious quests? Transmit your signal below.
          </p>

          {/* Hunter Availability Beacon */}
          <div className="mt-2.5 inline-flex items-center justify-center lg:justify-start gap-2.5 p-2 rounded-xl bg-white/80 dark:bg-[#12141c] border border-slate-200 dark:border-white/10 backdrop-blur-md">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative h-2.5 w-2.5 rounded-full bg-emerald-500" />
            </span>
            <span className="text-[11px] font-mono font-bold text-slate-800 dark:text-cyan-200">
              Active For Opportunities & High-Level Quests
            </span>
          </div>

          {/* Quick Copy Contact Cards */}
          <div className="mt-3 space-y-1.5">
            {/* Email Card */}
            <div
              onClick={() => copyToClipboard(email, "Email")}
              onMouseEnter={() => soundFX.playHover()}
              className="flex items-center justify-between p-2.5 rounded-xl bg-white/80 dark:bg-[#101218] border border-slate-200 dark:border-white/10 hover:border-cyan-400 dark:hover:shadow-[0_0_15px_rgba(6,182,212,0.2)] transition cursor-pointer group"
            >
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 group-hover:scale-105 transition">
                  <FaEnvelope size={13} />
                </div>
                <div className="text-left">
                  <span className="text-[9px] font-mono text-slate-400 uppercase block">DIRECT EMAIL</span>
                  <span className="text-xs font-mono font-bold text-slate-900 dark:text-white">
                    {email}
                  </span>
                </div>
              </div>
              <FaCopy className="text-slate-400 group-hover:text-cyan-400 transition" size={12} />
            </div>

            {/* Phone Card */}
            <div
              onClick={() => copyToClipboard(phone, "Phone")}
              onMouseEnter={() => soundFX.playHover()}
              className="flex items-center justify-between p-2.5 rounded-xl bg-white/80 dark:bg-[#101218] border border-slate-200 dark:border-white/10 hover:border-cyan-400 dark:hover:shadow-[0_0_15px_rgba(6,182,212,0.2)] transition cursor-pointer group"
            >
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-lg bg-violet-500/10 text-violet-400 border border-violet-500/20 group-hover:scale-105 transition">
                  <FaPhone size={13} />
                </div>
                <div className="text-left">
                  <span className="text-[9px] font-mono text-slate-400 uppercase block">PHONE / WHATSAPP</span>
                  <span className="text-xs font-mono font-bold text-slate-900 dark:text-white">
                    +91 {phone}
                  </span>
                </div>
              </div>
              <FaCopy className="text-slate-400 group-hover:text-cyan-400 transition" size={12} />
            </div>
          </div>

          {/* Social Crystal Orbs */}
          <div className="grid grid-cols-4 gap-2 mt-2.5">
            {[
              { name: "GitHub", icon: <FaGithub size={15} />, link: PROFILE.socials.github },
              { name: "LinkedIn", icon: <FaLinkedin size={15} />, link: PROFILE.socials.linkedin },
              { name: "WhatsApp", icon: <FaWhatsapp size={15} />, link: PROFILE.socials.whatsapp },
              { name: "Telegram", icon: <FaTelegram size={15} />, link: PROFILE.socials.telegram },
            ].map((s, i) => (
              <motion.a
                key={i}
                href={s.link}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundFX.playClick()}
                onMouseEnter={() => soundFX.playHover()}
                whileHover={{ scale: 1.05, y: -1 }}
                whileTap={{ scale: 0.95 }}
                className="
                  h-9 w-full flex items-center justify-center rounded-xl
                  bg-white/80 dark:bg-[#101218]
                  border border-slate-200 dark:border-white/10
                  text-slate-700 dark:text-cyan-300
                  hover:border-cyan-400 hover:text-cyan-400
                  transition-all duration-150
                "
                title={s.name}
              >
                {s.icon}
              </motion.a>
            ))}
          </div>

          {/* Official Dossier / Resume Link */}
          <div className="mt-2.5">
            <a
              href={PROFILE.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => soundFX.playClick()}
              onMouseEnter={() => soundFX.playHover()}
              className="flex items-center justify-between p-2.5 rounded-xl bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-violet-600/10 border border-cyan-500/30 hover:border-cyan-400 hover:shadow-[0_0_15px_rgba(6,182,212,0.2)] transition cursor-pointer group"
            >
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-lg bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 group-hover:scale-105 transition">
                  <FileText size={13} />
                </div>
                <div className="text-left">
                  <span className="text-[9px] font-mono text-cyan-500 dark:text-cyan-400 uppercase font-bold block">
                    OFFICIAL DOSSIER
                  </span>
                  <span className="text-xs font-mono font-bold text-slate-900 dark:text-white">
                    View Govind's Resume (PDF)
                  </span>
                </div>
              </div>
              <ArrowUpRight className="text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" size={16} />
            </a>
          </div>

        </motion.div>

        {/* RIGHT TRANSMISSION FORM (7 cols) */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-7"
        >
          <div className="relative rounded-2xl border border-slate-200 dark:border-white/10 bg-white/90 dark:bg-[#101218]/95 p-4 sm:p-5 shadow-xl backdrop-blur-2xl overflow-hidden">
            {/* Top Glowing Edge */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />

            <div className="flex items-center justify-between border-b border-slate-200 dark:border-white/10 pb-2 mb-3 font-mono text-xs text-cyan-400">
              <span className="flex items-center gap-2">
                <Send size={12} /> GUILD TRANSMISSION FORM
              </span>
              <span className="text-[9px] text-slate-400">ENCRYPTION: ACTIVE</span>
            </div>

            {sentSuccess ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-8 text-center space-y-2.5"
              >
                <div className="h-12 w-12 mx-auto rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500/40 shadow-[0_0_15px_rgba(34,197,94,0.3)]">
                  <CheckCircle2 size={24} />
                </div>
                <h4 className="text-lg font-bold font-['Rajdhani',sans-serif] text-slate-900 dark:text-white">
                  Transmission Dispatched!
                </h4>
                <p className="text-xs font-mono text-slate-500 dark:text-slate-400 max-w-sm mx-auto">
                  Your message has opened in your email client to reach Govind Sharma directly.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSendMessage} className="space-y-2.5 font-mono text-xs">
                <div className="grid sm:grid-cols-2 gap-2.5">
                  <div>
                    <label className="block text-slate-700 dark:text-slate-300 font-bold mb-1 uppercase text-[10px]">
                      Your Name / Guild:
                    </label>
                    <input
                      type="text"
                      required
                      value={senderName}
                      onChange={(e) => setSenderName(e.target.value)}
                      placeholder="e.g. Sung Jin-Woo / Tech Lead"
                      className="w-full rounded-lg border border-slate-300 dark:border-white/10 bg-slate-50 dark:bg-[#0c0d12] px-3 py-2 text-xs text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-600 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-700 dark:text-slate-300 font-bold mb-1 uppercase text-[10px]">
                      Your Email Address:
                    </label>
                    <input
                      type="email"
                      required
                      value={senderEmail}
                      onChange={(e) => setSenderEmail(e.target.value)}
                      placeholder="e.g. hunter@association.org"
                      className="w-full rounded-lg border border-slate-300 dark:border-white/10 bg-slate-50 dark:bg-[#0c0d12] px-3 py-2 text-xs text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-600 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                    <label className="block text-slate-700 dark:text-slate-300 font-bold uppercase text-[10px]">
                      Quest Transmission Message:
                    </label>
                    <span className="text-[9px] text-slate-500 font-mono">
                      Quick template:
                    </span>
                  </div>

                  {/* 1-Click Preset Template Chips */}
                  <div className="flex flex-wrap gap-1 mb-1.5">
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
                        className="text-[9.5px] font-mono px-2 py-0.5 rounded-md bg-slate-100 dark:bg-[#141722] hover:bg-cyan-500/15 border border-slate-200 dark:border-white/10 hover:border-cyan-400 text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-300 transition"
                      >
                        {preset.label}
                      </button>
                    ))}
                  </div>

                  <textarea
                    rows={2.5}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Describe your project, hiring opportunity, or architectural inquiry..."
                    className="w-full rounded-lg border border-slate-300 dark:border-white/10 bg-slate-50 dark:bg-[#0c0d12] px-3 py-2 text-xs text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-600 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition resize-none"
                  />
                </div>

                <button
                  type="submit"
                  onMouseEnter={() => soundFX.playHover()}
                  className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-violet-600 text-white font-mono font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(6,182,212,0.25)] hover:shadow-[0_0_25px_rgba(6,182,212,0.5)] hover:scale-[1.01] active:scale-[0.99] transition"
                >
                  <FaPaperPlane size={12} />
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