import AboutMe from "@/components/AboutMe";
import HeroHome from "@/components/HeroHome";
import Skillset from "@/components/Skillset";
import WorkHistory from "@/components/WorkHistory";
import Works from "@/components/Works";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main
      className="relative lg:mx-40"
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        position: "relative",
      }}
    >
      <HeroHome />
      <AboutMe />
      <Skillset />
      <WorkHistory />
      <Works />
      <Contact />
    </main>
  );
}
