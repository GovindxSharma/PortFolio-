import React from "react";
import { useTheme } from "../context/ThemeContext";

/**
 * Clean & Simple Ambient Background
 * Replaces heavy, spinning 3D particle animations with a calm, elegant,
 * and distraction-free ambient backdrop that is easy on the eyes.
 */
export default function ThreeBackground() {
  const { darkMode, isRedGate } = useTheme();

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden transition-colors duration-500">
      {/* Calm Ambient Color Glows (Stationary, Non-Dizzying) */}
      {isRedGate ? (
        <>
          <div className="absolute top-[-10%] left-[15%] w-[55vw] h-[55vw] max-w-[650px] max-h-[650px] rounded-full bg-red-600/12 blur-[140px]" />
          <div className="absolute bottom-[-10%] right-[10%] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] rounded-full bg-orange-600/10 blur-[150px]" />
        </>
      ) : darkMode ? (
        <>
          <div className="absolute top-[-15%] left-[10%] w-[55vw] h-[55vw] max-w-[700px] max-h-[700px] rounded-full bg-cyan-500/8 blur-[160px]" />
          <div className="absolute bottom-[-15%] right-[5%] w-[55vw] h-[55vw] max-w-[650px] max-h-[650px] rounded-full bg-violet-600/8 blur-[160px]" />
          <div className="absolute top-[45%] right-[25%] w-[35vw] h-[35vw] max-w-[450px] max-h-[450px] rounded-full bg-blue-600/6 blur-[140px]" />
        </>
      ) : (
        <>
          <div className="absolute top-[-15%] left-[15%] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] rounded-full bg-sky-400/15 blur-[140px]" />
          <div className="absolute bottom-[-10%] right-[10%] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] rounded-full bg-indigo-400/12 blur-[140px]" />
        </>
      )}

      {/* Subtle, Static Plain & Simple Cyber Dot Grid (Zero Motion, Zero Eye Strain) */}
      <div
        className={`absolute inset-0 opacity-40 transition-opacity duration-500 ${
          darkMode
            ? "bg-[radial-gradient(rgba(255,255,255,0.08)_1px,transparent_1px)]"
            : "bg-[radial-gradient(rgba(0,0,0,0.06)_1px,transparent_1px)]"
        }`}
        style={{ backgroundSize: "28px 28px" }}
      />
    </div>
  );
}
