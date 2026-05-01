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
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="group relative grid lg:grid-cols-2 gap-12 lg:gap-16 items-center p-8 md:p-12 rounded-[2.5rem] glass-card glow-border overflow-hidden cursor-pointer"
    >
      {/* Background Decorative Glow */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-brand/10 blur-[120px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

      <div className="space-y-8 order-2 lg:order-1 relative z-20">
        <div className="space-y-3">
          <Link
            href={project.links.live || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <h3 className="text-2xl md:text-4xl font-black tracking-tighter group-hover:text-brand transition-colors duration-500">{project.title}</h3>
          </Link>
          <div className="flex items-center gap-3">
            <div className="h-px w-8 bg-brand/50" />
            <p className="text-base md:text-lg font-semibold text-brand/80 uppercase tracking-widest">{project.subtitle}</p>
          </div>
        </div>

        <p className="text-muted-foreground/80 text-base leading-relaxed max-w-xl">
          {project.description}
        </p>

        <div className="space-y-6">
          <div className="flex flex-wrap gap-3">
            {project.tech.map((t) => (
              <Badge key={t} variant="secondary" className="px-4 py-1.5 rounded-full bg-brand/5 border-brand/10 text-muted-foreground/80 font-medium">{t}</Badge>
            ))}
          </div>

          <div className="space-y-4 pt-4">
            <h4 className="text-xs font-black uppercase tracking-[0.3em] text-foreground/40">Results & Impact</h4>
            <ul className="grid grid-cols-1 gap-4">
              {project.impact.map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-sm font-medium text-foreground/70">
                  <div className="w-2 h-2 rounded-full bg-brand shadow-[0_0_10px_hsl(var(--brand))]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-wrap gap-6 pt-6">
          <Button size="lg" className="h-14 px-10 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold shadow-2xl shadow-primary/30 group/btn overflow-hidden relative cursor-pointer" asChild>
            <Link
              href={project.links.live || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="after:absolute after:inset-0 after:z-10"
            >
              <span className="relative z-10 flex items-center gap-2">
                View Live Case <ExternalLink className="w-5 h-5 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
              </span>
            </Link>
          </Button>
          {project.links.github && project.links.github !== "#" && (
            <Button size="lg" variant="outline" className="h-14 px-8 rounded-full border-white/10 hover:bg-white/5 backdrop-blur-sm relative z-30 font-bold cursor-pointer" asChild>
              <Link href={project.links.github} target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5 mr-2" /> Code
              </Link>
            </Button>
          )}
        </div>
      </div>

      <div className="relative aspect-video rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl order-1 lg:order-2 group-hover:scale-[1.03] transition-transform duration-700 ease-out z-20 bg-muted/5">
        <Link href={project.links.live || "#"} target="_blank" rel="noopener noreferrer" className="cursor-pointer">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-contain transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60 z-10" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,hsl(var(--brand)/0.2),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 z-10" />

          <div className="absolute inset-0 flex flex-col items-center justify-center p-12 text-center z-10">
            <h4 className="text-4xl md:text-6xl font-black text-white/10 group-hover:text-brand/20 transition-all duration-1000 uppercase tracking-tighter italic">
              {project.title}
            </h4>
          </div>

          <div className="absolute bottom-8 right-8 bg-primary text-primary-foreground w-16 h-16 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 z-20 shadow-2xl">
            <ExternalLink className="w-8 h-8" />
          </div>
        </Link>
      </div>
    </motion.div>
  );
}
