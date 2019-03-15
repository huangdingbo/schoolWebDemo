<template>
    <div class="index-right">
        <div class="barChart">
            <div class="title_small">本次考试各班本科概况</div>
            <BarChart :option="bar"></BarChart>
        </div>
        <div class="pieChart">
            <div class="title_small">本次考试各班重本分布</div>
            <PieChart :option="pie"></PieChart>
        </div>
        <div class="lineChart">
            <div class="title_small">各年级考试本科上线率</div>
            <LineChart :option="line"></LineChart>
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
        data() {
            return {
                bar: {
                    id:'bar-chart3',
                    height: "240px",
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
                    radius: "65%",
                    height: "240px",
                    data: []
                },
                line: {
                    id: "line-chart",
                    data: [],
                }
            };
        },
        mounted() {
            this.$api.regular().then(res => {
                this.bar.data = res.list;
            });
            this.$api.weigh().then(res => {
                this.pie.data = res.list;
            });
            this.$api.year().then(res => {
                this.line.data = res.list;
            });
        }
    };
</script>

<style scoped>
    .index-right {
        position: absolute;
        right: 20px;
        width: 360px;
        top: 100px;
        border: 1px solid #19516f;
        padding: 20px;
        border-radius: 5px;
        background-color: rgba(3, 16, 23, 0.702);
        box-shadow: 0px 0px 10px 0 #7bd4fc inset;
    }
</style>
