<template>
    <div :id="option.id"
         :style="{
            height : option.height ? option.height:funnelData.height
       }">
    </div>
</template>

<script>
    let eCharts = require("echarts/lib/echarts");
    require("echarts/lib/chart/funnel");
    require("echarts/lib/component/legendScroll");
    require("echarts/lib/component/tooltip");
    export default {
        name: "FunnelChart",
        data(){
            return{
                funnelData:{
                    height: "200px",
                    colorArray: ["#01dafe", "#58e569", "#f0a54a", "#c23531", "#cfb2a9"],
                    data:[]
                }
            }
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
            init(){
                let options = Object.assign(this.funnelData,this.option);
                let myChart = eCharts.init(document.getElementById(options.id));
                let option = {
                    color:options.colorArray,
                    legend: {
                        orient:'vertical',
                        top:'10%',
                        right:'10%',
                        textStyle: {
                            color: '#fff',
                        },
                    },
                    tooltip: {
                        trigger: 'item',
                        formatter: "{b} : {c}人"
                    },
                    calculable: true,
                    series: [
                        {
                            name:'',
                            type:'funnel',
                            left: 0,
                            top: 20,
                            bottom: 20,
                            width: '80%',
                            min: 0,
                            max: 100,
                            minSize: '0%',
                            maxSize: '100%',
                            sort: 'descending',
                            gap: 2,
                            label: {
                                show: true,
                                position: 'inside'
                            },
                            labelLine: {
                                length: 10,
                                lineStyle: {
                                    width: 1,
                                    type: 'solid'
                                }
                            },
                            itemStyle: {
                                borderColor: '#fff',
                                borderWidth: 1
                            },
                            emphasis: {
                                label: {
                                    fontSize: 20
                                }
                            },
                            data: options.data,
                        }
                    ]
                };
                console.log(option)
                myChart.clear();
                myChart.setOption(option);
                window.addEventListener('resize',function () {
                    myChart.resize();
                });
            }
        },

    }
</script>

<style scoped>

</style>