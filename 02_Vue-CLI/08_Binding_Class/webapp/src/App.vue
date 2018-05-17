<template>
  <div id="app">
          <!-- Binding Class  -->
      <h1>List of Fruits filter Binding class</h1>
      <ol>
        <li v-bind:class="{like: index == 2}" v-for="(fruit, index) in fruits">
          {{ fruit.name | capital }} ({{ index }})
        </li>
      </ol>
      <hr/>
      <h1>List of Fruits filter Binding class</h1>
      <ol>
        <li @click="mark(index)" v-bind:class="{like: index == confirmed}" v-for="(fruit, index) in fruits">
          {{ fruit.name | capital }} ({{ index }})
        </li>
      </ol>
      <hr> 
      Show data variable information:
      <pre>{{$data}}</pre>  
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  },
  data() {
    return {
      fruits: [
        { name: 'Apple', season: 'winter', price: 'Low' },
        { name: 'Orange', season: 'autumn', price: 'Medium' },
        { name: 'Watermelon', season: 'summer', price: 'Medium' }
      ],
      confirmed: null    
    };
  },
  methods: {
    mark(index){
      this.confirmed = index
    }
  },
  filters: {
    capital: value => value.toUpperCase()
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
.like{
  background:green;
  color:white;
  padding:20px;
}
</style>
