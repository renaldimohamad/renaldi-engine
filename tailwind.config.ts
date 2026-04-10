import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Mode Light: Pure White & Soft Gray (Zinc)
        "primary-light": "#FFFFFF",
        "secondary-light": "#F4F4F5", // zinc-100
        "tertiary-light": "#E4E4E7", // zinc-200
        "text-light": "#09090B", // zinc-950

        // Mode Dark: Deep Charcoal & True Black
        "primary-dark": "#09090B", // zinc-950
        "secondary-dark": "#18181B", // zinc-900
        "tertiary-dark": "#27272A", // zinc-800
        "text-dark": "#FAFAFA", // zinc-50

        // Accent: Monochrome (White on Dark, Black on Light)
        accent: "#FAFAFA",
        "accent-light": "#D4D4D8", // zinc-300
        "accent-dark": "#71717A", // zinc-500

        // Semantic Status & Highlight Colors
        success: "#22C55E",
        "success-light": "#14B8A6",
        info: "#3B82F6",
        "info-light": "#06B6D4",
        warning: "#EAB308",
        highlight: "#A855F7",
        "highlight-light": "#EC4899",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        heading: ["var(--font-sora)", "system-ui", "sans-serif"],
      },
      fontSize: {
        xs: ["12px", { lineHeight: "1.5", letterSpacing: "0.5px" }],
        sm: ["14px", { lineHeight: "1.6", letterSpacing: "0px" }],
        base: ["16px", { lineHeight: "1.7", letterSpacing: "-0.3px" }],
        lg: ["18px", { lineHeight: "1.7", letterSpacing: "-0.3px" }],
        xl: ["20px", { lineHeight: "1.8", letterSpacing: "-0.4px" }],
        "2xl": ["24px", { lineHeight: "1.8", letterSpacing: "-0.5px" }],
        "3xl": ["28px", { lineHeight: "1.8", letterSpacing: "-0.6px" }],
        "4xl": ["32px", { lineHeight: "1.9", letterSpacing: "-0.8px" }],
        "5xl": ["40px", { lineHeight: "1.9", letterSpacing: "-1px" }],
        "6xl": ["48px", { lineHeight: "2", letterSpacing: "-1.2px" }],
        "7xl": ["56px", { lineHeight: "2", letterSpacing: "-1.5px" }],
      },
      boxShadow: {
        xs: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
        sm: "0 1px 3px 0 rgba(0, 0, 0, 0.08)",
        md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        lg: "0 10px 15px -3px rgba(0, 0, 0, 0.15), 0 4px 6px -2px rgba(0, 0, 0, 0.08)",
        xl: "0 20px 25px -5px rgba(0, 0, 0, 0.15), 0 10px 10px -5px rgba(0, 0, 0, 0.08)",
        "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.2)",
        // Glow diubah dari hijau ke putih transparan untuk vibe minimalis
        glow: "0 0 20px rgba(255, 255, 255, 0.1)",
        "glow-lg": "0 0 30px rgba(255, 255, 255, 0.15)",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out",
        "fade-up": "fadeUp 0.6s ease-out",
        "slide-in-left": "slideInLeft 0.8s ease-out",
        "scale-in": "scaleIn 0.5s ease-out",
        float: "float 3s ease-in-out infinite",
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
        slideInLeft: {
          "0%": { opacity: "0", transform: "translateX(-40px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
      backgroundImage: {
        // Gradient diubah dari nuansa ijo ke nuansa Monochrome Gray
        "gradient-subtle":
          "linear-gradient(135deg, rgba(24, 24, 27, 0.03) 0%, rgba(24, 24, 27, 0.01) 100%)",
        "gradient-subtle-dark":
          "linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.01) 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
