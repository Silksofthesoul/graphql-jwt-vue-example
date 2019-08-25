<template>
<div class="home">

  <table style="margin: 2em;">
    <tr>
      <td><h1>registration</h1></td>
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

  <table style="margin: 2em;">
    <tr>
      <td><h1>login</h1></td>
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

  <table style="margin: 2em;">
    <tr>
      <td><h1>me</h1></td>
      <td>&nbsp;</td>
    </tr>
    <tr>
      <td><pre>{{meInf}}</pre></td>
      <td>&nbsp;</td>
    </tr>
    <tr>
      <td>&nbsp;</td>
      <td><button type="button" name="button" @click="me">send</button></td>
    </tr>
  </table>

  <table style="margin: 2em;">
    <tr>
      <td><h1>addTodo</h1></td>
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

  <table style="margin: 2em;">
    <tr>
      <td><h1>myTodos</h1></td>
      <td>&nbsp;</td>
    </tr>
    <tr>
      <td><pre>{{myTodos}}</pre></td>
      <td>&nbsp;</td>
    </tr>
    <tr>
      <td>&nbsp;</td>
      <td><button type="button" name="button" @click="getMyTodos">myTodos</button></td>
    </tr>
  </table>

  <div v-if="error.isShow" style="border: 1px solid red">
    {{error.msg}}
    <div style="background: #ccc; cursor: pointer;" @click="closeError">close</div></div>
</div>
</template>

<script>
import array from '@/library/array';
import api from '@/api';
export default {
  name: 'home',
  data() {
    return {
      username: null,
      email: null,
      password: null,
      token: null,
      meInf: null,
      todoTitle: null,
      myTodos: [],
      error: {
        isShow: false,
        msg: null
      },
      server: {
        url: 'http://localhost:3000/graphql'
      }
    };
  },
  methods: {
    async signup() {
      let res = await api.signup(this.username, this.email, this.password);
      if(res.errors){
        this.showError(res.errors[0].message);
      }else{
        this.token = res.data;
      }
    },
    async login() {
      let res = await api.login(this.email, this.password);
      if(res.errors){
        this.showError(res.errors[0].message);
      }else{
        this.token = res.data;
      }
    },
    async addTodo() {
      let res = await api.addTodo(this.token, this.todoTitle);
      this.todoTitle = null;
      if(res.errors){
        this.showError(res.errors[0].message);
      }
    },
    async me() {
      let res = await api.me(this.token);
      if(res.errors){
        this.showError(res.errors[0].message);
      }else{
        this.meInf = res.data;
      }
    },
    async getMyTodos() {
      let res = await api.myTodos(this.token);
      if(res.errors){
        this.showError(res.errors[0].message);
      }else{
        this.myTodos = res.data;
      }
    },
    showError(msg) {
      this.error.msg = msg;
      this.error.isShow = true;
    },
    closeError() {
      this.error.isShow = false;
      this.clearError();
    },
    clearError(){
      this.error.msg = null;
    }
  },
  components: {},
};
</script>
