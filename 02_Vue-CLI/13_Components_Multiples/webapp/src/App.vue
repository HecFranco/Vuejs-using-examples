<template>
  <div id="app">
    <h1>Componentes en Vue.js</h1>
    <p>{{title}}</p>
    <hr>
    <shows></shows>
    <hr>
    <starwars-characters></starwars-characters>
    <!-- Show the value of variable $data -->
    <hr> 
    Show data variable information:
    <pre>{{$data}}</pre> 
  </div>
</template>

<script>
import Shows from './components/Shows.vue'
import StarwarsCharacters from './components/StarwarsCharacters.vue'

export default {
  name: 'app',
  data() {
    return {
      title: 'hello world',
    }
  },
  components: {
    Shows,
    StarwarsCharacters
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
