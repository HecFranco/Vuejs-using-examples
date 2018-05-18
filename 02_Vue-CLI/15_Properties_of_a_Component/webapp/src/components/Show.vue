<template>
    <figure>
      <img :src="poster" :alt="name">
      <figcaption>
        <h3>{{ name }}</h3>
        <p>Calificación: <b>{{ rating }}</b></p>
        <p>Géneros:</p>
        <ul>
          <li v-for="(genre, index) in genres" v-text="genre" :key="index"></li>
        </ul>
      </figcaption>
    </figure>
</template>

<script>
export default {
  name: 'show',
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
