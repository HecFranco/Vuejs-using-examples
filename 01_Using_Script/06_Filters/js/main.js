/*
  https://www.npmjs.com/package/vue2-filters
*/
/* Filters ******************************/
/*
Vue.filter('capital', function (value) {
  return value.toUpperCase()
})
*/
Vue.filter('capital', value => value.toUpperCase() )

Vue.filter('capitalize', function (value) {
  if (!value) return ''
  value = value.toString()
  return value.charAt(0).toUpperCase() + value.slice(1)
})

const vue1 = new Vue({
  el: '#app',
  data: {
    films: ['batman vs Superman', 'Avengers', 'Saw'],
    fruits: [
      { name: 'Apple', season: 'winter', price: 'Low' },
      { name: 'Orange', season: 'autumn', price: 'Medium' },
      { name: 'Watermelon', season: 'summer', price: 'Medium' }
    ],
    searchingFilm: '',
    searchingFruit: ''
  },
  computed: {
    filteredFilmsList() {
      /*
      return this.films.filter(film => {
        return film.toLowerCase().includes(this.searchingFilm.toLowerCase());
      });  
      */
      return this.films.filter(film => film.toLowerCase().includes(this.searchingFilm.toLowerCase()));     
    },
    filteredFruitsList() {
      /*
      return this.fruits.filter(fruit => {
        return fruit.name.toLowerCase().includes(this.searchingFruit.toLowerCase());
      });
      */
      return this.fruits.filter(fruit => fruit.name.toLowerCase().includes(this.searchingFruit.toLowerCase()));
    },
    orderFilms(){
      return this.films.sort();
    }
  }
});