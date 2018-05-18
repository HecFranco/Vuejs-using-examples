<template>
  <div id="app">
    <hr>
    <task-add></task-add>
    <hr>
    <task-list :task_list_prop_component="taskList_dataGlobal"></task-list>
    <hr> 
    Show data variable information:
    <pre>{{$data}}</pre>
  </div>
</template>

<script>
import TaskAdd from "./components/TaskAdd.vue";
import TaskList from "./components/TaskList.vue";
import { eventBus } from "./main.js";

export default {
  name: "app",
  components: {
    TaskAdd,
    TaskList
  },
  data() {
    return {
      taskList_dataGlobal: [{ text: "Tarea 1" }, { text: "Tarea 2" }]
    };
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
