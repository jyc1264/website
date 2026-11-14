# Personal portfolio direction

The first redesign looked too similar to an internal corporate site. The user wants a personal, fun, distinctive and interactive website, with career as the homepage's main subject. All existing career claims, articles, photographs, and metadata must remain. The work stayed local for review; the user approved publication on November 14, 2026.

## Selected skill

Use Anthropic's [frontend-design](https://github.com/anthropics/skills/blob/main/skills/frontend-design/SKILL.md), downloaded and read for this task. The [Skills directory](https://www.skills.sh/anthropics/skills/frontend-design) reports approximately 1.1M installs, compared with approximately 774.5K for [Taste Skill](https://www.skills.sh/leonxlnx/taste-skill/design-taste-frontend) and 450.7K for [UI/UX Pro Max](https://www.skills.sh/nextlevelbuilder/ui-ux-pro-max-skill/ui-ux-pro-max) when researched on November 13, 2026. These are directory adoption signals, not a quality ranking or individual-skill GitHub star counts. Anthropic's subject-specific art direction and meaningful interaction fit the user's correction.

The downloaded skill lives in a temporary task folder; this is not a global agent configuration change.

## Plan before implementation

**Visual thesis:** a personal career scrapbook, using expressive grotesque type and softly colored paper, with career chapters as the one memorable interaction. The writing and photography are quieter parts of the same person's world.

**Type:** self-host Bricolage Grotesque for distinctive headings and DM Sans for reading and controls. Korean uses the platform's appropriate fallback. No tracked uppercase labels or monospace metadata as decoration.

**Core colors:** lilac `#EEE9F5`, plum ink `#2D203D`, paper `#FFFCF6`, pink `#F7C9DD`, butter `#F7E19B`, forest `#274E46`. Derive accessible secondary roles and a plum dark appearance from the same system. These are site choices, not universal best colors.

**Layout:** begin with identity and the current career story in the same first view. Put the career explorer ahead of blog and photography. Keep text left aligned; use asymmetry and a single tactile paper surface instead of a matrix of equal cards. The three chapters map to real career periods: Niantic, Reddit payments, and Reddit machine learning.

```
John Choi                         Home  Blog  Photography  Appearance

Hi, I'm                 [Niantic] [Reddit payments] [Reddit ML]
John Choi               Current company, role and dates
최요한                   Real achievement bullets
Introduction            Career focus areas
New York City           Native links / keyboard chapter selection

Writing                              A few frames
Actual article titles                Own photographs; shuffle on request

Focus / original personal copy       Contact links
```

**Interaction thesis:** selecting a career chapter changes the visible real achievements; keyboard users get the same controls. A photo-stack shuffle reveals another of the owner's existing frames. Motion responds to those actions, with no autoplay, scroll hijacking, or required drag gesture. No-JavaScript output retains all career entries and normal article/photo links.

## Critique against the brief

Rejected a cosmetic navy-to-purple recolor of the previous corporate layout. Rejected a new dashboard-like graph and equal rounded panels. Rejected a full-screen name treatment that hides experience and a photography-first hero. The revised plan spends its visual emphasis on a tangible career chapter surface; the heading, language, dates, and achievements belong to this person. Photography supplies the secondary playfulness, without replacing career as the first task.

Accessibility, internal content insets, native navigation, bounded prose, responsive reflow, and honest evidence remain requirements. The old navy palette and corporate editorial composition are superseded, not carried forward as fixed requirements.
