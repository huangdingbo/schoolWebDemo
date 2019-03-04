<template>
    <div class="index-left">
        <div class="lineChart" >
            <div class="title">模块1</div>
            <LineChart :option="line"></LineChart>
        </div>
        <div class="pieChart">
            <div class="title">模块2</div>
            <PieChart :option="pie"></PieChart>
        </div>
        <div class="barChart">
            <div class="title">模块3</div>
            <BarChart :option="bar"></BarChart>
        </div>
    </div>
</template>

<script>

    import LineChart from "../common/LineChart"
    import PieChart from "../common/PieChart"
    import BarChart from "../common/BarChart";

    export default {
        name: "HomeLeft",
        components: {
            LineChart,
            BarChart,
            PieChart,
        },
        data() {
            return {
                line: {
                    id:'line-chart',
                    height: '160px'
                },
                pie: {
                    id:'pie-chart',
                    data: [{value: 335, name: '直接访问'},
                        {value: 310, name: '邮件营销'},
                        {value: 234, name: '联盟广告'}],
                    height: '240px'
                },
                bar: {
                    id:'bar-chart',
                    // height: '240px'
                },
            }
        },
        mounted() {
        },
        methods: {}
    }
</script>


<style>
    .title {
        display: flex;
        vertical-align: middle;
        color: #fff;
        font-size: 28px;
        text-shadow: 0 0 20px #013c80, 0 0 20px #013c80, 0 0 20px #013c80;
        margin: 0;
    }
</style>

<style scoped>
    .index-left {position: absolute;padding: 20px;width: 345px;top: 100px;left: 20px;border: 1px solid #19516f;height: 700px;
        border-radius: 5px;background-color: rgba(3, 16, 23, 0.702);box-shadow: 5px 8px 10px 0 rgb(0, 0, 0);}
</style>

