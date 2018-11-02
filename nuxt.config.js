import nodeExternals from "webpack-node-externals";
import VuetifyLoaderPlugin from "vuetify-loader/lib/plugin";

export default {
  /*
  ** Headers of the page
  */
  head: {
    title: "nuxt-pwa-vuetify-starter",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "Nuxt.js + Vuetify.js project"
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons"
      }
    ]
  },

  /**
   * Plugins
   */
  plugins: ["~/plugins/vuetify.js", "~/plugins/components.js"],

  /**
   * Modules
   */
  modules: [
    "@nuxtjs/axios",
    "@nuxtjs/browserconfig",
    "@nuxtjs/component-cache",
    "@nuxtjs/pwa",
    "@nuxtjs/sitemap",
    "@nuxtjs/sentry",
    [
      "@nuxtjs/google-analytics",
      {
        // TODO: Change this id to your Google Analytics ID
        id: "UA-XXXXX-X"
      }
    ]
  ],

  /**
   * Sentry Configuration
   */
  sentry: {
    // TODO: Change this dsn to your dsn value
    dsn: ""
  },

  /**
   * Custom CSS
   */
  css: ["~/assets/style/vuetify.styl"],

  /*
  ** Customize the progress bar color
  */
  loading: {
    color: "#82b1ff",
    failedColor: "#ff8a80",
    height: "5px"
  },

  /*
  ** Build configuration
  */
  build: {
    /**
     * Extract CSS
     */
    extractCSS: true,
    transpile: [/^vuetify/],
    plugins: [new VuetifyLoaderPlugin()],

    /*
    ** Run ESLint on save
    */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/,
          options: {
            fix: true
          }
        });
      }
      if (process.server) {
        config.externals = [
          nodeExternals({
            whitelist: [/^vuetify/]
          })
        ];
      }
    }
  }
};
