import api from '@/api';
/* eslint-disable no-param-reassign */
export default {
  async signup({ commit }, arg) {
    const res = await api.signup(arg.username, arg.email, arg.password);
    if (res.errors) {
      commit('Errors/addError', {
        message: res.errors[0].message,
        type: 'error',
      }, { root: true });
      return false;
    }
    commit('setToken', res.data);
    return true;
  },
  async login({ commit }, arg) {
    const res = await api.login(arg.email, arg.password);
    if (res.errors) {
      commit('Errors/addError', {
        message: res.errors[0].message,
        type: 'error',
      }, { root: true });
      return false;
    }
    commit('setToken', res.data);
    return true;
  },
  async me({ commit }, arg) {
    const res = await api.me(arg.token);
    if (res.errors) {
      commit('Errors/addError', {
        message: res.errors[0].message,
        type: 'error',
      }, { root: true });
      return false;
    }
    return res.data;
  },
};
