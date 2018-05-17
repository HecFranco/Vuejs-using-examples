/*
https://www.npmjs.com/package/axios
https://jsonplaceholder.typicode.com/
*/


new Vue({
  el: '#vue-main',
  data: {
    posts: null
  },
  mounted() {
    console.log('mounted() Method Luanch');
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        console.log(response.data);
        this.posts = response.data;
      });
  }

});