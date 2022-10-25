import Vue from "vue";
import Router from "vue-router";
import compOne from "./components/compOne.vue";
import compTwo from "./components/compTwo.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "compOne",
      component: compOne
    },
    {
      path: "/two",
      name: "compTwo",
      component: compTwo
    }
  ],
  mode: "history"
});