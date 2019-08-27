import Vue from 'vue';
import Vuex from 'vuex';

import AuthState from './Auth/state';
import AuthMutations from './Auth/mutations';
import AuthGetters from './Auth/getters';
import localStoragePlugin from './Auth/plugins';

Vue.use(Vuex);

const Auth = {
  namespaced: true,
  state: AuthState,
  mutations: AuthMutations,
  getters: AuthGetters,
};

export default new Vuex.Store({
  modules: {
    Auth,
  },
  plugins: [
    localStoragePlugin({ namespace: 'Auth' }),
  ],
});
