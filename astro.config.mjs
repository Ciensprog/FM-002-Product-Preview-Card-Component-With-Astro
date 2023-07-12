import tailwind from '@astrojs/tailwind'
import { defineConfig } from 'astro/config'

/*
|-------------------------------------------------------------------------------
| Configuration
|-------------------------------------------------------------------------------
*/

// https://astro.build/config
export default defineConfig({
  base: '/REPO_NAME/',
  compressHTML: true,
  integrations: [tailwind()],
  site: 'https://ciensprog.github.io',
})
