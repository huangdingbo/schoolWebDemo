<template>
    <div class="warning">
        <div class="warning_nav">
            <div class="title">监控预警</div>
            <div class="warning_list">
                <router-link to="/warning/total" class="warning_item">监控预警总体情况</router-link>
                <router-link to="/warning/beyond" class="warning_item">临界学生预警</router-link>
                <router-link to="/warning/poor" class="warning_item">学困学生预警</router-link>
            </div>
        </div>
        <div class="warning_cont">
            <router-view></router-view>
        </div>
        <div class="warning_work">
            <div class="work_title">预警工作台</div>
            <div class="work_list">
                <div class="work_item" v-for="item in list">
                    <img src="../assets/warning/warn_badge_red.png">
                    <div class="name">{{item.name}}</div>
                    <div class="info">{{item.value}}</div>
                    <div class="btn">查看详情</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Warning",
        components: {
        },
        data() {
            return {
                list:[],
            };
        },
        mounted() {
            this.init()
        },
        methods: {
            init(){
                this.$api.work({type:this.subject}).then(res => {
                    this.list = res.list
                    console.log(res);
                });
            }
        }
    }
</script>

<style scoped>
    .warning{display: flex;width: 100%;height:100%;}
    .title{margin-top:40px}
    .warning_nav{width: 400px;height:100%;border-right:2px solid #0a5b85}
    .warning_list{display: flex;flex-direction: column;font-size: 24px;font-weight: bold;margin-top:30px}
    .warning_item{display: flex;align-items: center;height:90px;justify-content: center;font-size: 32px}
    .warning_cont{width: 1200px;}


    .warning_work{width: 300px;background: rgba( 1, 16, 29, 0.851 );border-left:2px solid #0a5b85;padding:40px 0 0 50px;}
    .work_title{font-size: 26px;text-shadow: 0 0 20px #145f87, 0 0 20px #145f87, 0 0 20px #145f87;font-weight: bold;color: #d6e9ff;text-align: left}
    .work_list{height:600px;overflow: auto}
</style>