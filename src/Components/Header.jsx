import styled from "styled-components";
import bestbroth from "../assets/img/bestbroth_1.png";
import sable from "../assets/img/sable.png";
import { HiMenuAlt2 } from "react-icons/hi";
import { MdClose } from "react-icons/md";
import { useState, useLayoutEffect, useEffect, useId } from "react";
import { useWindowScroll } from "react-use";
import { navigation } from "../data/navigation";
import { site } from "../data/site";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const menuId = useId();
  const { y } = useWindowScroll();

  useLayoutEffect(() => {
    setScrolled(y >= 50);
  }, [y]);

  useEffect(() => {
    const updateActiveSection = () => {
      const scrollOffset = window.scrollY + 120;
      let nextIndex = 0;
      navigation.forEach((item, index) => {
        const section = document.getElementById(item.id);
        if (section && section.offsetTop <= scrollOffset) {
          nextIndex = index;
        }
      });
      setActiveIndex(nextIndex);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);
    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <Container>
      <header className={scrolled ? "header bg-header" : "header"}>
        <nav className="nav container" aria-label="Primary">
          <a href="#home" className="nav__logo">
            <img src={bestbroth} alt="" width={20} height={20} />
            <span>{site.name}</span>
          </a>

          <div
            className={menuOpen ? "nav__menu show-menu" : "nav__menu"}
            id={menuId}
          >
            <ul className="nav__list">
              {navigation.map((item, index) => (
                <li className="nav__item" key={item.id}>
                  <a
                    href={item.href}
                    className={
                      activeIndex === index
                        ? "nav__link active-link"
                        : "nav__link"
                    }
                    onClick={() => {
                      setActiveIndex(index);
                      setMenuOpen(false);
                    }}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            <button
              type="button"
              className="nav__close"
              aria-label="Close menu"
              onClick={() => setMenuOpen(false)}
            >
              <MdClose aria-hidden="true" />
            </button>

            <img src={sable} alt="" className="nav__img" aria-hidden="true" />
          </div>

          <button
            type="button"
            className="nav__toggle"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls={menuId}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <HiMenuAlt2 aria-hidden="true" />
          </button>
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
      align-items: center;
      color: var(--white-color);
      background: transparent;
      border: none;
      cursor: pointer;
    }

    &__logo {
      column-gap: 0.5rem;
      font-weight: var(--font-medium);
      transition: color 0.3s;

      & img {
        width: 1.25rem;
        height: 1.25rem;
      }

      &:hover {
        color: var(--first-color);
      }
    }

    &__toggle {
      font-size: 1.5rem;
      min-width: 44px;
      min-height: 44px;
      justify-content: center;
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
      padding: 0.35rem 0.5rem;

      &:hover {
        color: var(--first-color);
      }
    }

    &__close {
      position: absolute;
      top: 0.75rem;
      right: 1rem;
      font-size: 1.5rem;
      min-width: 44px;
      min-height: 44px;
      justify-content: center;
    }

    &__img {
      width: 140px;
      position: absolute;
      top: 45%;
      left: -2rem;
      opacity: 0.35;
      pointer-events: none;

      @media screen and (min-width: 768px) {
        display: none;
      }
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
      inset: 0;
      background-color: rgba(20, 22, 26, 0.45);
      backdrop-filter: blur(24px);
      -webkit-backdrop-filter: blur(24px);
      z-index: -1;
    }
  }

  .active-link {
    color: var(--first-color);
  }

  @media screen and (min-width: 768px) {
    .nav {
      height: calc(var(--header-height) + 1.5rem);

      &__toggle,
      &__close {
        display: none;
      }

      &__list {
        flex-direction: row;
        column-gap: 2rem;
      }
    }
  }
`;
