"use client";

import { motion } from "framer-motion";
import type { Experience } from "@/types";

interface TimelineItemProps {
  experience: Experience;
  index: number;
}

export function TimelineItem({ experience, index }: TimelineItemProps) {
  const isLeft = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative pl-12 md:pl-0"
    >
      {/* Dot */}
      <div className="absolute left-4 md:left-1/2 top-1 w-2.5 h-2.5 -translate-x-1/2 rounded-full border-2 border-[var(--primary)] bg-[var(--background)] z-10">
        {experience.current && (
          <span className="absolute inset-0 rounded-full bg-[var(--primary)] animate-ping opacity-30" />
        )}
      </div>

      <div
        className={`md:w-[calc(50%-2rem)] ${
          isLeft ? "md:mr-auto md:pr-8 md:text-right" : "md:ml-auto md:pl-8"
        }`}
      >
        <div className="p-5 rounded-xl bg-[var(--muted)] border border-[var(--border)]">
          <p className="text-xs text-[var(--primary)] font-medium mb-1">
            {experience.startDate} — {experience.endDate}
          </p>
          <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold text-[var(--foreground)]">
            {experience.role}
          </h3>
          <p className="text-sm text-[var(--foreground)]/50 mb-3">
            {experience.company}
          </p>
          <ul className={`space-y-1.5 ${isLeft ? "md:text-right" : ""}`}>
            {experience.bullets.map((bullet, i) => (
              <li key={i} className="text-sm text-[var(--foreground)]/60">
                {bullet}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}
