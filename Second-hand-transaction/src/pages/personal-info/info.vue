<template>
  <div>
    <el-card style="padding: 0">
      <template #header>
        <div class="header">
          <h3>个人信息</h3>
          <el-button type="text" size="large" @click="updateShow = true">修改</el-button>
        </div>
      </template>
      <div>账号：{{ store.userInfo[0]?.username }}</div>
      <div>学校：{{ userInfo[0].school || store.userInfo[0]?.school }}</div>
      <div>电话号码：{{ userInfo[0].phone || store.userInfo[0]?.phone }}</div>
      <div>介绍：{{ userInfo[0].introduction || store.userInfo[0]?.introduction }}</div>
      <el-tabs v-model="active" style="margin-top: 50px" @tab-click="handleClick">
        <el-tab-pane label="我的发布" :name="0">
          <el-tabs v-model="activeDetails1" tab-position="left" v-if="listPublish.length > 0">
            <el-tab-pane label="已通过" name="yi">
              <y-card :list="listPublish1" :myself="true" @del-click="deletePublish1"></y-card>
            </el-tab-pane>
            <el-tab-pane label="未通过" name="wei">
              <y-card :list="listPublish0" :myself="true" @del-click="deletePublish0"></y-card>
            </el-tab-pane>
          </el-tabs>

          <div v-if="listPublish.length === 0" style="text-align: center;">
            <img src="@/assets/images/no-goods.png" style="width: 200px;height: 200px" alt="">
            <p>您暂时还什么都没有发布哟</p>
          </div>
        </el-tab-pane>
        <el-tab-pane label="我的求购" :name="1">
          <el-tabs v-model="activeDetails2" tab-position="left" v-if="listWantToBuy.length > 0">
            <el-tab-pane label="已通过" name="yi">
              <div class="need-box">
                <el-card v-for="(item,index) in listWantToBuy1" :key="index">
                  <div>{{ item.goods }}</div>
                  <div>{{ item.address }}</div>
                  <div style="color: #8c8c8c;font-size: 14px">{{ item.create_time }}</div>
                  <template #header>
                    <div class="need-footer">
                      <div>{{ item.name }}</div>
                      <el-popconfirm title="确认删除该商品吗？" @confirm="ondelete(item.id)">
                        <template #reference>
                          <el-button type="text">删除</el-button>
                        </template>
                      </el-popconfirm>
                    </div>
                  </template>
                </el-card>
              </div>
            </el-tab-pane>
            <el-tab-pane label="未通过" name="wei">
              <div class="need-box">
                <el-card v-for="(item,index) in listWantToBuy0" :key="index">
                  <div>{{ item.goods }}</div>
                  <div>{{ item.address }}</div>
                  <div style="color: #8c8c8c;font-size: 14px">{{ item.create_time }}</div>
                  <template #header>
                    <div class="need-footer">
                      <div>{{ item.name }}</div>
                      <el-popconfirm title="确认删除该商品吗？" @confirm="ondelete(item.id)">
                        <template #reference>
                          <el-button type="text">删除</el-button>
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
            <p>您暂时还什么都没有发布哟</p>
          </div>
        </el-tab-pane>
        <el-tab-pane label="我的信息" :name="2">
          <el-timeline>
            <el-timeline-item :timestamp="item.create_time" placement="top" v-for="(item,index) in messageList"
                              :key="item.id">
              <el-card>
                <p>{{ item.text }}</p>
                <el-button type="text" @click="onDeleteMessage(item.id)">删除信息</el-button>
              </el-card>
            </el-timeline-item>
            <el-timeline-item placement="top" v-if="messageList.length === 0">
              <el-card>
                <p>暂无消息...</p>
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
        <h2>修改个人信息</h2>
      </template>
      <div>
        <el-form :model="updateForm" label-width="120px" size="large">
          <el-form-item label="学校" prop="school">
            <el-input v-model="updateForm.school" placeholder="请输入学校" clearable/>
          </el-form-item>
          <el-form-item label="电话号码" prop="phone">
            <el-input v-model="updateForm.phone" placeholder="请输入电话号码" clearable/>
          </el-form-item>
          <el-form-item label="个人介绍" prop="introduction">
            <el-input v-model="updateForm.introduction" placeholder="请输入个人介绍" clearable/>
          </el-form-item>
        </el-form>
      </div>
      <template #footer>
        <el-button type="primary" @click="UserInfoSubmit" size="large" style="width: 100%">保存</el-button>
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
  await axios.post('http://localhost:5000/users/message', {
    id: store.userInfo[0].id
  }).then(response => {
    const data = deepClone(response.data.data)
    messageList.value = data
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

const updateShow = ref(false)
const updateForm = reactive({
  school: store.userInfo[0]?.school,
  phone: store.userInfo[0]?.phone,
  introduction: store.userInfo[0]?.introduction
})
const UserInfoSubmit = async () => {
  await axios.post("http://localhost:5000/users/updateuserinfo", {
    id: store.userInfo[0].id,
    school: updateForm.school,
    phone: updateForm.phone,
    introduction: updateForm.introduction
  }).then(res => {
    if (res.data.code === 200) {
      ElMessage.success("更新成功")
      userInfo.value = [{
        age: store.userInfo[0].age,
        createAt: store.userInfo[0].createAt,
        gender: store.userInfo[0].gender,
        id: store.userInfo[0].id,
        introduction: updateForm.introduction,
        password: store.userInfo[0].password,
        phone: updateForm.phone,
        school: updateForm.school,
        updateAt: store.userInfo[0].updateAt,
        username: store.userInfo[0].username
      }];
      store.updateUserInfo(userInfo.value)
    } else {
      ElMessage.error("更新失败")
    }
  }).catch(error => {
    ElMessage.error("更新失败")
  }).finally(() => {
    updateShow.value = false;
  })
}


const active = ref(0)
const activeDetails1 = ref('yi')
const activeDetails2 = ref('yi')
// gstore.allList.filter(item => item.userId === store.userInfo[0].id)
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
      ElMessage.success("删除成功")
      alert(1)
      list.value = list.value.filter(v => v.id !== id)
    }else {
      ElMessage.error("删除失败")
    }
  }).catch(error=>{
    ElMessage.error("删除失败")
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
      ElMessage.success("删除成功")
      if (activeDetails2.value === 'yi') {
        listWantToBuy1.value = listWantToBuy1.value.filter(v => v.id !== id);
      }
      if (activeDetails2.value === 'wei') {
        listWantToBuy0.value = listWantToBuy0.value.filter(v => v.id !== id);
      }
      // tableData.value = tableData.value.filter(v => v.id !== id);
    } else {
      ElMessage.error("删除失败")
    }
  }).catch(error => {
    ElMessage.error("删除失败")
  })
}

const messageList = ref([])

const onDeleteMessage = async (id) => {
  await axios.post('http://localhost:5000/users/message/delete', {
    id
  }).then(response => {
    if (response.data.code === 200) {
      ElMessage.success("删除成功")
      messageList.value = messageList.value.filter(v => v.id !== id);
    }
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