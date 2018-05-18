const mv = new Vue({
  el: '#app',
  data: {
    isShowing: false,
    blur: 'blur'
  },
  methods: {
    toggleModal() {
      this.isShowing = !this.isShowing;
    }
  },
  components: {
    modalBtn: {
      template: `<button @click="openModal">Modal</button>`,
      methods: {
        openModal() {
          this.$emit('modal')
        }
      }
    },
    modal: {
      template: '#modal'
    }
  }
})