const teacherRoutes = [{
    path: "/teacher",
    redirect: "/teacher/index",
    component: () =>
        import("@/layouts/index/BaseLayout.vue"),
    children: [{
            path: "/teacher/index",
            name: "teacherHome",
            meta: {
                icon: 'el-icon-s-cooperation',
                title: "首页",
                roles: ['teacher']
            },
            component: () =>
                import("../views/teacher/Home/home.vue")
        },
        {
            path: "/teacher/dashboard",
            name: "Dashboard",
            meta: {
                icon: 'el-icon-s-cooperation',
                title: "分析",
                roles: ['teacher']
            },
            component: () =>
                import("../views/Login/Login.vue")
        },
        {
            path: "/teacher/resource",
            name: "Resource",
            meta: {
                icon: 'el-icon-s-cooperation',
                title: "资源管理",
                roles: ['teacher']
            },
            component: () =>
                import("../views/Login/Login.vue")
        },
        {
            path: "/teacher/course/:cid",
            name: "teacherCourse",
            meta: {
                icon: 'el-icon-s-cooperation',
                title: "课程管理",
                roles: ['teacher']
            },
            component: () =>
                import("../views/teacher/Course/course.vue")
        },
    ]
}];

export default teacherRoutes;