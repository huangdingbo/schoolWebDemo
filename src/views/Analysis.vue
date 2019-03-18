<template>
    <div class="analysis">
        <div class="analysis_nav">
            <div class="title">考试分析</div>
            <div class="analysis_list">
                <router-link to="/analysis/grade" class="analysis_item">年级</router-link>
                <router-link to="/analysis/class" class="analysis_item">班级</router-link>
                <router-link to="/analysis/subject" class="analysis_item">学科</router-link>
            </div>
        </div>
        <div class="analysis_cont">
            <div class="grade_top">
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
                                <el-dropdown-item v-for="(item,index) in right" :command="[item.value,item.name]">{{item.name}}</el-dropdown-item>
                            </el-dropdown-menu>
                        </el-dropdown>
                    </div>
                </div>
            </div>

            <router-view :subject="subject" :test="test"></router-view>
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
        name: "Analysis",
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
            };
        },
        mounted() {
            this.$api.left().then(res => {
                this.left = res;
            });
            this.init()
        },
        methods: {
            init(){
                this.$api.right({type:this.subject}).then(res => {
                    this.right = res.list;
                    this.test = res.list[0].value;
                    this.testName = res.list[0].name;
                });
            },
            leftItem(command){
                this.subject= command;
                if( command == 1){
                    this.subjectName = '理科'
                }else{
                    this.subjectName = '文科'
                }
                this.init()
            },
            rightItem(command){
                this.test = command[0];
                this.testName = command[1];
            }
        }
    }
</script>

<style scoped>
    @import '../css/list.css';

    .analysis{display: flex;width: 100%;height:100%;}
    .title{margin-top:40px}
    .analysis_nav{width: 400px;height:100%;border-right:2px solid #0a5b85}
    .analysis_list{display: flex;flex-direction: column;font-size: 24px;font-weight: bold;margin-top:30px}
    .analysis_item {display: flex;align-items: center;height:90px;justify-content: center;font-size: 32px}
    .analysis_item.router-link-active{color: #45daff}
    .analysis_cont{width: 100%;padding:40px 80px}
    .grade_top{display: flex;text-align: center;align-items: center;justify-content: center}
    .grade_subject{margin-right: 40px}
    .grade_test{margin-left:40px;}
    .grade_title{font-size: 46px;color:#fff;display:inline-block;border-bottom: 3px solid rgb( 110, 194, 255 );padding: 16px 0;}
</style>