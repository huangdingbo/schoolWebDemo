<template>
    <div class="index-bottom">
        <!--<div class="bottom-dashboard">-->
            <!--<img class="dashboard-bg" src="../assets/home/bottom_dashboard_blue.png" width="240px">-->
            <!--<img class="dashboard-pointer"  src="../assets/home/bottom_dashboard_pointer.png" width="240px">-->
            <!--<div class="dashboard-center">-->
                <!--<p class="num"><span>96</span>%</p>-->
                <!--<p class="name"></p>-->
            <!--</div>-->
        <!--</div>-->
        <div class="bottom-dashboard" style="left:45px">
            <GaugeChart :option="gauge"></GaugeChart>
        </div>
        <div class="bottom-center" id="bottom_warning">
            <div class="">学校共有老师：1200</div>
            <div class="">学校共有学生：</div>
            <div class="">2019年毕业生有：</div>
            <div class="">2019年研究生有：</div>
            <!--<img  class="bottom-animate-bg" src="../assets/home/bottom_monitor_light.png">-->
        </div>
        <div class="bottom-dashboard" style="right:45px">
            <GaugeChart :option="gauge2"></GaugeChart>
        </div>
        <!--<div class="bottom-dashboard" id="deal_dashboard">-->
            <!--<img class="dashboard-bg" src="../assets/home/bottom_dashboard_green.png" width="240px">-->
            <!--<img class="dashboard-pointer" src="../assets/home/bottom_dashboard_pointer.png" width="240px">-->
            <!--<img class="dashboard-side" style="transform: rotateX(360deg) rotateY(180deg);left:-68px" src="../assets/home/bottom_bg_side.png">-->
            <!--<div class="dashboard-center">-->
                <!--<p class="num"><span>97</span>%</p>-->
                <!--<p class="name"></p>-->
            <!--</div>-->
        <!--</div>-->
    </div>
</template>

<script>
    import GaugeChart from "../common/GaugeChart"

    export default {
        name: "HomeBottom",
        components: {
            GaugeChart,
        },
        data() {
            return {
                gauge: {
                    id:'gauge-chart',
                    height: '240px',
                    width: '240px',
                    radius:'95%',
                    center:['50%','60%'],
                },
                gauge2: {
                    id:'gauge-chart2',
                    height: '240px',
                    width: '240px',
                    radius:'95%',
                    center:['50%','60%'],
                },
            }
        },
        mounted() {
        },
        methods: {}
    }
</script>

<style scoped>
    .index-bottom{display: flex;position: absolute;bottom: 0;overflow: hidden;width: 100%;justify-content: center;align-items: center}
    .bottom-dashboard{display: flex;justify-content: center;border: 3px solid #6089e1;box-shadow: 0px 0px 15px #6089e1;
        border-radius: 50%;width: 300px;height: 280px;position: relative;z-index: 2;margin: 5px 0;background: #0a2e41;}
    .bottom-center{width: 600px;height: 200px;border-top:3px solid;border-bottom: 3px solid;border-color: #6089e1;color:#fff;font-size: 20px;background: #0a2e41;}
    @keyframes mymove
    {
        0% {
            opacity: 0.5;
            left:0;
        }
        30% {
            opacity: 1;
            left:30%;
        }
        100% {
            opacity: 0;
            left:80%;
        }
    }
</style>