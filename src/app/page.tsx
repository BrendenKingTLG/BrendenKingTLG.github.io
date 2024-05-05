import AboutMe from "@/components/AboutMe";
import HeroHome from "@/components/HeroHome";
import Skillset from "@/components/Skillset";
import WorkHistory from "@/components/WorkHistory";
import Works from "@/components/Works";

export default function Home() {
  return (
    <main
      className="relative"
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
    </main>
  );
}
