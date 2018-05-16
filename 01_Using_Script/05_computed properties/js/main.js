new Vue({
  el: '#app',
  data: {
    name: 'Jhon',
    surname: 'Doe',
    score: 5
  },
  computed: {
    nameAndSurnames(){
      var date = new Date();
      var year = date.getFullYear();
      return this.name+' '+this.surname+' - Note: '+this.score+' ('+year+'-'+date.getMonth()+'-'+date.getDate()+')';
    }
  }
});