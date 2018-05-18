Vue.component('shows', {
  template: `
    <div>
      <h2>Plantilla en el atributo template del componente</h2>
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

Vue.component('posts', {
  template: '#posts',
  mounted() {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(res => {
        console.log(res)
        this.posts = res.data
      })
  },
  data() {
    return {
      posts: []
    }
  }
})

const StarWarsCharacters = {
  template: '#starwars',
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

const Users = {
  mounted() {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        console.log(res)
        this.users = res.data
      })
  },
  data() {
    return {
      users: []
    }
  }
}

const mv = new Vue({
  el: '#app',
  components: {
    'starwars-characters': StarWarsCharacters,
    'users': Users
  }
})