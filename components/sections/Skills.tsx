"use client";

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

export default function Skills() {
  const categories = [
    {
      title: "Frontend",
      icon: <Layout className="w-5 h-5" />,
      skills: ["React", "Next.js", "Vue.js", "TypeScript", "Tailwind CSS", "Framer Motion", "TanStack Query"]
    },
    {
      title: "Backend",
      icon: <Server className="w-5 h-5" />,
      skills: ["Node.js", "NestJS", "Express", "GraphQL", "REST APIs", "Microservices"]
    },
    {
      title: "Database",
      icon: <Database className="w-5 h-5" />,
      skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Prisma ORM", "TypeORM"]
    },
    {
      title: "State Management",
      icon: <Layers className="w-5 h-5" />,
      skills: ["Zustand", "Pinia", "Redux", "Context API", "Vuex"]
    },
    {
      title: "Tools & DevOps",
      icon: <Wrench className="w-5 h-5" />,
      skills: ["Git", "Docker", "CI/CD", "Linux", "Vercel", "Postman", "Figma"]
    },
    {
      title: "Specialties",
      icon: <Code2 className="w-5 h-5" />,
      skills: ["Data Monitoring", "System Design", "UI/UX Architecture", "Performance Optimization"]
    }
  ];

  return (
    <SectionWrapper 
      id="skills" 
      title="Skills" 
      subtitle="Comprehensive toolkit for developing modern applications."
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((cat, i) => (
          <div 
            key={i}
            className="p-8 rounded-3xl border bg-card hover:bg-accent hover:border-primary/20 transition-all group"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                {cat.icon}
              </div>
              <h3 className="text-xl font-bold">{cat.title}</h3>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill) => (
                <Badge 
                  key={skill} 
                  variant="secondary"
                  className="bg-background border-border text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all cursor-default py-1 px-3"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
