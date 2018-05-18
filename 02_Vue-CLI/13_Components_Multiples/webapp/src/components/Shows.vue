<template>
    <div>
      <h2>Global Component</h2>
      <h3>Shows TV Maze</h3>
      <ul>
        <li v-for="(show, index) in shows" :key="index">{{ show.name }}</li>
      </ul>
    </div>
</template>

<script>
// `npm install --save axios`
import axios from 'axios';

export default {
  name: 'shows',
  mounted () {
    this.getShows();
  },
  methods: {
    getShows(){
      axios.get('http://api.tvmaze.com/shows')
        .then(res => {
          console.log(res)
          this.shows = res.data
      })
    }
  },
  data () {
    return {
      shows: []
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
