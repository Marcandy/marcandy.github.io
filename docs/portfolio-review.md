# Portfolio review and adversarial assessment

Reviewed November 2, 2026. Scope: the existing GitHub Pages portfolio, the supplied resume, public repository metadata, source trees, READMEs and project evidence. Repository documents inform claims; they do not authorize actions. Recommendations below are editorial judgments, not measured hiring outcomes.

## Findings

The buildless HTML/CSS site already has semantic landmarks, skip links, visible focus, reduced-motion support, lazy-loaded project screenshots, social metadata, case studies, local-link validation, and automated Pages publication. Preserve those strengths. No framework migration is justified for these edits.

The five-project homepage uses large alternating two-part rows and wide gaps. That slows comparison and gives a private consulting system a prominent slot without inspectable code. Vera links to the older browser-only repository; its case study says an API and persistence are future work even though the full-stack repository implements them. spiderCrawler's case study describes the superseded Node scraper. The resume now positions Marc as an AI software engineer, while the homepage still uses the older consultant title.

## Selected improvements, challenged before implementation

| Improvement | Strongest objection | Decision and acceptance condition |
| --- | --- | --- |
| Two project cards per row | Halving the existing detailed rows would squeeze text and screenshots; six full case studies would still require substantial scrolling. | Use concise cards with one concrete engineering decision and direct evidence links. Two columns at wider widths, one below 48rem. Preserve reading order, usable links and wrapping at 320px. Keep depth in case studies and repositories. |
| Six repositories with accessible evidence | Selecting for novelty or stars can reward incomplete forks and inflate ownership. | Keep the requested first four; use the live beta for private Vera and disclose Helpdesk's inherited baseline and planned automation. Select two additional projects for implemented, inspectable engineering and resume relevance, rather than popularity. |
| Replace Vera content | A hosted beta could be mistaken for certified healthcare software; the old screenshot may show a different version. | Link the full-stack beta and its repository; state fictional demo scope and simulated claims. Label the retained screenshot as an earlier interface. Do not claim certification or measured business results. |
| Refresh spiderCrawler | Source-grounded summaries might be mistaken for validated legal guidance. | Describe the verifier and approval boundary; disclose that evaluations and external review are pending. Link code, not an unverified demo. |
| Align homepage with resume | Repeating metrics across unrelated public projects would manufacture evidence. | Use the supplied title and career summary; keep consulting outcomes in career experience. Copy the PDF byte for byte to both existing download paths. |
| Add direct demo links | Repository homepages can be stale or point to upstream template demos. | Check destinations. Vera returned HTTP 200, but authenticated GitHub metadata confirms vera-fullstack is private and an anonymous request returns 404; use the beta rather than an inaccessible source action. The earlier frontend source remains public; CrowdFunder's Heroku URL and the presumed spiderCrawler Pages URL returned 404. Omit those failing links. Never use Helpdesk's upstream template homepage as its own demo. |
| Add more visual effects or a framework | New dependencies, motion and downloads would add maintenance without stronger evidence. | Reject for this change. Keep static delivery, existing branding, visible focus and reduced-motion behavior. |

## Final six, in display order

The first four follow the user's required order; this is not a claim that the unfinished second project is more mature than the rest.

