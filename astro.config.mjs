import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";

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
    rehypePlugins: [rehypeKatex],
    shikiConfig: {
      theme: "github-dark",
      wrap: true,
    },
  },
});
