<template>
<div style="flex: 1;background-color: white;padding: 20px">
  <el-card style="margin-bottom: 20px;">
    <div class="need-title">
      <div>Can't find the item you want? Ask for a purchase! And feel free to help them out </div>
      <div><el-button type="primary" @click="dialogVisible = true">Post want</el-button></div>
    </div>
  </el-card>
  <div class="need-box">
    <el-card v-for="(item,index) in list" :key="index">
      <div>{{ item.goods}}</div>
      <div>{{ item.address }}</div>
      <div style="color: #8c8c8c;font-size: 14px">{{ item.create_time }}</div>
      <template #header>
        <div class="need-footer">
          <div>{{ item.name }}</div>
          <div>
            <el-button type="primary" @click="help(item.phone)">Help</el-button>
          </div>
        </div>
      </template>
    </el-card>
  </div>

  <el-dialog
      v-model="dialogVisible"
      title="Post Want"
      width="30%"
  >
    <div>
      <el-form
          :model="needForm"
          :rules="rules"
          label-width="120px"
          size="large"
      >
        <el-form-item label="Item name" prop="name">
          <el-input v-model="needForm.name" placeholder="Please enter the name of the item, which can be described"  type="textarea" clearable/>
        </el-form-item>
        <el-form-item label="Contact person" prop="buyer">
          <el-input v-model="needForm.buyer" placeholder="Please enter a contact person" clearable/>
        </el-form-item>
        <el-form-item label="Trading Address" prop="address">
          <el-input v-model="needForm.address" placeholder="Please enter the transaction address" type="textarea"/>
        </el-form-item>
      </el-form>
    </div>
    <template #footer>
      <el-button type="primary" style="width: 100%" @click="onsubmit">publish</el-button>
    </template>
  </el-dialog>

</div>
</template>

<script setup>
import {onMounted, reactive, ref} from "vue"
import {copy} from "@/utils";
import axios from "axios";
import {userStore} from "@/store"
import {ElMessage} from "element-plus";
import {deepClone} from "../../utils";

const list = ref([])

const store = userStore();


const dialogVisible = ref(false)

const needForm = reactive({
  name: '',
  buyer: '',
  address: ''
})

const help = phone =>{
  copy(phone)
}

const rules = reactive({
  name: [
    {required: true, message: 'Please enter the name of the item', trigger: 'blur'}
  ],
  buyer: [{required: true, message: 'Please enter a contact person', trigger: 'blur',},],
  address: [
    {required: true, message: 'Please enter the transaction address', trigger: 'blur',},
  ]
})

const init = async () => {
  await axios.get('http://localhost:5000/wantlist').then(response =>{
    const data = deepClone(response.data.data)
    list.value = data.filter(item => item.through === 1);
    //aim.filter(item => item.name == name)
  })
}
init()

const onsubmit = async ()=>{
  await axios.post('http://localhost:5000/wantlist/create',{
    userid: store.userInfo[0].id,
    name: needForm.buyer,
    goods: needForm.name,
    address: needForm.address
  }).then(response =>{
    if(response.data.code === 200){
      ElMessage.success("Post succeed...")
    }else{
      ElMessage.error("Post fail")
    }
  }).catch(error=>{
    ElMessage.error("Post fail")
  }).finally(()=>{
    dialogVisible.value = false
  })
}

</script>

<style scoped>
.need-title,.need-footer{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.need-box {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 20px;
}

</style>