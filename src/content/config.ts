import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string().min(1, "Title cannot be empty"),
    description: z.string().min(1, "Description cannot be empty"),
    date: z.coerce.date(),
    draft: z.boolean().default(false)
  }),
});

const til = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string().min(1, "Title cannot be empty"),
    description: z.string().min(1, "Description cannot be empty"),
    date: z.coerce.date(),
    draft: z.boolean().default(false)
  }),
});

export const collections = { blog, til };
