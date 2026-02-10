// @ts-check

import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },

  site: process.env.PUBLIC_SITE ?? 'http://localhost:4321',
  integrations: [sitemap()],
});
