Vue.component('card', {
  props: ['title', 'text'],
  template: '#cardTemplate'
})

Vue.component('message', {
  props: ['title', 'text'],
  template: '#messageTemplate'
})

Vue.component('hero', {
  props: ['title', 'text'],
  template: '#heroTemplate'
})

new Vue({
  el: '#app',
  data: {
    greeting: 'Dynamic Components!',
    title: 'Bacon!',
    text: 'Bacon ipsum dolor amet pastrami fatback pork drumstick strip steak, tri-tip beef ribs ham hamburger tenderloin jerky brisket beef turkey. Ball tip ham hock sausage corned beef leberkas.',
    compSwitcher: 'card'
  }
});