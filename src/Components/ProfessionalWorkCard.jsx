import styled from "styled-components";
import { WorkVisual } from "./visuals/WorkVisual";

export function ProfessionalWorkCard({ item }) {
  return (
    <Card className="work-card">
      <WorkVisual type={item.visual} title={item.title} />
      <div className="work-card__body">
        <p className="work-card__label">{item.label}</p>
        <p className="work-card__category">{item.category}</p>
        <h3 className="work-card__title">{item.title}</h3>
        <p className="work-card__role">
          <strong>Role:</strong> {item.role}
        </p>
        <p className="work-card__summary">{item.summary}</p>
        <ul className="work-card__tech" aria-label="Technologies">
          {item.technologies.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
      </div>
    </Card>
  );
}

const Card = styled.article`
  background: var(--container-color);
  border: 1px solid var(--border-subtle);
  border-radius: 1.15rem;
  overflow: hidden;
  box-shadow: 0 4px 16px hsla(22, 10%, 2%, 0.28);

  .work-visual {
    width: 100%;
    height: auto;
    display: block;
  }

  .work-card__body {
    padding: 1rem 1.1rem 1.25rem;
  }

  .work-card__label,
  .work-card__category {
    font-size: var(--smaller-font-size);
    color: var(--text-color-light);
    margin-bottom: 0.25rem;
  }

  .work-card__title {
    font-size: var(--h3-font-size);
    color: var(--first-color);
    margin: 0.35rem 0 0.5rem;
  }

  .work-card__role,
  .work-card__summary {
    color: var(--text-color);
    font-size: var(--small-font-size);
    margin-bottom: 0.65rem;
  }

  .work-card__tech {
    display: flex;
    flex-wrap: wrap;
    gap: 0.4rem;

    li {
      background: var(--surface-elevated);
      border-radius: 999px;
      padding: 0.2rem 0.55rem;
      font-size: 0.7rem;
      color: #d9d0ff;
    }
  }
`;
