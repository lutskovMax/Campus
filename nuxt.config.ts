export default defineNuxtConfig({
  devtools: { enabled: true },
  router: {
    base: '/Campus/',
  },
    app: {
    baseURL: '/Campus/',
  },
  css: [
    "~/assets/style/main.scss",
    'vuetify/lib/styles/main.sass'
  ],
  build: {
    transpile: ['vuetify'],
  },
  vite: {
    define: {
      'process.env.DEBUG': false,
    },
  },
})
