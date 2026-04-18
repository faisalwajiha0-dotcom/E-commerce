export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  ssr: true,

  modules: [
    '@nuxt/ui'
  ],


  devtools: { enabled: true },

  css: ['~/assets/css/main.css'],

})