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
        {
            path: "/analysis",
            name: "analysis",
            // redirect: "/analysis/test",
            meta: {
                requireAuth: true
            },
            component: () => import("./views/Analysis.vue"),
            children:[
                {
                    path: "test",
                    name: "test",
                    // meta: { menu: 1 },
                    component: () => import("./components/AnalysisTest.vue")
                },
                {
                    path: "life",
                    name: "life",
                    // meta: { menu: 2 },
                    component: () => import("./components/AnalysisLife.vue")
                },
            ]
        },
        {
            path: "/warning",
            name: "warning",
            meta: {
                requireAuth: true
            },
            component: () => import("./views/Warning.vue")
        }
    ]
});

