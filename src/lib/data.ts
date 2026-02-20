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
    company: "Your Company",
    role: "Software Engineer Intern",
    startDate: "Summer 2025",
    endDate: "Present",
    current: true,
    bullets: [
      "Placeholder — replace with your real experience",
      "Built features, fixed bugs, shipped code",
    ],
  },
  {
    company: "University Project",
    role: "Full-Stack Developer",
    startDate: "Jan 2025",
    endDate: "May 2025",
    bullets: [
      "Built Mirrorless — an AI-powered smart mirror",
      "Designed real-time streaming architecture with Socket.io",
      "Integrated Claude AI, MediaPipe, and ElevenLabs TTS",
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
