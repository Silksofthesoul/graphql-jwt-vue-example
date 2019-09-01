<template>
<div class="home">
  [{{token}}]
  <div v-if="token">
    <Me/>
  </div>
  <div v-if="!token">
    <Signup/>
    <Login/>
  </div>
  <AddTodo/>
  <GetMyTodos/>
  <ErrorMsg/>
</div>
</template>

<script>
import Signup from '@/components/Signup';
import Login from '@/components/Login';
import Me from '@/components/Me';
import AddTodo from '@/components/AddTodo';
import GetMyTodos from '@/components/GetMyTodos';
import ErrorMsg from '@/components/ErrorMsg';

export default {
  name: 'Home',
  data() {
    return { };
  },
  created(){ },
  methods: { },
  computed: {
    token(){
      return this.$store.getters['Auth/getToken'];
    }
  },
  components: {
    Signup,
    Login,
    Me,
    AddTodo,
    GetMyTodos,
    ErrorMsg
  },
};
</script>
``
