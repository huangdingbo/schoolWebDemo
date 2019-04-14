<template>
    <div class="index-left">
        <div class="index_info">
            <div class="title_small">校园概况</div>
            <div class="cont">
                <div class="cont_item">
                    <div class="num">{{ situation.studentNum }}</div>
                    <div class="optic">学生总数</div>
                </div>
                <div class="cont_item">
                    <div class="num">{{ situation.teacherNum }}</div>
                    <div class="optic">教职工总数</div>
                </div>
                <div class="cont_item">
                    <div class="num">{{ situation.gradeOne }}</div>
                    <div class="optic">高一</div>
                </div>
                <div class="cont_item">
                    <div class="num">{{ situation.gradeTwo }}</div>
                    <div class="optic">高二</div>
                </div>
                <div class="cont_item">
                    <div class="num">{{ situation.gradeThree }}</div>
                    <div class="optic">高三</div>
                </div>
            </div>
        </div>
        <div class="svg">
            <div class="title_small">教师职称分布</div>
            <div class="svg_list">
                <div class="svg_item"  v-for="(item,index) in svg.slice(0,3)">
                    <SvgRing :radius="60" :progress="item.value" :stroke="8" :bgcolor="bgcolorArray[index]"  :color="colorArray[index]"></SvgRing>
                    <div class="svg_info">{{item.name}}<br>
                        {{item.value}}人</div>
                </div>
            </div>
        </div>
        <div class="index_info">
            <div class="title_small">校园事件概况</div>
            <div class="cont">
                <div class="cont_item">
                    <div class="num">{{ cases.caseTotal }}</div>
                    <div class="optic">事件总量</div>
                </div>
                <div class="cont_item">
                    <div class="num">{{ cases.caseAvg }}</div>
                    <div class="optic">日均事件量</div>
                </div>
                <div class="cont_item">
                    <div class="num">{{ cases.acceptRatio }}</div>
                    <div class="optic">事件受理率</div>
                </div>
            </div>
        </div>
        <div class="index_chart">
            <div class="title_small">校园高发事件TOP6</div>
            <div class="barChart">
                <BarChart :option="bar"></BarChart>
            </div>
        </div>
    </div>
</template>

<script>
    import BarChart from "../common/BarChart";
    import SvgRing from "../common/svg";

    export default {
        name: "HomeLeft",
        components: {
            BarChart,
            SvgRing
        },
        props:{
            option:{}
        },
        watch:{
            'option'(){
                this.bar.resize = this.option;
            }
        },
        data() {
            return {
                situation: {},
                cases: {},
                svg:[],
                bgcolorArray:['#353826','#38272b','#0a3744'],
                colorArray:['#e9c355','#f1785f','#25d6f8'],
                bar: {
                    id: "bar-chart",
                    height:'100%',
                    width:'100%',
                    XaxisLine: false,
                    resize:'',
                    data: []
                }
            };
        },
        mounted() {
            this.$api.situation().then(res => {
                this.situation = res;
            });
            this.$api.cases().then(res => {
                this.bar.data = res.list;
            });
            this.$api.overview().then(res => {
                this.cases = res;
            });
            this.$api.teacher().then(res => {
                this.svg = res.list;
            });
        },
        methods: {}
    };
</script>

<style scoped>
    @import '../css/list.css';

    .index-left {
        position: absolute;
        padding: 1%;
        width:20%;
        height: 80%;
        top: 100px;
        left: 1%;
        border: 1px solid #19516f;
        border-radius: 5px;
        background-color: rgba(3, 16, 23, 0.702);
        box-shadow: 0px 0px 10px 0 #7bd4fc inset;
    }
    .index_info{height:20%;width: 100%}
    .index_info .cont{height: 80%}
    .svg_info{color:#fff;}
    .svg_list{
        display: flex;
    }
    .index_chart{height: 30%}
    .barChart{height: 80%}
</style>
