<template>
  <div>
    <el-table :data="tableData" border height="calc(100vh - 100px)" style="width: 100%;">
      <el-table-column prop="id" label="id" width="80px" />
      <el-table-column prop="title" label="商品名称" />
      <el-table-column prop="description" label="商品描述" />
      <el-table-column label="商品图片" width="200px">
        <template #default="scope">
          <img :src="scope.row.image" style="width: 180px;" alt="">
        </template>
      </el-table-column>
      <el-table-column prop="price" label="商品价格" />
      <el-table-column prop="phone" label="手机号" />
      <el-table-column prop="address" label="地址" />
      <el-table-column prop="type" label="类型" >
        <template #default="scope">
          {{ types(scope.row.type) }}
        </template>
      </el-table-column>
      <el-table-column prop="createAt" label="创建时间" />
      <el-table-column fixed="right" label="是否推荐">
        <template #default="scope">
          <el-switch :active-value="1" :inactive-value="0"
                     active-text="是" inactive-text="否"
                     v-model="scope.row.recommend" @change="onchangeRecommend(scope.row.id,scope.row.recommend)" />
        </template>
      </el-table-column>
      <el-table-column fixed="right" label="是否发布">
        <template #default="scope">
          <el-switch :active-value="1" :inactive-value="0"
                     active-text="是" inactive-text="否"
                     v-model="scope.row.isrelease" @change="onchangeRelease(scope.row.id,scope.row.isrelease)" />
        </template>
      </el-table-column>
      <el-table-column fixed="right" label="操作">
        <template #default="scope">
          <el-popconfirm title="确认删除该商品吗？" @confirm="ondelete(scope.row.id,scope.row.userId,scope.row.title)">
            <template #reference>
              <el-button type="text">删除商品</el-button>
            </template>
          </el-popconfirm>
        </template>
      </el-table-column>
    </el-table>


    <el-dialog
        v-model="dialogShow"
        width="50%"
    >
      <template #title>
        <h2>删除原因</h2>
      </template>
      <div>
        <el-input v-model="message" type="textarea" placeholder="请输入删除原因" clearable/>
      </div>
      <template #footer>
        <el-button type="primary" @click="messageSubmit" size="large" style="width: 100%">发送</el-button>
      </template>
    </el-dialog>

  </div>
</template>

<script setup>
import {computed, onMounted, ref} from "vue"
import axios from "axios";
import {ElMessage} from "element-plus"
import {deepClone} from "../../../utils";

const tableData = ref([])

onMounted(async ()=>{
  await axios.get('http://localhost:5000/commodity/all').then(res=>{
    tableData.value = deepClone(res.data.data);
  })
})

const types = computed(()=>{
  return types=>{
    switch (types){
      case "1":
        return "数码/办公"
      case "2":
        return "运动/户外"
      case "3":
          return "书籍/学习"
      case "4":
        return "乐器/美术"
      case "5":
        return "游戏/模型"
      case "6":
        return "生活/家居"
      case "7":
        return "文具/箱包"
      case "8":
        return "服装/饰品"
      case "9":
        return "美妆/清洁"
      case "10":
        return "食品/零食"
    }
  }
})

const onchangeRecommend = async (id,val)=>{
  await axios.post('http://localhost:5000/commodity/update/recommend',{
    id,
    recommend: val
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
const onchangeRelease = async (id,val)=>{
  await axios.post('http://localhost:5000/commodity/update/isrelease',{
    id,
    isrelease: val
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

let goodsid = null;
let userid = null;
const dialogShow = ref(false)
const message = ref('')
const messageSubmit = async ()=>{
  await axios.post('http://localhost:5000/commodity/delete',{
    id: +goodsid
  }).then(res=>{
    if(res.data.code === 200){
      ElMessage.success("删除成功")
      tableData.value = tableData.value.filter(v => v.id !== goodsid);
    }else {
      ElMessage.error("删除失败")
    }
  }).catch(error=>{
    ElMessage.error("删除失败")
  })
  await axios.post('http://localhost:5000/users/message/create',{
    userid: userid,
    message: message.value
  }).then(res=>{
    if(res.data.code === 200){
      ElMessage.success("发送成功")
    }else {
      ElMessage.error("发送失败")
    }
  }).catch(error=>{
    ElMessage.error("发送失败")
  })
  dialogShow.value = false;
}
const ondelete = async (id,userId,title)=>{
  dialogShow.value = true;
  userid = userId;
  goodsid = id;
  message.value = `删除商品：${title}原因：`
}


</script>

<style scoped>

</style>