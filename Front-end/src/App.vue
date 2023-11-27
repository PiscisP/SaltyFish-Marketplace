<script setup>
import {ChatDotSquare,Search} from '@element-plus/icons-vue'
import YFooter from "./components/bars/footer.vue"
import YHeader from "./components/bars/header.vue"
import {goodsStore} from "./store";
import {copy, deepClone} from "./utils"
import {onMounted, ref} from "vue";
import axios from "axios";
import {ElMessage} from "element-plus";
const bigImg = ref(false)


const store = goodsStore()

const wantClick = ()=>{
  copy(store.goodsInfo.phone)
}
</script>

<template>
<router-view v-if="$route.meta.isLogin"></router-view>
  <router-view v-if="$route.meta.isAdmin"></router-view>
  <div v-else>
    <el-container style="min-height: 100vh">
      <el-header style="padding: 0;">
        <y-header v-if="!$route.meta.isLogin"></y-header>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
      <el-footer style="padding: 0;height: auto;">
        <y-footer></y-footer>
      </el-footer>
    </el-container>
    </div>

    <el-dialog
      v-model="store.goodsInfoShow"
      width="50%"
  >   
<template #title>
    <div class="dialog-title">
      <h1>Item Details</h1>
    </div>
</template>
</el-dialog>
 
    <el-dialog
      v-model="store.goodsInfoShow"
      width="50%"
  > 
  
    <div>
      <el-card :body-style="{ padding: '0px' }" shadow="never">
        <div class="app-card-body">
          <div style="position: relative">
            <!-- <div class="app-enlarge">
              <el-button type="text" :icon="Search" @click="bigImg = true">点击查看大图</el-button>
            </div> -->
            <img
                :src="store.goodsInfo.image"
                style="height: 100%;width: 300px;"
            />
          </div>
          <div style="padding: 14px">
            <h3>{{ store.goodsInfo.seller }}</h3>
            <div>
              {{ store.goodsInfo.description }}
            </div>
            <div style="color: red">￥{{ store.goodsInfo.price }}</div>
            <div>{{ store.goodsInfo.address }}</div>
            <div>{{ store.goodsInfo.phone }}</div>
            <div>{{ store.goodsInfo.seller }}</div>
            <div>{{ store.goodsInfo.createAt }}</div>
          </div>
        </div>
      </el-card>
    </div>
    <template #footer>
      <div class="app-dialog-footer" v-if="!store.myself">
        <span style="color: red;text-align:left;">Notice: In-person trading only! Click "I want" to copy the infomation of the seller</span>
        <el-button :icon="ChatDotSquare" round @click="wantClick">I want</el-button>
      </div>
    </template>
  </el-dialog>

  <el-backtop :right="100" :bottom="150"/> 
 </template>




<style scoped>
* {
  margin: 0;
  padding: 0;
}

.app-card-body {
  display: flex;
  
}

.app-card-card > img {
  width: 200px;
  height: 200px;
  
}

.app-dialog-footer{
  text-align: center;
  display: flex;
  align-items: center;
  justify-content:space-between;
  
}

/* .app-enlarge{
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 40px;
  line-height: 40px;
  text-align: center;
 } */



.el-main{
  display: flex;
  padding:0%;
}
</style>