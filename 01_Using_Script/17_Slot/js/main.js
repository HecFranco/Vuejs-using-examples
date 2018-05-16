const mv = new Vue({
  el: '#app',
  data: {
    team: [
      { name: 'Alexys Lozada', avatar: 'https://ed.team/sites/default/files/styles/perfil_en_views_200x200_/public/2017-11/alexys.jpg?itok=L_Ph0WWh' },
      { name: 'Daniel Romero', avatar: 'https://ed.team/sites/default/files/styles/perfil_en_views_200x200_/public/2017-11/daniel.jpg?itok=Wxen0rpU' },
      { name: 'Beto Quiroga', avatar: 'https://ed.team/sites/default/files/styles/perfil_en_views_200x200_/public/2017-11/beto%20%281%29.jpg?itok=OwcPkvye' }
    ]
  },
  components: {
    'card': {
      template: '#card'
    },
    'cards': {
      props: ['members'],
      template: '#cards'
    }
  }
})