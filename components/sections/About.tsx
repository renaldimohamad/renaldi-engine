"use client";

import SectionWrapper from "@/components/SectionWrapper";
import { Database, Layout, Server, Sparkles } from "lucide-react";

export default function About() {
  const focuses = [
    {
      icon: <Layout className="w-5 h-5" />,
      title: "Frontend Excellence",
      description: "Building immersive interfaces using React, Vue, and Next.js with deep attention to UX and performance."
    },
    {
      icon: <Server className="w-5 h-5" />,
      title: "Robust Backends",
      description: "Architecting scalable server-side systems with NestJS, Node.js, and modern API standards."
    },
    {
      icon: <Database className="w-5 h-5" />,
      title: "Data Operations",
      description: "Managing complex data-intensive systems, processing millions of records for government-level software."
    },
    {
      icon: <Sparkles className="w-5 h-5" />,
      title: "Systems Thinking",
      description: "Bridging the gap between business logic and technical implementation for production-ready products."
    }
  ];

  return (
    <SectionWrapper 
      id="about" 
      title="About Me" 
      subtitle="Engineering digital solutions with precision and expertise."
    >
      <div className="grid lg:grid-cols-2 gap-16 items-start">
        <div className="space-y-8">
          <div className="space-y-4">
            <p className="text-xl text-foreground font-medium">
              I am a Fullstack Engineer dedicated to building high-performance, 
              scalable software systems.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              With ~2 years of experience focusing on production-grade applications, 
              I have developed a deep expertise in navigating complex technical 
              landscapes, specifically within large-scale government systems 
              and enterprise infrastructure.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              My journey involves architecting systems that process massive data streams 
              daily, ensuring reliability, speed, and clean code architecture. I thrive at 
              the intersection of backend efficiency and frontend elegance.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 pt-4">
            <div>
              <div className="text-4xl font-bold mb-1">02+</div>
              <div className="text-xs text-muted-foreground uppercase tracking-widest font-semibold">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-1">10+</div>
              <div className="text-xs text-muted-foreground uppercase tracking-widest font-semibold">Major Projects</div>
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {focuses.map((focus, index) => (
            <div 
              key={index}
              className="p-6 rounded-2xl border bg-card hover:bg-accent transition-colors group"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                {focus.icon}
              </div>
              <h3 className="font-bold mb-2">{focus.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {focus.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
