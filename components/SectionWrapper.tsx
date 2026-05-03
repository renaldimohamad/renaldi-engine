"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionProps {
  id: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
}

export default function SectionWrapper({
  id,
  title,
  subtitle,
  children,
  className,
}: SectionProps) {
  return (
    <section id={id} className={cn("py-20 md:py-32 overflow-hidden", className)}>
      <div className="max-w-7xl mx-auto px-5 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12 md:mb-24 flex flex-col items-start gap-3 md:gap-4"
        >
          <div className="flex items-center gap-2">
            <div className="w-8 md:w-12 h-px bg-primary" />
            <span className="text-primary font-bold tracking-widest text-[10px] md:text-xs uppercase">
              {title}
            </span>
          </div>
          {subtitle && (
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight max-w-2xl leading-[1.2] md:leading-[1.1]">
              {subtitle}
            </h2>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
}
