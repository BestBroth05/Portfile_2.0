import { Hero } from "./Hero";
import { About } from "./About";
import { Experience } from "./Experience";
import { FeaturedProjects } from "./FeaturedProjects";
import { ProfessionalWork } from "./ProfessionalWork";
import { Skills } from "./Skills";
import { Contact } from "./Contact";

export function Main() {
  return (
    <main className="main">
      <Hero />
      <About />
      <Experience />
      <FeaturedProjects />
      <ProfessionalWork />
      <Skills />
      <Contact />
    </main>
  );
}
