import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { useTheme } from "../context/ThemeContext";

export default function Hero3DCore() {
  const mountRef = useRef(null);
  const { darkMode } = useTheme();

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth || 320;
    const height = container.clientHeight || 320;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 100);
    camera.position.z = 7;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Group to hold everything
    const coreGroup = new THREE.Group();
    scene.add(coreGroup);

    // Inner Core Crystal (Octahedron)
    const innerGeo = new THREE.OctahedronGeometry(1.6, 0);
    const innerMat = new THREE.MeshPhongMaterial({
      color: darkMode ? 0x00f0ff : 0x0284c7,
      emissive: darkMode ? 0x005577 : 0x0369a1,
      shininess: 100,
      transparent: true,
      opacity: 0.85,
      wireframe: false,
      flatShading: true,
    });
    const innerCore = new THREE.Mesh(innerGeo, innerMat);
    coreGroup.add(innerCore);

    // Inner Core Wireframe overlay for sharp crystal edges
    const innerWireGeo = new THREE.OctahedronGeometry(1.61, 0);
    const innerWireMat = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      wireframe: true,
      transparent: true,
      opacity: 0.6,
    });
    const innerWire = new THREE.Mesh(innerWireGeo, innerWireMat);
    coreGroup.add(innerWire);

    // Outer Holographic Shield (Icosahedron Wireframe)
    const outerGeo = new THREE.IcosahedronGeometry(2.5, 1);
    const outerMat = new THREE.MeshBasicMaterial({
      color: darkMode ? 0x9333ea : 0x6366f1,
      wireframe: true,
      transparent: true,
      opacity: 0.45,
    });
    const outerShield = new THREE.Mesh(outerGeo, outerMat);
    coreGroup.add(outerShield);

    // Orbiting Mana Energy Rings
    const ringGeo = new THREE.TorusGeometry(3.1, 0.04, 16, 64);
    const ringMat = new THREE.MeshBasicMaterial({
      color: darkMode ? 0x00f0ff : 0x06b6d4,
      transparent: true,
      opacity: 0.7,
    });
    const ring = new THREE.Mesh(ringGeo, ringMat);
    ring.rotation.x = Math.PI / 2.3;
    coreGroup.add(ring);

    // Glowing Nodes at Vertices
    const particleCount = 45;
    const pGeo = new THREE.BufferGeometry();
    const pPositions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      const radius = 2.4 + Math.random() * 1.2;
      const theta = Math.random() * Math.PI * 2;
      const phi = (Math.random() - 0.5) * Math.PI;

      pPositions[i * 3] = radius * Math.cos(phi) * Math.cos(theta);
      pPositions[i * 3 + 1] = radius * Math.sin(phi);
      pPositions[i * 3 + 2] = radius * Math.cos(phi) * Math.sin(theta);
    }

    pGeo.setAttribute("position", new THREE.BufferAttribute(pPositions, 3));
    const pMat = new THREE.PointsMaterial({
      color: darkMode ? 0x00f0ff : 0x4f46e5,
      size: 0.12,
      transparent: true,
      opacity: 0.9,
    });
    const particles = new THREE.Points(pGeo, pMat);
    coreGroup.add(particles);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(darkMode ? 0x00f0ff : 0x0284c7, 3, 20);
    pointLight1.position.set(5, 5, 5);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(darkMode ? 0x9333ea : 0x6366f1, 2.5, 20);
    pointLight2.position.set(-5, -5, -2);
    scene.add(pointLight2);

    // Interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handlePointerMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      mouseX = x * 2;
      mouseY = y * 2;
    };

    container.addEventListener("pointermove", handlePointerMove);

    // Animation Loop
    let animationFrameId;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      targetX += (mouseX - targetX) * 0.08;
      targetY += (mouseY - targetY) * 0.08;

      coreGroup.rotation.y = elapsed * 0.5 + targetX * 1.5;
      coreGroup.rotation.x = Math.sin(elapsed * 0.4) * 0.2 - targetY * 1.2;

      outerShield.rotation.y = -elapsed * 0.3;
      outerShield.rotation.z = elapsed * 0.2;

      ring.rotation.z = elapsed * 0.8;

      // Pulse inner core scale with mana heartbeat
      const scale = 1 + Math.sin(elapsed * 2.5) * 0.06;
      innerCore.scale.set(scale, scale, scale);
      innerWire.scale.set(scale, scale, scale);

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!container) return;
      const newW = container.clientWidth || 320;
      const newH = container.clientHeight || 320;
      camera.aspect = newW / newH;
      camera.updateProjectionMatrix();
      renderer.setSize(newW, newH);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      container.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      innerGeo.dispose();
      innerMat.dispose();
      innerWireGeo.dispose();
      innerWireMat.dispose();
      outerGeo.dispose();
      outerMat.dispose();
      ringGeo.dispose();
      ringMat.dispose();
      pGeo.dispose();
      pMat.dispose();
      renderer.dispose();
    };
  }, [darkMode]);

  return (
    <div
      ref={mountRef}
      className="relative w-full h-[280px] sm:h-[340px] md:h-[400px] flex items-center justify-center cursor-grab active:cursor-grabbing select-none"
    />
  );
}
