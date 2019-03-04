<template>
    <div class="">
        <div>
            <router-link to="/analysis/test">子组件1</router-link>
            <router-link to="/analysis/life">子组件2</router-link>
            <!--<div class="" :route="{path:'/analysis/test'}">1111</div>-->
            <!--<div class="" :route="{path:'/analysis/lift'}">2222</div>-->
        </div>


        <div >
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Analysis",
    }
</script>

<style scoped>

</style>