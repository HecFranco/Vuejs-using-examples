const eventBus = new Vue()

Vue.component('button-counter', {
  data () {
    return {
      count_component: 0,
      count_global: 0,  
    }
  },
  template: '<button v-on:click="addCount()">You clicked me {{ count_component }} times.</button>',
  methods: {
    addCount() {
      this.count_component ++;
      let count_emit = this.count_global++;
      eventBus.$emit("count-global-emit", count_emit); 
      this.count_global = 0;
    }
  }
});

new Vue({
  el: '#components-demo',
  data: {
    count_global: 0,
  },
  created() {
    eventBus.$on("count-global-emit", count_emit => {
      this.count_global++;
    });
  }
});