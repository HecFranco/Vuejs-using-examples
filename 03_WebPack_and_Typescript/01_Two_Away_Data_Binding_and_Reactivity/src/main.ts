import Vue from 'vue';

new Vue({
  el: '#app',
  template: `
    <div>
      <!-- Interpolation / print content of variable-->
      <h2>{{ message }}</h2>
      <input type="text" v-model="message">
      <hr/>
      Can show the data using 'v-text':
      <h2 v-text="message"></h2>
      <hr/>
      Show data variable information:      
      <pre>{{ $data }}</pre>
    </div>
  `,
  data: {
    message: 'Hello World with Vue.js'
  },
});