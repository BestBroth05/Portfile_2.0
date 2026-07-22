import styled from "styled-components";
import img1 from "../assets/img/me.png"
export function About() {
  return (<Container>
   <section className="about section" id="about">
          <div className="shape__small"></div>
          <div className="shape__big"></div>

          <div className="about__container container grid">
            <div className="about__data">
              <h2 className="section__title">
              About me
              </h2>

              <p className="about__description">
              Most mobile developers hand off at the API. I go further — from BLE protocol optimization and Raspberry Pi integrations to Flutter frontends and AWS-backed cloud infrastructure.
              </p>
              <p className="about__description">
              4+ years building IoT and cross-platform systems that run in hospitals, buses, and refrigerators across 10+ cities and 200+ connected devices. I don&apos;t just build features; I own the full picture from hardware to user interface. Available for remote roles globally.
              </p>

              <h3 className="section__title">
              Experience
              </h3>
              <p className="about__description">
              <strong>AJ Electronic Design — Flutter &amp; IoT Engineer</strong> | Remote | Oct 2022 – Present
              </p>
              <p className="about__description">
              <strong>Government Agency, Hidalgo — Software Engineer Intern</strong> | Jan 2022 – June 2022
              </p>

              <h3 className="section__title">
              Education
              </h3>
              <p className="about__description">
              Bachelor&apos;s Degree in Software Engineering — Universidad Tecnológica de la Sierra Hidalguense | 2019 – 2023
              </p>

              <h3 className="section__title">
              Languages
              </h3>
              <p className="about__description">
              English: Professional Working Proficiency · Spanish: Native
              </p>
              
            </div>

            <img
              src={img1}
              alt="about image"
              className="about__img"
            />
          </div>
        </section>
  </Container>);
}
const Container =styled.div`
  .about{
    position: relative;

    &__container{
        row-gap: 3.5rem;

        & .section__title{
            margin-bottom: 1rem;
        }
    }
    &__data{
        text-align: center;
    }
    &__description{
        text-align: left;
        margin-bottom: 1rem;
    }
    &__img{
        width: 250px;
        height: 450px;
        justify-self: center;
        animation:flotar 1.9s ease-in-out infinite alternate;
    }
    & .shape__small{
        top: 2rem;
        right: -3rem;
    }
    & .shape__big{
        bottom: 0;
        left: -8rem;
    }
}
`
