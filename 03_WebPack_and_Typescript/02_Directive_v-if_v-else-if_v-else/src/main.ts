import Vue from 'vue';

new Vue({
  el: '#app',
  template: `
    <div>
      <!-- Conditionals -->
      Score : <input type="text" v-model="score">
      <strong v-if="score && score >= 5 && score <= 99">Your note is greater than 5, congratulations!</strong>
      <strong v-else-if="score && score == 100">EXCELLENT!</strong>
      <strong v-else>You have suspended</strong>
      <hr/>
      Show data variable information:      
      <pre>{{ $data }}</pre>
    </div>
  `,
  data: {
    score: 5
  },
});