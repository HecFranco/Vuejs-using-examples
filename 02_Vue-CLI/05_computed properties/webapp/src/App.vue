<template>
  <div id="app">
    <h1>{{name + '  ' + surname}}</h1>
    <h1>{{nameAndSurnames}}</h1>   
    <hr> 
    Show data variable information:
    <pre>{{$data}}</pre> 
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {  
      name: 'Jhon',
      surname: 'Doe',
      score: 5
    };
  },
  computed: {
    nameAndSurnames(){
      var date = new Date();
      var year = date.getFullYear();
      return this.name+' '+this.surname+' - Note: '+this.score+' ('+year+'-'+date.getMonth()+'-'+date.getDate()+')';
    }
  }  
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
