# 00 Quick Start

In this sample we are going to create a web project using the library **CDN** of **Vue.js**.

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
<html>
  <head>
    <title>Title of the document</title>
  </head>
  <body></body>
</html>
```

* We will add the library`<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>`, and our **javascript file** `<script src="js/main.js"></script>` with the code **Vue**.

_[index.html](./index.html)_
```diff
<!DOCTYPE html>
<html>
    <head>
      <title>Title of the document</title>
    </head>
  <body>
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
  el: 'vue-main',
  data: {
    text: 'Hello Vue'
  }
});
```

* We will modify the [index.html](./index.html) file to add the tag of our first Vue element, `<vue-main></vue-main>`.

_[index.html](./index.html)_
```diff
<!DOCTYPE html>
<html>
  <head>
    <title>Title of the document</title>
  </head>
  <body>
++  <!-- Vue Element -->  
++  <vue-main>
++    <!-- Interpolation / print content of variable-->
++    <h1>{{ text }}</h1>
++    Can show the data using 'v-text':
++  </vue-main>
    <!-- Scripts Vue -->
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    <script src="js/main.js"></script>
  </body>
</html>
```

> Another option is to include the value of the variable as an attribute within the tag itself.

_[index.html](./index.html)_
```diff
<!DOCTYPE html>
<html>
  <head>
    <title>Title of the document</title>
  </head>
  <body>
    <!-- Vue Element -->  
    <vue-main>
      <!-- Interpolation / print content of variable-->
      <h1>{{ text }}</h1>
      Can show the data using 'v-text':
++    <h2 v-text="text"></h2>
    </vue-main>
    <!-- Scripts Vue -->
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    <script src="js/main.js"></script>
  </body>
</html>
```