import * as VueRouter from 'vue-router';

const routes = [
  {
    path: '/',
    component: () => import('../pages/home/index.vue')
  }, {
    path: '/category',
    component: () => import('../pages/category/index.vue')
  }
];

export default VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes
});