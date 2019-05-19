import LRUCache from 'lru-cache'
import Vue from 'vue'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify, {
  options: {
    minifyTheme: css =>
      process.env.NODE_ENV === 'production'
        ? css.replace(/[\s|\r\n|\r|\n]/g, '')
        : css,
    themeCache: new LRUCache({
      max: 10,
      maxAge: 1000 * 60 * 60 // 1 hour
    }),
    cspNonce: 'dQw4w9WgXcQ'
  }
})
