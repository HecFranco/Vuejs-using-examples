<template>
  <div id="app">
    <button @click="selected = 'father_1'">Load Father 1</button>
    <button @click="selected = 'father_2'">Load Father 2</button>
    <component v-bind:is="selected"></component>
  </div>
</template>

<script>
import Father1 from './components/Father1.vue'
import Father2 from './components/Father2.vue'

export default {
  name: 'app',
  components: {
    father_1: Father1,
    father_2: Father2
  },
  data() {
    return {
      selected:'father_1',
    };
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
