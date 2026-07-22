import { useEffect, useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { site } from "../data/site";

export function Contact() {
  const [status, setStatus] = useState("idle");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("contact") === "sent") {
      setStatus("success");
    }
  }, []);

  return (
    <Container>
      <section
        className="contact section"
        id="contact"
        aria-labelledby="contact-title"
      >
        <div className="contact__container container grid">
          <div className="contact__data">
            <h2 className="section__title" id="contact-title">
              Let&apos;s build reliable software together.
            </h2>
            <p className="contact__description">
              I&apos;m open to opportunities involving Flutter, Bluetooth Low
              Energy, IoT, backend development, and AWS cloud engineering.
            </p>
            <p className="contact__email">
              <FontAwesomeIcon icon={faEnvelope} aria-hidden="true" />{" "}
              <a href={site.links.email}>{site.email}</a>
            </p>

            <form
              className="form"
              action="https://formsubmit.co/olivaresbrayan0510@gmail.com"
              method="POST"
            >
              <input type="hidden" name="_subject" value="Portfolio contact" />
              <input
                type="hidden"
                name="_next"
                value={`${site.canonicalUrl}/?contact=sent#contact`}
              />
              <input type="hidden" name="_captcha" value="true" />
              <input
                type="text"
                name="_honey"
                className="visually-hidden"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
              />

              <div className="form__field">
                <label className="form__label" htmlFor="contact-name">
                  Name
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  minLength={2}
                />
              </div>

              <div className="form__field">
                <label className="form__label" htmlFor="contact-email">
                  Email
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                />
              </div>

              <div className="form__field">
                <label className="form__label" htmlFor="contact-subject">
                  Subject
                </label>
                <input
                  id="contact-subject"
                  name="subject"
                  type="text"
                  required
                />
              </div>

              <div className="form__field">
                <label className="form__label" htmlFor="contact-message">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  minLength={10}
                />
              </div>

              {status === "success" ? (
                <p className="form__status form__status--success" role="status">
                  Thanks for reaching out. Your message was sent successfully.
                </p>
              ) : null}

              <button type="submit" className="button">
                Send <FontAwesomeIcon icon={faPaperPlane} aria-hidden="true" />
              </button>
            </form>
          </div>
        </div>
      </section>
    </Container>
  );
}

export { Contact as Party };

const Container = styled.div`
  .contact {
    &__container {
      max-width: 40rem;
      margin-inline: auto;
    }

    &__data {
      text-align: center;
    }

    &__description {
      color: var(--text-color);
      margin-bottom: 1rem;
    }

    &__email {
      margin-bottom: 1.5rem;
      font-weight: var(--font-semi-bold);

      a {
        color: var(--white-color);

        &:hover {
          color: var(--first-color);
        }
      }
    }

    .section__title {
      margin-bottom: 1rem;
    }

    .form {
      text-align: left;
    }
  }
`;
