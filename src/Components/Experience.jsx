import styled from "styled-components";
import { experience } from "../data/experience";

export function Experience() {
  return (
    <Container>
      <section
        className="experience section"
        id="experience"
        aria-labelledby="experience-title"
      >
        <h2 className="section__title" id="experience-title">
          Professional Experience
        </h2>
        <p className="section__subtitle">
          Roles focused on Flutter, connected devices, backend services, and
          cloud delivery.
        </p>

        <div className="experience__list container grid">
          {experience.map((job) => (
            <article className="experience__card" key={job.id}>
              <header className="experience__header">
                <h3 className="experience__role">{job.role}</h3>
                <p className="experience__company">{job.company}</p>
                <p className="experience__period">
                  {job.period}
                  {job.location ? ` · ${job.location}` : ""}
                </p>
              </header>
              <ul className="experience__focus">
                {job.focusAreas.map((item) => (
                  <li key={item}>{item}</li>
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
  .experience {
    &__list {
      gap: 1.5rem;
    }

    &__card {
      background-color: var(--container-color);
      border: 1px solid var(--border-subtle);
      border-radius: 1.25rem;
      padding: 1.5rem;
      box-shadow: 0 4px 16px hsla(22, 10%, 2%, 0.3);
    }

    &__role {
      color: var(--white-color);
      font-size: var(--h3-font-size);
      margin-bottom: 0.25rem;
    }

    &__company {
      color: var(--first-color);
      font-weight: var(--font-semi-bold);
      margin-bottom: 0.25rem;
    }

    &__period {
      color: var(--text-color-light);
      font-size: var(--small-font-size);
      margin-bottom: 1rem;
    }

    &__focus {
      display: grid;
      gap: 0.5rem;
      color: var(--text-color);
      font-size: var(--small-font-size);

      li {
        position: relative;
        padding-left: 1rem;

        &::before {
          content: "";
          position: absolute;
          left: 0;
          top: 0.55rem;
          width: 0.35rem;
          height: 0.35rem;
          border-radius: 50%;
          background: var(--first-color);
        }
      }
    }
  }

  @media screen and (min-width: 768px) {
    .experience__list {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;
