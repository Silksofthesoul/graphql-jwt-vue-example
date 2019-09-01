<template>
<table style="margin: 2em;">
  <tr>
    <td>
      <h1>me</h1>
    </td>
    <td>&nbsp;</td>
  </tr>
  <tr>
    <td>
      <pre>{{meInf}}</pre>
    </td>
    <td>&nbsp;</td>
  </tr>
  <tr>
    <td><button type="button" name="button" @click="logout">logout</button>
  </td>
  <td>
    <button type="button" name="button" @click="me">get information</button>
  </td>
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
    };
  },
  created() {},
  methods: {
    async me() {
      if (this.token) {
        this.meInf = await this.$store.dispatch('Auth/me', { token: this.token, });
      }
    },
    logout() {
      this.$store.commit('Auth/clear');
    }
  },
  computed: {
    token() {
      return this.$store.getters['Auth/getToken'];
    }
  }
};
</script>
<style lang="less">
.btn {
    padding: 1em;
    background-color: #ccc;
}
</style>
