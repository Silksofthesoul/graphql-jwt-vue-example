<template>
<div id="app">
  <div id="nav">
    <router-link to="/">User</router-link>&nbsp;
    <router-link v-if="token" to="/Todo">Todo</router-link>
    {{token}}
  </div>
  <router-view />
</div>
</template>

<script>
import api from '@/api';
export default {
  name: 'App',
  computed: {
    token() {
      return this.$store.getters['Auth/getToken'];
    }
  }
};
</script>

<style lang="less">
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}
#nav {
    padding: 30px;
    a {
        font-weight: bold;
        color: #2c3e50;
        &.router-link-exact-active {
            color: #42b983;
        }
    }
}
</style>
