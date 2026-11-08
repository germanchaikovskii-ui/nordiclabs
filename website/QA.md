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
