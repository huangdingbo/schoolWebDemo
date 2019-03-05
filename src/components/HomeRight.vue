<template>
    <div class="index-right">
        <div class="pieChart" >
            <div class="title_small">模块1</div>
            <PieChart :option="pie"></PieChart>
        </div>
        <div class="radarChart">
            <div class="title_small">模块2</div>
            <RadarChart :option="radar"></RadarChart>
        </div>
    </div>
</template>

<script>

    import PieChart from "../common/PieChart"
    import RadarChart from "../common/RadarChart";
    export default {
        name: "HomeRight",
        components: {
            RadarChart,
            PieChart,
        },
        data(){
            return{
                pie:{
                    id:'pie-chart2',
                    roseType:'radius',
                    radius : '65%',
                    height:'240px',
                    data: [{value: 335, name: '直接访问'},
                        {value: 310, name: '邮件营销'},
                        {value: 234, name: '联盟广告'}],
                },
                radar:{
                    id:'radar-chart',
                }
            }
        }
    }
</script>

<style scoped>
    .index-right{position: absolute;right: 20px;width: 360px;top: 100px;border: 1px solid #19516f;padding: 20px;
        border-radius: 5px;background-color: rgba(3, 16, 23, 0.702);box-shadow: 0px 0px 10px 0 #7bd4fc inset;}
</style>