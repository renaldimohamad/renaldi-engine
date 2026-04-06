"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/SectionWrapper";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations";

export default function About() {
  return (
    <SectionWrapper
      id="about"
      title="About"
      subtitle="Who I am and what drives me">
      <motion.div
        className="grid md:grid-cols-2 gap-12 items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}>
        {/* Left: Description */}
        <motion.div variants={staggerItem} className="space-y-6">
          <p className="text-lg font-sans text-text-light/80 dark:text-text-dark/80 leading-relaxed">
            I&apos;m a full-stack developer with ~2 years of hands-on experience
            building production-grade applications for government systems and
            enterprise platforms. My focus is on creating scalable,
            data-intensive systems that are performant, maintainable, and
            user-centric.
          </p>

          <p className="text-lg font-sans text-text-light/80 dark:text-text-dark/80 leading-relaxed">
            Currently at PT. Eka Abhipraya Semesta, I&apos;ve architected and
            built mission-critical systems like Korlantas Polri (social media
            monitoring for Indonesian police), Cipta Karya (infrastructure
            dashboard for Ministry of Public Works), and QOLA (enterprise social
            listening platform). These experiences have deeply shaped my
            approach to system design, API architecture, and performance
            optimization.
          </p>

          <p className="text-lg font-sans text-text-light/80 dark:text-text-dark/80 leading-relaxed">
            I specialize in building complex data-intensive applications using
            React, Vue.js, NestJS, and modern database solutions. I&apos;m
            passionate about clean architecture, mentoring junior developers,
            and exploring the cutting edge of full-stack development.
          </p>

          {/* Stats */}
          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-3 gap-4 pt-8">
            {[
              { number: "~2", label: "Years Experience" },
              { number: "3", label: "Major Systems" },
              { number: "1M+", label: "Daily Requests" },
            ].map((stat) => (
              <motion.div
                key={stat.label}
                variants={staggerItem}
                whileHover={{ y: -4 }}
                className="text-center p-4 rounded-lg bg-gradient-subtle dark:bg-gradient-subtle-dark border border-tertiary-light dark:border-tertiary-dark hover:border-accent/50 transition-all duration-200">
                <p className="text-3xl font-heading font-bold text-accent">
                  {stat.number}
                </p>
                <p className="text-sm text-text-light/70 dark:text-text-dark/70 mt-2">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right: Key Points */}
        <motion.div variants={staggerContainer} className="space-y-6">
          {[
            {
              title: "Data-Intensive Systems",
              description:
                "Built systems processing millions of records daily with optimized queries and caching strategies.",
            },
            {
              title: "Modern Frontend Stack",
              description:
                "Expert in React, Vue.js, and Next.js with strong focus on performance, state management, and UX.",
            },
            {
              title: "Scalable Backend Architecture",
              description:
                "Designed REST APIs and GraphQL services using NestJS with Prisma ORM for MySQL & PostgreSQL.",
            },
            {
              title: "System Integration & APIs",
              description:
                "Deep experience integrating multiple platforms, managing complex data pipelines, and API design.",
            },
          ].map((item) => (
            <motion.div
              key={item.title}
              variants={staggerItem}
              whileHover={{
                y: -4,
                boxShadow: "0 10px 30px rgba(5, 150, 105, 0.1)",
              }}
              className="p-6 rounded-lg bg-gradient-subtle dark:bg-gradient-subtle-dark border border-tertiary-light dark:border-tertiary-dark hover:border-accent/50 transition-all duration-200">
              <h3 className="font-semibold font-heading text-lg mb-2 text-accent">
                {item.title}
              </h3>
              <p className="text-text-light/70 dark:text-text-dark/70 text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </SectionWrapper>
  );
}
