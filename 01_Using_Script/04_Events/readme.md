# 04 Events

In this sample we are going to create a web project using the library **CDN** of **Vue.js** _to understand the Events in Vue_.

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
      <pre>{{$data}}</pre> 
    </main>
    <!-- Scripts Vue -->
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    <script src="js/main.js"></script>
  </body>
</html>
```

> Feel free to open it in another tab and follow along as we go through some basic examples.

## Steps to build it

_[js/main.js](./js/main.js)_
```diff
new Vue({
  el: '#app',
  data: {
--  text: 'Hello Vue'
++  films: ['batman vs Superman', 'Avengers', 'Saw'],
  }
});
```

### Method Create new film

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
++    <!-- Methods -->
++    <h1>Methods</h1>
++    <button v-on:click="createFilm()">Create Film</button>
      <hr/>
      Show data variable information:
      <pre>{{$data}}</pre> 
    </main>
    <!-- Scripts Vue -->
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    <script src="js/main.js"></script>
  </body>
</html>
```

_[js/main.js](./js/main.js)_
```diff
new Vue({
  el: 'vue-main',
  data: {
    films: ['batman vs Superman', 'Avengers', 'Saw']
-- }
++ },
++ methods: {
++  createFilm(){
++    alert ('Method createFilm ' + this.newFilm);
++  }
++}
});
```


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
      <!-- Methods -->
      <h1>Methods</h1>
--    <button v-on:click="createFilm()">Create Film</button>
++    <form @submit.prevent="createFilm()">
++      <input type="text" v-model="newFilm"/>
++      <input type="submit" value="Save Film"/>
++    </form>
      <hr/>
      Show data variable information:
      <pre>{{$data}}</pre> 
    </main>
    <!-- Scripts Vue -->
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    <script src="js/main.js"></script>
  </body>
</html>
```

_[js/main.js](./js/main.js)_
```diff
new Vue({
  el: 'vue-main',
  data: {
--  films: ['batman vs Superman', 'Avengers', 'Saw']
++  films: ['batman vs Superman', 'Avengers', 'Saw'],
++  newFilm : null
  },
  methods: {
    createFilm(){
--    alert ('Method createFilm ' + this.newFilm);      
++    console.log('Method createFilm ' + this.newFilm);
++    this.films.unshift(this.newFilm);
++    this.newFilm = null;
    }
  }
});
```

### Method Remove film

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
      <!-- Methods -->
      <h1>Methods</h1>
      <form @submit.prevent="createFilm()">
        <input type="text" v-model="newFilm"/>
        <input type="submit" value="Save Film"/>
      </form>
++    <hr/>
++    <button @click="removeFilm()">Remove Film</button>
      <hr/>
      Show data variable information:
      <pre>{{$data}}</pre> 
    </main>
    <!-- Scripts Vue -->
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    <script src="js/main.js"></script>
  </body>
</html>
```

_[js/main.js](./js/main.js)_
```diff
new Vue({
  el: 'vue-main',
  data: {
    films: ['batman vs Superman', 'Avengers', 'Saw'],
    newFilm : null
  },
  methods: {
    createFilm(){
      console.log('Method createFilm ' + this.newFilm);
      this.films.unshift(this.newFilm);
      this.newFilm = null;
--  }
++  },
++  removeFilm(index){
++    alert('Method removeFilm');
++  }
  }
});
```

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
      <!-- Methods -->
      <h1>Methods</h1>
      <form @submit.prevent="createFilm()">
        <input type="text" v-model="newFilm"/>
        <input type="submit" value="Save Film"/>
      </form>
--    <button @click="removeFilm()">Remove Film</button>
++    <h1>List of films with remove option</h1>
++    <ol>
++      <li v-for = "(film, index) in films"> <button @click="removeFilm(index)">x</button> {{film}} </li>
++    </ol>
      <hr/>
      Show data variable information:
      <pre>{{$data}}</pre> 
    </main>
    <!-- Scripts Vue -->
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    <script src="js/main.js"></script>
  </body>
</html>
```


_[js/main.js](./js/main.js)_
```diff
new Vue({
  el: 'vue-main',
  data: {
    films: ['batman vs Superman', 'Avengers', 'Saw'],
    newFilm : null
  },
  methods: {
    createFilm(){
      console.log('Method createFilm ' + this.newFilm);
      this.films.unshift(this.newFilm);
      this.newFilm = null;
    },
    removeFilm(index){
      alert('Method removeFilm');
++    console.log('Remove Film ' + index);
++    this.films.splice(index,1);
    }
  }
});
```