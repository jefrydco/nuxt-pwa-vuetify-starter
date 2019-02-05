import LRUCache from "lru-cache";
import Vue from "vue";
import Vuetify, {
  VApp,
  VNavigationDrawer,
  VFooter,
  VToolbar,
  VTextField
} from "vuetify/lib";
import { Ripple } from "vuetify/lib/directives";

import "@mdi/font/css/materialdesignicons.css";

Vue.use(Vuetify, {
  options: {
    minifyTheme: css =>
      process.env.NODE_ENV === "production"
        ? css.replace(/[\s|\r\n|\r|\n]/g, "")
        : css,
    themeCache: new LRUCache({
      max: 10,
      maxAge: 1000 * 60 * 60 // 1 hour
    }),
    cspNonce: "dQw4w9WgXcQ"
  },
  directives: {
    Ripple
  },
  components: {
    VApp,
    VNavigationDrawer,
    VFooter,
    VToolbar,
    VTextField
  }
});
