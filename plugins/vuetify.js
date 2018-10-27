import "@mdi/font/css/materialdesignicons.css";
import Vue from "vue";
import Vuetify, {
  VApp,
  VCard,
  VNavigationDrawer,
  VFooter,
  VList,
  VBtn,
  VIcon,
  VToolbar
} from "vuetify/lib";
import { Ripple } from "vuetify/lib/directives";

Vue.use(Vuetify, {
  directives: {
    Ripple
  },
  components: {
    VApp,
    VCard,
    VNavigationDrawer,
    VFooter,
    VList,
    VBtn,
    VIcon,
    VToolbar
  }
});
