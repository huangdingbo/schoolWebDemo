<template>
    <div class="nav" :style="{transform: this.option ? 'translateY(0)':'translateY(-1080px)'}">
        <div class="nav-content"  >
            <div class="nav-layer"></div>
            <div class="nav-main">
                <div class="nav-title">智慧校园</div>
                <div class="nav-list">
                    <div class="nav-item" @click="jump(1)" @mouseenter="pointEnter(1)" @mouseleave="pointOut" :class="{ac:this.ac==1}">
                        <div class="svg_icon" id="svg_x">
                            <svg  version="1.2" baseProfile="tiny" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 48 48" xml:space="preserve"><g>
                                    <circle fill="none" stroke="#fff" stroke-width="2" stroke-linejoin="round" stroke-miterlimit="10" cx="24" cy="24" r="23"/>
                                    <path fill="none" stroke="#fff" stroke-width="2" stroke-linejoin="round" stroke-miterlimit="10" stroke-dasharray="4" d="M11.3,24c0-7,5.7-12.7,12.7-12.7S36.7,17,36.7,24"/>
                                    <path fill="none" stroke="#fff" stroke-width="2" stroke-linejoin="round" stroke-miterlimit="10" d="M42.7,24c0-10.3-8.4-18.7-18.7-18.7S5.3,13.7,5.3,24c0,2.4,0.5,4.7,1.3,6.8h34.9C42.3,28.7,42.7,26.4,42.7,24z"/>
                                    <path fill="none" stroke="#fff" stroke-width="2" stroke-linejoin="round" stroke-miterlimit="10" d="M20.4,30.4c0-2,1.6-3.6,3.6-3.6s3.6,1.6,3.6,3.6"/>
                                    <line fill="none" stroke="#fff" stroke-width="2" stroke-linejoin="round" stroke-miterlimit="10" x1="22.8" y1="26.9" x2="17.2" y2="10.9"/></g>
                            </svg>
                        </div>
                        <p>智慧校园驾驶舱</p>
                    </div>
                    <div class="nav-item" @click="jump(2)" @mouseenter="pointEnter(2)" @mouseleave="pointOut" :class="{ac:this.ac==2}">
                        <div class="svg_icon">
                            <svg version="1.2" baseProfile="tiny" id="Layer_2" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"x="0px" y="0px" viewBox="0 0 48 48" xml:space="preserve">
                                <circle fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" cx="24" cy="24" r="23"/>
                                <polyline fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" points="45.6,24 24,24 24,45.8 "/>
                                <line fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="24" y1="24" x2="36.8" y2="6.2"/>
                                <line fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="9" y1="6.6" x2="24" y2="24"/>
                                <path fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M39.2,24c0,8.4-6.8,15.2-15.2,15.2S8.8,32.4,8.8,24c0-4.6,2-8.7,5.3-11.5"/>
                            </svg>
                        </div>
                        <p>分析研判系统</p>
                        </div>
                    <div class="nav-item" @click="jump(3)" @mouseenter="pointEnter(3)" @mouseleave="pointOut" :class="{ac:this.ac==3}">
                        <div class="svg_icon">
                            <svg version="1.2" baseProfile="tiny" id="Layer_3" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"x="0px" y="0px" viewBox="0 0 48 48" xml:space="preserve"><g><path fill="none" stroke="#fff" stroke-width="2" stroke-linejoin="round" stroke-miterlimit="10" d="M38,12.7c0,1-0.4,1.9-1,2.5s-1.5,1-2.5,1c-2,0-3.6-1.6-3.6-3.6c0-0.8,0.3-1.6,0.8-2.2c0.7-0.8,1.7-1.3,2.8-1.3C36.4,9.2,38,10.8,38,12.7z"/>
                                <circle fill="none" stroke="#fff" stroke-width="2" stroke-linejoin="round" stroke-miterlimit="10" cx="13.5" cy="35.3" r="3.6"/>
                                <circle fill="none" stroke="#fff" stroke-width="2" stroke-linejoin="round" stroke-miterlimit="10" cx="24" cy="24" r="23"/><path fill="none" stroke="#fff" stroke-width="2" stroke-linejoin="round" stroke-miterlimit="10" d="M36.9,15.3c1.7,2.5,2.6,5.5,2.6,8.7c0,8.6-7,15.5-15.5,15.5c-2.9,0-5.6-0.8-8-2.2"/><path fill="none" stroke="#fff" stroke-width="2" stroke-linejoin="round" stroke-miterlimit="10" d="M11.3,33c-1.8-2.5-2.9-5.6-2.9-9c0-8.6,7-15.5,15.5-15.5c3,0,5.8,0.8,8.1,2.3"/>
                                <circle fill="none" stroke="#fff" stroke-width="2" stroke-linejoin="round" stroke-miterlimit="10" cx="24" cy="24" r="6.9"/>
                                <line fill="none" stroke="#fff" stroke-width="2" stroke-linejoin="round" stroke-miterlimit="10" x1="1" y1="24" x2="47" y2="24"/>
                                <line fill="none" stroke="#fff" stroke-width="2" stroke-linejoin="round" stroke-miterlimit="10" x1="24" y1="1" x2="24" y2="47"/></g>
                            </svg>
                        </div>
                        <p>监控预警系统</p>
                    </div>
                    <div class="nav-item" @click="jump(4)" @mouseenter="pointEnter(4)" @mouseleave="pointOut" :class="{ac:this.ac==4}">
                        <div class="svg_icon">
                            <svg version="1.2" baseProfile="tiny" id="Layer_4" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 48 48" xml:space="preserve">
                                <path fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M2.6,13.4h42.9c0.8,0,1.5,0.7,1.5,1.5v7.5c0,0.8-0.7,1.5-1.5,1.5H2.6c-0.8,0-1.5-0.7-1.5-1.5v-7.5C1.1,14,1.8,13.4,2.6,13.4z" style="stroke-dasharray: 111, 113; stroke-dashoffset: 0;"></path>
                                <path fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M4,23.8h40.1c0.8,0,1.5,0.7,1.5,1.5v19.1c0,0.8-0.7,1.5-1.5,1.5H4c-0.8,0-1.5-0.7-1.5-1.5V25.3C2.5,24.5,3.2,23.8,4,23.8z" style="stroke-dasharray: 128, 130; stroke-dashoffset: 0;"></path>
                                <path fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M2,13.4l8.3-10.8C10.6,2.2,11,2,11.5,2h25.3c0.4,0,0.9,0.2,1.2,0.5l7.9,10.8" style="stroke-dasharray: 56, 58; stroke-dashoffset: 0;"></path>
                                <path fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M13.4,5.6L34.4,5.6" style="stroke-dasharray: 22, 24; stroke-dashoffset: 0;"></path>
                                <path fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M10.5,9.3L37.3,9.3" style="stroke-dasharray: 27, 29; stroke-dashoffset: 0;"></path>
                            </svg>
                        </div>
                        <p>后台管理系统</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Vivus from "../plugins/vivus"

    export default {
        name: "Nav",
        props:{
            option:{
            },
        },
        data(){
            return{
                ac:'',
                isShow:false
            }
        },
        mounted(){
        },
        methods:{
            jump:function(index){
                this.$emit('navTab', this.isShow);
                switch (index) {
                    case 1:
                        this.$router.push("/home");
                        break;
                    case 2:
                        this.$router.push("/analysis");
                        break;
                    case 3:
                        this.$router.push("/warning");
                        break;
                    case 4:
                        window.location.href="http://huangdingbo.work/school/frontend/web/index.php";
                }
            },
            pointEnter:function (index) {
                console.log(index)
                this.ac = index;
                this.play(index)
            },
            pointOut:function () {
                this.ac = '';
            },
            play(index){
                const test = new Vivus('Layer_'+index,{
                    type: 'delayed',
                    duration: 70,
                    animTimingFunction: Vivus.EASE
                });
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
    .nav-item {font-size: 30px;font-weight: bold;color: #fff;background: url("../assets/nav_card.png");background-size: 100% 100%;
        text-shadow: 0 0 15px #0b599c, 0 0 30px #0b599c, 0 0 30px #0b599c, 0 0 60px #0b599c;padding:80px 50px}
    .nav-item p{margin-top: 30px;}
    .nav-item.ac img{transform: scale(1.1);border:1px solid red}
    .svg_icon{width: 260px}
</style>