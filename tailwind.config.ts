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
        "primary-light": "#FAFBFC",
        "primary-dark": "#0A0E14",
        "secondary-light": "#F5F6F8",
        "secondary-dark": "#151B25",
        "tertiary-light": "#E8ECEF",
        "tertiary-dark": "#252E3C",
        "text-light": "#0F1419",
        "text-dark": "#ECEFF3",
        accent: "#059669", // Emerald green for premium feel
        "accent-light": "#10B981",
        "accent-dark": "#047857",
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
        glow: "0 0 20px rgba(5, 150, 105, 0.3)",
        "glow-lg": "0 0 30px rgba(5, 150, 105, 0.4)",
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
        "gradient-subtle":
          "linear-gradient(135deg, rgba(5, 150, 105, 0.05) 0%, rgba(5, 150, 105, 0.02) 100%)",
        "gradient-subtle-dark":
          "linear-gradient(135deg, rgba(5, 150, 105, 0.1) 0%, rgba(5, 150, 105, 0.05) 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
