"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Code2, Cpu, Globe, Zap } from "lucide-react";

export default function HeroVisual() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-300, 300], [5, -5]);
  const rotateY = useTransform(mouseXSpring, [-300, 300], [-5, 5]);

  const handleMouseMove = (event: React.MouseEvent) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(event.clientX - centerX);
    y.set(event.clientY - centerY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div
      className="relative w-full h-[500px] hidden lg:flex items-center justify-center perspective-1000"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        style={{ rotateX, rotateY }}
        className="relative w-full max-w-lg aspect-square"
      >
        {/* Main Central Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="absolute inset-0 bg-card border border-primary/20 rounded-[2rem] shadow-2xl overflow-hidden backdrop-blur-xl"
        >
          <div className="p-6 h-full flex flex-col">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-destructive/50" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
              <div className="w-3 h-3 rounded-full bg-green-500/50" />
            </div>
            <div className="flex-1 space-y-4 font-mono text-sm overflow-hidden">
              <div className="text-primary">const engineer = {"{"}</div>
              <div className="pl-4">name: &quot;Renaldi&quot;,</div>
              <div className="pl-4">role: &quot;Fullstack&quot;,</div>
              <div className="pl-4">impact: [&quot;High&quot;, &quot;Scalable&quot;],</div>
              <div className="pl-4">status: &quot;Ready&quot;</div>
              <div className="text-primary">{"}"};</div>
              <div className="pt-4 border-t border-border mt-4">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground italic">{"// Optimization"}</span>
                  <span className="text-success text-xs font-bold px-2 py-0.5 rounded-full bg-success/10">+42% speed</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Floating Element 1 - Top Right */}
        <motion.div
          style={{ x: useTransform(mouseXSpring, [-300, 300], [-30, 30]), y: useTransform(mouseYSpring, [-300, 300], [-30, 30]) }}
          className="absolute -top-10 -right-10 p-4 bg-background border border-border rounded-2xl shadow-xl flex items-center gap-3 glass"
        >
          <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center text-primary">
            <Cpu className="w-6 h-6" />
          </div>
          <div>
            <div className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Backend</div>
            <div className="text-xs font-bold">99.9% Uptime</div>
          </div>
        </motion.div>

        {/* Floating Element 2 - Bottom Left */}
        <motion.div
          style={{ x: useTransform(mouseXSpring, [-300, 300], [40, -40]), y: useTransform(mouseYSpring, [-300, 300], [20, -20]) }}
          className="absolute -bottom-12 -left-12 p-4 bg-background border border-border rounded-2xl shadow-xl flex items-center gap-3 glass"
        >
          <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center text-primary">
            <Globe className="w-6 h-6" />
          </div>
          <div>
            <div className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Global</div>
            <div className="text-xs font-bold">Edge Scalability</div>
          </div>
        </motion.div>

        {/* Floating Badge */}
        <motion.div
          style={{ x: useTransform(mouseXSpring, [-300, 300], [-10, 10]), y: useTransform(mouseYSpring, [-300, 300], [60, -60]) }}
          className="absolute top-1/2 left-2/3 p-3 bg-primary text-primary-foreground rounded-full shadow-lg flex items-center gap-2"
        >
          <Zap className="w-4 h-4 fill-current" />
          <span className="text-[10px] font-black uppercase tracking-tighter">Real-time</span>
        </motion.div>

        {/* Background Glow */}
        <div className="absolute inset-0 bg-primary/20 blur-[100px] -z-10 rounded-full animate-pulse" />
      </motion.div>
    </div>
  );
}
