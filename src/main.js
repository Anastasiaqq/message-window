import Vue from "vue";
import App from "./App.vue";
import "./assets/style.css";
import { createPinia, PiniaVuePlugin } from "pinia";

Vue.use(PiniaVuePlugin);
const pinia = createPinia();
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  pinia,
}).$mount("#app");
