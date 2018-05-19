<template>
  <ul>
    <li v-for="(task, index) in task_list_prop_component" v-text="task.text" :key="index"></li>
  </ul>  
</template>

<script>
// import eventBus to send data
import { eventBus } from '../helpers/EventBus.js'

export default {
  name: "task-list",
  props: ['task_list_prop_component'],
  created() {
    eventBus.$on("task-add-emit", task => {
      this.task_list_prop_component.push(task);
    });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
