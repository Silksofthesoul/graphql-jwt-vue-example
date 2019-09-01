<template>
<div v-if="lastError" style="border: 1px solid red;">
  {{lastError.title}}
  <div style="background: #ccc; cursor: pointer;" @click="closeError">close</div>
</div>
</template>

<script>
import api from '@/api';
export default {
  name: 'ErrorMsg',
  data() {
    return {};
  },
  methods: {
    closeError() {
      this.$store.commit('Errors/delError', this.lastError.id);
    },
  },
  computed: {
    lastError() {
      return this.$store.getters['Errors/lastError']
    }
  }
};
</script>
