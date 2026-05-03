"use client";

import { useContext, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeContext } from "@/app/providers";
import { useLanguage, Language } from "@/lib/i18n";
import Link from "next/link";
import { Moon, Sun, Menu, X, ArrowUpRight, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Header() {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  const { language, setLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isMounted) return null;

  const navItems = [
    { label: t("nav.about"), href: "#about" },
    { label: t("nav.experience"), href: "#experience" },
    { label: t("nav.projects"), href: "#projects" },
    { label: t("nav.skills"), href: "#skills" },
  ];

  return (
    <>
      <header className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6",
        isScrolled ? "py-4" : "py-8"
      )}>
        <div className={cn(
          "max-w-5xl mx-auto rounded-full transition-all duration-300 border flex items-center justify-between px-4 sm:px-6 py-2",
          isScrolled ? "bg-background/80 backdrop-blur-xl border-border shadow-lg" : "bg-transparent border-transparent"
        )}>
          {/* Logo */}
          <Link href="/" className="text-base sm:text-xl font-bold tracking-tighter flex items-center gap-1.5 group shrink-0">
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-foreground flex items-center justify-center text-background group-hover:rotate-12 transition-transform text-xs sm:text-sm">
              R
            </div>
            <span className="inline-block">Renaldi.</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-full hover:bg-muted"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center gap-2">
            {/* Language Switcher */}
            <div className="flex items-center mr-1">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setLanguage(language === "en" ? "id" : "en")}
                className="rounded-full px-3 h-8 text-[10px] font-bold uppercase tracking-widest gap-2"
              >
                <Globe className="w-3 h-3" />
                {language}
              </Button>
            </div>

            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="rounded-full"
            >
              {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </Button>

            <Button variant="premium" size="sm" className="hidden sm:flex rounded-full gap-1 group" asChild>
              <Link href="#contact">
                {t("nav.work")} <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden rounded-full"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-background pt-24 px-8 md:hidden"
          >
            <nav className="flex flex-col gap-6">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-xl sm:text-2xl font-bold tracking-tight hover:text-brand transition-colors"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="#contact"
                onClick={() => setIsMenuOpen(false)}
                className="text-xl sm:text-2xl font-bold tracking-tight text-brand"
              >
                {t("nav.contact")}
              </Link>

              {/* Mobile Language Switch */}
              <div className="pt-10 border-t mt-4 flex items-center gap-4">
                <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Select Language</span>
                <div className="flex gap-2">
                  {(["en", "id"] as Language[]).map((lang) => (
                    <Button
                      key={lang}
                      variant={language === lang ? "default" : "outline"}
                      size="sm"
                      onClick={() => setLanguage(lang)}
                      className="rounded-full px-4 uppercase text-[10px] font-bold"
                    >
                      {lang}
                    </Button>
                  ))}
                </div>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
