"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ExternalLink, Github } from "lucide-react";
import type { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouse = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;
    setRotateX(-y * 10);
    setRotateY(x * 10);
  };

  const handleLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseMove={handleMouse}
      onMouseLeave={handleLeave}
      style={{ perspective: 800 }}
    >
      <motion.div
        animate={{ rotateX, rotateY }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        className="rounded-2xl border border-[var(--border)] bg-[var(--muted)] p-6 h-full flex flex-col"
        data-cursor-hover
      >
        {/* Color bar */}
        <div
          className="h-1.5 w-12 rounded-full mb-4"
          style={{ backgroundColor: project.color }}
        />

        <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold text-[var(--foreground)] mb-1">
          {project.title}
        </h3>
        <p className="text-sm text-[var(--primary)] mb-3">{project.tagline}</p>
        <p className="text-sm text-[var(--foreground)]/60 mb-4 flex-1">
          {project.description}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-xs px-2 py-0.5 rounded-full bg-[var(--background)] text-[var(--foreground)]/50 border border-[var(--border)]"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-3">
          {project.context && (
            <Link
              href={`/projects/${project.slug}`}
              className="text-sm text-[var(--primary)] hover:underline"
            >
              Read more
            </Link>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--foreground)]/40 hover:text-[var(--primary)] transition-colors"
              aria-label="GitHub"
            >
              <Github size={16} />
            </a>
          )}
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--foreground)]/40 hover:text-[var(--primary)] transition-colors"
              aria-label="Live site"
            >
              <ExternalLink size={16} />
            </a>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}
