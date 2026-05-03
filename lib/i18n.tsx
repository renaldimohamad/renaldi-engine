"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

export type Language = "en" | "id";

type Translations = {
  [key in Language]: {
    [key: string]: any;
  };
};

const translations: Translations = {
  en: {
    nav: {
      about: "About",
      experience: "Experience",
      projects: "Projects",
      skills: "Skills",
      work: "Work",
      contact: "Contact"
    },
    hero: {
      badge: "Engineering Premium Digital Experiences",
      title1: "Architecting",
      title2: "Digital Scale.",
      description: "Renaldi Mohamad is a Fullstack Engineer dedicated to building high-performance, production-ready software with a focus on enterprise systems and scalable data architecture.",
      explore: "Explore Work",
      contact: "Contact Me",
      scroll: "Scroll Down"
    },
    about: {
      title: "About Me",
      subtitle: "Engineering digital solutions with precision and expertise.",
      description1: "I am a Fullstack Engineer dedicated to building high-performance, scalable software systems.",
      description2: "With ~2 years of experience focusing on production-grade applications, I have developed a deep expertise in navigating complex technical landscapes, specifically within large-scale government systems and enterprise infrastructure.",
      description3: "My journey involves architecting systems that process massive data streams daily, ensuring reliability, speed, and clean code architecture. I thrive at the intersection of backend efficiency and frontend elegance.",
      stats: {
        experience: "Years Experience",
        projects: "Major Projects"
      },
      focus: {
        frontend: {
          title: "Frontend Excellence",
          desc: "Building immersive interfaces using React, Vue, and Next.js with deep attention to UX and performance."
        },
        backend: {
          title: "Robust Backends",
          desc: "Architecting scalable server-side systems with NestJS, Node.js, and modern API standards."
        },
        database: {
          title: "Data Operations",
          desc: "Managing complex data-intensive systems, processing millions of records for government-level software."
        },
        systems: {
          title: "Systems Thinking",
          desc: "Bridging the gap between business logic and technical implementation for production-ready products."
        }
      }
    },
    experience: {
      title: "Experience",
      subtitle: "Career progression and professional impact.",
      jobs: [
        {
          period: "Feb 2025 - Present",
          role: "Fullstack Engineer",
          company: "PT. Eka Abhipraya Semesta",
          description: "Leading the development of mission-critical systems for government and enterprise clients. Focused on architecting scalable microservices and data-intensive frontend applications.",
          achievements: [
            "Architected and deployed 3 major production systems: Korlantas Polri (Social Media Monitoring), Cipta Karya (Infrastructure Dashboard), and QOLA (Enterprise Listening Platform).",
            "Optimized frontend performance by 40% using advanced patterns in React and Vue.js.",
            "Engineered scalable backend architectures using NestJS, GraphQL, and Prisma.",
            "Implemented robust state management systems managing complex real-time data streams."
          ]
        },
        {
          period: "Jun 2024 - Oct 2024",
          role: "Fullstack Developer Intern",
          company: "PT. Dumbways Teknologi Indonesia",
          description: "Contributed to the development of fullstack web applications within a fast-paced agile environment.",
          achievements: [
            "Collaborated on building end-to-end features for multiple client projects.",
            "Streamlined API integrations between React frontends and Node.js backends.",
            "Participated in rigorous code reviews and architecture planning sessions."
          ]
        }
      ]
    },
    projects: {
      title: "Featured Projects",
      subtitle: "Selected work from my professional portfolio, ranging from government dashboards to AI platforms.",
      viewLive: "View Live Case",
      code: "Code",
      impact: "Results & Impact",
      items: [
        {
          title: "Korlantas Polri",
          subtitle: "Monitoring Media Korlantas",
          description: "A comprehensive social media and news monitoring system for the Indonesian National Police. Architected for real-time tracking, sentiment analysis, and actionable insights for public safety.",
          tech: ["React", "TypeScript", "Vite", "Material UI", "Redux Toolkit", "Apollo Client", "GraphQL", "ApexCharts", "D3.js", "Framer Motion"],
          image: "/images/korlantas.png",
          impact: ["Real-time threat detection", "Sentiment monitoring", "Nationwide scalability"],
          links: { github: "#", live: "https://monitoringmediakorlantaspolri.id" }
        },
        {
          title: "Cipta Karya PU",
          subtitle: "Satu Cipta Karya Dashboard",
          description: "A centralized infrastructure monitoring dashboard for the Ministry of Public Works (Cipta Karya). Built with modern React architecture to manage large-scale project data, geospatial visualization, and real-time reporting across thousands of infrastructure projects.",
          tech: ["Next.js 15", "React", "TypeScript", "Tailwind CSS", "React Query", "Zustand", "Leaflet", "ECharts", "Chart.js", "Socket.IO", "Framer Motion"],
          image: "/images/satu_ck.png",
          impact: ["Large-scale infrastructure monitoring", "Geospatial data visualization", "Real-time data synchronization"],
          links: { github: "#", live: "https://satuck.ciptakarya.pu.go.id" }
        },
        {
          title: "QOLA Platform",
          subtitle: "Data Intelligence & Sentiment AI",
          description: "Advanced enterprise-grade platform for brand intelligence and sentiment processing. Built with modern SSR architecture to deliver real-time insights, multilingual support, and scalable data visualization.",
          tech: ["Nuxt 4", "Vue 3", "TypeScript", "Pinia", "Apollo GraphQL", "ApexCharts", "Vue Word Cloud", "Tailwind CSS", "Nuxt UI", "i18n"],
          image: "/images/qola.png",
          impact: ["Real-time media intelligence", "Multilingual sentiment analysis", "Scalable data visualization"],
          links: { github: "#", live: "https://dashboard.qola.id" }
        }
      ]
    },
    skills: {
      title: "Skills",
      subtitle: "Comprehensive toolkit for developing modern applications.",
      categories: {
        frontend: "Frontend",
        backend: "Backend",
        database: "Database",
        state: "State Management",
        tools: "Tools & DevOps",
        specialties: "Specialties"
      }
    },
    contact: {
      title: "Contact",
      subtitle: "Let's build something exceptional together.",
      getInTouch: "Get in touch",
      description: "I'm currently open to new opportunities and collaborations. Whether you have a specific project in mind or just want to chat about tech, feel free to reach out.",
      form: {
        name: "Name",
        namePlaceholder: "Your name",
        email: "Email",
        emailPlaceholder: "name@email.com",
        message: "Message",
        messagePlaceholder: "How can I help?",
        send: "Send Message",
        sending: "Sending...",
        success: "Message sent successfully! Check your inbox. 👋",
        error: "Something went wrong. Please try again."
      }
    },
    footer: {
      description: "Fullstack Engineer specializing in production-grade software and data-intensive systems.",
      rights: "ALL RIGHTS RESERVED",
      builtWith: "Designed & Engineered by Renaldi Mohamad"
    }
  },
  id: {
    nav: {
      about: "Tentang",
      experience: "Pengalaman",
      projects: "Proyek",
      skills: "Keahlian",
      work: "Karya",
      contact: "Kontak"
    },
    hero: {
      badge: "Membangun Pengalaman Digital Premium",
      title1: "Merancang",
      title2: "Skala Digital.",
      description: "Renaldi Mohamad adalah seorang Fullstack Engineer yang berdedikasi untuk membangun perangkat lunak berperforma tinggi dan siap produksi dengan fokus pada sistem perusahaan dan arsitektur data yang skalabel.",
      explore: "Lihat Karya",
      contact: "Hubungi Saya",
      scroll: "Gulir ke Bawah"
    },
    about: {
      title: "Tentang Saya",
      subtitle: "Membangun solusi digital dengan presisi dan keahlian.",
      description1: "Saya adalah Fullstack Engineer yang berdedikasi untuk membangun sistem perangkat lunak yang skalabel dan berkinerja tinggi.",
      description2: "Dengan pengalaman ~2 tahun yang berfokus pada aplikasi tingkat produksi, saya telah mengembangkan keahlian mendalam dalam menavigasi lanskap teknis yang kompleks, khususnya dalam sistem pemerintahan skala besar dan infrastruktur perusahaan.",
      description3: "Perjalanan saya melibatkan perancangan sistem yang memproses aliran data besar setiap hari, memastikan keandalan, kecepatan, dan arsitektur kode yang bersih. Saya berkembang di antara efisiensi backend dan keanggunan frontend.",
      stats: {
        experience: "Tahun Pengalaman",
        projects: "Proyek Utama"
      },
      focus: {
        frontend: {
          title: "Keunggulan Frontend",
          desc: "Membangun antarmuka yang imersif menggunakan React, Vue, dan Next.js dengan perhatian mendalam pada UX dan performa."
        },
        backend: {
          title: "Backend yang Kokoh",
          desc: "Merancang sistem sisi server yang skalabel dengan NestJS, Node.js, dan standar API modern."
        },
        database: {
          title: "Operasi Data",
          desc: "Mengelola sistem padat data yang kompleks, memproses jutaan data untuk perangkat lunak tingkat pemerintahan."
        },
        systems: {
          title: "Pemikiran Sistem",
          desc: "Menjembatani kesenjangan antara logika bisnis dan implementasi teknis untuk produk yang siap produksi."
        }
      }
    },
    experience: {
      title: "Pengalaman",
      subtitle: "Perkembangan karier dan dampak profesional.",
      jobs: [
        {
          period: "Feb 2025 - Sekarang",
          role: "Fullstack Engineer",
          company: "PT. Eka Abhipraya Semesta",
          description: "Memimpin pengembangan sistem krusial untuk klien pemerintah dan perusahaan. Berfokus pada perancangan microservices yang skalabel dan aplikasi frontend padat data.",
          achievements: [
            "Merancang dan mendeploy 3 sistem produksi utama: Korlantas Polri (Monitoring Media Sosial), Cipta Karya (Dashboard Infrastruktur), dan QOLA (Platform Listening Perusahaan).",
            "Mengoptimalkan performa frontend sebesar 40% menggunakan pola lanjutan di React dan Vue.js.",
            "Membangun arsitektur backend yang skalabel menggunakan NestJS, GraphQL, dan Prisma.",
            "Mengimplementasikan sistem manajemen state yang kokoh untuk mengelola aliran data real-time yang kompleks."
          ]
        },
        {
          period: "Jun 2024 - Okt 2024",
          role: "Fullstack Developer Intern",
          company: "PT. Dumbways Teknologi Indonesia",
          description: "Berkontribusi dalam pengembangan aplikasi web fullstack dalam lingkungan agile yang cepat.",
          achievements: [
            "Berkolaborasi dalam membangun fitur end-to-end untuk beberapa proyek klien.",
            "Menyederhanakan integrasi API antara frontend React dan backend Node.js.",
            "Berpartisipasi dalam tinjauan kode dan perencanaan arsitektur yang ketat."
          ]
        }
      ]
    },
    projects: {
      title: "Proyek Pilihan",
      subtitle: "Karya terpilih dari portofolio profesional saya, mulai dari dashboard pemerintah hingga platform AI.",
      viewLive: "Lihat Case",
      code: "Kode",
      impact: "Hasil & Dampak",
      items: [
        {
          title: "Korlantas Polri",
          subtitle: "Monitoring Media Korlantas",
          description: "Sistem pemantauan berita dan media sosial yang komprehensif untuk Kepolisian Negara Republik Indonesia. Dirancang untuk pelacakan real-time, analisis sentimen, dan wawasan untuk keselamatan publik.",
          tech: ["React", "TypeScript", "Vite", "Material UI", "Redux Toolkit", "Apollo Client", "GraphQL", "ApexCharts", "D3.js", "Framer Motion"],
          image: "/images/korlantas.png",
          impact: ["Deteksi ancaman real-time", "Pemantauan sentimen", "Skalabilitas nasional"],
          links: { github: "#", live: "https://monitoringmediakorlantaspolri.id" }
        },
        {
          title: "Cipta Karya PU",
          subtitle: "Dashboard Satu Cipta Karya",
          description: "Dashboard pemantauan infrastruktur terpusat untuk Kementerian Pekerjaan Umum (Cipta Karya). Dibangun dengan arsitektur React modern untuk mengelola data proyek skala besar, visualisasi geospasial, dan pelaporan real-time di ribuan proyek infrastruktur.",
          tech: ["Next.js 15", "React", "TypeScript", "Tailwind CSS", "React Query", "Zustand", "Leaflet", "ECharts", "Chart.js", "Socket.IO", "Framer Motion"],
          image: "/images/satu_ck.png",
          impact: ["Pemantauan infrastruktur skala besar", "Visualisasi data geospasial", "Sinkronisasi data real-time"],
          links: { github: "#", live: "https://satuck.ciptakarya.pu.go.id" }
        },
        {
          title: "QOLA Platform",
          subtitle: "Data Intelligence & Sentiment AI",
          description: "Platform tingkat perusahaan canggih untuk brand intelligence dan pemrosesan sentimen. Dibangun dengan arsitektur SSR modern untuk memberikan wawasan real-time, dukungan multibahasa, dan visualisasi data yang skalabel.",
          tech: ["Nuxt 4", "Vue 3", "TypeScript", "Pinia", "Apollo GraphQL", "ApexCharts", "Vue Word Cloud", "Tailwind CSS", "Nuxt UI", "i18n"],
          image: "/images/qola.png",
          impact: ["Media intelligence real-time", "Analisis sentimen multibahasa", "Visualisasi data yang skalabel"],
          links: { github: "#", live: "https://dashboard.qola.id" }
        }
      ]
    },
    skills: {
      title: "Keahlian",
      subtitle: "Toolkit komprehensif untuk mengembangkan aplikasi modern.",
      categories: {
        frontend: "Frontend",
        backend: "Backend",
        database: "Database",
        state: "Manajemen State",
        tools: "Tools & DevOps",
        specialties: "Spesialisasi"
      }
    },
    contact: {
      title: "Kontak",
      subtitle: "Mari membangun sesuatu yang luar biasa bersama.",
      getInTouch: "Hubungi Saya",
      description: "Saya saat ini terbuka untuk peluang dan kolaborasi baru. Baik Anda memiliki proyek khusus atau hanya ingin mengobrol tentang teknologi, jangan ragu untuk menghubungi saya.",
      form: {
        name: "Nama",
        namePlaceholder: "Nama Anda",
        email: "Email",
        emailPlaceholder: "nama@email.com",
        message: "Pesan",
        messagePlaceholder: "Ada yang bisa saya bantu?",
        send: "Kirim Pesan",
        sending: "Mengirim...",
        success: "Pesan berhasil dikirim! Silakan cek kotak masuk Anda. 👋",
        error: "Terjadi kesalahan. Silakan coba lagi."
      }
    }
  }
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (path: string) => any;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const savedLang = localStorage.getItem("language") as Language;
    if (savedLang && (savedLang === "en" || savedLang === "id")) {
      setLanguageState(savedLang);
    }
    setIsMounted(true);
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("language", lang);
  };

  const t = (path: string) => {
    const keys = path.split(".");
    let result = translations[language];
    for (const key of keys) {
      if (result && result[key] !== undefined) {
        result = result[key];
      } else {
        return path;
      }
    }
    return result;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {isMounted ? children : <div style={{ visibility: "hidden" }}>{children}</div>}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
