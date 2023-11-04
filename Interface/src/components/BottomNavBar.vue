<template>
  <div class="bottom-nav">
    <button class="nav-item" @click="goToMessages">Messages</button>
    <button class="nav-item plus" @click="addNewItem">+</button>
    <button class="nav-item" @click="goToProfile">Profile</button>
  </div>
</template>

<script>
export default {
  name: 'BottomNavBar',
  methods: {
    goToMessages() {
      // Logic to go to messages
      // this.$router.push({ name: 'Messages' });
    },
    addNewItem() {
      // Logic to add a new item
      // For example, open a modal or a new page
    },
    goToProfile() {
      // Logic to go to the user's profile
      // this.$router.push({ name: 'Profile' });
    }
  }
}
</script>

<style>
.bottom-nav {
  display: flex;
  justify-content: space-between;
  width: 100%; /* Ensure the nav takes full width */
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 1000; /* Ensure the nav is above other content */
  background-color: #333;
  color: white;
  padding: 10px 0;
}

.nav-item {
  flex-grow: 1; /* Grow to fill the container */
  text-align: center;
  border: none;
  background: none;
  padding: 10px 20px;
  font-size: 16px;
  transition: background-color 0.3s; /* Smooth transition for hover effect */
}

.nav-item.plus {
  font-size: 24px;
  color: #4CAF50; /* Example color for the plus sign */
}

/* Optional: Add some hover effect */
.nav-item:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
</style>
