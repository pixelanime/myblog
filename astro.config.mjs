import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import keystatic from '@keystatic/astro';

export default defineConfig({
  site: 'https://myblog-2tg.pages.dev', 
  output: 'server',
  adapter: cloudflare(),
  integrations: [
    keystatic(),
  ],
});