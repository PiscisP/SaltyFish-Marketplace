<template>
<div>
  <el-table :data="tableData" style="width: 100%">
    <el-table-column prop="id" label="id" />
    <el-table-column prop="name" label="求购者" />
    <el-table-column prop="goods" label="求购商品" />
    <el-table-column prop="address" label="地址" />
    <el-table-column prop="phone" label="电话号码" />
    <el-table-column prop="create_time" label="创建时间" />
    <el-table-column fixed="right" label="是否通过">
      <template #default="scope">
        <el-switch :active-value="1" :inactive-value="0"
                   active-text="是"
                   inactive-text="否"
                   v-model="scope.row.through" @change="onchange(scope.row.id,scope.row.through)" />
      </template>
    </el-table-column>
    <el-table-column fixed="right" label="操作">
      <template #default="scope">
        <el-popconfirm title="确认删除该求购吗？" @confirm="ondelete(scope.row.id,scope.row.userid,scope.row.goods)">
          <template #reference>
            <el-button type="text">删除求购</el-button>
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
import {onMounted, ref} from "vue"
import axios from "axios";
import {ElMessage} from "element-plus"
import {deepClone} from "../../../utils";

const tableData = ref([])


const init = async () => {
  await axios.get('http://localhost:5000/wantlist').then(response =>{
    tableData.value = deepClone(response.data.data)
    console.log(tableData.value)
  })
}

onMounted(()=>{
  init()
})

const onchange = async (id,through)=>{
  //
  await axios.post('http://localhost:5000/wantlist/update',{
    id,
    through
  }).then(response =>{
    if(response.data.code === 200){
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
  await axios.post('http://localhost:5000/wantlist/delete',{
    id:goodsid
  }).then(res=>{
    if(res.data.code === 200){
      ElMessage.success("删除成功")
      tableData.value = tableData.value.filter(v => v.id !== id);
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

const ondelete = async(id,userId,title) =>{
  dialogShow.value = true;
  userid = userId;
  goodsid = id;
  message.value = `删除求购：${title}原因：`
}

</script>

<style scoped>

</style>