<template>
  <div class="contact-bar">
    <div v-for="contact in contacts" :key="contact.id" @click="selectContact(contact)" class="contact">
      {{ contact.name }}
    </div>
    <div v-if="contacts.length === 0">
      <p>No contacts available.</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      contacts: [] // Populate this with your contacts data
    };
  },
  methods: {
    selectContact(contact) {
      this.$emit('contact-selected', contact);
    }
  }
};
</script>

<style scoped>
.contact-bar {
  background-color: #333;
  color: white;
  margin: 0;
  padding: 10px;
  width: 16.66%;
  height: 100vh; /* Full viewport height */
  overflow-x: hidden;
  overflow-y: auto;
  box-sizing: border-box;
}

.contact {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
