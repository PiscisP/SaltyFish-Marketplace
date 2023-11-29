import { createRouter,createWebHistory} from "vue-router";
import {LazyRouter} from "../utils"
// router information
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
            title: "SaltyFish Marketplace",
            requireAuth: false
        }
    },
    {
        path: "/class",
        name: "class",
        component:  LazyRouter('/classification/classification'),
        meta:{
            title: "classification-saltyfish"
        }
    },
    {
        path: "/publish",
        name: "publish",
        component:  LazyRouter('/publish/publish'),
        meta:{
            title: "publish-saltyfish"
        }
    },
    {
        path: "/want_to_buy",
        name: "want_to_buy",
        component:  LazyRouter('/want_to_buy/want_to_buy'),
        meta:{
            title: "want-to-buy-salty-fish"
        }
    },
    {
        path: "/info",
        name: "info",
        component:  LazyRouter('/personal-info/info'),
        meta:{
            title: "personal center-salty-fish"
        }
    },
    {
        path: "/login",
        name: "login",
        component:  LazyRouter('/login/login'),
        meta:{
            title: "login-salty-fish",
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
                    title: "user-manage"
                }
            },
            {
                path: "goods",
                name: "goods",
                component:  LazyRouter('/admin/goods-management/goods'),
                meta: {
                    title: "item-manage"
                }
            },
            {
                path: "want",
                name: "want",
                component:  LazyRouter('/admin/want-to-buy/buy'),
                meta: {
                    title: "item-manage"
                }
            }
        ],
        meta:{
            title: "login-salty-fish",
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

// export router
const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;