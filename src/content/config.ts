import { defineCollection, z } from 'astro:content';

const lessons = defineCollection({
    schema: z.object({
        title: z.string(),
        lastUpdated: z.date(),
        description: z.string(),
    }),
});

export const collections = { lessons };
