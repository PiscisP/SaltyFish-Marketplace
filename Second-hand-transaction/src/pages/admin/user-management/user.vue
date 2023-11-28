<template>
<div>
  <el-table :data="tableData" style="width: 100%">
    <el-table-column prop="id" label="id" />
    <el-table-column prop="username" label="账号" />
    <el-table-column prop="school" label="学校" />
    <el-table-column prop="phone" label="手机号" />
    <el-table-column prop="introduction" label="介绍" />
    <el-table-column prop="createAt" label="创建时间" />
    <el-table-column fixed="right" label="操作（是否封号）">
      <template #default="scope">
        <el-switch :active-value="1" :inactive-value="0"
                   active-text="是" inactive-text="否"
                   v-model="scope.row.gender" @change="onchange(scope.row.id,scope.row.gender)" />
      </template>
    </el-table-column>
  </el-table>
</div>
</template>

<script setup>
import {onMounted, ref} from "vue"
import axios from "axios";
import {ElMessage} from "element-plus"
import {deepClone} from "../../../utils";

const tableData = ref([])

onMounted(async ()=>{
  await axios.post('http://localhost:5000/users/all').then(res=>{
    tableData.value = deepClone(res.data.data);
  })
})

const onchange = async (id,val)=>{
  await axios.post('http://localhost:5000/users/update',{
    id,
    gender: val
  }).then(res=>{
    if(res.data.code === 200){
      ElMessage.success("更新成功")
    }else {
      ElMessage.error("更新失败")
    }
  }).catch(error=>{
    ElMessage.error("更新失败")
  })
}



</script>

<style scoped>

</style>