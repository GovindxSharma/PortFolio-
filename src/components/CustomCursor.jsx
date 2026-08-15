import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isPointerDown, setIsPointerDown] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const { darkMode } = useTheme();

  useEffect(() => {
    // Only enable custom cursor on non-touch devices with fine pointer
    if (window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      // Check if hovering interactive element
      const target = e.target;
      const isInteractive =
        target.closest("a, button, input, textarea, select, [role='button'], .cursor-pointer");
      setIsHovered(!!isInteractive);
    };

    const onMouseDown = () => setIsPointerDown(true);
    const onMouseUp = () => setIsPointerDown(false);
    const onMouseLeave = () => setIsVisible(false);

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    document.addEventListener("mouseleave", onMouseLeave);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("mouseleave", onMouseLeave);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[100] overflow-hidden">
      {/* Outer Mana Ring */}
      <motion.div
        animate={{
          x: position.x - (isHovered ? 24 : 14),
          y: position.y - (isHovered ? 24 : 14),
          scale: isPointerDown ? 0.75 : isHovered ? 1.4 : 1,
          borderColor: isHovered
            ? darkMode ? "rgba(0, 240, 255, 0.9)" : "rgba(2, 132, 199, 0.9)"
            : darkMode ? "rgba(147, 51, 234, 0.6)" : "rgba(99, 102, 241, 0.6)",
        }}
        transition={{ type: "spring", stiffness: 450, damping: 28 }}
        className={`fixed rounded-full border-2 ${
          isHovered ? "h-12 w-12 border-cyan-400 bg-cyan-400/10" : "h-7 w-7 border-violet-500 bg-transparent"
        } shadow-[0_0_15px_rgba(0,240,255,0.4)] backdrop-blur-[1px]`}
      >
        {/* Reticle Crosshair ticks on hover */}
        {isHovered && (
          <>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1 h-1.5 w-[2px] bg-cyan-400" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1 h-1.5 w-[2px] bg-cyan-400" />
            <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1 w-1.5 h-[2px] bg-cyan-400" />
            <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1 w-1.5 h-[2px] bg-cyan-400" />
          </>
        )}
      </motion.div>

      {/* Inner Core Point */}
      <motion.div
        animate={{
          x: position.x - 3,
          y: position.y - 3,
          scale: isPointerDown ? 1.8 : 1,
        }}
        transition={{ type: "spring", stiffness: 800, damping: 35 }}
        className="fixed h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#00f0ff]"
      />
    </div>
  );
}
