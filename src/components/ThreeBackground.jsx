import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { useTheme } from "../context/ThemeContext";

export default function ThreeBackground() {
  const mountRef = useRef(null);
  const { darkMode, isRedGate } = useTheme();

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 50;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Particle Group
    const particleCount = 1400;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const scales = new Float32Array(particleCount);
    const velocities = [];

    // Dimension Colors
    let colorA, colorB, colorC;
    if (isRedGate) {
      // Red Gate Mode (Crimson Blood Dimension)
      colorA = new THREE.Color(0xff2222);
      colorB = new THREE.Color(0xff8800);
      colorC = new THREE.Color(0xaa0033);
    } else if (darkMode) {
      // Shadow Monarch Dark Mode
      colorA = new THREE.Color(0x00f0ff);
      colorB = new THREE.Color(0x9333ea);
      colorC = new THREE.Color(0x3b82f6);
    } else {
      // Celestial Light Mode
      colorA = new THREE.Color(0x0284c7);
      colorB = new THREE.Color(0x6366f1);
      colorC = new THREE.Color(0x0ea5e9);
    }

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      const radius = 10 + Math.random() * 85;
      const theta = Math.random() * Math.PI * 2;
      const y = (Math.random() - 0.5) * 110;

      positions[i3] = Math.cos(theta) * radius;
      positions[i3 + 1] = y;
      positions[i3 + 2] = Math.sin(theta) * radius;

      const mixed = Math.random();
      let c;
      if (mixed < 0.45) {
        c = colorA;
      } else if (mixed < 0.85) {
        c = colorB;
      } else {
        c = colorC;
      }

      colors[i3] = c.r;
      colors[i3 + 1] = c.g;
      colors[i3 + 2] = c.b;

      scales[i] = Math.random() * 2.5 + 0.8;

      velocities.push({
        rotSpeed: (Math.random() * 0.003 + 0.001) * (Math.random() > 0.5 ? 1 : -1) * (isRedGate ? 1.6 : 1),
        yVel: (Math.random() - 0.5) * 0.04 * (isRedGate ? 1.5 : 1),
        baseRadius: radius,
        angle: theta,
      });
    }

    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    geometry.setAttribute("scale", new THREE.BufferAttribute(scales, 1));

    // Custom circular soft glow texture
    const canvas = document.createElement("canvas");
    canvas.width = 64;
    canvas.height = 64;
    const ctx = canvas.getContext("2d");
    const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
    gradient.addColorStop(0, "rgba(255, 255, 255, 1)");
    gradient.addColorStop(0.3, isRedGate ? "rgba(255, 50, 50, 0.8)" : "rgba(0, 240, 255, 0.8)");
    gradient.addColorStop(0.7, isRedGate ? "rgba(200, 0, 0, 0.3)" : "rgba(147, 51, 234, 0.3)");
    gradient.addColorStop(1, "rgba(0, 0, 0, 0)");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 64, 64);

    const texture = new THREE.CanvasTexture(canvas);

    const material = new THREE.PointsMaterial({
      size: darkMode ? 1.6 : 1.2,
      map: texture,
      vertexColors: true,
      transparent: true,
      opacity: darkMode ? 0.85 : 0.65,
      blending: darkMode ? THREE.AdditiveBlending : THREE.NormalBlending,
      depthWrite: false,
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    // Floating Summoning Rings
    const ringGroup = new THREE.Group();

    const ringGeo1 = new THREE.TorusGeometry(26, 0.12, 16, 100);
    const ringMat1 = new THREE.MeshBasicMaterial({
      color: isRedGate ? 0xff3333 : darkMode ? 0x00f0ff : 0x0284c7,
      wireframe: true,
      transparent: true,
      opacity: darkMode ? 0.35 : 0.2,
    });
    const ring1 = new THREE.Mesh(ringGeo1, ringMat1);
    ring1.rotation.x = Math.PI / 3;
    ringGroup.add(ring1);

    const ringGeo2 = new THREE.TorusGeometry(36, 0.08, 16, 100);
    const ringMat2 = new THREE.MeshBasicMaterial({
      color: isRedGate ? 0xff8800 : darkMode ? 0x9333ea : 0x6366f1,
      wireframe: true,
      transparent: true,
      opacity: darkMode ? 0.25 : 0.15,
    });
    const ring2 = new THREE.Mesh(ringGeo2, ringMat2);
    ring2.rotation.y = Math.PI / 4;
    ringGroup.add(ring2);

    scene.add(ringGroup);

    // Mouse Tracking
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const onPointerMove = (e) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    };

    window.addEventListener("pointermove", onPointerMove);

    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", onResize);

    // Animation Loop
    let animationFrameId;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;

      camera.position.x = targetX * 12;
      camera.position.y = -targetY * 12;
      camera.lookAt(scene.position);

      ring1.rotation.z = elapsedTime * (isRedGate ? 0.25 : 0.15);
      ring2.rotation.z = -elapsedTime * (isRedGate ? 0.18 : 0.1);
      ringGroup.rotation.y = elapsedTime * 0.05;

      const posAttr = geometry.attributes.position;
      const posArray = posAttr.array;

      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;
        const v = velocities[i];
        v.angle += v.rotSpeed;

        posArray[i3] = Math.cos(v.angle) * v.baseRadius;
        posArray[i3 + 2] = Math.sin(v.angle) * v.baseRadius;

        posArray[i3 + 1] += v.yVel;
        if (posArray[i3 + 1] > 55) posArray[i3 + 1] = -55;
        if (posArray[i3 + 1] < -55) posArray[i3 + 1] = 55;
      }
      posAttr.needsUpdate = true;

      particles.rotation.y = elapsedTime * 0.02;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("resize", onResize);
      cancelAnimationFrame(animationFrameId);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      texture.dispose();
      ringGeo1.dispose();
      ringMat1.dispose();
      ringGeo2.dispose();
      ringMat2.dispose();
      renderer.dispose();
    };
  }, [darkMode, isRedGate]);

  return (
    <div
      ref={mountRef}
      className="fixed inset-0 pointer-events-none z-0 transition-opacity duration-700"
      style={{ opacity: darkMode ? 0.95 : 0.75 }}
    />
  );
}
