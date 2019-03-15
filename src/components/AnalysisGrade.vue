<template>
    <div class="grade">
        <div class="grade_top">
            <div class="grade_test">
                <el-dropdown trigger="click">
            <span class="el-dropdown-link">
                科目：
            </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>
                         </el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </div>
            <div class="grade_title">总体概况</div>
            <div></div>
        </div>

        <div class="grade_cont">
            <div class="title_small">参考人数</div>
            <div class="cont">
                <div class="cont_item">
                    <div class="num">{{ num.studentNum }}</div>
                    <div class="optic">学生总数</div>
                </div>
                <div class="cont_item">
                    <div class="num">{{ num.teacherNum }}</div>
                    <div class="optic">教职工总数</div>
                </div>
                <div class="cont_item">
                    <div class="num">{{ num.gradeOne }}</div>
                    <div class="optic">高一</div>
                </div>
                <div class="cont_item">
                    <div class="num">{{ num.gradeTwo }}</div>
                    <div class="optic">高二</div>
                </div>
                <div class="cont_item">
                    <div class="num">{{ num.gradeThree }}</div>
                    <div class="optic">高三</div>
                </div>
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
                num:[]
            };
        },
        mounted() {
            let data = {
                "type":1,
                // "testNum":
            };
            this.$api.left().then(res => {
                console.log(res);
                // this.num = res.list;
            })
            this.$api.right().then(res => {
                console.log(res);
                // this.num = res.list;
            })
            // this.$api.num().then(res => {
            //     this.num = res.list;
            // });
            // this.$api.online().then(res => {
            //     this.bar.data = res.list;
            // });

        },
        methods: {}
    }
</script>

<style scoped>
    .el-dropdown{font-size: 24px;color:#fff}
    .el-dropdown-menu__item{font-size: 20px;color:#fff}
    .grade_top{display: flex;text-align: center;align-items: center}
    .grade_title{font-size: 46px;color:#fff;display:inline-block;border-bottom: 3px solid rgb( 110, 194, 255 );padding: 16px 0;}
</style>