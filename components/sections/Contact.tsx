"use client";

import { useState } from "react";
import SectionWrapper from "@/components/SectionWrapper";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Send } from "lucide-react";
import Link from "next/link";

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const socials = [
    { icon: <Github className="w-5 h-5" />, label: "GitHub", href: "https://github.com/renaldimohamad", value: "github.com/renaldimohamad" },
    { icon: <Linkedin className="w-5 h-5" />, label: "LinkedIn", href: "https://linkedin.com/in/renaldimohamad", value: "linkedin.com/in/renaldimohamad" },
    { icon: <Mail className="w-5 h-5" />, label: "Email", href: "mailto:hello@renaldi.me", value: "hello@renaldi.me" }
  ];

  return (
    <SectionWrapper 
      id="contact" 
      title="Contact" 
      subtitle="Let's build something exceptional together."
    >
      <div className="grid lg:grid-cols-2 gap-16">
        <div className="space-y-8">
          <div>
            <h3 className="text-3xl font-bold mb-4">Get in touch</h3>
            <p className="text-muted-foreground text-lg leading-relaxed">
              I&apos;m currently open to new opportunities and collaborations. 
              Whether you have a specific project in mind or just want to chat 
              about tech, feel free to reach out.
            </p>
          </div>

          <div className="grid gap-4">
            {socials.map((social, i) => (
              <Link 
                key={i} 
                href={social.href}
                className="flex items-center gap-4 p-4 rounded-2xl border bg-card hover:bg-accent transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  {social.icon}
                </div>
                <div>
                  <div className="text-sm font-bold uppercase tracking-wider text-muted-foreground opacity-50">{social.label}</div>
                  <div className="font-medium">{social.value}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="p-8 md:p-10 rounded-3xl border bg-card/50">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Name</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 rounded-xl border bg-background focus:ring-2 focus:ring-primary outline-none transition-all"
                  placeholder="Your name"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Email</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 rounded-xl border bg-background focus:ring-2 focus:ring-primary outline-none transition-all"
                  placeholder="name@email.com"
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Message</label>
              <textarea 
                rows={4}
                className="w-full px-4 py-3 rounded-xl border bg-background focus:ring-2 focus:ring-primary outline-none transition-all resize-none"
                placeholder="How can I help?"
                required
              />
            </div>
            <Button size="lg" className="w-full gap-2 py-6 rounded-xl text-md" type="submit">
              {isSubmitted ? "Message Sent!" : (
                <>Send Message <Send className="w-4 h-4" /></>
              )}
            </Button>
          </form>
        </div>
      </div>
    </SectionWrapper>
  );
}
