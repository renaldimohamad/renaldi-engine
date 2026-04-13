"use client";

import SectionWrapper from "@/components/SectionWrapper";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const projects = [
    {
      title: "Korlantas Polri",
      subtitle: "Social Media Monitoring System",
      description: "A large-scale production system for the Indonesian National Police. Architected for real-time monitoring of millions of data points, providing actionable intelligence and threat detection.",
      tech: ["React", "NestJS", "GraphQL", "Redis", "PostgreSQL", "D3.js"],
      image: "/images/korlantas.jpg", // Placeholder until generated
      impact: ["Analyzes 5M+ posts daily", "Real-time threat detection", "99.9% System Uptime"],
      links: { github: "https://github.com", live: "https://example.com" }
    },
    {
      title: "Cipta Karya Dashboard",
      subtitle: "National Infrastructure Tracker",
      description: "Comprehensive dashboard for the Ministry of Public Works. Streamlines project oversight for thousands of infrastructure sites across Indonesia with real-time mapping and reporting.",
      tech: ["Vue.js", "NestJS", "Prisma", "PostgreSQL", "Mapbox", "TypeScript"],
      image: "/images/cipta-karya.jpg",
      impact: ["Tracks 2,000+ Projects", "Automated Reporting", "40% Faster Oversight"],
      links: { github: "https://github.com", live: "https://example.com" }
    },
    {
      title: "QOLA Platform",
      subtitle: "Enterprise Data Intelligence",
      description: "High-performance enterprise platform for brand intelligence. Leverages advanced analytics to provide sentiment analysis and market insights at scale.",
      tech: ["React", "Vue", "TypeScript", "WebSocket", "Node.js", "MySQL"],
      image: "/images/qola.jpg",
      impact: ["10M+ Mentions Processed", "94% Analysis Accuracy", "Sub-100ms Latency"],
      links: { github: "https://github.com", live: "https://example.com" }
    }
  ];

  return (
    <SectionWrapper 
      id="projects" 
      title="Projects" 
      subtitle="Selected work from my professional portfolio."
    >
      <div className="flex flex-col gap-12">
        {projects.map((p, i) => (
          <ProjectCard key={i} project={p} />
        ))}
      </div>
    </SectionWrapper>
  );
}
