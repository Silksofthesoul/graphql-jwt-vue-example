<template>
  <table style="margin: 2em;">
    <tr>
      <td><h1>me</h1></td>
      <td>&nbsp;</td>
    </tr>
    <tr>
      <td><pre>{{meInf}}</pre></td>
      <td>&nbsp;</td>
    </tr>
    <tr>
      <td>&nbsp;</td>
      <td><button type="button" name="button" @click="me">get information</button></td>
    </tr>
  </table>
</template>

<script>
import api from '@/api';
export default {
  name: 'Me',
  data() {
    return {
      meInf: null,
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
    async me() {
      if(!this.token)this.getToken();
      let res = await api.me(this.token);
      if(res.errors){
        this.showError(res.errors[0].message);
      }else{
        this.meInf = res.data;
      }
    }
  }
};
</script>
