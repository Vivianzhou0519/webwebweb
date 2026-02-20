"use client";

import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { TimelineItem } from "@/components/experience/TimelineItem";
import { experiences } from "@/lib/data";

export function Experience() {
  return (
    <SectionWrapper id="experience">
      <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-4">
        Experience
      </h2>
      <p className="text-[var(--foreground)]/60 mb-12 max-w-lg">
        Where I&apos;ve been and what I&apos;ve done.
      </p>

      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-[var(--border)] md:-translate-x-px" />

        <div className="space-y-12">
          {experiences.map((exp, i) => (
            <TimelineItem key={i} experience={exp} index={i} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
