"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import HeroVisual from "./HeroVisual";
import { cn } from "@/lib/utils";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Motion values for tracking cursor and parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for tracking
  const springX = useSpring(mouseX, { damping: 30, stiffness: 100 });
  const springY = useSpring(mouseY, { damping: 30, stiffness: 100 });

  const [isMoving, setIsMoving] = useState(false);
  const moveTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const lastPos = useRef({ x: 0, y: 0 });
  const [rotation, setRotation] = useState(0);
  const [isInsideHero, setIsInsideHero] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Calculate rotation to face movement direction
      const dx = e.clientX - lastPos.current.x;
      const dy = e.clientY - lastPos.current.y;

      if (Math.abs(dx) > 1 || Math.abs(dy) > 1) {
        const angle = Math.atan2(dy, dx) * (180 / Math.PI) + 90; // +90 to align top-pointing cursor
        setRotation(angle);
        setIsMoving(true);
      }

      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      lastPos.current = { x: e.clientX, y: e.clientY };

      // Detect if hovering over interactive elements
      const target = e.target as HTMLElement;
      const isOverInteractive = target.closest('button, a, .interactive');
      setIsHovered(!!isOverInteractive);

      // Inactivity timer
      if (moveTimeoutRef.current) clearTimeout(moveTimeoutRef.current);
      moveTimeoutRef.current = setTimeout(() => setIsMoving(false), 800);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (moveTimeoutRef.current) clearTimeout(moveTimeoutRef.current);
    };
  }, [mouseX, mouseY]);

  return (
    <section
      ref={containerRef}
      onMouseEnter={() => setIsInsideHero(true)}
      onMouseLeave={() => {
        setIsInsideHero(false);
        setIsMoving(false);
      }}
      className="relative min-h-[100vh] flex items-center overflow-hidden pt-28 lg:pt-20 px-6 sm:px-12 md:px-24"
    >
      {/* 🦋 Advanced Cursor System */}
      <CursorParticles
        x={mouseX}
        y={mouseY}
        isHovered={isHovered}
        isMoving={isMoving}
        rotation={rotation}
        isInsideHero={isInsideHero}
      />

      {/* 🌌 Background Layer (Parallax Grids/Glows) */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_50%,hsl(var(--brand)/0.05),transparent_70%)]" />

        {/* Parallax Grid */}
        <motion.div
          style={{
            x: useTransform(springX, [0, 2000], [20, -20]),
            y: useTransform(springY, [0, 1000], [10, -10]),
            backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)`,
            backgroundSize: '60px 60px'
          }}
          className="absolute inset-0 opacity-[0.05]"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center py-12 lg:py-0">
        {/* 📝 Left Side: Headline Content */}
        <div className="space-y-6 lg:space-y-8 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-brand/20 bg-brand/5 text-brand text-[10px] font-black uppercase tracking-[0.3em] mb-4"
          >
            <span className="w-2 h-2 rounded-full bg-brand shadow-[0_0_10px_hsl(var(--brand))]" />
            Engineering Premium Digital Experiences
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <h1 className="text-4xl sm:text-6xl lg:text-[5.5rem] font-black tracking-tighter leading-[0.9] mb-8 font-heading">
              <span className="relative inline-block text-gradient-premium">
                Architecting
                <div className="absolute -inset-4 bg-brand/20 blur-3xl rounded-full -z-10 opacity-50" />
              </span>
              <br />
              <span className="text-muted-foreground/50 italic">Digital Scale.</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground/80 max-w-xl leading-relaxed mx-auto lg:mx-0 font-medium">
              Renaldi Mohamad is a <span className="text-foreground">Fullstack Engineer</span> dedicated to building
              high-performance, production-ready software with a focus on
              enterprise systems and scalable data architecture.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start"
          >
            <Button size="lg" className="group h-14 px-10 rounded-full text-base shadow-[0_20px_50px_rgba(var(--primary),0.3)] hover:scale-105 transition-all duration-500 bg-primary text-primary-foreground font-black cursor-pointer" asChild>
              <Link href="#projects">
                Explore Work <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="h-14 px-10 rounded-full text-base border-foreground/20 hover:bg-foreground/5 backdrop-blur-md font-bold cursor-pointer transition-all duration-300" asChild>
              <Link href="#contact">Contact Me</Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex items-center justify-center lg:justify-start gap-8 text-muted-foreground/60 pt-10"
          >
            <Link href="https://github.com" className="hover:text-brand transition-all hover:scale-125 cursor-pointer"><Github className="w-6 h-6" /></Link>
            <Link href="https://linkedin.com" className="hover:text-brand transition-all hover:scale-125 cursor-pointer"><Linkedin className="w-6 h-6" /></Link>
            <Link href="mailto:hello@renaldi.me" className="hover:text-brand transition-all hover:scale-125 cursor-pointer"><Mail className="w-6 h-6" /></Link>
          </motion.div>
        </div>

        {/* 🎨 Right Side: visual Illustration / Floating UI */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="relative group"
        >
          <HeroVisual />
        </motion.div>
      </div>

      {/* 🖱️ Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-50">
        <span className="text-[10px] font-black uppercase tracking-[0.3em]">Scroll Down</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-px h-12 bg-gradient-to-b from-brand/50 to-transparent"
        ></motion.div>
      </div>
    </section>
  );
}

// Sub-component for small floating particles that follow with different speeds
function CursorParticles({ x, y, isHovered, isMoving, rotation, isInsideHero }: { x: any, y: any, isHovered: boolean, isMoving: boolean, rotation: number, isInsideHero: boolean }) {
  const particles = Array.from({ length: 24 });

  // 1. GLOW SPRING: Diperbarui agar lebih ringan dan mengikuti dengan mulus
  const glowSpringX = useSpring(x, { damping: 25, stiffness: 120, mass: 0.5 });
  const glowSpringY = useSpring(y, { damping: 25, stiffness: 120, mass: 0.5 });

  // 2. LEAD SPRING: Khusus untuk kepala kupu-kupu. 
  // Stiffness sangat tinggi agar menempel kursor, mass sangat kecil agar tidak delay.
  const leadSpringX = useSpring(x, { damping: 20, stiffness: 350, mass: 0.1 });
  const leadSpringY = useSpring(y, { damping: 20, stiffness: 350, mass: 0.1 });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: isInsideHero ? 1 : 0 }}
      transition={{ duration: 0.4 }}
    >
      <MainGlow x={glowSpringX} y={glowSpringY} isHovered={isHovered} />

      {/* Trailing Particles (biarkan menggunakan x dan y asli, karena Spark sudah punya useSpring sendiri di dalamnya) */}
      {particles.map((_, i) => (
        <Spark key={i} x={x} y={y} index={i} isHovered={isHovered} isMoving={isMoving} />
      ))}

      {/* 3. Gunakan leadSpring untuk kepala agar sinkron dengan ekornya */}
      <ButterflyHead x={leadSpringX} y={leadSpringY} isHovered={isHovered} isMoving={isMoving} rotation={rotation} />
    </motion.div>
  );
}

function ButterflyHead({ x, y, isHovered, isMoving, rotation }: { x: any, y: any, isHovered: boolean, isMoving: boolean, rotation: number }) {
  const springConfig = { damping: 15, stiffness: 120, mass: 0.6 };
  const smoothX = useSpring(x, springConfig);
  const smoothY = useSpring(y, springConfig);

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[100] select-none"
      animate={{
        opacity: isMoving ? 1 : 0,
        scale: isMoving ? 1 : 0.5,
      }}
      style={{
        x: smoothX,
        y: smoothY,
        translateX: "-50%",
        translateY: "-50%",
      }}
      transition={{ opacity: { duration: 0.4 }, scale: { duration: 0.4 } }}
    >
      <motion.div
        animate={{
          rotate: rotation,
          scale: isHovered ? 1.4 : 1,
        }}
        transition={{ type: "spring", stiffness: 150, damping: 20 }}
        className="relative flex items-center justify-center"
      >
        {/* 🦋 Pure CSS/SVG Bioluminescent Butterfly */}
        <div className="relative w-16 h-16 flex items-center justify-center perspective-[1000px]">
          {/* Left Wing */}
          <motion.div
            style={{ originX: "100%" }}
            animate={{
              rotateY: [0, -75, 0],
            }}
            transition={{
              duration: 0.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute right-1/2 w-10 h-12"
          >
            <svg viewBox="0 0 100 120" className="w-full h-full drop-shadow-[0_0_12px_rgba(167,139,250,0.8)]">
              <defs>
                <radialGradient id="wingGradLeft" cx="100%" cy="50%" r="100%">
                  <stop offset="0%" stopColor="rgb(167, 139, 250)" stopOpacity="0.9" />
                  <stop offset="50%" stopColor="rgb(139, 92, 246)" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="rgb(88, 28, 235)" stopOpacity="0.2" />
                </radialGradient>
              </defs>
              <path
                d="M100,60 C100,20 60,0 20,20 C-10,40 10,80 40,90 C10,110 50,120 100,60"
                fill="url(#wingGradLeft)"
                stroke="rgba(255,255,255,0.2)"
                strokeWidth="1"
              />
              {/* Intricate Patterns */}
              <circle cx="60" cy="40" r="5" fill="white" fillOpacity="0.3" />
              <circle cx="40" cy="70" r="3" fill="white" fillOpacity="0.2" />
            </svg>
          </motion.div>

          {/* Right Wing */}
          <motion.div
            style={{ originX: "0%" }}
            animate={{
              rotateY: [0, 75, 0],
            }}
            transition={{
              duration: 0.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute left-1/2 w-10 h-12"
          >
            <svg viewBox="0 0 100 120" className="w-full h-full drop-shadow-[0_0_12px_rgba(167,139,250,0.8)]">
              <defs>
                <radialGradient id="wingGradRight" cx="0%" cy="50%" r="100%">
                  <stop offset="0%" stopColor="rgb(167, 139, 250)" stopOpacity="0.9" />
                  <stop offset="50%" stopColor="rgba(70, 36, 151, 1)" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="rgb(88, 28, 235)" stopOpacity="0.2" />
                </radialGradient>
              </defs>
              <path
                d="M0,60 C0,20 40,0 80,20 C110,40 90,80 60,90 C90,110 50,120 0,60"
                fill="url(#wingGradRight)"
                stroke="rgba(255,255,255,0.2)"
                strokeWidth="1"
              />
              {/* Intricate Patterns */}
              <circle cx="40" cy="40" r="5" fill="white" fillOpacity="0.3" />
              <circle cx="60" cy="70" r="3" fill="white" fillOpacity="0.2" />
            </svg>
          </motion.div>

          {/* Body */}
          {/* <div className="w-1.5 h-10 bg-gradient-to-b from-violet-300 to-violet-600 rounded-full blur-[0.5px] shadow-[0_0_10px_rgba(167,139,250,1)] z-10" /> */}

          <div className="w-1.5 h-10 bg-[hsl(var(--primary)/0.4)] rounded-full blur-[0.5px] shadow-[0_0_15px_hsl(var(--primary)/0.7)] z-10" />
        </div>

        {/* Pulsing Aura */}
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="absolute inset-0 bg-primary/30 blur-2xl rounded-full -z-10"
        />
      </motion.div>
    </motion.div>
  );
}

function MainGlow({ x, y, isHovered }: { x: any, y: any, isHovered: boolean }) {
  return (
    <motion.div
      style={{ x, y }}
      animate={{
        scale: isHovered ? [1.5, 1.8, 1.5] : 1,
        backgroundColor: isHovered ? "rgba(139, 92, 246, 0.25)" : "rgba(var(--primary), 0.1)"
      }}
      transition={{
        scale: { duration: 2, repeat: Infinity, ease: "easeInOut" },
        backgroundColor: { duration: 0.5 }
      }}
      className="fixed top-0 left-0 w-64 h-64 -ml-32 -mt-32 blur-[100px] pointer-events-none z-0 rounded-full mix-blend-screen hidden lg:block"
    />
  );
}

function Spark({ x, y, index, isHovered, isMoving }: { x: any, y: any, index: number, isHovered: boolean, isMoving: boolean }) {
  // 1. FISIKA SPRING: Tarikan lebih kuat di awal, lebih melayang di ekor
  const springX = useSpring(x, {
    damping: 15 + index * 1.5,
    stiffness: 40 - index * 5,
    mass: 0.5 + index * 0.05
  });

  const springY = useSpring(y, {
    damping: 15 + index * 1.5,
    stiffness: 40 - index * 5,
    mass: 0.5 + index * 0.05
  });

  // Efek memudar di ekor yang lebih halus
  const opacity = useTransform([springX, springY], () => {
    return isMoving ? Math.max(0, (isHovered ? 1 : 0.8) - index * 0.04) : 0;
  });

  // Efek mengecil di ekor agar terlihat seperti ujung komet
  const scale = useTransform([springX, springY], () => {
    return isMoving ? Math.max(0, 1 - index * 0.035) : 0;
  });

  // 2. KALKULASI ORBIT: Membuat rute melingkar acak berdasarkan index partikel
  // Menggunakan index agar setiap partikel punya arah putaran yang sedikit berbeda
  const orbitX = Math.sin(index * 0.8) * 15;
  const orbitY = Math.cos(index * 0.8) * 15;

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-10 select-none mix-blend-screen"
      style={{
        x: springX,
        y: springY,
        opacity,
        scale, // Scale ditambahkan ke style
        translateX: "-50%",
        translateY: "-50%",
      }}
    >
      <motion.div
        animate={{
          // 3. JALUR MELINGKAR: Bergerak dari pusat -> kanan/atas -> kiri/bawah -> kembali ke pusat
          x: [0, orbitX, -orbitY, 0],
          y: [0, orbitY, orbitX, 0],
          rotate: [0, 360],
        }}
        transition={{
          // 4. VARIASI & LINEAR: Durasi sedikit diacak agar saling kejar, dan ease linear agar tidak berhenti
          duration: 2 + (index % 4) * 0.25,
          repeat: Infinity,
          ease: "linear",
        }}
        className={cn(
          "transition-all duration-300",
          isHovered
            ? "text-violet-300 drop-shadow-[0_0_8px_rgba(167,139,250,0.9)]"
            : "text-primary/70 drop-shadow-[0_0_5px_rgba(var(--primary),0.6)]"
        )}
      >
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
        >
          <path d="M6 0V12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M0 6H12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <circle cx="6" cy="6" r="1.5" fill="currentColor" />
        </svg>
      </motion.div>
    </motion.div>
  );
}
