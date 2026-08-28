import { IntroGate } from "@/components/intro/IntroGate";
import { Hero } from "@/components/sections/Hero";
import { RecordCrate } from "@/components/sections/RecordCrate";
import { Projects } from "@/components/sections/Projects";
import { Experience } from "@/components/sections/Experience";
import { Thoughts } from "@/components/sections/Thoughts";

export default function Home() {
  return (
    <>
      <IntroGate />
      <Hero />
      <RecordCrate />
      <Projects />
      <Experience />
      <Thoughts />
    </>
  );
}
