import Vue from 'vue';
import Vuex from 'vuex';

import AuthState from './Auth/state';
import AuthMutations from './Auth/mutations';
import AuthActions from './Auth/actions';
import AuthGetters from './Auth/getters';
import AuthPlugin from './Auth/plugins';

import TodoState from './Todo/state';
import TodoMutations from './Todo/mutations';
import TodoActions from './Todo/actions';
import TodoGetters from './Todo/getters';
import TodoPlugin from './Todo/plugins';

import ErrorsState from './Errors/state';
import ErrorsMutations from './Errors/mutations';
import ErrorsGetters from './Errors/getters';
import ErrorsPlugin from './Errors/plugins';

Vue.use(Vuex);

const Auth = {
  namespaced: true,
  state: AuthState,
  mutations: AuthMutations,
  actions: AuthActions,
  getters: AuthGetters,
};
const Todo = {
  namespaced: true,
  state: TodoState,
  mutations: TodoMutations,
  actions: TodoActions,
  getters: TodoGetters,
};
const Errors = {
  namespaced: true,
  state: ErrorsState,
  mutations: ErrorsMutations,
  getters: ErrorsGetters,
};

export default new Vuex.Store({
  modules: {
    Auth,
    Todo,
    Errors,
  },
  plugins: [
    AuthPlugin({ namespace: 'Auth' }),
    TodoPlugin({ namespace: 'Todo' }),
    ErrorsPlugin({ namespace: 'Errors' }),
  ],
});
