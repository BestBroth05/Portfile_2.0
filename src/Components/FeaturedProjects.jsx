import styled from "styled-components";
import { featuredProjects } from "../data/featuredProjects";
import { ProjectCard } from "./ProjectCard";

export function FeaturedProjects() {
  return (
    <Container>
      <section
        className="projects section"
        id="projects"
        aria-labelledby="projects-title"
      >
        <h2 className="section__title" id="projects-title">
          Featured Projects
        </h2>
        <p className="section__subtitle">
          Public portfolio projects emphasizing Flutter, Bluetooth Low Energy,
          backend services, and AWS architecture.
        </p>
        <div className="projects__grid container grid">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
    </Container>
  );
}

const Container = styled.div`
  .projects__grid {
    gap: 2rem;
  }

  @media screen and (min-width: 1024px) {
    .projects__grid {
      gap: 2.5rem;
    }
  }
`;
