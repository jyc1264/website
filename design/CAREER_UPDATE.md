# Career update

The user supplied new career descriptions on November 14, 2026. The homepage now orders its tabs **Reddit Machine Learning Infra → Reddit Payments → Niantic**, with the newest role selected initially. Keyboard Home/End and arrow navigation follow that same visual order. The no-JavaScript and print content use the same data order.

The Machine Learning Infra entry contains all four supplied achievements. Payments contains all five main achievements and three nested details, with the Contributor Program URL rendered as a native link. User-supplied wording and figures are retained. Formal job titles, dates, and the Niantic entry remain unchanged. Focus labels now reflect the refreshed Reddit descriptions.

Chapter identity, short company name, subject, and achievements now live together in `src/data/career.ts`; rendering no longer depends on positional array lookups. Typed nested details preserve the user's hierarchy.

Validation: the production build passes with zero Astro diagnostics; all 183 local references resolve. All **81 targeted browser checks pass**, covering ordering, default selection, supplied metrics, nested grouping, the external link, keyboard navigation, no-JavaScript content, and reflow in both themes at 1440, 390, and 320px. Six sampled automated WCAG A/AA states report zero findings; this is not a comprehensive accessibility audit.

[Recorded checks](career-update-qa-results.json) · [Homepage render](renders/career-update-home.png).
