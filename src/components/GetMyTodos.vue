<template>
<div>
  <div v-if="token && myTodos" v-for="(todo, index) in myTodos">{{todo.title}}</div>
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
      // this.myTodos =
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
    }
  },
  computed: {
    token() {
      return this.$store.getters['Auth/getToken'];
    }
  }
};
</script>
