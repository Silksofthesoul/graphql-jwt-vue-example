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
      token: null,
      error: {
        isShow: false,
        msg: null
      },
    };
  },
  created(){
    this.getToken();
  },
  methods: {
    getToken(){
      this.token = this.$store.getters['Auth/getToken'];
    },
    async getMyTodos() {
      if(!this.token)this.getToken();
      let res = await api.myTodos(this.token);
      if(res.errors){
        this.showError(res.errors[0].message);
      }else{
        this.myTodos = res.data;
      }
    },
  }
};
</script>
