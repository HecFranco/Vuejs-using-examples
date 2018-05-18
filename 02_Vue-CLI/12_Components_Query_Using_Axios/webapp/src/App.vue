<template>
  <div id="app">
    <posts></posts>
    <!-- Show the value of variable $data -->       
    <hr> 
    Show data variable information:
    <pre>{{$data}}</pre> 
  </div>
</template>

<script>
import posts from './components/Post.vue'

export default {
  name: 'app',
  components: {
    posts
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
