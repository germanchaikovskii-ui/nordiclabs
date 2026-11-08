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

## Concrete owner deliverables, licensing milestones and contractor workflow

The Nuclear page now has seven illustrated chapters. Three pre-construction-licence chapters cover requirements, licensing/delivery planning and Basic Design/PSAR/safety-analysis review. A prominent construction-licence milestone precedes procurement/delivery, Detailed Design and construction execution. A second milestone separates FSAR preparation from operations. Contractor commencement gates are explicitly work-package release decisions, not regulatory licences.

Added a generated delivery-planning illustration, contractor execution/acceptance/accounting workflow, three specialist-agent roles plus the owner review workflow, accessible text-labelled traffic-light statuses, and a cited IAEA configuration-management section with a five-step evidence chain. Contact now uses owner-supplied info@nordiclabs.tech, with a conditional no-cost demonstration offer. See CONTENT-SOURCES.md for verification limits and source provenance.

Browser inspection covered 1440×900, 1440×1000, 1024×768, 390×844 and 320×740 during this revision. No horizontal document overflow or clipped chapter text. The enlarged detailed copy fits pinned desktop scenes; smaller viewports use the existing ordinary-flow fallback. Verified delivery-plan navigation/active state and task reveal, image loading, mobile milestone layout, agent cards and contact offer. Seven navigation links address the seven chapters. Console returned no warnings/errors. CSS reduced-motion and no-JavaScript fallback remain intact; no animation dependencies or script changes were added.

Disk checks passed: phase order, two distinct milestones, unique IDs, existing local href/src targets and exact mailto recipient. IAEA source documents were opened and the cited passages checked. Public `/`, `/arc-engine/` and `/404.html` still show maintenance; root documents/CNAME remain byte-identical to temporary-maintenance. No Pages configuration changed.

## Final audit against all user additions

Checked the final implementation against each steering message, not just the last request. Two details were made explicit again: the equipment **and material** register, and incoming-document classification.

| User addition | Implementation |
| --- | --- |
| Specific owner deliverables at every lifecycle stage | Seven illustrated chapters describe registers, source links, review queues, decisions and retained records. |
| EPC/licensing basis, applicable standards and a requirements agent | EPC chapter records obligations, selected codes/editions/applicability and configures baseline checks. |
| Basic Design, PSAR, safety analyses and project knowledge agent before construction licensing | Pre-licence chapter explicitly classifies/indexes these inputs and checks consistency with the baseline. |
| Preliminary review, traffic light, approval and storage workflows | Three text-labelled statuses, source/revision evidence, comment resolution, supplier responses and authorized decisions. |
| Licensing plan, project delivery plan and contractor responsibilities | Dedicated planning chapter before the construction-licence milestone, with a new generated illustration. |
| Commencement gates, contractor progress, work-volume acceptance and accounting | Rules defined before licensing; execution workflow during construction tracks release, progress, acceptance and accounting/payment review. |
| Two prominent licensing milestones and correct phase order | Construction Licence Granted precedes procurement/delivery and construction; Operating Licence Granted precedes operations. |
| Equipment/material register, specifications, procurement, schedule integration | Explicit equipment/material records and technical specifications, supplier/delivery tracking, ERP and Oracle Primavera. |
| Detailed Design, changes/configuration, as-built and PSAR-to-FSAR evidence | Construction and operating-licensing chapters retain the approved baseline and traceable evidence. |
| Operations, maintenance, modernization and independent knowledge | Operations chapter and secure deployment section retain records independently of any LLM, with controlled model updates. |
| IAEA principles and evidence for demonstrating conformity | Cited SSR-2/1 and SSR-2/2 provisions, a five-step traceability chain and retrievable evidence; no automatic approval claim. |
| Project-specific CTA, references and conditional free pilot | See what works / Then decide; available reference solutions and no-cost pilot subject to agreed scope/terms. |
| info@nordiclabs.tech | Visible address and both mailto targets use the owner-specified address; independent mailbox verification remains unperformed. |
| Existing visual/branding requirements retained | Nordic Labs Tech Oy branding, larger text, illustrated scrolling scenes, diagonal homepage/gateway and unchanged ESIVA link. |
| Isolation and preservation | Only development website files changed; main, public maintenance documents, CNAME and original research/media assets remain preserved. |
