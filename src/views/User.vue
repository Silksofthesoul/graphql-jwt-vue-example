<template>
<div class="home">
  <div v-if="token">
    <Me />
  </div>
  <div v-if="!token">
    <Signup />
    <Login />
  </div>
  <ErrorMsg />
</div>
</template>

<script>
import Signup from '@/components/Signup';
import Login from '@/components/Login';
import Me from '@/components/Me';

import ErrorMsg from '@/components/ErrorMsg';

export default {
  name: 'User',
  data() {
    return {};
  },
  created() {},
  methods: {},
  computed: {
    token() {
      return this.$store.getters['Auth/getToken'];
    }
  },
  components: {
    Signup,
    Login,
    Me,
    ErrorMsg
  },
};
</script>
