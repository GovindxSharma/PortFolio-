import React, { useEffect, useRef } from "react";
import { useTheme } from "../context/ThemeContext";

/**
 * Interactive 60 FPS Canvas Constellation & Fluid Mana Starfield
 * Fluid particle physics, mouse repulsion, proximity connection threads, and deep cosmic gradient.
 */
export default function ThreeBackground() {
  const canvasRef = useRef(null);
  const { darkMode, isRedGate } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    // Mouse tracker
    const mouse = { x: -1000, y: -1000, radius: 140 };
    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };
    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    // Particle Setup
    const particleCount = Math.min(85, Math.floor((width * height) / 16000));
    const particles = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        radius: Math.random() * 1.8 + 0.8,
        baseAlpha: Math.random() * 0.45 + 0.2,
        phase: Math.random() * Math.PI * 2,
      });
    }

    let time = 0;

    const render = () => {
      time += 0.015;
      ctx.clearRect(0, 0, width, height);

      const isRed = isRedGate;
      const nodeColor = isRed ? "239, 68, 68" : darkMode ? "56, 189, 248" : "2, 132, 199";
      const secondaryColor = isRed ? "245, 158, 11" : darkMode ? "168, 85, 247" : "99, 102, 241";

      // Draw Connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 110) {
            const alpha = (1 - dist / 110) * 0.16;
            ctx.strokeStyle = `rgba(${nodeColor}, ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Update and draw particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Movement
        p.x += p.vx;
        p.y += p.vy;

        // Bounce boundaries
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        // Cursor Repulsion / Excitement
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < mouse.radius) {
          const force = (1 - dist / mouse.radius) * 1.5;
          p.x += (dx / dist) * force;
          p.y += (dy / dist) * force;
        }

        // Pulse alpha
        const pulse = Math.sin(time + p.phase) * 0.2;
        const currentAlpha = Math.max(0.1, Math.min(0.85, p.baseAlpha + pulse));

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = i % 2 === 0 ? `rgba(${nodeColor}, ${currentAlpha})` : `rgba(${secondaryColor}, ${currentAlpha})`;
        ctx.shadowBlur = 8;
        ctx.shadowColor = i % 2 === 0 ? `rgba(${nodeColor}, 0.6)` : `rgba(${secondaryColor}, 0.6)`;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [darkMode, isRedGate]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden transition-colors duration-700">
      {/* Deep Obsidian Gradient Surface */}
      <div className="absolute inset-0 bg-[#06070a] dark:bg-[#040508]" />

      {/* Atmospheric Luminescent Glow Pods */}
      {isRedGate ? (
        <>
          <div className="absolute -top-[10%] left-[15%] w-[55vw] h-[55vw] max-w-[700px] max-h-[700px] rounded-full bg-red-600/18 blur-[160px]" />
          <div className="absolute -bottom-[10%] right-[10%] w-[50vw] h-[50vw] max-w-[650px] max-h-[650px] rounded-full bg-amber-600/14 blur-[160px]" />
        </>
      ) : (
        <>
          <div className="absolute -top-[15%] -left-[10%] w-[60vw] h-[60vw] max-w-[750px] max-h-[750px] rounded-full bg-cyan-500/12 dark:bg-cyan-500/16 blur-[180px]" />
          <div className="absolute -bottom-[15%] -right-[10%] w-[65vw] h-[65vw] max-w-[800px] max-h-[800px] rounded-full bg-violet-600/16 dark:bg-purple-600/20 blur-[190px]" />
          <div className="absolute top-[40%] left-[30%] w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] rounded-full bg-blue-600/8 dark:bg-indigo-600/12 blur-[160px]" />
        </>
      )}

      {/* Interactive Physics Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      {/* Vignette Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#040508]/40 via-transparent to-[#040508]/60 pointer-events-none" />
    </div>
  );
}
