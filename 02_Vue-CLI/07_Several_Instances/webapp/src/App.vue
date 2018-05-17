<template>
  <div id="app">
    <img src="./assets/logo.png">
    <vue_1/>
    <vue_2/>
    <vue_3/>
    <hr> 
    Show data variable information:
    <pre>{{$data}}</pre>
  </div>
</template>

<script>
import vue_1 from "./components/vue_1.vue";
import vue_2 from "./components/vue_2.vue";
import vue_3 from "./components/vue_3.vue";

export default {
  name: "app",
  components: {
    vue_1,
    vue_2,
    vue_3
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
