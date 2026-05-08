import { defineCollection, defineContentConfig, z } from '@nuxt/content';

export default defineContentConfig({
  collections: {
    articles: defineCollection({
      type: 'page',
      source: {
        include: 'articles/**/*.md',
        prefix: '/articles'
      },
      schema: z.object({
        title: z.string(),
        description: z.string(),
        date: z.string(),
        category: z.enum(['engineering', 'dev-notes']),
        tags: z.array(z.string()).default([]),
        cover: z.string().optional(),
        draft: z.boolean().default(false)
      }),
      indexes: [{ columns: ['date'] }, { columns: ['category'] }, { columns: ['draft'] }]
    })
  }
});