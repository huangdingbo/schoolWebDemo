<template>
    <div class="warning">
        <div class="warning_nav">
            <div class="title">监控预警</div>
            <div class="warning_list">
                <router-link to="/warning/total" class="warning_item">监控预警总体情况</router-link>
                <router-link to="/warning/beyond" class="warning_item">临界学生预警</router-link>
                <router-link to="/warning/poor" class="warning_item">学困学生预警</router-link>
            </div>
        </div>
        <div class="warning_cont">
            <div class="warning_title">
                <div class="warning_grade">
                    <el-dropdown trigger="click"  @command="gradeSel" placement="bottom-start">
                            <span class="el-dropdown-link">
                                <!--{{subjectName}}-->
                                年级
                            </span>
                        <el-dropdown-menu slot="dropdown" >
                            <el-dropdown-item v-for="item in gradeList" :command="item.value" >{{item.name}}</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </div>
                <div class="warning_topic">监控预警总体情况</div>
                <div class="warning_type">
                    <el-dropdown trigger="click"  @command="typeSel" placement="bottom-start">
                            <span class="el-dropdown-link">
                                <!--{{subjectName}}-->
                                学生类型
                            </span>
                        <el-dropdown-menu slot="dropdown" >
                            <el-dropdown-item v-for="item in typeList" :command="item.value" >{{item.name}}</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </div>
            </div>
            <router-view :studentType="studentType" :grade="grade"></router-view>
        </div>
        <div class="warning_work">
            <div class="work_title">预警工作台</div>
            <div class="work_list">
                <div class="work_item" v-for="item in list">
                    <div class="name"><img src="../assets/warning/warn_badge_red.png">{{item.name}}<div class="btn" :data-id="item.id">查看详情</div></div>
                    <div class="info">{{item.value}}</div>
                </div>
            </div>
            <div class="work_btn">查看全部</div>
        </div>
    </div>
</template>

<script>
    import Vue from "vue";
    import { Dropdown, DropdownMenu, DropdownItem } from "element-ui";
    Vue.use(Dropdown);
    Vue.use(DropdownMenu);
    Vue.use(DropdownItem);

    export default {
        name: "Warning",
        components: {
        },
        data() {
            return {
                studentType:'',
                grade:'',
                list:[],
                gradeList:[],
                typeList:[],
            };
        },
        mounted() {
            this.init()
        },
        methods: {
            init(){
                this.$api.work().then(res => {
                    this.list = res.list;
                });
                this.$api.gradelist().then(res => {
                    this.gradeList = res.list;
                    this.grade = res.list[0].value
                });
                this.$api.left().then(res => {
                    this.typeList = res;
                    this.studentType = res[0].value
                });
            },
            gradeSel(command){
                this.grade = command
            },
            typeSel(command){
                this.studentType = command
            },
        }
    }
</script>

<style scoped>
    @import "../css/dropdown.css";
    .warning{display: flex;width: 100%;height:100%;background: url("../assets/bg.jpg");}
    .title{margin-top:40px}
    .warning_nav{width: 400px;height:100%;border-right:2px solid #0a5b85}
    .warning_list{display: flex;flex-direction: column;font-size: 24px;font-weight: bold;margin-top:30px}
    .warning_item{display: flex;align-items: center;height:90px;justify-content: center;font-size: 32px}
    .warning_cont{width: 1200px;}
    .warning_title{display: flex;align-items: center;justify-content: center;margin-top:40px;}
    .warning_grade{margin-right:30px;}
    .warning_type{margin-left:30px;}
    .warning_topic{font-size: 46px;color:#fff;display:inline-block;border-bottom: 3px solid rgb( 110, 194, 255 );}
    .warning_work{width: 360px;background: rgba( 1, 16, 29, 0.851 );border-left:2px solid #0a5b85;padding:40px 0 0 20px;}
    .work_title{font-size: 26px;text-shadow: 0 0 20px #145f87, 0 0 20px #145f87, 0 0 20px #145f87;font-weight: bold;color: #d6e9ff;text-align: left}
    .work_list{height:600px;overflow: auto;margin-top:30px;}
    .work_item{padding:10px 0;font-size: 20px;color:#fff;border-top:2px solid #2a3c48}
    .name{display: flex;align-items: center;justify-content: space-around;font-size: 18px;padding:10px 0}
    .btn{border: 1px solid #2a3c48;font-size: 16px;padding:2px 5px;border-radius: 5px;background-color: #162736;cursor: pointer}
    .work_btn{color: #fff;font-weight: bold;background-color: #1373d1;border-radius: 4px;font-size: 20px;width: 180px;display: inline-block;
        padding:5px 0;margin-top:20px;cursor: pointer}
</style>