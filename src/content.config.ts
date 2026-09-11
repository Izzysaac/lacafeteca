// 1. Import utilities from `astro:content`
import { defineCollection } from "astro:content";

// 2. Import loader(s)
import { glob, file } from "astro/loaders";

// 3. Import Zod
import { z } from "astro/zod";

// 4. Define a `loader` and `schema` for each collection
const cafes = defineCollection({
    loader: glob({ base: "./src/content/cafes", pattern: "**/*.{md,mdx}" }),
    schema: z.object({
        slug: z.string(),
        theme: z.string(),
        title: z.string(),
        description: z.string(),
        image: z.string().optional(),
        color: z.string().optional(),


        origen: z.object({
            productor: z.string(),
            finca: z.string(),
            certificaciones: z.array(z.string()).optional(),
            maps: z.string(),
            altitud: z.string(),
            municipio: z.string(),
            departamento: z.string(),
            pais: z.string(),
            tostador: z.string(),
        }),

        fichaTecnica: z.object({
            variedad: z.string(),
            fermentación: z.string(),
            beneficio: z.string(),
            secado: z.string(),
            tostion: z.string(),
        }),

        perfilSensorial: z.object({
            notas: z.string(),
            acidez: z.string(),
            cuerpo: z.string(),
            intensidad: z.string(),
        }),

        draft: z.boolean().optional(),
    }),
});

// 5. Export a single `collections` object to register your collection(s)
export const collections = { cafes };
