# 02 Directive v-if, v-else-if and v-else

In this sample we are going to create a web project using the library **CDN** of **Vue.js** _to understand the Directives v-if, v-else-if and v-else in Vue_.

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

* We will add a new numeric variable, `score: 5`, within [js/main.js](./js/main.js).

_[js/main.js](./js/main.js)_
```diff
new Vue({
  el: '#app',
  data: {
--  text: 'Hello Vue'    
++  text: 'Hello Vue',
++  name: 'Jhon Doe',
++  score: 5 
  }
});
```

* I will include an input that allows us to edit it, `Score : <input type="text" v-model="score">`.

_[index.html](./index.html)_
```diff
<!DOCTYPE html>
<html>
  <head>
    <title>Title of the document</title>
  </head>
  <body>
    <!-- Vue Element -->
    <<main id="app">
++    <!-- Conditionals -->
++    Score : <input type="text" v-model="score">
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

### v-if

In **Vue**, we use the `v-if` directive lik conditional: `<strong v-if="score && score >= 5 && score <= 99">Your note is greater than 5, congratulations!</strong>`.

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
      <!-- Conditionals -->
      Score : <input type="text" v-model="score">
++    <strong v-if="score && score >= 5 && score <= 99">Your note is greater than 5, congratulations!</strong>
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

### v-else

You can use the `v-else` directive to indicate an “else block” for `v-if`: `<strong v-else-if="score && score == 100">EXCELLENT!</strong>`.

> A `v-else` element must immediately follow a `v-if` or a `v-else-if` element - otherwise it will not be recognized.

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
      <!-- Conditionals -->
      Score : <input type="text" v-model="score">
      <strong v-if="score && score >= 5 && score <= 99">Your note is greater than 5, congratulations!</strong>
++    <strong v-else-if="score && score == 100">EXCELLENT!</strong>
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

### v-else-if

The v-else-if, as the name suggests, serves as an “else if block” for v-if. It can also be chained multiple times: `<strong v-else>You have suspended</strong>`.

> Similar to v-else, a `v-else-if` element must immediately follow a `v-if` or a `v-else-if` element.

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
      <!-- Conditionals -->
      Score : <input type="text" v-model="score">
      <strong v-if="score && score >= 5 && score <= 99">Your note is greater than 5, congratulations!</strong>
      <strong v-else-if="score && score == 100">EXCELLENT!</strong>
++    <strong v-else>You have suspended</strong>
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