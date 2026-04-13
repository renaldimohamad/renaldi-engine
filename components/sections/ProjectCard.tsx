"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface ProjectCardProps {
  title: string;
  subtitle: string;
  description: string;
  tech: string[];
  image: string;
  links: {
    github?: string;
    live?: string;
  };
  impact: string[];
}

export default function ProjectCard({ project }: { project: ProjectCardProps }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative grid lg:grid-cols-2 gap-8 lg:gap-12 items-center p-6 md:p-8 rounded-3xl border bg-card/50 hover:bg-card hover:shadow-2xl transition-all"
    >
      <div className="space-y-6">
        <div>
          <h3 className="text-2xl md:text-3xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
          <p className="text-base md:text-lg font-medium text-muted-foreground">{project.subtitle}</p>
        </div>

        <p className="text-muted-foreground leading-relaxed">
          {project.description}
        </p>

        <div className="space-y-4">
          <h4 className="text-sm font-bold uppercase tracking-widest text-foreground/70">Key Impact</h4>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {project.impact.map((item, i) => (
              <li key={i} className="flex items-center gap-2 text-sm text-foreground/80">
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <Badge key={t} variant="secondary" className="bg-primary/5 border-primary/10">{t}</Badge>
          ))}
        </div>

        <div className="flex gap-4 pt-4">
          <Button size="sm" className="gap-2" asChild>
            <Link href={project.links.live || "#"} target="_blank">
              <ExternalLink className="w-4 h-4" /> Live Demo
            </Link>
          </Button>
          <Button size="sm" variant="outline" className="gap-2" asChild>
            <Link href={project.links.github || "#"} target="_blank">
              <Github className="w-4 h-4" /> Source
            </Link>
          </Button>
        </div>
      </div>

      <div className="relative aspect-video rounded-2xl overflow-hidden border shadow-inner">
        {/* Placeholder for project image */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-transparent opacity-50 group-hover:opacity-100 transition-opacity" />
        <div className="absolute inset-0 flex items-center justify-center font-bold text-muted-foreground/20 text-4xl">
          {project.title}
        </div>
        {/* Real image would go here: <Image src={project.image} alt={project.title} fill className="object-cover" /> */}
      </div>
    </motion.div>
  );
}
