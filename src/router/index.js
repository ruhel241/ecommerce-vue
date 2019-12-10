import Vue from "vue";
import VueRouter from "vue-router";
// import Home from "../view/Home.vue";
import ItemsDetails from "../components/ItemsDetails.vue";
import Inventory from "../components/Inventory";

Vue.use(VueRouter);
// console.log(VueRouter);
const routes = [
  {
    path: "/",
    name: "inventory",
    component: Inventory,
  },

  {
    path: "/item/:id",
    name: "item",
    component: ItemsDetails,
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
