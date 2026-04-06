# 🔧 Technical Reference & Code Patterns

A comprehensive guide to the patterns and techniques used in your senior-level portfolio.

---

## 📋 Table of Contents

1. [Component Architecture](#component-architecture)
2. [Dark Mode Implementation](#dark-mode-implementation)
3. [Responsive Design Patterns](#responsive-design-patterns)
4. [Animation & Effects](#animation--effects)
5. [TypeScript Patterns](#typescript-patterns)
6. [Performance Optimization](#performance-optimization)
7. [SEO Implementation](#seo-implementation)
8. [Common Customizations](#common-customizations)

---

## 🏗️ Component Architecture

### SectionWrapper Pattern

**Purpose**: Reusable container for all major sections

```typescript
// components/SectionWrapper.tsx
interface SectionProps {
  id: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}

export default function SectionWrapper({
  id,
  title,
  subtitle,
  children,
}: SectionProps) {
  return (
    <section id={id} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-accent">#</span> {title}
          </h2>
          {subtitle && (
            <p className="text-text-light/70 dark:text-text-dark/70 text-lg">
              {subtitle}
            </p>
          )}
        </div>
        {children}
      </div>
    </section>
  );
}

// Usage:
<SectionWrapper
  id="about"
  title="About"
  subtitle="Who I am"
>
  {/* Content */}
</SectionWrapper>
```

**Benefits**:

- ✅ Consistent section styling
- ✅ Automatic animation trigger
- ✅ Max-width container management
- ✅ Title formatting standardization
- ✅ Easy to extend

---

## 🌓 Dark Mode Implementation

### Theme Context Setup

```typescript
// app/providers.tsx
"use client";

import { ReactNode, useEffect, useState, createContext } from "react";

export const ThemeContext = createContext<{
  isDarkMode: boolean;
  toggleTheme: () => void;
}>({ isDarkMode: false, toggleTheme: () => {} });

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [isMounted, setIsMounted] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Get stored theme or system preference
    const storedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    const isDark = storedTheme ? storedTheme === "dark" : prefersDark;
    setIsDarkMode(isDark);
    applyTheme(isDark);
    setIsMounted(true);
  }, []);

  const applyTheme = (isDark: boolean) => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  const toggleTheme = () => {
    const newIsDark = !isDarkMode;
    setIsDarkMode(newIsDark);
    applyTheme(newIsDark);
  };

  if (!isMounted) return <>{children}</>;

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
```

### Using Theme Context

```typescript
// components/Header.tsx
"use client";

import { useContext } from "react";
import { ThemeContext } from "@/app/providers";

export default function Header() {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme}>
      {isDarkMode ? "🌙" : "☀️"}
    </button>
  );
}
```

### Global Styles with Dark Mode

```css
/* app/globals.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

body {
  background-color: theme("colors.primary-light");
  color: theme("colors.text-light");
  transition:
    background-color 0.3s ease,
    color 0.3s ease;
}

html.dark body {
  background-color: theme("colors.primary-dark");
  color: theme("colors.text-dark");
}
```

### Tailwind Dark Mode Usage

```html
<!-- Light: bg-white, Dark: bg-slate-900 -->
<div class="bg-white dark:bg-slate-900">Content</div>

<!-- Light: text-black, Dark: text-white -->
<p class="text-black dark:text-white">Text</p>

<!-- More complex: borders, hover states -->
<button
  class="bg-blue-500 dark:bg-blue-700 hover:bg-blue-600 dark:hover:bg-blue-800">
  Click me
</button>
```

---

## 📱 Responsive Design Patterns

### Breakpoint Strategy

```typescript
// Mobile-first approach in Tailwind
<div className="
  px-4                 // Mobile: small padding
  md:px-6              // Tablet: medium padding
  lg:px-8              // Desktop: large padding
">
  <div className="
    grid
    grid-cols-1        // Mobile: 1 column
    md:grid-cols-2     // Tablet: 2 columns
    lg:grid-cols-3     // Desktop: 3 columns
    gap-4              // Consistent gap
  ">
    {/* Items */}
  </div>
</div>
```

### Navigation Responsive Pattern

```typescript
// components/Header.tsx
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header>
      <nav className="hidden md:flex items-center space-x-8">
        {/* Desktop navigation - always visible on md+ */}
      </nav>

      <button className="md:hidden">
        {/* Mobile menu button - only visible on mobile */}
      </button>

      {isMenuOpen && (
        <nav className="md:hidden">
          {/* Mobile navigation - shown when menu open */}
        </nav>
      )}
    </header>
  );
}
```

### Container Pattern

```typescript
// Max-width with centered content
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
  {/* Stays centered, max 6xl width */}
  {/* Responsive padding: 4px (mobile) → 6px (sm) → 8px (lg) */}
</div>
```

---

## 🎬 Animation & Effects

### Tailwind Animation Classes

```html
<!-- Fade In -->
<div class="animate-fade-in">Content</div>

<!-- Fade Up -->
<div class="animate-fade-up">Content</div>

<!-- Slide In Left -->
<div class="animate-slide-in-left">Content</div>

<!-- Bounce -->
<div class="animate-bounce">Content</div>

<!-- Glow Effect -->
<div class="animate-glow">Content</div>
```

### Staggered Animation Pattern

```typescript
// Delay animations for multiple items
{experiences.map((exp, idx) => (
  <div
    key={idx}
    className="animate-fade-up"
    style={{ animationDelay: `${idx * 100}ms` }}
  >
    {/* Each item animates 100ms after previous */}
  </div>
))}
```

### Custom Animation Definition

```typescript
// tailwind.config.ts
export default {
  theme: {
    extend: {
      animation: {
        "fade-in": "fadeIn 0.6s ease-in",
        "fade-up": "fadeUp 0.6s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
};
```

### Hover Effects

```html
<!-- Scale on hover -->
<button class="hover:scale-105 transition-transform duration-200">
  Hover me
</button>

<!-- Color transition -->
<a class="text-blue-500 hover:text-blue-700 transition-colors duration-200"
  >Link</a
>

<!-- Shadow effect -->
<div class="hover:shadow-lg transition-shadow duration-200">Card</div>

<!-- Combined effects -->
<button
  class="transform hover:translate-y-1 hover:shadow-lg transition-all duration-200">
  Button
</button>
```

---

## 📘 TypeScript Patterns

### Component Props Interface

```typescript
interface Experience {
  year: string;
  period: string;
  role: string;
  company: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

interface ExperienceProps {
  experiences: Experience[];
}

export default function ExperienceSection({ experiences }: ExperienceProps) {
  return (
    // Component implementation
  );
}
```

### Form State Pattern

```typescript
interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const [formData, setFormData] = useState<FormData>({
  name: "",
  email: "",
  subject: "",
  message: "",
});

const handleChange = (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
) => {
  const { name, value } = e.target;
  setFormData((prev) => ({
    ...prev,
    [name]: value as keyof FormData, // Type-safe
  }));
};
```

### Event Handler Patterns

```typescript
// Form submission
const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  // Handle form
};

// Input change
const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  setEmail(e.target.value);
};

// Click events
const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
  // Handle click
};
```

---

## ⚡ Performance Optimization

### Image Optimization

```typescript
// Use Next.js Image (automatic optimization)
import Image from "next/image";

export default function OptimizedImage() {
  return (
    <Image
      src="/images/project.jpg"
      alt="Project description"
      width={800}
      height={600}
      priority // Load first images with priority
      quality={85} // Optimized quality
    />
  );
}
```

### Code Splitting

```typescript
// Next.js automatically code splits by page/component
// Each route gets its own bundle
// Lazy load components if needed:
import dynamic from "next/dynamic";

const HeavyComponent = dynamic(
  () => import("@/components/Heavy"),
  { loading: () => <p>Loading...</p> }
);
```

### CSS Optimization

```typescript
// Tailwind handles CSS optimization
// Only includes classes you use
// PurgeCSS removes unused styles automatically

// Build output: tailwindcss automatically autoprefixes
// No need for vendor prefixes manually
```

---

## 🔍 SEO Implementation

### Meta Tags in Layout

```typescript
// app/layout.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aldi Balagtown | Full-Stack Developer",
  description:
    "Senior full-stack developer with 2+ years experience building production-grade applications including government systems.",
  keywords: [
    "Full-Stack Developer",
    "React",
    "Next.js",
    "Node.js",
    "TypeScript",
  ],
  authors: [{ name: "Aldi Balagtown" }],
  openGraph: {
    type: "website",
    url: "https://aldibalagtown.com",
    title: "Aldi Balagtown | Full-Stack Developer",
    description: "Senior full-stack developer portfolio",
  },
};
```

### Structured Data (Optional)

```typescript
// Add to app/layout.tsx for rich snippet support
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Aldi Balagtown",
  url: "https://aldibalagtown.com",
  jobTitle: "Full-Stack Developer",
  sameAs: [
    "https://linkedin.com/in/aldibalagtown",
    "https://github.com/aldibalagtown",
  ],
};
```

### Sitemap (Optional)

```typescript
// app/sitemap.ts (Next.js 13.3+)
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://aldibalagtown.com",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://aldibalagtown.com#projects",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
```

---

## 🎨 Common Customizations

### Change Accent Color

```typescript
// tailwind.config.ts
export default {
  theme: {
    extend: {
      colors: {
        accent: "#FF6B6B", // Change from blue to red
      },
    },
  },
};
```

### Update Typography

```typescript
// tailwind.config.ts
export default {
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "system-ui", "sans-serif"],
      },
    },
  },
};

// app/layout.tsx
// Add font import:
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-family-sans",
});
```

### Add New Section

```typescript
// 1. Create component: components/sections/NewSection.tsx
"use client";

import SectionWrapper from "@/components/SectionWrapper";

export default function NewSection() {
  return (
    <SectionWrapper
      id="newsection"
      title="New Section"
      subtitle="Description"
    >
      {/* Your content */}
    </SectionWrapper>
  );
}

// 2. Import in app/page.tsx
import NewSection from "@/components/sections/NewSection";

export default function Home() {
  return (
    <div>
      {/* other sections */}
      <NewSection />
    </div>
  );
}
```

### Change Layout Colors

```typescript
// tailwind.config.ts
export default {
  theme: {
    extend: {
      colors: {
        "primary-light": "#FFFFFF", // Change background
        "primary-dark": "#111111",
        "secondary-light": "#F0F0F0",
        "secondary-dark": "#222222",
        "tertiary-light": "#E0E0E0",
        "tertiary-dark": "#333333",
        "text-light": "#000000",
        "text-dark": "#FFFFFF",
      },
    },
  },
};
```

---

## 🚀 Advanced Patterns

### Client-Side Only Component

```typescript
"use client";

import { useEffect, useState } from "react";

export default function ClientOnly() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null; // Prevent hydration mismatch

  return <div>{/* Client content */}</div>;
}
```

### Conditional Rendering by Breakpoint

```typescript
"use client";

export default function ResponsiveContent() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return isMobile ? <MobileLayout /> : <DesktopLayout />;
}
```

### Fetch Data

```typescript
// In Server Component (app/page.tsx)
async function getData() {
  const res = await fetch("https://api.example.com/data", {
    next: { revalidate: 60 }, // ISR: revalidate every 60s
  });
  return res.json();
}

export default async function Home() {
  const data = await getData();
  return <div>{/* Use data */}</div>;
}
```

---

## 📝 Naming Conventions

### Files & Folders

```
✅ GOOD:
components/SectionWrapper.tsx    (PascalCase for components)
app/layout.tsx                    (camelCase for utilities)
public/images/project-name.jpg    (kebab-case for assets)

❌ AVOID:
components/section-wrapper.tsx    (kebab-case for components)
app/Layout.tsx                    (wrong casing)
public/images/projectName.jpg     (camelCase for assets)
```

### Variables & Functions

```typescript
✅ GOOD:
const userEmail = "user@example.com"        // camelCase
const MAX_ATTEMPTS = 3                      // CONSTANT_CASE
function getUserById(id: number) {}         // camelCase function
interface UserProps {}                      // PascalCase interface

❌ AVOID:
const user_email = "..."                    // snake_case (Python style)
const maxAttempts = 3                       // inconsistent with MAX
function get_user_by_id() {}               // snake_case
interface userProps {}                      // lowercase interface
```

---

## ✨ Final Tips

1. **Keep it DRY**: Don't repeat code - create reusable components
2. **Type Everything**: TypeScript catches errors early
3. **Test Responsive**: Check all breakpoints
4. **Optimize Images**: Use Next.js Image component
5. **Monitor Performance**: Use Lighthouse regularly
6. **Maintain Consistency**: Follow established patterns
7. **Comment Complex Logic**: Others (and future you) will thank you
8. **Use Git**: Track changes with meaningful commits

---

## 📚 Useful Resources

- **Next.js Docs**: https://nextjs.org/docs
- **Tailwind CSS**: https://tailwindcss.com
- **TypeScript**: https://www.typescriptlang.org
- **React Best Practices**: https://react.dev
- **Web Accessibility**: https://www.w3.org/WAI/

---

**Happy coding! 🚀**
