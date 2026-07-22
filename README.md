# Portfile 2.0

Personal portfolio of **Brayan Olivares** — Software Engineer focused on
Flutter, Bluetooth Low Energy, IoT platforms, Node.js/TypeScript backends, and
AWS cloud infrastructure.

🌐 **Live:** [brayanolivares.com](https://brayanolivares.com)

---

## Purpose

This site presents professional experience, public flagship projects, selected
professional work (high-level only), technical skills, and contact options.

Public flagship projects:

1. Artifact Repository Service
2. Flutter Bluetooth Platform
3. Personal Portfolio

Selected professional work is summarized without private repositories, client
screenshots, or proprietary implementation details.

---

## Stack

| Area | Technologies |
| --- | --- |
| Core | React 18, Vite 5, React Router DOM |
| Styles | Styled Components + CSS variables |
| Motion | ScrollReveal, TSParticles (slim) |
| Icons | Font Awesome, React Icons |
| CI/CD | GitHub Actions → GitHub Pages |
| Forms | FormSubmit |

---

## Architecture

Single-page application:

`index.html` → `src/main.jsx` → `App` → `Home`

Page sections:

1. Header
2. Hero
3. About
4. Professional Experience
5. Featured Projects
6. Selected Professional Work
7. Technical Skills
8. Contact
9. Footer

Content lives in `src/data/` (`site`, `navigation`, `experience`,
`featuredProjects`, `professionalWork`, `skills`).

---

## Local development

```bash
npm ci
npm run dev
```

Other scripts:

```bash
npm run lint
npm run build
npm run preview
```

---

## Validation

Before release:

```bash
npm ci
npm run lint
npm run build
```

---

## Deployment

GitHub Actions deploys `dist/` to GitHub Pages on pushes to `main`.

- Canonical domain: `https://brayanolivares.com`
- Vite `base: "/"`
- `public/CNAME` contains `brayanolivares.com`
- Workflow also runs `npm run lint` before build

---

## Accessibility

- Semantic landmarks and labeled form controls
- Keyboard-accessible navigation and scroll-to-top button
- `:focus-visible` styles
- `prefers-reduced-motion` support (including disabled particles)
- External links use `rel="noopener noreferrer"`

---

## Featured-project strategy

Flagship projects are public portfolio repositories with reusable cards and
portfolio-owned SVG visuals.

Selected professional work uses generic visuals and high-level descriptions
only. No private repository links and no client UI screenshots are published.

---

## Contact

- [LinkedIn](https://www.linkedin.com/in/brayan-guillermo-olivares-pe%C3%B1a-865a74277)
- [GitHub](https://github.com/BestBroth05)
- [olivaresbrayan0510@gmail.com](mailto:olivaresbrayan0510@gmail.com)
- [brayanolivares.com](https://brayanolivares.com)
