import styled from "styled-components";
import { professionalWork } from "../data/professionalWork";
import { ProfessionalWorkCard } from "./ProfessionalWorkCard";

export function ProfessionalWork() {
  return (
    <Container>
      <section
        className="work section"
        id="selected-work"
        aria-labelledby="work-title"
      >
        <h2 className="section__title" id="work-title">
          Selected Professional Work
        </h2>
        <p className="section__subtitle">
          High-level summaries of professional and client engagements. Private
          repositories and proprietary details are intentionally omitted.
        </p>
        <div className="work__grid container grid">
          {professionalWork.map((item) => (
            <ProfessionalWorkCard key={item.slug} item={item} />
          ))}
        </div>
      </section>
    </Container>
  );
}

const Container = styled.div`
  .work__grid {
    gap: 1.25rem;
  }

  @media screen and (min-width: 768px) {
    .work__grid {
      grid-template-columns: repeat(3, 1fr);
      align-items: stretch;
    }
  }

  @media screen and (max-width: 767px) {
    .work__grid {
      max-width: 28rem;
      margin-inline: auto;
    }
  }
`;
