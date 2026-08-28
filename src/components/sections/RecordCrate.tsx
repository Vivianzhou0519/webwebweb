"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { AlbumCover } from "@/components/record-crate/AlbumCover";
import { Turntable } from "@/components/record-crate/Turntable";
import { albums } from "@/lib/data";
import { AlbumTrack } from "@/types";

function Track({ track, index }: { track: AlbumTrack; index: number }) {
  const inner = (
    <motion.div
      initial={{ opacity: 0, x: -12 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.05 }}
      className="group flex items-start gap-4 border-b border-[var(--border)] py-3 last:border-0"
    >
      <span className="mt-0.5 w-6 shrink-0 font-[family-name:var(--font-heading)] text-sm tabular-nums text-[var(--foreground)]/40">
        {String(index + 1).padStart(2, "0")}
      </span>
      <div className="min-w-0 flex-1">
        <div className="flex items-baseline justify-between gap-3">
          <h4 className="font-[family-name:var(--font-heading)] font-semibold leading-snug text-[var(--foreground)] group-hover:text-[var(--primary)] transition-colors">
            {track.title}
          </h4>
          {track.meta && (
            <span className="shrink-0 text-[11px] uppercase tracking-wide text-[var(--foreground)]/40">
              {track.meta}
            </span>
          )}
        </div>
        {track.subtitle && (
          <p className="text-sm italic text-[var(--foreground)]/55">
            {track.subtitle}
          </p>
        )}
        {track.detail && (
          <p className="mt-1 line-clamp-2 text-sm text-[var(--foreground)]/70">
            {track.detail}
          </p>
        )}
      </div>
      {track.href && (
        <ArrowUpRight
          size={16}
          className="mt-1 shrink-0 text-[var(--foreground)]/30 transition-all group-hover:text-[var(--primary)] group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
        />
      )}
    </motion.div>
  );

  return track.href ? (
    <Link href={track.href} className="block">
      {inner}
    </Link>
  ) : (
    inner
  );
}

export function RecordCrate() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const active = albums.find((a) => a.id === activeId) ?? null;

  return (
    <SectionWrapper id="records">
      <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-4">
        The Crate
      </h2>
      <p className="text-[var(--foreground)]/60 mb-12 max-w-lg">
        Every record is one part of me. Pull one out and give it a spin.
      </p>

      <div className="grid items-start gap-10 lg:grid-cols-[1fr_1.1fr]">
        {/* Left: the crate */}
        <div>
          <div className="relative rounded-xl bg-[var(--muted)] p-5 shadow-inner ring-1 ring-[var(--border)]">
            <div className="flex gap-4 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {albums.map((album, i) => (
                <AlbumCover
                  key={album.id}
                  album={album}
                  index={i}
                  active={album.id === activeId}
                  onSelect={() =>
                    setActiveId((cur) => (cur === album.id ? null : album.id))
                  }
                />
              ))}
            </div>
            {/* crate front lip */}
            <div className="pointer-events-none absolute inset-x-3 bottom-2 h-3 rounded-full bg-[var(--foreground)]/5" />
          </div>

          <div className="mt-8 flex justify-center lg:justify-start">
            <Turntable album={active} />
          </div>
        </div>

        {/* Right: the tracklist */}
        <div className="min-h-[20rem] rounded-xl border border-[var(--border)] bg-[var(--background)] p-6 sm:p-8">
          <AnimatePresence mode="wait">
            {active ? (
              <motion.div
                key={active.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="mb-6 flex items-center gap-4">
                  <span
                    className="flex h-12 w-12 items-center justify-center rounded-full text-xl text-white/90"
                    style={{ backgroundColor: active.color }}
                  >
                    {active.motif}
                  </span>
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.2em] text-[var(--foreground)]/50">
                      now playing · {active.side}
                    </p>
                    <h3 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-[var(--foreground)]">
                      {active.title}
                    </h3>
                  </div>
                </div>
                <div>
                  {active.tracks.map((track, i) => (
                    <Track key={i} track={track} index={i} />
                  ))}
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex h-full min-h-[16rem] flex-col items-center justify-center text-center"
              >
                <span className="text-4xl text-[var(--foreground)]/20">♫</span>
                <p className="mt-4 max-w-xs text-[var(--foreground)]/50">
                  Silence, for now. Choose a record from the crate to hear this
                  side of the story.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </SectionWrapper>
  );
}
