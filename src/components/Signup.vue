<template>
<table style="margin: 2em;">
  <tr>
    <td>
      <h1>registration</h1>
    </td>
    <td>&nbsp;</td>
  </tr>
  <tr>
    <td><label for="">username</label></td>
    <td><input type="text" v-model="username"></td>
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
    <td><button type="button" name="button" @click="signup">signup</button></td>
  </tr>
</table>
</template>

<script>
// import api from '@/api';
export default {
  name: 'Signup',
  data() {
    return {
      username: null,
      email: null,
      password: null,
    };
  },
  methods: {
    async signup() {
      await this.$store.dispatch('Auth/signup', {
        username: this.username,
        email: this.email,
        password: this.password
      });
    },
  }
};
</script>
