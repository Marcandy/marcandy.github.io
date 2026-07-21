---
title: "OpenClaw Automation Pipeline"
tagline: "A self-hosted pipeline that reads, ranks, and drafts with cost-tiered LLMs. A human approves everything that goes out."
year: "2021 – present"
context: "Private consulting work · Lotnivo"
stack: ["TypeScript", "Node.js", "LLM APIs", "Agentic workflows"]
order: 2
accent: "violet"
links: {}
---

## Problem

Consulting clients kept hitting the same wall: recurring streams of incoming material that need reading, triage, and a written response. Too much volume to handle manually, and too much nuance for rule-based automation.

## Approach

A self-hosted, multi-stage agent pipeline in TypeScript/Node.js: ingest from multiple sources, score and rank each item with LLMs, generate digests and documents from the shortlist, and deliver them over messaging. A human approves anything before it leaves the system.

## Key decisions

- **Cost-tiered model routing.** Inexpensive models do the high-volume filtering; the expensive model only reads what the cheap ones couldn't confidently rule out. Scoring is a pipeline stage with a budget, not a single monolithic prompt.
- **Human-approval guardrails.** Generated documents go to a person, not a recipient. The system drafts; a human decides. That rule is what makes LLM output acceptable in a client's workflow.
- **Self-hosted by design.** The pipeline runs on infrastructure the client controls, so their data never has to leave it.

## Result

Built and delivered through my consulting work at Lotnivo, where AI automation with reviewable output is now a regular part of what I ship for clients.

**A note on what you can't see:** this is private client work, so there is no public repository. I'm happy to walk through the architecture, the model routing, and the approval flow in as much depth as an interview allows. For public, reviewable code, see [Vera](/projects/vera/) and the other projects here.

## What I'd do next

An evaluation harness for the scoring stage: a labeled sample set and regression scoring, so prompt and routing changes are measured rather than eyeballed.
