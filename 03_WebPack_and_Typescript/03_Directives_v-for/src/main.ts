import Vue from 'vue';

new Vue({
  el: '#app',
  template: `
    <div>
      <!-- Iteration Directives - Arrays -->
      <h1>List of films</h1>
      <ol>
        <li v-for = "film in films">{{film}}</li>
      </ol>
      <!-- Iteration Directives - Arrays Objects -->
      <h1>List of fruits</h1>
      <ol>
        <ul v-for = "(fruit, index) in fruits">{{index}} - FRUIT: {{fruit.name}} - Seadon: {{fruit.season}} - Price: {{fruit.price}}</ul>
      </ol>
      <!-- Iteration Directives - Objects -->
      <h1>List of Object fruit</h1>
      <ol>
        <ul v-for = "(value, key, index) in superfruit">{{index}} - {{key}} - {{value}}</ul>
      </ol>
      <hr/>
      Show data variable information:
      <pre>{{$data}}</pre>  
    </div>
  `,
  data: {
    films: ['batman vs Superman', 'Avengers', 'Saw'],
    fruits: [
      {name: 'Apple', season: 'winter', price:'Low'},
      {name: 'Orange', season: 'autumn', price:'Medium'},
      {name: 'Watermelon', season: 'summer', price:'Medium'}
    ],
    superfruit: {name: 'Lemon', season: 'summer', price:'Medium'}
  },
});