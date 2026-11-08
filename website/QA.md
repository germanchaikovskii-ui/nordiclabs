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

## Three-panel homepage and larger service text

Homepage now presents Data Driven Solutions above three independently linked, diagonally clipped image panels. Desktop document size equals the viewport at 1440×900 and 1024×768. Mobile layouts checked at 390×844 and 320×740: stacked diagonal panels, readable labels and no horizontal overflow. Mobile menu opens and closes. Pointer navigation from the Industrial panel reaches the gateway and then Nuclear; Robotics reaches its existing placeholder. Both homepage Health links still target `https://esiva.app`.

Keyboard focus verified on the Robotics panel: brightness 0.98 for the selected image and 0.42 for the others; hover uses the same 350ms styling. Reduced-motion styles disable transitions and zoom. All images loaded. Browser console returned no warnings or errors.

Nuclear task and introductory text is 20px on desktop and 17–18px at smaller widths; supporting benefits and deployment explanations are also larger. Measured all six chapters at 1440×900, 390×844 and 320×740: copy fits within each scene, with ordinary scrolling automatically used where enlarged content cannot fit a pinned viewport. No horizontal overflow. At an intermediate licensing scroll position, four tasks were revealed and the fifth was partially visible; the licensing navigation item was active.

All local HTML href/src destinations exist. Root maintenance files and CNAME match the preserved maintenance branch byte-for-byte. Live `/`, `/arc-engine/` and `/404.html` still serve maintenance. Protected local and remote branch SHAs remain unchanged. No Pages configuration was modified.

Changed/added: `index.html`, `assets/home-gateway.css`, `assets/robotics-inspection.webp`, `assets/health-feedback.webp`, `assets/lifecycle-story.css`, `assets/lifecycle-story.js`, `assets/refinements.css`, `assets/IMAGE-SOURCES.md`, and this QA record.
