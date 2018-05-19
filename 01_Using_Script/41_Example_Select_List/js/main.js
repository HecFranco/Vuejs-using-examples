Vue.component('autocomplete-dropdown', {
  template: '#autocomplete-tpl',
  data() {
    return {
      isOpened: false,
      selected: null,
      search: ''
    }
  },
  props: {
    options: {
      type: Array,
      required: true
    }
  },
  methods: {
    onInput(value) {
      this.isOpened = !!value//(value != '');
      this.selected = null;
    },
    select() {
      const selectedOption = this.filteredItems[this.selected]
      this.$emit('select-item', selectedOption);
      this.search = selectedOption.name;
      this.isOpened = false;
    },
    onDown() {
      if (!this.isOpened) {
        return;
      }
      this.selected = (this.selected + 1) % this.filteredItems.length;
    },
    onUp() {
      if (!this.isOpened) {
        return;
      }

      this.selected = this.selected - 1 < 0
        ? this.filteredItems.length - 1
        : this.selected - 1;
    },
    toggle() {
      this.isOpened = !this.isOpened;
      if (this.isOpened) {
        //this.$refs.dropdown.focus();
      }
    }
  },
  computed: {
    filteredItems() {
      const condition = new RegExp(this.search, 'i')
      return this.options.filter(item => item.name.match(condition))
    }
  }
})


new Vue({
  data: {
    options: [
      {
        id: 1,
        name: 'Homer Simpson',
        thumbnail: 'http://pm1.narvii.com/6175/e23ac4a4e9e12b28050f70ef1f4f1bc39a328fa7_128.jpg'
      },
      {
        id: 2,
        name: 'Amancio Ortega',
        thumbnail: 'http://pm1.narvii.com/6175/e23ac4a4e9e12b28050f70ef1f4f1bc39a328fa7_128.jpg'
      },
      {
        id: 3,
        name: 'Peter Parker',
        thumbnail: 'http://pm1.narvii.com/6175/e23ac4a4e9e12b28050f70ef1f4f1bc39a328fa7_128.jpg'
      },
      {
        id: 4,
        name: 'John Cena',
        thumbnail: 'http://pm1.narvii.com/6175/e23ac4a4e9e12b28050f70ef1f4f1bc39a328fa7_128.jpg'
      }
    ]
  },
  methods: {
    onOptionSelect(option) {
      console.log(option)
    },
  }
}).$mount('#app')