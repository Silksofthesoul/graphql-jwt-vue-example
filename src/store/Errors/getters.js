// import array from '@/library/array';
export default {
  lastError(state) {
    return state.errors[state.errors.length - 1];
  },
};
