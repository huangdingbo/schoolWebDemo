<template>
    <div  :id="option.id" :style="{ height : option.height ? option.height:lineData.height}"></div>
</template>

<script>
    let eCharts = require("echarts/lib/echarts");
    require("echarts/lib/chart/line");
    require("echarts/lib/component/legendScroll");
    require("echarts/lib/component/tooltip");
    export default {
        name: "LineChart",
        data() {
            return {
                lineData: {
                    height: '200px',
                    fontSize: 14,
                    legend: true,
                    isArea: false,
                    showY: true,
                    hasMark: false,
                    legendBottom: 0,
                    txtColor: '#fff',
                    gridTop: '15%',
                    gridBottom: '10%',
                    gridLeft: '5%',
                    gridRight: '5%',
                    txtWidth: '100px',
                    colorArray: ['#01dafe', '#58e569', '#f0a54a',"#c23531","#cfb2a9"],//颜色
                    unit: '',  //单位
                    dataArray: [
                        {lineName: 1,name:555, value: [4, 5, 6, 7]}, {lineName: 2,name:444, value: [2, 5, 8, 9]},
                        {lineName: 3,name:999, value: [1, 3, 6, 9]}, {lineName: 4,name:333, value: [4, 5, 8, 2,]}
                        ],// 数据格式
                }
            }
        },
        props: {
            option: {}
        },
        mounted() {
            this.init();
        },
        methods: {
            init() {
                let options = Object.assign(this.lineData, this.option);
                let lineData = [];
                let xAxisData = [];
                for (let i = 0; i < options.dataArray.length; i++) {
                    let obj = options.dataArray[i];
                    let markPoint = {};
                    let markLine = {};
                    let areaStyle = {
                        normal: {
                            opacity: 0
                        }
                    };
                    if (options.hasMark) {
                        markPoint = {
                            symbolSize: 40,
                            label: {
                                normal: {
                                    show: true,
                                    color: '#fff',
                                    formatter: function (params) {
                                        return params.value + options.unit
                                    }
                                }

                            },
                            data: [
                                {
                                    type: 'max',
                                    name: '最大值',

                                },
                                {type: 'min', name: '最小值'}
                            ]
                        };
                        markLine = {
                            label: {
                                normal: {
                                    show: true,
                                    color: '#fff',
                                    formatter: function (params) {
                                        return params.value + options.danwei
                                    }
                                }

                            },
                            lineStyle: {
                                normal: {
                                    color: '#cfa162',
                                }

                            },
                            data: [
                                {type: 'average', name: '平均值'}
                            ]
                        }
                    }
                    if (options.isArea) {
                        areaStyle = {
                            normal: {
                                color: new eCharts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0,
                                    color: 'rgba(64,216,84,1)'
                                }, {
                                    offset: 1,
                                    color: 'rgba(79,242,240,0.3)'
                                }])
                            }
                        }
                    }
                    xAxisData.push(obj.name);
                    lineData.push({
                        name: obj.lineName,
                        type: 'line',
                        smooth: true,
                        areaStyle: areaStyle,
                        data: obj.value,
                        markPoint: markPoint,
                        markLine: markLine,
                        symbolSize: 12
                    });

                }
                let myChart = eCharts.init(document.getElementById(options.id));
                let option = {
                    tooltip: {
                        trigger: 'axis',
                    },
                    grid: {
                        left: options.gridLeft,
                        right: options.gridRight,
                        top: options.gridTop,
                        bottom: options.gridBottom,
                        containLabel: true
                    },
                    color: options.colorArray,
                    legend: {
                        show: options.legend,
                        right: 0,
                        icon: 'circle',
                        textStyle: {
                            color: '#fff',
                        }
                    },
                    dataZoom: {
                        type: 'inside',
                        start: 0,
                        end: 100
                    },
                    xAxis: {
                        type: 'category',
                        axisTick: {
                            show: false
                        },
                        axisLabel: {
                            show: true,
                            interval: 0,
                            textStyle: {
                                color: '#b2b2b2',
                                fontSize: options.fontSize,
                                baseline: 'top',
                                width: options.txtWidth
                            }
                        },
                        axisLine: {
                            lineStyle: {
                                color: '#81848b',
                                width: 2
                            }
                        },
                        data: xAxisData
                    },
                    yAxis: {
                        type: 'value',
                        axisTick: {
                            show: false
                        },
                        axisLine: {
                            show: options.showY,
                            lineStyle: {
                                color: '#81848b',
                                width: 2
                            }
                        },
                        axisLabel: {
                            show: options.showY,
                            textStyle: {
                                color: options.txtColor,
                                fontSize: options.fontSize,
                                baseline: 'top'
                            }
                        },
                        splitLine: {
                            show: false,
                            lineStyle: {
                                color: "#334050",
                                type: 'dotted'
                            }
                        }
                    },
                    series: lineData
                };
                myChart.setOption(option);
            }
        }
    }
</script>

<style scoped>

</style>