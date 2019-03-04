<template>
    <div id="app">
        <router-view/>
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
    html, body, p {
        height: 100%;
        width: 100%;
        margin: 0;
        padding: 0
    }
    h1{margin:0;padding: 0;}
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
</style>
