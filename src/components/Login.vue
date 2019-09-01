<template>
<table style="margin: 2em;">
  <tr>
    <td>
      <h1>login</h1>
    </td>
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
    };
  },
  methods: {
    async login() {
      await this.$store.dispatch('Auth/login', {
        email: this.email,
        password: this.password
      });
    }
  },
  computed: {
    token() {
      return this.$store.getters['Auth/getToken'];
    }
  }
};
</script>
