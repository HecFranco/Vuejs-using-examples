import Vue from 'vue';

new Vue({
  el: '#app',
  template: `
    <div>
      <!-- Filters -->
      <h1>List of films order</h1>
      <ol>
        <li v-for = "(film, index) in orderFilms"> {{index}} - {{film}} </li>
      </ol> 
      <hr>
      <!-- Filters -->   
      <h1>List of films filter</h1>
      <input type="seacrh" v-model="searchingFilm" placeholder="search film" />
      <ol>
        <li v-for="(film, index) in filteredFilmsList"> {{index}} - {{film}} </li>
      </ol>
      <hr>
      <!-- Filters -->      
      <h1>List of Fruits filter</h1>
      <input type="seacrh" v-model="searchingFruit" placeholder="search film" />
      <ol>
        <li v-for="(fruit, index) in filteredFruitsList"> {{index}} - {{fruit.name | capital}} </li>
      </ol>
      <hr> 
      Show data variable information:
      <pre>{{$data}}</pre> 
    </div>
  `,
  data: {
    films: ["batman vs Superman", "Avengers", "Saw"],
    fruits: [
      { name: "Apple", season: "winter", price: "Low" },
      { name: "Orange", season: "autumn", price: "Medium" },
      { name: "Watermelon", season: "summer", price: "Medium" }
    ],
    searchingFilm: "",
    searchingFruit: ""
  },
  computed: {
    filteredFilmsList(): Array<string> {
      /*
      return this.films.filter(film => {
        return film.toLowerCase().includes(this.searchingFilm.toLowerCase());
      });  
      */
      return this.films.filter(film =>
        film.toLowerCase().includes(this.searchingFilm.toLowerCase())
      );
    },
    filteredFruitsList(): Array<object> {
      /*
      return this.fruits.filter(fruit => {
        return fruit.name.toLowerCase().includes(this.searchingFruit.toLowerCase());
      });
      */
      return this.fruits.filter(fruit =>
        fruit.name.toLowerCase().includes(this.searchingFruit.toLowerCase())
      );
    },
    orderFilms(): Array<string>{
      return this.films.sort();
    }
  },
  filters: {
    capitalize: function(value) {
      if (!value) return "";
      value = value.toString();
      return value.charAt(0).toUpperCase() + value.slice(1);
    },
    capital: value => value.toUpperCase()
  }  
});