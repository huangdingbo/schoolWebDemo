<template>
    <div class="total">
        <div class="lamp">
            <div class="lamp_item">
                <img class="lamp_bg" src="../assets/warning/warn_red_bg.png">
                <img class="lamp_light" src="../assets/warning/warn_red_light.png">
                <div class="lamp_info">
                    <div class="lamp_info_num">{{lamp.currentNum}}</div>
                    <div class="lamp_info_name">当前预警数</div>
                </div>
            </div>
            <div class="lamp_item">
                <img class="lamp_bg" src="../assets/warning/warn_red_bg.png">
                <img class="lamp_light" src="../assets/warning/warn_red_light.png">
                <div class="lamp_info">
                    <div class="lamp_info_num">{{lamp.totalNum}}</div>
                    <div class="lamp_info_name">总预警数</div>
                </div>
            </div>
            <div class="lamp_item">
                <img class="lamp_bg" src="../assets/warning/warn_blue_bg.png">
                <img class="lamp_light" src="../assets/warning/warn_blue_light.png">
                <div class="lamp_info">
                    <div class="lamp_info_num">{{lamp.avg}}</div>
                    <div class="lamp_info_name">预警数/次</div>
                </div>
            </div>
        </div>
        <div class="total_cont">
            <div class="total_list">
                <div class="title_small">高危学生预警</div>
                <div class="list">
                    <div class="list_title">
                        <div class="list_item">学生姓名</div><div class="list_item">学号</div><div class="list_item">年级班级</div><div class="list_item">预警次数</div>
                    </div>
                    <div class="list_box">
                    <div class="list_cont" v-for="item in list" >
                        <div class="list_item">{{item.name}}</div><div class="list_item">{{item.studentId}}</div><div class="list_item">{{item.gradeAndClass}}</div><div class="list_item">{{item.warningNum}}</div>
                    </div>
                    </div>
                </div>
            </div>
            <div class="total_chart">
                <div class="total_radar">
                    <div class="title_small">预警类型分析</div>
                    <div class="pieChart">
                        <pie-chart :option="pie"></pie-chart>

                    </div>
                </div>
                <div class="total_line">
                    <div class="title_small">近十次考试预警发展趋势</div>
                    <div class="lineChart">
                        <line-chart :option="line"></line-chart>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import LineChart from '../common/LineChart'
    import PieChart from '../common/PieChart'

    export default {
        name: "WarningTotal",
        components: {
            LineChart,
            PieChart,
        },
        props:{
            grade:{},
            studentType:{},
        },
        watch: {
            grade(){
                if(this.grade && this.studentType ){
                    this.refresh()
                }
            },
            studentType(){
                if(this.grade && this.studentType ){
                    this.refresh()
                }
            },
            // immediate: true,
            // deep: true
        },
        data() {
            return {
                lamp:{},
                list:[],
                pie:{
                    id:'pie-chart',
                    orient:'vertical',
                    height:'100%',
                    width:"100%",
                    radius:"70%",
                    legendTop:'20',
                    center:['50%','55%'],
                    data:[]
                },
                line:{
                    id:'line-chart',
                    height:'100%',
                    width:"100%",
                    legendTop:'20',
                    data:[]
                },
            };
        },
        mounted() {
            if(this.grade && this.studentType ){
                this.refresh()
            }
        },
        methods: {
            refresh(){
                this.$api.header({studentType:this.studentType,grade:this.grade}).then(res => {
                    this.lamp = res.list;
                });
                this.$api.risk({type:this.studentType,grade:this.grade}).then(res => {
                    this.list = res.list;
                });
                this.$api.warningtype({type:this.studentType,grade:this.grade}).then(res => {
                    this.pie.data = res.list
                });
                this.$api.warningdevelop({studentType:this.studentType,grade:this.grade}).then(res => {
                    this.line.data = res.list
                });

            }
        }
    }
</script>

<style scoped>
    .total{height: 88%}
    .total_cont{display: flex;justify-content: space-around;height: 80%}
    .total_list{height: 100%;width: 45%}
    .total_chart{height: 100%;width: 45%}
    .total_radar{height: 50%;width: 100%}
    .pieChart,.lineChart{height: 80%;width: 100%}
    .total_radar .title_small{height: 20%}
    .total_line{height: 50%;width: 100%}
    .total_line .title_small{height: 20%}
    .lamp{display: flex;justify-content: space-around;height: 20%}
    .lamp_item{position: relative;display: flex;align-items: center;width: 250px;height: 100%;}
    .lamp_light{position: absolute;left:30px;width: 92px}
    .lamp_bg{position: absolute;width: 150px;animation: rotate 2s linear infinite}
    .lamp_info{ position: absolute;left:110px; display: inline-block;color: #fff;vertical-align: middle;padding: 20px;font-size: 20px;}
    .lamp_info_num{font-size: 32px;}
    .list{color:#fff;height: 90%}
    .list_title{display: flex;align-items:center;font-size: 26px;color: #27a9ff;}
    .list_box{height:88%; overflow: auto}
    .list_cont{display: flex;font-size: 20px;padding:5px 0;}
    .list_item{width: 120px;}
    @keyframes rotate
    {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }
</style>