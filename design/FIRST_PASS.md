# Archived first-pass design review

This record describes the earlier review state. The personal direction in `README.md` supersedes it.

This redesign applies shared design principles to **yohanchoi.com's own purpose and content**. It is a personal portfolio for engineering, technical writing, and photography. It does not introduce another site's content, dashboards, metrics, or collections.

## Five principles applied

1. **Prioritize before adding detail.** The former full-viewport introduction delayed access to the work. The compact identity section now leads into writing and photography, followed by the complete career history. Article cards make title, category, and date clear before description and topics.
2. **Make navigation predictable.** Home, Blog, and Photography remain stable destinations. Active navigation identifies the current collection. Article outlines and trip links provide direct section access. Existing article URLs and trip anchors are retained.
3. **Design for reading and looking.** Serif display headings give the portfolio an editorial voice; familiar sans-serif text separates reading and controls from the headings. Article prose uses a bounded 68-character measure, generous leading, and a quiet outline. Photographs retain natural proportions in the gallery. The homepage uses an explicitly cropped preview leading to the full collection.
4. **Keep evidence and context honest.** All article text, diagrams, formulas, photograph captions/settings, dates, and career claims come from existing content. Metadata stays close to the work. This site has no operational snapshot collection, so no invented dashboards or run comparisons have been added.
5. **Make the whole interaction usable.** Single-destination cards are native anchors, named by their visible titles, with full-region hover and keyboard focus. Internal padding remains clickable. The gallery progressively enhances image links into a native dialog; ordinary modified clicks and no-JavaScript access still open the image. Shared focus styles, a skip link, narrow-screen layouts, reduced motion, and print rules support different readers and inputs.

These are task-specific choices, not a universal ranking of the five best principles.

## Design language

A quiet navy palette replaces the textured brown gradient. The page (`#111827`), panels (`#182131`), secondary surfaces (`#1D293B`), and hover state (`#263348`) separate levels with modest luminance steps. Near-white text (`#E6EDF5`) and pale-blue links (`#9ABFFC`) provide contrast without tinting all prose. Light mode has its own semantic colors. The appearance control initially follows the system, remembers an explicit choice, and survives client-side navigation.

Spacing is owned by components and drawn from shared tokens:

| Role | Inset | Use |
| --- | --- | --- |
| Compact | `0.75rem` | Outline links, section links, navigation |
| Row | `1rem` | Trip links, secondary writing rows, narrow-screen cards |
| Panel | `1.5rem` | Article cards |

The frame around a photograph uses a smaller 8px visual mat, while caption contents remain at least 16px from the target boundary. This is intentional component geometry, not a blanket padding override. Full-width targets are valid; text and icons should not touch their hover/focus boundary. Outside gaps separate groups, while inside padding is part of the control. Hover and focus do not change layout dimensions.

## Source and interaction structure

Astro and the existing content collections remain in place; no frontend framework or dependency was added. Career data now lives in a typed data module instead of being embedded in the homepage template. Semantic theme and spacing tokens own the shared design. Components retain their own layout rules.

The animated navigation indicator and bouncing scroll cue have been replaced by stable native navigation. Astro's client router remains, and the photo viewer is a custom element that reconnects and releases listeners on navigation. Its dialog supports previous/next buttons, arrow keys, Escape, focus restoration, and scroll restoration. Mobile article outlines use native `details`; desktop outlines stay beside the reading column. A small build-time Markdown plugin makes scrolling tables keyboard-focusable without editing article content. Print styles remove chrome and keep code readable on white paper.

## Content preservation

The three article Markdown files, 21 photo metadata files, and existing image/diagram assets are unchanged. Every original career bullet, role, date, and focus tag is retained in `src/data/career.ts`. The bilingual name, introduction, interests, location, camera description, email, and LinkedIn URL are preserved. Article dates now format consistently in UTC so date-only metadata cannot shift to the previous day on a different build host.

## Research basis and limits

- [Shneiderman's overview and detail framework](https://www.cs.umd.edu/users/ben/papers/Shneiderman1996eyes.pdf) informs hierarchy and progressive detail; it does not prescribe this portfolio composition.
- [W3C visual presentation guidance](https://www.w3.org/WAI/WCAG22/Understanding/visual-presentation.html) supports bounded, left-aligned reading columns and adjustable presentation. Its AAA criterion is not a mandate for one exact font or measure.
- [Scottish Government navigation cards](https://designsystem.gov.scot/components/card) support single-destination full-card links without nested controls.
- [Atlassian spacing guidance](https://atlassian.design/foundations/spacing/) supports grouping, rhythm, and internal clearance. The chosen insets are design judgments, not WCAG padding requirements.
- [Atlassian elevation guidance](https://atlassian.design/foundations/elevation/) supports lighter surfaces for dark-mode hierarchy.
- [W3C contrast guidance](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html) supplies measurable legibility requirements. No dark shade is universally best, and contrast measurements do not establish a health benefit.
- [Astro's navigation lifecycle](https://docs.astro.build/en/guides/view-transitions/) informs reconnecting interactive behavior after client-side navigation.

The local build and focused browser checks are review evidence, not a comprehensive accessibility certification. See the recorded results alongside this document. Review this implementation locally before any commit or deployment.

## Verified local results

- Production build: six pages; Astro check reports zero errors, warnings, or hints.
- All 146 local file/section references resolve across the six generated pages.
- 207 browser assertions pass across all routes, both themes, and widths of 1440, 390, and 320px. They cover reflow, semantic headings, native links, full-region padding/focus, repeated gallery navigation, keyboard controls, focus/scroll restoration, appearance persistence, reduced motion, mobile outlines, and no-JavaScript navigation/image access.
- Eighteen sampled automated WCAG A/AA states report zero findings. This is a focused check, not full accessibility certification.
- Separate final checks verify keyboard scrolling of wide tables and white-paper printing without navigation chrome.
- All 49 tracked content/asset files are byte-identical to the original revision; the extracted career array matches exactly.

[Recorded checks](qa-results.json). Renders: [homepage](renders/home-desktop.png), [full homepage](renders/home-full.png), [light mode](renders/home-light.png), [mobile](renders/home-mobile.png), [blog](renders/blog.png), [article](renders/article.png), [photography](renders/gallery.png), [mobile photography](renders/gallery-mobile.png).

The production preview is available at <http://localhost:4322>. Changes remain uncommitted for the user's design review.
