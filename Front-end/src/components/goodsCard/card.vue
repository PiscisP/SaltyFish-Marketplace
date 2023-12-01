<template>
  <div class="card-container">
    <el-card :body-style="{ padding: '0px' }" shadow="hover" v-for="(item,index) in props.list" :key="index">

      <img
          :src="item.image"
          style="width: 100%;height: 200px;"
      />
      <div style="padding: 14px">
        <span>{{ item.title }}</span>
        <!---<div>{{item.createAt}}</div>-->
        <div class="card-bottom">
          <div>${{ item.price }}</div>
          <el-button type="text" size="large" @click="store.goodsDetail(item,myself)">see details</el-button>
        </div>
        <el-button type="primary" style="width: 100%;" @click="emit('del-click',item.id)" v-if="props.myself">delete item</el-button>
      </div>
    </el-card>
  </div>
</template>

<script setup>
import {ref, defineProps,defineEmits, toRefs, onMounted} from "vue"
import {goodsStore} from "@/store";
import axios from "axios";
import {ElMessage} from "element-plus";

const store = goodsStore()
const props = defineProps({
  list: {
    type: Array,
    default: []
  },
  myself: {
    type: Boolean,
    default: false
  }
})
const emit = defineEmits(['del-click'])



</script>

<style scoped>
.card-container {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 20px;
}
.card-bottom{
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>