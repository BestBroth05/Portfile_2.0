/* eslint-disable no-unused-vars */
import styled from "styled-components";
import img1 from "../assets/img/pngwing.com (55).png";
import img2 from "../assets/img/pngwing.com (50).png";
import img3 from "../assets/img/pngwing.com (57).png";
import img4 from "../assets/img/pngwing.com (59).png";
import img5 from "../assets/img/pngwing.com (50).png";
import { ItemsCategorias } from "../Components/ItemsKnowledge";
import { datacategorias } from "../data/db";
export function Categorias() {
  
  return (
    <Container>
      <section className="category section" id="knowledge">
        <div className="shape__small"></div>

        <h2 className="section__title">
        Knowledge
        </h2>

        <div className="category__container container grid">
          {datacategorias.map((item, index) => {
            return <ItemsCategorias key={index} item={item}/>;
          })}
        </div>
      </section>
    </Container>
  );
}
const Container = styled.div`
  .category {
    position: relative;

    &__container {
      padding-top: 4rem;
      grid-template-columns: 228px;
      justify-content: center;
      row-gap: 6rem;
    }
    &__card {
      position: relative;
      background-color: var(--container-color);
      border-radius: 2rem;
      margin-top: 50px;
      padding: 4.5rem 2.25rem 2rem;
      box-shadow: 0 4px 16px hsla(22, 10%, 2%, 0.3);
      text-align: center;
      transition: background 0.3s;

      &:hover .category__img {
        transform: translateY(-0.5rem);
      }
    }
    &__img {
      width: 120px;
      position: absolute;
      inset: 0;
      margin: 0 auto;
      top: -3.5rem;
      transition: transform 0.3s;
    }
    &__title {
      font-size: var(--h3-font-size);
      font-weight: var(--font-semi-bold);
      color: var(--first-color);
      margin-bottom: 0.5rem;
    }
    &__description {
      font-size: var(--small-font-size);
      text-align: left;
      position: relative;
      background-color: grey;
      border-radius: .75rem;
      padding: 10px;
      margin: 10px;
      text-align: center;
      transition: background 0.3s;
    }
    &__star {
      width: 40px;
      position: absolute;
      top: 3.5rem;
      right: 0.5rem;
      transform: rotate(15deg);
    }
    & .shape__small {
      top: 25rem;
      left: -4rem;
    }
  }
`;
