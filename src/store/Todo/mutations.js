/* eslint-disable no-param-reassign */
export default {
  addTodo(state, newTodo) {
    state.items.push(newTodo);
  },
  sync(state, newTodos) {
    state.items = newTodos;
  },
};
