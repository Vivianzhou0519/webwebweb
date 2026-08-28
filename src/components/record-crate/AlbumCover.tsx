"use client";

import { motion } from "framer-motion";
import { Album } from "@/types";

interface AlbumCoverProps {
  album: Album;
  active: boolean;
  onSelect: () => void;
  index: number;
}

/** A record sleeve sitting in the crate, with a sliver of vinyl peeking out. */
export function AlbumCover({ album, active, onSelect, index }: AlbumCoverProps) {
  return (
    <motion.button
      onClick={onSelect}
      aria-pressed={active}
      aria-label={`Play ${album.title}`}
      className="group relative shrink-0 origin-bottom outline-none"
      initial={{ opacity: 0, y: 24, rotate: -2 }}
      whileInView={{ opacity: 1, y: 0, rotate: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, type: "spring", stiffness: 120, damping: 16 }}
      whileHover={{ y: -18, rotate: 0, transition: { type: "spring", stiffness: 300, damping: 20 } }}
      whileTap={{ y: -8 }}
    >
      {/* vinyl peeking from behind the sleeve */}
      <div
        className="absolute left-1/2 top-1/2 h-[92%] w-[92%] -translate-x-1/2 -translate-y-1/2 rounded-full transition-transform duration-300 group-hover:translate-x-[10%]"
        style={{
          background:
            "repeating-radial-gradient(circle at center, #1a1613 0 2px, #262019 2px 4px)",
        }}
      >
        <div
          className="absolute left-1/2 top-1/2 h-[34%] w-[34%] -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{ backgroundColor: album.color }}
        />
      </div>

      {/* the sleeve */}
      <div
        className={`relative flex h-40 w-40 flex-col justify-between overflow-hidden rounded-md p-4 text-left shadow-[0_10px_30px_-12px_rgba(0,0,0,0.5)] ring-1 ring-black/10 transition-shadow duration-300 group-hover:shadow-[0_22px_40px_-14px_rgba(0,0,0,0.55)] sm:h-48 sm:w-48 ${
          active ? "ring-2 ring-[var(--foreground)]/30" : ""
        }`}
        style={{
          background: `linear-gradient(140deg, ${album.color} 0%, ${album.color}cc 55%, #2a2019 140%)`,
        }}
      >
        {/* grain */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.12] mix-blend-overlay"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 30%, #fff 0.5px, transparent 0.5px), radial-gradient(circle at 70% 60%, #fff 0.5px, transparent 0.5px)",
            backgroundSize: "7px 7px, 11px 11px",
          }}
        />
        <div className="flex items-start justify-between">
          <span className="font-[family-name:var(--font-heading)] text-3xl leading-none text-white/90">
            {album.motif}
          </span>
          <span className="text-[10px] uppercase tracking-widest text-white/60">
            LP
          </span>
        </div>
        <div>
          <p className="text-[10px] uppercase tracking-[0.2em] text-white/60">
            {album.side}
          </p>
          <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold leading-tight text-white">
            {album.title}
          </h3>
          <p className="mt-1 text-[11px] text-white/60">{album.year}</p>
        </div>
      </div>
    </motion.button>
  );
}
