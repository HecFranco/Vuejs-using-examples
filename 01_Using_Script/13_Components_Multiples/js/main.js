// Local Component
Vue.component('shows', {
  template: `
    <div>
      <h2>Componente Global</h2>
      <h3>Shows TV Maze</h3>
      <ul>
        <li v-for="show in shows">{{ show.name }}</li>
      </ul>
    </div>
  `,
  mounted () {
    axios.get('http://api.tvmaze.com/shows')
      .then(res => {
        console.log(res)
        this.shows = res.data
      })
  },
  data () {
    return {
      shows: []
    }
  }
})

const StarWarsCharacters = {
  template: `
    <div>
      <h2>Componente Local</h2>
      <h3>Personajes StarWars</h3>
      <ul>
        <li v-for="character in characters">{{ character.name }}</li>
      </ul>
    </div>
  `,
  mounted() {
    axios.get('https://swapi.co/api/people/')
      .then(res => {
        console.log(res)
        this.characters = res.data.results
      })
  },
  data() {
    return {
      characters: []
    }
  }
}
// Global Component
const mv = new Vue({
  el: '#app',
  data: {
    title: 'hello world',
  },
  components: {
    'starwars-characters': StarWarsCharacters
  }
})