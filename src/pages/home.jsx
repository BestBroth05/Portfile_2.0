import styled from "styled-components";
import { Header } from "../Components/Header";
import { Main } from "../Components/Main";
import { Footer } from "../Components/Footer";
import img1 from "../assets/img/shape-bg.png";
import ScrollReveal from "scrollreveal";
import { useEffect } from "react";
import { ScrollToTop } from "../Components/ScrollToTop";
import ParticleBackground from "../Components/Background";

export function Home() {
  useEffect(() => {
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (motionQuery.matches) return undefined;

    const sr = ScrollReveal({
      origin: "top",
      distance: "40px",
      duration: 1800,
      delay: 200,
      reset: false,
    });

    sr.reveal(`.home__data, .footer__content, .footer__logo, .footer__description`);
    sr.reveal(`.about__data, .experience__card, .project-card, .work-card, .skill-card`, {
      interval: 80,
    });

    return () => {
      sr.destroy();
    };
  }, []);

  return (
    <Container>
      <ParticleBackground />
      <img src={img1} alt="" className="shape__bg" aria-hidden="true" />
      <Header />
      <Main />
      <Footer />
      <ScrollToTop />
    </Container>
  );
}

const Container = styled.div`
  .container {
    max-width: 1024px;
    margin-inline: 1.5rem;
  }

  .grid {
    display: grid;
    gap: 1.5rem;
  }

  .section {
    padding-block: 5rem 1.5rem;

    &__title {
      font-size: var(--h1-font-size);
      font-family: var(--second-font);
      font-weight: var(--font-semi-bold);
      line-height: 130%;
      color: var(--first-color);
      text-align: center;
      margin-bottom: 2.5rem;
    }

    &__subtitle {
      color: var(--text-color);
      text-align: center;
      max-width: 40rem;
      margin: -1.5rem auto 2.5rem;
    }
  }

  .main {
    overflow: hidden;
  }

  .shape {
    &__bg {
      position: fixed;
      width: 100%;
      height: 100vh;
      object-fit: cover;
      mix-blend-mode: soft-light;
      opacity: 0.5;
      z-index: -1;
    }
    &__small,
    &__big {
      position: absolute;
      background-color: var(--first-color);
      border-radius: 50%;
      filter: blur(96px);
      z-index: -2;
    }
    &__small {
      width: 150px;
      height: 150px;
    }
    &__big {
      width: 250px;
      height: 250px;
      opacity: 0.8;
    }
  }

  @media screen and (max-width: 340px) {
    .container {
      margin-inline: 1rem;
    }
  }

  @media screen and (min-width: 767px) {
    .section {
      padding-block: 7rem 1.5rem;

      &__title {
        margin-bottom: 4rem;
      }
    }
  }

  @media screen and (min-width: 1024px) {
    .shape__small,
    .shape__big {
      filter: blur(132px);
      opacity: 0.5;
    }
    .shape__small {
      width: 350px;
      height: 350px;
    }
    .shape__big {
      width: 450px;
      height: 450px;
    }
  }

  @media screen and (min-width: 1072px) {
    .container {
      margin-inline: auto;
    }
  }
`;
