<template>
    <div class="warning">
        <div class="warning_nav">
            <div class="title">监控预警</div>
            <div class="warning_list">
                <router-link to="/warning/total" class="warning_item">监控预警总体情况</router-link>
                <router-link to="/warning/beyond" class="warning_item">临界学生预警</router-link>
                <router-link to="/warning/poor" class="warning_item">学困学生预警</router-link>
                <router-link to="/warning/partial" class="warning_item">偏科学生预警</router-link>
                <router-link to="/warning/below" class="warning_item">不合格学生预警</router-link>
                <router-link to="/warning/decline" class="warning_item">成绩排名下滑学生预警</router-link>
            </div>
        </div>
        <div class="warning_cont">
            <div class="warning_title">
                <div class="warning_grade">
                    <el-dropdown trigger="click"  @command="gradeSel" placement="bottom-start">
                            <span class="el-dropdown-link">
                                {{grade}}
                            </span>
                        <el-dropdown-menu slot="dropdown" >
                            <el-dropdown-item v-for="item in gradeList" :command="item.value" >{{item.name}}</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </div>
                <div class="warning_grade" v-if="show">
                    <el-dropdown trigger="click"  @command="classSel" placement="bottom-start">
                            <span class="el-dropdown-link">
                                {{classVal == '' ? '全部班级':classVal}}
                            </span>
                        <el-dropdown-menu slot="dropdown" >
                            <el-dropdown-item v-for="item in classList" :command="item.value" >{{item.name}}</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </div>
                <div class="warning_topic">{{this.title}}</div>
                <div class="warning_type">
                    <el-dropdown trigger="click"  @command="typeSel" placement="bottom-start">
                            <span class="el-dropdown-link">
                                {{studentType==1? '理科':'文科'}}
                            </span>
                        <el-dropdown-menu slot="dropdown" >
                            <el-dropdown-item v-for="item in typeList" :command="item.value" >{{item.name}}</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </div>
                <div class="warning_type" v-if="show">
                    <el-dropdown trigger="click"  @command="test">
                            <span class="el-dropdown-link">
                                {{testName}}
                            </span>
                        <el-dropdown-menu slot="dropdown" >
                            <el-dropdown-item v-for="item in testList" :command="item.test_num">{{item.test_name}}</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </div>
            </div>
            <router-view :studentType="studentType" :grade="grade" :classVal="classVal" :testVal="testVal"></router-view>
        </div>
        <div class="warning_work">
            <div class="work_title">预警工作台</div>
            <div class="work_list">
                <div class="work_item" v-for="item in list">
                    <div class="name"><img src="../assets/warning/warn_badge_red.png">{{item.name}}<div class="btn"  @click="workDetail(item.id)">查看详情</div></div>
                    <div class="value">{{item.value}}</div>
                </div>
            </div>

            <div class="work_btn" @click="seeAll()"><div class="work_button">查看全部</div></div>
        </div>

        <el-dialog title="预警工作台"  :visible="allDialog"   :append-to-body="true" width="1600px" @close="allDialog = false">
            <div class="screen">
                <div class="screen_left">
                    <el-input placeholder="输入学生姓名" v-model="input" clearable
                              @blur="searchVal()"></el-input>
                </div>
                <div class="screen_right">
                    <el-dropdown trigger="click"  @command="refreshWork" placement="bottom-start">
                            <span class="el-dropdown-link">
                                年级选择
                            </span>
                        <el-dropdown-menu slot="dropdown" >
                            <el-dropdown-item v-for="item in gradeList" :command="item.value" >{{item.name}}</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                    <el-dropdown trigger="click"  @command="refreshWork2" placement="bottom-start">
                            <span class="el-dropdown-link">
                                班级选择
                            </span>
                        <el-dropdown-menu slot="dropdown" >
                            <el-dropdown-item v-for="item in classList" :command="item.value" >{{item.name}}</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                    <el-dropdown trigger="click"  @command="refreshWork3" placement="bottom-start">
                            <span class="el-dropdown-link">
                                考试选择
                            </span>
                        <el-dropdown-menu slot="dropdown" >
                            <el-dropdown-item v-for="item in testList" :command="item.value" >{{item.name}}</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                    <el-dropdown trigger="click"  @command="refreshWork4" placement="bottom-start">
                            <span class="el-dropdown-link">
                                学生类型
                            </span>
                        <el-dropdown-menu slot="dropdown" >
                            <el-dropdown-item v-for="item in typeList" :command="item.value" >{{item.name}}</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </div>

            </div>

            <div class="list">
                <div class="list_title">
                    <div class="list_item" style="width: 280px;">考试</div><div class="list_item">年级</div><div class="list_item">班级</div>
                    <div class="list_item">姓名</div><div class="list_item">学生类型</div><div class="list_item">预警类型</div>
                    <div class="list_item" style="width: 300px;">预警说明</div><div class="list_item">预警状态</div>
                </div>
                <div class="list_box">
                    <div class="list_cont" v-for="item in all" >
                        <div class="list_item" style="width: 280px;">{{item.test_name}}</div><div class="list_item">{{item.grade}}</div><div class="list_item">{{item.banji}}</div>
                        <div class="list_item">{{item.name}}</div><div class="list_item">{{item.studentType}}</div><div class="list_item">{{item.type}}</div>
                        <div class="list_item" style="width: 300px;">{{item.content}}</div><div class="list_item">{{item.status}}</div>
                    </div>
                </div>
            </div>
            <div class="page">
                <div class="page_num">
                    {{pageCur}} / {{pageTotal}}
                </div>
                <div class="num_show">
                    <div class="page_pre"  v-show="offset>1" @click="pagePrev"> 上一页</div>
                    <div class="page_next" v-show="hasmore" @click="pageNext">下一页</div>
                </div>
            </div>
        </el-dialog>
        <el-dialog title="预警详情"  :visible="personDialog"   :append-to-body="true" width="600px" @close="personDialog = false">
            <div class="info">
                <div class="info_item">姓名：{{detail.scoreInfo.name}}</div><div class="info_item">学号：{{detail.scoreInfo.student_id}}</div>
                <div class="info_item">考号：{{detail.scoreInfo.cand_id}}</div><div class="info_item">考试名：{{detail.scoreInfo.test_name}}</div>
                <div class="info_item">考试编号：{{detail.scoreInfo.test_num}}</div><div class="info_item">年级：{{detail.scoreInfo.grade}}</div>
                <div class="info_item">班级：{{detail.scoreInfo.banji}}</div><div class="info_item">考场：{{detail.scoreInfo.test_room}}</div>
                <div class="info_item">考场位置：{{detail.scoreInfo.location}}</div><div class="info_item">座位号：{{detail.scoreInfo.seat_num}}</div>
            </div>
            <div class="score">
                <div class="score_item">
                    <div class="score_name">语文</div>
                    <div class="score_val">{{detail.scoreInfo.chinese}}</div>
                </div>
                <div class="score_item">
                    <div class="score_name">数学</div>
                    <div class="score_val">{{detail.scoreInfo.math}}</div>
                </div>
                <div class="score_item">
                    <div class="score_name">外语</div>
                    <div class="score_val">{{detail.scoreInfo.english}}</div>
                </div>
                <div class="score_item">
                    <div class="score_name">物理</div>
                    <div class="score_val">{{detail.scoreInfo.physics}}</div>
                </div>
                <div class="score_item">
                    <div class="score_name">化学</div>
                    <div class="score_val">{{detail.scoreInfo.chemistry}}</div>
                </div>
                <div class="score_item">
                    <div class="score_name">生物</div>
                    <div class="score_val">{{detail.scoreInfo.biology}}</div>
                </div>
                <div class="score_item">
                    <div class="score_name">总分</div>
                    <div class="score_val">{{detail.scoreInfo.total}}</div>
                </div>
                <div class="score_item">
                    <div class="score_name">班级排名</div>
                    <div class="score_val">{{detail.scoreInfo.class_rank}}</div>
                </div>
                <div class="score_item">
                    <div class="score_name">校级排名</div>
                    <div class="score_val">{{detail.scoreInfo.school_rank}}</div>
                </div>
            </div>
            <div class="information">
                <div class="information_item">预警类型：{{detail.warningInfo.type}}</div>
                <div class="information_item">预警考试：{{detail.warningInfo.warning_test}}</div>
                <div class="information_item">预警说明：{{detail.warningInfo.content}}</div>
                <div class="information_item">预警状态：{{detail.warningInfo.status}}</div>
                <div class="information_item" v-show="detail.warningInfo.dine">预警学科：{{detail.warningInfo.dine}}</div>
            </div>
        </el-dialog>
    </div>
