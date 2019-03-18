<template>
    <div class="grade">
        <div class="grade_top">
            <div class="grade_subject">
                <el-dropdown trigger="click"  @command="leftItem" placement="bottom-start">
                    <span class="el-dropdown-link">
                        {{subjectName}}
                    </span>
                    <el-dropdown-menu slot="dropdown" >
                        <el-dropdown-item v-for="(item,index) in left" :command="item.value" >{{item.name}}</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </div>
            <div class="grade_title">总体概况</div>
            <div class="grade_test">
                <el-dropdown trigger="click"  @command="rightItem">
                    <span class="el-dropdown-link">
                        {{testName}}
                    </span>
                    <el-dropdown-menu slot="dropdown" >
                        <el-dropdown-item v-for="(item,index) in right" :command="[item.value,item.name]">{{item.name}}</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </div>
            <div></div>
        </div>
        <div class="grade_cont">
            <div class="grade_left">
                <div class="grade_total">
                    <div class="title_small">参考人数</div>
                    <div class="cont">
                        <div class="wave">
                            <img src="../assets/grade/card_wave_bg.png">
                            <img  src="../assets/grade/card_wave_bg.png">
                        </div>
                        <div class="cont_item" v-for="item in num">
                            <div class="num">{{ item.value}}</div>
                            <div class="optic">{{ item.name}}</div>
                        </div>
                    </div>
                </div>
                <div class="grade_online">
                    <pie-chart :option="pie"></pie-chart>
                </div>
                <div class="grade_from">
                    <bar-chart :option="bar"></bar-chart>
                </div>
            </div>
            <div class="grade_right">
                <div class="grade_student">

                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Vue from "vue";
    import PieChart from "../common/PieChart"
    import BarChart from "../common/BarChart"
    import { Dropdown, DropdownMenu, DropdownItem } from "element-ui";
    Vue.use(Dropdown);
    Vue.use(DropdownMenu);
    Vue.use(DropdownItem);
    export default {
        name: "AnalysisLife",
        components: {
            PieChart,
            BarChart
        },
        data() {
            return {
                subjectName:'理科',
                subject:1,
                testName:'',
                test:'',
                left:[],
                right:[],
                num:[],
                pie:{
                    id:'pieChart',
                    height:'280px',
                    orient:'',

                    data:[]
                },
                bar:{
                    id:'barChart',
                    height:'280px',
                    data:[]
                },
            };
        },
        mounted() {
            this.$api.left().then(res => {
                this.left = res;
            });
            this.init()

        },
        methods: {
            init(){
                this.$api.right({type:this.subject}).then(res => {
                    this.right = res.list;
                    this.test = res.list[0].value;
                    this.testName = res.list[0].name;
                    this.refresh();

                });
            },
            refresh(){
                this.$api.num({type:this.subject,testNum:this.test}).then(res => {
                    this.num = res;
                });
                this.$api.online({type:this.subject,testNum:this.test}).then(res => {
                    this.pie.data=[
                        {value:res.zhongBenNum,name:'重本上线人数'},
                        {value:res.benkeNum,name:'本科上线人数'},
                        {value:res.offline,name:'线下人数'}
                    ];
                });
                this.$api.constitute({type:this.subject,testNum:this.test}).then(res => {
                    this.bar.data = res;
                    console.log(res);
                });
            },
            leftItem(command){
                this.subject= command;
                if( command == 1){
                    this.subjectName = '理科'
                }else{
                    this.subjectName = '文科'
                }
                this.init()
            },
            rightItem(command){
                this.test = command[0];
                this.testName = command[1];
                this.refresh();
            }
        }
    }
</script>

<style scoped>
    @import "../css/dropdown.css";

    .grade_top{display: flex;text-align: center;align-items: center;justify-content: center}
    .grade_subject{margin-right: 40px}
    .grade_test{margin-left:40px;}
    .grade_title{font-size: 46px;color:#fff;display:inline-block;border-bottom: 3px solid rgb( 110, 194, 255 );padding: 16px 0;}
    .grade_total{width: 480px;}
    .cont{position:relative;margin-top:15px;border: 1px solid #1a4f6b;border-radius: 6px;background-color: rgba(7, 53, 79, 0.749);overflow: hidden}
    .wave{display:flex;position:absolute;bottom:0;left:0;animation:wave 4s linear infinite;-webkit-animation:wave 8s linear infinite;}
    .grade_cont{display: flex}
    .grade_online{width: 480px;margin-top:30px;}
    @keyframes wave
    {
        0% {
            left: 0;
        }
        100% {
            left: -1292px;
        }
    }
</style>