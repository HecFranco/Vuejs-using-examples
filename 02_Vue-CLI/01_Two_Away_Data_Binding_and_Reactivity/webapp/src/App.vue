<template>
  <div id="app">
      <!-- Interpolation / print content of variable-->
      <h2>{{ message }}</h2>
      <input type="text" v-model="message">
      <!-- Show data variable information -->           
      <hr/>
       Show data variable information: 
      <pre>
        {{ $data }}
        Window height: {{ windowHeight }}
        {{ txt }}
      </pre>        
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      message: "Hello World with Vue.js",
      windowHeight: 0,
      txt: ''
    };
  },
  watch: {
    windowHeight(newHeight, oldHeight) {
     this.txt = `it changed to ${newHeight} from ${oldHeight}`;
    }
  },
  mounted:
    function() {
      this.$nextTick(() => {
        window.addEventListener('resize', () => {
          this.windowHeight = window.innerHeight
        });
      })
    }
  ,
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
