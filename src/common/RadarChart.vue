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
                    indicator: [
                        { name: '销售', max: 6500},
                        { name: '管理', max: 16000},
                        { name: '信息技术', max: 30000},
                        { name: '客服', max: 38000},
                        { name: '研发', max: 52000},
                        { name: '市场', max: 25000}
                    ],
                    data:[
                        {
                            value : [4300, 10000, 28000, 35000, 50000, 19000],
                            name : '预算分配'
                        },
                        {
                            value : [5000, 14000, 28000, 31000, 42000, 21000],
                            name : '实际开销'
                        }
                        ]
                }
                }
        },
        props:{
          option:{
          }
        },
        watch: {
            "option.data"() {
                this.init();
            },
            immediate: true,
            deep: true
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
                        // shape: 'circle', //形状
                        // splitNumber: 3, // 雷达图圈数设置
                        center:options.center,
                        radius:options.radius,
                        name: {
                            textStyle: {
                                color: '#fff',
                                fontSize:'16',
                                // backgroundColor: '#999',
                                borderRadius: 3,
                                padding: [3, 5]
                            }
                        },
                        axisLine: {
                            lineStyle: {
                                color: 'rgba(131,141,158,.3)',
                            },
                        },
                        indicator: options.indicator,
                        splitArea : {
                            show : false,
                            // areaStyle : {
                            //     color: 'rgba(255,0,0,0)', // 图表背景的颜色
                            // },
                        },
                        splitLine : {
                            show : true,
                            lineStyle : {
                                width : 2,
                                color : 'rgba(131,141,158,.3)', // 设置网格的颜色
                            },
                        },
                    },
                    series: [{
                        symbol: 'circle', // 拐点的样式，还可以取值'rect','angle'等
                        symbolSize: 10, // 拐点的大小
                        // name: '预算 vs 开销',
                        type: 'radar',
                        // areaStyle: {normal: {}},
                        lineStyle: {
                            width: 5,
                            type: 'solid',
                            shadowOffsetX: 0,
                            shadowOffsetY: 0,
                        },
                        areaStyle:{
                            normal:{
                                opacity: '0.2',
                            },
                            emphasis:{
                                opacity: '0.3',
                            },
                        },
                        data :options.data
                    }]
                };
                myChart.setOption(option);
            }

        }
    }
</script>

<style scoped>

</style>