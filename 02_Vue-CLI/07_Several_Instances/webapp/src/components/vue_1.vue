<template>
  <div class="vue_1">
      <h1>{{ text }}</h1>
      <hr> 
      Show data variable information:
      <pre>{{$data}}</pre>
  </div>
</template>

<script>
export default {
  name: 'vue_1',
  data() {
    return {
      text: 'hello first instance : Vue1'
    };
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
