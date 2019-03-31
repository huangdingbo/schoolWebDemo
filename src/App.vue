<template>
    <div id="app">
        <img class="nav-switch" src="./assets/home/home_icon_top_right.svg" @click="navShow()"/>
        <Nav :option="isShow" v-on:navTab="navTab"></Nav>
        <RouterView></RouterView>
    </div>
</template>
<script>
    import Nav from "./components/Nav.vue";

    export default {
        components: {
            Nav
        },
        data() {
            return {
                isShow: false
            };
        },
        mounted() {
        },
        methods: {
            navTab: function (navTab) {
                this.isShow = navTab;
            },
            navShow: function () {
                this.isShow = !this.isShow;
                // childValue就是子组件传过来的值
                // this.isShow = childValue
            }
        }
    };
</script>

<style lang="less">
    html,
    body {
        height: 100%;
        width: 100%;
        margin: 0;
        padding: 0;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }
    *::-webkit-scrollbar {/*滚动条整体样式*/
        width: 5px;     /*高宽分别对应横竖滚动条的尺寸*/
        height:5px;
    }
    *::-webkit-scrollbar-thumb {/*滚动条里面小方块*/
        border-radius: 10px;
        /*height:300px;*/
        -webkit-box-shadow: inset 0 0 5px rgba(67, 147, 204, 0.93);
        background: #535353;
    }
    *::-webkit-scrollbar-track {/*滚动条里面轨道*/
        -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
        border-radius: 10px;
        background: #EDEDED;
    }
    p,
    h1,
    h2,
    h3 {
        margin: 0;
        padding: 0;
    }

    #app {
        position: relative;
        height: 100%;
        width: 100%;
        font-family: "Avenir", Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }
    .router-link-active,
    a {
        color: #fff;
        text-decoration: none;
        display: block;
    }

    .title {
        text-shadow: 0 0 20px #145f87, 0 0 20px #145f87, 0 0 20px #145f87;
        text-align: center;
        font-size: 48px;
        font-weight: bold;
        color: #d6e9ff;
    }

    .title_small {
        height: 10%;
        display: flex;
        vertical-align: middle;
        align-items: center;
        color: #fff;
        font-size: 28px;
        margin: 0;
        text-shadow: 0 0 20px #013c80, 0 0 20px #013c80, 0 0 20px #013c80;
    }

    .nav-switch {
        position: absolute;
        right: 50px;
        top: 10px;
        z-index: 4;
        cursor: pointer;
    }

    .nav-switch {
        width: 30px;
        height: 30px;
    }
</style>
