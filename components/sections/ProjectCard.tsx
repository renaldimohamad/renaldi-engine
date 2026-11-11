"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useId, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

import { useLanguage } from "@/lib/i18n";

export interface ProjectCardProps {
  title: string;
  role?: string;
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

interface ProjectCardComponentProps {
  project: ProjectCardProps;
  featured?: boolean;
}

function isAvailableLink(url?: string) {
  return Boolean(url && url !== "#");
}

export default function ProjectCard({ project, featured = false }: ProjectCardComponentProps) {
  const { t } = useLanguage();
  const shouldReduceMotion = useReducedMotion();
  const [isTechExpanded, setIsTechExpanded] = useState(false);
  const techListId = useId();
  const liveUrl = isAvailableLink(project.links.live) ? project.links.live : undefined;
  const githubUrl = isAvailableLink(project.links.github) ? project.links.github : undefined;
  const visibleTech = project.tech.slice(0, 5);
  const remainingTech = project.tech.length - visibleTech.length;
  const displayedTech = isTechExpanded ? project.tech : visibleTech;

  const imagePreview = (
    <Image
      src={project.image}
      alt={`${project.title} project preview`}
      fill
      className="object-contain transition-transform duration-300 motion-reduce:transition-none"
      sizes="(max-width: 1023px) 100vw, 50vw"
    />
  );

  return (
    <motion.article
      layout={!shouldReduceMotion}
      whileHover={shouldReduceMotion ? undefined : { y: -4 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="group grid items-center gap-8 overflow-hidden rounded-2xl border border-border/80 bg-card/30 p-5 sm:p-7 lg:grid-cols-2 lg:gap-12 lg:p-9">
      <div className="order-2 flex min-w-0 flex-col gap-6 lg:order-1">
        <div className="space-y-3">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
            {featured && <span className="text-brand">{t("projects.featured")}</span>}
            {featured && <span aria-hidden="true" className="h-px w-5 bg-border" />}
            <span>{project.role || project.subtitle}</span>
          </div>

          {liveUrl ? (
            <Link
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4">
              <h3 className="text-2xl font-semibold tracking-tight transition-colors duration-200 group-hover:text-brand sm:text-3xl">
                {project.title}
              </h3>
              <ExternalLink aria-hidden="true" className="h-4 w-4 text-muted-foreground transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          ) : (
            <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">{project.title}</h3>
          )}
        </div>

        <p className="max-w-xl text-sm leading-7 text-muted-foreground sm:text-base">{project.description}</p>

        <div className="space-y-4">
          <ul className="space-y-2.5" aria-label={t("projects.impact")}>
            {project.impact.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-sm leading-6 text-foreground/80">
                <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="border-t border-border/70 pt-4">
            <div className="flex flex-wrap items-center gap-2">
              <motion.div id={techListId} layout={!shouldReduceMotion} className="contents">
                {displayedTech.map((technology) => (
                  <Badge
                    key={technology}
                    variant="outline"
                    className="rounded-md border-border/80 bg-transparent px-2.5 py-1 text-xs font-medium text-muted-foreground">
                    {technology}
                  </Badge>
                ))}
              </motion.div>
              {remainingTech > 0 && (
                <button
                  type="button"
                  aria-expanded={isTechExpanded}
                  aria-controls={techListId}
                  onClick={() => setIsTechExpanded((expanded) => !expanded)}
                  className="min-h-8 rounded-md border border-border/80 bg-transparent px-2.5 text-xs font-medium text-muted-foreground transition-colors hover:bg-muted/60 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                  {isTechExpanded ? t("projects.showLess") : `+${remainingTech} ${t("projects.showMore")}`}
                </button>
              )}
            </div>
          </div>
        </div>

        {(liveUrl || githubUrl) && (
          <div className="flex flex-wrap gap-3 pt-1">
            {liveUrl && (
              <Button
                size="lg"
                className="h-11 rounded-full px-5 text-sm font-semibold shadow-none"
                asChild>
                <Link href={liveUrl} target="_blank" rel="noopener noreferrer">
                  {t("projects.viewLive")} <ExternalLink aria-hidden="true" className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            )}
            {githubUrl && (
              <Button
                size="lg"
                variant="outline"
                className="h-11 rounded-full border-border/80 bg-transparent px-5 text-sm font-semibold shadow-none"
                asChild>
                <Link href={githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github aria-hidden="true" className="mr-2 h-4 w-4" /> {t("projects.code")}
                </Link>
              </Button>
            )}
          </div>
        )}
      </div>

      <div className="relative order-1 aspect-video overflow-hidden rounded-xl border border-border/80 bg-muted/20 lg:order-2">
        {liveUrl ? (
          <Link
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${project.title} live project`}
            className="absolute inset-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-inset">
            {imagePreview}
          </Link>
        ) : (
          imagePreview
        )}
      </div>
    </motion.article>
  );
}
