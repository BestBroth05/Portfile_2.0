/* eslint-disable react/prop-types */
import styled from "styled-components";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { ProjectVisual } from "./visuals/ProjectVisual";

export function ProjectCard({ project }) {
  return (
    <Card className="project-card">
      <div className="project-card__media">
        <ProjectVisual type={project.visual} title={project.title} />
      </div>
      <div className="project-card__body">
        <div className="project-card__badge">{project.status}</div>
        <h3 className="project-card__title">{project.title}</h3>
        <p className="project-card__summary">{project.summary}</p>
        <p className="project-card__role">
          <strong>Role:</strong> {project.role}
        </p>
        <ul className="project-card__highlights">
          {project.highlights.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <ul className="project-card__tech" aria-label="Technologies">
          {project.technologies.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
        <div className="project-card__actions">
          {project.repositoryUrl ? (
            <a
              className="button"
              href={project.repositoryUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub aria-hidden="true" /> Repository
            </a>
          ) : null}
          {project.liveUrl ? (
            <a
              className="button button--ghost"
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaExternalLinkAlt aria-hidden="true" /> Live site
            </a>
          ) : null}
        </div>
      </div>
    </Card>
  );
}

const Card = styled.article`
  background: var(--container-color);
  border: 1px solid var(--border-subtle);
  border-radius: 1.5rem;
  overflow: hidden;
  box-shadow: 0 8px 24px hsla(22, 10%, 2%, 0.35);

  .project-card__media {
    padding: 1rem 1rem 0;
  }

  .project-visual {
    width: 100%;
    height: auto;
    display: block;
    border-radius: 1rem;
  }

  .project-card__body {
    padding: 1.25rem 1.5rem 1.75rem;
  }

  .project-card__badge {
    display: inline-flex;
    padding: 0.25rem 0.75rem;
    border-radius: 999px;
    background: rgba(98, 77, 163, 0.25);
    color: #d7cbff;
    font-size: var(--smaller-font-size);
    margin-bottom: 0.75rem;
  }

  .project-card__title {
    color: var(--first-color);
    font-size: var(--h2-font-size);
    margin-bottom: 0.5rem;
  }

  .project-card__summary,
  .project-card__role {
    color: var(--text-color);
    margin-bottom: 0.75rem;
  }

  .project-card__highlights {
    display: grid;
    gap: 0.45rem;
    margin-bottom: 1rem;
    color: var(--text-color);
    font-size: var(--small-font-size);

    li {
      padding-left: 0.9rem;
      position: relative;

      &::before {
        content: "";
        width: 0.35rem;
        height: 0.35rem;
        border-radius: 50%;
        background: var(--first-color);
        position: absolute;
        left: 0;
        top: 0.45rem;
      }
    }
  }

  .project-card__tech {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-bottom: 1.25rem;

    li {
      background: var(--surface-elevated);
      border: 1px solid var(--border-subtle);
      border-radius: 999px;
      padding: 0.3rem 0.7rem;
      font-size: var(--smaller-font-size);
      color: #ddd4ff;
    }
  }

  .project-card__actions {
    display: flex;
    flex-wrap: wrap;
    gap: 0.25rem;

    .button {
      margin: 0;
    }
  }
`;
