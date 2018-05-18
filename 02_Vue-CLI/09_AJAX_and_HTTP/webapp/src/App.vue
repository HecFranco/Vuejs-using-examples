<template>
  <div id="app">
    <h1>List from Ajax</h1>
    <ol v-if="posts">
      <li v-for = "(post, index) in posts"
        :key="index">
        {{post.title}} ({{index}})
      </li>
    </ol>
    <span v-else>Loading ajax information..!!!</span>
    <!-- Show data variable information -->       
    <hr> 
    Show data variable information:
    <pre>{{$data}}</pre>
  </div>
</template>

<script>
// `npm install --save axios`
import axios from 'axios';

export default {
  name: 'app',
  mounted() {
  	this.getPosts();
  },
  data() {
    return {
      posts: null
    };
  },
  methods: {
  	getPosts(){
      console.log('mounted() Method Luanch');
      axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((response) => {
          console.log(response.data);
          this.posts = response.data;
        });
    },
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
