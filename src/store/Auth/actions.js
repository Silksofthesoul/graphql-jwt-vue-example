import api from '@/api';
/* eslint-disable no-param-reassign */
function hasError(str = '', matchText = '') {
  if (!str || !matchText) return false;
  return new RegExp(matchText, 'igm').test(str);
}
function timeout(arg = { timeout: 3000, callback: () => false }) {
  const timer = setTimeout(() => {
    arg.callback();
    clearTimeout(timer);
  }, arg.timeout);
}
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
      const { message } = res.errors[0];
      commit('Errors/addError', {
        message,
        type: 'error',
      }, { root: true });
      if (hasError(message, 'jwt expired')) {
        timeout({
          timeout: 3000,
          callback: () => {
            commit('clear');
          },
        });
      }
      return false;
    }
    return res.data;
  },
};
