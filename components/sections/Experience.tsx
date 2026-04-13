"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/SectionWrapper";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Building2, Calendar, CheckCircle2 } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      period: "Feb 2025 - Present",
      role: "Fullstack Engineer",
      company: "PT. Eka Abhipraya Semesta",
      description: "Leading the development of mission-critical systems for government and enterprise clients. Focused on architecting scalable microservices and data-intensive frontend applications.",
      achievements: [
        "Architected and deployed 3 major production systems: Korlantas Polri (Social Media Monitoring), Cipta Karya (Infrastructure Dashboard), and QOLA (Enterprise Listening Platform).",
        "Optimized frontend performance by 40% using advanced patterns in React and Vue.js.",
        "Engineered scalable backend architectures using NestJS, GraphQL, and Prisma.",
        "Implemented robust state management systems managing complex real-time data streams."
      ],
      tech: ["React", "Vue", "NestJS", "GraphQL", "Prisma", "PostgreSQL", "Redis"]
    },
    {
      period: "Jun 2024 - Oct 2024",
      role: "Fullstack Developer Intern",
      company: "PT. Dumbways Teknologi Indonesia",
      description: "Contributed to the development of fullstack web applications within a fast-paced agile environment.",
      achievements: [
        "Collaborated on building end-to-end features for multiple client projects.",
        "Streamlined API integrations between React frontends and Node.js backends.",
        "Participated in rigorous code reviews and architecture planning sessions."
      ],
      tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"]
    }
  ];

  return (
    <SectionWrapper 
      id="experience" 
      title="Experience" 
      subtitle="Career progression and professional impact."
    >
      <div className="relative space-y-12">
        {/* Timeline Line */}
        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2 hidden md:block" />

        {experiences.map((exp, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
          >
            {/* Timeline Dot */}
            <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background -translate-x-1/2 top-0 hidden md:block" />

            {/* Date Column */}
            <div className="md:w-1/2 flex flex-col md:items-end md:text-right gap-1 px-4">
              <div className="flex items-center gap-2 text-primary md:justify-end">
                <Calendar className="w-4 h-4" />
                <span className="text-sm font-bold tracking-wider uppercase">{exp.period}</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground md:justify-end">
                <Building2 className="w-4 h-4" />
                <span className="font-medium">{exp.company}</span>
              </div>
            </div>

            {/* Content Column */}
            <div className="md:w-1/2">
              <div className="p-6 md:p-8 rounded-3xl border bg-card hover:shadow-xl transition-all group">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4">
                    <Briefcase className="w-6 h-6" />
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold mb-3">{exp.role}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {exp.description}
                </p>

                <div className="space-y-3 mb-8">
                  {exp.achievements.map((item, i) => (
                    <div key={i} className="flex gap-3 text-sm leading-relaxed text-foreground/80">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-1" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((t) => (
                    <Badge key={t} variant="secondary">{t}</Badge>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
