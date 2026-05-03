"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/SectionWrapper";
import { Building2, Calendar, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

export default function Experience() {
  const { t } = useLanguage();
  const jobs = t("experience.jobs");

  return (
    <SectionWrapper
      id="experience"
      title={t("experience.title")}
      subtitle={t("experience.subtitle")}
    >
      <div className="relative max-w-4xl mx-auto">
        {/* Vertical Line */}
        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-brand/50 via-brand/20 to-transparent -translate-x-1/2 hidden md:block" />

        <div className="space-y-12 md:space-y-24">
          {jobs.map((exp: any, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={index % 2 === 0 ? "relative flex flex-col md:flex-row gap-8 items-start" : "relative flex flex-col md:flex-row-reverse gap-8 items-start"}
            >
              {/* Desktop Period & Company (Side) */}
              <div className="md:w-1/2 flex flex-col md:items-end md:text-right gap-1 px-4">
                <div className="flex items-center gap-2 text-brand md:justify-end">
                  <Calendar className="w-4 h-4" />
                  <span className="text-[10px] md:text-sm font-bold tracking-wider uppercase">{exp.period}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground md:justify-end">
                  <Building2 className="w-4 h-4" />
                  <span className="text-sm md:font-medium">{exp.company}</span>
                </div>
              </div>

              {/* Central Node */}
              <div className="absolute left-0 md:left-1/2 top-0 -translate-x-1/2 w-8 h-8 rounded-full bg-background border-2 border-brand flex items-center justify-center z-10 shadow-[0_0_15px_hsl(var(--brand)/0.3)] hidden md:flex">
                <div className="w-2 h-2 rounded-full bg-brand animate-pulse" />
              </div>

              {/* Content Card */}
              <div className="md:w-1/2 w-full">
                <div className="p-6 md:p-8 rounded-3xl border bg-card/50 backdrop-blur-md hover:border-brand/30 transition-all group">
                  <div className="md:hidden flex flex-col gap-3 mb-6">
                    <div className="flex items-center gap-2 text-brand">
                      <Calendar className="w-4 h-4" />
                      <span className="text-xs font-bold uppercase tracking-wider">{exp.period}</span>
                    </div>
                  </div>

                  <h3 className="text-lg md:text-xl font-bold mb-3">{exp.role}</h3>
                  <p className="text-sm md:text-muted-foreground mb-6 leading-relaxed">
                    {exp.description}
                  </p>

                  <div className="space-y-3">
                    {exp.achievements.map((item: string, i: number) => (
                      <div key={i} className="flex items-start gap-3 text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                        <CheckCircle2 className="w-4 h-4 text-brand shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
