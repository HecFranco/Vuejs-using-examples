<template>
    <div>
      <h2>Local Component</h2>
      <h3>StarWars Characters</h3>
      <ul>
        <li v-for="(character, index) in characters" :key="index">{{ character.name }}</li>
      </ul>
    </div>
</template>

<script>
// `npm install --save axios`
import axios from 'axios';

export default {
  name: 'StarWarsCharacters',
  mounted() {
    this.getStarWarsCharacters();
  },
  methods: {
    getStarWarsCharacters(){
      axios.get('https://swapi.co/api/people/')
      .then(res => {
        console.log(res)
        this.characters = res.data.results
      })
    }
  },
  data() {
    return {
      characters: []
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
