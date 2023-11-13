<template>
  <div class="chatbox">
    <div v-if="currentContact" class="messages">
      <div v-for="message in filteredMessages" :key="message.id" class="message">
        <span>{{ message.sender }}:</span> {{ message.text }}
      </div>
    </div>
    <div v-else class="no-contact">
      <p>Select a contact to start chatting.</p>
    </div>
    <div class="message-input">
      <input type="text" v-model="newMessage" placeholder="Type a message..." @keyup.enter="sendMessage" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    currentContact: {
      type: Object,
      default: () => null
    }
  },
  data() {
    return {
      newMessage: '',
      messages: [] // This should ideally come from a store or API
    };
  },
  computed: {
    filteredMessages() {
      return this.messages.filter(msg => msg.contactId === this.currentContact?.id);
    }
  },
  methods: {
    sendMessage() {
      if (!this.newMessage.trim()) return;
      this.messages.push({
        id: Date.now(),
        text: this.newMessage,
        sender: 'You',
        contactId: this.currentContact.id
      });
      this.newMessage = '';
    }
  }
};
</script>

<style scoped lang="less">
.chatbox {
  display: flex;
  flex-direction: column;
  height: 100%;
  /* Add more styles as needed */
}
</style>
