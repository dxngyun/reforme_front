import { createWebHistory, createRouter } from "vue-router";

const router = createRouter({
  history: createWebHistory(""),
  routes: [
    {
      path: "/",
      name: "main",
      component: () => import("@/components/foo"),
    },
    {
      path: "/signup",
      name: "signup",
      component: () => import("@/components/signup"),
    },

    {
      path: "/signin",
      name: "signin",
      component: () => import("@/components/signin"),
    },
    {
      path: "/buttons",
      name: "buttons",
      component: () => import("@/components/buttons"),
    },
  ],
});

export default router;
