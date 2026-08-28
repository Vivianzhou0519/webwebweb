"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Album } from "@/types";

interface TurntableProps {
  album: Album | null;
}

/** The record player. Spins the active album's vinyl and swings the tonearm in. */
export function Turntable({ album }: TurntableProps) {
  const playing = !!album;

  return (
    <div
      className="relative aspect-square w-full max-w-sm rounded-2xl p-6 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.5)] ring-1 ring-black/10"
      style={{
        background:
          "linear-gradient(150deg, var(--muted) 0%, var(--background) 100%)",
      }}
    >
      {/* platter well */}
      <div className="relative flex h-full w-full items-center justify-center">
        <div className="relative aspect-square w-[86%] rounded-full bg-[var(--foreground)]/5 ring-1 ring-[var(--border)]">
          {/* the vinyl */}
          <motion.div
            className="absolute inset-[6%] rounded-full"
            style={{
              background:
                "repeating-radial-gradient(circle at center, #17130f 0 2.5px, #241d16 2.5px 5px)",
              boxShadow: "inset 0 0 40px rgba(0,0,0,0.6)",
            }}
            animate={{ rotate: playing ? 360 : 0 }}
            transition={
              playing
                ? { repeat: Infinity, ease: "linear", duration: 4 }
                : { duration: 0.4 }
            }
          >
            {/* center label */}
            <div className="absolute left-1/2 top-1/2 flex h-[38%] w-[38%] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full text-center transition-colors duration-500"
              style={{ backgroundColor: album ? album.color : "var(--border)" }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={album?.id ?? "empty"}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-1"
                >
                  <span className="text-lg leading-none text-white/90">
                    {album ? album.motif : "○"}
                  </span>
                  {album && (
                    <p className="mt-0.5 line-clamp-2 text-[8px] font-bold uppercase tracking-wider text-white/85">
                      {album.title}
                    </p>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
            {/* spindle */}
            <div className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--background)] ring-1 ring-black/30" />
          </motion.div>
        </div>

        {/* tonearm */}
        <motion.div
          className="absolute right-[6%] top-[8%] origin-top-right"
          animate={{ rotate: playing ? 26 : -6 }}
          transition={{ type: "spring", stiffness: 120, damping: 14 }}
        >
          <div className="h-3 w-3 rounded-full bg-[var(--foreground)]/70 ring-2 ring-[var(--muted)]" />
          <div className="ml-[5px] h-24 w-[3px] rounded-full bg-[var(--foreground)]/60 sm:h-28" />
          <div className="ml-[1px] h-3 w-[7px] rounded-sm bg-[var(--foreground)]/70" />
        </motion.div>

        {/* empty-state hint */}
        {!playing && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="pointer-events-none absolute bottom-2 left-0 right-0 text-center text-xs text-[var(--foreground)]/40"
          >
            pick a record to play
          </motion.p>
        )}
      </div>
    </div>
  );
}
