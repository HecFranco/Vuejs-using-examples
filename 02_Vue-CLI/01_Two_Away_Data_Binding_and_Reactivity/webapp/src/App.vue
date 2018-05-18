<template>
  <div id="app">
      <!-- Interpolation / print content of variable-->
      <h2>{{ message }}</h2>
      <input type="text" v-model="message">
      <!-- Show data variable information -->           
      <hr/>
       Show data variable information: 
      <pre>{{ $data }}</pre>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      message: "Hello World with Vue.js"
    };
  }
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
