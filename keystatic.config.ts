import { config, collection } from '@keystatic/core';

export default config({
  storage: {
    kind: 'github',
    repo: 'pixelanime/myblog', // GANTI dengan repo kamu
  },
  collections: {
    posts: collection({
      label: 'Blog Posts',
      slugField: 'title',
      path: 'src/content/posts/*',
      format: { contentField: 'content' },
      schema: {
        title: { type: 'string', label: 'Title' },
        description: { type: 'string', label: 'Description' },
        date: { type: 'date', label: 'Date' },
        image: {
          type: 'image',
          label: 'Cover Image',
          directory: 'src/assets/images/posts',
          publicPath: '/images/posts',
        },
        tags: {
          type: 'array',
          of: { type: 'string' },
          label: 'Tags',
        },
        content: {
          type: 'markdown',
          label: 'Content',
          options: {
            headingLevels: [2, 3, 4],
            blockTypes: ['code-block'],
          },
        },
      },
    }),
    
    pages: collection({
      label: 'Pages',
      slugField: 'title',
      path: 'src/content/pages/*',
      format: { contentField: 'content' },
      schema: {
        title: { type: 'string', label: 'Title' },
        content: { type: 'markdown', label: 'Content' },
      },
    }),
  },
});