<template>
  <div id="button-counter">
    <button v-on:click="addCount()">You clicked me {{ count_component }} times.</button>
  </div>
</template>

<script>
// import eventBus to send data
import { eventBus } from "../main.js";

export default {
  name: 'buttonCounter',
  data () {
    return {
      count_component: 0,
      count_global: 0,      
    }
  },
  methods: {
    addCount() {
      this.count_component ++;
      let count_emit = this.count_global++;
      eventBus.$emit("count-global-emit", count_emit); 
      this.count_global = 0;
    }
  }
}
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
