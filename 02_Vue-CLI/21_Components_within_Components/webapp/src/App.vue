<template>
  <div id="app">
    <father></father>
  </div>
</template>

<script>
import Father from './components/Father.vue'

export default {
  name: 'app',
  components: {
    Father
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
