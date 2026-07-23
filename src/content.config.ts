import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const fiction = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/fiction" }),
  schema: z.object({
    title: z.string(),
    publication: z.string().optional(),
    year: z.number().optional(),
    description: z.string(),
    url: z.url().optional(),
    status: z.enum(["published", "coming-soon"]).default("published"),
    order: z.number().default(0),
    draft: z.boolean().default(false),
  }),
});

export const collections = { fiction };
