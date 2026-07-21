# Marc-Andy Noel Jeune

The source for [marcandy.github.io](https://marcandy.github.io), rebuilt as a focused software engineering portfolio.

## Preview locally

```bash
npm run dev
```

Open `http://localhost:4173`. There is no production build step and no application dependency to install.

## Update the site

### Edit a project

Project case studies live in the `#work` section of `index.html`. Copy an existing `<article class="project-card">`, keep the problem, approach, decision, and result structure, then update its links and technology list. Keep claims tied to the resume or a public repository.

### Update skills or experience

The experience and skills sections also live in `index.html`. Keep dates and titles aligned with the current resume. Put technologies that are still developing under Working knowledge.

### Replace the resume

Replace `assets/marc-andy-noel-jeune-resume.pdf` with the new PDF and keep the filename unchanged. Both download links will update automatically. Open the PDF once after replacing it to confirm the export is readable.

### Replace the social card

Replace `assets/social-card.png` with a landscape image and update the `og:image:width` and `og:image:height` values in `index.html` if the dimensions change.

## Deployment

Merging to `master` triggers `.github/workflows/deploy.yml`. The workflow stages only the public site files and deploys them to GitHub Pages. No manual release command is required after the merge.

The architecture, content choices, assumptions, and verification results are recorded in `DECISIONS.md`.
