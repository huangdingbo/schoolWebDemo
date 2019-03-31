<template>
    <div class="center">
        <warning-lamp :option="lamp"></warning-lamp>
        <div class="center_cont">
            <div class="center_list">
                <div class="title_small">贫困学生预警</div>
                <div class="list">
                    <div class="list_title">
                        <div class="list_item">学生姓名</div><div class="list_item">年级班级</div><div class="list_item" style="width: 300px">预警说明</div><div class="list_item">预警状态</div>
                    </div>
                    <div class="list_box">
                        <div class="list_cont" v-for="item in list" >
                            <div class="list_item">{{item.name}}</div><div class="list_item">{{item.grade}}{{item.banji}}</div><div class="list_item" style="width: 300px">{{item.content}}</div><div class="list_item">{{item.status}}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="center_chart">
                <div class="title_small">临界学生近十次考试预警发展趋势</div>
                <div class="chart_box">
                    <line-chart :option="line"></line-chart>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import WarningLamp from '../common/WarningLamp'
    import LineChart from '../common/LineChart'
    import PieChart from '../common/PieChart'
    export default {
        name: "WarningPoor",
        components: {
            WarningLamp,
            LineChart,
        },
        props:{
            grade:{},
            studentType:{},
            classVal:{},
            testVal:{},
        },
        data(){
            return{
                lamp:{},
                list:[],

                line:{
                    id:'line-chart',
                    height:'100%',
                    legendTop:'20',
                    data:[]
                },
            }
        },
        watch: {
            grade(){
                if(this.grade&&this.studentType){
                    this.refresh();
                }
            },
            studentType(){
                if(this.grade&&this.studentType){
                    this.refresh();
                }
            },
            classVal(){
                this.refresh();
            },
            testVal(){
                this.refresh();
            },
            immediate: true,
            deep: true
        },
        mounted() {
            if(this.grade&&this.studentType){
                this.refresh();
            }
        },
        methods: {
            refresh(){
                this.$api.header({type:5,studentType:this.studentType,grade:this.grade,testNum:this.testVal,class:this.classVal}).then(res => {
                    this.lamp = res.list;
                });
                this.$api.statistical({type:5,studentType:this.studentType,grade:this.grade,testNum:this.testVal,class:this.classVal}).then(res => {
                    this.list = res.list;
                });
                this.$api.warningdevelop({type:5,studentType:this.studentType,grade:this.grade,testNum:this.testVal,class:this.classVal}).then(res => {
                    this.line.data = res.list
                });
            }
        }
    }
</script>

<style scoped>
    @import "../css/warning.css";

    .center{height: 88%;width: 100%}
    .center_cont{display: flex;justify-content: space-between;flex-direction: column;height: 80%;padding: 0 40px;}
    .lamp{display: flex;justify-content: space-around;height: 20%}
    .center_list{height: 60%}
    .center_chart{height: 40%}
    .list{color:#fff;height: 80%;}
    .list_title{display: flex;font-size: 26px;color: #27a9ff;justify-content: space-between;height: 16%}
    .list_box{height:84%; overflow: auto}
    .list_cont{display: flex;font-size: 20px;padding:5px 0;    justify-content: space-between;}
    .list_item{width: 120px;}
</style>