import api from "../plugins/axios";
export const axiosAll = (http1, http2) =>
  api.all([http1(), http2()]).then(res => res);
/*登陆*/
export const login = data =>
  api.post("/api/web/index.php?r=user/login", data).then(res => res);
// 校园概况
export const situation = data =>
  api
    .post("/api/web/index.php?r=cockpit/school-situation", data)
    .then(res => res);
export const cases = data =>
  api.post("api/web/index.php?r=cockpit/high-case", data).then(res => res);
export const overview = data =>
  api.post("api/web/index.php?r=cockpit/case-overview", data).then(res => res);
export const weigh = data =>
  api
    .post("api/web/index.php?r=cockpit/weigh-distribution", data)
    .then(res => res);
export const year = data =>
  api.post("api/web/index.php?r=cockpit/year-wire", data).then(res => res);

/*logout*/