</template>

<script>

    import Vue from "vue";
    import { Dropdown, DropdownMenu, DropdownItem,Dialog,Input} from "element-ui";
    Vue.use(Dropdown);
    Vue.use(DropdownMenu);
    Vue.use(DropdownItem);
    Vue.use(Dialog);
    Vue.use(Input);
    export default {
        name: "Warning",
        data() {
            return {
                title:{},
                input: '',

                grade:'',
                classVal:0,
                studentType:'',
                testVal:'',
                list:[],
                gradeList:[],
                classList:[],
                typeList:[],
                testList:[],
                show:false,
                personDialog:false,
                allDialog:false,
                detail:{
                    scoreInfo:'',
                    warningInfo:'',
                },
                all:[],
                offset:'',
                hasmore:'',
                pageCur:'',
                pageTotal:'',

                workGrade:'',
                workClass:'',
                workTest:'',
                workType:'',

                testName:'',
            };
        },
        watch:{
            $route(to,from) {
                this.reTitle();
            }
        },
        mounted() {
            this.init();
            this.reTitle();
        },
        methods: {
            reTitle(){
                if(this.$route.path!='/warning/total'){
                    this.show=true;
                }else{
                    this.show=false
                }
                switch (this.$route.path) {
                    case '/warning/total':
                        this.title = '监控预警总体情况';
                        break;
                    case '/warning/beyond':
                        this.title = '临界学生预警';
                        break;
                    case '/warning/poor':
                        this.title = '学困学生预警';
                        break;
                    case '/warning/partial':
                        this.title = '偏科学生预警';
                        break;
                    case '/warning/below':
                        this.title = '不合格学生预警';
                        break;
                    case '/warning/decline':
                        this.title = '成绩排名下滑学生预警';
                        break
                }
            },
            init(){
                this.$api.work().then(res => {
                    this.list = res.list;
                });
                this.$api.gradelist().then(res => {
                    this.gradeList = res.list;
                    this.grade = res.list[0].value;
                    this.$api.left().then(res2 => {
                        this.typeList = res2;
                        this.studentType = res2[0].value;
                        this.reSub()
                    });
                });



            },
            reSub(){
                this.$api.testlist({type:this.studentType,grade:this.grade}).then(res => {
                    this.testList = res;
                    this.testName =this.testList[0].test_name;
                });
                this.$api.classlist({type:this.studentType}).then(res => {
                    this.classList = res.list;
                });
            },
            gradeSel(command){
                this.grade = command;
                this.reSub()
            },
            typeSel(command){
                this.studentType = command;
                this.reSub()
            },
            classSel(command){
                this.classVal = command;
                console.log(this.classVal)
            },
            test(command){
                this.testVal = command;
                for(let i=0;i<this.testList.length;i++){
                    if(this.testList[i].value==command){
                        return  this.testName = this.testList[i].name
                    }

                }
            },

            workDetail(id){
                this.personDialog = true;
                this.$api.detail({id:id}).then(res => {
                    this.detail = res;
                });
            },
            seeAll(){
                this.allDialog = true;
                this.$api.all().then(res => {
                    this.all = res.list;
                    this.repage(res)
                });
            },
            refreshWork(command){
                this.workGrade = command;
                this.offset = 0;
                this.$api.all({grade:this.workGrade,class:this.workClass,test:this.workTest,studentType:this.workType,offset:this.offset}).then(res => {
                    this.all = res.list;
                    this.repage(res)
                });
            },
            refreshWork2(command){
                this.workClass = command;
                this.offset = 0;
                this.$api.all({grade:this.workGrade,class:this.workClass,test:this.workTest,studentType:this.workType,offset:this.offset}).then(res => {
                    this.all = res.list;
                    this.repage(res)
                });
            },
            refreshWork3(command){
                this.workTest = command;
                this.offset = 0;
                this.$api.all({grade:this.workGrade,class:this.workClass,test:this.workTest,studentType:this.workType,offset:this.offset}).then(res => {
                    this.all = res.list;
                    this.repage(res)
                });
            },
            refreshWork4(command){
                this.workType = command;
                this.offset = 0;
                this.$api.all({grade:this.workGrade,class:this.workClass,test:this.workTest,studentType:this.workType,offset:this.offset}).then(res => {
                    this.all = res.list;
                    this.repage(res)
                });
            },
            repage(res){
                this.offset = res.paging.offset;
                this.hasmore = res.paging.hasMore;
                this.pageTotal = res.paging.total;
                this.pageCur = res.paging.currentPage*10;
            },

            searchVal(){
                this.offset = 0;
                this.$api.all({nameStr:this.input}).then(res => {
                    this.all = res.list;
                    this.offset =res.paging.offset
                });
            },


            pagePrev(){
                this.offset = this.offset-2;
                this.$api.all({grade:this.workGrade,class:this.workClass,test:this.workTest,studentType:this.workType,offset:this.offset}).then(res => {
                    this.all = res.list;
                    this.repage(res)
                });
            },
            pageNext(){
                this.$api.all({grade:this.workGrade,class:this.workClass,test:this.workTest,studentType:this.workType,offset:this.offset}).then(res => {
                    this.all = res.list;
                    this.repage(res)
                });
            },
        }
    }
