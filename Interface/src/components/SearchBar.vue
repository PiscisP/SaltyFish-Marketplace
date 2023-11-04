<template>
  <div class="search-bar">
    <input type="text" placeholder="Search for items..." v-model="searchQuery" @keyup.enter="search"/>
  </div>
</template>

<script>
export default {
  name: 'SearchBar',
  data() {
    return {
      searchQuery: ''
    };
  },
  methods: {
    search() {
      // Logic to perform search
      console.log('Searching for:', this.searchQuery);
      // You might want to emit an event or call a method to perform the search
      // this.$emit('search', this.searchQuery);
    }
  }
}
</script>

<style scoped>
.search-bar {
  width: 100%;
  padding: 10px 15px; /* Adjust padding as needed */
  box-sizing: border-box; /* Include padding in the element's total width and height */
  position: fixed; /* Fix the search bar at the top */
  top: 0;
  left: 0;
  z-index: 100; /* Ensure the search bar is above other content */
  background: #fff; /* Set a background color that matches your design */
}

.search-bar input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px; /* Optional: rounded corners */
  font-size: 16px; /* Adjust font size as needed */
}
</style>
