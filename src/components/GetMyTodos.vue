<template>
<div>
  <Todo
  v-if="token && myTodos"
  v-for="(todo, index) in myTodos"
  :todo="todo"
  :key="index"
  @delete="remTodo"
  @update="updTodo"
  />
</div>
</template>

<script>
import api from '@/api';
import Todo from '@/components/Todo';
export default {
  name: 'GetMyTodos',
  data() {
    return {
      myTodos: null,
      editedTodo: null
    };
  },
  async created() {
    await this.getMyTodos();
  },
  methods: {
    async updTodo(todo) {
      if (!this.token) {
        this.$store.commit('Errors/addError', {
          message: 'Not authontificate',
          type: 'error',
        });
        return 1;
      }
      const res = await this.$store.dispatch('Todo/updTodo', {
        token: this.token,
        todo
      });
      if (res.error) {
        this.errorHandler(res.error);
      } else {
        this.myTodos = res;
      }
    },
    async remTodo(id) {
      if (!this.token) {
        this.$store.commit('Errors/addError', {
          message: 'Not authontificate',
          type: 'error',
        });
        return 1;
      }
      const res = await this.$store.dispatch('Todo/remTodo', {
        token: this.token,
        id
      });
      if (res.error) {
        this.errorHandler(res.error);
      } else {
        this.myTodos = res;
      }
    },
    async getMyTodos() {
      if (!this.token) {
        this.$store.commit('Errors/addError', {
          message: 'Not authontificate',
          type: 'error',
        });
        return 1;
      }
      const res = await this.$store.dispatch('Todo/myTodos', {
        token: this.token
      });
      if (res.error) {
        this.errorHandler(res.error);
      } else {
        this.myTodos = res;
      }
    },
    errorHandler(error) {
      let self = this;
      let errorsProcess = [{
        txt: 'jwt expired',
        callback() {
          self.$store.commit('Auth/clear');
          self.$router.push('/');
        }
      }];
      for (let o of errorsProcess) {
        let regexp = new RegExp(o.txt, 'ig');
        const matchError = error.match(regexp);
        if (matchError) {
          o.callback();
          break;
        }
      }
    },
  },
  computed: {
    token() {
      return this.$store.getters['Auth/getToken'];
    },
  },
  components: {
    Todo,
  },
};
</script>
