"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/SectionWrapper";
import { Database, Layout, Server, Sparkles } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

export default function About() {
  const { t } = useLanguage();

  const focuses = [
    {
      icon: <Layout className="w-5 h-5" />,
      title: t("about.focus.frontend.title"),
      description: t("about.focus.frontend.desc")
    },
    {
      icon: <Server className="w-5 h-5" />,
      title: t("about.focus.backend.title"),
      description: t("about.focus.backend.desc")
    },
    {
      icon: <Database className="w-5 h-5" />,
      title: t("about.focus.database.title"),
      description: t("about.focus.database.desc")
    },
    {
      icon: <Sparkles className="w-5 h-5" />,
      title: t("about.focus.systems.title"),
      description: t("about.focus.systems.desc")
    }
  ];

  return (
    <SectionWrapper
      id="about"
      title={t("about.title")}
      subtitle={t("about.subtitle")}
    >
      <div className="grid lg:grid-cols-2 gap-16 items-start">
        <div className="space-y-8">
          <div className="space-y-4">
            <p className="text-base md:text-lg text-foreground font-medium">
              {t("about.description1")}
            </p>
            <p className="text-sm md:text-muted-foreground leading-relaxed">
              {t("about.description2")}
            </p>
            <p className="text-sm md:text-muted-foreground leading-relaxed">
              {t("about.description3")}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 pt-4">
            <div>
              <div className="text-2xl md:text-3xl font-bold mb-1">02+</div>
              <div className="text-[9px] md:text-[10px] text-muted-foreground uppercase tracking-widest font-semibold">{t("about.stats.experience")}</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold mb-1">10+</div>
              <div className="text-[9px] md:text-[10px] text-muted-foreground uppercase tracking-widest font-semibold">{t("about.stats.projects")}</div>
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {focuses.map((focus, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-5 md:p-6 rounded-2xl border bg-card hover:bg-card/80 hover:border-brand/30 hover:shadow-[0_0_20px_hsl(var(--brand)/0.05)] transition-all group cursor-pointer"
            >
              <div className="w-10 h-10 rounded-lg bg-brand/10 flex items-center justify-center mb-4 text-brand group-hover:bg-brand group-hover:text-brand-foreground transition-colors">
                {focus.icon}
              </div>
              <h3 className="text-base md:font-bold mb-2 font-bold">{focus.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {focus.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
