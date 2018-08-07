<template>
  <div id="app">
    <ul>
      <li v-for="(ingredient, i) in ingredients" :key="ingredient">{{ ingredient }} ({{ i }})</li>
    </ul>
    <button @click="ingredients.push('spices')">Add New</button>
    <hr>
    <ul>
      <li v-for="(person, key) in persons" :key="key">
        <div v-for="(value, key, index) in person" :key="key">{{ key }}: {{ value }} ({{ index }})</div>
      </li>
    </ul>
    <span v-for="n in 10" :key="n">{{ n }}</span>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      ingredients: ['meat', 'fruit', 'cookies'],
      persons: [
        { name: 'Max', age: 27, color: 'red' },
        { name: 'Anna', age: 'unknown', color: 'blue' }
      ]
    };
  }
};
</script>

<style>
</style>
