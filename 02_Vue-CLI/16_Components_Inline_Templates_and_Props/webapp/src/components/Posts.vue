<template>
    <div class="posts-component">
      <h1> List of {{countPost}} elements from Ajax for "{{title}}"</h1>
      <p> Name of Page : {{nameOfPage}}</p>
      <ol v-if = "posts">
        <li v-for="(post, index) in posts" :key="index">
          {{ post.title }}
        </li>
      </ol>
      <img v-else src="http://gifimage.net/wp-content/uploads/2017/09/animated-progress-bar-gif-free-download-3.gif" width="30px">
    </div>
</template>

<script>
// `npm install --save axios`
import axios from 'axios';

export default {
  name: 'posts',
  props: [
    'count-post',
    'name-of-page'
  ],
  mounted() {
    this.getPostList();
  },
  data() {
    return {
      title: 'Posts Component',
      posts: null,
    }
  },
  methods: {
    getPostList() {
      console.log('mounted() Method Luanch');
      axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((response) => {
          console.log(response.data);
          this.posts = response.data;
        });
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
