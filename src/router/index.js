import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";
import "nprogress/nprogress.css";
import NProgress from "nprogress";
import adminRoutes from "./admin.js";

Vue.use(VueRouter);

export const constantRoutes = [{
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import( /* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/user",
    component: {
      render: h => h("router-view")
    }, //render函数渲染一个router-view
    children: [{
        path: "login",
        name: "Login",
        component: () =>
          import("../views/Login/Login.vue")
      },
      {
        path: "register",
        name: "Register",
        component: () =>
          import("../views/Login/Register.vue")
      }
    ]
  },
  {
    path: '*',
    name: '404',
    component: () =>
      import("@/views/404.vue")
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: constantRoutes
});

router.addRoutes(adminRoutes);


export default router;