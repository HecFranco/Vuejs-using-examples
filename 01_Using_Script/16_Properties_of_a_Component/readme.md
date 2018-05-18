# 15 Propierties of a Component

In this sample we are going to create a web project where we will learn to use the **Propierties of a Component** in **Vue.js**.

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

## ...

---------------------------------------------------------------------------------------------

_[/js/main.js](./js/main.js)_
```diff
const mv = new Vue({
  el: '#app',
++ mounted () {
++     axios.get('http://api.tvmaze.com/shows')
++       .then(res => {
++         console.log(res)
++         this.shows = res.data
++       })
++ },  
  data: {
    title: 'hello world',
++  shows: []    
  }
})
```

_[/js/main.js](./js/main.js)_
```diff
++ Vue.component('show', {
++ //props: [ 'name', 'poster', 'rating', 'genres' ],
++ props: {
++   name: {
++     type: String,
++     required: true
++   },
++   poster: String,
++   rating: Number,
++   genres: {
++     type: [String, Array],
++     required: true,
++     default: 'No genre'
++   }
++ },
++ template: '#show',
++ })

const mv = new Vue({
  el: '#app',
  mounted () {
      axios.get('http://api.tvmaze.com/shows')
        .then(res => {
          console.log(res)
          this.shows = res.data
        })
  },
  data: {
    title: 'hello world',    
    shows: []
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
  <title>Propiedades de componentes en Vue.js</title>
  <link rel="icon" href="https://vuejs.org/images/logo.png">
</head>
<body>
  <main id="app">
    <h1>Components in Vue.js</h1>
    <pre>{{ $data }}</pre>
  </main>
++ <!-- Templete for Show component -->  
++ <template id="show">
++   <figure>
++     <img :src="poster" :alt="name">
++     <figcaption>
++       <h3>{{ name }}</h3>
++       <p>Calificación: <b>{{ rating }}</b></p>
++       <p>Géneros:</p>
++       <ul>
++         <li v-for="genre in genres" v-text="genre"></li>
++       </ul>
++     </figcaption>
++   </figure>
++ </template>
  <!-- Scripts Vue -->
  <script src="https://cdn.jsdelivr.net/npm/vue"></script>
  <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
  <script src="./js/main.js"></script>  
</body>
</html>
```

_[index.html](./index.html)_
```diff
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Propiedades de componentes en Vue.js</title>
  <link rel="icon" href="https://vuejs.org/images/logo.png">
</head>
<body>
  <main id="app">
    <h1>Components in Vue.js</h1>
++  <!-- Show component -->
++  <show v-for="show in shows"
++              :name="show.name"
++              :poster="show.image.medium"
++              :rating="show.rating.average"
++              :genres="show.genres"
++              >
++  </show>    
    <pre>{{ $data }}</pre>
  </main>
  <!-- Templete for Show component -->  
  <template id="show">
    <!-- ... -->
  </template>
  <!-- Scripts Vue -->
  <script src="https://cdn.jsdelivr.net/npm/vue"></script>
  <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
  <script src="./js/main.js"></script>  
</body>
</html>
```