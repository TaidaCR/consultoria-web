// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://taidacr.github.io/',
  base: '/consultoria-web/',
  integrations: [sitemap()],
});