<template>
  <div id="app">
    <h1>Basic en Vue.js</h1>
    <hr>
    <form id="ContactForm" class="ContactForm" @submit.prevent="sendForm">
      <legend>¿Que deseas enviar?</legend>
      <div align="center">
        <!-- Inputs change de value of variable formType (true or false) -->
        <input v-model="formType" :value="true" name="formType" type="radio" id="opinion">
        <label for="opinion">Opinion</label>
        <input v-model="formType" :value="false" name="formType" type="radio" id="budget">
        <label for="budget">Budget</label>
      </div>
      <legend>
        <span>{{ formTitle }}</span> Form</legend>
      <input @keyup="validateData" type="text" name="name" title="Your name" placeholder="Write your name" pattern="^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$"
        required>
      <transition name="fade">
        <span v-show="message.name" v-text="message.name" class="ContactForm-message u-error"></span>
      </transition>
      <input @keyup="validateData" type="email" name="email" title="Your email" placeholder="Write your email" pattern="^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$"
        required>
      <transition name="fade">
        <span v-show="message.email" v-text="message.email" class="ContactForm-message  u-error"></span>
      </transition>

      <!-- modify content of form -->
      <template v-if="!formType">
        <input @keyup="validateData" type="tel" name="phone" title="Your phone" placeholder="Write your phone" pattern="^[0-9]+$"
          required>
        <transition name="fade">
          <span v-show="message.phone" v-text="message.phone" class="ContactForm-message  u-error"></span>
        </transition>
        <select name="services" required>
          <option v-for="(service, index) in services" :value="service.id" v-text="service.name" :key="index"></option>
        </select>
      </template>

      <template v-else>
        <input @keyup="validateData" type="text" name="subject" title="Subject to deal" placeholder="Subject to deal" required>
        <transition name="fade">
          <span v-show="message.subject" v-text="message.subject" class="ContactForm-message u-error"></span>
        </transition>
      </template>
      <textarea @keyup="validateData" name="comments" title="Your comments" placeholder="Write your comments" cols="50" rows="5"
        required></textarea>
      <transition name="fade">
        <span v-show="message.comments" v-text="message.comments" class="ContactForm-message u-error"></span>
      </transition>
      <input type="submit" value="enviar">
      <transition name="fade">
        <span v-show="message.serverResponse" v-html="message.serverResponse" :class="responseClassCSS" :style="responseStyleCSS"></span>
      </transition>
    </form>
    <!-- Show the value of variable $data -->
    <hr> 
    Show data variable information:
    <pre>{{$data}}</pre> 
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      formType: true,
      message: {
        name: '',
        email: '',
        phone: '',
        subject: '',
        comments: '',
        serverResponse: ''
      },
      services: [
        { id: null, name: 'Select a service' },
        { id: 1, name: 'Graphic design' },
        { id: 2, name: 'Web design' },
        { id: 3, name: 'Web programming' },
        { id: 4, name: 'Mobile Programming' },
        { id: 5, name: 'Digital marketing' }
      ],
      formats: {
        name: '',
        email: ''
      },
      serverResponse: false
    };
  },  
    computed: {
      formTitle() {
        return (this.formType) ? 'Opinion' : 'Budget'
      },
      responseClassCSS() {
        return [
          'ContactForm-message',
          (this.serverResponse) ? 'u-success' : 'u-error'
        ]
      },
      responseStyleCSS() {
        return {
          fontSize: '2rem',
          color: '#FFF'
        }
      }
    },  
      methods: {
      validateData(e) {
        let input = e.target,
          expression

        if (input.pattern) {
          let regex = new RegExp(input.pattern)
          expression = !regex.exec(input.value)
        } else {
          expression = !input.value
        }

        if (expression) {
          this.message[input.name] = `Incorrect Data, ${input.title}`
        } else {
          this.message[input.name] = ''
        }
      },
      sendForm(e) {
        alert('Enviando Form')
        let form = document.getElementById('ContactForm'),
          formData = new FormData(form)

        axios.post('http://127.0.0.1:8080/server/server.php', formData)
          .then(response => {
            this.message.serverResponse = response.data
            this.serverResponse = true
          })
          .catch(error => {
            console.log(error)
            this.message.serverResponse = error
            this.serverResponse = false
          })
      }
    }
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
.fade-enter-active,
.fade-leave-active {
  transition: opacity .5s;
}
.fade-enter,
.fade-leave-to
/* .fade-leave-active below version 2.1.8 */
{
  opacity: 0;
}
:root {
  --width-inputs: 80%;
  --bg-color-main: #35495E;
  --color-main: #41B883;;
  --color-ok: #4CAF50;
  --color-error: #EF5350;
  --font-main: sans-serif;
}

html {
  font-family: var(--font-main);
  font-size: 16px;
}

textarea { resize: none; }

.ContactForm > * {
  padding: .5rem;
  margin: 1rem auto;
  display: block;
  width: var(--width-inputs);
}

.ContactForm legend {
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
}

.ContactForm input:not([type="submit"]),
.ContactForm textarea,
.ContactForm select {
  border: medium solid var(--color-main);
  background-color: var(--bg-color-main);
  color: var(--color-main);
  font-size: 1rem;
  font-family: var(--font-main);
}

.ContactForm select {
  width: calc(  var(--width-inputs) + 1rem );
}

.ContactForm input[type="submit"] {
  width: calc(var(--width-inputs) / 2);
  font-family: var(--font-main);
  font-size: 1rem;
  font-weight: bold;
  background-color: var(--color-main);
  color: #000;
  cursor: pointer;
  outline: 0;
  border: 0;
  transition: all .3s ease-out;
}

.ContactForm input[type="submit"]:hover {
  background-color: var(--bg-color-main);
  color: var(--color-main);
}

.ContactForm [required]:valid {
  border: thin solid var(--color-ok);
  outline: thin solid var(--color-ok);
}

.ContactForm [required]:invalid {
  border: thin solid var(--color-error);
  outline: thin solid var(--color-error);
}

.ContactForm [required]:focus {
  border: thin solid var(--color-main);
  outline: thin solid var(--color-main);
}

.ContactForm-message {
  padding: .5rem;
  font-size: .85rem;
  background-color: var(--color-main);
  color: var(--bg-color-main);
}

.u-success { background-color: var(--color-ok); }

.u-error { background-color: var(--color-error); }
</style>
