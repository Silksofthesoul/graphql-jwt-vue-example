<template>
<div>
  <AddTodo />
  <GetMyTodos />
  <ErrorMsg />
</div>
</template>
<script>
import AddTodo from '@/components/AddTodo';
import GetMyTodos from '@/components/GetMyTodos';
import ErrorMsg from '@/components/ErrorMsg';
export default {
  name: 'Todo',
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
    AddTodo,
    GetMyTodos,
    ErrorMsg
  },
};
</script>
