const eventBus = new Vue()

Vue.component('task-list', {
  props: ['taskList'],
  template: `
    <ul>
      <li v-for="(task, index) in taskList" v-text="task.text" :key="index"></li>
    </ul>
  `,
  created() {
    console.log(this.taskList);
    eventBus.$on('task-add', task => {
      this.taskList.push(task)
    })
  }
})

Vue.component('task-add', {
  template: `
    <form v-on:submit.prevent="addTask">
      <hr>
      <input type="text" placeholder="Add task" v-model="text">
      <br>
      Show the value of input:
      <pre>{{$data}}</pre>
    </form>
    `,
  data() {
    return {
      text: ''
    }
  },
  updated(){
    console.log('Input modified!!!', this.text);
  },
  methods: {
    addTask() {
      if (this.text != '') {
        let task = {
          text: this.text
        }
        console.log('Task Sended : ', task);
        eventBus.$emit('task-add', task)
        this.text = ''
      }
    }
  }
})

const app = new Vue({
  el: '#app',
  data: {
    taskList: [
      { text: 'Task 1' },
      { text: 'Task 2' },
    ]
  }
})