<template>
    <div style="text-align:center;margin:0 40px">
        <div style="margin-top: 150px">
            <div style="font-size:25px;color:black">Register</div>
            <div style="font-size:14px;color:grey">Welcome Register in SCU marketplace, Please enter your information below</div>
    </div>
    <div style="margin-top: 50px">
        <el-form :model="form" :rules="rules" @validate="onValidate" ref="formRef">
            <el-form-item prop="username">
                <el-input v-model="form.username" :maxlength="8" type="text" placeholder="username">
                    <template #prefix>
                        <el-icon><User /></el-icon>
                    </template>
                 </el-input>
            </el-form-item>
            <el-form-item prop="password">
                <el-input v-model="form.password" :maxlength="16" type="text" placeholder="password">
                    <template #prefix>
                        <el-icon><Lock /></el-icon>
                    </template>
                </el-input>
            </el-form-item>
            <el-form-item prop="password_repeat">
                <el-input v-model="form.password_repeat" :maxlength="16"  type="text" placeholder="repeat password" >
                    <template #prefix>
                        <el-icon><Lock /></el-icon>
                    </template>
                </el-input>
            </el-form-item>
            <el-form-item prop="email">
                <el-input v-model="form.email" type = "email" placeholder="Email" >
                    <template #prefix>
                        <el-icon><Message /></el-icon>
                    </template>
                </el-input>
            </el-form-item>
            <el-form-item prop="code">
                <el-row :gutter= "10" >
                <el-col :span="16">
                    <el-input v-model="form.code" :maxlength="6" type = "code" placeholder="Code"></el-input>
                    <template #prefix>
                         <el-icon><EditPen /></el-icon>
                    </template>
                </el-col>
                <el-col :span="6">
                    <el-button type="success" @click="validateEmail" :disabled="!isEmailValid || coldTime > 0"> {{ coldTime > 0 ? "Wait for "+ coldTime+" s" : 'Send Code' }}</el-button>
                </el-col>
            </el-row>
            </el-form-item>
        </el-form>
        
    </div>
        <div style="margin-top: 60px">
            <el-button style= "width:270px" type = "warning" @click="register" plain> Create Account</el-button>
        </div>
        <div style="margin-top: 20px">
            <span style="font-size:14px;line-height:15px;margin-top:20px; color:grey"> Already have an account?</span>
           <el-link type="primary" style= "translate: 0 -2px" @click="router.push('/')">Login now</el-link>
        </div>
    </div>
</template>

<script setup>
import {EditPen, Lock, Message, User} from "@element-plus/icons-vue";
import router from "@/router";
import {reactive, ref} from "vue";
import {ElMessage} from "element-plus";
import {post} from "@/net";

const form = reactive(
    {
        username:"",
        password:"",
        password_repeat:"",
        email:"",
        code:"",
    }
)

const validateUsername = (rule, value, callback) => {
    if (value === '') {
        callback(new Error('Please Enter Username'))
    } else if(!/^[a-zA-Z0-9\u4e00-\u9fa5]+$/.test(value)){
        callback(new Error('Username cannot contain special words'))
    } else {
        callback()
    }
}

const validatePassword = (rule, value, callback) => {
    if (value === '') {
        callback(new Error('Please repeat password'))
    } else if (value !== form.password) {
        callback(new Error("The password does not match"))
    } else {
        callback()
    }
}
const rules = {
    username: [
        { validator: validateUsername, trigger: ['blur', 'change'] },
        { min: 2, max: 8, message: 'The length of username should be within 2-8', trigger: ['blur', 'change'] },
    ],
    password: [
        { required: true, message: 'Please enter password', trigger: 'blur' },
        { min: 6, max: 16, message: 'The length of password should be within 6-16', trigger: ['blur', 'change'] }
    ],
    password_repeat: [
        { validator: validatePassword, trigger: ['blur', 'change'] },
    ],
    email: [
        { required: true, message: 'Please enter email', trigger: 'blur' },
        {type: 'email', message: 'Please enter valid email', trigger: ['blur', 'change']}
    ],
    code: [
        { required: true, message: 'Please enter code sent', trigger: 'blur' },
    ]
}

const formRef = ref()
const isEmailValid = ref(false)
const coldTime = ref(0)

const onValidate = (prop, isValid) => {
    if(prop === 'email')
        isEmailValid.value = isValid
}

const register = () => {
    formRef.value.validate((isValid) => {
        if(isValid) {
            post('/api/auth/register', {
                username: form.username,
                password: form.password,
                email: form.email,
                code: form.code
            }, (message) => {
                ElMessage.success(message)
                router.push("/")
            })
        } else {
            ElMessage.warning('Please finish the register')
        }
    })
}

const validateEmail = () => {
    coldTime.value = 60
    post('/api/auth/valid-email', {
        email: form.email
    }, (message) => {
        ElMessage.success(message)
        setInterval(() => coldTime.value--, 1000)
    }, (message) => {
        ElMessage.warning(message)
        coldTime.value = 0
    })
}


</script>

<style scoped>
</style>