<template>
  <div>
    <br>
    <h2>Shopping Cart</h2>
    <div v-for="(item, index) in cart" :key="item.id">
      <p>{{ item.title }} - ${{ item.price }}</p>
      <button @click="removeFromCart(index)">Remove</button>
    </div>
    <p>Total: ${{ totalPrice }}</p> <!-- Display total price here -->
    <button @click="purchaseItems">Purchase</button> <!-- Add Purchase button -->
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
    purchaseItems() {
      if (this.cart.length === 0) {
        alert('You do not have items in the cart.');
      } else {
        // Simulate purchase action
        alert('Items purchased successfully!');
        this.$store.commit('emptyCart'); // Clear the cart after purchase
      }
    },
  },
};
</script>