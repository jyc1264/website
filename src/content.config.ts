import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const tech = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/tech" }),
  schema: z.object({
    title: z.string(),
    pubDate: z.coerce.date(),
    description: z.string(),
    tags: z.array(z.string()),
  }),
});

const photos = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/photos" }),
  schema: z.object({
    title: z.string(),
    shotDate: z.coerce.date(),
    trip: z.string(),
    imageSrc: z.string(),
    imageWidth: z.number(),
    imageHeight: z.number(),
    cameraSettings: z.string(),
    description: z.string(),
  }),
});

export const collections = { tech, photos };
