import api from '@/api';
/* eslint-disable no-param-reassign */
export default {
  async addTodo({ commit }, arg) {
    const res = await api.addTodo(arg.token, arg.title);
    if (res.errors) {
      commit('Errors/addError', {
        message: res.errors[0].message,
        type: 'error',
      }, { root: true });
      return { error: res.errors[0].message };
    }
    commit('addTodo', { title: arg.title });
    return true;
  },
  async myTodos({ commit, getters }, arg) {
    let res = null;
    try {
      res = await api.myTodos(arg.token);
    } catch (e) {
      commit('Errors/addError', {
        message: res.errors[0].message,
        type: 'error',
      }, { root: true });
      return { error: res.errors[0].message };
    }
    if (res.errors) {
      commit('Errors/addError', {
        message: res.errors[0].message,
        type: 'error',
      }, { root: true });
      return { error: res.errors[0].message };
    }
    commit('sync', res.data);

    return getters.getAll;
  },
};
