// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://tedxyouth-okayama.vercel.app',
  integrations: [sitemap()],
  output: 'static',
  build: {
    inlineStylesheets: 'auto',
    assets: '_assets',
  },
  image: {
    remotePatterns: [{ protocol: "https" }],
  },
  vite: {
    build: {
      cssMinify: true,
      minify: 'terser',
      rollupOptions: {
        output: {
          assetFileNames: 'assets/[name].[hash][extname]',
          chunkFileNames: 'assets/[name].[hash].js',
          entryFileNames: 'assets/[name].[hash].js',
        },
      },
    },
    optimizeDeps: {
      exclude: ['astro:*'],
    },
  },
});
