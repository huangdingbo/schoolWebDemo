<template>
    <svg :height="radius * 2" :width="radius * 2">
        <circle :stroke="bgcolor" :stroke-width="stroke" fill="transparent" :r="normalizedRadius" :cx="radius" :cy="radius"></circle>
        <circle :stroke="color" :stroke-dasharray="circumference + ' ' + circumference" :style="{ strokeDashoffset: strokeDashoffset }" :stroke-width="stroke"
                fill="transparent" :r="normalizedRadius" :cx="radius" :cy="radius">
        </circle>
    </svg>
</template>
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
            const normalizedRadius = this.radius - this.stroke * 2;
            const circumference = normalizedRadius * 2 * Math.PI;
            return {
                normalizedRadius,
                circumference
            }
        },
        mounted(){
            // const circle = document.querySelector('.progress-ring__circle');
            // const radius = circle.r.baseVal.value;
            // const circumference = radius * 2 * Math.PI;
            // circle.style.strokeDasharray = `${circumference} ${circumference}`;
            // circle.style.strokeDashoffset = circumference;
        },
        computed: {
            strokeDashoffset() {
                return this.circumference - this.progress / 100 * this.circumference;
            }
        }
    }

</script>

<style scoped>
    circle {
        transition: stroke-dashoffset 0.35s;
        transform: rotate(-90deg);
        transform-origin: 50% 50%;
    }
</style>