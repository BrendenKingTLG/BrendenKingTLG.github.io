import AboutMe from "@/components/about-me";
import Education from "@/components/education";
import WorkHistory from "@/components/history";
import PlanetHero from "@/components/planet-hero";
import Works from "@/components/works";

export default function Home() {
  return (
    <>
      <PlanetHero />
      <AboutMe />
      <WorkHistory />
      <Works />
      <Education />
    </>
  );
}
