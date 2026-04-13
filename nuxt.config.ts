export default defineNuxtConfig({
  compatibilityDate: '2026-04-13',
  ssr: true,

  modules: [
    '@nuxt/ui',
    '@nuxt/eslint',
  ],

  devtools: { enabled: true },

  css: ['~/assets/css/main.css'],

  runtimeConfig: {
    databaseUrl: process.env.NUXT_DATABASE_URL || '',
    databaseAuthToken: process.env.NUXT_DATABASE_AUTH_TOKEN || '',
  },

  nitro: {
    experimental: {
      wasm: true
    }
  }
})