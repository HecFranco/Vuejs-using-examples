<template>
  <div id="app">
    <input-sale label="Precio $" v-model="price"></input-sale>
    <input-sale label="Cantidad" v-model="amount"></input-sale>
    <input-sale label="Descuento %" v-model="discount"></input-sale>
    <input-sale label="Impuesto %" v-model="tax"></input-sale>
    <p>Total: ${{ total }}</p>
    <!-- Show the value of variable $data -->
    <hr> 
    Show data variable information:
    <pre>{{$data}}</pre>  
  </div>
</template>

<script>
import InputSale from './components/InputSale'

export default {
  name: 'app',
  components: {
    InputSale,
  },
  data() {
    return {
      price: 0,
      amount: 0,
      discount: 0,
      tax: 0
    }
  },  
  computed: {
    total() {
      let subtotal = this.price * this.amount
      subtotal -= ((subtotal * this.discount) / 100)
      subtotal += ((subtotal * this.tax) / 100)
      return subtotal.toFixed(2)
    }
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
</style>
