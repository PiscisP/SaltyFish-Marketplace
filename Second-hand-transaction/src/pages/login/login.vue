<template>
  <div>
    <div style="width: 100vw; height: 100vh; overflow: hidden; display: flex">
      <div style="flex: 1;">
        <el-image style="width: 100%; height: 100%" fit="cover"
          src="https://www.scu.edu/media/institutional-pages/news-amp-events/760-MA15_Fountain__5_15_068.jpg"/>
      </div>
      <div class="welcome-title">
        <div style="font-size: 30px; font-weight: bold;">Welcome to the SCU Community Marketplace</div>
      </div>
      <div style="width: 400px; background-color: white; z-index: 1">
        <div class="login-box" style= "margin-top: 150px">
          <div v-loading="loading" class="login-container">
            <h1 style="text-align: center; margin-bottom: 50px;">{{ isLoginForm ? '登录' : '注册' }}</h1>
            <el-form :model="formLogin" label-width="120px" size="large" v-show="isLoginForm && !isAdminLogin" :rules="rules">
              <el-form-item label="用户名" prop="name">
                <el-input v-model="formLogin.name" placeholder="请输入用户名" clearable/>
              </el-form-item>
              <el-form-item label="密码" prop="password">
                <el-input v-model="formLogin.password" type="password" show-password placeholder="请输入密码" clearable/>
              </el-form-item>
            </el-form>
            <el-form :model="formRegister" label-width="120px" size="large" v-show="!isLoginForm && !isAdminLogin" :rules="rulesRegister">
              <el-form-item label="学校" prop="school">
                <el-input v-model="formRegister.school" placeholder="请输入学校" clearable/>
              </el-form-item>
              <el-form-item label="用户名" prop="name">
                <el-input v-model="formRegister.name" placeholder="请输入用户名" clearable/>
              </el-form-item>
              <el-form-item label="电话号码" prop="phone">
                <el-input v-model="formRegister.phone" placeholder="请输入电话号码" clearable/>
              </el-form-item>
              <el-form-item label="密码" prop="password">
                <el-input v-model="formRegister.password" type="password" show-password placeholder="请输入密码" clearable/>
              </el-form-item>
              <el-form-item label="确认密码">
                <el-input v-model="formRegister.againPassword" type="password" show-password placeholder="请确认密码" clearable/>
              </el-form-item>
            </el-form>
            <div v-show="isAdminLogin" style="text-align: center;" v-loading="codeLoading">
              <img src="@/assets/images/login.png" style="width: 200px; height: 200px;" alt="" @click="loginQQ"/>
            </div>
            <div style="text-align: right; margin-top: 50px;">
              <div class="login-btn">
                <el-button type="text" size="large" @click="adminLogin">{{ !isAdminLogin ? '管理员登录' : '用户登录' }}</el-button>
                <el-button type="text" size="large" @click="isLoginForm = !isLoginForm">{{ isLoginForm ? '还没有账号？注册' : '去登录' }}</el-button>
              </div>
              <div>
                <el-button type="primary" size="large" style="width: 100%;" v-show="isLoginForm" @click="submitFormLogin">登录</el-button>
                <el-button type="primary" size="large" style="width: 100%" v-show="!isLoginForm" @click="submitFormRegister">注册</el-button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <el-dialog v-model="dialogVisible" width="90%" @close="adminLoginClose">
      <div style="height: 70vh">
        <div>
          <img src="@/assets/qq-login-title.png" style="width: 100%;"/>
        </div>
        <div class="app-login">
          <div style="width: 70%; margin: 0 auto;">
            <p style="text-align: center; font-weight: 600; margin: 20px 0">账号密码登录</p>
            <el-form>
              <el-form-item>
                <el-input v-model="formLabelAlign.name" placeholder="支持QQ/邮箱/手机号登录" style="width: 100%;"></el-input>
              </el-form-item>
              <el-form-item>
                <el-input v-model="formLabelAlign.pwd" type="password" placeholder="密码" style="width: 100%;"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button style="width: 100%;" type="primary" @click="onlogin">授权并登录</el-button>
              </el-form-item>
            </el-form>
          </div>
          <div>
            <img src="@/assets/bg.png"/>
          </div>
        </div>
      </div>
    </el-dialog>
  </div>
</template>


<script setup>
import {onMounted, reactive, ref, onBeforeUnmount} from "vue"
import {userStore} from "@/store"
import {ElMessage, ElNotification} from "element-plus";
import {useRouter} from "vue-router"
import axios from "axios";

const showNotification = true;

onMounted(() => {
  if (showNotification) {
    ElNotification({
      title: '提示！！',
      dangerouslyUseHTMLString: true,
      message: '<div>账号为至少一个字母和数字的8位数组合</div><div>密码为至少一个字母和数字的8位数组合</div>',
      duration: 4500,
    })
  }
})

const {push} = useRouter();
const store = userStore();

const loading = ref(false)
const codeLoading = ref(false)

const isAdminLogin = ref(false)

const isLoginForm = ref(true)
const formLogin = reactive({
  name: '',
  password: ''
})

