<template>
    <form @submit.prevent="addTodo">
      <input class="ToDo-input" type="text" placeholder="Agrega una tarea" v-model="task">
    </form>
  </template>
<script>
export default {
  name: "todo-add",
  data() {
    return {
      task: "",
      id: 3
    };
  },
  methods: {
    addTodo() {
      this.$store.dispatch("addTodo", this);
      this.id++;
      this.task = "";
    }
  }
};
</script>