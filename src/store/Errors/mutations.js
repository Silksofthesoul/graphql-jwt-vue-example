import array from '@/library/array';

const getNextId = (arr) => {
  let last = array.find.maxKey(arr);
  return last === -1 ? 0 : ++last;
};

export default {
  addError(state, error) {
    state.errors.push({
      id: getNextId(state.errors),
      ...error,
    });
  },
  delError(state, id = undefined) {
    if (id !== undefined) {
      const index = array.find.index(state.errors, id);
      if (index >= 0) state.errors.splice(index, 1);
    }
  },

};
