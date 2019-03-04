<template>
    <div class="nav" :style="{transform: this.option ? 'translateY(0)':'translateY(-1080px)'}">
        <div class="nav-content"  >
            <div class="nav-layer"></div>
            <div class="nav-main">
                <div class="nav-title">XXXXXX</div>
                <div class="nav-list">
                    <router-link to="/home">模块1</router-link>
                    <router-link to="/">模块2</router-link>
                    <router-link to="/">模块3</router-link>
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
                isShow:false,
            }
        },
        mounted(){
        },
        methods:{
        }
    }
</script>

<style scoped>
    .nav{position: absolute;width: 100%;top: 0;left: 0;z-index: 3;height: 100%;transition: all 1s ease;}
    .nav-content{width: 100%;height: 100%;position: absolute;}
    .nav-main{position:absolute;width: 100%;height:100%}
    .nav-layer{ position: absolute;width: 100%;height: 100%;background: rgba(5,19,26,0.8);}
    .nav-title{text-align: center;padding-top: 40px;font-size: 48px;font-weight: bold;color: #d6e9ff;
        text-shadow: 0 0 20px #145f87, 0 0 20px #145f87, 0 0 20px #145f87;margin-top:60px;}
    .nav-list{margin-top:60px;}
    .router-link-active{color: #fff;text-decoration: none}
</style>