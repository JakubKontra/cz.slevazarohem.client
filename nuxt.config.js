module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: 'SlevaZaRohem.cz',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content:
          'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no'
      },
      {
        hid: 'description',
        name: 'description',
        content: ''
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content:
          ''
      },
      { hid: 'author', name: 'author', content: 'Siesta.Hackers' },
      {
        hid: 'og:site_name',
        name: 'og:site_name',
        content: ''
      },
      {
        hid: 'og:description',
        name: 'og:description',
        content: ''
      },
      {
        hid: 'og:title',
        name: 'og:title',
        content: ''
      },
      { hid: 'og:type', name: 'og:type', content: 'website' },
      {
        hid: 'og:image',
        name: 'og:image',
        content: 'images/og_image.png'
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: {
    color: '#da002f',
    height: '15px'
  },

  /*
  ** Global CSS
  */
  css: ['normalize.css/normalize.css', '@/assets/scss/main.scss'],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    {
      src: '@/plugins/nuxt-client-init.js',
      ssr: false
    }
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/style-resources',
    'vue-scrollto/nuxt',
    '@nuxtjs/google-analytics'
  ],

  googleAnalytics: {
    id: 'UA-137854722-1'
  },

  styleResources: {
    scss: ['assets/scss/_variables.scss']
  },

  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
    baseURL: 'http://api.slevazarohem.cz/',
  },

  /*
  ** Build configuration
  */
  build: {
    postcss: {
      preset: {
        features: {
          customProperties: false
        }
      }
    },
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
