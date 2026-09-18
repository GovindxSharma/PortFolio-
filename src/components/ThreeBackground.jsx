import React from "react";
import { useTheme } from "../context/ThemeContext";

/**
 * Cinematic Solo Leveling Void Atmosphere
 * Deep cosmic void with rich violet, electric cyan, and indigo mana nebulae.
 */
export default function ThreeBackground() {
  const { darkMode, isRedGate } = useTheme();

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden transition-colors duration-700">
      {/* Deep Void Base Background */}
      <div className="absolute inset-0 bg-[#06070c] dark:bg-[#040509]" />

      {/* Luminous Mana Glowing Nebulae (Rich Cinematic Depth) */}
      {isRedGate ? (
        <>
          <div className="absolute -top-[15%] left-[10%] w-[65vw] h-[65vw] max-w-[800px] max-h-[800px] rounded-full bg-red-600/20 blur-[160px] animate-pulse" style={{ animationDuration: "6s" }} />
          <div className="absolute -bottom-[15%] right-[5%] w-[60vw] h-[60vw] max-w-[750px] max-h-[750px] rounded-full bg-rose-600/18 blur-[180px]" />
          <div className="absolute top-[40%] right-[20%] w-[45vw] h-[45vw] max-w-[550px] max-h-[550px] rounded-full bg-amber-600/12 blur-[150px]" />
        </>
      ) : (
        <>
          {/* Cyan Mana Flare (Top Left) */}
          <div className="absolute -top-[15%] -left-[10%] w-[65vw] h-[65vw] max-w-[850px] max-h-[850px] rounded-full bg-cyan-500/15 dark:bg-cyan-500/20 blur-[180px]" />

          {/* Shadow Monarch Violet Domain (Bottom Right) */}
          <div className="absolute -bottom-[15%] -right-[10%] w-[70vw] h-[70vw] max-w-[900px] max-h-[900px] rounded-full bg-violet-600/20 dark:bg-purple-600/25 blur-[200px]" />

          {/* Deep Royal Indigo Central Core */}
          <div className="absolute top-[35%] left-[25%] w-[50vw] h-[50vw] max-w-[650px] max-h-[650px] rounded-full bg-blue-600/12 dark:bg-indigo-600/16 blur-[170px]" />

          {/* Electric Blue Monarch Resonance Pulse */}
          <div className="absolute top-[70%] left-[10%] w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] rounded-full bg-cyan-400/10 blur-[160px]" />
        </>
      )}

      {/* Cyber Hunter Rune Grid with Soft Radial Vignette */}
      <div
        className="absolute inset-0 opacity-[0.22] dark:opacity-[0.35]"
        style={{
          backgroundImage: "radial-gradient(rgba(0, 240, 255, 0.25) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          maskImage: "radial-gradient(circle at center, black 40%, transparent 95%)",
          WebkitMaskImage: "radial-gradient(circle at center, black 40%, transparent 95%)",
        }}
      />

      {/* Ambient Vignette Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#040509]/60 via-transparent to-[#040509]/80 pointer-events-none" />
    </div>
  );
}
