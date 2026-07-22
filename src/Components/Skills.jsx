import styled from "styled-components";
import { skillCategories } from "../data/skills";

export function Skills() {
  return (
    <Container>
      <section className="skills section" id="skills" aria-labelledby="skills-title">
        <h2 className="section__title" id="skills-title">
          Technical Skills
        </h2>
        <p className="section__subtitle">
          Core tools and platforms used across mobile, backend, cloud, and
          delivery workflows.
        </p>
        <div className="skills__grid container grid">
          {skillCategories.map((category) => (
            <article className="skill-card" key={category.id}>
              <h3 className="skill-card__title">{category.title}</h3>
              <ul className="skill-card__list" aria-label={category.title}>
                {category.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </Container>
  );
}

const Container = styled.div`
  .skills__grid {
    gap: 1.25rem;
  }

  .skill-card {
    background: var(--container-color);
    border: 1px solid var(--border-subtle);
    border-radius: 1.25rem;
    padding: 1.35rem;
    box-shadow: 0 4px 16px hsla(22, 10%, 2%, 0.28);

    &__title {
      color: var(--first-color);
      font-size: var(--h3-font-size);
      margin-bottom: 1rem;
    }

    &__list {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;

      li {
        background: var(--surface-elevated);
        border: 1px solid var(--border-subtle);
        border-radius: 999px;
        padding: 0.35rem 0.75rem;
        font-size: var(--small-font-size);
        color: var(--text-color);
      }
    }
  }

  @media screen and (min-width: 768px) {
    .skills__grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;
