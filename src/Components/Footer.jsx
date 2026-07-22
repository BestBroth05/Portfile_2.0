import styled from "styled-components";
import bestbroth from "../assets/img/bestbroth_1.png";
import { BiLogoLinkedin, BiLogoGithub, BiLogoGmail, BiGlobe } from "react-icons/bi";
import { site } from "../data/site";

export function Footer() {
  return (
    <Container>
      <footer className="footer section">
        <div className="footer__container container grid">
          <div>
            <a href={site.links.website} className="footer__logo">
              <img src={bestbroth} alt="" width={20} height={20} />
              {site.name}
            </a>
            <p className="footer__description">
              Software engineer focused on Flutter, Bluetooth Low Energy, IoT,
              backend services, and AWS cloud systems.
            </p>
          </div>

          <div className="footer__content">
            <h3 className="footer__title">Links</h3>
            <ul className="footer__social" aria-label="Footer social links">
              <li>
                <a
                  href={site.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer__social-link"
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
                  className="footer__social-link"
                  aria-label="LinkedIn"
                >
                  <BiLogoLinkedin aria-hidden="true" />
                </a>
              </li>
              <li>
                <a
                  href={site.links.email}
                  className="footer__social-link"
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
                  className="footer__social-link"
                  aria-label="Portfolio website"
                >
                  <BiGlobe aria-hidden="true" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <p className="footer__copy">© {site.name} 2026</p>
      </footer>
    </Container>
  );
}

const Container = styled.div`
  .footer {
    position: relative;
    overflow: hidden;
    padding-bottom: 2rem;

    &__container {
      row-gap: 2rem;
    }

    &__logo {
      display: inline-flex;
      align-items: center;
      column-gap: 0.5rem;
      color: var(--first-color);
      font-weight: var(--font-medium);
      margin-bottom: 1rem;

      & img {
        width: 20px;
        height: 20px;
      }
    }

    &__description {
      font-size: var(--small-font-size);
      color: var(--text-color);
      max-width: 28rem;
    }

    &__title {
      font-size: var(--h3-font-size);
      margin-bottom: 1rem;
    }

    &__social {
      display: flex;
      gap: 0.75rem;

      &-link {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 2.75rem;
        height: 2.75rem;
        color: var(--first-color);
        font-size: 1.35rem;
        transition: color 0.3s, transform 0.3s;

        &:hover {
          color: var(--first-color-alt);
          transform: translateY(-0.2rem);
        }
      }
    }

    &__copy {
      display: block;
      margin-top: 3rem;
      font-size: var(--smaller-font-size);
      text-align: center;
      color: var(--text-color-light);
    }
  }

  @media screen and (min-width: 768px) {
    .footer__container {
      grid-template-columns: 1.4fr 0.6fr;
      align-items: start;
      justify-content: space-between;
    }
  }
`;
