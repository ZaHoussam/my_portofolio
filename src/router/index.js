import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    name: "/",
    path: "/",
    component: () => import("../views/MyHome.vue"),
    meta: {
      title: "Home Page",
    },
  },
  {
    name: "about",
    path: "/about",
    component: () => import("../views/MyAbout.vue"),
    meta: {
      title: "About Page",
    },
  },
  {
    name: "porjects",
    path: "/porjects",
    component: () => import("../views/MyProjects.vue"),
    meta: {
      title: "Porjects Page",
    },
  },
  {
    name: "contact",
    path: "/contact",
    component: () => import("../views/MyContact.vue"),
    meta: {
      title: "Contact Page",
    },
  },
];

const router = createRouter({
  history: createWebHistory("/my_portfolio/"),
  routes,
});
router.beforeEach((to, next) => {
  document.title = to.meta.title;
  next;
});
export default router;
