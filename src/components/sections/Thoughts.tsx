"use client";

import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { ThoughtCard } from "@/components/thoughts/ThoughtCard";
import { thoughts } from "@/lib/data";

export function Thoughts() {
  return (
    <SectionWrapper id="thoughts">
      <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-4">
        Thoughts
      </h2>
      <p className="text-[var(--foreground)]/60 mb-12 max-w-lg">
        A micro journal of things I&apos;m thinking about.
      </p>

      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
        {thoughts.map((thought, i) => (
          <ThoughtCard key={i} thought={thought} index={i} />
        ))}
      </div>
    </SectionWrapper>
  );
}
