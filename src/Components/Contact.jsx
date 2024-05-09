import styled from "styled-components";
import {faEnvelope} from '@fortawesome/free-regular-svg-icons';
import {faPaperPlane} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import img1 from "../assets/img/me_mamado.png"
import img2 from "../assets/img/pesa.png"
export function Party() {
  return (<Container>
  <section className="party section" id="contact">
          <div className="party__container container grid">
            <div className="party__data">
              <h2 className="section__title">
                It is now or never!<br />
                Get in touch with me
              </h2>

              <p className="party__description">
              If you want to contact me, you can do so through my social networks or by filling out the contact form. I will answer you as soon as possible. Thank you!
              </p>
              <p className="party__email">
              <FontAwesomeIcon icon={faEnvelope} /> olivaresbrayan0510@gmail.com
              </p>
              <div className="form">
                <form action="https://formsubmit.co/a9a96aa1fd37ed87d57009fa12df63a0" method="post">
                  <input type="text" id="name" name="name" placeholder="Name"/>

                  <input type="email" id="email" name="email" placeholder="Email"/>

                  <input type="text" id="subject" name="subject" placeholder="Subject"/>

                  <textarea id="msg" name="comments" placeholder="Message"></textarea>
                  <a href=""></a>
                  <button type="submit" className="button">Send <FontAwesomeIcon icon={faPaperPlane} /></button>
                  <input type="hidden" name="_next" value="http://localhost:5173"/>
                  <input type="hidden" name="_captcha" value="false"/>
              </form>
              </div>
            </div>

            <div className="party__images">
              <img
                src={img1}
                alt="party image"
                className="party__img"
              />

              <img
                src={img2}
                alt="party image"
                className="party__star-1"
              />
              <img
                src={img2}
                alt="party image"
                className="party__star-2"
              />
            </div>
          </div>
        </section>
  </Container>);
}
const Container =styled.div`
  .party{
    position: relative;
    
    &__container{
        row-gap: 5rem;

        & .section__title{
            margin-bottom: 1rem;
        }
    }
    &__data{
        text-align: center;
    }
    &__description{
        margin-bottom: 2rem;
    }
    &__email{
      margin-bottom: 2rem;
      font-weight: bold;
    }
    &__images{
        position: relative;
        justify-self: center;
    }
    &__img{
        width: 250px;
    }
    &__star-1,
    &__star-2{
        width: 50px;
        position: absolute;
        transform: rotate(15deg);
    }
    &__star-1{
        top: 5rem;
        left: -.5rem;
        animation: animate-star-1 5s infinite ease-in-out
    }
    &__star-2{
        right: -1.5rem;
        bottom: 2rem;
        animation: animate-star-2 5s infinite ease-in-out
    }
}
`