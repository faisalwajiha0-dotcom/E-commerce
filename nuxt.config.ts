// nuxt.config.ts
export default defineNuxtConfig({
  modules: [
    '@nuxt/ui',
    '@nuxt/eslint',
    '@nuxthub/core'
  ],

  devtools: { enabled: true },

  css: ['~/assets/css/main.css'],

  compatibilityDate: '2025-07-15',

  nitro: {
    preset: 'cloudflare', // Required for D1
    cloudflare: {
      nodeCompat: true
    }
  },

  hub: {
    database: {
      driver: 'd1' // Use Cloudflare D1
    }
  },

  eslint: { config: { stylistic: true } }
})
