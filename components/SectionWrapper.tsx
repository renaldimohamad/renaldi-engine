"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";

interface SectionProps {
  id: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}

export default function SectionWrapper({
  id,
  title,
  subtitle,
  children,
}: SectionProps) {
  return (
    <motion.section
      id={id}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-primary-light dark:bg-primary-dark"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}>
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 tracking-tight">
            <span className="text-accent">#</span> {title}
          </h2>
          {subtitle && (
            <p className="text-text-light/70 dark:text-text-dark/70 text-lg leading-relaxed font-sans">
              {subtitle}
            </p>
          )}
        </motion.div>

        {/* Content */}
        {children}
      </div>
    </motion.section>
  );
}
