Vue.filter('capital', value => value.toUpperCase() )

new Vue({
  el: 'vue-main',
  data: {
    text: 'hello Vue',
    name: 'Jhon',
    surname: 'Doe',
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