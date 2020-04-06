const adminRoutes = [{
    path: "/admin",
    component: () =>
        import("@/layouts/BaseLayout.vue"),
    children: [{
            path: "index",
            name: "Index",
            meta: {
                icon: 'index',
                title: "首页",
                roles: ['admin']
            },
            component: () =>
                import("../views/Login/Register.vue")
        },
        {
            path: "dashboard",
            name: "Dashboard",
            meta: {
                icon: 'analysis',
                title: "分析",
                roles: ['admin']
            },
            component: () =>
                import("../views/Login/Register.vue")
        },
        {
            path: "user",
            name: "User",
            meta: {
                icon: 'user',
                title: "用户管理",
                roles: ['admin']
            },
            component: () =>
                import("../views/Login/Login.vue")
        },
        {
            path: "resource",
            name: "Resource",
            meta: {
                icon: 'resource',
                title: "资源管理",
                roles: ['admin']
            },
            component: () =>
                import("../views/Login/Login.vue")
        },
    ]
}];

export default adminRoutes;