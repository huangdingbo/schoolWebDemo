<template>
    <div class="nav" :style="{transform: this.option ? 'translateY(0)':'translateY(-1080px)'}">
        <div class="nav-content"  >
            <div class="nav-layer"></div>
            <div class="nav-main">
                <div class="nav-title">XXXXXX</div>
                <div class="nav-list">
                    <div class="nav-item" @click="jump(1)" @mouseenter="pointEnter(1)" @mouseleave="pointOut" :class="{ac:this.ac==1}">
                        <img src="" width="400" height="300">
                        <p>模块1</p>
                    </div>
                    <div class="nav-item" @click="jump(2)" @mouseenter="pointEnter(2)" @mouseleave="pointOut" :class="{ac:this.ac==2}">
                        <img src="" width="400" height="300">
                        <p>模块2</p>
                    </div>
                    <div class="nav-item" @click="jump(3)" @mouseenter="pointEnter(3)" @mouseleave="pointOut" :class="{ac:this.ac==3}">
                        <img src="" width="400" height="300">
                        <p>模块3</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Nav",
        props:{
            option:{
            },
        },
        data(){
            return{
                ac:'',
            }
        },
        mounted(){
            this.opacity
        },
        methods:{
            jump:function(index){
                switch (index) {
                    case 1:
                        this.$router.push("/home");
                        break;
                    case 2:
                        this.$router.push("/analysis");
                        break;
                    case 3:
                        this.$router.push("/warning");
                        break
                }
            },
            pointEnter:function (index) {
                this.ac = index;
            },
            pointOut:function () {
                this.ac = '';
            }
        }
    }
</script>

<style scoped>
    .nav{position: absolute;width: 100%;top: 0;left: 0;z-index: 3;height: 100%;transition: all 1s ease;}
    .nav-content{width: 100%;height: 100%;position: absolute;}
    .nav-main{position:absolute;width: 100%;height:100%}
    .nav-layer{ position: absolute;width: 100%;height: 100%;background: rgba(5,19,26,0.8);}
    .nav-title{text-align: center;font-size: 48px;font-weight: bold;color: #d6e9ff;margin-top:60px;
        text-shadow: 0 0 20px #145f87, 0 0 20px #145f87, 0 0 20px #145f87;}
    .nav-list{margin-top:60px;display: flex;justify-content: space-around;}
    .nav-item {font-size: 30px;font-weight: bold;color: #fff;
        text-shadow: 0 0 15px #0b599c, 0 0 30px #0b599c, 0 0 30px #0b599c, 0 0 60px #0b599c;}
    .nav-item p{margin-top: 30px;}
    .nav-item.ac img{transform: scale(1.1);border:1px solid red}
</style>