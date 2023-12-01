<template>
  <div>
    <el-card style="padding: 0">
      <template #header>
        <div class="header">
          <h3>Personal Info</h3>
          <el-button type="text" size="large" @click="updateShow = true">Edit</el-button>
        </div>
      </template>
      <div>Username: {{ store.userInfo[0]?.username }}</div>
      <div>School: {{ userInfo[0].school || store.userInfo[0]?.school }}</div>
      <div>Phone: {{ userInfo[0].phone || store.userInfo[0]?.phone }}</div>
      <div>Description: {{ userInfo[0].introduction || store.userInfo[0]?.introduction }}</div>
      <el-tabs v-model="active" style="margin-top: 50px" @tab-click="handleClick">
        <el-tab-pane label="My post" :name="0">
          <el-tabs v-model="activeDetails1" tab-position="left" v-if="listPublish.length > 0">
            <el-tab-pane label="Approved" name="yi">
              <y-card :list="listPublish1" :myself="true" @del-click="deletePublish1"></y-card>
            </el-tab-pane>
            <el-tab-pane label="Denied" name="wei">
              <y-card :list="listPublish0" :myself="true" @del-click="deletePublish0"></y-card>
            </el-tab-pane>
          </el-tabs>

          <div v-if="listPublish.length === 0" style="text-align: center;">
            <img src="@/assets/images/no-goods.png" style="width: 200px;height: 200px" alt="">
            <p>You have not posted anything</p>
          </div>
        </el-tab-pane>
        <el-tab-pane label="My wants" :name="1">
          <el-tabs v-model="activeDetails2" tab-position="left" v-if="listWantToBuy.length > 0">
            <el-tab-pane label="Approved" name="yi">
              <div class="need-box">
                <el-card v-for="(item,index) in listWantToBuy1" :key="index">
                  <div>{{ item.goods }}</div>
                  <div>{{ item.address }}</div>
                  <div style="color: #8c8c8c;font-size: 14px">{{ item.create_time }}</div>
                  <template #header>
                    <div class="need-footer">
                      <div>{{ item.name }}</div>
                      <el-popconfirm title="Confirm delete?" @confirm="ondelete(item.id)">
                        <template #reference>
                          <el-button type="text">Delete</el-button>
                        </template>
                      </el-popconfirm>
                    </div>
                  </template>
                </el-card>
              </div>
            </el-tab-pane>
            <el-tab-pane label="Denied" name="wei">
              <div class="need-box">
                <el-card v-for="(item,index) in listWantToBuy0" :key="index">
                  <div>{{ item.goods }}</div>
                  <div>{{ item.address }}</div>
                  <div style="color: #8c8c8c;font-size: 14px">{{ item.create_time }}</div>
                  <template #header>
                    <div class="need-footer">
                      <div>{{ item.name }}</div>
                      <el-popconfirm title="Confirm delete?" @confirm="ondelete(item.id)">
                        <template #reference>
                          <el-button type="text">Delete</el-button>
                        </template>
                      </el-popconfirm>
                    </div>
                  </template>
                </el-card>
              </div>
            </el-tab-pane>
          </el-tabs>
          <div v-if="listWantToBuy.length === 0" style="text-align: center;">
            <img src="@/assets/images/no-goods.png" style="width: 200px;height: 200px" alt="">
            <p>You have not posted anything</p>
          </div>
        </el-tab-pane>
        <el-tab-pane label="My info" :name="2">
          <el-timeline>
            <el-timeline-item :timestamp="item.create_time" placement="top" v-for="(item,index) in messageList"
                              :key="item.id">
              <el-card>
                <p>{{ item.text }}</p>
                <el-button type="text" @click="onDeleteMessage(item.id)">Delete info</el-button>
              </el-card>
            </el-timeline-item>
            <el-timeline-item placement="top" >
              <el-card>
                <p>No info yet...</p>
              </el-card>
            </el-timeline-item>
          </el-timeline>

        </el-tab-pane>
      </el-tabs>
    </el-card>


    <el-dialog
        v-model="updateShow"
        width="50%"
    >
      <template #title>
        <h2>Edit personal info</h2>
      </template>
      <div>
        <el-form :model="updateForm" label-width="120px" size="large">
          <el-form-item label="School" prop="school">
            <el-input v-model="updateForm.school" placeholder="Please enter your school" clearable/>
          </el-form-item>
          <el-form-item label="Phone" prop="phone">
            <el-input v-model="updateForm.phone" placeholder="Please enter your phone number" clearable/>
          </el-form-item>
          <el-form-item label="Personal info" prop="introduction">
            <el-input v-model="updateForm.introduction" placeholder="Please enter your personal info" clearable/>
          </el-form-item>
        </el-form>
      </div>
      <template #footer>
        <el-button type="primary" @click="UserInfoSubmit" size="large" style="width: 100%">Save</el-button>
      </template>
    </el-dialog>

  </div>
