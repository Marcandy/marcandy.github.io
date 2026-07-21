import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    tagline: z.string(),
    year: z.string(),
    context: z.string(),
    stack: z.array(z.string()),
    order: z.number(),
    featured: z.boolean().default(true),
    links: z
      .object({
        live: z.string().url().optional(),
        repo: z.string().url().optional(),
      })
      .default({}),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
  }),
});

export const collections = { projects };
