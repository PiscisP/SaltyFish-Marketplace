<template>
<div class="admin">
  <div class="admin-nav">
    <div style="width: 300px;height: 60px;">
      <img src="@/assets/logo.png" alt="" style="height: 100%">
    </div>
    <el-menu
        :default-active="$route.name"
        style="flex: 1;"
        mode="horizontal"
        @select="handleSelect"
    >
      <el-menu-item index="user">用户管理</el-menu-item>
      <el-menu-item index="goods">商品管理</el-menu-item>
      <el-menu-item index="want">求购管理</el-menu-item>
    </el-menu>
    <div class="admin-r">
      <el-avatar :src="`https://q1.qlogo.cn/g?b=qq&s=100&nk=${qq}`" />
      <el-button type="text" @click="logout">退出登录</el-button>
    </div>
  </div>
  <div style="padding: 20px">
    <router-view></router-view>
  </div>
</div>
</template>

<script setup>
import {ref} from "vue"
import {useRouter} from "vue-router"
import axios from "axios";
const {push} = useRouter();

const active = ref('1')
const handleSelect = (key, keyPath) => {
  push(`/admin/${key}`)
}

const init = async ()=>{
  await axios.post('http://localhost:5000/admin/del').then(res => {
    console.log(res)
  })
}
init();

const qq=sessionStorage.getItem('admin')


const logout = ()=>{
  sessionStorage.removeItem('admin')
  push('/login')
}

</script>

<style scoped>

.admin-nav{
  display: flex;
  align-items: center;
  background-color: white;
}
.admin-r{
  width: 300px;
  display: flex;
  align-items: center;
  justify-content: space-around;
}

</style>