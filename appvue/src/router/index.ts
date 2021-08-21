import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'


const routes: Array<RouteRecordRaw> = [

]
//component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
