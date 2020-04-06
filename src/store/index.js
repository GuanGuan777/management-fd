import Vue from "vue";
import Vuex from "vuex";
import {
  getToken,
  setToken,
  removeToken
} from '@/utils/auth'
import {
  login
} from "@/api/user"
import {
  MessageBox,
  Message
} from 'element-ui';

Vue.use(Vuex);

const store = {
  token: getToken(),
  role: '',
}

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token;
  },
  SET_ROLE: (state, role) => {
    state.role = role;
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
}

export default new Vuex.Store({
  state: store,
  mutations: mutations,
  actions: actions
});