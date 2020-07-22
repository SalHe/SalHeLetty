import Vue from 'vue'
import VueRouter from 'vue-router'
import Welcome from "../views/Welcome";
import TipPlay from "../views/TipPlay";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Welcome',
        component: Welcome
    },
    {
        path: '/tipPlay',
        name: 'TipPlay',
        component: TipPlay
    }
]

const router = new VueRouter({
    routes
})

export default router
