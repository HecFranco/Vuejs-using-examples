<template>
    <div>
      <h1>I'm Father Component ONE</h1>
      <div>
        <child></child>
      </div>
    </div></template>
<script>
import Child from './Child.vue'

export default {
  name: 'father_1',
  props: [
    'select_child'
  ],
  components: {
    Child
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
