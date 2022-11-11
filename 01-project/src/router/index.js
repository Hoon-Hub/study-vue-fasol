import { createWebHistory, createRouter } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Main",
    component: () => import("../components/Main.vue"),
  },
  {
    path: "/Counter",
    name: "Counter",
    component: () => import("../components/Counter/Counter.vue"),
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
  {
    path: "/Reactive",
    name: "Reactive",
    component: () => import("../components/Reactive/Main.vue"),
  },
  {
    path: "/CRUD",
    name: "CRUD",
    component: () => import("../components/CRUD/Index.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
