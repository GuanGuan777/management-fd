const adminRoutes = [{
    path: "/admin",
    component: () =>
        import("@/layouts/BaseLayout.vue"),
    children: [{
            path: "/admin/index",
            name: "Index",
            meta: {
                icon: 'el-icon-s-cooperation',
                title: "首页",
                roles: ['admin']
            },
            component: () =>
                import("../views/Login/Login.vue")
        },
        {
            path: "/admin/dashboard",
            name: "Dashboard",
            meta: {
                icon: 'el-icon-s-cooperation',
                title: "分析",
                roles: ['admin']
            },
            component: () =>
                import("../views/Login/Login.vue")
        },
        {
            path: "/admin/user",
            name: "User",
            meta: {
                icon: 'el-icon-s-cooperation',
                title: "用户管理",
                roles: ['admin']
            },
            redirect: "/admin/user/admins",
            component: {
                render: h => h("router-view")
            },
            children: [{
                    path: "/admin/user/upload",
                    name: "uploadUser",
                    meta: {
                        icon: 'el-icon-s-cooperation',
                        title: "上传用户",
                        roles: ['admin']
                    },
                    component: () =>
                        import("../views/admin/user/uploadUser.vue"),
                },
                {
                    path: "/admin/user/admins",
                    name: "userAdmin",
                    meta: {
                        icon: 'el-icon-s-cooperation',
                        title: "管理员用户",
                        roles: ['admin']
                    },
                    component: () =>
                        import("../views/admin/user/admin.vue"),
                },
                {
                    path: "/admin/user/students",
                    name: "studentStudent",
                    meta: {
                        icon: 'el-icon-s-cooperation',
                        title: "学生用户",
                        roles: ['admin']
                    },
                    component: () =>
                        import("../views/admin/user/student.vue"),
                },
                {
                    path: "/admin/user/teachers",
                    name: "userTeacher",
                    meta: {
                        icon: 'el-icon-s-cooperation',
                        title: "教师用户",
                        roles: ['admin']
                    },
                    component: () =>
                        import("../views/admin/user/teacher.vue"),
                },
            ]
        },
        {
            path: "/admin/resource",
            name: "Resource",
            meta: {
                icon: 'el-icon-s-cooperation',
                title: "资源管理",
                roles: ['admin']
            },
            component: () =>
                import("../views/Login/Login.vue")
        },
    ]
}];

export default adminRoutes;