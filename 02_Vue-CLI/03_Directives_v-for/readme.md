# 02 Directive v-for

In this sample we are going to _to understand the Directives v-for in Vue_.

We will take a startup point sample [00 Boilerplate](../00_Boilerplate/).

Summary steps:

- 

# Prerequisites

Install [Node.js and npm](https://nodejs.org/en/) (v6.x.x or higher) if they are not already installed on your computer. 

You will also need to have **Vue-CLI** installed globally. [Vue.js](https://vuex.vuejs.org/en/) provides an official CLI to quickly structure Single-page Applications (SPA). Provides **all-in-one** configurations for a modern frontend workflow. It only takes a few minutes, it's ready for development with: hot top-up, **lint-on-save** and ready-made versions:

> Verify that you are running at least node v6.x.x and npm 3.x.x by running `node -v`, `npm -v` and `vue -V` in a terminal/console window. Older versions may produce errors.

## Steps to build it

- Copy the content from [00_Boilerplate](../00_Boilerplate/) and execute:

```bash
npm install
```

- Execute `npm run serve` to launch the project server.

```bash
npm run serve
```

- Now you can view the result of installation accessing to [http://localhost:8080/](http://localhost:8080/).

- Edit [/src/App.Vue](./src/App.Vue).

  * We will add several arrays.

_[/src/App.Vue](./src/App.Vue)_
```diff
<template>
    <div id="app">
      <img src="./assets/logo.png">
      <HelloWorld msg="Welcome to Your Vue.js App"/>
    </div>
</template>

<script>
-- import HelloWorld from './components/HelloWorld.vue'

  export default {
    name: 'app',
--  components: {
--  HelloWorld
--  }
++ data() {
++   return {
++      films: ['batman vs Superman', 'Avengers', 'Saw'],
++      fruits: [
++        {name: 'Apple', season: 'winter', price:'Low'},
++        {name: 'Orange', season: 'autumn', price:'Medium'},
++        {name: 'Watermelon', season: 'summer', price:'Medium'}
++      ],
++      superfruit: {name: 'Lemon', season: 'summer', price:'Medium'}
++   };
++ } 
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
```

### Mapping an Array to Elements with v-for

We can use the `v-for` directive to render a list of items based on an array. The `v-for` directive requires a special syntax in the form of `item in items`, where `items` is the source data array and `item` is an alias for the array element being iterated on:

_[/src/App.Vue](./src/App.Vue)_
```diff
<template>
    <div id="app">
++    <!-- Iteration Directives - Arrays -->
++    <h1>List of films</h1>
++    <ol>
++      <li v-for = "film in films">{{film}}</li>
++    </ol>
      <hr/>
      Show data variable information:
      <pre>{{ $data }}</pre>
    </div>
</template>

<script>
  // ...
</style>
```

_[/src/App.Vue](./src/App.Vue)_
```diff
<template>
    <div id="app">
      <!-- Iteration Directives - Arrays -->
      <h1>List of films</h1>
      <ol>
        <li v-for = "film in films">{{film}}</li>
      </ol>
++    <!-- Iteration Directives - Arrays Objects -->
++    <h1>List of fruits</h1>
++    <ol>
++      <ul v-for = "(fruit, index) in fruits">{{index}} - FRUIT: {{fruit.name}} - Seadon: {{fruit.season}} - Price: {{fruit.price}}</ul>
++    </ol>
      <hr/>
      Show data variable information:
      <pre>{{ $data }}</pre>
    </div>
</template>

<script>
  // ...
</style>
```

### v-for with an Object

You can also use v-for to iterate through the properties of an object.

_[/src/App.Vue](./src/App.Vue)_
```diff
<template>
    <div id="app">
      <!-- Iteration Directives - Arrays -->
      <h1>List of films</h1>
      <ol>
        <li v-for = "film in films">{{film}}</li>
      </ol>
      <!-- Iteration Directives - Arrays Objects -->
      <h1>List of fruits</h1>
      <ol>
        <ul v-for = "(fruit, index) in fruits">{{index}} - FRUIT: {{fruit.name}} - Seadon: {{fruit.season}} - Price: {{fruit.price}}</ul>
      </ol>
++    <!-- Iteration Directives - Objects -->
++    <h1>List of Object fruit</h1>
++    <ol>
++      <ul v-for = "(value, key, index) in superfruit">{{index}} - {{key}} - {{value}}</ul>
++    </ol>
      <hr/>
      Show data variable information:
      <pre>{{ $data }}</pre>
    </div>
</template>

<script>
  // ...
</style>
```