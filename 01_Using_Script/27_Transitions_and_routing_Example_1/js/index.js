/* COMPONENTS */
const Welcome = {
  template: '#welcome-template'
}

const HelloWorld = {
  template: '#hello-template'
}

const HelloAgain = {
  template: '#hello-again-template'
}

/* ROUTES */
const routes = [
  { path: '/', component: Welcome },
  { path: '/hello', component: HelloWorld },
  { path: '/hello-again', component: HelloAgain }
]

const router = new VueRouter({
  routes
});

/* MAIN */
const app = new Vue({
  router,
}).$mount('#app')