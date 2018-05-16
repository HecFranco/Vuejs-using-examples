import Vue from 'vue';

new Vue({
  el: '#app',
  template: `
    <div>
      <h1>{{name + '  ' + surname}}</h1>
      <h1>{{nameAndSurnames}}</h1>   
      <hr> 
      Show data variable information:
      <pre>{{$data}}</pre> 
    </div>
  `,
  data: {
    name: 'Jhon',
    surname: 'Doe',
    score: 5
  },
  computed: {
    nameAndSurnames() :string {
      var date = new Date();
      var year = date.getFullYear();
      return this.name+' '+this.surname+' - Note: '+this.score+' ('+year+'-'+date.getMonth()+'-'+date.getDate()+')';
    }
  } 
});