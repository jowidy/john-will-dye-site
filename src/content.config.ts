import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const journal = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/journal" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    published: z.coerce.date(),
    updated: z.coerce.date().optional(),
    draft: z.boolean().default(false),
  }),
});

const fiction = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/fiction" }),
  schema: z.object({
    title: z.string(),
    publication: z.string(),
    year: z.number(),
    description: z.string(),
    url: z.url(),
    order: z.number().default(0),
    draft: z.boolean().default(false),
  }),
});

export const collections = { journal, fiction };
