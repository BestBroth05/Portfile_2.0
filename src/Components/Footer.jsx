import styled from "styled-components";
import bestbroth from "../assets/img/bestbroth.png";
import img2 from "../assets/img/C3PO.png";
import img3 from "../assets/img/R2D2.png";
import {faFacebook, faXTwitter, faInstagram} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {BiLogoLinkedin, BiLogoGithub, BiLogoGmail} from "react-icons/bi"
export function Footer() {
  return (
    <Container>
      <footer className="footer section">
        <div className="shape__small"></div>
        <div className="shape__big"></div>

        <div className="footer__container container grid">
          <div>
            <a href="#" className="footer__logo">
              <img src={bestbroth} alt="logo image" />
              BestBroth
            </a>

            <p className="footer__description">
              Its a long way to the top if you wanna coding.
            </p>
          </div>

          <div className="footer__content">
            <div>
              <h3 className="footer__title">About me</h3>

              <ul className="footer__links">
                <li>
                  <a href="https://twitter.com/iambestbroth" className="footer__link">
                  <FontAwesomeIcon icon={faXTwitter} /> Twitter
                  </a>
                </li>
                <li>
                  <a href="https://www.facebook.com/brayan.olivares.52643" className="footer__link">
                  <FontAwesomeIcon icon={faFacebook} /> Facebook
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/bray_olivares" className="footer__link">
                  <FontAwesomeIcon icon={faInstagram} /> Instagram
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="footer__title">Social Media</h3>

              <ul className="footer__social">
                <a
                  href="https://linkedin.com/in/brayan-guillermo-olivares-peña-865a74277"
                  target="blank"
                  className="footer__social-link"
                >
                <BiLogoLinkedin/>
                </a>

                <a
                  href="https://github.com/BestBroth05"
                  target="blank"
                  className="footer__social-link"
                >
                <BiLogoGithub/>
                </a>

                <a
                  href="mailto:olivaresbrayan0510@gmail.com?"
                  target="blank"
                  className="footer__social-link"
                >
                  <BiLogoGmail/>
                </a>
              </ul>
            </div>
          </div>

          <img src={img2} alt="footer image" className="footer__tree-1" />
          <img src={img3} alt="footer image" className="footer__tree-2" />
        </div>

        <span className="footer__copy">&#169; Brayan Olivares 2024</span>
      </footer>
    </Container>
  );
}
const Container = styled.div`
  .footer {
    position: relative;
    overflow: hidden;

    &__container {
      row-gap: 4rem;
    }
    &__logo {
      display: inline-flex;
      align-items: center;
      column-gap: 0.5rem;
      color: var(--first-color);
      font-weight: var(--font-medium);
      margin-bottom: 1.25rem;
      transition: color 0.3s;

      & img {
        width: 20px;
      }
      &:hover {
        color: var(--first-color-alt);
      }
    }
    &__description {
      font-size: var(--small-font-size);
    }
    &__content,
    &__links {
      display: grid;
    }
    &__content {
      grid-template-columns: repeat(2, max-content);
      gap: 2.5rem 4.5rem;
    }
    &__title {
      font-size: var(--h3-font-size);
      font-weight: var(--font-semi-bold);
      margin-bottom: 1.5rem;
    }
    &__links {
      row-gap: 0.75rem;
    }
    &__link {
      color: var(--text-color);
      font-size: var(--small-font-size);
      transition: color 0.3s;

      &:hover {
        color: var(--first-color);
      }
    }
    &__social {
      display: flex;
      column-gap: 1.25rem;
      margin-bottom: 80px;
      &-link {
        color: var(--first-color);
        font-size: 1.25rem;
        transition: color 0.3s, transform 0.3s;

        &:hover {
          color: var(--first-color-alt);
          transform: translateY(-0.25rem);
        }
      }
    }
    &__tree-1,
    &__tree-2 {
      width: 150px;
      position: absolute;
    }
    &__tree-1 {
      height: 450px;
      top: 4rem;
      right: -1.5rem;
    }
    &__tree-2 {
      left: -1.5rem;
      bottom: -0.5rem;
    }
    &__copy {
      position: relative;
      display: block;
      margin-top: 8rem;
      font-size: var(--smaller-font-size);
      text-align: center;
      color: var(--text-color-light);
    }
    & .shape__small {
      right: -7rem;
      top: 15rem;
    }
    & .shape__big {
      left: -8rem;
      bottom: -5rem;
    }
  }
`;
