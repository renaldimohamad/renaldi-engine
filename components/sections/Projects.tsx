"use client";

import SectionWrapper from "@/components/SectionWrapper";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const projects = [
    {
      title: "Korlantas Polri",
      subtitle: "Monitoring Media Korlantas",
      description: "A comprehensive social media and news monitoring system for the Indonesian National Police. Architected for real-time tracking, sentiment analysis, and actionable insights for public safety.",
      tech: [
        "React",
        "TypeScript",
        "Vite",
        "Material UI",
        "Redux Toolkit",
        "Apollo Client",
        "GraphQL",
        "Axios",
        "ApexCharts",
        "D3.js",
        "Framer Motion"
      ],
      image: "/images/korlantas.png",
      impact: [
        "Real-time threat detection",
        "Sentiment monitoring",
        "Nationwide scalability"
      ],
      links: {
        github: "#",
        live: "https://monitoringmediakorlantaspolri.id"
      }
    },
    {
      title: "Cipta Karya PU",
      subtitle: "Satu Cipta Karya Dashboard",
      description: "A centralized infrastructure monitoring dashboard for the Ministry of Public Works (Cipta Karya). Built with modern React architecture to manage large-scale project data, geospatial visualization, and real-time reporting across thousands of infrastructure projects.",
      tech: [
        "Next.js 15",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "React Query",
        "Zustand",
        "React Hook Form + Zod",
        "Leaflet",
        "ECharts",
        "Chart.js",
        "D3 (Geo & Scale)",
        "Axios",
        "Socket.IO",
        "Framer Motion",
        "Radix UI"
      ],
      image: "/images/satu_ck.png",
      impact: [
        "Large-scale infrastructure monitoring",
        "Geospatial data visualization",
        "Real-time data synchronization"
      ],
      links: {
        github: "#",
        live: "https://satuck.ciptakarya.pu.go.id"
      }
    },
    {
      title: "QOLA Platform",
      subtitle: "Data Intelligence & Sentiment AI",
      description: "Advanced enterprise-grade platform for brand intelligence and sentiment processing. Built with modern SSR architecture to deliver real-time insights, multilingual support, and scalable data visualization.",
      tech: [
        "Nuxt 4",
        "Vue 3",
        "TypeScript",
        "Pinia",
        "Apollo GraphQL",
        "ApexCharts",
        "Vue Word Cloud",
        "Tailwind CSS",
        "Nuxt UI",
        "i18n",
        "VeeValidate + Yup"
      ],
      image: "/images/qola.png",
      impact: [
        "Real-time media intelligence",
        "Multilingual sentiment analysis",
        "Scalable data visualization"
      ],
      links: {
        github: "#",
        live: "https://dashboard.qola.id"
      }
    }
  ];

  return (
    <SectionWrapper
      id="projects"
      title="Featured Projects"
      subtitle="Selected work from my professional portfolio, ranging from government dashboards to AI platforms."
    >
      <div className="flex flex-col gap-12">
        {projects.map((p, i) => (
          <ProjectCard key={i} project={p} />
        ))}
      </div>
    </SectionWrapper>
  );
}
