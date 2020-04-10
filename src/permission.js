import {
    getToken,
    getInfo
} from '@/utils/auth.js';
import router from "./router/index";
import "nprogress/nprogress.css";
import NProgress from "nprogress";
import store from './store';

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
            const hasRole = store.getters.role;
            if (hasRole) {
                next();
            } else {
                try {
                    const {
                        role
                    } = await store.dispatch('getInfo');



                    next({
                        ...to,
                        replace: true
                    })
                    NProgress.done();
                } catch (error) {
                    await store.dispatch('resetToken');
                    console.error(error);
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