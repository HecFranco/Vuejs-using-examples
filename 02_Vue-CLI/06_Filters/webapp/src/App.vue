<template>
  <div id="app">
      <!-- Filters -->
      <h1>List of films order</h1>
      <ol>
        <li v-for = "(film, index) in orderFilms" :key="index"> {{index}} - {{film}} </li>
      </ol> 
      <hr>
      <!-- Filters -->   
      <h1>List of films filter</h1>
      <input type="seacrh" v-model="searchingFilm" placeholder="search film" />
      <ol>
        <li v-for="(film, index) in filteredFilmsList" :key="index"> {{index}} - {{film}} </li>
      </ol>
      <hr>
      <!-- Filters -->      
      <h1>List of Fruits filter</h1>
      <input type="seacrh" v-model="searchingFruit" placeholder="search film" />
      <ol>
        <li v-for="(fruit, index) in filteredFruitsList" :key="index"> {{index}} - {{fruit.name | capital}} </li>
      </ol>
      <!-- Show data variable information -->          
      <hr> 
      Show data variable information:
      <pre>{{$data}}</pre>    
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      films: ["batman vs Superman", "Avengers", "Saw"],
      fruits: [
        { name: "Apple", season: "winter", price: "Low" },
        { name: "Orange", season: "autumn", price: "Medium" },
        { name: "Watermelon", season: "summer", price: "Medium" }
      ],
      searchingFilm: "",
      searchingFruit: ""
    };
  },
  computed: {
    filteredFilmsList() {
      /*
      return this.films.filter(film => {
        return film.toLowerCase().includes(this.searchingFilm.toLowerCase());
      });  
      */
      return this.films.filter(film =>
        film.toLowerCase().includes(this.searchingFilm.toLowerCase())
      );
    },
    filteredFruitsList() {
      /*
      return this.fruits.filter(fruit => {
        return fruit.name.toLowerCase().includes(this.searchingFruit.toLowerCase());
      });
      */
      return this.fruits.filter(fruit =>
        fruit.name.toLowerCase().includes(this.searchingFruit.toLowerCase())
      );
    },
    orderFilms() {
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
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
