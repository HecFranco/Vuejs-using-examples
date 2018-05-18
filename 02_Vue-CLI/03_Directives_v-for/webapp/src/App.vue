<template>
  <div id="app">
      <!-- Iteration Directives - Arrays -->
      <h1>List of films</h1>
      <ol>
        <li v-for = "(film, index) in films" :key="index">{{film}}</li>
      </ol>
      <!-- Iteration Directives - Arrays Objects -->
      <h1>List of fruits</h1>
      <ol>
        <ul v-for = "(fruit, index) in fruits" :key="index">{{index}} - FRUIT: {{fruit.name}} - Seadon: {{fruit.season}} - Price: {{fruit.price}}</ul>
      </ol>
      <!-- Iteration Directives - Objects -->
      <h1>List of Object fruit</h1>
      <ol>
        <ul v-for = "(value, key, index) in superfruit"  :key="index">{{index}} - {{key}} - {{value}}</ul>
      </ol>
      <!-- Show data variable information -->                 
      <hr/>
      Show data variable information:
      <pre>{{$data}}</pre> 
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {  
      films: ['batman vs Superman', 'Avengers', 'Saw'],
      fruits: [
        {name: 'Apple', season: 'winter', price:'Low'},
        {name: 'Orange', season: 'autumn', price:'Medium'},
        {name: 'Watermelon', season: 'summer', price:'Medium'}
      ],
      superfruit: {name: 'Lemon', season: 'summer', price:'Medium'}
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
