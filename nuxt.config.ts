export default defineNuxtConfig({
  devtools: { enabled: true },
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
    ssr: false, //When false
  target: "static",
    app: {
      baseURL: "/Campus/"
  }
})
