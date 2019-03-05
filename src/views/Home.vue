<template>
    <div class="index">
        <div class="home" :class="{filter_style :isShow}">
            <HomeTop></HomeTop>
            <HomeLeft></HomeLeft>
            <HomeRight></HomeRight>
            <HomeBottom></HomeBottom>
            <HomeCenter></HomeCenter>
        </div>
        <Nav :option="isShow"></Nav>
        <img class="nav-switch" src="../assets/home/home_icon_top_right.svg" @click="navShow()">
    </div>
</template>

<script>
    // @ is an alias to /src
    import HomeTop from "../components/HomeTop.vue";
    import HomeBottom from "../components/HomeBottom.vue";
    import HomeLeft from "../components/HomeLeft.vue";
    import HomeRight from "../components/HomeRight.vue";
    import HomeCenter from "../components/HomeCenter.vue";
    import Nav from "../components/Nav.vue";

    export default {
        name: "home",
        components: {
            HomeTop,
            HomeBottom,
            HomeLeft,
            HomeRight,
            HomeCenter,
            Nav,
        },
        data () {
            return {
                isShow: false
            }
        },

        methods: {
            navShow:function () {
                this.isShow =! this.isShow
                // childValue就是子组件传过来的值
                // this.isShow = childValue
            }
        }
    };
</script>

<style>
    .index{
        width: 100%;
        height: 100%;
    }
    .home {
        width: 100%;
        height: 100%;
        position: relative;
        /*background: url("../assets/home_bg.jpeg");*/
        background-color:#000 ;
    }
    .nav-switch{position: absolute;right:50px;top:10px;z-index: 4;cursor: pointer}
    .nav-switch{width: 30px;height: 30px;}
    .filter_style{
        -webkit-filter: blur(5px);
        -moz-filter: blur(5px);
        -o-filter: blur(5px);
        -ms-filter: blur(5px);
        filter: blur(5px);
    }
</style>