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
- `/website/contact/` — enquiry form that prepares an email draft; no server submission
- `/website/arc-engine/` — preserved research content adapted for local navigation
- `/website/health/` — ARC Engine API-oriented user-data environment, with ESIVA as the concluding product example
- Explicit ESIVA links retain `https://esiva.app`, recovered from the original website

The research preview reuses the original repository assets. The new home page reuses the original ESIVA image. All original assets and maintenance documents remain in place. Lifecycle diagrams are illustrative concepts, not operational system readings. The nuclear proposal retains human verification and approval and does not promise automatic licensing, certification, deployed integrations, or quantified performance improvements.

## Design

Navy / teal hero, pale six-stage vertical lifecycle, agent strip, owner benefits and secure architecture, following the supplied Nuclear AI Consulting reference. System fonts, local assets, semantic HTML, visible keyboard focus, skip links, mobile navigation, reduced-motion support, and responsive layouts. Core content and links work without JavaScript; JavaScript adds mobile navigation and active lifecycle indicators. Image generation details are recorded in `assets/IMAGE-SOURCES.md`.

## Publication guardrails

Do not change `main`, `temporary-maintenance`, `CNAME`, root `index.html`, root `404.html`, `arc-engine/index.html`, or GitHub Pages configuration. The development branch must not be selected as the GitHub Pages source. No automated deployment workflow is included.

## Shared navigation and contact

All eight development routes use the same header/footer links: Industrial AI, Robotics AI, Health AI and Contact Us. Company identifier: owner-confirmed Y-tunnus 3668654-2. The original local Nordic Labs emblem and favicon framing are documented in `assets/brand/SOURCE.md`.

Contacts prepare a visible email draft addressed to info@nordiclabs.tech. The user opens it in their own email application and sends it there. Copy Enquiry is a fallback for clients that do not handle mailto links or long drafts. No service credentials, network submission, analytics or persistent form storage are added. Without JavaScript the form remains disabled and the direct email link is available.

## Corporate legal pages — 9 November 2026

- `/website/terms/` and `/website/privacy/` contain finished English website terms and a corporate privacy notice, dated 9 November 2026. ESIVA remains governed by its separate product information.
- All ten development routes link to both pages in their footers. The contact-form explanation links to Privacy Policy; no consent checkbox or additional transmission is introduced.
- Nuclear, Conventional and Robotics pilot offers now require mutual interest and a prior written agreement, linking to the pilot clause. The clause covers agreed scope, costs, deliverables, confidentiality, data handling, intellectual property and no obligation to continue.
- The privacy notice reflects the current mailto draft implementation, absence of site analytics/cookies/browser storage, and GitHub Pages hosting logs. Retention is described by purpose, relationship and legal requirements rather than an invented fixed duration. Provider categories are described without naming an unverified email provider.
- References checked: GDPR Articles 6, 12–14, 15–22 and 44–49 (https://eur-lex.europa.eu/eli/reg/2016/679/oj/eng); GitHub Privacy Statement (https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement); GitHub Pages hosting documentation (https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages); Finnish complaint guidance (https://tietosuoja.fi/en/notification-to-the-data-protection-ombudsman).
- Verification: all local links, assets and anchors resolve; all ten footers contain legal links; all three pilot offers updated. Browser checks cover legal pages, home and industry gateway at 320, 768 and 1280 pixels; no horizontal overflow, and desktop gateways retain a single viewport. Contact privacy navigation, mobile menu and nuclear pilot deep link work; no browser console warnings/errors observed.
- Public root documents, ARC Engine original route, CNAME, main and temporary-maintenance are unchanged. Legal pages are in the unpublished development tree only.
