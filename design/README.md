# Personal portfolio redesign

The latest direction is a playful, career-first personal site for John Choi. The earlier navy editorial pass was rejected because it resembled an internal corporate site. Its notes and renders remain available in [the first-pass record](FIRST_PASS.md).

## Research and direction

[The skill comparison, visual plan, and critique](PERSONAL_DIRECTION.md) record the online research and the selected Anthropic `frontend-design` skill. The task-local skill was read before implementation. Its subject-specific approach led to expressive Bricolage Grotesque headings, DM Sans reading text, lilac paper colors, plum ink, and one prominent interactive career surface. Both font families are self-hosted with their Open Font License files in `public/fonts/`.

## What changed

- The homepage leads with identity and career. Three career chapters run newest first: Reddit Machine Learning Infra, Reddit Payments, and Niantic. Current work is selected initially; every original achievement and focus area remains available.
- Career tabs support click, arrow keys, Home/End, and native focus. Without JavaScript, all three entries are readable; print also includes all three. Motion only answers a selection and respects reduced motion.
- Writing follows the career introduction as a personal reading list. The technical articles retain readable columns, padded outlines, keyboard-scrollable tables, original diagrams, and mathematical notation.
- A stack of the owner's existing photographs adds a second small interaction: Another frame reveals the next image. Gallery photographs retain their natural proportions and their native direct-image fallback beneath the accessible dialog.
- The palette has separate light and plum-dark appearances. New visitors start in light mode; an explicit saved appearance choice takes precedence. Native links, readable contrast, generous target insets, mobile reflow, and no-JavaScript content access remain intact.

## Content and code

All 49 original content/asset files are unchanged: three articles, 21 photo records, original photographs, and article diagrams. Career content was preserved during the redesign, then the two Reddit entries were updated with the user’s supplied achievements on November 14, 2026; dates, formal titles, and Niantic details are unchanged. Personal introduction, interests, bilingual identity, location, camera description, and contact destinations are retained. No content from another website was added.

The implementation stays in Astro with no new package dependencies. `CareerExplorer.astro` and `PhotoStack.astro` own their small progressive enhancements and clean up listeners when Astro reconnects them. Shared tokens/styles own the palette and typography; content stays in existing collections and `src/data/career.ts`. The obsolete timeline component was replaced by the career explorer.

## Verification

The current production build creates seven pages, including the agentic recall article, with zero Astro diagnostics. All **230 browser checks pass**, including all six routes in two themes at 1440, 390, and 320px, career keyboard selection, current-role priority, native-link padding, photo shuffling after navigation, gallery focus/scroll restoration, mobile controls, article outlines, keyboard table scrolling, print, reduced motion, and no-JavaScript access. Eighteen sampled automated WCAG A/AA states report zero findings. These focused checks are not a comprehensive accessibility certification.

[Recorded results](personal-qa-results.json). Renders: [homepage](renders/personal-home.png), [full homepage](renders/personal-home-full.png), [dark appearance](renders/personal-home-dark.png), [mobile](renders/personal-home-mobile.png), [writing](renders/personal-writing.png), [photography](renders/personal-photography.png), [article](renders/personal-article.png).

## Local review

The built site remains available at <http://localhost:4322>. The server binds to `0.0.0.0`; forward port 4322 if connecting remotely. See [the repository README](../README.md) for commands. The user approved publishing the reviewed redesign and article on November 14, 2026. GitHub Actions deploys the production build when these approved changes are pushed to `main`.

The [career update record](CAREER_UPDATE.md) covers the newest-first ordering and refreshed Reddit achievements.
