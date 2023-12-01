import { createApp } from 'vue'
import App from './App.vue'
import router from "./router/index.js";
import store  from './store'
const app = createApp(App)
import ElementPlus ,{ElMessage} from 'element-plus'
import 'element-plus/dist/index.css'

app.use(ElementPlus, { size: 'small', zIndex: 3000 })
//set up user
app.use(router);
router.beforeEach((to, from, next) => {

    /* change title when router change*/
    if (to.meta.title) {
        document.title = to.meta.title
    }
    if (to.name === 'login'||to.meta.isAdmin){
        next();
    }else if (localStorage.getItem('userinfo')){
        next();
    } else {
        ElMessage.error("please login first")
        next('/login')
    }

})
app.use(store)
app.mount('#app')
