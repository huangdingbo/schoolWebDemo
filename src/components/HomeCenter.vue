<template>
    <div class="index-center" >
        <div class="center-box" v-for="(item,index) in test.slice(0, 10)">
            <img class="box_bg" src="../assets/home/box.png">
            <div class="box">
                <img :src="item.pic">
                <div class="num">{{item.total}}分</div>
                <div class="name">{{item.name}} {{item.banji}}</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "HomeCenter",
        data(){
            return{
                test:[],
            }
        },
        mounted() {
            this.$api.rank().then(res =>{
                this.test = res.list;
            });
        }
    }
</script>

<style scoped>
    .index-center{position: absolute;top:100px;left:24%;width: 52%;height:70%;display: flex;flex-wrap: wrap;align-items: center;justify-content: space-around;
        border: 1px solid #19516f;border-radius: 5px;background-color: rgba(3, 16, 23, 0.702);box-shadow: 0px 0px 10px 0 #7bd4fc inset;}
    .center-box{display: flex;flex-direction: column;align-items: center;position: relative;width: 20% }
    .box_bg{width: 200px;height: 280px;z-index: 2;}
    .box{position: absolute;width: 146px;margin-top:20px;overflow: hidden}
    .box img{height: 150px;position: relative;left: -25%;}
    .num{background:rgb(1,4,6);color: #27A9FF;font-size: 26px;position: relative;top:-4px;height: 37px;}
    .name{height: 30px;color: #fff;padding-top: 18px;background: linear-gradient(bottom,#392005,#211408)}
</style>