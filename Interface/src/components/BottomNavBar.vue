<template>
  <div class="bottom-nav">
    <button class="nav-item" @click="goToMessages">
      <i class="fas fa-comments"></i> <!-- Assuming you're using FontAwesome for icons -->
      <span>Messages</span>
    </button>
    <button class="nav-item plus" @click="addNewItem">+</button>
    <button class="nav-item" @click="goToProfile">
      <i class="fas fa-user"></i> <!-- FontAwesome icon -->
      <span>Profile</span>
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

<style>
.bottom-nav {
  display: flex;
  justify-content: space-around; /* Changed to space-around for equal spacing */
  align-items: center; /* Vertically center the content */
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 1000;
  background-color: #333;
  color: white;
  padding: 10px 0;
}

.nav-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
  text-align: center;
  border: none;
  background: none;
  padding: 5px 0; /* Adjusted padding */
  font-size: 16px;
  transition: background-color 0.3s;
}

.nav-item i {
  font-size: 20px; /* Icon size */
  margin-bottom: 5px; /* Space between icon and text */
}

.nav-item.plus {
  font-size: 24px;
  color: #4CAF50;
}

.nav-item:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

/* Ensure text and icons are white */
.nav-item i,
.nav-item span {
  color: white;
}
</style>
