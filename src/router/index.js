import Vue from "vue";
import VueRouter from "vue-router";
import "nprogress/nprogress.css";
import NProgress from "nprogress";
import adminRoutes from "./admin.js";

Vue.use(VueRouter);

export const constantRoutes = [{
    path: "/",
    redirect: "/home",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import("@/layouts/index/BaseLayout.vue"),
    children: [{
        path: "/home",
        name: "home",
        component: () =>
          import("../views/Home/index.vue")
      },
      {
        path: "/course/:cid",
        name: "course",
        props: true,
        component: () =>
          import("../views/Detail/index.vue")
      },
    ]

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