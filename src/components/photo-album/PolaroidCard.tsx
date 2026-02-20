"use client";

import { motion } from "framer-motion";
import type { Photo } from "@/types";

interface PolaroidCardProps {
  photo: Photo;
  index: number;
  scattered: boolean;
}

export function PolaroidCard({ photo, index, scattered }: PolaroidCardProps) {
  const rotation = photo.rotation ?? 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, rotate: scattered ? rotation : 0 }}
      whileInView={{ opacity: 1, y: 0, rotate: scattered ? rotation : 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{
        rotate: 0,
        scale: 1.05,
        zIndex: 20,
        transition: { duration: 0.2 },
      }}
      className="relative"
      style={{ zIndex: index }}
      data-cursor-hover
    >
      <div className="bg-white dark:bg-[#2A2320] p-3 pb-10 rounded-sm shadow-lg">
        {/* Photo area — placeholder gradient */}
        <div className="aspect-square bg-gradient-to-br from-[var(--muted)] to-[var(--border)] rounded-sm overflow-hidden">
          <div className="w-full h-full flex items-center justify-center text-[var(--foreground)]/20 text-sm">
            {photo.caption}
          </div>
        </div>
        {/* Caption */}
        <p className="absolute bottom-2.5 left-0 right-0 text-center text-xs text-[var(--foreground)]/50 font-[family-name:var(--font-heading)]">
          {photo.caption}
        </p>
      </div>
    </motion.div>
  );
}
