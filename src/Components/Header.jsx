import styled from "styled-components";
import bestbroth from "../assets/img/bestbroth_1.png";
import sable from "../assets/img/sable.png";
import { HiMenuAlt2 } from "react-icons/hi";
import { MdClose } from "react-icons/md";
import { useState, useLayoutEffect, useEffect } from "react";
import { useWindowScroll } from "react-use";
import { navigation } from "../data/navigation";
import { site } from "../data/site";

export function Header() {
  const [state, setState] = useState(false);
  const [stateActive, setStateActive] = useState(0);
  const [stateHeader, setStateHeader] = useState(false);

  const { y } = useWindowScroll();

  useLayoutEffect(() => {
    setStateHeader(y >= 50);
  }, [y]);

  useEffect(() => {
    const updateActiveSection = () => {
      const scrollOffset = window.scrollY + 120;

      let activeIndex = 0;
      navigation.forEach((item, index) => {
        const section = document.getElementById(item.id);
        if (section && section.offsetTop <= scrollOffset) {
          activeIndex = index;
        }
      });

      setStateActive(activeIndex);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  return (
    <Container>
      <header
        className={stateHeader ? "header bg-header" : "header"}
        id="header"
      >
        <nav className="nav container" aria-label="Primary">
          <a href="#home" className="nav__logo">
            <img src={bestbroth} alt="" />
            {site.name}
          </a>

          <div
            className={state ? "nav__menu show-menu" : "nav__menu"}
            id="nav-menu"
          >
            <ul className="nav__list" onClick={() => setState(false)}>
              {navigation.map((item, index) => (
                <li className="nav__item" key={item.id}>
                  <a
                    href={item.href}
                    onClick={() => setStateActive(index)}
                    className={
                      stateActive === index
                        ? "nav__link active-link"
                        : "nav__link"
                    }
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            <div
              className="nav__close"
              id="nav-close"
              onClick={() => setState(false)}
              role="button"
              tabIndex={0}
              aria-label="Close menu"
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  setState(false);
                }
              }}
            >
              <MdClose />
            </div>

            <img src={sable} alt="" className="nav__img" />
          </div>

          <div
            className={state ? "nav__toggle show-menu" : "nav__toggle"}
            id="nav-toggle"
            onClick={() => setState((open) => !open)}
            role="button"
            tabIndex={0}
            aria-label="Open menu"
            aria-expanded={state}
            aria-controls="nav-menu"
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                setState((open) => !open);
              }
            }}
          >
            <HiMenuAlt2 />
          </div>
        </nav>
      </header>
    </Container>
  );
}
const Container = styled.div`
  .header {
    position: fixed;
    width: 100%;
    background: transparent;
    top: 0;
    left: 0;
    z-index: var(--z-fixed);
    transition: background 0.3s, box-shadow 0.3s;
  }

  .nav {
    position: relative;
    height: var(--header-height);
    display: flex;
    justify-content: space-between;
    align-items: center;

    &__logo,
    &__toggle,
    &__close {
      display: inline-flex;
      color: var(--white-color);
    }
    &__logo {
      align-items: center;
      column-gap: 0.5rem;
      font-weight: var(--font-medium);
      transition: color 0.3s;

      & img {
        width: 1.25rem;
      }

      &:hover {
        color: var(--first-color);
      }
    }
    &__toggle {
      font-size: 1.25rem;
      cursor: pointer;
    }
    &__menu {
      @media screen and (max-width: 767px) {
        position: fixed;
        top: -100%;
        left: 0;
        background-color: var(--body-color);
        width: 100%;
        box-shadow: 0 4px 8px hsla(22, 10%, 2%, 0.5);
        padding-block: 3.5rem 3rem;
        border-radius: 0 0 2rem 2rem;
        transition: top 0.4s;
      }
    }
    &__list {
      display: flex;
      flex-direction: column;
      text-align: center;
      row-gap: 1.5rem;
    }
    &__link {
      color: var(--white-color);
      font-family: var(--second-font);
      transition: color 0.4s;
      &li.active {
        color: var(--first-color);
      }
      &:hover {
        color: var(--first-color);
      }
      
    }
    &__close {
      position: absolute;
      top: 1rem;
      right: 1.5rem;
      font-size: 1.5rem;
      cursor: pointer;
    }
    &__img {
      width: 180px;
      position: absolute;
      top: 40%;
      left: -3rem;
    }
  }

  .show-menu {
    top: 0;
  }

  .bg-header {
    background-color: transparent;
    &::after {
      content: "";
      position: absolute;
      width: 1000%;
      height: 100%;
      background-color: rgba(20, 22, 26, 0.3);
      backdrop-filter: blur(24px);
      -webkit-backdrop-filter: blur(24px);
      top: 0;
      left: 0;
      z-index: -1;
    }
  }

  .active-link {
    color: var(--first-color);
  }
`;
