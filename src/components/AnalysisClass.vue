<template>
    <div class="test">
            <div class="left">
                <div class="grade_total">
                    <div class="title_small">本次考试各班预警人数</div>
                    <div class="chart_box">
                        <funnel-chart :option="funnel"></funnel-chart>
                    </div>
                </div>
                <div class="grade_online">
                    <div class="title_small">本次考试上线情况</div>
                    <div class="chart_box">
                        <bar-chart :option="bar"></bar-chart>
                    </div>
                </div>
                <div class="grade_online">
                    <div class="title_small">学生构成分析</div>
                    <div class="chart_box">
                        <line-chart :option="line2"></line-chart>
                    </div>
                </div>

            </div>
            <div class="right">
                <div class="grade_rank">
                    <div class="title_small">本次考试班级均分排名</div>
                    <div class="list">
                        <div class="list_title">
                            <div class="list_item">班级</div><div class="list_item">班级均分</div><div class="list_item">班级排名</div>
                        </div>
                        <div class="list_cont" v-for="item in list" >
                            <div class="list_item">{{item.name}}</div><div class="list_item">{{item.avg}}</div><div class="list_item">{{item.rank}}</div>
                        </div>
                    </div>
                </div>
                <div class="grade_line">
                    <div class="title_small">各班本科上线稳定行分析</div>
                    <div class="chart_box">
                        <line-chart :option="line"></line-chart>

                    </div>
                </div>
            </div>
    </div>
</template>

<script>
    import LineChart from"../common/LineChart"
    import BarChart from"../common/BarChart"
    import FunnelChart from "../common/FunnelChart"
    export default {
        name: "AnalysisTest",
        components: {
            FunnelChart,
            LineChart,
            BarChart
        },
        props:{
            test:{},
            subject:{},
        },
        data(){
            return{
                bar:{
                    id:'barChart',
                    height:'100%',
                    width:'100%',
                    data:[]
                },
                line:{
                    id:'lineChart',
                    height:'100%',
                    legendLeft:'0',
                    legendTop:'20',
                    gridTop:'20%',
                    moreLine:true,
                    xAxisData:[],
                    data:[]
                },
                line2:{
                    id:'lineChart2',
                    height:'100%',
                    legendLeft:'0',
                    legendTop:'20',
                    gridTop:'20%',
                    data:[]
                },
                funnel:{
                    id:'funnelChart',
                    height:'100%',
                    data:[]
                },
                list:[],
            }
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
        mounted() {
            if(this.test){
                this.refresh()

            }
        },
        methods: {
            refresh(){
                this.$api.online({type:2,testNum:this.test}).then(res => {
                    this.bar.data=[];
                    for(let i in res){
                        this.bar.data.push({name:res[i].banji,value:res[i].zhongBenNum});
                    }
                });
                this.$api.constitute({type:2,testNum:this.test}).then(res => {
                    this.line2.data ='';
                    this.line2.data = res;
                });
                // this.$api.num({type:2,testNum:this.test,}).then(res => {
                // });
                this.$api.avgrank({type:2,testNum:this.test}).then(res => {
                    this.list = res.list
                });
                this.$api.warningnum({testNum:this.test}).then(res => {
                    this.funnel.data = [];
                    this.funnel.data = res.list
                });
                this.$api.stable({testNum:this.test}).then(res => {
                    this.line.data=[];
                    this.line.xAxisData=[];
                    for(let x in res.list[0].data){
                        this.line.xAxisData.push(res.list[0].data[x].testName)
                    }
                    for(let i in res.list){
                        let yy=[];
                        for(let n in res.list[i].data){
                            yy.push(res.list[i].data[n].num);
                        }
                        this.line.data.push({name:res.list[i].name,lineName:res.list[i].name,value:yy})
                    }
                });
                
            }
        },
    }
</script>

<style scoped>
    .test{width:100%;height:80%;display: flex;justify-content: space-around}
    .left,.right{width: 45%;height: 100%}
    .grade_total{height: 30%}
    .grade_online{height: 35%}
    .grade_rank{height: 60%}
    .grade_line{height: 40%}
    .list{color:#fff;height: 80%;overflow: auto;width: 50%}
    .list_title{display: flex;font-size: 26px;color: #27a9ff;}
    .list_cont{display: flex;font-size: 20px;padding:5px 0;border-bottom: 1px solid}
    .list_item{width: 120px;}
</style>