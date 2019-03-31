<template>
    <div :id="option.id" :style="{ height: option.height ? option.height : barData.height }"></div>
</template>

<script>
    let eCharts = require("echarts/lib/echarts");
    require("echarts/lib/chart/bar");
    require("echarts/lib/component/legendScroll");
    require("echarts/lib/component/tooltip");
    export default {
        name: "BarChart",
        data() {
            return {
                barData: {
                    height: "200px",
                    width:"100%",
                    color: [
                        "rgba(8,130,221,0.9)",
                        "rgba(255,208,107,0.9)",
                        "rgba(9,192,213,0.9)"
                    ],
                    XaxisTick: false,
                    XaxisLine: true,
                    XaxisLabel: true,
                    XsplitLine: false,
                    YaxisTick: false,
                    YaxisLine: false,
                    YaxisLabel: false,
                    YsplitLine: false,
                    Xtype:'category',
                    Ytype:'value',
                    gridTop: "10%",
                    gridBottom: "10%",
                    gridLeft: "5%",
                    gridRight: "5%",
                    legendLeft:'auto',
                    legendTop:'auto',
                    orient:'horizontal',  //horizontal vertical
                    formatter: function (val) {
                    }, //X轴自定义axisLabel显示内容
                    data: [
                        {lineName: 1, name: 666, value: 1},
                        {lineName: 2, name: 777, value: 2},
                        {lineName: 3, name: 888, value: 3},
                        {lineName: 4, name: 999, value: 4}
                    ]
                },
            };
        },
        props: {
            option: {}
        },
        watch: {
            "option.data"() {
                this.init();
            },
            immediate: true,
            deep: true
        },
        mounted() {
            this.init();
        },
        methods: {
            init() {
                let options = Object.assign(this.barData, this.option);
                let series = [];
                let Xname = [],Yname=[];
                let value = [];
                for (let i = 0; i < options.data.length; i++) {
                    if(options.Xtype=='value'){
                        Yname.push(options.data[i].name);
                    }else{
                        Xname.push(options.data[i].name);
                    }
                    value.push(options.data[i].value);
                }
                series.push({
                    type: "bar",
                    data: value
                });
                let myChart = eCharts.init(document.getElementById(options.id));
                let option = {
                    color: options.color,
                    legend: {
                        left:options.legendLeft,
                        orient:options.orient,
                        textStyle: {
                            color: "#fff"
                        }
                    },
                    tooltip: {},
                    grid: {
                        left: options.gridLeft,
                        right: options.gridRight,
                        top: options.gridTop,
                        bottom: options.gridBottom,
                        containLabel: true
                    },
                    xAxis: {
                        type: 'category',
                        axisTick: {
                            show: options.XaxisTick
                        },
                        axisLine: {
                            show: options.XaxisLine,
                            lineStyle: {
                                width: 2,
                                color: "#828e96"
                            }
                        },
                        splitLine: {
                            show: options.XsplitLine
                        },
                        axisLabel: {
                            show: options.XaxisLabel,
                            interval: 0,
                            margin: 10,
                            textStyle: {
                                color: "rgba(255,255,255,0.75)"
                            },
                            formatter: options.formatter()
                        },
                        data: Xname
                    },
                    yAxis: {
                        type: 'value',
                        axisTick: {
                            show: options.YaxisTick
                        },
                        axisLine: {
                            show: options.YaxisLine,
                            lineStyle: {
                                width: 2,
                                color: "#828e96"
                            }
                        },
                        splitLine: {
                            show: options.YsplitLine
                        },
                        axisLabel: {
                            show: options.YaxisLabel,
                            textStyle: {
                                color: "rgba(255,255,255,0.75)"
                            },
                        },
                        data: Yname
                    },
                    series: series
                };
                myChart.clear();
                myChart.setOption(option);
                if(options.Xtype =='value'){
                    option.xAxis.type = 'value';
                    option.yAxis.type = '';
                    myChart.clear(option);
                    myChart.setOption(option);
                }
            }
        }
    };
</script>

<style scoped></style>
