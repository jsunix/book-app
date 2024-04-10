<template>
    <div>
      <input type="text" v-model="searchTerm" @input="searchBooks" placeholder="Search books">
    </div>
    <br>
  </template>
  
  <script>
  export default {
    data() {
      return {
        searchTerm: '',
      };
    },
    methods: {
      searchBooks() {
        this.$store.commit('setSearchTerm', this.searchTerm);
        this.$store.dispatch('searchBooks');
      },
    },
  };
  </script>