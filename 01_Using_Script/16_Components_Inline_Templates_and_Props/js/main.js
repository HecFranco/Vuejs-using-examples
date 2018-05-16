Vue.component('button-counter', {
  data () {
    return {
      count: 0
    }
  },
  template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
});
Vue.component('button-counter-inline-template', {
  data () {
    return {
      count: 0
    }
  }
});

Vue.component('posts', {
  props: [
    'countPost',
    'nameOfPage'
  ],
  template: `
    <div class="posts-component">
      <h1> List of {{countPost}} elements from Ajax for "{{title}}"</h1>
      <p> Name of Page : {{nameOfPage}}</p>
      <ol v-if = "posts">
        <li v-for="(post, index) in posts">
          {{ post.title }}
        </li>
      </ol>
      <img v-else src="http://gifimage.net/wp-content/uploads/2017/09/animated-progress-bar-gif-free-download-3.gif" width="30px">
    </div>
  `,
  mounted() {
    console.log('mounted() Method Luanch');
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        console.log(response.data);
        this.posts = response.data;
      });
  },
  data() {
    return {
      title: 'Posts Component',
      posts: null,
    }
  }
});

new Vue({
  el: '#components-demo',
  data: {
    pageName: 'Testing Props in Vue'
  }
});