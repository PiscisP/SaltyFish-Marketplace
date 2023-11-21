<template>
    <div style="text-align:center;margin:0 40px">
        <div style="margin-top: 150px">
            <div style="font-size:25px;color:black">Login</div>
            <div style="font-size:14px;color:grey">Enter username and password to login</div>
    </div>
    <div style="margin-top:50px">
        <el-input v-model="form.username" type="text" placeholder="Username">
            <template #prefix>
                <el-icon><User /></el-icon>
            </template>
        </el-input>
        <el-input v-model="form.password" type="password" placeholder="Password" style="margin-top: 10px">
             <template #prefix>
                 <el-icon><Lock /></el-icon>
             </template>
        </el-input>
    </div>
    <div>
        <el-row style = "margin-top:10px">
            <el-col :span="12" style="text-align:left">
                <el-checkbox v-model="form.remember" label="Remember me" size="large"/>
            </el-col>
            <el-col :span="12" style="text-align:right;margin-top:7px">
                <el-link>Forget Password</el-link>
            </el-col>
        </el-row>
    </div>
    <div style="margin-top: 40px">
        <el-button @click= "login" style="width:250px" type="success" plain>Login</el-button>
    </div>
    <el-divider style="margin-top:40px">
        <span style="color: grey">No account</span>
    </el-divider>
    <div style="margin-top: 40px">
         <el-button style="width:250px" @click= "router.push('/register')" type="warning" plain>Register</el-button>
    </div>
    </div>
</template>


<script setup>
import {User, Lock} from '@element-plus/icons-vue'
import {reactive} from 'vue';
import {ElMessage} from "element-plus";
import {post} from "@/net";
import router from '@/router';


const form = reactive({
    username: '',
    password: '',
    remember: false
})

const login = () => {
    if(!form.username||!form.password){
        ElMessage.warning('Please Enter Username and Password')
    }else{
        post('./api/auth/login', {
            username: form.username,
            password: form.password,
            remember: form.remember
        },(message) =>{
            //ElMessage.warning("1")
            ElMessage.success(message)
            router.push('/mainpage')
        })
    }
}
</script>

<style scoped>

</style>
