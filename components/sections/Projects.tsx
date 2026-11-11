"use client";

import SectionWrapper from "@/components/SectionWrapper";
import ProjectCard, { type ProjectCardProps } from "./ProjectCard";
import { useLanguage } from "@/lib/i18n";

export default function Projects() {
  const { t } = useLanguage();
  const projects = t("projects.items") as ProjectCardProps[];

  return (
    <SectionWrapper id="projects" title={t("projects.title")} subtitle={t("projects.subtitle")}>
      <div className="flex flex-col gap-12">
        {projects.map((p, i) => (
          <ProjectCard key={p.title || i} project={p} featured={i === 0} />
        ))}
      </div>
    </SectionWrapper>
  );
}
