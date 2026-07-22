/* eslint-disable react/prop-types */
import { faGithubAlt } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function ItemsProductos({ item }) {
  return (
    <article className="items__card">
      <h3 className="items__price">{item.title}</h3>
      <span className="items__name">{item.summary}</span>
      <p className="items__name">{item.role}</p>
      <br />
      <div className="headerMedia">
        <ul className="footer__social">
          {item.repositoryUrl ? (
            <a
              href={item.repositoryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="footer__social-link"
              aria-label={`${item.title} repository`}
            >
              <FontAwesomeIcon icon={faGithubAlt} />
            </a>
          ) : null}
          {item.liveUrl ? (
            <a
              href={item.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="footer__social-link"
              aria-label={`${item.title} live site`}
            >
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </a>
          ) : null}
        </ul>
      </div>
      <br />
      <span className="items__name">{item.technologies.join(", ")}</span>
      <p className="items__name">{item.status}</p>
    </article>
  );
}
