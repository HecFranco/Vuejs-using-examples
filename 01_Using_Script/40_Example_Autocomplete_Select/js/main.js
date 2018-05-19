Vue.component('v-select', VueSelect.VueSelect)

new Vue({
  el: '#app',
  data: {
    options: [
      'Madrid',
      'Barcelona',
      'Málaga'
  ]
  }
})