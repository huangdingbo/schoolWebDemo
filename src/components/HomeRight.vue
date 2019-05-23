<template>
    <div class="index-right">
        <div class="barChart">
            <div class="title_small">本次考试各班本科概况</div>
            <div class="chartBox">
                <BarChart :option="bar"></BarChart>
            </div>
        </div>
        <div class="pieChart">
            <div class="title_small">本次考试各班重本分布</div>
            <div class="chartBox">
                <PieChart :option="pie"></PieChart>
            </div>
        </div>
        <div class="lineChart">
            <div class="title_small">各次考试本科上线率</div>
            <div class="chartBox">
                <LineChart :option="line"></LineChart>
            </div>
        </div>
    </div>
</template>

<script>
    import PieChart from "../common/PieChart";
    import LineChart from "../common/LineChart";
    import BarChart from "../common/BarChart"

    export default {
        name: "HomeRight",
        components: {
            LineChart,
            PieChart,
            BarChart,
        },
        props:{
            option:{}
        },
        watch:{
            option(){
                this.init(this.option)
            }
        },
        data() {
            return {
                bar: {
                    id:'bar-chart3',
                    height:'100%',
                    resize:'',
                    Xtype: 'value',
                    Ytype: '',
                    XaxisLine:false,
                    YaxisLine:true,
                    YaxisLabel:true,
                    data:[]
                },
                pie: {
                    id: "pie-chart",
                    roseType: "",
                    resize:'',
                    radius: "65%",
                    height:'100%',
                    data: []
                },
                line: {
                    id: "line-chart",
                    height:'100%',
                    resize:'',
                    interval:1,
                    data: [],
                },
                testValue:'',
            };
        },
        mounted() {
            this.init();
        },
        methods: {
            init(testVal){
                this.$api.regular({test:testVal}).then(res => {
                    this.bar.data = res.list;
                });
                this.$api.weigh({test:testVal}).then(res => {
                    this.pie.data = res.list;
                });
                this.$api.year({test:testVal}).then(res => {
                    this.line.data=[];
                    for(let i = 0;i <res.list.three.length; i++){
                        this.line.data.push({name:res.list.three[i].test_name,value:res.list.three[i].benke_num})
                    }
                });
            }
        }
    };
</script>

<style scoped>
    .index-right {
        position: absolute;
        right: 1%;
        width:20%;
        height: 80%;
        top: 100px;
        border: 1px solid #19516f;
        padding:1%;
        border-radius: 5px;
        background-color: rgba(3, 16, 23, 0.702);
        box-shadow: 0px 0px 10px 0 #7bd4fc inset;
    }
    .barChart,.pieChart,.lineChart{height: 33%}
    .chartBox{height: 80%}
</style>
