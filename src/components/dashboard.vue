<template>
    <div class="dashboard">
      <user-profile></user-profile>
      <search-bar></search-bar>
      <chat-section></chat-section>
      <items-section></items-section>
      <sell-item-section></sell-item-section>
    </div>
  </template>
  
  <script>
  import UserProfile from './UserProfile.vue';
  import SearchBar from './SearchBar.vue';
  import ChatSection from './ChatSection.vue';
  import ItemsSection from './ItemsSection.vue';
  import SellItemSection from './SellItemSection.vue';
  
  export default {
    components: {
      UserProfile,
      SearchBar,
      ChatSection,
      ItemsSection,
      SellItemSection
    },
    data() {
      return {
        // your data here
      };
    },
    methods: {
      // your methods here
    }
  };
  </script>
  
  <style scoped>
  .dashboard {
    /* your styles here */
  }
  </style>
  