import { createRouter, createWebHistory } from 'vue-router';
import HomeView from './views/HomeView.vue';
import LoginView from './views/LoginView.vue';
import RegisterView from './views/RegisterView.vue';
import MessagesView from './views/MessagesView.vue';
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterView
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
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