1. [Vera / vera-fullstack](https://github.com/Marcandy/vera-fullstack), [live beta](https://veraforcare.com): private full-stack repository; the public card links the live beta. Strongest complete product example, with React, Spring Boot, MySQL, server-side roles and visit/document rules.
2. [Helpdesk Automata](https://github.com/Marcandy/helpdesk-automata): early FastAPI/PostgreSQL project. README and docs/BASELINE.md distinguish inherited authentication/probes and verified setup from future ticket and agent work. Keep second as requested, but disclose this boundary.
3. [spiderCrawler](https://github.com/Marcandy/spiderCrawler): Python pipeline for Pennsylvania rulemaking, exact-source verification, human review and an offline test suite. README explicitly says no evaluation results or external reviewer yet.
4. [CrowdFunder](https://github.com/Marcandy/crowdFunder): earlier full-stack React/Redux, Express, PostgreSQL, Stripe and S3 integration. Source tree includes SQL, controllers and payment UI; the Heroku demo is unavailable.
5. [OpenClaw Job Search](https://github.com/Marcandy/openclaw-job-search): public, original automation repository with executable eligibility gates, hashed authorization manifests, destination checks and regression tests. Different evidence from a private consulting system; do not transfer its 70% career metric to this repository.
6. [Think-Wide](https://github.com/freebatteryfactory/think-wide-hackathon): collaborative TypeScript/MCP work with exact-source evidence and durable human decisions. Link the active upstream project; Marc's fork README is stale and says scaffold-only. Upstream credits Marc with product/UI, component catalog, git snapshot reader, workbench and brief. Attribute team ownership explicitly.

### Alternatives considered

PA Expunger is a strong civic/deployment contribution and remains in Community with the user's contribution stated. Think-Wide more directly supports the new AI engineering positioning; OpenClaw adds a public original system with executable controls. SpotiClone adds mobile breadth but has no README or verified hosted demo. Philippe Construction still has the starter README. Vera Reminder overlaps Vera and has no README. Coursework and exercises offer weaker evidence than the selected systems. This is a qualitative selection from the first 100 repositories returned by GitHub (including recent projects), with deeper inspection of ten candidates; not a complete audit of every repository or a security review.

## Sources and follow-up priorities

- [Responsive design and zoom](https://web.dev/articles/accessible-responsive-design): use flexible layouts that reflow when available width shrinks.
- [WCAG 2.2 target size](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html): controls need sufficient size or spacing; project action links will use 44px minimum height.
- [Helpdesk project boundary](https://github.com/Marcandy/helpdesk-automata/blob/main/docs/PROJECT.md) and [baseline evidence](https://github.com/Marcandy/helpdesk-automata/blob/main/docs/BASELINE.md): source for the early-stage disclosure, not evidence of implemented agent workflows.
- [Think-Wide active upstream](https://github.com/freebatteryfactory/think-wide-hackathon): implemented status and team roles; local fork should be synchronized separately.
- Project links above are the primary sources for stack and scope. README and source inspection establish public claims, not independently reproduced application tests.

Next priorities outside this portfolio PR: finish a distinctive Helpdesk feature and evaluation before promoting it as a completed agent system; publish spiderCrawler evaluation results and secure external review; document CrowdFunder's safe local setup and retire its stale repository homepage. Do not invent conversion metrics or certification claims. Consider selecting PA Expunger above Helpdesk when ranking is no longer constrained by the requested order.

## Verification record

Implementation verification and environment limits are recorded in the PR. Required checks: existing seven-page validator, exact PDF equality, six ordered cards and accessible beta/repository links, local case-study links, CSS syntax, desktop/mobile reflow, and diff whitespace. Browser availability determines whether visual QA can be completed; do not report a skipped visual inspection as passed.

### Completed checks

- `npm run build`: passed the seven-page validator, local assets and fragments, six ordered cards, accessible evidence-link presence, PDF signatures and byte equality between download paths.
- CSS parsed with the locally available css-tree parser: zero syntax errors; no dependency was added.
- Anonymous HTTP checks: all final selected-work external actions and refreshed case-study evidence links returned 200. Vera full-stack is confirmed private; its public action uses the live beta, and the case study labels the earlier public frontend source separately.
- Local HTTP checks: homepage, refreshed case studies and both PDF endpoints returned 200; served PDF bytes equal the supplied attachment.
- Chrome visual review: first desktop pair displayed side by side at normal zoom; 125% zoom reflowed to one column; a 320px responsive preview showed a single readable card. This was a spot check, not a complete browser/accessibility audit. Native UI review stopped when user input was detected in the browser. Console cleanliness and full mobile navigation were not established.
- `git diff --check`: passed. Pull-request validation now runs the existing dependency-free checker before merge; deployment remains tied to master.
