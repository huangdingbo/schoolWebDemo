<template>
    <div class="index-center" >
        <div class="center-box" v-for="(item,index) in test.slice(0, 10)">
            <img :src="item.pic">
            <div class="num">{{item.total}}分</div>
            <div class="name">{{item.name}} {{item.banji}}</div>
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
    .index-center{position: absolute;top:100px;left:450px;width: 1000px;height:750px;display: flex;flex-wrap: wrap;align-items: center;justify-content: space-around;
        border: 1px solid #19516f;border-radius: 5px;background-color: rgba(3, 16, 23, 0.702);box-shadow: 0px 0px 10px 0 #7bd4fc inset;}
    .center-box{background: url("../assets/home/box.png");width:200px;height: 290px;background-size: 100%;display: flex;flex-direction: column;align-items: center; }
    .center-box img{width:130px;height: 176px;margin-top:24px}
    .num{background: rgba(0,0,0,1);color: #0E18EF;width: 130px;font-size: 26px;}
    .name{height: 30px;color: #fff;margin-top: 18px;}
</style>