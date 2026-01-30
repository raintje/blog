import { file, glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { defineCollection, reference } from 'astro:content';

const blog = defineCollection({
  loader: glob({ pattern: '**/[^_]*.mdx', base: './src/data/blog' }),
  schema: z.object({
    title: z.string(),
    abstract: z.string(),
    featured: z.boolean().optional(),
    draft: z.boolean().optional(),
    publishedAt: z.coerce.date(),
    updatedAt: z.coerce.date().optional(),
    tags: z.array(reference('tags')),
    relatedPosts: z.array(reference('blog')).optional(),
  }),
});

const tags = defineCollection({
  loader: file('./src/data/tags.json'),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
  }),
});

export const collections = { blog, tags };
