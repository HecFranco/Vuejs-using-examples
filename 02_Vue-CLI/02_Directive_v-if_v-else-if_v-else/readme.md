# 02 Directive v-if, v-else-if and v-else

In this sample we are going to In this sample we are going to _to understand the Directives v-if, v-else-if and v-else in Vue_.

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

  * We will add a new numeric variable, `score: 5`.

_[/src/App.Vue](./src/App.Vue)_
```diff
<template>
    <div id="app">
--    <img src="./assets/logo.png">
--    <HelloWorld msg="Welcome to Your Vue.js App"/>
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
++    score: 5 
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

* I will include an input that allows us to edit it, `Score : <input type="text" v-model="score">`.

_[/src/App.Vue](./src/App.Vue)_
```diff
<template>
    <div id="app">
--    <img src="./assets/logo.png">
--    <HelloWorld msg="Welcome to Your Vue.js App"/>
++    <!-- Conditionals -->
++    Score : <input type="text" v-model="score">
++    <hr/>
++    Show data variable information:
++    <pre>{{ $data }}</pre>
    </div>
</template>

<script>
  // ...
</style>
```

### v-if

In **Vue**, we use the `v-if` directive lik conditional: `<strong v-if="score && score >= 5 && score <= 99">Your note is greater than 5, congratulations!</strong>`.

_[/src/App.Vue](./src/App.Vue)_
```diff
<template>
    <div id="app">
      <!-- Conditionals -->
      Score : <input type="text" v-model="score">
++    <strong v-if="score && score >= 5 && score <= 99">Your note is greater than 5, congratulations!</strong>
      <hr/>
      Show data variable information:
      <pre>{{ $data }}</pre>
    </div>
</template>

<script>
  // ...
</style>
```

### v-else

You can use the `v-else` directive to indicate an “else block” for `v-if`: `<strong v-else-if="score && score == 100">EXCELLENT!</strong>`.

> A `v-else` element must immediately follow a `v-if` or a `v-else-if` element - otherwise it will not be recognized.

_[/src/App.Vue](./src/App.Vue)_
```diff
<template>
    <div id="app">
      <!-- Conditionals -->
      Score : <input type="text" v-model="score">
      <strong v-if="score && score >= 5 && score <= 99">Your note is greater than 5, congratulations!</strong>
++    <strong v-else-if="score && score == 100">EXCELLENT!</strong>
      <hr/>
      Show data variable information:
      <pre>{{ $data }}</pre>
    </div>
</template>

<script>
  // ...
</style>
```

### v-else-if

The v-else-if, as the name suggests, serves as an “else if block” for v-if. It can also be chained multiple times: `<strong v-else>You have suspended</strong>`.

> Similar to v-else, a `v-else-if` element must immediately follow a `v-if` or a `v-else-if` element.

_[/src/App.Vue](./src/App.Vue)_
```diff
<template>
    <div id="app">
      <!-- Conditionals -->
      Score : <input type="text" v-model="score">
      <strong v-if="score && score >= 5 && score <= 99">Your note is greater than 5, congratulations!</strong>
      <strong v-else-if="score && score == 100">EXCELLENT!</strong>
++    <strong v-else>You have suspended</strong>
      <hr/>
      Show data variable information:
      <pre>{{ $data }}</pre>
    </div>
</template>

<script>
  // ...
</style>
```
