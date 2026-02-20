"use client";

import { motion } from "framer-motion";
import type { Thought } from "@/types";

interface ThoughtCardProps {
  thought: Thought;
  index: number;
}

export function ThoughtCard({ thought, index }: ThoughtCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="break-inside-avoid p-5 rounded-xl bg-[var(--muted)] border border-[var(--border)]"
    >
      {thought.type === "quote" && (
        <span className="text-4xl leading-none text-[var(--primary)]/30 font-serif select-none">
          &ldquo;
        </span>
      )}

      <p
        className={`text-sm text-[var(--foreground)]/70 leading-relaxed ${
          thought.type === "quote" ? "italic -mt-4 ml-2" : ""
        }`}
      >
        {thought.content}
      </p>

      {(thought.source || thought.date) && (
        <p className="mt-3 text-xs text-[var(--foreground)]/40">
          {thought.source && `— ${thought.source}`}
          {thought.source && thought.date && " · "}
          {thought.date}
        </p>
      )}
    </motion.div>
  );
}
