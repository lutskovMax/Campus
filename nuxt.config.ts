export default {
  mode: 'static',
  router: {
     base: '/Campus/'
  },
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
  app: {baseURL: '/Campus/'},
}
