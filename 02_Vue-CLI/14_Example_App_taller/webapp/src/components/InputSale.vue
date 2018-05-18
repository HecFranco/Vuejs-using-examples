<template>
      <div>
        <label v-if="label">{{ label }}</label>
        <input ref="input" :value="value" @input="updateValue($event.target.value)" @:blur="formatValue">
      </div>
</template>

<script>
import { currencyValidator } from "../helpers/currency-validator";

export default {
  name: "input-sale",
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
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
