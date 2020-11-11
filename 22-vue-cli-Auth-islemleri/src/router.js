import Vue from "vue";
import VueRouter from "vue-router";

import About from "./pages/About.vue";
import Homepage from "./pages/Homepage.vue";
import Auth from "./pages/auth/Auth.vue";

Vue.use(VueRouter);

export const router = new VueRouter({
  routes: [
    { path: "/", component: Homepage },
    { path: "/about", component: About },
    { path: "/auth", component: Auth },
  ],
  mode: "history",
});
