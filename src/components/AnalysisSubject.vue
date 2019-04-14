<template>
    <div class="subject">
        <div class="top">
            <div class="top_cen">
                <div class="title_small">学科概要分析</div>
                <div class="list">
                    <div class="list_title">
                        <div class="list_item">科目</div><div class="list_item">卷面分数</div><div class="list_item">平均分</div><div class="list_item">最高分</div>
                        <div class="list_item">最低分</div><div class="list_item">难度系数</div><div class="list_item">	平均分以上</div><div class="list_item">平均分以上比列</div>
                        <div class="list_item">平均分以下</div><div class="list_item">	平均分以下比列</div><div class="list_item"></div>
                    </div>
                    <div class="list_bom">
                        <div class="list_cont" v-for="item in list" >
                            <div class="list_item">{{item.name}}</div><div class="list_item">{{item.maxNum}}</div><div class="list_item">{{item.avg}}</div>
                            <div class="list_item">{{item.highest}}</div><div class="list_item">{{item.lowest}}</div><div class="list_item">{{item.nandu}}</div>
                            <div class="list_item">{{item.avgUp}}</div><div class="list_item">{{item.avgUpRatio}}</div><div class="list_item">{{item.avgDown}}</div>
                            <div class="list_item">{{item.avgDownRatio}}</div>
                        </div>
                    </div>
                </div>
                </div>
        </div>
        <div class="bottom">
            <div class="bottom_left">
                <div class="title_small">单科分数段
                    <div class="tab_box">
                        <el-dropdown trigger="click"  @command="subTab" placement="bottom-start">
                                <span class="el-dropdown-link">
                                    切换学科
                                </span>
                            <el-dropdown-menu slot="dropdown" >
                                <el-dropdown-item v-for="item in subList" :command="item.value" >{{item.name}}</el-dropdown-item>
                            </el-dropdown-menu>
                        </el-dropdown>
                    </div>
                </div>
                <div class="chart_box">
                    <line-chart :option="line"></line-chart>
                </div>
            </div>
            <div class="bottom_right">
                <div class="title_small">单科年级平均分上下分析</div>
                <div class="chart_box">
                    <bar-chart :option="bar"></bar-chart>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Vue from "vue";
    import { Dropdown, DropdownMenu, DropdownItem } from "element-ui";
    import LineChart from  "../common/LineChart"
    import BarChart from  "../common/BarChart"
    Vue.use(Dropdown);
    Vue.use(DropdownMenu);
    Vue.use(DropdownItem);

    export default {
        name: "AnalysisSubject",
        components: {BarChart, LineChart},
        component:{
            LineChart,
            BarChart
        },
        props:{
            test:{},
            subject:{},
        },
        data() {
            return {
                course:'',
                list:[],
                subList:[],
                subName:'',
                line:{
                    id:'line-chart',
                    height:'100%',
                    width:'100%',
                    data:[],
                },
                bar:{
                    id:'bar-chart',
                    height:'100%',
                    width:'100%',
                    data:[],
                }
            }
        },
        watch: {
            "test"() {
                this.refresh();
            },
            "subject"(){
                this.refresh();
            },
            immediate: true,
            deep: true
        },
        mounted() {
            if(this.test){
                this.refresh()
            }
        },
        methods:{
            refresh(){
                this.$api.profile({type:this.subject,testNum:this.test}).then(res => {
                    this.list = res.list;
                    this.bar.data = [];
                    console.log(res);
                    for(let i in res.list){
                        this.bar.data.push({name:res.list[i].name,value:res.list[i].avg})
                    }
                });
                this.$api.course({type:this.subject}).then(res => {
                    this.subList = res.list;
                    this.subName = res.list[0].value;
                    this.rechart()
                });
            },
            rechart(){
                this.$api.scale({course:this.subName,testNum:this.test}).then(res => {
                    this.line.data = [];
                    for(let i in res.list){
                        this.line.data.push({name:res.list[i].showName,value:res.list[i].num})
                    }
                });
            },
            subTab(command){
                this.subName = command;
                this.rechart()
            }
        }
    }
</script>

<style scoped>
    .subject{height: 80%}
    .top{height: 70%;display: flex;justify-content: space-around;}
    .top_cen{width: 90%}
    .bottom{height: 30%;display: flex;justify-content: space-around}
    .list{color:#fff;height: 80%;overflow:auto;   display: flex;}
    .list_bom{color:#fff; display: flex;}
    .list_title{display: flex;flex-direction: column;font-size: 26px;color: #27a9ff;}
    .list_cont{display: flex;font-size: 20px;flex-direction: column}
    .list_item{width: 190px;height: 40px;line-height: 40px;border-bottom: 1px solid #fff}
    .tab_box{margin-left:20px;}
    .el-dropdown-selfdefine{font-size: 16px}
    .bottom{display: flex}
    .bottom_left,.bottom_right{width: 45%;}
</style>