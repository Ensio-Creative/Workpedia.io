export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'workpedia.io',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    script: [
      {
        src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css'
      }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    // '@assets/css/bootstrap.min.css',
    '@assets/scss/main.scss',
    '@assets/css/style.css',
    '@assets/css/main.css',
    '@assets/css/fontawesome-all.css'
  ],
  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '~/plugins/axios',
    { src: '~/plugins/vuex-persist', ssr: false }
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/moment',
    '@nuxtjs/dotenv'
  ],
  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxt/content',
    'nuxt-socket-io',
    'vue-toastification/nuxt',
    '@nuxtjs/cloudinary'
  ],

  io: {
    sockets: [ // Required
      { // At least one entry is required
        name: 'home',
        url: process.env.BASE_URL,
        default: true
      }
    ]
  },
  toast: {
    timeout: 6000,
    position: 'top-right'
  },
  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {
    common: {
      Accept: 'application/json, text/plain, */*'
    }
    // baseURL: process.env.BASE_URL || 'http://localhost:8000/'
  },

  cloudinary: {
    cloudName: process.env.COULDINARY_COULD_NAME,
    apiKey: process.env.COULDINARY_API_KEY,
    apiSecret: process.env.COULDINARY_API_SECRET_KEY
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
