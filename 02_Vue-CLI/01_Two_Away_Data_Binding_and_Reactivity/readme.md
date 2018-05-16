# 01 Boilerplate Using Vue-CLI and ES6

In this sample we are going to setup a web project that can be easily managed by webpack.

We won't install anything related to Vue.js, just some basic plumbing.

We will setup an initial **Vue-CLI** project.

Summary steps:

- 

# Prerequisites

Install [Node.js and npm](https://nodejs.org/en/) (v6.x.x or higher) if they are not already installed on your computer. 

You will also need to have **Vue-CLI** installed globally.

[Vue.js](https://vuex.vuejs.org/en/) provides an official CLI to quickly structure Single-page Applications (SPA). Provides **all-in-one** configurations for a modern frontend workflow. It only takes a few minutes, it's ready for development with: hot top-up, **lint-on-save** and ready-made versions:

```bash
`npm install -g @vue/cli`
```

> Verify that you are running at least node v6.x.x and npm 3.x.x by running `node -v`, `npm -v` and `vue -V` in a terminal/console window. Older versions may produce errors.

## Steps to build it

- Create and navigate to the folder where you are going to create the empty project.

- Execute `vue create webapp` to create a new **webapp** project, you will be prompted to answer some information about the project.Once you have completed this information successfully, the **package.json** file will be generated.

```bash
vue create webapp
```

```bash
cd webapp
npm run serve
```

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