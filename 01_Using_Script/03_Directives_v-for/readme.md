# 03 Directives v-for

In this sample we are going to create a web project using the library **CDN** of **Vue.js** _to understand the Directivev-for in Vue_.

We will take a startup point sample [00_Quick_Start](../00_Quick_Start/).

## Prerequisites

* First, we need to clean the template of the previous demo.

_[index.html](./index.html)_
```diff
<!DOCTYPE html>
<html>
  <head>
    <title>Title of the document</title>
  </head>
  <body>
    <!-- Vue Element -->  
    <main id="app">
--    <!-- Interpolation / print content of variable-->
--    <h1>{{ text }}</h1>
--    Can show the data using 'v-text':
--    <h2 v-text="text"></h2>
      <hr/>
      Show data variable information:
      <pre>{{$data}}</pre> 
    </main>
    <!-- Scripts Vue -->
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    <script src="js/main.js"></script>
  </body>
</html>
```

> Feel free to open it in another tab and follow along as we go through some basic examples.

## Steps to build it

_[js/main.js](./js/main.js)_
```diff
new Vue({
  el: '#app',
  data: {
--  text: 'Hello Vue'
++  text: 'Hello Vue',
++  name: 'Jhon Doe',
++  score: 5,
++  films: ['batman vs Superman', 'Avengers', 'Saw']
  }
});
```

### Iteration Directives - Arrays

> We can use the `v-for` directive to render a list of items based on an array. The v-for directive requires a special syntax in the form of `item in items`, where `items` is the source data array and `item` is an alias for the array element being iterated on: `<li v-for = "film in films">{{film}}</li>`.

_[index.html](./index.html)_
```diff
<!DOCTYPE html>
<html>
  <head>
    <title>Title of the document</title>
  </head>
  <body>
    <!-- Vue Element -->
    <main id="app">
++    <!-- Iteration Directives - Arrays -->
++    <h1>List of films</h1>
++    <ol>
++      <li v-for = "film in films">{{film}}</li>
++    </ol>
      <hr/>
      Show data variable information:
      <pre>{{$data}}</pre>    
    </main>  
    <!-- Scripts Vue -->
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    <script src="js/main.js"></script>
  </body>
</html>
```

### Iteration Directives - Arrays Objects

_[js/main.js](./js/main.js)_
```diff
new Vue({
  el: '#app',
  data: {
    text: 'Hello Vue',
    name: 'Jhon Doe',
    score: 5,
--  films: ['batman vs Superman', 'Avengers', 'Saw']
++  films: ['batman vs Superman', 'Avengers', 'Saw'],
++  fruits: [
++    {name: 'Apple', season: 'winter', price:'Low'},
++    {name: 'Orange', season: 'autumn', price:'Medium'},
++    {name: 'Watermelon', season: 'summer', price:'Medium'}
++  ]
  }
});
```

_[index.html](./index.html)_
```diff
<!DOCTYPE html>
<html>
  <head>
    <title>Title of the document</title>
  </head>
  <body>
    <!-- Vue Element -->
    <main id="app">
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
      <pre>{{$data}}</pre>
    </main>
    <!-- Scripts Vue -->
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    <script src="js/main.js"></script>
  </body>
</html>
```

### Iteration Directives - Objects

> You can also use `v-for` to iterate through the properties of an object. 

_[js/main.js](./js/main.js)_
```diff
new Vue({
  el: 'vue-main',
  data: {
    text: 'Hello Vue',
    name: 'Jhon Doe',
    score: 5,
    films: ['batman vs Superman', 'Avengers', 'Saw'],
    fruits: [
      {name: 'Apple', season: 'winter', price:'Low'},
      {name: 'Orange', season: 'autumn', price:'Medium'},
      {name: 'Watermelon', season: 'summer', price:'Medium'}
--  ]
++  ],
++  superfruit: {name: 'Lemon', season: 'summer', price:'Medium'}

  }
});
```

_[index.html](./index.html)_
```diff
<!DOCTYPE html>
<html>
  <head>
    <title>Title of the document</title>
  </head>
  <body>
    <!-- Vue Element -->
    <main id="app">
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
      <pre>{{$data}}</pre>
    </main>
    <!-- Scripts Vue -->
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    <script src="js/main.js"></script>
  </body>
</html>
```