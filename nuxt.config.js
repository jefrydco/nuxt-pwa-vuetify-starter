import nodeExternals from "webpack-node-externals";
import VuetifyLoaderPlugin from "vuetify-loader/lib/plugin";

export default {
  // https://nuxtjs.org/api/configuration-modern
  modern: true,

  // https://nuxtjs.org/api/configuration-head
  head: {
    titleTemplate: title =>
      title ? `${title} - Nuxt PWA Vuetify` : "Nuxt PWA Vuetify",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" }
    ]
  },

  // https://nuxtjs.org/api/configuration-modules
  modules: [
    // https://axios.nuxtjs.org/
    "@nuxtjs/axios",

    // https://github.com/nuxt-community/modules/tree/master/packages/browserconfig
    "@nuxtjs/browserconfig",

    // https://nuxtjs.org/faq/cached-components/
    "@nuxtjs/component-cache",

    // https://pwa.nuxtjs.org/
    "@nuxtjs/pwa",

    // https://github.com/nuxt-community/sitemap-module
    "@nuxtjs/sitemap",

    // https://github.com/nuxt-community/sentry-module
    "@nuxtjs/sentry",

    // https://github.com/nuxt-community/analytics-module
    [
      "@nuxtjs/google-analytics",
      {
        // TODO: Change this id to your Google Analytics ID
        id: "UA-XXXXX-X"
      }
    ]
  ],

  // https://github.com/nuxt-community/sentry-module#readme
  sentry: {
    // TODO: Change this dsn to your dsn value
    dsn: ""
  },

  // https://nuxtjs.org/api/configuration-plugins
  plugins: ["~/plugins/vuetify", "~/plugins/vee-validate"],

  // https://nuxtjs.org/api/configuration-css
  css: ["~/assets/styles/fonts.css", "~/assets/styles/vuetify.styl"],

  // https://nuxtjs.org/api/configuration-build
  build: {
    extractCSS: true,
    transpile: [/^vuetify/],
    plugins: [new VuetifyLoaderPlugin()],
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /node_modules/,
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
