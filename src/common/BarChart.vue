<template>
    <div  :id="option.id" :style="{ height : option.height ? option.height:barData.height}"></div>
</template>

<script>
    let eCharts = require("echarts/lib/echarts");
    require("echarts/lib/chart/bar");
    require("echarts/lib/component/legendScroll");
    require("echarts/lib/component/tooltip");
    export default {
        name: "BarChart",
        data(){
            return{
                barData:{
                    height:'200px',
                    color:["rgba(8,130,221,0.9)",
                        "rgba(255,208,107,0.9)",
                        "rgba(9,192,213,0.9)"],
                    XaxisTick:false,
                    XaxisLine:true,
                    XaxisLabel: true,
                    XsplitLine:false,
                    YaxisTick:false,
                    YaxisLine:false,
                    YaxisLabel:false,
                    YsplitLine:false,
                    gridTop:'10%',
                    gridBottom:'10%',
                    gridLeft:'5%',
                    gridRight:'5%',
                    formatter:function (val) {
                            // let ParamsName = "";// 最终拼接成的字符串
                            // let paramsNameNumber = val.length;// 实际标签的个数
                            // if (paramsNameNumber > 4) {
                            //     ParamsName = val.substring(0, 4) + '...';
                            // } else {
                            //     // 将旧标签的值赋给新标签
                            //     ParamsName = val;
                            // }
                            //
                            // //将最终的字符串返回
                            // return ParamsName
                    },  //X轴自定义axisLabel显示内容
                    dataArray:[{lineName:1,name:666,value:[4,5,6,7]},{lineName:2,name:777,value:[2,5,8,9]},
                        {lineName:3,name:888,value:[1,3,6,9]},{lineName:4,name:999,value:[4,5,8,2,]}],

                }
            }
        },
        props:{
            option:{
                // type:Object,
                // default: () => {
                //     return {
                //     };
                // }
            }
        },
        mounted(){
            this.init();
        },
        methods:{
            init(){
                let options = Object.assign(this.barData,this.option);
                let series=[];
                let Xname=[];
                for(let i=0;i<options.dataArray.length;i++){
                    series.push({
                        type:'bar',
                        name:options.dataArray[i].lineName,
                        data:options.dataArray[i].value,
                    });
                    Xname.push(options.dataArray[i].name)
                }
                let myChart = eCharts.init(document.getElementById(options.id));
                let option = {
                    color:options.color,
                    legend: {
                        textStyle:{
                            color:'#fff'
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
                            show:options.XaxisTick
                        },
                        axisLine: {
                            show:options.XaxisLine,
                            lineStyle:{
                                width:2,
                                color:'#828e96'
                            }
                        },
                        splitLine: {
                            show: options.XsplitLine
                        },
                        axisLabel: {
                            show: options.XaxisLabel,
                            interval: 0,
                            margin:10,
                            textStyle: {
                                color: "rgba(255,255,255,0.75)",
                                // fontSize: options.fontSize
                            },
                            formatter:options.formatter()
                        },
                        data:Xname,
                    },
                    yAxis: {
                        type: 'value',
                        axisTick: {
                            show:options.YaxisTick
                        },
                        axisLine: {
                            show:options.YaxisLine,
                            lineStyle:{
                                width:2,
                                color:'#828e96'
                            }
                        },
                        splitLine: {
                            show: options.YsplitLine
                        },
                        axisLabel: {
                            show: options.YaxisLabel
                        }

                    },
                    series: series
                };
                myChart.setOption(option);
            }
        }
    }
</script>

<style scoped>

</style>