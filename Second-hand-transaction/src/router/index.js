import { createRouter,createWebHistory} from "vue-router";
import {LazyRouter} from "../utils"
// 路由信息
const routes = [
    {
        path: "/",
        redirect: '/home'
    },
    {
        path: "/home",
        name: "home",
        component:  LazyRouter('/index'),
        meta:{
            title: "首页——校园二手交易网站",
            requireAuth: false
        }
    },
    {
        path: "/class",
        name: "class",
        component:  LazyRouter('/classification/classification'),
        meta:{
            title: "分类——校园二手交易网站"
        }
    },
    {
        path: "/publish",
        name: "publish",
        component:  LazyRouter('/publish/publish'),
        meta:{
            title: "发布——校园二手交易网站"
        }
    },
    {
        path: "/want_to_buy",
        name: "want_to_buy",
        component:  LazyRouter('/want_to_buy/want_to_buy'),
        meta:{
            title: "求购——校园二手交易网站"
        }
    },
    {
        path: "/info",
        name: "info",
        component:  LazyRouter('/personal-info/info'),
        meta:{
            title: "个人中心——校园二手交易网站"
        }
    },
    {
        path: "/login",
        name: "login",
        component:  LazyRouter('/login/login'),
        meta:{
            title: "登录——校园二手交易网站",
            isLogin: true
        }
    },
    {
        path: "/admin",
        name: "admin",
        component:  LazyRouter('/admin/admin'),
        children: [
            {
                path: "user",
                name: "user",
                component:  LazyRouter('/admin/user-management/user'),
                meta: {
                    title: "用户管理"
                }
            },
            {
                path: "goods",
                name: "goods",
                component:  LazyRouter('/admin/goods-management/goods'),
                meta: {
                    title: "商品管理"
                }
            },
            {
                path: "want",
                name: "want",
                component:  LazyRouter('/admin/want-to-buy/buy'),
                meta: {
                    title: "商品管理"
                }
            }
        ],
        meta:{
            title: "登录——校园二手交易网站",
            isAdmin: true
        },
        redirect: '/admin/user'
    }
    // {
    //     path: "/:pathMatch(.*)*",
    //     name: "404",
    //     component: LazyRouter('404','404')
    // }

];

// 导出路由
const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;