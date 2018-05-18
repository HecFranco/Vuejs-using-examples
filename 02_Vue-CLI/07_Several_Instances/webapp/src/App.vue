<template>
  <div id="app">
    <vue_one/>
    <vue_two/>
    <vue_three/>
    <hr> 
    Show data variable information:
    <pre>{{$data}}</pre>
  </div>
</template>

<script>
import vue_one from "./components/vue_one.vue";
import vue_two from "./components/vue_two.vue";
import vue_three from "./components/vue_three.vue";

export default {
  name: "app",
  components: {
    vue_one,
    vue_two,
    vue_three
  },
  data() {
    return {
      films: ["batman vs Superman", "Avengers", "Saw"],
    };
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
