import Vue from 'vue';

new Vue({
  el: '#app',
  template: `
    <div>
      <!-- Methods -->
      <h1>Methods</h1>
      <button v-on:click="createFilm()">Create Film</button>
      <form @submit.prevent="createFilm()">
        <input type="text" v-model="newFilm"/>
        <input type="submit" value="Save Film"/>
      </form>
      <hr/>
      <button @click="removeFilm()">Remove Film</button>
      <h1>List of films with remove option</h1>
      <ol>
        <li v-for = "(film, index) in films"> <button @click="removeFilm(index)">x</button> {{film}} </li>
      </ol>
      <hr/>
      Show data variable information:
      <pre>{{$data}}</pre> 
    </div>
  `,
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