"use client";

import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { PolaroidCard } from "@/components/photo-album/PolaroidCard";
import { photos } from "@/lib/data";

export function PhotoAlbum() {
  return (
    <SectionWrapper id="photos">
      <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-4">
        Photo Album
      </h2>
      <p className="text-[var(--foreground)]/60 mb-12 max-w-lg">
        Snapshots from the journey.
      </p>

      {/* Mobile: clean 2-column grid */}
      <div className="grid grid-cols-2 gap-4 md:hidden">
        {photos.map((photo, i) => (
          <PolaroidCard key={i} photo={photo} index={i} scattered={false} />
        ))}
      </div>

      {/* Desktop: scattered layout */}
      <div className="hidden md:grid grid-cols-3 gap-8 relative" style={{ minHeight: "500px" }}>
        {photos.map((photo, i) => (
          <PolaroidCard key={i} photo={photo} index={i} scattered={true} />
        ))}
      </div>
    </SectionWrapper>
  );
}
