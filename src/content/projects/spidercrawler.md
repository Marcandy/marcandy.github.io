---
title: "spiderCrawler"
tagline: "A small Node.js scraper with big-project hygiene: Jest suite, supertest, CircleCI."
year: "2023"
context: "Utility project"
stack: ["Node.js", "Express", "Cheerio", "Jest", "CircleCI"]
order: 5
links:
  repo: "https://github.com/Marcandy/spiderCrawler"
---

## Problem

I needed structured data out of pages that don't offer an API. A classic scrape-and-serve job, small enough to do carelessly. The point of this repo is that I didn't.

## Approach

An Express service wrapping an axios + cheerio scraper, with the extraction logic isolated in `src/scraper.js` and shared helpers in `src/utils.js`.

## Key decisions

- **Tests on a weekend-sized project.** A Jest suite covers the scraper, with supertest exercising the HTTP surface. Scrapers break silently, and a failing test is how you find out before your consumer does.
- **CI from day one.** CircleCI runs the suite on every push, with `jest-junit` producing machine-readable reports the CI UI can surface.

## Result

A small tool that does its job, with tests and CI treated the same way I'd treat them on a real product.

## What I'd do next

Recorded HTML fixtures for fully deterministic tests, a politeness layer (rate limiting, robots.txt respect) if it ever pointed at hosts I don't control, and a README, as part of the same documentation uplift as the rest of my repos.
