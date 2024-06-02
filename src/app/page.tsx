import AboutMe from "@/components/AboutMe";
import HeroHome from "@/components/HeroHome";
import Skillset from "@/components/Skillset";
import WorkHistory from "@/components/WorkHistory";
import Works from "@/components/Works";
import Contact from "@/components/Contact";
import FadeInSection from "@/components/FadeInSection";

const sections = [
  <HeroHome key="HeroHome" />,
  <AboutMe key="AboutMe" />,
  <Skillset key="Skillset" />,
  <WorkHistory key="WorkHistory" />,
  <Works key="Works" />,
  <Contact key="Contact" />,
];

const Home: React.FC = () => {
  return (
    <main className="relative lg:mx-40 flex flex-col items-center">
      {sections.map((section) => (
        <FadeInSection key={section.key}>{section}</FadeInSection>
      ))}
    </main>
  );
};

export default Home;
