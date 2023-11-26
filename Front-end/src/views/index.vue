<template>
<div class="main-page">
    <MainNavBar />
    <!-- <BottomNavBar /> -->
    <div style="flex: 1;">
      <div class="carousel">
        <el-carousel height="300px">
          <el-carousel-item v-for="(item,index) in carouselList.slice(0,4)" :key="index">
            <div class="carousel-box">
              <img :src="item" alt="二手" style="width: 50%;height: 100%;"/>
              <img :src="carouselList[index+4]" alt="二手" style="width: 50%;height: 100%;"/>
            </div>
          </el-carousel-item>
        </el-carousel>
        <div class="index-body">
          <h1>推荐好物</h1>
          <y-card :list="listRecommend"></y-card>
        </div>
      </div>
    </div>
</div>
  </template>
  
  <script setup>
  import {deepClone, getImageUrl} from "../utils";
  import YCard from "@/components/goodsCard/card.vue"
  import {ref} from "vue";
  import {goodsStore} from "../store";
  import axios from "axios";
  
  const store = goodsStore()
  
  const listRecommend = ref([])
  
  const init = async ()=> {
    await axios.get('http://localhost:5000/commodity/all').then(response =>{
      const data = deepClone(response.data.data)
      listRecommend.value = data.filter(item=>(item.recommend===1&&item.isrelease === 1))
      console.log(listRecommend.value)
    })
  }
  init()
  
  
  const carouselList = [getImageUrl('/carousel1.png'), getImageUrl('/carousel2.png'), getImageUrl('/carousel3.png'), getImageUrl('/carousel4.png'),
    getImageUrl('/carousel5.png'), getImageUrl('/carousel6.png'), getImageUrl('/carousel7.png'), getImageUrl('/carousel8.png')]
  
  </script>
  
  <style scoped>
  
  .carousel-box {
    position: relative;
    height: 100%;
  }
  
  .index-body {
    margin-top: 20px;
  }
  
  .card-container {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-column-gap: 20px;
    grid-row-gap: 20px;
  }
  
  .card-bottom {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  
  /* .main-page {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh; 
   background: url("https://www.scu.edu/media/offices/umc/Mission-Exterior-01-1160x652.png") center center no-repeat;
   background-size: cover;  

  position: fixed;
} */

.main-page::before {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: url("https://www.scu.edu/media/offices/umc/Mission-Exterior-01-1160x652.png") center center no-repeat;
  background-size: cover; 
  background-attachment: fixed;
  opacity: 0.3;
  z-index: -1;
}

  
  </style>