import api from '@/api';
/* eslint-disable no-param-reassign */
export default {
  async addTodo({ commit, rootState }, arg) {
    const res = await api.addTodo(arg.token, arg.title);
    if (res.errors) {
      rootState.commit('Errors/addError', {
        message: res.errors[0].message,
        type: 'error',
      });
    } else {
      commit('addTodo', { title: arg.title });
    }
  },
  async myTodos({ commit, getters, rootState }, arg) {
    const res = await api.myTodos(arg.token);
    if (res.errors) {
      rootState.commit('Errors/addError', {
        message: res.errors[0].message,
        type: 'error',
      });
    } else {
      commit('sync', res.data);
    }
    return getters.getAll;
  },
};
