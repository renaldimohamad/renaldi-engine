"use client";

import Link from "next/link";
import { Github, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 border-t bg-card/30">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col items-center md:items-start gap-4">
          <Link href="/" className="text-2xl font-bold tracking-tighter">
            Renaldi Mohamad
          </Link>
          <p className="text-muted-foreground text-sm text-center md:text-left max-w-xs">
            Fullstack Engineer specializing in production-grade software and data-intensive systems.
          </p>
        </div>

        <div className="flex flex-col items-center md:items-end gap-6">
          <div className="flex gap-6">
            <Link href="https://github.com" className="text-muted-foreground hover:text-foreground transition-colors">
              <Github className="w-5 h-5" />
            </Link>
            <Link href="https://linkedin.com" className="text-muted-foreground hover:text-foreground transition-colors">
              <Linkedin className="w-5 h-5" />
            </Link>
            <Link href="https://twitter.com" className="text-muted-foreground hover:text-foreground transition-colors">
              <Twitter className="w-5 h-5" />
            </Link>
          </div>
          <div className="text-xs text-muted-foreground font-medium uppercase tracking-[0.2em]">
            © {currentYear} ALL RIGHTS RESERVED
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-muted-foreground font-bold uppercase tracking-widest text-center">
        <div className="flex gap-6">
          <Link href="#" className="hover:text-foreground transition-colors">Next.js</Link>
          <Link href="#" className="hover:text-foreground transition-colors">TypeScript</Link>
          <Link href="#" className="hover:text-foreground transition-colors">Tailwind</Link>
          <Link href="#" className="hover:text-foreground transition-colors">Framer Motion</Link>
        </div>
        <div>
          Designed & Engineered by Renaldi Mohamad
        </div>
      </div>
    </footer>
  );
}
