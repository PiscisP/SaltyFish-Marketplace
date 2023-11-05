import { createRouter, createWebHistory } from 'vue-router';
import HomeView from './views/HomeView.vue';
import LoginView from './views/LoginView.vue';
import RegisterView from './views/RegisterView.vue';
import MessagesView from './views/MessagesView.vue';
import AccountDetails from './views/AccountDetails.vue';
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: { showNavBar: true }
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView,
    meta: { showNavBar: true } 
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterView,
    meta: { showNavBar: true } 
  },
  {
      path: '/main',
      name: 'MainPage',
      component: () => import('./views/MainPage.vue')
    },
    {
        path: '/messages',
        name: 'Messages',
        component: MessagesView,
     },
    {
    path: '/main',
    name: 'MainPage',
    component: () => import('./views/MainPage.vue'),
    meta: { showNavBar: false } 
    },
    {
      path: '/account',
      name: 'AccountDetail',
      component: AccountDetails,
      meta: { showNavBar: false }
    }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
