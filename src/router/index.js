import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    name: "about",
    path: "/",
    // component: () => import(""),
  },
  {
    name: "porjects",
    path: "/",
    // component: () => import(""),
  },
  {
    name: "contact",
    path: "/",
    // component: () => import(""),
  },
];

const router = createRouter({
  history: createWebHistory("/my_portfolio/"),
  routes,
});

export default router;
