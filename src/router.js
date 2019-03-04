import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);

export default new Router({
    mode: "hash",
    base: process.env.BASE_URL,
    routes: [
        {
            path: "*",
            redirect: "/login"
        },
        {
            path: "/",
            name: "login",
            component: () => import("./views/Login.vue")
        },
        {
            path: "/home",
            name: "home",
            meta: {
                requireAuth: true
            },
            component: () => import("./views/Home.vue")
        },
    ]
});

