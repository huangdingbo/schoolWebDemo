import api from "../plugins/axios";
export const axiosAll = (http1, http2) =>
  api.all([http1(), http2()]).then(res => res);
/*登陆*/
export const login = data =>
  api.post("/api/web/index.php?r=user/login", data).then(res => res);
/*logout*/
