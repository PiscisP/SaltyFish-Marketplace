import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: 'welcome',
      component: () => import('@/views/WelcomeView.vue'),
      children: [
        {
          path: '',
          name: 'welcome-login',
          component: () => import('@/components/welcome/LoginPage.vue')
        },
        {
                  path: 'register',
                  name: 'welcome-register',
                  component: () => import('@/components/welcome/RegisterPage.vue')
        }
      ]
    },
    {
      path: '/mainpage',
      name: 'mainpage',
      component: () => import('@/views/MainPage.vue')
    },
    {
      path: "/home",
      name: "home",
      component: () => import('@/views/index.vue')
    },
    {
     path: '/profile',
     name: 'profile',
     component: () => import('@/views/ProfileView.vue')
    }
  ]
})

export default router;
