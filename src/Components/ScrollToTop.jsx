import styled from "styled-components";
import { useLayoutEffect, useRef } from "react";
import { useWindowScroll } from "react-use";

export function ScrollToTop() {
  const ref = useRef(null);
  const { y } = useWindowScroll();

  const scrollTo = () => {
    const element = document.getElementById("home");
    element?.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };

  useLayoutEffect(() => {
    if (!ref.current) return;
    ref.current.hidden = y <= 200;
  }, [y]);

  return (
    <Up
      ref={ref}
      type="button"
      onClick={scrollTo}
      aria-label="Scroll to top"
      hidden
    >
      ↑
    </Up>
  );
}

const Up = styled.button`
  width: 3rem;
  height: 3rem;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  color: white;
  background-color: var(--container-color);
  border: 1px solid var(--border-subtle);
  font-size: 22px;
  position: fixed;
  right: 1rem;
  bottom: 1rem;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  transition: transform 0.2s ease;
  z-index: var(--z-fixed);

  &[hidden] {
    display: none !important;
  }

  &:hover {
    transform: scale(1.1);
  }

  &:active {
    transform: scale(0.95);
  }
`;
