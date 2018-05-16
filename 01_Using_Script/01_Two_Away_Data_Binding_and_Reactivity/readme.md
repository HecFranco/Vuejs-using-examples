# 01 Rectivity

In this sample we are going to create a web project using the library **CDN** of **Vue.js** _to understand the reactivity in Vue_.

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

# Prerequisites

> To make this type of starting configuration it is necessary to have an [index.html](./index.html) file that contains access to the Vue CDN library more than [js/main.js](./js/main.js) where our app code is located.


_[index.html](./index.html)_
```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Reactiviy with Vue.js</title>
    <link rel="icon" href="https://vuejs.org/images/logo.png">
  </head>
  <body></body>
</html>
```

* We will add the library`<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>`, and our **javascript file** `<script src="js/main.js"></script>` with the code **Vue**.

_[index.html](./index.html)_
```diff
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Reactiviy with Vue.js</title>
    <link rel="icon" href="https://vuejs.org/images/logo.png">
  </head>
  <body>
    <h1>Reactiviy with Vue.js</h1>
++  <!-- Scripts Vue -->
++  <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
++  <script src="js/main.js"></script>
  </body>
</html>
```

## Steps to build it

* We will create our first Vue element, `vue-main` with the data `text: Hello Vue`.

_[js/main.js](./js/main.js)_
```js
new Vue({
  el: '#app',
  data: {
    message: 'Hello World with Vue.js'
  }
})
```

* We will modify the [index.html](./index.html) file to add the tag of our first Vue element, `<vue-main></vue-main>`.

_[index.html](./index.html)_
```diff
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Reactiviy with Vue.js</title>
  <link rel="icon" href="https://vuejs.org/images/logo.png">
</head>
<body>
    <h1>Reactiviy with Vue.js</h1>
++  <!-- Vue Element -->  
++  <main id="app">
++    <!-- Interpolation / print content of variable-->
++    <h2>{{ message }}</h2>
++    <input type="text" v-model="message">
++    <pre>{{ $data }}</pre>
++  <main id="app">
    <!-- Scripts Vue -->
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    <script src="js/main.js"></script>
  </body>
</html>
```

## Another option

> Another option is to include the value of the variable as an attribute within the tag itself.

_[index.html](./index.html)_
```diff
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Reactiviy with Vue.js</title>
    <link rel="icon" href="https://vuejs.org/images/logo.png">
  </head>
  <body>
    <h1>Reactiviy with Vue.js</h1>
    <!-- Vue Element -->  
    <main id="app">
      <!-- Interpolation / print content of variable-->
      <h2>{{ message }}</h2>
      <input type="text" v-model="message">
      Can show the data using 'v-text':
++    <h2 v-text="text"></h2>
      <pre>{{ $data }}</pre>
    <main id="app">
    <!-- Scripts Vue -->
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    <script src="js/main.js"></script>
  </body>
</html>
```