export default {
  setToken(state, newToken) {
    state.token = newToken;
  },
  clear(state) {
    state.token = null;
  },
};
