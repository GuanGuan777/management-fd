import Vue from "vue";
import Vuex from "vuex";
import user from "./modules/user";
import permission from "./modules/permission";
import resource from "./modules/resource";
import getters from './getters';
import actions from './actions';
import mutations from './mutations';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    user,
    permission,
    resource
  },
  getters,
  actions,
  mutations
});

export default store;