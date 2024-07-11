import { z, defineCollection } from "astro:content";

const post = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.date(),
    description: z.string(),
    devLink: z.string().url().optional(),
    mediumLink: z.string().url().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = {
  post: post,
};
