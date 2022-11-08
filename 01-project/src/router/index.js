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
  {
    path: "/ContentDetail/:item",
    name: "ContentDetail",
    component: () => import("../components/Contents/ContentDetail.vue"),
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
