"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Github, ExternalLink } from "lucide-react";
import type { Project } from "@/types";

interface ProjectDetailProps {
  project: Project;
}

export function ProjectDetail({ project }: ProjectDetailProps) {
  return (
    <div className="min-h-screen pt-24 pb-16 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm text-[var(--foreground)]/50 hover:text-[var(--primary)] transition-colors mb-8"
          >
            <ArrowLeft size={14} />
            Back to projects
          </Link>

          {/* Color bar */}
          <div
            className="h-2 w-16 rounded-full mb-6"
            style={{ backgroundColor: project.color }}
          />

          <h1 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl font-bold text-[var(--foreground)] mb-2">
            {project.title}
          </h1>
          <p className="text-lg text-[var(--primary)] mb-6">{project.tagline}</p>

          {/* Links */}
          <div className="flex items-center gap-4 mb-10">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-[var(--foreground)]/60 hover:text-[var(--primary)] transition-colors"
              >
                <Github size={16} />
                Source code
              </a>
            )}
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-[var(--foreground)]/60 hover:text-[var(--primary)] transition-colors"
              >
                <ExternalLink size={16} />
                Live site
              </a>
            )}
          </div>

          {/* Tech */}
          <div className="flex flex-wrap gap-2 mb-10">
            {project.tech.map((t) => (
              <span
                key={t}
                className="text-xs px-3 py-1 rounded-full bg-[var(--muted)] text-[var(--foreground)]/60 border border-[var(--border)]"
              >
                {t}
              </span>
            ))}
          </div>

          {/* Context */}
          {project.context && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mb-10"
            >
              <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold text-[var(--foreground)] mb-3">
                Context
              </h2>
              <p className="text-[var(--foreground)]/70 leading-relaxed">
                {project.context}
              </p>
            </motion.div>
          )}

          {/* Process */}
          {project.process && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-10"
            >
              <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold text-[var(--foreground)] mb-3">
                Process
              </h2>
              <ul className="space-y-3">
                {project.process.map((step, i) => (
                  <li key={i} className="flex gap-3 text-[var(--foreground)]/70">
                    <span className="text-[var(--primary)] font-bold shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {step}
                  </li>
                ))}
              </ul>
            </motion.div>
          )}

          {/* Outcome */}
          {project.outcome && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="p-6 rounded-2xl bg-[var(--muted)] border border-[var(--border)]"
            >
              <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold text-[var(--foreground)] mb-3">
                Outcome
              </h2>
              <p className="text-[var(--foreground)]/70 leading-relaxed">
                {project.outcome}
              </p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
