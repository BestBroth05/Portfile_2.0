import styled from "styled-components";
import img1 from "../assets/img/me.png";
import { education, languages } from "../data/experience";

export function About() {
  return (
    <Container>
      <section className="about section" id="about" aria-labelledby="about-title">
        <div className="shape__small" aria-hidden="true"></div>
        <div className="shape__big" aria-hidden="true"></div>

        <div className="about__container container grid">
          <div className="about__data">
            <h2 className="section__title" id="about-title">
              About me
            </h2>

            <p className="about__description">
              I work across the stack where mobile products meet connected
              hardware and cloud services. My focus areas include Flutter
              applications, Bluetooth Low Energy workflows, IoT integrations,
              Node.js and TypeScript backends, and AWS infrastructure.
            </p>
            <p className="about__description">
              I care about clean architecture, maintainable APIs, automated
              testing, and clear technical documentation so systems remain
              reliable after the first release.
            </p>

            <div className="about__meta">
              <div>
                <h3>Education</h3>
                <p>
                  {education.degree} — {education.institution} |{" "}
                  {education.period}
                </p>
              </div>
              <div>
                <h3>Languages</h3>
                <p>
                  {languages
                    .map((language) => `${language.name}: ${language.level}`)
                    .join(" · ")}
                </p>
              </div>
            </div>
          </div>

          <img
            src={img1}
            alt="Portrait of Brayan Olivares"
            className="about__img"
            width={250}
            height={450}
            loading="lazy"
          />
        </div>
      </section>
    </Container>
  );
}

const Container = styled.div`
  .about {
    position: relative;

    &__container {
      row-gap: 3.5rem;

      & .section__title {
        margin-bottom: 1rem;
      }
    }

    &__data {
      text-align: center;
    }

    &__description {
      text-align: left;
      margin-bottom: 1rem;
      color: var(--text-color);
    }

    &__meta {
      display: grid;
      gap: 1.25rem;
      margin-top: 1.5rem;
      text-align: left;

      h3 {
        color: var(--first-color);
        font-size: var(--h3-font-size);
        margin-bottom: 0.35rem;
      }

      p {
        color: var(--text-color);
        font-size: var(--small-font-size);
      }
    }

    &__img {
      width: min(250px, 70vw);
      height: auto;
      aspect-ratio: 5 / 9;
      object-fit: cover;
      justify-self: center;
      border-radius: 1.25rem;
      animation: flotar 1.9s ease-in-out infinite alternate;
    }

    & .shape__small {
      top: 2rem;
      right: -3rem;
    }

    & .shape__big {
      bottom: 0;
      left: -8rem;
    }
  }

  @keyframes flotar {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-12px);
    }
  }

  @media screen and (min-width: 1024px) {
    .about {
      &__img {
        order: -1;
      }

      &__container {
        padding-top: 2rem;
        grid-template-columns: max-content 0.9fr;
        column-gap: 4rem;
        align-items: center;
      }

      &__data {
        text-align: initial;
      }

      &__container .section__title {
        text-align: initial;
        margin-bottom: 1.5rem;
      }
    }
  }
`;
