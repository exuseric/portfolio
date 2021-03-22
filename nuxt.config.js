export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Eric Maina • Front-end Developer',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'theme-color', content: '#ffdc00' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Eric Maina a front-end developer from Nairobi, Kenya, with a speciality in minimal and accessible design.',
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content:
          'front-end, front-end developer, front-end development, web developer, web development, minimal, accessibility',
      },
      {
        name: 'twitter:card',
        content: 'summary',
      },
      {
        name: 'twitter:creator',
        content: '@exuseric',
      },
      {
        name: 'twitter:url',
        content: 'https://itseric.netlify.app',
      },
      {
        name: 'twitter:title',
        content: 'Eric Maina • Front-end developer',
      },
      {
        name: 'twitter:description',
        content:
          'Eric Maina a front-end developer from Nairobi, Kenya, with a speciality in minimal and accessible design.',
      },
      {
        name: 'twitter:image',
        content: 'https://itseric.netlify.app/icon.png',
      },
      {
        name: 'twitter:image:alt',
        content: 'Eric',
      },
      {
        property: 'og:title',
        content: 'Eric Maina • Front-end developer',
      },
      {
        property: 'og:description',
        content:
          'Eric Maina a front-end developer from Nairobi, Kenya, with a speciality in minimal and accessible design.',
      },
      {
        property: 'og:url',
        content: 'https://itseric.netlify.app',
      },
      {
        property: 'og:type',
        content: 'website',
      },
      {
        property: 'og:image',
        content: 'https://itseric.netlify.app/icon.png',
      },
      {
        property: 'og:image:type',
        content: 'image/png',
      },
      {
        property: 'og:image:alt',
        content: 'Eric',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Montserrat&family=Playfair+Display&display=swap"',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/css/main.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/svg',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    '@nuxtjs/style-resources',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
      short_name: 'EMG',
      name: 'Eric Maina • Front-end Developer',
      description: 'Eric Maina, a front-end developer from Nairobi, Kenya.',
      backgorund_color: '#020202',
      theme_color: '#ffdc00',
      start_url: '/',
      display: 'standalone',
    },
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  styleResources: {
    scss: ['~/assets/css/config/_config.scss'],
  },
}
