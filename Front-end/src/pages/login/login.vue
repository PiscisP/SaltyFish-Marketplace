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
            <h1 style="text-align: center; margin-bottom: 50px;">{{ isLoginForm ? 'Login' : 'Register' }}</h1>
            <el-form :model="formLogin" label-width="120px" size="large" v-show="isLoginForm " :rules="rules">
              <el-form-item label="username" prop="name">
                <el-input v-model="formLogin.name" placeholder="Please enter your user name" clearable/>
              </el-form-item>
              <el-form-item label="password" prop="password">
                <el-input v-model="formLogin.password" type="password" show-password placeholder="Please enter your password" clearable/>
              </el-form-item>
            </el-form>
            <el-form :model="formRegister" label-width="120px" size="large" v-show="!isLoginForm " :rules="rulesRegister">
              <el-form-item label="School" prop="school">
                <el-input v-model="formRegister.school" placeholder="Please enter your school" clearable/>
              </el-form-item>
              <el-form-item label="username" prop="name">
                <el-input v-model="formRegister.name" placeholder="Please enter your user name" clearable/>
              </el-form-item>
              <el-form-item label="phone" prop="phone">
                <el-input v-model="formRegister.phone" placeholder="Please enter your phone number" clearable/>
              </el-form-item>
              <el-form-item label="password" prop="password">
                <el-input v-model="formRegister.password" type="password" show-password placeholder="Please enter your password" clearable/>
              </el-form-item>
              <el-form-item label="confirm password">
                <el-input v-model="formRegister.againPassword" type="password" show-password placeholder="Please confirm your password" clearable/>
              </el-form-item>
            </el-form>
            <div style="text-align: right; margin-top: 50px;">
              <div class="login-btn">
                <el-button type="text" size="large" @click="isLoginForm = !isLoginForm">{{ isLoginForm ? 'No account? Register' : 'Login' }}</el-button>
              </div>
              <div>
                <el-button type="primary" size="large" style="width: 100%;" v-show="isLoginForm" @click="submitFormLogin">Login</el-button>
                <el-button type="primary" size="large" style="width: 100%" v-show="!isLoginForm" @click="submitFormRegister">Register</el-button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
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
      title: 'Notice',
      dangerouslyUseHTMLString: true,
      message: '<div>The account number is an 8-digit combination of at least one letter and number</div><div>Password is an 8-digit combination of at least one letter and number</div>',
      duration: 4500,
    })
  }
})

const {push} = useRouter();
const store = userStore();

const loading = ref(false)
const codeLoading = ref(false)

const isLoginForm = ref(true)
const formLogin = reactive({
  name: '',
  password: ''
})

const rules = reactive({
  name: [
    {required: true, message: 'Please enter your username', trigger: 'blur'}
  ],
  password: [
    {required: true, message: 'Please enter your password', trigger: 'blur',},
  ],
})
const submitFormLogin = async () => {
  if (!formLogin.name) {
    ElMessage.error("Username cant be empty")
    return;
  }
  if (!formLogin.password) {
    ElMessage.error("Password cant be empty")
    return;
  }
  loading.value = true;
  await axios.post('http://localhost:5000/users/login', {
    username: formLogin.name,
    password: formLogin.password,
  })
      .then(function (response) {
        if (response.data.code === 200) {
            ElMessage.success("Login succeed")
            push('/')
            store.setUserInfo(response.data.data);
          }
        else {
          ElMessage.error("Login fail," + response.data.message)
        }
      })
      .catch(function (error) {
        console.log(error)
        ElMessage.error("Login fail")
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
    {required: true, message: 'Please enter your school', trigger: 'blur'}
  ],
  phone: [
    {required: true, message: 'Please enter your phone number', trigger: 'blur'}
  ],
  name: [
    {required: true, message: 'Please enter your username', trigger: 'blur'}
  ],
  password: [
    {required: true, message: 'Please enter your password', trigger: 'blur',},
  ]
})
const submitFormRegister = async () => {
  if (!formRegister.school) {
    ElMessage.error("School cant be empty")
    return;
  }
  if (!formRegister.name) {
    ElMessage.error("Account cant be empty")
    return;
  }
  if (!formRegister.phone) {
    ElMessage.error("Phone number cant be empty")
    return;
  }
  if (!formRegister.password) {
    ElMessage.error("Password cant be empty")
    return;
  }
  if (formRegister.againPassword !== formRegister.password) {
    ElMessage.error("Inconsistent passwords entered")
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
    introduction: "Nothing here yet"
  }).then(function (response) {
    if (response.data.code === 200) {
      ElMessage.success("Register succeed " + response.data.message)
    }
  })
      .catch(function (error) {
        console.log(error)
        ElMessage.error("Register fail")

      }).finally(() => {
        loading.value = false;
      });
}

let timer = null;
let tipsTimer = true;


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
  display: none; 
}
</style>