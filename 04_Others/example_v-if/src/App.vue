<template>
  <div id="app">
    <p v-if="show">You can see me! <span>Hello!</span></p>
    <p v-else>Now you see me!</p>
    <template v-if="show">
      <h1>Heading</h1>
      <p>Inside a template</p>
    </template>
    <p v-show="show">Do you also see me?</p>
    <button @click="show = !show">Switch</button>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      show: true
    };
  }
};
</script>

<style>
</style>
