"use strict";
import Vue from "vue";
import axios from "axios";
import router from "../router";
import Qs from "qs";
import { Loading, Message } from "element-ui";
const baseUrl = {
  // online: "http://183.222.190.198:9999/vias_n/api",
  online: "http://huangdingbo.work/school",
  // online: "http://192.168.1.28:81/vias/api",
  localhost: "/api"
};
Vue.use(Loading);
let msg = "请求错误,请稍后重试!";
let loading = null;
// let dateObj = new Date();
// let delay = 500;
// let timerObj = {};
/*function createTimerId() {
  let t = dateObj.getTime();
  let n = Math.random().toString();
  n = n.split(".")[1];
  return [t, n].join("");
}
function clearTimer(res) {
  let id = res.config["timerId"];
  if (id in timerObj) {
    clearTimeout(timerObj[id]);
    delete timerObj[id];
  }
}*/

axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded";

let config = {
  baseURL: baseUrl.online,
  timeout: 300 * 1000, // Timeout
  withCredentials: true // Check cross-site Access-Control
};
const _axios = axios.create(config);
_axios.interceptors.request.use(
  function(config) {
    let data = config.data || config.params;
    if (data && "noLoading" in data) {
      delete data.noLoading;
    } else {
      loading = Loading.service({
        lock: false,
        text: "加载中...",
        background: "rgba(0, 0, 0, 0.2)"
      });
    }
    // console.log(document.cookie);
    if (config.method === "post") {
      config.data = Qs.stringify(config.data);
    }
    return config;
  },
  function(error) {
    loading && loading.close();
    Message.error(msg);
    return Promise.reject(error);
  }
);
// Add a response interceptor
_axios.interceptors.response.use(
  function(response) {
    loading && loading.close();
    if (response.status === 200) {
      let res = response.data;
      // if (res && res.errorid && res.errorid.toString() === "401") {
      //   router.push("/login");
      //   return false;
      // }
      // if (res && res.ok) {
      //   return res;
      // } else if (res && res.error) {
      //   console.log(res.error);
      //   Message.error(res.error);
      //   return false;
      // }
      return res;
    }
    return false;
  },
  function(error) {
    loading && loading.close();
    Message.error(msg);
    return Promise.reject(error);
  }
);
export default _axios;
