<template>
    <div class="analysis">
        <div class="analysis_nav">
            <div class="title">考试分析</div>
            <div class="analysis_list">
                <router-link to="/analysis/grade" class="analysis_item">年级</router-link>
                <router-link to="/analysis/class" class="analysis_item">班级</router-link>
                <router-link to="/analysis/subject" class="analysis_item">学科</router-link>
            </div>
            <!--<div class="" :route="{path:'/analysis/test'}">1111</div>-->
            <!--<div class="" :route="{path:'/analysis/lift'}">2222</div>-->
        </div>

        <div class="analysis_cont">
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
    .analysis{display: flex;width: 100%;height:100%;background: #000}
    .title{margin-top:40px}
    .analysis_nav{width: 400px;height:100%;border-right:2px solid #0a5b85}
    .analysis_list{display: flex;flex-direction: column;font-size: 24px;font-weight: bold;margin-top:30px}
    .analysis_item {display: flex;align-items: center;height:90px;}
    .analysis_item.router-link-active{color: #45daff}
    .analysis_cont{}

</style>