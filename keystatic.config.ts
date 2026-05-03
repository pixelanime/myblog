import { config, collection } from '@keystatic/core';

export default config({
  storage: {
    kind: 'github',
    repo: 'pixelanime/myblog',
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
        content: { type: 'markdown', label: 'Content' },
      },
    }),
  },
});