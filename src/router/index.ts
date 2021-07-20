import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";
import App1 from "../components/App1.vue";
import App2 from "@/components/App2.vue";
import App3 from "@/components/App3.vue";
// import Contact from "@/components/Contact.vue"

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/app1",
    // name: "App1",
    component: App1,
  },
  {
    path: "/app2",
    // name: "App2",
    component: App2,
  },
  {
    path: "/app3",
    // name: "App3",
    component: App3,
  },
  // {
  //   path: "/contact",
  //   // name: "App3",
  //   component: Contact,
  // },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
