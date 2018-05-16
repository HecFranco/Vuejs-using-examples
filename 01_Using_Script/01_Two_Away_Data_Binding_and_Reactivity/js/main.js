// Using Vanilla JavaScript
    /*
    const input = document.querySelector('input'),
      h1 = document.querySelector('h1');

    input.addEventListener('keyup', () => h1.innerHTML = input.value)
    */
   new Vue({
    el: '#app',
    data: {
      message: 'Hello World with Vue.js'
    }
  })