</template>

<script setup>
import {onMounted, reactive, ref} from "vue"
import {userStore, goodsStore} from "../../store";
import YCard from "@/components/goodsCard/card.vue";
import axios from "axios";
import {ElMessage} from "element-plus";
import {deepClone} from "../../utils";

const store = userStore()
const gstore = goodsStore()


const init = async () => {
  await axios.get('http://localhost:5000/wantlist').then(response => {
    const data = deepClone(response.data.data)
    listWantToBuy.value = data.filter(item => item.userid === store.userInfo[0].id)
    listWantToBuy1.value = data.filter(item => (item.userid === store.userInfo[0].id && item.through === 1))
    listWantToBuy0.value = data.filter(item => (item.userid === store.userInfo[0].id && item.through === 0))
  })
  await axios.get('http://localhost:5000/commodity/all').then(response => {
    const data = deepClone(response.data.data)
    listPublish.value = data.filter(item => item.userId === store.userInfo[0].id)
    listPublish1.value = listPublish.value.filter(item => (item.isrelease === 1))
    listPublish0.value = listPublish.value.filter(item => (item.isrelease === 0))
  })
}
init()


const userInfo = ref([{
  age: store.userInfo[0].age,
  createAt: store.userInfo[0].createAt,
  gender: store.userInfo[0].gender,
  id: store.userInfo[0].id,
  introduction: store.userInfo[0].introduction,
  password: store.userInfo[0].password,
  phone: store.userInfo[0].phone,
  school: store.userInfo[0].school,
  updateAt: store.userInfo[0].updateAt,
  username: store.userInfo[0].username
}])



const active = ref(0)
const activeDetails1 = ref('yi')
const activeDetails2 = ref('yi')
const listPublish = ref([])
const listPublish1 = ref([])
const listPublish0 = ref([])
const handleClick = (tab, event) => {
  console.log(tab, event)
}
const deletePublish = async (id)=>{
  await axios.post('http://localhost:5000/commodity/delete',{
    id
  }).then(res=>{
    if(res.data.code === 200){
      ElMessage.success("Delete succeed")
      // alert(1)
      list.value = list.value.filter(v => v.id !== id)
    }else {
      ElMessage.error("Delete fail")
    }
  })
}
const deletePublish1 = id =>{
  listPublish1.value = listPublish1.value.filter(v => v.id !== id)
  deletePublish(id)
}
const deletePublish0 = id =>{
  listPublish0.value = listPublish0.value.filter(v => v.id !== id)
  deletePublish(id)
}

const listWantToBuy = ref([])
const listWantToBuy1 = ref([])
const listWantToBuy0 = ref([])

const ondelete = async (id) => {
  await axios.post('http://localhost:5000/wantlist/delete', {
    id
  }).then(res => {
    if (res.data.code === 200) {
      ElMessage.success("Delete succeed")
      if (activeDetails2.value === 'yi') {
        listWantToBuy1.value = listWantToBuy1.value.filter(v => v.id !== id);
      }
      if (activeDetails2.value === 'wei') {
        listWantToBuy0.value = listWantToBuy0.value.filter(v => v.id !== id);
      }
    } else {
      ElMessage.error("Delete fail")
    }
  }).catch(error => {
    ElMessage.error("Delete fail")
  })
}



</script>

<style scoped>

.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.need-box {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 20px;
}

.need-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

</style>