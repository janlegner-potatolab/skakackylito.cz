import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const castles = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/castles" }),
  schema: z.object({
    name: z.string(),
    slug: z.string(),
    dimensions: z.object({
      length: z.number(),
      width: z.number(),
      height: z.number(),
    }),
    dimensionsLabel: z.string(),
    capacity: z.number().int().positive(),
    capacityLabel: z.string(),
    ageLabel: z.string().optional(),
    priceLabel: z.string(),
    powerLabel: z.string(),
    transportLabel: z.string(),
    photos: z.array(z.string()).min(1),
    order: z.number().int(),
  }),
});

const faq = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/faq" }),
  schema: z.object({
    question: z.string(),
    order: z.number().int(),
  }),
});

export const collections = { castles, faq };
