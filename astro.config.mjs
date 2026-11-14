import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";
import rehypeFocusableTables from "./src/plugins/rehype-focusable-tables.mjs";

export default defineConfig({
  site: "https://yohanchoi.com",
  output: "static",
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
  ],
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex, rehypeFocusableTables],
    shikiConfig: {
      theme: "github-dark",
      wrap: true,
    },
  },
});
