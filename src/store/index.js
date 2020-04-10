import Vue from "vue";
import Vuex from "vuex";
import {
  getToken,
  setToken,
  removeToken
} from '@/utils/auth'
import {
  login,
  getInfo
} from "@/api/user"
import {
  MessageBox,
  Message
} from 'element-ui';

Vue.use(Vuex);

const state = {
  token: getToken(),
  role: '',
  info: {},
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
  }
}

const actions = {
  handleLogin({
    commit
  }, userInfo) {
    const {
      username,
      password,
      category
    } = userInfo;
    console.log(userInfo);
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
        setToken(data.token);
        resolve();
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

const getters = {
  role: state => state.role,
  token: state => state.token,
}

export default new Vuex.Store({
  state: state,
  mutations: mutations,
  actions: actions,
  getters: getters
});