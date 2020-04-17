import {
    constantRoutes
} from '@/router'

const state = {
    routes: {},
    addRoutes: {}
}

const mutations = {
    SET_ROUTES: (state, routes) => {
        state.addRoutes = routes;
        state.routes = constantRoutes.concat(routes);
    },
    SET_ADDROUTES: (state, addRoutes) => {
        state.addRoutes = addRoutes;
    }
}

const actions = {
    generateRoutes({
        commit
    }, role) {
        return new Promise(resolve => {
            const addRoutes = {};
            let a;
            if (role === 'ADMIN') {
                a = "admin";
            } else if (role === 'TEACHER') {
                a = "teacher";
            } else if (role === 'STUDENT') {
                a = "student";
            }
            commit('SET_ROUTES', addRoutes);
            // resolve(addRoutes)
            resolve(a);
        })
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
}