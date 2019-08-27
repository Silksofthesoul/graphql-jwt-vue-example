<template>
  <table style="margin: 2em;">
    <tr>
      <td><h1>login</h1></td>
      <td>&nbsp;</td>
    </tr>
    <tr>
      <td><label for="">email</label></td>
      <td><input type="text" v-model="email"></td>
    </tr>
    <tr>
      <td><label for="">password</label></td>
      <td><input type="text" v-model="password"></td>
    </tr>
    <tr>
      <td>&nbsp;</td>
      <td><button type="button" name="button" @click="login">login</button></td>
    </tr>
  </table>
</template>

<script>
import api from '@/api';
export default {
  name: 'Login',
  data() {
    return {
      email: null,
      password: null,
      token: null,
      error: {
        isShow: false,
        msg: null
      },
    };
  },
  methods: {
    async login() {
      let res = await api.login(this.email, this.password);
      if(res.errors){
        this.showError(res.errors[0].message);
      }else{
        this.token = res.data;
        console.log(this.token,'888');
        this.$store.commit('Auth/setToken', this.token);
      }
    }
  }
};
</script>
