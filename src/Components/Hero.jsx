import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import {
  BiLogoLinkedin,
  BiLogoGithub,
  BiLogoGmail,
  BiGlobe,
} from "react-icons/bi";
import flutterImg from "../assets/img/logo_flutter.png";
import nodeImg from "../assets/img/node.png";
import resumePdf from "../assets/docs/Brayan_Olivares_Resume.pdf";
import { site } from "../data/site";

export function Hero() {
  return (
    <Container>
      <section className="home section" id="home" aria-labelledby="home-title">
        <div className="shape__small" aria-hidden="true"></div>
        <div className="shape__big" aria-hidden="true"></div>

        <div className="home__container container grid">
          <div className="home__data">
            <h1 className="home__title" id="home-title">
              <span>{site.name}</span>
              <img
                src={flutterImg}
                alt=""
                className="home__title-img-1"
                aria-hidden="true"
              />
              <img
                src={nodeImg}
                alt=""
                className="home__title-img-2"
                aria-hidden="true"
              />
            </h1>

            <p className="home__role">{site.title}</p>
            <p className="home__description">
              I build mobile applications, connected-device platforms, backend
              services, and cloud infrastructure with a focus on clean
              architecture, reliability, and maintainability.
            </p>

            <div className="home__actions">
              <a href="#projects" className="button">
                View Projects
              </a>
              <a
                href={resumePdf}
                download={site.resume.downloadName}
                className="button button--ghost"
              >
                Download Résumé <FontAwesomeIcon icon={faDownload} aria-hidden="true" />
              </a>
            </div>

            <ul className="home__social" aria-label="Social links">
              <li>
                <a
                  href={site.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="home__social-link"
                  aria-label="GitHub"
                >
                  <BiLogoGithub aria-hidden="true" />
                </a>
              </li>
              <li>
                <a
                  href={site.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="home__social-link"
                  aria-label="LinkedIn"
                >
                  <BiLogoLinkedin aria-hidden="true" />
                </a>
              </li>
              <li>
                <a
                  href={site.links.email}
                  className="home__social-link"
                  aria-label="Email"
                >
                  <BiLogoGmail aria-hidden="true" />
                </a>
              </li>
              <li>
                <a
                  href={site.links.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="home__social-link"
                  aria-label="Personal website"
                >
                  <BiGlobe aria-hidden="true" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </Container>
  );
}

const Container = styled.div`
  .home {
    position: relative;
    min-height: calc(100vh - var(--header-height));
    display: flex;
    align-items: center;

    &__container {
      padding-top: 4.5rem;
      padding-bottom: 3rem;
      width: 100%;
    }

    &__data {
      text-align: center;
      max-width: 46rem;
      margin-inline: auto;
    }

    &__eyebrow {
      color: var(--text-color);
      letter-spacing: 0.08em;
      text-transform: uppercase;
      font-size: var(--smaller-font-size);
      margin-bottom: 0.75rem;
    }

    &__title {
      position: relative;
      font-size: var(--biggest-font-size);
      line-height: 1.15;
      width: fit-content;
      max-width: 100%;
      margin: 0 auto 0.75rem;

      & span {
        display: block;
        font-family: var(--second-font);
        font-weight: var(--font-semi-bold);
        color: var(--first-color);
      }

      &-img-1,
      &-img-2 {
        width: 40px;
        position: absolute;
      }

      &-img-1 {
        top: -1rem;
        left: -1.5rem;
        transform: rotate(-15deg);
        animation: animate-star-1 5s infinite ease-in-out;
      }

      &-img-2 {
        bottom: 0.15rem;
        right: -1.5rem;
        transform: rotate(15deg);
        animation: animate-star-2 5s infinite ease-in-out;
      }
    }

    &__role {
      color: var(--white-color);
      font-weight: var(--font-medium);
      margin-bottom: 1rem;
    }

    &__description {
      color: var(--text-color);
      margin-bottom: 2rem;
    }

    &__actions {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 0.25rem;
      margin-bottom: 1.5rem;
    }

    &__social {
      display: flex;
      justify-content: center;
      gap: 0.5rem;

      &-link {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 2.75rem;
        height: 2.75rem;
        color: var(--first-color);
        font-size: 1.5rem;
        transition: color 0.3s, transform 0.3s;

        &:hover {
          color: var(--first-color-alt);
          transform: translateY(-0.25rem);
        }
      }
    }

    & .shape__small {
      top: -3rem;
      left: -3rem;
    }

    & .shape__big {
      bottom: 5rem;
      right: -10rem;
    }

    @keyframes animate-star-1 {
      0% {
        transform: scale(0.7) rotate(-15deg);
        opacity: 0.2;
      }
      50% {
        transform: scale(1) rotate(-15deg);
        opacity: 1;
      }
      100% {
        transform: scale(0.7) rotate(-15deg);
        opacity: 0.2;
      }
    }

    @keyframes animate-star-2 {
      0% {
        transform: scale(1) rotate(15deg);
        opacity: 1;
      }
      50% {
        transform: scale(0.7) rotate(15deg);
        opacity: 0.2;
      }
      100% {
        transform: scale(1) rotate(15deg);
        opacity: 1;
      }
    }
  }

  @media screen and (min-width: 1024px) {
    .home__title-img-1,
    .home__title-img-2 {
      width: 56px;
    }

    .home__title-img-2 {
      bottom: 0.35rem;
    }
  }
`;
