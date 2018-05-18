Vue.component('show', {
  //props: [ 'name', 'poster', 'rating', 'genres' ],
  props: {
    name: {
      type: String,
      required: true
    },
    poster: String,
    rating: Number,
    genres: {
      type: [String, Array],
      required: true,
      default: 'No genre'
    }
  },
  template: '#show',
})

const mv = new Vue({
  el: '#app',
  mounted () {
      axios.get('http://api.tvmaze.com/shows')
        .then(res => {
          console.log(res)
          this.shows = res.data
        })
  },
  data: {
    shows: []
  }
})