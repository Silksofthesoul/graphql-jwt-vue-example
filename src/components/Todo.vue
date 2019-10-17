<template>
<div v-click-outside="fEditEnd" v-hotkey="keymap">
  <table>
    <tr>
      <td>
        <span v-if="!isEdit">{{todo.title}}</span>
        <input v-if="isEdit" type="text" v-model="title" v-focus />
      </td>
      <td>
        <button v-show="!isEdit" @click="fEdit">edit</button>
        <button v-show="!isEdit" @click="fDelete">delete</button>

        <button v-show="isEdit" @click="fSave">save</button>
        <button v-show="isEdit" @click="fCancel">cancel</button>
      </td>
    </tr>
  </table>
</div>
</template>

<script>
import ClickOutside from 'vue-click-outside';
import api from '@/api';
export default {
  name: 'Todo',
  props: ['todo'],
  data() {
    return {
      isEdit: false,
      title: null,
      oldTitle: null
    };
  },
  created() {
    this.title = this.todo.title;
  },
  methods: {
    fEditEnd() {
      if (this.isEdit) {
        this.isEdit = false;
      }
    },
    fEdit() {
      if (!this.isEdit) {
        this.isEdit = true;
        this.oldTitle = this.title;
      }
    },
    fDelete() {
      this.$emit('delete', this.todo.id);
    },
    fSave() {
      this.todo.title = this.title;
      this.oldTitle = this.title;
      this.fEditEnd();
      this.$emit('update', this.todo);
    },
    fCancel() {
      this.title = this.oldTitle;
      this.fEditEnd();
    }
  },
  computed: {
    keymap() {
      return {
        'esc': this.fEditEnd,
        'enter': this.fSave,
      }
    }
  },
  directives: {
    ClickOutside,
    focus: {
      inserted(el) {
        el.focus()
      }
    }
  }
};
</script>
