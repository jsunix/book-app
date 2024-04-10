<template>
    <div>
        <br>
      <h2>Shopping Cart</h2>
      <div v-for="(item, index) in cart" :key="item.id">
        <p>{{ item.title }} - ${{ item.price }}</p>
        <button @click="removeFromCart(index)">Remove</button>
      </div>
      <p>Total: ${{ totalPrice }}</p> <!-- Display total price here -->
    </div>
  </template>
  
  <script>
  export default {
    computed: {
      cart() {
        return this.$store.state.cart;
      },
      totalPrice() {
        return this.cart.reduce((total, item) => total + item.price, 0);
      },
    },
    methods: {
      removeFromCart(index) {
        this.$store.commit('removeFromCart', index);
      },
    },
  };
  </script>