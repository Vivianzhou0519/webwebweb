import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { Experience } from "@/components/sections/Experience";
import { PhotoAlbum } from "@/components/sections/PhotoAlbum";
import { Thoughts } from "@/components/sections/Thoughts";

export default function Home() {
  return (
    <>
      <Hero />
      <Projects />
      <Experience />
      <PhotoAlbum />
      <Thoughts />
    </>
  );
}
