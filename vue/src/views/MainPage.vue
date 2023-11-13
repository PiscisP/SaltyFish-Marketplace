<template>
  <div class="main-page">
    <MainNavBar />
    <BottomNavBar />
    <div class="items-grid">
      <button 
        v-for="item in items" 
        :key="item.id" 
        class="item-button" 
        @click="goToItemDetail(item.id)"
      >
        {{ item.name }}
      </button>
    </div>
  </div>
</template>

<script>

import BottomNavBar from '@/components/BottomNavBar.vue'; 
import MainNavBar from '@/components/MainNavBar.vue';

export default {
  name: 'MainPage',
  components: {
    //SearchBar,
    BottomNavBar,
    MainNavBar,
},
  data() {
    return {
      items: [
        // Populate this array with items. Each item should have an id and name.
        // Example: { id: 1, name: 'Item 1' }, { id: 2, name: 'Item 2' }, ...
      ]
    };
  },
  methods: {
    goToItemDetail(itemId) {
      // Navigate to the ItemDetail page with the item's id
      this.$router.push({ name: 'ItemDetail', params: { id: itemId } });
    }
  }
}
</script>

<style scoped lang="less">
html, body {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
  overflow: hidden; /* to prevent any unwanted scrolling */
}
.main-page {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh; /* Use the full height of the viewport */
  /* background: url("~@/Background/SCU1.png") center center no-repeat;
  background-size: cover; */
  position: fixed;
}

.main-page::before {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: url("~@/Background/SCU1.png") center center no-repeat;
  background-size: cover;
  opacity: 0.3; /* Adjust the transparency level */
  z-index: -1;  /* Place it behind the content */
}

.items-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* Creates a 4-column grid */
  gap: 10px; /* Adjust the gap between items as needed */
  padding: 10px;
  overflow: auto; /* Allows scrolling if content overflows */
  margin-top: 0; 
  flex-grow: 1; /* Allows the grid to grow and fill available space */
}

.item-button {
  padding: 10px;
  //border: 1px solid #ccc;
  border-radius: 4px;
  //background-color: #f9f9f9;
  cursor: pointer;
  transition: background-color 0.3s;
}

.item-button:hover {
  background-color: #eaeaea;
}
</style>

