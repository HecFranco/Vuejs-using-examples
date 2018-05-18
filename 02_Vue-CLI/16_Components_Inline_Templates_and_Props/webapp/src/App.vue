<template>
  <div id="app">
    <button-counter></button-counter>
    <!-- Component with template inline -->
    <button-counter-inline-template inline-template>
      <button v-on:click="count++">You clicked me {{ count }} times.</button>
    </button-counter-inline-template>
    <posts :count-post="100" :name-of-page="pageName"></posts>
    <!-- Show the value of variable $data -->
    <hr> 
    Show data variable information:
    <pre>{{$data}}</pre>    
  </div>
</template>

<script>
import ButtonCounterInlineTemplate from './components/ButtonCounterInlineTemplate.vue'
import ButtonCounter from './components/ButtonCounter.vue'
import Posts from './components/Posts.vue'

export default {
  name: 'app',
  components: {
    ButtonCounterInlineTemplate,
    ButtonCounter,
    Posts
  },
  data() {
    return {
      pageName: 'Testing Props in Vue'
    }
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
