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
              I love creating websites that provide a unique and satisfying user experience. You can see some of my projects in the projects section.
              </p>
              <p className="about__description">
              I am a self-taught person, responsible and committed to my work. I am constantly learning new technologies and tools to improve my skills. Below, you can see my skills and technologies I use.
              </p>
              <p className="about__description">
              Feel free to contact me if you have any questions.
              </p>

              <a href="https://www.instagram.com/bray_olivares" className="button">
                More about me!!!
              </a>
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