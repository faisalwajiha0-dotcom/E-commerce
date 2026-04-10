export default defineNuxtConfig({
  modules: [
    '@nuxt/ui',
    '@nuxt/eslint',
    '@nuxthub/core'
  ],

  devtools: { enabled: true },

  app: {
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css'
        }
      ]
    }
  },

  css: ['~/assets/css/main.css'],

  ui: {
    content: true,
    experimental: { componentDetection: true }
  },

  compatibilityDate: '2025-07-15',

  nitro: {
    cloudflare: { nodeCompat: true }
  },

  hub: {
    db: 'sqlite'
  },

  eslint: { config: { stylistic: true } }
})
