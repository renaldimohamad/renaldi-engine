"use client";

import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      label: "GitHub",
      icon: "🐙",
      url: "https://github.com/renaldimohamad",
    },
    {
      label: "LinkedIn",
      icon: "💼",
      url: "http://linkedin.com/in/renaldimohamad",
    },
  ];

  return (
    <footer className="bg-secondary-light dark:bg-secondary-dark border-t border-tertiary-light dark:border-tertiary-dark">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}>
          {/* Brand */}
          <motion.div variants={staggerItem}>
            <h3 className="text-2xl font-heading font-bold text-accent mb-2">
              Aldi.
            </h3>
            <p className="text-text-light/70 dark:text-text-dark/70 text-sm leading-relaxed">
              Full-Stack Developer building scalable, data-intensive
              applications
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={staggerItem}>
            <h4 className="font-heading font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["About", "Experience", "Projects", "Skills", "Contact"].map(
                (item) => (
                  <motion.li
                    key={item}
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="text-text-light/70 dark:text-text-dark/70 hover:text-accent transition-colors duration-200 text-sm">
                      {item}
                    </a>
                  </motion.li>
                ),
              )}
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={staggerItem}>
            <h4 className="font-heading font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -4 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-lg bg-secondary-light dark:bg-secondary-dark hover:bg-accent hover:text-white transition-all duration-200 flex items-center justify-center text-lg font-medium shadow-sm hover:shadow-glow"
                  aria-label={social.label}
                  title={social.label}>
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <motion.div
          className="border-t border-tertiary-light dark:border-tertiary-dark pt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}>
          <p className="text-center text-text-light dark:text-text-dark/70 text-sm">
            © {currentYear} Renaldi Mohamad. Full Stack Developer specialized in
            data-intensive applications.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
