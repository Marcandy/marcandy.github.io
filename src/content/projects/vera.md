---
title: "Vera"
tagline: "One clean flow from scheduled home-care visit to billable record — modeled on federally required Electronic Visit Verification."
year: "2026"
context: "In active development"
stack: ["React", "Vite", "React Router", "CSS Modules", "Vercel"]
order: 1
links:
  live: "https://vera-homecare.vercel.app"
  repo: "https://github.com/Marcandy/vera"
---

## Problem

Small home-care agencies mostly run on software that is broad, expensive, and disconnected. Interviewing agency owners in Philadelphia surfaced three concrete pain points: managing caregiver onboarding documents, knowing when caregivers are actually with patients, and collecting patient signatures. Meanwhile, Medicaid-funded home care is federally required to use Electronic Visit Verification (EVV) under the 21st Century Cures Act — so the evidence trail isn't optional, it's the product.

Vera is a workspace built around one flow: a scheduled visit becomes a verified, evidence-backed record, and the moment it's verified, the claim is ready to submit.

## My role

Sole designer and developer: the owner interviews, the UX, the front-end architecture, and delivery.

## Approach

Two surfaces for two very different users. Administrators get a dashboard (needs-review visits first), visit detail with the full evidence trail, billing with one-click mock claim submission, and a caregiver roster with per-caregiver onboarding checklists. Caregivers get a phone-width surface with one primary action per screen: check in, check out with an assessment and the patient's signature, done.

Underneath is a visit pipeline — `scheduled → in progress → ready to bill → billed`, with a `needs review` detour — where every transition has a cause, and the rules live in a service layer of domain verbs (`checkInVisit`, `checkOutVisit`, `supplyEvidence`, `submitClaim`), never in components.

## Key decisions

- **The service layer is the backend seam.** Components never import data directly; they call async services with realistic latency. A real API can replace the mock internals without changing a single component — the seam was designed before the backend exists.
- **No admin override for flagged visits.** A visit is billable only when all four pieces of evidence exist (check-in time, check-out time, assessment, signature). The only way to clear a flag is to supply the missing evidence — because clicking a button does not create a signature. In a compliance domain, the tempting "let the admin fix it" button is the wrong product.
- **System-stamped timestamps, never typed.** A typed timestamp would be fabricated evidence; the system records the moment the event happens.
- **Derived state over stored flags.** The missing-evidence panel and each caregiver's cleared-to-work badge are computed from the record at render time, so the UI can never disagree with the data.
- **No UI libraries.** React Router and CSS Modules only — a lean bundle, and every pixel is explainable in review.

## Result

Live on Vercel, developed through 24 merged pull requests with a scripted 13-scenario manual QA pass before each merge. Honest scope, stated in the README: this is a portfolio MVP inspired by EVV — not certified EVV software, no HIPAA claims, in-memory data that resets on refresh by design.

## What I'd do next

Persistence (localStorage first, then a real API behind the same service contracts), automated tests (Vitest and React Testing Library for the service layer, Playwright for the visit flow end to end), real browser geolocation at check-in, and real claim formats (837/835) against a clearinghouse sandbox.
