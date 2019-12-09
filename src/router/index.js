import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

import Hello from '../components/Hello.vue'


Vue.use(VueRouter);
console.log(VueRouter);
const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },

  {
    path: "/hello",
    name: "hello",
    component: Hello,
  },
  

  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
