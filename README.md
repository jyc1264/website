# yohanchoi.com

John Choi's personal portfolio: machine learning, technical writing, and photography. Built as a static Astro site.

## Local development

```sh
npm ci
npm run dev -- --host 0.0.0.0 --port 4321
```

Open <http://localhost:4321>.

## Build and review

```sh
npm run build
npm run preview -- --host 0.0.0.0 --port 4322
```

The build runs Astro's type/content checks and generates `dist/`. Open <http://localhost:4322> to review the production output. For a remote checkout, forward the same port, for example `ssh -N -L 4322:127.0.0.1:4322 your-host`.

## Source organization

- `src/content/tech/` and `src/content/photos/`: authored articles and photo metadata, validated by `src/content.config.ts`.
- `src/assets/`: original photographs and article diagrams. Astro produces responsive optimized images.
- `src/data/career.ts`: original career entries rendered by the interactive career explorer.
- `src/layouts/BaseLayout.astro`: metadata, navigation, appearance controls, and footer.
- `src/components/`: article links, interactive career chapters, the photo stack, photo links, and the enhanced native photo dialog.
- `src/styles/global.css`: semantic theme/spacing tokens, shared controls, prose, accessibility, and print rules. Component-specific layouts stay with their components.
- `src/pages/`: homepage, blog catalog, article routes, and photography collections.

[Design rationale, research, and review notes](design/README.md).
