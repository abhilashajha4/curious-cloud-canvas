import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { TechJourney } from "@/components/TechJourney";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { FloatingButterflies } from "@/components/FloatingButterflies";

const Index = () => {
  return (
    <div className="relative">
      <FloatingButterflies />
      <Hero />
      <About />
      <TechJourney />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

export default Index;
