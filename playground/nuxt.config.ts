export default defineNuxtConfig({
  compatibilityDate: "2025-03-19",

  app: {
    head: {
      title: 'FineDayClub UI Components',
    },
    link: [
      { rel: 'icon', type: 'image/png', href: 'https://www.finedayclub.com/favicon.png' }
    ]
  },

  modules: [
    '@nuxt/ui',
    '@nuxtjs/tailwindcss',
    ['../src/module', {
      siteUrl: 'http://localhost:3001',
    }]
  ],

  tailwindcss: {
    cssPath: ["~/assets/css/styles.css", { injectPosition: 0 }],
    configPath: 'tailwind.config.ts',
    exposeConfig: true
  },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: "modern-compiler",
        },
      },
    },
  },

  devtools: { enabled: true }
})
