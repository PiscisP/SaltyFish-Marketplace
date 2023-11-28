import { createApp } from 'vue'
import App from './App.vue'
import router from "./router/index.js";
import store  from './store'
const app = createApp(App)
import ElementPlus ,{ElMessage} from 'element-plus'
import 'element-plus/dist/index.css'

app.use(ElementPlus, { size: 'small', zIndex: 3000 })
// app.use(ElementPlus)
//配置路由
app.use(router);
router.beforeEach((to, from, next) => {

    /* 路由发生变化修改页面title */
    if (to.meta.title) {
        document.title = to.meta.title
    }
    if (to.name === 'login'||to.meta.isAdmin){
        next();
    }else if (localStorage.getItem('userinfo')){
        next();
    } else {
        ElMessage.error("请先登录")
        next('/login')
    }

})
app.use(store)
app.mount('#app')
