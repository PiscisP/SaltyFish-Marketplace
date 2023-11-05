<template>
  <div class="messages-view">
    <!-- Message list -->
    <div class="message-list">
      <div class="message" v-for="message in messages" :key="message.id" :class="{ 'sender': message.isSender, 'receiver': !message.isSender }">
        <div class="message-bubble">
          <div class="message-text">{{ message.text }}</div>
          <div class="message-time">{{ message.time }}</div>
        </div>
      </div>
    </div>

    <!-- Message input area -->
    <div class="message-input">
      <input type="text" v-model="newMessage" placeholder="Type a message..." @keyup.enter="sendMessage" />
      <button @click="sendMessage">Send</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MessagesView',
  data() {
    return {
      newMessage: '',
      messages: [], // Start with an empty array
    };
  },
  methods: {
    sendMessage() {
      if (this.newMessage.trim() !== '') {
        // Add new message to messages array
        const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        this.messages.push({
          id: this.messages.length + 1,
          text: this.newMessage,
          time: currentTime,
          isSender: true, // Assuming the user is always the sender
        });
        this.newMessage = ''; // Reset input field
      }
    },
  },
};
</script>

<style scoped>
.messages-view {
  display: flex;
  flex-direction: column;
  width: 100%; /* Take up all available width */
  max-width: 100%; /* Ensure it doesn't overflow */
  height: 100vh; /* Full viewport height */
  background-color: #f9f9f9; /* Background color */
  margin: 0; /* Reset any default margins */
  padding: 0; /* Reset any default padding */
}

.message-list {
  flex-grow: 1;
  overflow-y: auto;
  padding: 10px;
  height: 100%; /* Take up all available height */
  width: 100%;
}

/* ... rest of your styles ... */

.message-input {
  display: flex;
  padding: 10px;
  background-color: #fff;
  border-top: 1px solid #ccc;
}

/* ... rest of your styles for message-input ... */

</style>
