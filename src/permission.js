import {
    getToken,
    getInfo
} from '@/utils/auth.js';
import router from "./router/index";
import "nprogress/nprogress.css";
import NProgress from "nprogress";
import store from './store';
import {
    Message
} from 'element-ui';

router.beforeEach(async (to, from, next) => {
    NProgress.start();
    const hasToken = getToken();
    if (hasToken) {
        console.log("start router");
        if (to.path === '/user/login') {
            console.log("start login jump");
            next({
                path: '/'
            });
            NProgress.done();
        } else {
            let hasRole = store.getters.role;
            // hasRole = 'STUDENT';
            if (hasRole) {
                next();
            } else {
                try {
                    const {
                        role
                    } = await store.dispatch('user/getInfo');
                    const accessRoutes = await store.dispatch('permission/generateRoutes', role);
                    console.log(accessRoutes);
                    // router.addRoutes(accessRoutes);
                    next({
                        ...to,
                        replace: true
                    })
                    NProgress.done();
                } catch (error) {
                    await store.dispatch('user/resetToken');
                    Message.error(error);
                    next({
                        path: '/user/login'
                    });
                    NProgress.done();
                }
            }
        }
    } else {
        if (to.path === '/user/login') {
            next();
        } else {
            next('/user/login');
            NProgress.done();
        }
    }

})

router.afterEach(() => {
    NProgress.done();
})