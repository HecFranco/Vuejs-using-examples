<template>
  <button v-on:click="count++">You clicked me {{ count }} times.</button>
</template>

<script>
export default {
  name: 'button-counter',
  data () {
    return {
      count: 0
    }
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
