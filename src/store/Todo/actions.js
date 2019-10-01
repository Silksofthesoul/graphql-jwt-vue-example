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
    commit('addTodo', {
      id: res.data.id,
      title: arg.title,
    });
    return true;
  },
  async remTodo({ commit, getters }, arg) {
    const res = await api.remTodo(arg.token, arg.id);
    if (res.errors) {
      commit('Errors/addError', {
        message: res.errors[0].message,
        type: 'error',
      }, { root: true });
      return { error: res.errors[0].message };
    }
    commit('remTodo', { id: arg.id });
    commit('sync', res.data);
    return getters.getAll;
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
