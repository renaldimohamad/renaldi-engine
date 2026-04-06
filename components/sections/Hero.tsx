"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8 bg-primary-light dark:bg-primary-dark">
      <motion.div
        className="max-w-4xl mx-auto text-center"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}>
        {/* Greeting */}
        <motion.div
          variants={staggerItem}
          className="mb-8 inline-block px-4 py-2 rounded-full bg-secondary-light dark:bg-secondary-dark border border-tertiary-light dark:border-tertiary-dark hover:border-accent transition-colors duration-300">
          <p className="text-sm font-medium text-accent">
            👋 Welcome to my portfolio
          </p>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          variants={staggerItem}
          className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 leading-tight tracking-tight">
          Full Stack Developer Building{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-emerald-500 to-teal-600">
            Scalable, Data-Intensive
          </span>
          <br />
          <span className="text-text-light dark:text-text-dark">
            Applications
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          variants={staggerItem}
          className="text-lg md:text-xl text-text-light/70 dark:text-text-dark/70 mb-10 max-w-3xl mx-auto leading-relaxed font-sans">
          ~2 years of production experience building government systems and
          enterprise platforms. Specialized in React, Vue.js, Node.js, and
          NestJS. Currently building apps at PT. Eka Abhipraya Semesta.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={staggerItem}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-4 bg-accent hover:bg-accent-light text-white font-semibold rounded-lg transition-all duration-200 shadow-lg hover:shadow-glow">
            View Projects
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-4 bg-secondary-light dark:bg-secondary-dark text-text-light dark:text-text-dark font-semibold rounded-lg border border-tertiary-light dark:border-tertiary-dark hover:border-accent hover:bg-primary-light dark:hover:bg-tertiary-dark transition-all duration-200">
            Contact Me
          </motion.a>
        </motion.div>

        {/* Tech Stack Preview */}
        <motion.div
          variants={staggerItem}
          className="text-text-light/60 dark:text-text-dark/60 text-sm font-medium">
          <p className="mb-4">Tech Stack</p>
          <motion.div
            variants={staggerContainer}
            className="flex flex-wrap justify-center gap-3">
            {[
              "React",
              "Vue.js",
              "Next.js",
              "Node.js",
              "NestJS",
              "TypeScript",
            ].map((tech) => (
              <motion.span
                key={tech}
                variants={staggerItem}
                whileHover={{ scale: 1.08, y: -2 }}
                className="px-4 py-2 rounded-full bg-secondary-light dark:bg-secondary-dark border border-tertiary-light dark:border-tertiary-dark hover:border-accent hover:text-accent transition-all duration-200">
                {tech}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          variants={staggerItem}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="mt-16">
          <svg
            className="w-6 h-6 mx-auto text-accent"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
