<template>
    <div class="index-header">
        <img class="header-left"  src="../assets/home/nav_top_side.png">
        <img class="header-left-interval"  src="../assets/home/nav_top_center.png">
        <div class="header-center">
            <div class="header-center-title">XXXXXXXXXX</div>
        </div>
        <img class="header-right-interval" src="../assets/home/nav_top_center.png">
        <img class="header-right" src="../assets/home/nav_top_side.png">
    </div>
</template>

<script>
    export default {
        name: "HomeTop",
        data(){
            return{

            }
        },
        mounted(){
        },
        methods:{

        }
    }
</script>

<style scoped>
    .index-header{position:absolute;top:0;left:0;width:100%;z-index:2;display: flex}
    .header-left{display:inline-block;vertical-align:middle;height:100px;width:248px;}
    .header-left-interval{position:absolute;left:148px;display:inline-block;vertical-align:middle;}
    .header-right{position:absolute;display:inline-block;vertical-align:middle;right:0;top:0;transform: rotateX(360deg) rotateY(180deg);}
    .header-right-interval{position:absolute;right:149px;display:inline-block;vertical-align:middle;transform: rotateX(360deg) rotateY(180deg);}
    .header-center{position:absolute;display:inline-block;vertical-align:middle;left:525px;}
    .header-center-title{width: 870px;padding: 5px 0 25px;text-align: center;font-size: 48px;font-weight: bold;color: #d6e9ff;background-size: 100%;
        text-shadow: 0 0 20px #145f87, 0 0 20px #145f87, 0 0 20px #145f87;background: url(../assets/home/nav_title_bg.png) no-repeat;}

</style>