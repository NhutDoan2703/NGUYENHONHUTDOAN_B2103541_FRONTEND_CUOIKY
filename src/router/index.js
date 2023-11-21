import { createWebHistory, createRouter } from "vue-router";
import Shopview from "@/views/Shopview.vue"
import Cart from "@/views/Cart.vue"
import Error from "@/components/Error.vue"
import Login from "@/views/Login.vue"
import Home from "@/views/Home.vue"

const routes = [
    {
        path: "/",
        name: "Shopview",
        component: Shopview,
    },
    {
        path: "/Home",
        name: "Home",
        component: Home,
    },
    {
        path: "/Cart",
        name: "Cart",
        component: Cart,
    },
    {
        path: "/Login",
        name: "Login",
        component: Login,
    },

    {
        path: '/:catchAll(.*)',
        component: Error,
    },
];
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});
export default router;