# Nordic Labs development website

Unpublished, buildless English HTML/CSS/JS design. The repository root and public maintenance routes are intentionally untouched. This folder is not access-controlled: its privacy depends on keeping this development branch unpublished. `noindex` is not an access restriction. Do not merge or copy this folder to the public maintenance branch as a preview mechanism.

## Local preview

From the repository root (not from this folder):

```sh
python3 -m http.server 8080 --bind 127.0.0.1
```

Open http://127.0.0.1:8080/website/ and navigate from there. Stop the server with Ctrl-C. No installation or build is needed. Use the HTTP preview so directory routes resolve correctly.

Routes:

- `/website/` — three image-backed business areas
- `/website/industrial/` — Nuclear / Conventional gateway
- `/website/industrial/nuclear/` — seven-stage lifecycle, licensing milestones and deployment concept
- `/website/industrial/conventional/` — industrial lifecycle support for new projects and operating production
- `/website/robotics/` — connected robotics, inspection, site progress and maintenance workflows
- `/website/arc-engine/` — preserved research content adapted for local navigation
- `/website/health/` — ARC Engine API-oriented user-data environment, with ESIVA as the concluding product example
- Explicit ESIVA links retain `https://esiva.app`, recovered from the original website

The research preview reuses the original repository assets. The new home page reuses the original ESIVA image. All original assets and maintenance documents remain in place. Lifecycle diagrams are illustrative concepts, not operational system readings. The nuclear proposal retains human verification and approval and does not promise automatic licensing, certification, deployed integrations, or quantified performance improvements.

## Design

Navy / teal hero, pale six-stage vertical lifecycle, agent strip, owner benefits and secure architecture, following the supplied Nuclear AI Consulting reference. System fonts, local assets, semantic HTML, visible keyboard focus, skip links, mobile navigation, reduced-motion support, and responsive layouts. Core content and links work without JavaScript; JavaScript adds mobile navigation and active lifecycle indicators. Image generation details are recorded in `assets/IMAGE-SOURCES.md`.

## Publication guardrails

Do not change `main`, `temporary-maintenance`, `CNAME`, root `index.html`, root `404.html`, `arc-engine/index.html`, or GitHub Pages configuration. The development branch must not be selected as the GitHub Pages source. No automated deployment workflow is included.
