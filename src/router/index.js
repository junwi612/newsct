import { createRouter, createWebHistory } from 'vue-router';
import Index from '@/views/index.vue'; 
import Login from '../views/Login.vue';
import Dashboard from '../components/admin/Dashboard.vue';

const routes = [
  { path: '/', component: Index }, 
  { path: '/login', component: Login },
  { path: '/dashboard', component: Dashboard, meta: { requiresAuth: true } }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem('isAuthenticated');
  if (to.meta.requiresAuth && !isAuthenticated) {
    next('/login');
  } else {
    next();
  }
});
export default router;
