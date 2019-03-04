<template>
    <div :id="option.id" :style="{ height : option.height ? option.height:radarData.height}"></div>
</template>

<script>
    let eCharts = require("echarts/lib/echarts");
    require("echarts/lib/chart/radar");
    require("echarts/lib/component/legendScroll");
    require("echarts/lib/component/tooltip");
    export default {
        name: "RadarChart",
        data(){
            return{
                radarData:{
                    height:'400px',
                    color:["rgba(8,130,221,0.9)",
                        "rgba(255,208,107,0.9)",
                        "rgba(9,192,213,0.9)"],
                    center:['50%', '50%'],
                    radius: '75%',
                }
            }
        },
        props:{
          option:{

          }
        },
        mounted() {
            this.init()
        },
        methods: {
            init(){
                let options = Object.assign(this.radarData,this.option);
                let myChart = eCharts.init(document.getElementById(options.id));
                let option = {
                    color:options.color,
                    tooltip: {},
                    legend: {
                        orient:'vertical',
                        right:0,
                        textStyle: {
                            color: '#fff',
                        },
                    },
                    radar: {
                        // shape: 'circle',
                        center:options.center,
                        radius:options.radius,
                        name: {
                            textStyle: {
                                color: '#fff',
                                // backgroundColor: '#999',
                                borderRadius: 3,
                                padding: [3, 5]
                            }
                        },
                        indicator: [
                            { name: '销售（sales）', max: 6500},
                            { name: '管理（Administration）', max: 16000},
                            { name: '信息技术（Information Techology）', max: 30000},
                            { name: '客服（Customer Support）', max: 38000},
                            { name: '研发（Development）', max: 52000},
                            { name: '市场（Marketing）', max: 25000}
                        ]
                    },
                    series: [{
                        // name: '预算 vs 开销',
                        type: 'radar',
                        // areaStyle: {normal: {}},
                        lineStyle: {
                            width: 5,
                            type: 'solid',
                            shadowOffsetX: 0,
                            shadowOffsetY: 0,
                        },
                        data : [
                            {
                                value : [4300, 10000, 28000, 35000, 50000, 19000],
                                name : '预算分配'
                            },
                            {
                                value : [5000, 14000, 28000, 31000, 42000, 21000],
                                name : '实际开销'
                            }
                        ]
                    }]
                };
                myChart.setOption(option);
            }

        }
    }
</script>

<style scoped>

</style>