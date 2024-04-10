<template>
  <div>
    <search-bar></search-bar>
    <div v-for="book in filteredBooks" :key="book.id">
      <h3>{{ book.title }}</h3>
      <p>Price: ${{ book.price }}</p>
      <button @click="addToCart(book)">Add to Cart</button>
    </div>

    <!-- Shopping Cart Section -->
    <shopping-cart></shopping-cart> <!-- Include and use the ShoppingCart component here -->
  </div>
</template>

<script>
import SearchBar from './SearchBar.vue';
import ShoppingCart from './ShoppingCart.vue'; // Import ShoppingCart.vue component

export default {
  name: 'BookListOne',
  components: {
    SearchBar,
    ShoppingCart, // Register ShoppingCart component
  },
  computed: {
    filteredBooks() {
      return this.$store.state.books.filter(book =>
        book.title.toLowerCase().includes(this.$store.state.searchTerm.toLowerCase())
      );
    },
  },
  methods: {
    addToCart(book) {
      this.$store.commit('addToCart', book);
    },
  },
};
</script>

<style scoped>
#book-list-one {
    background: #fff;
    box-shadow: 0 1px 1px #ccc;
    padding: 20px 20px;
}
#book-list-one ul {
    padding: 0;
    list-style-type: none;
}

#book-list-one li {
    padding: 10px 0;
    border-bottom: 1px solid #eee;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.price {
    font-weight: bold;
    color: green;
}
.title {
    font-weight: bold;
}

</style>
