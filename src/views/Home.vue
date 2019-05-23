<template>
    <div class="index">
        <div class="home" >
            <HomeTop v-on:testVal="testVal"></HomeTop>
            <HomeLeft></HomeLeft>
            <HomeRight :option="this.testValue"></HomeRight>
            <HomeBottom></HomeBottom>
            <HomeCenter :option="this.testValue"></HomeCenter>
        </div>
    </div>
</template>

<script>
    // @ is an alias to /src
    import HomeTop from "../components/HomeTop.vue";
    import HomeBottom from "../components/HomeBottom.vue";
    import HomeLeft from "../components/HomeLeft.vue";
    import HomeRight from "../components/HomeRight.vue";
    import HomeCenter from "../components/HomeCenter.vue";

    export default {
        name: "home",
        components: {
            HomeTop,
            HomeBottom,
            HomeLeft,
            HomeRight,
            HomeCenter,
        },
        data () {
            return {
                isShow: false,
                testValue:''
            }
        },
        mounted() {
            // console.log(this.va)
        },
        methods: {
            testVal(val){
                this.testValue = val;
                console.log(this.testValue)
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
        background: url("../assets/bg.jpg");
    }

    .filter_style{
        -webkit-filter: blur(5px);
        -moz-filter: blur(5px);
        -o-filter: blur(5px);
        -ms-filter: blur(5px);
        filter: blur(5px);
    }
</style>