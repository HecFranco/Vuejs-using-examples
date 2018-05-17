<template>
  <div class="vue_3">
      <h1>{{ text }}</h1>
      <hr> 
      Show data variable information:
      <pre>{{$data}}</pre>
  </div>
</template>

<script>
export default {
  name: 'vue_3',
  data() {
    return {
      text: 'hello third instance : Vue3'
    };
  },
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
