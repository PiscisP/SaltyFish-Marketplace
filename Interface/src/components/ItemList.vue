<template>
  <div class="item-list">
    <!-- Sample item -->
    <div class="item">
      <img src="sample-item.jpg" alt="Item">
      <p>Item Name</p>
    </div>
    <!-- Repeat for other items -->
  </div>
</template>

<script>
export default {
  name: 'ItemList'
}
</script>

<style>
.item-list .item {
  width: 100px;
  margin: 10px;
  text-align: center;
}

.item-list .item img {
  width: 100%;
}
</style>
