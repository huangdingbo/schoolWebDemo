import api from "../plugins/axios";

export const axiosAll = (http1, http2) =>
    api.all([http1(), http2()]).then(res => res);
/*登陆*/
export const login = data =>
    api.post("/api/web/index.php?r=user/login", data).then(res => res);
// 校园概况
export const situation = data =>
    api.post("/api/web/index.php?r=cockpit/school-situation", data).then(res => res);
export const cases = data =>
    api.post("api/web/index.php?r=cockpit/high-case", data).then(res => res);
export const overview = data =>
    api.post("api/web/index.php?r=cockpit/case-overview", data).then(res => res);
export const weigh = data =>
    api.post("api/web/index.php?r=cockpit/weigh-distribution", data).then(res => res);
export const year = data =>
    api.post("api/web/index.php?r=cockpit/year-wire", data).then(res => res);
export const regular = data =>
    api.post("api/web/index.php?r=cockpit/regular-map", data).then(res => res);
export const rank = data =>
    api.post("api/web/index.php?r=cockpit/rank-pic", data).then(res => res);
export const teacher = data =>
    api.post("api/web/index.php?r=cockpit/teacher-distribution", data).then(res => res);
export const left = data =>
    api.post("api/web/index.php?r=read-grade/header-left", data).then(res => res);
export const right = data =>
    api.post("api/web/index.php?r=read-grade/header-right", data).then(res => res);
export const num = data =>
    api.post("api/web/index.php?r=read-grade/num", data).then(res => res);
export const online = data =>
    api.post("api/web/index.php?r=read-grade/online", data).then(res => res);
// 年级---学生构成分析
export const constitute = data =>
    api.post("api/web/index.php?r=read-grade/constitute-analysis", data).then(res => res);
//总成绩显著进步学生
export const progress = data =>
    api.post("api/web/index.php?r=read-grade/progress-student", data).then(res => res);
// 单科分数段
export const scale = data =>
    api.post("api/web/index.php?r=discipline-analysis/single-scale", data).then(res => res);
// 学科概要分析和单科年级平均分上下分析
export const profile = data =>
    api.post("api/web/index.php?r=discipline-analysis/profile", data).then(res => res);

/*logout*/
