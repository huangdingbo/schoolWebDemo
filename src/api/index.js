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
export const stuDetail = data =>
    api.post("api/web/index.php?r=cockpit/student-detail", data).then(res => res);
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
// 本次考试-上次考试年级各科均分
export const divide = data =>
    api.post("api/web/index.php?r=read-grade/divide-more", data).then(res => res);
// 单科分数段
export const scale = data =>
    api.post("api/web/index.php?r=discipline-analysis/single-scale", data).then(res => res);
// 学科概要分析和单科年级平均分上下分析
export const profile = data =>
    api.post("api/web/index.php?r=discipline-analysis/profile", data).then(res => res);
// 本次考试各班均分排名
export const avgrank = data =>
    api.post("api/web/index.php?r=class-analysis/avg-rank", data).then(res => res);
// 本次考试班级均分排名下钻
export const historyavg = data =>
    api.post("api/web/index.php?r=discipline-analysis/history-avg-rank", data).then(res => res);
// 各班本科上线稳定行分析
export const stable = data =>
    api.post("api/web/index.php?r=class-analysis/stable", data).then(res => res);
// 课程列表
export const course = data =>
    api.post("api/web/index.php?r=discipline-analysis/course-list", data).then(res => res);


// 预警工作台
export const work = data =>
    api.post("api/web/index.php?r=warning-index/warning-work", data).then(res => res);
// 当前预警、总预警、预警数/次
export const header = data =>
    api.post("api/web/index.php?r=warning-index/header", data).then(res => res);
// 年级列表
export const gradelist = data =>
    api.post("api/web/index.php?r=warning-index/grade-list", data).then(res => res);
// 班级列表
export const classlist = data =>
    api.post("api/web/index.php?r=warning-index/class-list", data).then(res => res);
// 高危学生预警
export const risk = data =>
    api.post("api/web/index.php?r=warning-index/high-risk", data).then(res => res);
// 预警类型分析
export const warningtype = data =>
    api.post("api/web/index.php?r=warning-index/warning-type", data).then(res => res);
// 近十次考试预警发展趋势
export const warningdevelop = data =>
    api.post("api/web/index.php?r=warning-index/warning-develop", data).then(res => res);
// 五大类型预警统计
export const statistical = data =>
    api.post("api/web/index.php?r=warning-index/warning-statistical", data).then(res => res);
// 个人详情
export const detail = data =>
    api.post("api/web/index.php?r=warning-index/warning-detail", data).then(res => res);
// 预警工作台-查看全部
export const all = data =>
    api.post("api/web/index.php?r=warning-index/warning-all", data).then(res => res);

