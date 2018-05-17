Vue.filter('capital', value => value.toUpperCase() )

new Vue({
  el: '#app',
  data: {
    fruits: [
      { name: 'Apple', season: 'winter', price: 'Low' },
      { name: 'Orange', season: 'autumn', price: 'Medium' },
      { name: 'Watermelon', season: 'summer', price: 'Medium' }
    ],
    confirmed: null
  },
  methods: {
    mark(index){
      this.confirmed = index
    }
  }
});