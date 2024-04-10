import { createRouter, createWebHistory } from 'vue-router';
import BookListOne from '../components/BookListOne.vue'; // Adjust the path based on your actual file location
import LoginPage from '../views/LoginPage.vue';

const routes = [
  {
    path: '/shop',
    name: 'shop',
    component: BookListOne, // Use the imported component
    meta: { requiresAuth: true },
  },
  {
    path: '/',
    name: 'login',
    component: LoginPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;