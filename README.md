# marcandy.github.io

Personal portfolio for Marc-Andy Noel Jeune. Built with [Astro](https://astro.build) 7 and Tailwind CSS 4, deployed to GitHub Pages by GitHub Actions.

## Run locally

```
npm install
npm run dev
```

The site is at http://localhost:4321. To check the production build: `npm run build`, then `npm run preview`.

## Edit content

Everything editable lives in two places; components never need to change for a content update.

- **Site-wide facts** (name, headline, status line, email, links, experience, skills): `src/data/site.ts`
- **Projects**: one markdown file per project in `src/content/projects/`. To add one, copy an existing file, fill in the frontmatter (`title`, `tagline`, `year`, `context`, `stack`, `order`, `links`), and write the body. The build validates the frontmatter and fails loudly on mistakes. Cards on the homepage and the case-study page are both generated from it.
- **Resume**: replace `public/resume.pdf`. Also replace `public/img/resume.pdf`, which keeps the old site's resume URL working.
- **Design tokens** (colors, fonts): the `@theme` block in `src/styles/global.css`

## Deploy

Push to `master`. The workflow in `.github/workflows/deploy.yml` builds the site and publishes it to GitHub Pages. Nothing else to do.