const rules = reactive({
  name: [
    {required: true, message: '请输入用户名', trigger: 'blur'}
  ],
  password: [
    {required: true, message: '请输入密码', trigger: 'blur',},
  ],
})
const submitFormLogin = async () => {
  if (!formLogin.name) {
    ElMessage.error("账号不能为空")
    return;
  }
  if (!formLogin.password) {
    ElMessage.error("密码不能为空")
    return;
  }
  loading.value = true;
  await axios.post('http://localhost:5000/users/login', {
    username: formLogin.name,
    password: formLogin.password,
  })
      .then(function (response) {
        if (response.data.code === 200) {
          if(response.data.data[0].gender === 1){
            ElMessage.warning("账号封禁中，请联系管理员")
          }else{
            ElMessage.success("登录成功")
            push('/')
            store.setUserInfo(response.data.data);
          }
        } else {
          ElMessage.error("登录失败," + response.data.message)
        }
      })
      .catch(function (error) {
        console.log(error)
        ElMessage.error("登录失败")
      }).finally(() => {
        loading.value = false;
      });
}
const formRegister = reactive({
  name: '',
  school: '',
  password: '',
  phone: '',
  againPassword: ''
})
const rulesRegister = reactive({
  school: [
    {required: true, message: '请输入学校', trigger: 'blur'}
  ],
  phone: [
    {required: true, message: '请输入电话号码', trigger: 'blur'}
  ],
  name: [
    {required: true, message: '请输入用户名', trigger: 'blur'}
  ],
  password: [
    {required: true, message: '请输入密码', trigger: 'blur',},
  ]
})
const submitFormRegister = async () => {
  if (!formRegister.school) {
    ElMessage.error("学校不能为空")
    return;
  }
  if (!formRegister.name) {
    ElMessage.error("账号不能为空")
    return;
  }
  if (!formRegister.phone) {
    ElMessage.error("电话号码不能为空")
    return;
  }
  if (!formRegister.password) {
    ElMessage.error("密码不能为空")
    return;
  }
  if (formRegister.againPassword !== formRegister.password) {
    ElMessage.error("两次输入的密码不正确")
    return;
  }
  loading.value = true
  await axios.post('http://localhost:5000/users', {
    username: formRegister.name,
    password: formRegister.password,
    gender: "0",
    age: "18",
    school: formRegister.school,
    phone: formRegister.phone,
    introduction: "这个人很懒，什么都没有介绍"
  }).then(function (response) {
    if (response.data.code === 200) {
      ElMessage.success("注册成功，" + response.data.message)
    }
  })
      .catch(function (error) {
        console.log(error)
        ElMessage.error("注册失败")

      }).finally(() => {
        loading.value = false;
      });
}

let timer = null;
let tipsTimer = true;
// 管理员登录
const adminLogin = () => {
  isAdminLogin.value = !isAdminLogin.value;
}


const dialogVisible = ref(false)

const loginQQ = async()=>{
  codeLoading.value = true;
  setTimeout(()=>{
    dialogVisible.value = true;
    codeLoading.value = false;
  },2000)
  if(isAdminLogin.value){
    codeLoading.value = true;
    setTimeout(()=>{
      setTimeout(() => {
        if (timer) {
          clearInterval(timer);
          ElMessage.error("登录超时，请手动刷新页面")
        }
      }, 30000)

      timer = setInterval(() => {
        axios.post('http://localhost:5000/admin/islogin').then(async (res) => {
          console.log("登录中...")
          const list = res.data.data.list
          if (list.length > 0) {
            clearInterval(timer)
            timer = null;
            if (list[0].qq === 'qq号') {
              ElMessage.success("登录成功！！！")
              sessionStorage.setItem('admin',list[0].qq)
              await push('/admin')
              console.log("qq", list[0].qq)
            } else {
              ElMessage.error("登录失败，您不是管理员")
            }
          }
        });
        // http://localhost:5000/admin/islogin;
      }, 500)
    },1000)
  }else {
    clearInterval(timer)
    timer = null;
  }
}

const formLabelAlign = reactive({
  name: '',
  pwd: ''
})

const onlogin = () => {
  if (formLabelAlign.name === 'qq号' && formLabelAlign.pwd ===
      'admin123') {
    axios.post('http://localhost:5000/admin/login',{
      qq: formLabelAlign.name
    }).then(res => {
      console.log(res)
    })
  } else {
  }
}

const adminLoginClose = ()=>{
  ElMessage.error("登录失败")
}

onBeforeUnmount(() => {
  if (timer) {
    clearInterval(timer);
  }
})


</script>

<style scoped>
.welcome-title {
    position: absolute;
    bottom: 30px;
    left: 30px;
    color:white;
    text-shadow: 0 0 10px black;
}


.login-box-bgimg {
  position: relative;
  width: 30%;
}

.login-container {
  flex: 1;
  padding: 20px;
  background-color: white;
}

.login-btn {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.app-login{
  width: 40%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
}

.el-container.is-vertical {
  display: none; /* This will hide the element */
}
</style>