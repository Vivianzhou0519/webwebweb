export interface Project {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  tech: string[];
  image: string;
  color: string;
  link?: string;
  github?: string;
  context?: string;
  process?: string[];
  outcome?: string;
}

export interface Experience {
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  current?: boolean;
  bullets: string[];
  logo?: string;
}

export interface Photo {
  src: string;
  caption: string;
  rotation?: number;
}

export interface Thought {
  content: string;
  type: "quote" | "reflection" | "note";
  date?: string;
  source?: string;
}

export interface AlbumTrack {
  title: string;
  subtitle?: string;
  detail?: string;
  meta?: string;
  href?: string;
}

export interface Album {
  id: string;
  title: string;
  /** the "one part of me" line */
  side: string;
  year?: string;
  color: string;
  motif: string;
  tracks: AlbumTrack[];
}
