<template>
<table style="margin: 2em;">
  <tr>
    <td>
      <h1>addTodo</h1>
    </td>
    <td>&nbsp;</td>
  </tr>
  <tr>
    <td><label for="">title</label></td>
    <td><input type="text" v-model="todoTitle"></td>
  </tr>
  <tr>
    <td>&nbsp;</td>
    <td><button type="button" name="button" @click="addTodo">addTodo</button></td>
  </tr>
</table>
</template>

<script>
import api from '@/api';
export default {
  name: 'AddTodo',
  data() {
    return {
      todoTitle: null,
    };
  },
  created() {},
  methods: {
    async addTodo() {
      if (this.token) {
        let res = await api.addTodo(this.token, this.todoTitle);
        this.todoTitle = null;
        if (res.errors) {
          this.showError(res.errors[0].message);
        }
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
