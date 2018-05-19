<template>
  <form v-on:submit.prevent="addTask">
    <input type="text" placeholder="Add new task" v-model="text">
    <hr> 
    Show data variable information:
    <pre>{{$data}}</pre>            
  </form> 
</template>

<script>
// import eventBus to send data
import { eventBus } from '../helpers/EventBus.js'

export default {
  name: "task-add",
  data() {
    return {
      text: ""
    };
  },
  updated() {
    console.log("Input modified!!!", this.text);
  },
  methods: {
    addTask() {
      if (this.text != "") {
        let task = {
          text: this.text
        };
        eventBus.$emit("task-add-emit", task);
        this.text = "";
      }
    }
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
