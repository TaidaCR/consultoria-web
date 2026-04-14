// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const isVercel = process.env.VERCEL === 'true';

// https://astro.build/config
export default defineConfig({
  site:'https://consultoriasalqualis.cl',
  base: '/',

  //   site: 'https://taidacr.github.io/',
  // base: '/',
  integrations: [sitemap()],
});