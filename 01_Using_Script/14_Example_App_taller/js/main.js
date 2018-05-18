Vue.component('input-sale', {
  template: `
      <div>
        <label v-if="label">{{ label }}</label>
        <input ref="input" :value="value" @input="updateValue($event.target.value)" @:blur="formatValue">
      </div>
  `,
  props: {
    value: {
      type: Number,
      default: 0
    },
    label: {
      type: String,
      default: ''
    }
  },
  mounted() {
    this.formatValue()
  },
  methods: {
    updateValue(value) {
      let result = currencyValidator.parse(value, this.value)
      if (result.warning) {
        this.$refs.input.value = result.value
      }
      this.$emit('input', result.value)
    },
    formatValue() {
      this.$refs.input.value = currencyValidator.format(this.value)
    }
  }
});

new Vue({
  el: '#app',
  data: {
    price: 0,
    amount: 0,
    discount: 0,
    tax: 0
  },
  computed: {
    total() {
      let subtotal = this.price * this.amount
      subtotal -= ((subtotal * this.discount) / 100)
      subtotal += ((subtotal * this.tax) / 100)
      return subtotal.toFixed(2)
    }
  }
})