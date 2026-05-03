"use client";

import SectionWrapper from "@/components/SectionWrapper";
import ProjectCard from "./ProjectCard";
import { useLanguage } from "@/lib/i18n";

export default function Projects() {
  const { t } = useLanguage();
  const projects = t("projects.items");

  return (
    <SectionWrapper
      id="projects"
      title={t("projects.title")}
      subtitle={t("projects.subtitle")}
    >
      <div className="flex flex-col gap-12">
        {projects.map((p: any, i: number) => (
          <ProjectCard key={i} project={p} />
        ))}
      </div>
    </SectionWrapper>
  );
}
