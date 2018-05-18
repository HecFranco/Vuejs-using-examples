<template>
  <div id="app">
    <h1>Components in Vue.js</h1>
    <!-- Show component -->
    <show v-for="(show, index) in shows"
                :name="show.name"
                :poster="show.image.medium"
                :rating="show.rating.average"
                :genres="show.genres"
                :key="index">
    </show>
    <!-- Show the value of variable $data -->
    <hr> 
    Show data variable information:
    <pre>{{$data}}</pre> 
  </div>
</template>

<script>
// `npm install --save axios`
import axios from 'axios';
import Show from './components/Show.vue'


export default {
  name: 'app',
  components: {
    Show
  },
  mounted () {
    this.getShows();
  },
  data() {
    return {
    shows: []
    }
  },
  methods: {
    getShows(){
      axios.get('http://api.tvmaze.com/shows')
        .then(res => {
          console.log(res)
          this.shows = res.data
        });
    },
  },  

}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