</script>

<style scoped>
    @import "../css/dropdown.css";
    @import "../css/dialog.css";
    @import "../css/input.css";
    .warning{display: flex;width: 100%;height:100%;background: url("../assets/bg.jpg");}
    .title{margin-top:40px}
    .warning_nav{width:20%;height:100%;border-right:2px solid #0a5b85}

    .warning_list{display: flex;flex-direction: column;font-size: 24px;font-weight: bold;margin-top:30px}
    .warning_item{display: flex;align-items: center;height:90px;justify-content: center;font-size: 32px}
    .warning_cont{width: 60%;}
    .warning_title{display: flex;align-items: center;justify-content: center;height: 12%}
    .warning_grade{margin-right:30px;}
    .warning_type{margin-left:30px;}
    .warning_topic{font-size: 46px;color:#fff;display:inline-block;border-bottom: 3px solid rgb( 110, 194, 255 );}

    .warning_work{width:20%;background: rgba( 1, 16, 29, 0.851 );border-left:2px solid #0a5b85;}
    .work_title{font-size: 26px;text-shadow: 0 0 20px #145f87, 0 0 20px #145f87, 0 0 20px #145f87;font-weight: bold;color: #d6e9ff;padding-left:30px;
        display: flex;align-items: center;height: 10%}
    .work_list{height:80%;overflow: auto;}
    .work_item{padding:8px 0;font-size: 20px;color:#fff;border-top:2px solid #2a3c48}
    .name{display: flex;align-items: center;justify-content: space-around;font-size: 18px;padding:10px 0}
    .btn{border: 1px solid #2a3c48;font-size: 16px;padding:2px 5px;border-radius: 5px;background-color: #162736;cursor: pointer}
    .work_btn{display: flex;align-items: center;justify-content: center;height: 10%}
    .work_button{color: #fff;font-weight: bold;background-color: #1373d1;border-radius: 4px;font-size: 20px;width: 180px;  cursor: pointer;}
    .list{color:#fff;margin-top:20px;}
    .list_title{display: flex;font-size: 26px;color: #27a9ff;margin-bottom:10px}
    .list_box{height:400px; overflow: auto}
    .list_cont{display: flex;font-size: 20px;padding:6px 0;}
    .list_item{width: 120px;padding:0 10px}

    .info{display: flex;flex-wrap: wrap;}
    .info_item{width: 50%;padding: 5px 0}
    .score{display: flex;margin-top:20px;padding-top:20px;border-top:1px solid;justify-content: space-around}
    .score_item{text-align: center}
    .information{margin-top:20px;padding-top:20px;border-top:1px solid;}
    .information_item{padding:5px 0}
    .screen{display: flex;justify-content:space-between;align-items: center}
    .screen .el-dropdown{margin-left:15px;}
    .page{display: flex;justify-content: space-around}
    .num_show{display: flex;justify-content: space-around;width: 300px;}


    .warning_item.router-link-exact-active{color: #27a9ff;}

</style>