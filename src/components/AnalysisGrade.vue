<template>
    <div class="grade">
        <div class="left">
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
                <div class="title_small">上线情况</div>
                <div class="chart_box">
                    <pie-chart :option="pie"></pie-chart>
                </div>
            </div>
            <div class="grade_from">
                <div class="title_small">学生构成分析</div>
                <div class="chart_box">
                 <bar-chart :option="bar"></bar-chart>
                </div>
            </div>
        </div>
        <div class="right">
                <div class="grade_student">
                    <div class="title_small">总分成绩显著进步学生名单</div>
                    <div class="list">
                        <div class="list_title">
                            <div class="list_item">姓名</div><div class="list_item">班级</div><div class="list_item">本次总分</div>
                            <div class="list_item">本次排名</div><div class="list_item">变化名次</div>
                        </div>
                        <div class="list_cont" v-for="item in studentList.slice(0,10)" >
                            <div class="list_item">{{item.name}}</div><div class="list_item">{{item.showName}}</div><div class="list_item">{{item.total}}</div>
                            <div class="list_item">{{item.school_rank}}</div><div class="list_item">{{item.changeRank}}</div>
                        </div>
                    </div>
                </div>
                <div class="grade_avg">
                    <div class="title_small">本次考试-上次考试年级各科均分</div>
                    <div class="chart_box">
                        <radar-chart :option="radar"></radar-chart>

                    </div>
                </div>
            </div>
    </div>
</template>

<script>

    import PieChart from "../common/PieChart"
    import BarChart from "../common/BarChart"
    import RadarChart from "../common/RadarChart"
    import Vue from "vue";
    import { Dropdown, DropdownMenu, DropdownItem } from "element-ui";
    Vue.use(Dropdown);
    Vue.use(DropdownMenu);
    Vue.use(DropdownItem);
    export default {
        name: "AnalysisLife",
        components: {
            PieChart,
            BarChart,
            RadarChart
        },
        props:{
            test:{},
            subject:{},
        },
        watch: {
            "test"() {
                this.refresh();
            },
            "subject"(){
                this.refresh();
            },
            immediate: true,
            deep: true
        },
        data() {
            return {
                num:[],
                pie:{
                    id:'pieChart',
                    height:'100%',
                    width:'100%',
                    orient:'',
                    legendTop:'10%',
                    data:[]
                },
                bar:{
                    id:'barChart',
                    height:'100%',
                    width:'100%',
                    data:[]
                },
                radar:{
                    id:'radarChart',
                    height:'100%',
                    width:'100%',
                    indicator: [],
                    data:[],
                },
                studentList:[],
            };
        },
        mounted() {
            if(this.test){
                this.refresh()
            }
        },
        methods: {
            refresh(){
                this.$api.num({type:this.subject,testNum:this.test}).then(res => {
                    this.num = res;
                });
                this.$api.online({type:1,testNum:this.test}).then(res => {
                    this.pie.data=[
                        {value:res.zhongBenNum,name:'重本上线人数'},
                        {value:res.benkeNum,name:'本科上线人数'},
                        {value:res.offline,name:'线下人数'}
                    ];
                });
                this.$api.constitute({type:this.subject,testNum:this.test}).then(res => {
                    this.bar.data = res;
                });
                this.$api.progress({type:this.subject,testNum:this.test}).then(res => {
                    this.studentList = res;
                });
                this.$api.divide({type:this.subject,testNum:this.test}).then(res => {
                    this.radar.indicator=[];
                    this.radar.data = [];
                    let xx=[];
                    let yy=[];
                    for(let i in res.currentTestList){
                        this.radar.indicator.push({max:res.currentTestList[i].maxNum,name:res.currentTestList[i].name})
                        xx.push(res.currentTestList[i].avg)
                    }
                    for(let i in res.lastTestList){
                        yy.push(res.lastTestList[i].avg)
                    }
                    this.radar.data=[{value:xx, name:'本次考试'},{value:yy,name:'上次考试'}]
                })
            },

        }
    }
</script>

<style scoped>

    .grade{display: flex;justify-content: space-around;height: 80%}
    .left,.right{width: 45%;height: 100%}
    .grade_total{height: 30%}
    .grade_student{height: 55%}
    .grade_avg{height: 45%}
    .cont{position:relative;border: 1px solid #1a4f6b;border-radius: 6px;background-color: rgba(7, 53, 79, 0.749);overflow: hidden;height: 80%}
    .wave{display:flex;position:absolute;bottom:0;left:0;animation:wave 4s linear infinite;-webkit-animation:wave 8s linear infinite;}
    .grade_online,.grade_from{height: 35%}
    .list{color:#fff;height: 80%;overflow: auto}
    .list_title{display: flex;font-size: 26px;color: #27a9ff;}
    .list_cont{display: flex;font-size: 20px;padding:5px 0;}
    .list_item{width: 120px;}
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