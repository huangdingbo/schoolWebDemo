<template>
    <div class="test">
            <div class="left">
                <div class="grade_total">
                    <div class="title_small">参考人数</div>
                </div>
                <div class="grade_online">
                    <div class="title_small">本次考试上线情况</div>
                    <bar-chart :option="bar"></bar-chart>
                </div>
                <div class="grade_online">
                    <div class="title_small">学生构成分析</div>
                    <bar-chart :option="bar"></bar-chart>
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
                    <line-chart :option="line"></line-chart>
                </div>
            </div>
    </div>
</template>

<script>
    import LineChart from"../common/LineChart"
    import BarChart from"../common/BarChart"
    export default {
        name: "AnalysisTest",
        components: {
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
                    height:'280px',
                    data:[]
                },
                line:{
                    id:'lineChart',
                    height:'360px',
                    legendLeft:'0',
                    legendTop:'20',
                    gridTop:'20%',
                    moreLine:true,
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
                    console.log(res);
                });
                this.$api.avgrank({type:2,testNum:this.test}).then(res => {
                    this.list = res.list
                });
                this.$api.stable({testNum:this.test}).then(res => {
                    this.line.data=[];
                    for(let i in res.list){
                        let yy=[];
                        for(let n in res.list[i].data){
                            yy.push(res.list[i].data[n].num)
                            // console.log(yy);
                        }
                        this.line.data.push({name:res.list[i].name,lineName:res.list[i].data[i].testName,value:yy})
                    }

                });
                
            }
        },
    }
</script>

<style scoped>
    .test{display: flex;margin-top:20px;}
    .left,.right{width: 640px;}
    .list{color:#fff;margin-top:20px;}
    .list_title{display: flex;font-size: 26px;color: #27a9ff;margin-bottom:10px}
    .list_cont{display: flex;font-size: 20px;padding:5px 0;}
    .list_item{width: 120px;}
    .grade_line{margin-top:40px;}
</style>