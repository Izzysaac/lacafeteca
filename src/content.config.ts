// 1. Import utilities from `astro:content`
import { defineCollection } from "astro:content";

// 2. Import loader(s)
import { glob, file } from "astro/loaders";

// 3. Import Zod
import { z } from "astro/zod";

// 4. Define a `loader` and `schema` for each collection
const cafes = defineCollection({
    loader: glob({ base: "./src/data/cafes", pattern: "**/*.{md,mdx}" }),
    schema: z.object({
        slug: z.string(),
        theme: z.string(),
        title: z.string(),
        description: z.string(),
        hero: z.object({
            image: z.object({
                url: z.string(),
                alt: z.string(),
            }),
            finca: z.string(),
            origen: z.string(),
            variedad: z.string(),
            proceso: z.string(),
            altura: z.number(),
        }),
        origin: z.object({
            image: z.object({
                url: z.string(),
                alt: z.string(),
            }),
        }),
        draft: z.boolean().optional(),
    }),
});

// 5. Export a single `collections` object to register your collection(s)
export const collections = { cafes };
