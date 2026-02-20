"use client";

import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-[var(--foreground)]/50">
          Built with care by Vivian Zhou
        </p>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/vivianzhou"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--foreground)]/50 hover:text-[var(--primary)] transition-colors"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>
          <a
            href="https://linkedin.com/in/vivianzhou"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--foreground)]/50 hover:text-[var(--primary)] transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
          <a
            href="mailto:hello@vivianzhou.com"
            className="text-[var(--foreground)]/50 hover:text-[var(--primary)] transition-colors"
            aria-label="Email"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
