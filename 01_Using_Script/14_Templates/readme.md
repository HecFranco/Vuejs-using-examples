# 14 Templates

In this sample we are going to create a web project where we will learn to use the templates of **Vue.js**.

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
++ </main>
  <!-- Scripts Vue -->
  <script src="https://cdn.jsdelivr.net/npm/vue"></script>
  <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
  <script src="./js/main.js"></script>
</body>
</html>
```

---------------------------------------------------------------------------------------------

## Creating App Vue

---------------------------------------------------------------------------------------------

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
++  <h1>Components in Vue.js</h1>
++  <pre>{{ $data }}</pre>
  </main>
  <!-- Scripts Vue -->
  <script src="https://cdn.jsdelivr.net/npm/vue"></script>
  <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
  <script src="./js/main.js"></script>
</body>
</html>
```

---------------------------------------------------------------------------------------------

## First Way to Use Templates

---------------------------------------------------------------------------------------------

_[/js/main.js](./js/main.js)_
```diff
const mv = new Vue({
  el: '#app',
  data: {
    title: 'hello world',
  }
})
++ Vue.component('shows', {
++ template: `
++   <div>
++     <h2>Plantilla en el atributo template del componente</h2>
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
    <pre>{{ $data }}</pre>
++  <shows></shows>
  </main>
  <!-- Scripts Vue -->
  <script src="https://cdn.jsdelivr.net/npm/vue"></script>
  <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
  <script src="./js/main.js"></script>
</body>
</html>
```

---------------------------------------------------------------------------------------------

## Second Way to Use Templates

---------------------------------------------------------------------------------------------

_[/js/main.js](./js/main.js)_
```diff
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
Vue.component('shows', {
  //...
})
++ const StarWarsCharacters = {
++ template: '#starwars',
++ mounted() {
++   axios.get('https://swapi.co/api/people/')
++     .then(res => {
++       console.log(res)
++       this.characters = res.data.results
++    })
++ },
++ data() {
++   return {
++     characters: []
++   }
++ }
++ }
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
    <pre>{{ $data }}</pre>
    <shows></shows>
++  <starwars-characters></starwars-characters>
  </main>
++ <!-- template for component starwars -->
++ <template id="starwars">
++   <div>
++     <h2>Plantilla en una etiqueta template de html</h2>
++     <h3>Personajes StarWars</h3>
++     <ul>
++       <li v-for="character in characters">{{ character.name }}</li>
++     </ul>
++   </div>
++ </template>  
  <!-- Scripts Vue -->
  <script src="https://cdn.jsdelivr.net/npm/vue"></script>
  <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
  <script src="./js/main.js"></script>
</body>
</html>
```

---------------------------------------------------------------------------------------------

## Third Way to Use Templates

---------------------------------------------------------------------------------------------

_[/js/main.js](./js/main.js)_
```diff
const mv = new Vue({
  el: '#app',
  data: {
    title: 'hello world',
  }
})
Vue.component('shows', {
  //...
})
const StarWarsCharacters = {
  //...
}
++ Vue.component('posts', {
++ template: '#posts',
++ mounted() {
++   axios.get('https://jsonplaceholder.typicode.com/posts')
++     .then(res => {
++       console.log(res)
++       this.posts = res.data
++     })
++ },
++ data() {
++   return {
++     posts: []
++   }
++ }
++ })
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
    <pre>{{ $data }}</pre>
    <shows></shows>
    <starwars-characters></starwars-characters>
++  <posts></posts>    
  </main>
  <!-- template for component starwars -->
  <template id="starwars">
    <!-- ... -->
  </template>
++ <!-- template for component posts -->
++ <script type="text/template" id="posts">
++   <div>
++     <h2>Plantilla en un script template</h2>
++     <h3>Posts de JSONplaceholder</h3>
++     <ul>
++       <li v-for="post in posts">{{ post.title }}</li>
++     </ul>
++   </div>
++ </script>
  <!-- Scripts Vue -->
  <script src="https://cdn.jsdelivr.net/npm/vue"></script>
  <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
  <script src="./js/main.js"></script>
</body>
</html>
```

---------------------------------------------------------------------------------------------

## Fourth Way to Use Templates

---------------------------------------------------------------------------------------------

_[/js/main.js](./js/main.js)_
```diff
const mv = new Vue({
  el: '#app',
  data: {
    title: 'hello world',
  },
  components: {
--  'starwars-characters': StarWarsCharacters
++  'starwars-characters': StarWarsCharacters,
++  'users': Users
  }  
})
Vue.component('shows', {
  //...
})
const StarWarsCharacters = {
  //...
}
Vue.component('posts', {
  //...
})
++ const Users = {
++ mounted() {
++   axios.get('https://jsonplaceholder.typicode.com/users')
++     .then(res => {
++       console.log(res)
++       this.users = res.data
++     })
++ },
++ data() {
++   return {
++     users: []
++   }
++ }
++ }
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
    <pre>{{ $data }}</pre>
    <shows></shows>
    <starwars-characters></starwars-characters>
    <posts></posts>
++  <users inline-template>
++    <div>
++      <h2>Plantilla en un inline-template</h2>
++      <h3>Users de JSONplaceholder</h3>
++      <ul>
++        <li v-for="user in users">{{ user.email }}</li>
++      </ul>
++    </div>
++  </users>    
  </main>
  <!-- template for component starwars -->
  <template id="starwars">
    <!-- ... -->
  </template>
  <!-- template for component posts -->
  <script type="text/template" id="posts">
    <!-- ... -->
  </script>
  <!-- Scripts Vue -->
  <script src="https://cdn.jsdelivr.net/npm/vue"></script>
  <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
  <script src="./js/main.js"></script>
</body>
</html>
```