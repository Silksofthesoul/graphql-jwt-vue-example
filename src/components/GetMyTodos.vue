<template>
  <table style="margin: 2em;">
    <tr>
      <td><h1>myTodos</h1></td>
      <td>&nbsp;</td>
    </tr>
    <tr>
      <td><pre>{{myTodos}}</pre></td>
      <td>&nbsp;</td>
    </tr>
    <tr>
      <td>&nbsp;</td>
      <td><button type="button" name="button" @click="getMyTodos">myTodos</button></td>
    </tr>
  </table>
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
  created(){ },
  methods: {
    async getMyTodos() {
      if(!this.token)this.getToken();
      let res = await api.myTodos(this.token);
      if(res.errors){
        this.$store.commit('Errors/addError', {
          message: res.errors[0].message,
          type: 'error',
        });
      }else{
        this.myTodos = res.data;
      }
    },
  },
  computed: {
    token() {
      return this.$store.getters['Auth/getToken'];
    }
  }
};
</script>
