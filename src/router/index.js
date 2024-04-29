import { createWebHistory, createRouter } from "vue-router";

const router = createRouter({
  history: createWebHistory(""),
  routes: [
    {
      path: "/singup",
      name: "signup",
      component: () => import("@/components/SignUp.vue"),
    },
    {
      path: "/signin",
      name: "signin",
      component: () => import("@/components/SignIn.vue"),
    },
  ],
});

export default router;
