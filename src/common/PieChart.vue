<template>
    <div :id="option.id" :style="{ height : option.height ? option.height:pieData.height}"></div>
</template>

<script>
    let eCharts = require("echarts/lib/echarts");
    require("echarts/lib/chart/pie");
    require("echarts/lib/component/legendScroll");
    require("echarts/lib/component/tooltip");
    export default {
        name: "PieChart",
        data(){
            return{
                pieData:{
                    height:'200px',
                    data:[],
                    color: ["rgba(8,130,221,0.9)",
                        "rgba(255,208,107,0.9)",
                        "rgba(9,192,213,0.9)"],
                    seriesName:'',
                    radius:["30%", "70%"],
                    center:['50%','50%'],
                    roseType:false,  //roseType:radius为南丁格尔图
                }
            }
        },
        props:{
            option:{
                type:Object,
                default: () => {
                    return {
                    };
                }
            }
        },
        mounted(){
            this.init();
        },
        methods:{
            init(){
                let options = Object.assign(this.pieData,this.option);
                let myChart = eCharts.init(document.getElementById(options.id));
                let option = {
                    color: options.color,
                    tooltip: {
                        trigger: 'item',
                    },
                    legend: {
                        textStyle:{
                            color:'#fff'
                        }
                    },
                    series: [
                        {
                            type: "pie",
                            name: options.seriesName,
                            roseType:options.roseType,
                            radius: options.radius,
                            center: options.center,
                            itemStyle: {
                                borderColor: "rgba(0,0,0,0.3)",
                                borderWidth: 3
                            },
                            data: options.data
                        }
                    ]
                };
                myChart.setOption(option);
            }
        }
    }
</script>

<style scoped>

</style>