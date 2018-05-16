# 01 Boilerplate Using Vue-CLI and ES6

In this sample we are going to create our first Vue.js component and connect it with the DOM.

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

_[/src/App.Vue](./src/App.Vue)_
```diff
<template>
    <div id="app">
--    <img src="./assets/logo.png">
--    <HelloWorld msg="Welcome to Your Vue.js App"/>
++    <!-- Interpolation / print content of variable-->
++    <h2>{{ message }}</h2>
++    <input type="text" v-model="message">
++    <pre>{{ $data }}</pre>
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
++     message: "Hello World with Vue.js"
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