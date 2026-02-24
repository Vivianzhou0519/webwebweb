import { Project, Experience, Photo, Thought } from "@/types";

export const projects: Project[] = [
  {
    slug: "mirrorless",
    title: "Mirrorless",
    tagline: "AI-powered smart mirror stylist",
    description:
      "An AI smart mirror that gives personalized outfit recommendations. Users onboard via phone, and AI stylist 'Mira' overlays clothing on their body in real-time through a two-way mirror.",
    tech: ["Next.js", "FastAPI", "Claude AI", "Socket.io", "MediaPipe"],
    image: "/projects/mirrorless.jpg",
    color: "#C67A5C",
    github: "https://github.com/23jmo/mirrorless",
    context:
      "Built as a team project to reimagine the fitting room experience. Combines computer vision, real-time streaming, and conversational AI into a physical installation.",
    process: [
      "Designed event-driven agent architecture with Claude Haiku for low-latency responses",
      "Built streaming TTS pipeline: Claude → sentence chunking → ElevenLabs → MediaSource playback",
      "Implemented MediaPipe BlazePose body tracking with 2D affine clothing overlays",
      "Created queue system with Socket.io for multi-user mirror sessions",
    ],
    outcome:
      "Full working prototype with voice interaction, gesture control, and real-time clothing visualization on a physical two-way mirror display.",
  },
  {
    slug: "portfolio",
    title: "This Website",
    tagline: "A playground of warm pixels",
    description:
      "My personal portfolio — built with Next.js, Tailwind, and Framer Motion. Features custom cursor interactions, polaroid photo gallery, and earth-tone aesthetics.",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
    image: "/projects/portfolio.jpg",
    color: "#8B9E7E",
    context:
      "Wanted a portfolio that felt personal and playful rather than corporate. Designed around warm earth tones and tactile interactions.",
    process: [
      "Crafted custom cursor with spring physics and magnetic button effects",
      "Built polaroid photo album with scattered layout and hover animations",
      "Implemented smooth scroll with Lenis and scroll-triggered section reveals",
      "Dark mode with carefully paired color palette for both themes",
    ],
    outcome:
      "A portfolio that feels like flipping through a scrapbook — warm, personal, and fun to explore.",
  },
  {
    slug: "project-three",
    title: "Coming Soon",
    tagline: "Something new is brewing",
    description:
      "A new project in the works. Stay tuned for updates!",
    tech: ["???"],
    image: "/projects/placeholder.jpg",
    color: "#D4A96A",
  },
];

export const experiences: Experience[] = [
  {
    company: "TikTok",
    role: "Technical Product Management Intern",
    startDate: "Jan 2026",
    endDate: "Mar 2026",
    current: true,
    bullets: [
      "Built end-to-end LLM content moderation eval pipeline for TikTok LIVE, improving model quality to ~90% precision/recall",
      "Implemented prompt-engineering and dataset curation workflows with few-shot/zero-shot prompting and hard-negative mining",
      "Developed monitoring dashboards surfacing confusion matrices, per-category breakdowns, and drift signals from production logs",
    ],
  },
  {
    company: "Stripe",
    role: "Software Engineering Intern",
    startDate: "Jun 2025",
    endDate: "Aug 2025",
    bullets: [
      "Built an LLM-powered analysis agent integrated with Stripe's internal knowledge base, reducing query latency by 50%",
      "Analyzed 5 years of payments data and developed regression models for variance analysis to improve forecast accuracy",
      "Implemented a new framework for analyzing Stripe Connect users at cohort level, potentially driving $220M revenue impact",
    ],
  },
  {
    company: "Jade",
    role: "Co-Founder",
    startDate: "Sep 2024",
    endDate: "Mar 2025",
    bullets: [
      "Built backend on Supabase with 1M+ indexed fashion product images from web scraping using Firecrawl and SerpAPI",
      "Developed recommendation algorithms in Python (NumPy, PyTorch) with diffusion model pipeline for personalized styling",
      "Led 10+ user testing sessions across 5,000+ users, achieving 30% increase in customer satisfaction scores",
    ],
  },
  {
    company: "Felicis Ventures",
    role: "Venture Fellow",
    startDate: "2024",
    endDate: "Present",
    bullets: [
      "Venture fellow at Felicis, evaluating early-stage startups and supporting portfolio companies",
    ],
  },
  {
    company: "AGI House",
    role: "Developer Relations",
    startDate: "2024",
    endDate: "Present",
    bullets: [
      "Developer relations at AGI House — the hacker house where LlamaIndex and LangChain started",
    ],
  },
];

export const photos: Photo[] = [
  { src: "/photos/photo1.jpg", caption: "golden hour", rotation: -3 },
  { src: "/photos/photo2.jpg", caption: "coffee & code", rotation: 2 },
  { src: "/photos/photo3.jpg", caption: "team vibes", rotation: -1 },
  { src: "/photos/photo4.jpg", caption: "sunset walks", rotation: 4 },
  { src: "/photos/photo5.jpg", caption: "late nights", rotation: -2 },
  { src: "/photos/photo6.jpg", caption: "weekend adventures", rotation: 1 },
];

export const thoughts: Thought[] = [
  {
    content: "The best code is the code you don't have to write.",
    type: "quote",
    source: "someone wise",
  },
  {
    content:
      "Spent the afternoon refactoring a component I wrote last week. Past me had no idea what she was doing, but present me is grateful she tried.",
    type: "reflection",
    date: "Feb 2025",
  },
  {
    content:
      "There's something magical about seeing your code come alive on a physical device. Software on a screen is cool, but software on a mirror? That hits different.",
    type: "reflection",
    date: "Jan 2025",
  },
  {
    content: "Design is not just what it looks like. Design is how it works.",
    type: "quote",
    source: "Steve Jobs",
  },
  {
    content:
      "Note to self: always test on mobile before pushing. Always.",
    type: "note",
  },
  {
    content:
      "The gap between 'it works on my machine' and 'it works in production' is where all the learning happens.",
    type: "reflection",
    date: "Dec 2024",
  },
];
