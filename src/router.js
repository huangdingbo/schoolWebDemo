import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);

export default new Router({
    mode: "hash",
    base: process.env.BASE_URL,
    routes: [
        {
            path: "*",
            redirect: "/"
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
            redirect: "/analysis/grade",
            meta: {
                requireAuth: true
            },
            component: () => import("./views/Analysis.vue"),
            children:[
                {
                    path: "grade",
                    name: "grade",
                    // meta: { menu: 1 },
                    component: () => import("./components/AnalysisGrade.vue")
                },
                {
                    path: "class",
                    name: "class",
                    // meta: { menu: 2 },
                    component: () => import("./components/AnalysisClass.vue")
                },
                {
                    path: "subject",
                    name: "subject",
                    // meta: { menu: 3 },
                    component: () => import("./components/AnalysisSubject.vue")

                }
            ]
        },
        {
            path: "/warning",
            name: "warning",
            meta: {
                requireAuth: true
            },
            redirect: "/warning/total",
            component: () => import("./views/Warning.vue"),
            children:[
                {
                    path: "total",
                    name: "total",
                    // meta: { menu: 1 },
                    component: () => import("./components/WarningTotal.vue")
                },
                {
                    path: "beyond",
                    name: "beyond",
                    // meta: { menu: 2 },
                    component: () => import("./components/WarningBeyond.vue")
                },
                {
                    path: "poor",
                    name: "poor",
                    // meta: { menu: 2 },
                    component: () => import("./components/WarningPoor.vue")
                },
            ]
        }
    ]
});

