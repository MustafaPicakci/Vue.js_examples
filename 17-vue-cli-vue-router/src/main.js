import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import { routes } from "./routes";

Vue.use(VueRouter);
const router = new VueRouter({
  routes: routes,
  mode: "history", //default olarak hash
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        selector: to.hash,
      };
    }
  },
});

new Vue({
  el: "#app",
  router: router,
  render: (h) => h(App),
});
