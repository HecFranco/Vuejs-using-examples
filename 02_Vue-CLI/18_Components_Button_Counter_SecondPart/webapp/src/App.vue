<template>
  <div id="app">
    <!-- First counter -->
    <hr> 
    <button-counter></button-counter>
    <!-- Second counter -->
    <hr> 
    <button-counter></button-counter>
    <!-- Third counter -->
    <hr> 
    <button-counter></button-counter>    
    <!-- Show the value of variable $data -->    
    <hr> 
    Show data variable information:
    <pre>{{$data}}</pre>  
  </div>
</template>

<script>
import ButtonCounter from './components/ButtonCounter.vue'
// import eventBus to send data
import { eventBus } from "./main.js";

export default {
  name: 'app',
  data () {
    return {
      count_global: 0,
    }
  },
  components: {
    ButtonCounter
  },
  created() {
    eventBus.$on("count-global-emit", count_emit => {
      this.count_global++;
    });
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
