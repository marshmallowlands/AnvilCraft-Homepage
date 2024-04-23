import { createRouter, createWebHistory, Router } from 'vue-router';
import MainPage from '../views/MainPage.vue';
import Tst from '../views/Tst.vue';

const router: Router = createRouter({
  history: createWebHistory('/web'),
  routes: [
    {
      path: '/',
      name: 'Main',
      component: MainPage
    },
    {
      path: '/Tst',
      name: 'page.name',
      component: Tst
    }
  ]
});

export default router;
