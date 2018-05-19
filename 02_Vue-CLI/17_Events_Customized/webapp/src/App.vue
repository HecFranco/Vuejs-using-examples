<template>
  <div id="app">
    <!-- Binding Class -->
    <div :class="[ isShowing ? blur : '' ]">
      <h1>Custom events in components in Vue.js</h1>
      <br>
      <br>
      <modal-btn @modal="toggleModal"></modal-btn>
    </div>
    <!-- Transition -->
    <transition name="fade">
      <modal v-if="isShowing" class="modal">
        <modal-btn @modal="toggleModal"></modal-btn>
      </modal>
    </transition>
  </div>
</template>

<script>
import Modal from './components/Modal.vue'
import ModalBtn from './components/ModalBtn.vue'

export default {
  name: 'app',
  data() {
    return {
      isShowing: false,
      blur: 'blur'
    }
  },
  methods: {
    toggleModal() {
      this.isShowing = !this.isShowing;
    }
  },
  components: {
    ModalBtn,
    Modal
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
:root {
    --color-primary: #41B883;
    --color-secondary: #35495E;
  }

  body {
    display: flex;
    justify-content: center;
    font-family: sans-serif;
    height: 100vh;
  }

  button {
    padding: 10px 15px;
    outline: 0;
    width: 60%;
    border: solid solid var(--color-primary);
    background-color: var(--color-secondary);
    color: var(--color-primary);
    cursor: pointer;
  }

  #app {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .modal {
    position: absolute;
    padding: 2rem;
    width: 100%;
    min-height: 100vh;
    background-color: rgba(65, 184, 131, .25);
    color: (var(--color-secondary));
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity 0.2s ease-out;
  }

  .fade-enter, .fade-leave-to {
    opacity: 0;
  }

  .blur {
    filter: blur(1px);
    opacity: .5;
  }
</style>
