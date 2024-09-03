import { defineCollection, z } from "astro:content";

const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string(),
    date: z.date(),
    type: z.string(),
  }),
});

const publications = defineCollection({
  type: "data",
  schema: z.object({
    date: z.date(),
    title: z.string(),
    url: z.optional(z.string()),
  }),
});

export const collections = { projects, publications };
