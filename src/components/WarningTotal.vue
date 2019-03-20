<template>
    <div class="total">
        <div class="lamp">
            <div class="lamp_item">
                <img class="lamp_bg" src="../assets/warning/warn_red_bg.png">
                <img class="lamp_light" src="../assets/warning/warn_red_light.png">
                <div class="lamp_info">
                    <div class="lamp_info_num">{{lamp.list.currentNum}}</div>
                    <div class="lamp_info_name">当前预警数</div>
                </div>
            </div>
            <div class="lamp_item">
                <img class="lamp_bg" src="../assets/warning/warn_red_bg.png">
                <img class="lamp_light" src="../assets/warning/warn_red_light.png">
                <div class="lamp_info">
                    <div class="lamp_info_num">{{lamp.list.totalNum}}</div>
                    <div class="lamp_info_name">总预警数</div>
                </div>
            </div>
            <div class="lamp_item">
                <img class="lamp_bg" src="../assets/warning/warn_red_bg.png">
                <img class="lamp_light" src="../assets/warning/warn_red_light.png">
                <div class="lamp_info">
                    <div class="lamp_info_num">{{lamp.list.avg}}</div>
                    <div class="lamp_info_name">预警数/次</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "WarningTotal",
        components: {
        },
        props:{
            grade:{},
            studentType:{},
        },
        watch: {
            grade(){
                if(this.studentType){
                    this.refresh();
                }
            },
            studentType(){
                if(this.grade){
                    this.refresh();
                }
            },
            immediate: true,
            deep: true
        },
        data() {
            return {
                lamp:{}
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
                    this.lamp = res;
                    console.log(this.lamp);
                });
            }
        }
    }
</script>

<style scoped>
    .lamp{display: flex;justify-content: space-around}
    .lamp_item{position: relative;display: flex;align-items: center;width: 250px;height: 190px;}
    .lamp_light{position: absolute;left:30px;width: 92px}
    .lamp_bg{position: absolute;width: 150px;animation: rotate 2s linear infinite}
    .lamp_info{ position: absolute;left:110px; display: inline-block;color: #fff;vertical-align: middle;padding: 20px;font-size: 20px;}
    .lamp_info_num{font-size: 32px;}


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