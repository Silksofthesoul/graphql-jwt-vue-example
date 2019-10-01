<template>
<div>
  <input type="text" name="" v-model="title"/>
  <button @click="save">save</button>
  <button @click="cancel">cancel</button>
</div>
</template>

<script>
import api from '@/api';
export default {
  name: 'EditTodo',
  props: ['todo'],
  data() {
    return {
      title: null
    };
  },
  created() {
    this.title = todo.title;
  },
  methods: {
    save() {

    },
    cancel() {

    }
  }
};
</script>
