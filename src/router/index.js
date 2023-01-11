import { createRouter, createWebHistory } from 'vue-router'
import MainView from "@/views/MainView";
import CardView from "@/views/CardView";

const routes = [
  {
    path: '/',
    component: MainView,
  },
  {
    path: '/programs/:id',
    component: CardView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
