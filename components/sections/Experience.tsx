"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/SectionWrapper";
import { staggerContainer, staggerItem, cardHover } from "@/lib/animations";

export default function Experience() {
  const experiences = [
    {
      year: "2025 - Present",
      period: "Feb 2025 - Present",
      role: "Full Stack Developer",
      company: "PT. Eka Abhipraya Semesta",
      description:
        "Building production-grade applications including government systems for social media monitoring and infrastructure dashboards.",
      achievements: [
        "Architected and deployed 3 major production systems (Korlantas Polri, Cipta Karya, QOLA)",
        "Built frontend using React.js & Vue.js with advanced UI patterns",
        "Developed backend APIs using NestJS with GraphQL & REST endpoints",
        "Implemented state management with TanStack Query, Zustand, and Pinia",
        "Optimized database queries using Prisma ORM with MySQL",
        "Focus on performance optimization and data-intensive applications",
      ],
      technologies: [
        "React",
        "Vue.js",
        "NestJS",
        "GraphQL",
        "REST API",
        "TypeScript",
        "Prisma",
        "MySQL",
      ],
    },
    {
      year: "2024",
      period: "Jun 2024 - Oct 2024",
      role: "Full Stack Developer Intern",
      company: "PT. Dumbways Teknologi Indonesia",
      description:
        "Developed fullstack web applications using modern JavaScript/Node.js ecosystem.",
      achievements: [
        "Built multiple fullstack applications using React and Node.js",
        "Integrated REST APIs across multiple frontend and backend systems",
        "Collaborated on both frontend and backend feature development",
        "Learned best practices in development workflow and code organization",
      ],
      technologies: [
        "React",
        "Node.js",
        "Express",
        "REST API",
        "JavaScript",
        "MongoDB",
      ],
    },
  ];

  return (
    <SectionWrapper
      id="experience"
      title="Experience"
      subtitle="My journey building production systems">
      <motion.div
        className="space-y-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}>
        {experiences.map((exp, idx) => (
          <motion.div
            key={idx}
            variants={staggerItem}
            whileHover={{ y: -8 }}
            className="group p-8 rounded-lg bg-gradient-subtle dark:bg-gradient-subtle-dark border border-tertiary-light dark:border-tertiary-dark hover:border-accent/50 hover:shadow-lg transition-all duration-300">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <div>
                <h3 className="text-2xl font-heading font-bold text-accent">
                  {exp.role}
                </h3>
                <p className="text-text-light/70 dark:text-text-dark/70 font-medium mt-1">
                  {exp.company}
                </p>
              </div>
              <div className="mt-4 md:mt-0 text-right">
                <p className="text-lg font-heading font-semibold text-text-light dark:text-text-dark">
                  {exp.year}
                </p>
                <p className="text-sm text-text-light/60 dark:text-text-dark/60">
                  {exp.period}
                </p>
              </div>
            </div>

            {/* Description */}
            <p className="text-text-light/80 dark:text-text-dark/80 mb-6 leading-relaxed">
              {exp.description}
            </p>

            {/* Achievements */}
            <div className="mb-6">
              <h4 className="font-heading font-semibold mb-3 text-text-light dark:text-text-dark">
                Key Achievements
              </h4>
              <ul className="space-y-2">
                {exp.achievements.map((achievement, i) => (
                  <li
                    key={i}
                    className="flex items-start space-x-3 text-text-light/70 dark:text-text-dark/70 text-sm leading-relaxed">
                    <span className="text-accent font-bold mt-1 flex-shrink-0">
                      ✓
                    </span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technologies */}
            <div>
              <h4 className="font-heading font-semibold mb-3 text-text-light dark:text-text-dark">
                Technologies
              </h4>
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 text-xs font-medium rounded-full bg-accent/10 dark:bg-accent/15 text-accent border border-accent/30 hover:border-accent hover:bg-accent/20 dark:hover:bg-accent/25 transition-all duration-200">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
