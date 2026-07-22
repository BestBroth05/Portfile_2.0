import { Hero } from "./Hero";
import { About } from "./About";
import { Experience } from "./Experience";
import { Productos } from "./Proyects";
import { Categorias } from "./Knowledge";
import { Party } from "./Contact";

export function Main() {
  return (
    <main className="main">
      <Hero />
      <About />
      <Experience />
      <Productos />
      <Categorias />
      <Party />
    </main>
  );
}
