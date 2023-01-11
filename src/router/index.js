import { createRouter, createWebHashHistory } from 'vue-router'
import MainView from "@/views/MainView";

const routes = [
  {
    path: '/',
    name: 'main',
    component: MainView,
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
