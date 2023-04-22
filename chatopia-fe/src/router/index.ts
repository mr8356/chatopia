import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: () => {
      return { path: "/friends" };
    },
  },
  {
    path: "/auth",
    name: "Authenticate",
    redirect: () => {
      return { path: "/auth/login" };
    },
  },
  {
    path: "/auth/login",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "auth" */ "../views/AuthView.vue"),
  },
  {
    path: "/auth/register",
    name: "Register",
    component: () =>
      import(/* webpackChunkName: "auth" */ "../views/AuthView.vue"),
  },
  {
    path: "/friends",
    name: "Friends",
    component: () =>
      import(/* webpackChunkName: "friends" */ "../views/FriendsView.vue"),
  },
  {
    path: "/chat",
    name: "chat",
    component: () =>
      import(/* webpackChunkName: "chat" */ "../views/ChatView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
