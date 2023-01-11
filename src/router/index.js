import { createRouter, createWebHistory } from 'vue-router'
import MainView from "@/views/MainView";
import CardView from "@/views/CardView";

const routes = [
  {
    path: '/',
    name: 'main',
    component: MainView,
  },
  {
    path: '/programs/:id',
    name: 'program',
    component: CardView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
