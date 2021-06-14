export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'webapp-dependency-updater',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: ''},
    ],
    link: [{rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/scss/main.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/services',
    '~/plugins/axios'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    '@nuxtjs/fontawesome',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    'nuxt-i18n',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    rejectUnauthorized: true,
    baseUrl: 'http://localhost:5000/api/v1/',
  },

  i18n: {
    locales: [
      {code: 'en', iso: 'en-US', file: 'en-US.js'},
      {code: 'de', iso: 'de-CH', file: 'de-CH.js'},
    ],
    defaultLocale: 'en',
    lazy: true,
    langDir: '~/locales/',
    fallbackLocale: 'en',
    parsePages: false,
    pages: {
      'platforms/index': {
        de: '/platformen',
        en: '/platforms',
      },
      'platforms/_id': {
        de: '/platformen/:id',
        en: '/platforms/:id',
      },
      'projects/index': {
        de: '/projekte',
        en: '/projects',
      },
    },
  },

  fontawesome: {
    component: 'Fa',
    icons: {
      solid: ['faFingerprint', 'faSignature', 'faCloud', 'faPen', 'faTimes', 'faPlus', 'faSave', 'faKey', 'faUserSecret', 'faLink', 'faStopwatch', 'faCodeBranch', 'faCode', 'faIdBadge', 'faEnvelope'],
      brands: ['faGithub'],
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
