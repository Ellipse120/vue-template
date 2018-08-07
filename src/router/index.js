import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

import Layout from "@/views/layout/Layout";

/**
 *  Note:
 *
 *  hidden: whether show this page.
 *
 *  route level code-splitting
 *  this generates a separate chunk (about.[hash].js) for this route
 *  which is lazy-loaded when the route is visited.
 **/

export const constantRoute = [
  {
    path: "/login",
    component: () => import("@/views/login/index"),
    hidden: true
  },
  {
    path: "/p-404",
    component: () => import("@/views/errorPage/page-404"),
    hidden: true
  },

  // {
  //   path: "/home",
  //   name: "home",
  //   component: Home
  // },
  // {
  //   path: "/about",
  //   name: "about",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ "@/views/About.vue")
  // },
  {
    path: "/",
    component: Layout,
    redirect: "/dashboard",
    children: [
      {
        path: "dashboard",
        name: "dashboard",
        component: () =>
          import(/* webpackChunkName: "dashboard" */ "@/views/dashboard/index"),
        meta: { title: "dashboard", icon: "eye" }
      }
    ]
  },
  {
    path: "/about",
    component: Layout,
    name: "About",
    children: [
      {
        path: "about",
        component: () =>
          import(/* webpackChunkName: "about" */ "@/views/About.vue"),
        name: "about",
        meta: { title: "about", icon: "user" }
      }
    ]
  },

  {
    path: "/example",
    component: Layout,
    redirect: "/example/table",
    name: "Example",
    meta: { title: "Example", icon: "example" },
    children: [
      {
        path: "table",
        name: "Table",
        component: () => import("@/views/table/index"),
        meta: { title: "Table", icon: "table" }
      }
    ]
  }
];

export default new Router({
  mode: "history",
  scrollBehavior: () => ({ y: 0 }),
  base: process.env.BASE_URL,
  routes: constantRoute
});
