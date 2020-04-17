import {
    getToken,
    setToken,
    removeToken
} from '@/utils/auth'
import {
    login,
    getInfo
} from "@/api/user"

const state = {
    token: getToken(),
    role: "",
    info: {},
    category: '',
}

const mutations = {
    SET_TOKEN: (state, token) => {
        state.token = token;
    },
    SET_ROLE: (state, role) => {
        state.role = role;
    },
    SET_INFO: (state, info) => {
        state.info = info
    },
    SET_CATEGORY: (state, category) => {
        state.category = category;
    },
}

const getters = {
    getRole: (state) => {
        return state.roles[0].authority;
    }
}

const actions = {
    handleLogin({
        commit,
        state
    }, userInfo) {
        const {
            username,
            password,
            category
        } = userInfo;
        console.log(userInfo);
        commit('SET_CATEGORY', category);
        return new Promise((resolve, reject) => {
            login({
                username: username.trim(),
                password: password,
                category: category
            }).then((result) => {
                const {
                    data
                } = result;
                commit('SET_TOKEN', data.token);
                // commit('SET_ROLE', data.role);
                setToken(data.token);
                resolve(data);
            }).catch((error) => {
                reject(error);
            });
        })
    },
    getInfo({
        commit,
        state
    }) {
        return new Promise((resolve, reject) => {
            getInfo().then((result) => {
                const {
                    data
                } = result.data;
                console.warn(data);
                if (!data) {
                    reject('验证失败,请重新登陆');
                }
                commit('SET_INFO', data);
                commit('SET_ROLE', data.role);
                // if (state.category !== state.role) {
                //     reject("您没有权限，请检查一下")
                // }
                resolve(data);
            }).catch((err) => {
                console.warn(err);
                reject(err);
            });

        });
    },
    resetToken({
        commit,
        state
    }) {
        return new Promise((resolve, reject) => {
            commit('SET_TOKEN', '');
            commit('SET_ROLE', '');
            removeToken();
            resolve();
        })
    }
}


export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters,
}