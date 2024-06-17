import { defineConfig } from 'vitepress'
import { sidebarConfig } from './config/sidebar'
import { socialLinksConfig } from './config/socialLinks'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "KUN's Moe VitePress Template",
  description: 'A Moe VitePress Template modified by KUN!',
  base: '/',
  srcDir: 'articles',
  outDir: './dist',
  sitemap: { hostname: 'https://kun1007.github.io/kun-vitepress-template/' },
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/favicon-32x32.webp',

    lastUpdated: {
      text: 'Last Updated At',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium',
      },
    },

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Chino', link: '/animations/waifu/kun-chino-2023' },
      { text: 'Visual Novels', link: '/visualnovels/kun-visualnovels' },
    ],

    sidebar: sidebarConfig,

    socialLinks: socialLinksConfig,

    search: {
      provider: 'local',
    },
  },

  ignoreDeadLinks: true,
  lastUpdated: true,
  markdown: {
    lineNumbers: true,
  },
})
