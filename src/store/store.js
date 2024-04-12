import Vuex from 'vuex'

export const store = new Vuex.Store({
    name: 'store',
    state: {
      books: [
        { id: 1, title: 'Book 1', price: 10 },
        { id: 2, title: 'Book 2', price: 15 },
        { id: 3, title: 'Book 3', price: 20 },
        { id: 4, title: 'Book 4', price: 25 },
        { id: 5, title: 'Book 5', price: 30 },
        { id: 6, title: 'Book 6', price: 35 },
        { id: 7, title: 'Book 7', price: 40 },
        { id: 8, title: 'Book 8', price: 45 },
        { id: 9, title: 'Book 9', price: 50 },
        { id: 10, title: 'Book 10', price: 55 },
        // Add more books here
      ],
      cart: [],
      searchTerm: '',
  },
  getters:{
    salesBooks: state => {
        var salesBooks = state.books.map(book => {
          return {
            title: '**' + book.title + '**',
            price: book.price / 2
          }
        })
        return salesBooks
    }
  },
  mutations: {
    addToCart(state, book) {
      state.cart.push(book);
    },
    removeFromCart(state, index) {
      state.cart.splice(index, 1);
    },
    setSearchTerm(state, term) {
      state.searchTerm = term;      
    },
    emptyCart(state){
      state.cart =[];
    },
  },
  actions: {
    searchBooks({ commit, state }) {
      // Perform search logic here
      // For simplicity, just filter books by title containing the search term
      const filteredBooks = state.books.filter(book =>
        book.title.toLowerCase().includes(state.searchTerm.toLowerCase())
      );
      // Commit mutation to update the filtered books in the state
      commit('setFilteredBooks', filteredBooks);
    }
  }
})