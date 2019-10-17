/* eslint-disable no-param-reassign */
import array from '@/library/array';

export default {
  addTodo(state, newTodo) {
    state.items.push(newTodo);
  },
  remTodo(state, id) {
    const index = array.find.index(state.items, id);
    if (index >= 0) state.items.splice(index, 1);
  },
  updTodo(state, todo) {
    const index = array.find.index(state.items, todo.id);
    if (index >= 0) state.items[index] = todo;
  },
  sync(state, newTodos) {
    state.items = newTodos;
  },
  clear(state) {
    state.items = [];
  },
};
