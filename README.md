# Marc-Andy Noel Jeune

Personal portfolio for an AI software engineer building agent workflows and production web and mobile products.

[View the portfolio](https://marcandy.github.io)

## Local preview

```bash
npm run dev
```

Open `http://localhost:4173`.

## Editing content

- The landing page is `index.html`; each case study lives in `projects/<name>/index.html`.
- When the resume changes, replace both copies: `assets/marc-andy-noel-jeune-resume.pdf` and `img/resume.pdf`.
- Keep the homepage experience, skills, community contributions, and project results in sync with the resume.
- `npm run check` validates every page (links, ids, meta, copy rules), the six-project order, evidence links, and matching resume copies. It runs on pull requests and before each deploy.
- Selected work uses two cards per row above 48rem and one below it. Preserve the selected project order and direct demo/code links.
- See [the hiring content review](docs/hiring-content-review.md) for the current editorial standard and [the original review](docs/portfolio-review.md) for project research.
- `npm run build:sites` packages all pages and assets under `dist/` for the optional Sites deployment.
- When changing CSS, update the `styles.css?v=...` version in every page so returning visitors receive the new styles.
- Pushing to `master` publishes automatically.
