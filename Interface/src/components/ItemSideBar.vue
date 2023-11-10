<template>
  <div class="item-sidebar">
    <div v-if="currentItem" class="item-details">
      <h3>{{ currentItem.name }}</h3>
      <p>{{ currentItem.description }}</p>
      <button @click="sendItemLink">Send Item Link</button>
    </div>
    <div v-else>
      <p>No item selected.</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentItem: null
    };
  },
  methods: {
    sendItemLink() {
      alert(`Link to the item '${this.currentItem.name}' has been sent.`);
    }
  }
};
</script>

<style scoped>
.item-sidebar {
  background-color: #f5f5f5;
  color: #333;
  margin: 0;
  padding: 10px;
  width: 16.66%;
  height: 100vh; /* Full viewport height */
  overflow-x: hidden;
  overflow-y: auto;
  border-left: 1px solid #ddd;
  box-sizing: border-box;
  flex-grow: 1;
}

.item-details {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
