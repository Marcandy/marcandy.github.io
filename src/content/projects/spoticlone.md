---
title: "SpotiClone"
tagline: "A Spotify-style mobile player in React Native and TypeScript, with a Node.js backend."
year: "2021"
context: "Personal project"
stack: ["React Native", "Expo", "TypeScript", "Node.js"]
order: 3
links:
  repo: "https://github.com/Marcandy/spoticlone"
---

## Problem

After years of enterprise React on the web, I wanted real depth on mobile. Not a todo app, but something with the hard parts: media playback, navigation state, and a UI users already have opinions about. Cloning Spotify's player set a concrete, unforgiving bar.

## Approach

React Native on Expo with TypeScript throughout, structured the way I'd structure a production app: `screens/`, `components/`, `hooks/`, and typed navigation, with a Node.js backend behind playlist management, playback, and streaming.

## Key decisions

- **TypeScript-first, in 2021.** Typed React Native wasn't the default choice then. It paid off every time I refactored the player flow, and the codebase is essentially all TypeScript.
- **Player state in hooks.** Play/pause and track-change behavior live in dedicated hooks driven by effects, so the player widget stays a dumb component and the tricky lifecycle logic sits in one place.
- **Pull requests, even solo.** The app was built through 15 merged PRs: branch, review the diff, merge. I kept the habit even without teammates, because it keeps the work reviewable.

## Result

A working Spotify-style player: playlists, media playback, and streaming from the Node backend. Built as a 2021 personal project and labeled as such. It's here because mobile is part of my stack, and this is the public evidence for it.

## What I'd do next

The repo predates my current documentation standards: it needs a real README and a short screen recording (that uplift is underway as part of this portfolio rebuild), plus an Expo SDK upgrade and component tests for the player hooks.
