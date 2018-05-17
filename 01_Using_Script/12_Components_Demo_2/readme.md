# 13 Components Demo 2

In this sample we are going to create a web project where we will learn to use the components of **Vue.js**.

The easiest way to try out Vue.js is using the development version. Feel free to open it in another tab and follow along as we go through some basic examples. Or, you can create an [index.html](./index.html) file and include Vue with:

```html
<!-- development version, includes helpful console warnings -->
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
```

or

The Installation page provides more options of installing Vue. Note: We do not recommend that beginners start with `vue-cli`, especially if you are not yet familiar with Node.js-based build tools.

```html
<!-- production version, optimized for size and speed -->
<script src="https://cdn.jsdelivr.net/npm/vue"></script>
``` 

---------------------------------------------------------------------------------------------

## BoilerPlate

---------------------------------------------------------------------------------------------

_[index.html](./index.html)_
```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Components in Vue.js</title>
    <link rel="icon" href="https://vuejs.org/images/logo.png">
  </head>
  <body></body>
</html>
```

* We will add the library`<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>` and `<script src="https://unpkg.com/axios/dist/axios.min.js"></script>` for ajax queries , and our **javascript file** `<script src="js/main.js"></script>` with the code **Vue**.

_[index.html](./index.html)_
```diff
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Components in Vue.js</title>
    <link rel="icon" href="https://vuejs.org/images/logo.png">
  </head>
  <body>
++  <!-- Scripts Vue -->
++  <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
++  <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
++  <script src="js/main.js"></script>
  </body>
</html>
```

* We are going to created our tag for the **main component**, `<main id="app"></main>`.

_[index.html](./index.html)_
```diff
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Components in Vue.js</title>
  <link rel="icon" href="https://vuejs.org/images/logo.png">
</head>
<body>
++ <!-- Vue Component -->
++ <main id="app">
++   <h1>Components in Vue.js</h1>
++   <pre>{{ $data }}</pre>
++ </main>
  <!-- Scripts Vue -->
  <script src="https://cdn.jsdelivr.net/npm/vue"></script>
  <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
  <script src="./js/main.js"></script>
</body>
</html>
```

---------------------------------------------------------------------------------------------

## Main Vue App 

---------------------------------------------------------------------------------------------

* We created our [/js/main.js](./js/main.js) file with the **Vue content** for a global component.

_[/js/main.js](./js/main.js)_
```js
const mv = new Vue({
  el: '#app',
  data: {
    title: 'hello world',
  }
})
```

_[index.html](./index.html)_
```diff
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Components in Vue.js</title>
  <link rel="icon" href="https://vuejs.org/images/logo.png">
</head>
<body>
  <!-- Vue Component -->
  <main id="app">
    <h1>Components in Vue.js</h1>
++  <p>{{title}}</p>
    <pre>{{ $data }}</pre>
  </main>
  <!-- Scripts Vue -->
  <script src="https://cdn.jsdelivr.net/npm/vue"></script>
  <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
  <script src="./js/main.js"></script>
</body>
</html>
```

> If we open our file [index.html](./index.html) in the tab, we will see the results.

---------------------------------------------------------------------------------------------

## Global Component

---------------------------------------------------------------------------------------------

* In the **template** We will include a `v-for` **directive** in `v-for="show in shows"` to execute a for loop.

> **Directive** `v-for: ciclos`, the operator `in` or `of` indistinctly can be used.

* We can use the method `mounted () {}` to execute a query **AJAX** with the library **Axios**.
* Within a component we will use the method `data () {}` to define the variable `shows` like **array** `shows: []`.

> In the components, the **data** attribute will **NOT** be an object, but a method so that it can create its own unique, isolated and independent field from that of the Vue instance.


_[/js/main.js](./js/main.js)_
```diff
++ // Local Component
++ Vue.component('shows', {
++ template: `
++   <div>
++     <h2>Componente Global</h2>
++     <h3>Shows TV Maze</h3>
++     <ul>
++       <li v-for="show in shows">{{ show.name }}</li>
++     </ul>
++   </div>
++ `,
++ mounted () {
++   axios.get('http://api.tvmaze.com/shows')
++     .then(res => {
++       console.log(res)
++       this.shows = res.data
++     })
++ },
++ data () {
++   return {
++     shows: []
++   }
++ }
++ })
// Global Component
const mv = new Vue({
  el: '#app',
  data: {
    title: 'hello world',
  }
})
```

_[index.html](./index.html)_
```diff
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Components in Vue.js</title>
  <link rel="icon" href="https://vuejs.org/images/logo.png">
</head>
<body>
  <!-- Vue Component -->
  <main id="app">
    <h1>Components in Vue.js</h1>
    <p>{{title}}</p>
++  <shows></shows>
    <pre>{{ $data }}</pre>
  </main>
  <!-- Scripts Vue -->
  <script src="https://cdn.jsdelivr.net/npm/vue"></script>
  <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
  <script src="./js/main.js"></script>
</body>
</html>
```

> If we open our file [index.html](./index.html) in the tab, we will see the results.

---------------------------------------------------------------------------------------------

## Local Component

---------------------------------------------------------------------------------------------

_[/js/main.js](./js/main.js)_
```diff
// Local Component
Vue.component('shows', {
  //...
})

++ const StarWarsCharacters = {
++ template: `
++   <div>
++     <h2>Componente Local</h2>
++     <h3>Personajes StarWars</h3>
++     <ul>
++       <li v-for="character in characters">{{ character.name }}</li>
++     </ul>
++   </div>
++ `,
++ mounted() {
++   axios.get('https://swapi.co/api/people/')
++     .then(res => {
++       console.log(res)
++       this.characters = res.data.results
++     })
++ },
++ data() {
++   return {
++     characters: []
++   }
++ }
++ }
// Global Component
const mv = new Vue({
  el: '#app',
  data: {
    title: 'hello world',
-- }
++ },
++ components: {
++   'starwars-characters': StarWarsCharacters
++ }
})
```

_[index.html](./index.html)_
```diff
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Components in Vue.js</title>
  <link rel="icon" href="https://vuejs.org/images/logo.png">
</head>
<body>
  <!-- Vue Component -->
  <main id="app">
    <h1>Components in Vue.js</h1>
    <p>{{title}}</p>
    <shows></shows>
++  <starwars-characters></starwars-characters>
    <pre>{{ $data }}</pre>
  </main>
  <!-- Scripts Vue -->
  <script src="https://cdn.jsdelivr.net/npm/vue"></script>
  <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
  <script src="./js/main.js"></script>
</body>
</html>
```

> If we open our file [index.html](./index.html) in the tab, we will see the results.
