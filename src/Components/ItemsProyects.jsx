/* eslint-disable react/prop-types */
import {faGithubAlt} from '@fortawesome/free-brands-svg-icons';
import {faArrowUpRightFromSquare} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Carousel } from './Carousel';
export function ItemsProductos({item}) {

  return (
    <article className="items__card" id='carousel'>
    <Carousel data={item.img}></Carousel>

      <h3 className="items__price">{item.title}</h3>
      <span className="items__name">{item.precio}</span>
      <br />
      <div className='headerMedia'>
              <ul className="footer__social">
                <a
                  href={item.repo}
                  target="blank"
                  className="footer__social-link"
                >
                <FontAwesomeIcon icon={faGithubAlt} />
                </a>

                <a
                  href={item.website}
                  target="blank"
                  className="footer__social-link"
                >
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                </a>
              </ul>
              </div>
              <br />
              <span className="items__name">{item.technologies}</span>
    </article>
  );
}
