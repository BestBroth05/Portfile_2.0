import styled from "styled-components";
import bestbroth from "../assets/img/bestbroth_1.png";
import sable from "../assets/img/sable.png";
import { HiMenuAlt2 } from "react-icons/hi";
import { MdClose } from "react-icons/md";
import { useState, useLayoutEffect } from "react";
import { useWindowScroll } from "react-use";
export function Header() {
  const [state, setState] = useState(false);
  const [stateActive, setStateActive] = useState(0);
  const [stateHeader, setStateHeader] = useState(false);

  const { y } = useWindowScroll();
  var apuntador;
  useLayoutEffect(() => {
    if (y >= 50) {
      setStateHeader(true);
    } else {
      setStateHeader(false);
    }
  }, [y]);

  // focusToolbar (() => {
  //   if (apuntador) {
      
  //   }
  // }, []);

  return (
    <Container>
      <header
        className={stateHeader ? "header bg-header" : "header"}
        id="header"
      >
        <nav className="nav container">
          <a href="#" className="nav__logo">
            <img src={bestbroth} alt="logo image" />
            BestBroth
          </a>

          <div
            className={state ? "nav__menu show-menu" : "nav__menu"}
            id="nav-menu"
          >
            <ul className="nav__list" onClick={() => setState(!state)}>
              <li className="nav__item">
                <a href="#home" onClick={() => setStateActive(0)} className= {stateActive == 0 ? "nav__link active-link" : "nav__link"}>
                  Home
                </a>
              </li>
              <li className="nav__item">
                <a href="#about" onClick={() => setStateActive(1)} className= {stateActive == 1 ? "nav__link active-link" : "nav__link"}>
                  About
                </a>
              </li>
              <li className="nav__item">
                <a href="#knowledge" onClick={() => setStateActive(2)} className= {stateActive == 2 ? "nav__link active-link" : "nav__link"}>
                  Knowledge
                </a>
              </li>
              <li className="nav__item">
                <a href="#proyects" onClick={() => setStateActive(3)} className= {stateActive == 3 ? "nav__link active-link" : "nav__link"}>
                  Projects
                </a>
              </li>
              <li className="nav__item">
                <a href="#contact" onClick={() => setStateActive(4)} className= {stateActive == 4 ? "nav__link active-link" : "nav__link"}>
                  Get in Touch
                </a>
              </li>
            </ul>

            <div
              className="nav__close"
              id="nav-close"
              onClick={() => setState(!state)}
            >
              <MdClose />
            </div>

            <img src={sable} alt="nav image" className="nav__img" />
          </div>

          <div
            className={state ? "nav__toggle show-menu" : "nav__toggle"}
            id="nav-toggle"
            onClick={() => setState(!state)}
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
