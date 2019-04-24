<template>
    <div
            :id="option.id"
            :style="{
                height: option.height ? option.height : pieData.height}"
    ></div>
</template>

<script>
    let eCharts = require("echarts/lib/echarts");
    require("echarts/lib/chart/pie");
    require("echarts/lib/component/legendScroll");
    require("echarts/lib/component/tooltip");
    export default {
        name: "PieChart",
        data() {
            return {
                pieData: {
                    height: "100%",
                    width:"100%",
                    color: [
                        "#ffb55d",
                        "#ee7662",
                        "#7f50cc",
                        "#2246b2",
                        "#1aabb7",
                        "#45a55b"
                    ],
                    legendLeft:'auto',
                    legendTop:'auto',
                    orient:'horizontal',  //horizontal vertical
                    seriesName: "",
                    radius: ["40%", "70%"],
                    center: ["50%", "50%"],
                    data: [
                        {value: 335, name: "1"},
                        {value: 310, name: "2"},
                        {value: 234, name: "3"},
                        {value: 234, name: "4"},
                        {value: 234, name: "5"}
                    ], //數據格式
                    roseType: false, //roseType:radius为南丁格尔图
                    isRing: false,
                    ring_series: {
                        type: "pie",
                        label: {
                            normal: {
                                position: "inner"
                            }
                        },
                        radius: ["0%", "30%"],
                        center: ["50%", "50%"],
                        data: [
                            {value: 335, name: "1"},
                            {value: 310, name: "2"},
                            {value: 234, name: "3"}
                        ]
                    }
                },
            };
        },
        props: {
            option: {
                type: Object,
                default: () => {
                    return {};
                }
            }
        },
        watch: {
            "option.data"() {
                this.init();
            },
            "option.resize"() {
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
                let options = Object.assign(this.pieData, this.option);
                let myChart = eCharts.init(document.getElementById(options.id));
                if (options.isRing == false) {
                    options.ring_series = "";
                }
                let option = {
                    color: options.color,
                    tooltip: {
                        trigger: "item"
                    },
                    legend: {
                        left: options.legendLeft,
                        top: options.legendTop,
                        orient: options.orient,
                        textStyle: {
                            color: "#fff"
                        }
                    },
                    series: [
                        {
                            type: "pie",
                            name: options.seriesName,
                            roseType: options.roseType,
                            radius: options.radius,
                            center: options.center,
                            label: {
                                normal: {
                                    show: false,
                                    position: "inside"
                                },
                                emphasis: {
                                    show: true,
                                    textStyle: {
                                        fontSize: "24",
                                        fontWeight: "bold"
                                    }
                                }
                            },
                            itemStyle: {
                                borderColor: "rgba(0,0,0,0.3)",
                                borderWidth: 3
                            },
                            data: options.data
                        },
                        options.ring_series
                    ]
                };
                myChart.clear();
                myChart.setOption(option);
                window.addEventListener('resize',function () {
                    myChart.resize();
                });

            }
        }
    };
</script>

<style scoped></style>
