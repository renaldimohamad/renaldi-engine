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
    <section id={id} className={cn("py-24 md:py-32 overflow-hidden", className)}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 md:mb-24 flex flex-col items-start gap-4"
        >
          <div className="flex items-center gap-2">
            <div className="w-12 h-px bg-primary" />
            <span className="text-primary font-bold tracking-widest text-xs uppercase">
              {title}
            </span>
          </div>
          {subtitle && (
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight max-w-2xl leading-[1.1]">
              {subtitle}
            </h2>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
}
