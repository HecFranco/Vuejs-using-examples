new Vue({
  el: '#app',
  data: {
    films: ['batman vs Superman', 'Avengers', 'Saw'],
    newFilm : null
  },
  methods: {
    createFilm(){
      console.log('Method createFilm ' + this.newFilm);
      this.films.unshift(this.newFilm);
      this.newFilm = null;
    },
    removeFilm(index){
      // alert('Method removeFilm');
      console.log('Remove Film ' + index);
      this.films.splice(index,1);
    }
  }
});