// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const isVercel = process.env.VERCEL === 'true';

// https://astro.build/config
export default defineConfig({
  site: isVercel ? 'https://consultoriasalqualis.cl' : 'https://taidacr.github.io/',
  base: isVercel ? '/' : '/',

  //   site: 'https://taidacr.github.io/',
  // base: '/',
  integrations: [sitemap()],
});