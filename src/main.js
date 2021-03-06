import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import axios from 'axios';
import * as api from "./api";
import 'element-ui/lib/theme-chalk/index.css';
import {getCookie} from "./plugins/cookie";
// import particles from 'particles.js'
// Vue.use(particles);

import Qs from 'qs'
Vue.prototype.$qs = Qs;
Vue.prototype.axios = axios;
Vue.prototype.$api = api;
Vue.config.productionTip = false;
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");


// router.beforeEach((to, from, next) => {
//     let username = getCookie('username');
//     if (to.meta.requireAuth) {
//         if (username==''||username=='undefind') {
//             next({ path: '/' })
//         }
//         else {
//             next();
//         }
//     }
//     else {
//         next();
//     }
//
// });