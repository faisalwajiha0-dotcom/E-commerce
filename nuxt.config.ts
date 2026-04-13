export default defineNuxtConfig({
  modules: [
    '@nuxt/ui',
    '@nuxt/eslint',
  ],

  devtools: { enabled: true },

  css: ['~/assets/css/main.css'],

runtimeConfig: {
    // These default values will be overridden by NUXT_DATABASE_URL 
    // and NUXT_DATABASE_AUTH_TOKEN from your .env file
    databaseUrl: '', 
    databaseAuthToken: '',
  },

  nitro: {
    experimental: {
      wasm: true
    }
  }
})