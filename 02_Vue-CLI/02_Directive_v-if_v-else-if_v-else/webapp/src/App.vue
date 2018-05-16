<template>
  <div id="app">
      <!-- Conditionals -->
      Score : <input type="text" v-model="score">
      <hr/>
      <strong v-if="score && score >= 5 && score <= 99">Your note is greater than 5, congratulations!</strong>
      <strong v-else-if="score && score == 100">EXCELLENT!</strong>
      <strong v-else>You have suspended</strong>
      <hr/>
      <pre>
        {{$data}}
      </pre>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      score: 5
    };
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
