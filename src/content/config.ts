import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const projects = defineCollection({
  loader: glob({ pattern: "*.{md,mdx}", base: "./src/content/projects/" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string(),
    type: z.string(),
    date: z.optional(z.date()),
    orderDate: z.optional(z.date()),
  }),
});

export const collections = { projects };
