<template>
    <div
            :id="option.id"
            :style="{ height: option.height ? option.height : lineData.height }"
    ></div>
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
                    height: "200px",
                    fontSize: 14,
                    legend: true,
                    isArea: false,
                    showY: true,
                    hasMark: false,
                    legendBottom: 0,
                    txtColor: "#fff",
                    gridTop: "15%",
                    gridBottom: "10%",
                    gridLeft: "5%",
                    gridRight: "5%",
                    legendTop:'auto',
                    legendLeft:'auto',
                    txtWidth: "100px",
                    colorArray: ["#01dafe", "#58e569", "#f0a54a", "#c23531", "#cfb2a9"], //颜色
                    unit: "", //单位
                    // data2: [
                    //     {lineName: 1,name:555, value: [4, 5, 6, 7]}, {lineName: 2,name:444, value: [2, 5, 8, 9]},
                    //     {lineName: 3,name:999, value: [1, 3, 6, 9]}, {lineName: 4,name:333, value: [4, 5, 8, 2,]}
                    //     ],// 数据格式
                    moreLine:false,
                    data: [
                        {lineName: 1, name: 666, value: 1},
                        {lineName: 2, name: 777, value: 2},
                        {lineName: 3, name: 888, value: 3},
                        {lineName: 4, name: 999, value: 4}
                    ]
                }
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
                let options = Object.assign(this.lineData, this.option);
                let lineData = [];
                let xAxisData = [];
                let value = [];
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
                                color: "#fff",
                                formatter: function (params) {
                                    return params.value + options.unit;
                                }
                            }
                        },
                        data: [
                            {
                                type: "max",
                                name: "最大值"
                            },
                            {type: "min", name: "最小值"}
                        ]
                    };
                    markLine = {
                        label: {
                            normal: {
                                show: true,
                                color: "#fff",
                                formatter: function (params) {
                                    return params.value + options.danwei;
                                }
                            }
                        },
                        lineStyle: {
                            normal: {
                                color: "#cfa162"
                            }
                        },
                        data: [{type: "average", name: "平均值"}]
                    };
                }
                if (options.isArea) {
                    areaStyle = {
                        normal: {
                            color: new eCharts.graphic.LinearGradient(0, 0, 0, 1, [
                                {
                                    offset: 0,
                                    color: "rgba(64,216,84,1)"
                                },
                                {
                                    offset: 1,
                                    color: "rgba(79,242,240,0.3)"
                                }
                            ])
                        }
                    };
                }
                if (options.moreLine){
                    for (let i = 0; i < options.data.length; i++) {
                        let obj = options.data[i];
                        xAxisData.push(obj.name);
                        lineData.push({
                            type: "line",
                            smooth: true,
                            name:options.data[i].lineName,
                            areaStyle: areaStyle,
                            data: options.data[i].value,
                            markPoint: markPoint,
                            markLine: markLine,
                            symbolSize: 12
                        })
                    }

                }
                else{
                    for (let i = 0; i < options.data.length; i++) {
                        let obj = options.data[i];
                        xAxisData.push(obj.name);
                        value.push(options.data[i].value);
                    }
                    lineData = {
                        // name: obj.lineName,
                        type: "line",
                        smooth: true,
                        areaStyle: areaStyle,
                        data: value,
                        markPoint: markPoint,
                        markLine: markLine,
                        symbolSize: 12
                    };
                }


                let myChart = eCharts.init(document.getElementById(options.id));
                let option = {
                    tooltip: {
                        trigger: "axis"
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
                        top:options.legendTop,
                        left: options.legendLeft,
                        icon: "circle",
                        textStyle: {
                            color: "#fff"
                        }
                    },
                    dataZoom: {
                        type: "inside",
                        start: 0,
                        end: 100
                    },
                    xAxis: {
                        type: "category",
                        axisTick: {
                            show: false
                        },
                        axisLabel: {
                            show: true,
                            interval: 0,
                            textStyle: {
                                color: "#b2b2b2",
                                fontSize: options.fontSize,
                                baseline: "top",
                                width: options.txtWidth
                            },
                            formatter:function (params) {
                                if(params.length > 4){
                                    return params.slice(0,4) +'...'
                                }
                            }
                        },
                        axisLine: {
                            lineStyle: {
                                color: "#81848b",
                                width: 2
                            }
                        },
                        data: xAxisData
                    },
                    yAxis: {
                        type: "value",
                        axisTick: {
                            show: false
                        },
                        axisLine: {
                            show: options.showY,
                            lineStyle: {
                                color: "#81848b",
                                width: 2
                            }
                        },
                        axisLabel: {
                            show: options.showY,
                            textStyle: {
                                color: options.txtColor,
                                fontSize: options.fontSize,
                                baseline: "top"
                            }
                        },
                        splitLine: {
                            show: false,
                            lineStyle: {
                                color: "#334050",
                                type: "dotted"
                            }
                        }
                    },
                    series: lineData
                };
                myChart.setOption(option);
            }
        }
    };
</script>

<style scoped></style>
