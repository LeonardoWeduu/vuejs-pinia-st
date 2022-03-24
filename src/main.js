import "@babel/polyfill";
import "roboto-fontface/css/roboto/roboto-fontface.css";
import "@mdi/font/css/materialdesignicons.css";
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import { createPinia, PiniaVuePlugin } from "pinia";
import i18n from "@/plugins/i18n";

Vue.use(PiniaVuePlugin);

const pinia = createPinia();

Vue.config.productionTip = false;

new Vue({
  router,
  i18n,
  pinia,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
