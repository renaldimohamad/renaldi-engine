"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionWrapper from "@/components/SectionWrapper";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Send } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/lib/i18n";

export default function Contact() {
  const { t } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{ type: 'success' | 'error', message: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message'),
      honeypot: formData.get('confirm_email'),
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || t("contact.form.error"));
      }

      setStatus({ type: 'success', message: t("contact.form.success") });
      (e.target as HTMLFormElement).reset();
    } catch (err: any) {
      setStatus({ type: 'error', message: err.message || t("contact.form.error") });
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setStatus(null), 5000);
    }
  };

  const socials = [
    { icon: <Github className="w-5 h-5" />, label: t("nav.contact") === "Kontak" ? "GitHub" : "GitHub", href: "https://github.com/renaldimohamad", value: "github.com/renaldimohamad" },
    { icon: <Linkedin className="w-5 h-5" />, label: "LinkedIn", href: "https://www.linkedin.com/in/renaldimohamad/", value: "linkedin.com/renaldimohamad" },
    { icon: <Mail className="w-5 h-5" />, label: "Email", href: "mailto:renaldimohamad77@gmail.com", value: "renaldimohamad77@gmail.com" }
  ];

  return (
    <SectionWrapper
      id="contact"
      title={t("contact.title")}
      subtitle={t("contact.subtitle")}
    >
      <div className="grid lg:grid-cols-2 gap-16">
        <div className="space-y-8">
          <div>
            <h3 className="text-xl md:text-2xl font-bold mb-4">{t("contact.getInTouch")}</h3>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
              {t("contact.description")}
            </p>
          </div>

          <div className="grid gap-4">
            {socials.map((social, i) => (
              <Link
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl border bg-card hover:bg-card/80 hover:border-brand/30 hover:shadow-[0_0_20px_hsl(var(--brand)/0.05)] transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-brand/10 flex items-center justify-center text-brand group-hover:bg-brand group-hover:text-brand-foreground transition-colors">
                  {social.icon}
                </div>
                <div>
                  <div className="text-[10px] md:text-sm font-bold uppercase tracking-wider text-muted-foreground opacity-50">{social.label}</div>
                  <div className="text-sm md:text-base font-medium">{social.value}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="p-8 md:p-10 rounded-3xl border bg-card/50 relative overflow-hidden">
          {/* Status Overlay */}
          <AnimatePresence>
            {status && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className={cn(
                  "absolute top-0 left-0 right-0 p-4 text-center text-sm font-bold z-10",
                  status.type === 'success' ? "bg-green-500/10 text-green-500" : "bg-destructive/10 text-destructive"
                )}
              >
                {status.message}
              </motion.div>
            )}
          </AnimatePresence>

          <form onSubmit={handleSubmit} className="space-y-6 pt-8">
            <input type="text" name="confirm_email" className="hidden" tabIndex={-1} autoComplete="off" />
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">{t("contact.form.name")}</label>
                <input
                  type="text"
                  name="name"
                  className="w-full px-4 py-3 rounded-xl border bg-background focus:ring-2 focus:ring-brand/50 focus:border-brand/50 outline-none transition-all"
                  placeholder={t("contact.form.namePlaceholder")}
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">{t("contact.form.email")}</label>
                <input
                  type="email"
                  name="email"
                  className="w-full px-4 py-3 rounded-xl border bg-background focus:ring-2 focus:ring-brand/50 focus:border-brand/50 outline-none transition-all"
                  placeholder={t("contact.form.emailPlaceholder")}
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">{t("contact.form.message")}</label>
              <textarea
                rows={4}
                name="message"
                className="w-full px-4 py-3 rounded-xl border bg-background focus:ring-2 focus:ring-brand/50 focus:border-brand/50 outline-none transition-all resize-none"
                placeholder={t("contact.form.messagePlaceholder")}
                required
              />
            </div>
            <Button
              size="lg"
              className="w-full gap-2 h-11 md:h-14 rounded-xl text-sm md:text-base font-bold"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                  {t("contact.form.sending")}
                </div>
              ) : (
                <>{t("contact.form.send")} <Send className="w-4 h-4" /></>
              )}
            </Button>
          </form>
        </div>
      </div>
    </SectionWrapper>
  );
}
