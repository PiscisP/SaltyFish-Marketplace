<template>
  <div>
    <el-card style="padding: 0">
      <template #header>
        <div class="header">
          <h3>Personal Info</h3>
          <el-button type="text" size="large" @click="updateShow = true">Edit</el-button>
        </div>
      </template>
      <div>Username: {{ userInfo.username }}</div>
      <div>Email: {{ userInfo.email }}</div>
      <div>
        <el-input v-model="userInfo.school" placeholder="School"></el-input>
      </div>
      <div>
        <el-input v-model="userInfo.phone" placeholder="Phone"></el-input>
      </div>
      <el-button @click="updateUserInfo">Update Info</el-button>
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
            <p>You havent post anything</p>
          </div>
        </el-tab-pane>
        <el-tab-pane label="Wishlist" :name="1">
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
                      <el-popconfirm title="Confirm delete" @confirm="ondelete(item.id)">
                        <template #reference>
                          <el-button type="text">delete</el-button>
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
                          <el-button type="text">delete</el-button>
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
            <p>You haven't post anything</p>
          </div>
        </el-tab-pane>
        <el-tab-pane label="My info" :name="2">
          <el-timeline>
            <el-timeline-item :timestamp="item.create_time" placement="top" v-for="(item,index) in messageList"
                              :key="item.id">
              <el-card>
                <p>{{ item.text }}</p>
                <el-button type="text" @click="onDeleteMessage(item.id)">Delete Message</el-button>
              </el-card>
            </el-timeline-item>
            <el-timeline-item placement="top" v-if="messageList.length === 0">
              <el-card>
                <p>No message yet</p>
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
        <h2>Edit personal message</h2>
      </template>
      <div>
        <el-form :model="updateForm" label-width="120px" size="large">
          <el-form-item label="School" prop="school">
            <el-input v-model="updateForm.school" placeholder="Please enter school" clearable/>
          </el-form-item>
          <el-form-item label="Phone number" prop="phone">
            <el-input v-model="updateForm.phone" placeholder="Please enter phone number" clearable/>
          </el-form-item>
          <el-form-item label="Personal information" prop="introduction">
            <el-input v-model="updateForm.introduction" placeholder="Please enter your personal info" clearable/>
          </el-form-item>
        </el-form>
      </div>
      <template #footer>
        <el-button type="primary" @click="UserInfoSubmit" size="large" style="width: 100%">save</el-button>
      </template>
    </el-dialog>

  </div>
</template>

<script setup>
import { reactive, onMounted } from 'vue';
import axios from 'axios';
import { ElMessage } from 'element-plus';

const userInfo = reactive({ username: '', email: '', school: '', phone: '' });
const listPublish = reactive([]);
const listWantToBuy = reactive([]);
const messageList = reactive([]);

onMounted(() => {
  fetchUserInfo();
  fetchListPublish();
  fetchListWantToBuy();
  fetchMessageList();
});

// Fetch user info from backend
function fetchUserInfo() {
  axios.get('/api/user/profile')
    .then(response => {
      Object.assign(userInfo, response.data);
    })
    .catch(error => {
      console.error('Error fetching user info:', error);
    });
}

function fetchListPublish() { /* ... */ }
function fetchListWantToBuy() { /* ... */ }
function fetchMessageList() { /* ... */ }

// Update user info
function updateUserInfo() {
  axios.post('/api/user/update', userInfo)
    .then(() => {
      ElMessage.success('Profile updated successfully');
    })
    .catch(error => {
      ElMessage.error('Error updating profile:', error);
    });
}


</script>

<style scoped>

</style>