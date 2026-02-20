"use client";

import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { projects } from "@/lib/data";

export function Projects() {
  return (
    <SectionWrapper id="projects">
      <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-4">
        Projects
      </h2>
      <p className="text-[var(--foreground)]/60 mb-12 max-w-lg">
        Things I&apos;ve built, broken, and rebuilt.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, i) => (
          <ProjectCard key={project.slug} project={project} index={i} />
        ))}
      </div>
    </SectionWrapper>
  );
}
