---
title: "CrowdFunder"
tagline: "A Kickstarter-style crowdfunding platform with real payment rails — React/Redux, PostgreSQL, Stripe, S3."
year: "2017"
context: "DevMountain capstone"
stack: ["React", "Redux", "Node.js", "PostgreSQL", "Stripe", "Amazon S3"]
order: 4
links:
  repo: "https://github.com/Marcandy/crowdFunder"
image: "/images/projects/crowdfunder.webp"
imageAlt: "CrowdFunder campaign listing page with funding progress bars"
---

## Problem

The DevMountain capstone brief was open-ended: build something real, end to end. I chose a Kickstarter-style crowdfunding platform because it forces every layer at once — auth, relational data with money attached, third-party payments, file uploads, and a UI where funding progress has to feel alive.

## My role

Full-stack: schema, API, payment integration, and the React front end.

## Approach

React with Redux on the front end; Node.js and PostgreSQL behind it; Stripe for charges, Amazon S3 for campaign images, and Google sign-in for auth.

## Key decisions

- **Relational modeling first.** Users, campaigns, and pledges are joins, sums, and constraints — Postgres, not a document store, because "how much has this campaign raised" should be a query, not a reduce over JSON.
- **Redux for cross-cutting state.** Campaign and pledge state is read by listing pages, detail pages, and the pledge flow simultaneously; centralizing it kept those views consistent.
- **Real payment rails.** Wiring actual Stripe charges (test mode) instead of faking the money step meant confronting idempotency, failure states, and webhooks-era ergonomics as a student — the part most capstones skip.

## Result

My most-starred repository (7 stars, forked by other students) and the project that got me my first engineering job. The live demo ran on Heroku's free tier, which was retired in 2022 — screenshots stand in for it here, and the code remains public.

## What I'd do next

This is 2017 code and labeled as such — I keep it public because the growth timeline from here to [Vera](/projects/vera/) is the story. A rebuild today would swap Redux boilerplate for server state (React Query), add migrations and tests, and deploy the demo somewhere that still exists.
