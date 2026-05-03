import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import keystatic from '@keystatic/astro';

export default defineConfig({
  site: 'https://myblog.pages.dev', 
  
  // HAPUS BAGIAN EXPERIMENTAL TADI
  
  output: 'static',
  adapter: cloudflare(),
  integrations: [
    keystatic(),
  ],
});