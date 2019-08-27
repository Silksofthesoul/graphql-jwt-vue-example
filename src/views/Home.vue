<template>
<div class="home">

  <Signup/>
  <Login/>
  <Me/>
  <AddTodo/>
  <GetMyTodos/>

  <!-- <div v-if="error.isShow" style="border: 1px solid red">
    {{error.msg}}
    <div style="background: #ccc; cursor: pointer;" @click="closeError">close</div>
  </div> -->

</div>
</template>

<script>
import Signup from '@/components/Signup';
import Login from '@/components/Login';
import Me from '@/components/Me';
import AddTodo from '@/components/AddTodo';
import GetMyTodos from '@/components/GetMyTodos';

export default {
  name: 'Home',
  data() {
    return { };
  },
  methods: {
    // showError(msg) {
    //   this.error.msg = msg;
    //   this.error.isShow = true;
    // },
    // closeError() {
    //   this.error.isShow = false;
    //   this.clearError();
    // },
    // clearError(){
    //   this.error.msg = null;
    // }
  },
  components: {
    Signup,
    Login,
    Me,
    AddTodo,
    GetMyTodos
  },
};
</script>
``
