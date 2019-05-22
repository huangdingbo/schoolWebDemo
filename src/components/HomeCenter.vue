<template>
    <div class="index-center" >
        <div class="center-box" v-for="(item,index) in test.slice(0, 10)" @click="studentDet(item.id)">
            <img class="box_bg" src="../assets/home/box.png">
            <div class="box">
                <img :src="item.pic">
                <div class="num">{{item.total}}分</div>
                <div class="name">{{item.name}} {{item.banji}}</div>
            </div>
        </div>
        <el-dialog title="学生成绩详情"  :visible="personDialog"   :append-to-body="true" width="300px" @close="personDialog = false">
            <div class="score">
                <div class="score_item">
                    <div class="score_name">语文</div>
                    <div class="score_val">{{detail.chinese}}</div>
                </div>
                <div class="score_item">
                    <div class="score_name">数学</div>
                    <div class="score_val">{{detail.math}}</div>
                </div>
                <div class="score_item">
                    <div class="score_name">外语</div>
                    <div class="score_val">{{detail.english}}</div>
                </div>
                <div class="score_item">
                    <div class="score_name">物理</div>
                    <div class="score_val">{{detail.physics}}</div>
                </div>
                <div class="score_item">
                    <div class="score_name">化学</div>
                    <div class="score_val">{{detail.chemistry}}</div>
                </div>
                <div class="score_item">
                    <div class="score_name">生物</div>
                    <div class="score_val">{{detail.biology}}</div>
                </div>
                <div class="score_item">
                    <div class="score_name">总分</div>
                    <div class="score_val">{{detail.total}}</div>
                </div>
                <div class="score_item">
                    <div class="score_name">班级排名</div>
                    <div class="score_val">{{detail.class_rank}}</div>
                </div>
                <div class="score_item">
                    <div class="score_name">校级排名</div>
                    <div class="score_val">{{detail.school_rank}}</div>
                </div>
            </div>
        </el-dialog>
    </div>
</template>

<script>
    import Vue from "vue";
    import { Dialog } from "element-ui";
    Vue.use(Dialog);
    export default {
        name: "HomeCenter",
        data(){
            return{
                test:[],
                personDialog:false,
                detail:{}
            }
        },
        mounted() {
            this.$api.rank().then(res =>{
                this.test = res.list;
            });
        },
        methods:{
            studentDet(id){
                this.personDialog = true;
                this.$api.stuDetail({id:id}).then(res =>{
                    this.detail = res.item;
                    console.log(res)

                })
            },
        }
    }
</script>

<style scoped>
    @import "../css/dialog.css";
    .index-center{position: absolute;top:100px;left:24%;width: 52%;height:70%;display: flex;flex-wrap: wrap;align-items: center;justify-content: space-around;
        border: 1px solid #19516f;border-radius: 5px;background-color: rgba(3, 16, 23, 0.702);box-shadow: 0px 0px 10px 0 #7bd4fc inset;}
    .center-box{display: flex;flex-direction: column;align-items: center;position: relative;width: 20% }
    .box_bg{width: 200px;height: 280px;z-index: 2;}
    .box{position: absolute;width: 146px;margin-top:20px;overflow: hidden;display: flex;flex-direction: column}
    .box img{height: 156px}
    .num{background:rgb(1,4,6);color: #27A9FF;font-size: 26px;padding-bottom: 12px}
    .name{height: 30px;color: #fff;background: linear-gradient(bottom,#392005,#211408);line-height: 30px;}
    .score_item{display: flex;justify-content: space-between}
</style>