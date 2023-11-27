<template>
    <div class="header">
      <el-menu
          :default-active="$route.name"
          mode="horizontal"
          @select="handleSelect"
          style="height: 100%;"
      >
        <!-- <div class="logo-box">
          <img src="@/assets/logo.png" alt="logo"/>
        </div> -->
        <el-menu-item index="home">
          <el-icon>
            <house/>
          </el-icon>
          home
        </el-menu-item>
        <el-menu-item index="class">
          <el-icon>
            <search/>
          </el-icon>
          search
        </el-menu-item>
        <el-menu-item index="publish">
          <el-icon>
            <plus/>
          </el-icon>
          sell
        </el-menu-item>
        <el-menu-item index="want_to_buy">
          <el-icon>
            <shopping-cart/>
          </el-icon>
          shopping-cart
        </el-menu-item>
      </el-menu>
      <div class="user">
        <div>
          <el-popover
              :width="300"
              popper-style="box-shadow: rgb(14 18 22 / 35%) 0px 10px 38px -10px, rgb(14 18 22 / 20%) 0px 10px 20px -15px; padding: 20px;"
          >
            <template #reference>
              <el-icon @click="toInfo">
                <user/>
              </el-icon>
            </template>
            <div>
              <h3>Account Details：</h3>
              <div>Account Name：{{store.userInfo[0]?.username}}</div>
              <div>Email：{{store.userInfo[0]?.phone}}</div>
              <div>Description：{{store.userInfo[0]?.introduction}}</div>
              <div style="text-align: right;" type="text"><el-button type="primary" @click="logout">log out</el-button></div>
            </div>
          </el-popover>
        </div>
      </div>
  
  
    </div>
  </template>
  
  <script setup>
  import {reactive, ref, computed, onMounted , nextTick} from "vue";
  import {useRoute, useRouter} from "vue-router"
  import {ElMessage} from 'element-plus'
  import {userStore} from "../../store";
  import {House, Search, Plus, Aim, ShoppingCart, User, Lock, School} from '@element-plus/icons-vue'
  import axios from "axios"
  
  const store = userStore()
  
  const {push} = useRouter();
  
  const loading = ref(false)
  
  const isLogin = ref(false)
  
  
  const username = ref('用户')
  
  const handleSelect = (k) => {
    push('/' + k)
  }
  const logout = ()=>{
    store.loginOut();
    push('/login')
  }
  
  const toInfo = ()=>{
    push('/info')
  }
  
  </script>
  
  <style scoped>
  
  .header {
    position: relative;
    width: 100%;
    height: 100%;
    background-color: white;
  }
  
  .logo-box {
    position: relative;
    width: 200px;
    height: 100%;
  }
  
  .logo-box > img {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
  }
  
  .header-r {
    display: flex;
    align-items: center;
  }
  
  .user {
    position: absolute;
    right: 100px;
    top: 0;
    height: 100%;
    display: flex;
    align-items: center;
  }
  
  .dialog-title {
    display: flex;
    justify-content: space-between;
  }
  
  </style>