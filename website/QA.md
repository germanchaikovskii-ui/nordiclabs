# Local validation — 2026-11-08

Tested the final working files through the in-app browser against a loopback-only Python HTTP server serving the repository root.

- Six pages at 1440, 1024, 768, 390 and 320 CSS pixels: 30 page/width combinations.
- No horizontal page overflow, missing images, broken same-page anchors or duplicate/missing H1 headings in those checks.
- Visually inspected the complete home and Nuclear pages on desktop, and the complete Nuclear page at 390px.
- Clicked Home → Industrial AI → Nuclear.
- Opened the mobile menu, navigated to Robotics, and verified Escape closes the menu.
- Clicked the Operations lifecycle link and verified the destination heading remains below the sticky navigation and the active-stage indicator updates.
- Nuclear page console inspection returned no warnings or errors.
- All local href/src targets checked from disk; Health AI targets the existing `https://esiva.app` URL.
- Original tracked maintenance documents, CNAME bytes and existing assets compared with the maintenance commit.

Accessibility provisions include semantic landmarks/headings, a skip link, labelled navigation, image descriptions, visible focus, keyboard-operable controls, reduced-motion styles, larger menu/lifecycle touch targets, and a JavaScript-free mobile navigation fallback. This is targeted development QA, not a formal accessibility certification or an integration/production test of the proposed AI service.

## Branding, gateway and lifecycle revision

Verified 30 page/width combinations (six existing routes at 1440, 1024, 768, 390 and 320px). No horizontal overflow, missing images or broken fragment destinations. Gateway document height equals viewport height at all five widths. Visually inspected desktop gateway, mobile gateway and complete Nuclear layouts. Independently activated Nuclear with pointer and keyboard, and Conventional with keyboard. Verified focus-visible outline is 3px, focused image brightness is 0.88 versus 0.53 on the other panel, and transition duration is 350ms; hover shares the same styling. Verified active Operations stage and advancing timeline progress. No browser console warnings/errors were recorded. Contact links target the address recovered from the original repository; no email was sent. Reduced-motion overrides were reviewed in CSS.

Modified: `index.html`, `industrial/index.html`, `industrial/nuclear/index.html`, `industrial/conventional/index.html`, `robotics/index.html`, `assets/site.js`, `assets/IMAGE-SOURCES.md`, and this QA record. Added `assets/refinements.css`, `assets/conventional.webp`, `assets/control-room.webp`. Removed the invented `assets/favicon.svg`. Paths in this list are relative to `website/`.

The original repository used a text wordmark, not a separate Nordic Labs logo image. Its capitalization, system font, bold weight and letter spacing were restored. Contact provenance and generated-image prompts are documented in `assets/IMAGE-SOURCES.md`.

## Cinematic lifecycle chapters

Replaced the six small visualization cards with six individual full-width illustrated scenes. Scroll-linked chapters hold their backgrounds while task bullets progressively reveal. No animation dependencies were added. The ordinary document flow remains available without JavaScript, through the Show all tasks button, on shorter screens, and for reduced-motion preferences.

Browser checks covered all six chapter layouts at 1440×1000, 1024×768, 390×844, 320×844 and 390×700. No horizontal overflow or broken fragment links. Text height fits within every scene. Verified the first chapter starts with hidden visual bullets and reveals them sequentially (two visible, third partially visible, fourth unrevealed at an intermediate scroll position); the background remains pinned at 147px below the navigation. Mobile sticky scene remained at 127px with readable text. Verified the low-height fallback uses ordinary relative positioning. Show all tasks exposes every bullet and disables sticky animation. No browser warnings/errors were recorded. Reduced-motion CSS and preference-change handling reviewed. Image provenance: `assets/LIFECYCLE-IMAGES.md`.
