const HomePage = {
  template: `
    <div class="page HomePage">
      <h1>HomePage</h1>
    </div>
  `
};
const AboutPage = {
  template: `
    <div class="page AboutPage">
      <h1>AboutPage</h1>
    </div>
  `
};
const ContactPage = {
  template: `
    <div class="page ContactPage">
      <h1>ContactPage</h1>
    </div>
  `
};
const NotFoundPage = {
  template: `
    <div class="page NotFoundPage">
      <h1>404</h1>
    </div>
  `
};


const router = new VueRouter({
  routes: [
    { path: '/', component: HomePage },
    { path: '/about', component: AboutPage },
    { path: '/contact', component: ContactPage },
    { path: '*', component: NotFoundPage },
  ]
});

const vm = new Vue({
  el: "#app",
  router,
  data: {
  },
  computed: {
  },
  methods: {
  },
  mounted() {
  }
});