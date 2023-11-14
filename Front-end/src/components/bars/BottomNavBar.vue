<template>
  <div class="bottom-nav">
    <!-- <button class="nav-item" @click="goToMessages">
      <i class="fas fa-comments"></i> 
       <span>Messages</span> --> 
    <!-- </button> -->
    <button class="sell-item" @click="addNewItem">Sell</button>
    
    <button class="nav-item" @click="goToProfile">
      <i class="fas fa-user"></i> <!-- FontAwesome icon -->
      <span>Shopping Cart</span>
    </button>
  </div>
</template>

<script>
export default {
  name: 'BottomNavBar',
  methods: {
    goToMessages() {
      this.$router.push({ name: 'Messages' }); // Uncommented to enable navigation
    },
    addNewItem() {
      // Logic to add a new item
      // For example, open a modal or a new page
    },
    goToProfile() {
      this.$router.push({ name: 'Profile' }); // Uncommented to enable navigation
    }
  }
}
</script>

<style scoped lang="less">
.bottom-nav {
  display: flex;
  justify-content: space-around; 
  align-items: center; 
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  height:40px;
  z-index: 1000;
  background-color: #333;
  color: white;
  padding: 10px 0;
  margin: 0;
}


.nav-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
  text-align: center;
  border: none;
  background: none;
  padding: 5px 0; 
  font-size: 16px;
  transition: background-color 0.3s;
  color: white;
}

.sell-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
  text-align: center;
  border: none;
  background: none;
  padding: 5px 0; 
  font-size: 16px;
  transition: background-color 0.3s;
  color: white;
}

</style>
