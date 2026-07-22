import { Hero } from "./Hero";
import { About } from "./About";
import { Productos } from "./Proyects";
import { Categorias } from "./Knowledge";
import { Party } from "./Contact";

export function Main() {
  return (
    <main className="main">
      <Hero />
      <About />
      <Productos />
      <Categorias />
      <Party />
    </main>
  );
}
