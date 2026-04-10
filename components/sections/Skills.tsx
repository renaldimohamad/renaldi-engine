"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/SectionWrapper";
import { staggerContainer, staggerItem, cardHover } from "@/lib/animations";

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      icon: "🎨",
      skills: [
        "React",
        "Next.js",
        "Vue.js",
        "Nuxt.js",
        "React Native",
        "TypeScript",
        "Tailwind CSS",
        "Material UI",
      ],
    },
    {
      title: "Backend",
      icon: "⚙️",
      skills: [
        "Node.js",
        "Express.js",
        "NestJS",
        "REST API",
        "GraphQL",
        "System Design",
        "API Architecture",
        "Microservices",
      ],
    },
    {
      title: "State Management",
      icon: "🔄",
      skills: [
        "TanStack Query",
        "Zustand",
        "Pinia",
        "Redux",
        "Context API",
        "Async State",
        "Data Synchronization",
        "Caching",
      ],
    },
    {
      title: "Database & ORM",
      icon: "🗄️",
      skills: [
        "MySQL",
        "PostgreSQL",
        "Prisma ORM",
        "Query Optimization",
        "Database Design",
        "Data Modeling",
        "Indexing Strategies",
        "Migration Management",
      ],
    },
    {
      title: "Tools & DevOps",
      icon: "🚀",
      skills: [
        "Git",
        "GitHub",
        "Cloudinary",
        "Figma",
        "Docker",
        "Linux",
        "CI/CD",
        "Performance Optimization",
      ],
    },
    {
      title: "Specializations",
      icon: "⭐",
      skills: [
        "Data-Intensive Apps",
        "System Architecture",
        "Performance Optimization",
        "Real-time Systems",
        "WebSocket Integration",
        "API Design",
        "Code Review",
        "Mentoring",
      ],
    },
  ];

  return (
    <SectionWrapper
      id="skills"
      title="Skills"
      subtitle="Technologies and expertise I bring to the table">
      <motion.div
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "0px 0px -100px 0px" }}
        variants={staggerContainer}>
        {skillCategories.map((category, idx) => (
          <motion.div
            key={category.title}
            variants={staggerItem}
            whileHover={{
              y: -8,
            }}
            className="p-6 rounded-lg bg-gradient-subtle dark:bg-gradient-subtle-dark border border-tertiary-light dark:border-tertiary-dark hover:border-accent/50 hover:shadow-2xl hover:shadow-success/10 transition-all duration-300 group">
            {/* Header */}
            <motion.div
              className="flex items-center space-x-3 mb-6"
              whileHover={{ x: 4 }}>
              <span className="text-4xl group-hover:scale-110 transition-transform">
                {category.icon}
              </span>
              <h3 className="text-xl font-heading font-bold text-accent">
                {category.title}
              </h3>
            </motion.div>

            {/* Skills */}
            <motion.div className="space-y-2" variants={staggerContainer}>
              {category.skills.map((skill) => (
                <motion.div
                  key={skill}
                  variants={staggerItem}
                  whileHover={{
                    x: 4,
                  }}
                  className="flex items-center space-x-2 p-2 rounded hover:bg-success/10 transition-colors duration-200">
                  <motion.span
                    className="w-2 h-2 bg-accent rounded-full"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: Math.random() * 0.5,
                    }}
                  />
                  <span className="text-text-light/80 dark:text-text-dark/80 text-sm leading-relaxed">
                    {skill}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      {/* Proficiency Summary */}
      <motion.div
        className="mt-16 p-8 rounded-lg bg-secondary-light dark:bg-secondary-dark border border-tertiary-light dark:border-tertiary-dark"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}>
        <h3 className="text-2xl font-bold mb-8 text-accent">
          Proficiency Levels
        </h3>
        <motion.div className="space-y-6" variants={staggerContainer}>
          {[
            {
              category: "Expert",
              technologies:
                "React, Next.js, Node.js, TypeScript, Prisma, MySQL",
            },
            {
              category: "Advanced",
              technologies: "GraphQL, NestJS, Vue.js, PostgreSQL, Docker",
            },
            {
              category: "Intermediate",
              technologies: "System Design, Performance Optimization, CI/CD",
            },
          ].map((prof) => (
            <motion.div key={prof.category} variants={staggerItem}>
              <div className="flex justify-between items-center mb-2">
                <h4 className="font-semibold text-text-light dark:text-text-dark">
                  {prof.category}
                </h4>
                <span
                  className={`text-xs font-semibold ${
                    prof.category === "Expert"
                      ? "text-success"
                      : prof.category === "Advanced"
                        ? "text-info"
                        : "text-warning"
                  }`}>
                  {prof.category === "Expert"
                    ? "5+ years equivalent"
                    : prof.category === "Advanced"
                      ? "2-3 years"
                      : "1-2 years"}
                </span>
              </div>
              <p className="text-text-light/70 dark:text-text-dark/70 text-sm">
                {prof.technologies}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </SectionWrapper>
  );
}
