import api from '@/api';
/* eslint-disable no-param-reassign */
export default {
  async signup({ commit, rootState }, arg) {
    const res = await api.signup(arg.username, arg.email, arg.password);
    if (res.errors) {
      rootState.commit('Errors/addError', {
        message: res.errors[0].message,
        type: 'error',
      });
    } else {
      commit('setToken', res.data);
    }
  },
  async login({ commit, rootState }, arg) {
    const res = await api.login(arg.email, arg.password);
    if (res.errors) {
      rootState.commit('Errors/addError', {
        message: res.errors[0].message,
        type: 'error',
      });
    } else {
      commit('setToken', res.data);
    }
  },
  async me({ rootState }, arg) {
    const res = await api.me(arg.token);
    if (res.errors) {
      rootState.commit('Errors/addError', {
        message: res.errors[0].message,
        type: 'error',
      });
      return 1;
    }
    return res.data;
  },
};
