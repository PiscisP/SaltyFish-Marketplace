<template>
  <nav class="main-nav-bar">
    <button @click="goBack">Back</button>
    <div>Salty Fish MarketPlace</div>

    <div class="search-bar">
      <input type="text" placeholder="Search for items..." v-model="searchQuery" @keyup.enter="search"/>
    </div>

    <div class="account-detail">
      <router-link to="/profile">Account Details</router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'MainNavBar',
  data() {
    return {
      searchQuery: '' // Data property for the search query
    };
  },
  methods: {
    goBack() {
      // Use the router's history to go back to the previous page
      this.$router.go(-1);
    },
    search() {
      // Logic to perform search
      console.log('Searching for:', this.searchQuery);
      // need to implement with backend api later
    }
  }
};
</script>

<style lang="less">
.main-nav-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #333;
  color: white;
  z-index: 1000; 
  height: 60px; 
  position:fixed;
  top: 0; 
  width: 100%;
}

.search-bar {
  padding: 10px 15px;
}

.search-bar input {
  padding: 10px;
 // border: 1px solid #ccc;
 // border-radius: 4px;
  font-size: 16px;
}
.main-nav-bar button {
  padding: 10px; 
  font-size: 16px; 
  color: white; 
  width: auto; 
  background-color: #333;
}
.account-detail{
  color: white;
}
</style>
