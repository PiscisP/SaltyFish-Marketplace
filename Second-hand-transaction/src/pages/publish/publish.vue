<template>
  <div style="flex: 1;padding: 20px;background-color: white;">
    <el-form
        :model="ruleForm"
        :rules="rules"
        label-width="120px"
        size="large"
    >
      <el-form-item label="商品图片" prop="img">
        <el-upload action="#" list-type="picture-card" :auto-upload="false" :limit="1" @remove="handleRemove" @change="onchange" >
          <el-icon>
            <Plus/>
          </el-icon>
        </el-upload>
      </el-form-item>
      <el-form-item label="商品名称" prop="name">
        <el-input v-model="ruleForm.name" placeholder="请输入商品名称" clearable/>
      </el-form-item>
      <el-form-item label="商品价格" prop="price">
        <el-input-number
            v-model="ruleForm.price"
            :min="0"
            controls-position="right"
            style="width: 100%"
        />
      </el-form-item>
      <el-form-item label="商品类型" prop="type">
        <el-radio-group v-model="ruleForm.type">
          <el-radio :label="item.type" v-for="(item,index) in classification.slice(1,10)" :key="index">{{
              item.title
            }}
          </el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="联系人" prop="seller">
        <el-input v-model="ruleForm.seller" placeholder="请输入联系人" clearable/>
      </el-form-item>
      <el-form-item label="交易地址" prop="address">
        <el-input v-model="ruleForm.address" placeholder="请输入交易地址" type="textarea"/>
      </el-form-item>
      <el-form-item label="商品描述" prop="desc">
        <el-input v-model="ruleForm.desc" placeholder="请输入商品描述" type="textarea"/>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm(ruleFormRef)" style="width: 100%">发布
        </el-button
        >
      </el-form-item>
    </el-form>

  </div>
</template>

<script setup>
import {reactive, ref} from 'vue'
import {ElMessage} from 'element-plus'
import {userStore} from "@/store"
import classification from '@/components/classification.json'
import {Plus} from '@element-plus/icons-vue'
import axios from "axios";

const store = userStore();


const handleRemove = file =>{
  console.log(file)
}
const getBase64 = (file)=> {
  return new Promise(function(resolve, reject) {
    let reader = new FileReader();
    let imgResult = "";
    reader.readAsDataURL(file);
    reader.onload = function() {
      imgResult = reader.result;
    };
    reader.onerror = function(error) {
      reject(error);
    };
    reader.onloadend = function() {
      resolve(imgResult);
    };
  });
}
const onchange = (file) =>{
  getBase64(file.raw).then(res => {
    ruleForm.image = res;
  })
}

let ruleForm = reactive({
  image: '',
  name: '',
  type: '',
  price: 0,
  seller: '',
  address: '',
  desc: '',
})

const rules = reactive({
  name: [
    {required: true, message: '请输入商品名称', trigger: 'blur'}
  ],
  price: [{required: true, message: '请输入商品价格', trigger: 'blur'}],
  type: [
    {required: true, message: '请选择商品类型', trigger: 'change',},
  ],
  seller: [{required: true, message: '请输入联系人', trigger: 'blur',},],
  address: [
    {required: true, message: '请输入交易地址', trigger: 'blur',},
  ],
  desc: [
    {required: true, message: '请输入商品秒速', trigger: 'blur'},
  ],
})

const submitForm = async () => {
  //
  await axios.post("http://localhost:5000/commodity",{
    userId: store.userInfo[0].id,
    seller: ruleForm.seller,
    phone: store.userInfo[0].phone,
    price: ruleForm.price,
    image: ruleForm.image,
    type: ruleForm.type,
    address: ruleForm.address,
    title: ruleForm.name,
    description: ruleForm.desc
  }).then(res=>{
    if(res.data.code === 200){
      ElMessage.success("发布成功！！待管理员审核...")
      ruleForm.seller = '';
      ruleForm.price = 0;
      ruleForm.type = '';
      ruleForm.address = '';
      ruleForm.name = '';
      ruleForm.desc = '';
    }
  }).catch(error=>{
    ElMessage.error("发布失败")
  })
}

</script>

<style scoped>

</style>