<template>
    <div class="svg">
        <svg :height="radius * 2" :width="radius * 2">
            <circle :stroke="bgcolor" :stroke-width="stroke" fill="transparent" :r="InnerRadius" :cx="radius" :cy="radius"></circle>
            <circle :stroke="color" stroke-dasharray="1000"  :stroke-width="stroke" fill="transparent" :r="InnerRadius" :cx="radius" :cy="radius">
                <animate  attributeName="stroke-dashoffset" from="1000" :to="dashoffset" begin="0" dur="3s" repeatDur="indefinite"></animate>
            </circle>

            <defs>
                <radialGradient cx="50%" cy="50%" fx="50%" fy="50%" r="60%" id="tail">
                    <stop stop-opacity="1" stop-color="#fff" offset="30%"/>
                    <stop stop-opacity="0.5" stop-color="#fff" offset="40%"/>
                    <stop stop-opacity="0" stop-color="#fff" offset="80%"/>
                </radialGradient>
            </defs>
            <rect :x="InnerRadius" y="0" width="16" height="16" fill="url(#tail)" >
                <animateTransform attributeName="transform"  type="rotate" :from="[0, radius, radius]" :to="[angle,radius,radius]" begin="0" dur="3s" repeatDur="indefinite"></animateTransform>
            </rect>
        </svg>
        <div class="svg_val">{{progress+'%'}}</div>
    </div>
</template>
<!--:style="{ strokeDashoffset: strokeDashoffset }"-->

<script>
    export default {
        props: {
            radius: Number,
            progress: String,
            stroke: Number,
            color:String,
            bgcolor:String,
        },
        data() {
            const InnerRadius = this.radius - this.stroke;
            // const circumference = InnerRadius * 2 * Math.PI;
            const radius = 1000 - (325* this.progress/100);
            return {
                InnerRadius,
                // circumference,
                dashoffset:radius,
                angle:'',
            }
        },
        mounted(){
            console.log(this.dashoffset,this.radius);
            this.angle = this.progress/100 *360;
        },
        computed: {
            // strokeDashoffset() {
            //     return  this.circumference - this.progress / 100 * this.circumference;
            // }
        }
    }

</script>

<style scoped>
    svg{position: relative;}
    circle {
        /*transition: stroke-dashoffset 2s;*/
        transform: rotate(-90deg);
        transform-origin: 50% 50%;
    }
    .svg{position: relative}
    .svg_val{position: absolute;top:50%;left:50%;transform: translate(-50%,-50%);font-size: 26px;color: #fff;font-weight: bold}


</style>