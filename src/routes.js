import { createWebHistory, createRouter } from 'vue-router';
import Home from "./components/Home-comp.vue"
import About from "./components/About-comp.vue"

const routes = [
    {
        name: 'Home',
        path: '/',
        component: Home
    },
    {
        name: 'About',
        path: '/about',
        component: About
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;