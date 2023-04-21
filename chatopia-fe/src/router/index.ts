import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    redirect: () => {
      return { path: "/friends" };
    },
  },
  {
    path: "/auth",
    name: "Authenticate",
    component: () => import(/* webpackChunkName: "auth" */ "../views/AuthView.vue"),
  },
  {
    path: "/friends",
    name: "Friends",
    component: () => import(/* webpackChunkName: "friends" */ "../views/FriendsView.vue"),
  },
  {
    path: '/chat',
    name: 'chat',
    component: () => import(/* webpackChunkName: "chat" */ '../views/ChatView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router
