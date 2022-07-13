import { nextTick } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import { getAuth, onAuthStateChanged } from "firebase/auth";
const routes = [
  {
    path: "/",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/register",
    component: () => import("../views/Register.vue"),
  },
  {
    path: "/sign-in",
    component: () => import("../views/SignIn.vue"),
  },
  {
    path: "/feed",
    component: () => import("../views/Feed.vue"),
    meta: {
      requiresAuth: true,
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const removeLister = onAuthStateChanged(
      getAuth(),
      (user) => {
        removeLister();
        resolve(user);
      },
      reject
    );
  });
};

router.beforeEach(async (to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (await getCurrentUser()) {
      next();
    } else {
      alert("You don't have access!");
      next("/");
    }
  } else {
    next();
  }
});

export default router;
