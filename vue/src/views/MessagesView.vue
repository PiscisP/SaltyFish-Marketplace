<template>
  <div class="main-container">
    <MainNavBar />
    <div class="messages-view">
      <ContactBar @contact-selected="handleContactSelected" />
      <ChatBox :current-contact="currentContact" />
      <ItemSideBar />
    </div>
  </div>
</template>

<script>
import MainNavBar from '@/components/MainNavBar.vue';
import ContactBar from '../components/ContactBar.vue';
import ChatBox from '../components/ChatBox.vue';
import ItemSideBar from '../components/ItemSideBar.vue';

export default {
  components: {
    ContactBar,
    ChatBox,
    ItemSideBar,
    MainNavBar
  },
  data() {
    return {
      currentContact: null
    };
  },
  methods: {
    handleContactSelected(contact) {
      this.currentContact = contact;
    }
  }
};
</script>

<style scoped lang="less">
.main-container {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.messages-view, .messages-view * {
  margin: 0;
  padding: 0;
  box-sizing: border-box; /* Ensures padding does not affect overall width */
}

.messages-view {
  display: flex;
  height: 100vh;
  width: 100vw;
  flex-grow: 1;
}

.contact-bar, .item-sidebar {
  flex: 0 0 16.66%;
}

.chatbox {
  flex: 0 0 66.66%;
}
</style>