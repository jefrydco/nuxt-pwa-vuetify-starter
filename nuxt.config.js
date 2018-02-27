require('dotenv').config()
const nodeExternals = require('webpack-node-externals')
const resolve = (dir) => require('path').join(__dirname, dir)

module.exports = {

  /*
  ** Headers of the page
  */
  head: {
    title: 'nuxt-pwa-vuetify-starter',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js + Vuetify.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' }
    ]
  },

  /**
   * Plugins
   */
  plugins: [
    '~/plugins/vuetify.js',
    '~/plugins/components.js'
  ],

  /**
   * Modules
   */
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/browserconfig',
    '@nuxtjs/component-cache',
    '@nuxtjs/dotenv',
    ['@nuxtjs/google-analytics', {
      id: process.env.ANALYTICS_ID
    }],
    '@nuxtjs/pwa',
    '@nuxtjs/sentry',
    '@nuxtjs/sitemap'
  ],

  /**
   * Custom CSS
   */
  css: [
    '~/assets/style/vuetify.styl'
  ],

  /*
  ** Customize the progress bar color
  */
  loading: {
    color: '#82b1ff',
    failedColor: '#ff8a80',
    height: '5px'
  },

  /*
  ** Build configuration
  */
  build: {

    /**
     * Babel configutation
     */
    babel: {
      presets: [
        'env',
        'stage-0'
      ],
      plugins: [
        'transform-runtime',
        ['transform-imports', {
          'vuetify': {
            'transform': 'vuetify/es5/components/${member}',
            'preventFullImport': true
          }
        }]
      ]
    },

    /**
     * Vendor
     */
    vendor: [
      '~/plugins/vuetify.js'
    ],

    /**
     * Extract CSS
     */
    extractCSS: true,

    /*
    ** Run ESLint on save
    */
    extend (config, ctx) {
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
      if (ctx.isServer) {
        config.externals = [
          nodeExternals({
            whitelist: [/^vuetify/]
          })
        ]
      }
    }
  }
}
