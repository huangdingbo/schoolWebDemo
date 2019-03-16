<template>
    <div class="grade">
        <div class="grade_top">
            <div class="grade_subject">
                <el-dropdown trigger="click"  @command="leftItem" placement="bottom-start">
                    <span class="el-dropdown-link">
                        {{subjectName}}
                    </span>
                    <el-dropdown-menu slot="dropdown" >
                        <el-dropdown-item v-for="(item,index) in left" :command="item.value" >{{item.name}}</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </div>
            <div class="grade_title">总体概况</div>
            <div class="grade_test">
                <el-dropdown trigger="click"  @command="rightItem">
                    <span class="el-dropdown-link">
                        {{testName}}
                    </span>
                    <el-dropdown-menu slot="dropdown" >
                        <el-dropdown-item v-for="(item,index) in right" :command="item.value" >{{item.name}}</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </div>
            <div></div>
        </div>
        <div class="grade_cont">
            <div class="grade_total">
                <div class="title_small">参考人数</div>
                <div class="cont">
                    <div class="wave">
                        <img src="../assets/grade/card_wave_bg.png">
                        <img  src="../assets/grade/card_wave_bg.png">
                    </div>
                    <div class="cont_item" v-for="item in num">
                        <div class="num">{{ item.value}}</div>
                        <div class="optic">{{ item.name}}</div>
                    </div>
                </div>
            </div>
            <div class="grade_online">

            </div>
        </div>
    </div>
</template>

<script>
    import Vue from "vue";
    import { Dropdown, DropdownMenu, DropdownItem } from "element-ui";
    Vue.use(Dropdown);
    Vue.use(DropdownMenu);
    Vue.use(DropdownItem);
    export default {
        name: "AnalysisLife",
        components: {
        },
        data() {
            return {
                subjectName:'理科',
                subject:1,
                testName:'',
                test:'',
                left:[],
                right:[],
                num:[],
            };
        },
        mounted() {
            this.$api.left().then(res => {
                this.left = res;
            });

            this.init()
            // this.$api.online().then(res => {
            //     this.bar.data = res.list;
            // });

        },
        methods: {
            init(){
                this.$api.right({type:this.subject}).then(res => {
                    this.right = res.list;
                    this.test = res.list[0].value;
                    this.testName = res.list[0].name;

                    this.refresh();

                });
            },
            refresh(){
                this.$api.num({type:this.subject,testNum:this.test}).then(res => {
                    this.num = res;
                });
            },
            leftItem(command){
                this.subject= command;
                if(command ==1){
                    this.subjectName = '理科'
                }else{
                    this.subjectName = '文科'
                }
                this.init()
            },
            rightItem(command){
                this.test = command;
                this.refresh();
            }
        }
    }
</script>

<style scoped>
    @import "../css/dropdown.css";

    .grade_top{display: flex;text-align: center;align-items: center;justify-content: center}
    .grade_subject{margin-right: 40px}
    .grade_test{margin-left:40px;}
    .grade_title{font-size: 46px;color:#fff;display:inline-block;border-bottom: 3px solid rgb( 110, 194, 255 );padding: 16px 0;}
    .grade_total{width: 480px;}
    .cont{position:relative;margin-top:15px;border: 1px solid #1a4f6b;border-radius: 6px;background-color: rgba(7, 53, 79, 0.749);overflow: hidden}
    .wave{display:flex;position:absolute;bottom:0;left:0;animation:wave 4s linear infinite;-webkit-animation:wave 8s linear infinite;}
    @keyframes wave
    {
        0% {
            left: 0;
        }
        100% {
            left: -1292px;
        }
    }
</style>