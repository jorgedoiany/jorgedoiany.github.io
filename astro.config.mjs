// astro.config.mjs / astro.config.ts
import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  site: 'https://jorgedoiany.github.io',
  integrations: [mdx(), sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
})
