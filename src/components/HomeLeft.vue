<template>
    <div class="index-left">
        <div class="lineChart" >
            <div class="title_small">模块1</div>
            <LineChart :option="line"></LineChart>
        </div>
        <div class="pieChart">
            <div class="title_small">模块2</div>
            <PieChart :option="pie"></PieChart>
        </div>
        <div class="barChart">
            <div class="title_small">模块3</div>
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
                    height: '240px',
                    // data: [{value: 335, name: '1'},
                    //     {value: 310, name: '2'},
                    //     {value: 234, name: '3'}],
                    isRing: true,
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


<style scoped>
    .index-left {position: absolute;padding: 20px;width: 360px;top: 100px;left: 20px;border: 1px solid #19516f;
        border-radius: 5px;background-color: rgba(3, 16, 23, 0.702);box-shadow: 0px 0px 10px 0 #7bd4fc inset;}
</style>

