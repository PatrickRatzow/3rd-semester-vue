import { createWebHistory, createRouter } from "vue-router";
import Home from "./pages/Home.vue";
import Stores from "./pages/Stores.vue";
import Services from "./pages/Services.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/stores",
    name: "Stores",
    component: Stores
  },
  {
    path: "/services",
    name: "Services",
    component: Services
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;