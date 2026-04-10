"use client";

import SectionWrapper from "@/components/SectionWrapper";
import { motion } from "framer-motion";
import {
  staggerContainer,
  staggerItem,
  fadeInUp,
  cardHover,
} from "@/lib/animations";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Korlantas Polri",
      subtitle: "Social Media Monitoring System",
      description:
        "Real-time social media monitoring platform for Indonesian National Police (Korlantas Polri) to monitor millions of social media posts for security threats, sentiment analysis, and public opinion tracking.",
      longDescription:
        "A production-ready system built for government agencies to monitor social media conversations across platforms. The platform processes millions of posts daily with real-time analysis, threat detection, and comprehensive dashboards for data-driven decision making.",
      problem:
        "Government agencies needed real-time visibility into social media conversations for public safety, threat detection, and crisis management without latency or data loss.",
      solution:
        "Built end-to-end system with distributed data ingestion, real-time stream processing, ML-powered sentiment analysis, and interactive dashboards with advanced filtering capabilities.",
      impact: [
        "Processes 5M+ posts daily",
        "99.9% system uptime",
        "65% faster threat detection",
        "Reduced manual analysis by 80%",
      ],
      technologies: [
        "React",
        "Node.js",
        "NestJS",
        "PostgreSQL",
        "Redis",
        "GraphQL",
        "TypeScript",
        "D3.js",
      ],
      image: "/images/korlantas.jpg",
      color: "from-info to-info-light",
    },
    {
      id: 2,
      title: "Cipta Karya",
      subtitle: "Infrastructure Project Dashboard",
      description:
        "Comprehensive dashboard for Indonesia's Ministry of Public Works (Kementerian PU - Cipta Karya) to track, monitor, and report infrastructure projects nationwide with real-time updates and advanced analytics.",
      longDescription:
        "A centralized project management and reporting system for tracking thousands of infrastructure projects across Indonesia. Provides government officials with unified visibility, real-time status updates, and actionable insights for project oversight.",
      problem:
        "Ministry lacked unified visibility into thousands of infrastructure projects distributed across regions with no real-time status updates or comprehensive reporting capabilities.",
      solution:
        "Designed and built centralized dashboard with interactive maps, advanced filtering, automated reporting, and data synchronization across multiple sources and stakeholders.",
      impact: [
        "Tracks 2,000+ active projects",
        "Real-time status updates",
        "Automated monthly reports",
        "40% faster decision making",
      ],
      technologies: [
        "Vue.js",
        "NestJS",
        "GraphQL",
        "PostgreSQL",
        "Prisma",
        "TypeScript",
        "Mapbox",
      ],
      image: "/images/cipta-karya.jpg",
      color: "from-success to-success-light",
    },
    {
      id: 3,
      title: "QOLA Platform",
      subtitle: "Enterprise Social Media Intelligence",
      description:
        "Enterprise-grade platform for brands and organizations to monitor, analyze, and respond to social media conversations with AI-powered insights, sentiment analysis, and competitor tracking.",
      longDescription:
        "Developed a comprehensive social media intelligence platform enabling brands to understand audience sentiment, track campaign performance, identify market opportunities, and manage brand reputation at scale.",
      problem:
        "Enterprise brands needed intelligent tools to understand social media conversations, track competitor activity, and respond to market trends in real-time.",
      solution:
        "Built ML-powered platform with real-time social monitoring, advanced sentiment analysis, competitor tracking, automated alerts, and actionable recommendations for brand management.",
      impact: [
        "Monitors 10M+ social mentions",
        "ML accuracy: 94%",
        "Serves 500+ enterprise clients",
        "<100ms response time",
      ],
      technologies: [
        "React",
        "Vue.js",
        "TypeScript",
        "NestJS",
        "PostgreSQL",
        "Redis",
        "WebSocket",
        "Machine Learning",
      ],
      image: "/images/qola.jpg",
      color: "from-highlight to-highlight-light",
    },
  ];

  return (
    <SectionWrapper
      id="projects"
      title="Projects"
      subtitle="Production systems I've architected and built">
      <motion.div
        className="space-y-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "0px 0px -100px 0px" }}
        variants={staggerContainer}>
        {projects.map((project, idx) => (
          <motion.div key={project.id} variants={staggerItem} className="group">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <motion.div
                className={`order-2 md:order-${idx % 2 === 0 ? "1" : "2"}`}
                variants={fadeInUp}>
                <div className="mb-4">
                  <h3 className="text-3xl font-heading font-bold text-text-light dark:text-text-dark mb-2">
                    {project.title}
                  </h3>
                  <p className="text-lg text-accent font-semibold">
                    {project.subtitle}
                  </p>
                </div>

                <p className="text-text-light/80 dark:text-text-dark/80 mb-6 leading-relaxed">
                  {project.longDescription}
                </p>

                {/* Problem & Solution */}
                <motion.div
                  className="space-y-4 mb-6"
                  variants={staggerContainer}>
                  <motion.div
                    variants={staggerItem}
                    whileHover={{
                      y: -2,
                    }}
                    className="p-4 rounded-lg bg-gradient-subtle dark:bg-gradient-subtle-dark border border-tertiary-light dark:border-tertiary-dark hover:border-accent/50 hover:shadow-xl hover:shadow-success/10 transition-all duration-200">
                    <h4 className="font-semibold text-accent mb-2">Problem</h4>
                    <p className="text-text-light/70 dark:text-text-dark/70 text-sm leading-relaxed">
                      {project.problem}
                    </p>
                  </motion.div>
                  <motion.div
                    variants={staggerItem}
                    whileHover={{
                      y: -2,
                    }}
                    className="p-4 rounded-lg bg-gradient-subtle dark:bg-gradient-subtle-dark border border-tertiary-light dark:border-tertiary-dark hover:border-accent/50 hover:shadow-xl hover:shadow-success/10 transition-all duration-200">
                    <h4 className="font-semibold text-accent mb-2">Solution</h4>
                    <p className="text-text-light/70 dark:text-text-dark/70 text-sm leading-relaxed">
                      {project.solution}
                    </p>
                  </motion.div>
                </motion.div>

                {/* Impact */}
                <div className="mb-6">
                  <h4 className="font-semibold mb-3 text-text-light dark:text-text-dark">
                    Impact:
                  </h4>
                  <motion.ul
                    className="grid grid-cols-2 gap-3"
                    variants={staggerContainer}>
                    {project.impact.map((item, i) => (
                      <motion.li
                        key={i}
                        variants={staggerItem}
                        className="flex items-center space-x-2 text-sm text-text-light/70 dark:text-text-dark/70 hover:text-accent transition-colors">
                        <span className="text-accent">→</span>
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </motion.ul>
                </div>

                {/* Tech Stack */}
                <div>
                  <h4 className="font-semibold font-heading mb-3">
                    Tech Stack
                  </h4>
                  <motion.div
                    className="flex flex-wrap gap-2"
                    variants={staggerContainer}>
                    {project.technologies.map((tech) => (
                      <motion.span
                        key={tech}
                        variants={staggerItem}
                        whileHover={{ scale: 1.08, y: -2 }}
                        className="px-3 py-1.5 text-xs font-medium rounded-full bg-accent/10 dark:bg-accent/15 text-accent border border-accent/30 hover:border-accent hover:bg-accent/20 dark:hover:bg-accent/25 transition-all duration-200 cursor-default">
                        {tech}
                      </motion.span>
                    ))}
                  </motion.div>
                </div>
              </motion.div>

              {/* Image Placeholder */}
              <motion.div
                className={`order-1 md:order-${idx % 2 === 0 ? "2" : "1"} relative`}
                variants={fadeInUp}
                whileHover={{ scale: 1.02 }}>
                <div
                  className={`h-80 rounded-lg bg-gradient-to-br ${project.color} opacity-5 group-hover:opacity-10 transition-opacity duration-500`}
                />
                <div className="absolute inset-0 rounded-lg border border-tertiary-light dark:border-tertiary-dark flex items-center justify-center group-hover:border-accent/50 transition-colors duration-300 bg-gradient-subtle dark:bg-gradient-subtle-dark">
                  <p className="text-text-light/20 dark:text-text-dark/20 font-semibold">
                    {project.title}
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Divider */}
            {idx < projects.length - 1 && (
              <motion.div
                className="my-12 h-px bg-gradient-to-r from-transparent via-tertiary-light dark:via-tertiary-dark to-transparent"
                initial={{ opacity: 0, scaleX: 0 }}
                whileInView={{ opacity: 1, scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
              />
            )}
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
