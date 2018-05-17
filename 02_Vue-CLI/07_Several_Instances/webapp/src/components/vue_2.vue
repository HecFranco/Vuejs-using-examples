<template>
  <div class="vue_2">
      <h1>{{ text }}</h1>
      <hr> 
      Show data variable information:
      <pre>{{$data}}</pre>
  </div>
</template>

<script>
export default {
  name: 'vue_2',
  data() {
    return {
      text: 'hello second instance : Vue2'
    };
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
