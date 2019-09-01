<template>
<div>
  <div v-if="token" v-for="(todo, index) in myTodos">{{todo.title}}</div>

</div>
</template>

<script>
import api from '@/api';
export default {
  name: 'GetMyTodos',
  data() {
    return {
      myTodos: null,
    };
  },
  async created() {
    await this.getMyTodos();
  },
  methods: {
    async getMyTodos() {
      if (!this.token) {
        this.$store.commit('Errors/addError', {
          message: 'Not authontificate',
          type: 'error',
        });
        return 1;
      }
      this.myTodos = await this.$store.dispatch('Todo/myTodos', {token: this.token});
    },
  },
  computed: {
    token() {
      return this.$store.getters['Auth/getToken'];
    }
  }
};
</script>
