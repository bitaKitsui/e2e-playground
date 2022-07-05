import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HelloWorld from '../components/HelloWorld.vue'
import Form from '../components/Form.vue'
import NotFound from '../components/NotFound.vue'

const routes: RouteRecordRaw[] = [
  { path: '/', component: HelloWorld },
  { path: '/form', component: Form },
  {
    path: `/not-found`,
    component: NotFound,
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'catch-all',
    redirect: () => {
      return { path: '/not-found' }
    },
  },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
