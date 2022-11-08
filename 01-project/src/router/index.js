import { createWebHistory, createRouter } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Main",
    component: () => import("../components/Main.vue"),
  },
  {
    path: "/List",
    name: "Contents",
    component: () => import("../components/Contents/Main.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
