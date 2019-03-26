<template>
    <div class="">
        <warning-lamp :option="lamp"></warning-lamp>
        <div class="total_cont">
            <div class="total_list">
                <div class="title_small">高危学生预警</div>
                <div class="list">
                    <div class="list_title">
                        <div class="list_item">学生姓名</div><div class="list_item">学号</div><div class="list_item">年级班级</div><div class="list_item">预警次数</div>
                    </div>
                    <div class="list_box">
                        <div class="list_cont" v-for="item in list" >
                            <div class="list_item">{{item.name}}</div><div class="list_item">{{item.studentId}}</div><div class="list_item">{{item.gradeAndClass}}</div><div class="list_item">{{item.warningNum}}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="total_chart">
                <div class="total_radar">
                    <div class="title_small">预警类型分析</div>
                    <pie-chart :option="pie"></pie-chart>
                </div>
                <div class="total_line">
                    <div class="title_small">近十次考试预警发展趋势</div>
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
        name: "WarningBelow",
        components: {
            WarningLamp,
            LineChart,
            PieChart,
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
                pie:{
                    id:'pie-chart',
                    height:'300px',
                    radius:  "70%",
                    legendTop:'20',
                    center:['50%','55%'],
                    data:[]
                },
                line:{
                    id:'line-chart',
                    height:'300px',
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
                this.$api.header({type:2,studentType:this.studentType,grade:this.grade,testNum:this.testVal,class:this.classVal}).then(res => {
                    this.lamp = res.list;
                });
                this.$api.risk({type:this.studentType,grade:this.grade,testNum:this.testVal,class:this.classVal}).then(res => {
                    this.list = res.list;
                });
                this.$api.warningtype({type:this.studentType,grade:this.grade,testNum:this.testVal,class:this.classVal}).then(res => {
                    this.pie.data = res.list
                });
                this.$api.warningdevelop({studentType:this.studentType,grade:this.grade,testNum:this.testVal,class:this.classVal}).then(res => {
                    this.line.data = res.list
                });
            }
        }
    }
</script>

<style scoped>
    .total_cont{display: flex;justify-content: space-between}
    .list{color:#fff;margin-top:20px;}
    .list_title{display: flex;font-size: 26px;color: #27a9ff;margin-bottom:10px}
    .list_box{height:600px; overflow: auto}
    .list_cont{display: flex;font-size: 20px;padding:5px 0;}
    .list_item{width: 120px;}
    .total_radar{width: 600px;}
    @keyframes rotate
    {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }
</style>