"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/SectionWrapper";
import { Badge } from "@/components/ui/badge";
import {
  Code2,
  Database,
  Layers,
  Layout,
  Server,
  Wrench
} from "lucide-react";
import { useLanguage } from "@/lib/i18n";

export default function Skills() {
  const { t } = useLanguage();

  const categories = [
    {
      title: t("skills.categories.frontend"),
      icon: <Layout className="w-5 h-5" />,
      skills: ["React", "Next.js", "Vue.js", "TypeScript", "Tailwind CSS", "Framer Motion", "TanStack Query"]
    },
    {
      title: t("skills.categories.backend"),
      icon: <Server className="w-5 h-5" />,
      skills: ["Node.js", "NestJS", "Express", "GraphQL", "REST APIs", "Microservices"]
    },
    {
      title: t("skills.categories.database"),
      icon: <Database className="w-5 h-5" />,
      skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Prisma ORM", "TypeORM"]
    },
    {
      title: t("skills.categories.state"),
      icon: <Layers className="w-5 h-5" />,
      skills: ["Zustand", "Pinia", "Redux", "Context API", "Vuex"]
    },
    {
      title: t("skills.categories.tools"),
      icon: <Wrench className="w-5 h-5" />,
      skills: ["Git", "Docker", "CI/CD", "Linux", "Vercel", "Postman", "Figma"]
    },
    {
      title: t("skills.categories.specialties"),
      icon: <Code2 className="w-5 h-5" />,
      skills: ["Data Monitoring", "System Design", "UI/UX Architecture", "Performance Optimization"]
    }
  ];

  return (
    <SectionWrapper
      id="skills"
      title={t("skills.title")}
      subtitle={t("skills.subtitle")}
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((cat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="p-6 md:p-8 rounded-2xl md:rounded-3xl border bg-card hover:bg-card/60 hover:border-brand/30 hover:shadow-[0_0_30px_hsl(var(--brand)/0.1)] transition-all group cursor-pointer"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-brand/10 flex items-center justify-center text-brand group-hover:bg-brand group-hover:text-brand-foreground transition-colors">
                {cat.icon}
              </div>
              <h3 className="text-base md:text-lg font-bold">{cat.title}</h3>
            </div>

            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill) => (
                <Badge
                  key={skill}
                  variant="secondary"
                  className="bg-background border-border text-foreground hover:bg-brand hover:text-brand-foreground hover:border-brand transition-all cursor-default py-1 px-3"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
