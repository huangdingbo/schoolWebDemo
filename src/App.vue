<template>
    <div id="app">
        <RouterView></RouterView>
    </div>
</template>
<script>
    export default {
        data() {
            return {}
        },
        mounted() {

        },
        methods: {}
    }

</script>

<style lang="less">
    html, body {height: 100%;width: 100%;margin: 0;padding: 0}
    p,h1,h2,h3{margin: 0;padding: 0;}
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
    .router-link-active,a{color: #fff;text-decoration: none;display: block}
    .title{text-shadow: 0 0 20px #145f87, 0 0 20px #145f87, 0 0 20px #145f87;text-align: center;font-size: 48px;
        font-weight: bold;color: #d6e9ff;}
    .title_small {display: flex;vertical-align: middle;color: #fff;font-size: 28px;margin: 0;
        text-shadow: 0 0 20px #013c80, 0 0 20px #013c80, 0 0 20px #013c80;}
</style>
