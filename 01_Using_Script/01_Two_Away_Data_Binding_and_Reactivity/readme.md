# 01 Rectivity

In this sample we are going to create a web project using the library **CDN** of **Vue.js** _to understand the reactivity in Vue_.

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
      <pre>{{ $data }}</pre>
    </main>
    <!-- Scripts Vue -->
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    <script src="js/main.js"></script>
  </body>
</html>
```

> Feel free to open it in another tab and follow along as we go through some basic examples.

## Steps to build it

* We will create our first Vue element, `#app` with the message `message: 'Hello World with Vue.js'`.

_[js/main.js](./js/main.js)_
```diff
new Vue({
  el: '#app',
  data: {
--  text: 'hello Vue'    
++  message: 'Hello World with Vue.js'
  }
})
```

* We will modify the [index.html](./index.html) file to add the tag of our first Vue element, `<main id="app">`.

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
++    <!-- Interpolation / print content of variable-->
++    <h2>{{ message }}</h2>
++    <input type="text" v-model="message">
      <hr/>
      Show data variable information:
      <pre>{{ $data }}</pre>
    </main>
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
++    <hr/>
++    Can show the data using 'v-text':
++    <h2 v-text="message"></h2>
      <hr/>
      Show data variable information:
      <pre>{{ $data }}</pre>
    </main>
    <!-- Scripts Vue -->
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    <script src="js/main.js"></script>
  </body>
</html>
```