const mv = new Vue({
    el: '#app',
    data: {
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
  })