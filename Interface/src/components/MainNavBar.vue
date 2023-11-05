<template>
    <nav class="main-nav-bar">
      <button @click="goBack">Back</button>
      <!-- Your other main nav bar content -->
      <div>Salty Fish MarketPlace</div>
      <router-link to="/account">Account Details</router-link>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'MainNavBar',
    methods: {
      goBack() {
        // Use the router's history to go back to the previous page
        this.$router.go(-1);
      }
    }
  };
  </script>
  
  <style>
  .main-nav-bar {
    /* Style your main nav bar */
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    background-color: #333;
    color: white;
  }
  
  .main-nav-bar button {
    /* Style your back button */
  }
  </style>
  