<template>
  <div class="index-bottom">
    <div class="bottom-dashboard" style="left:45px">
      <GaugeChart :option="gauge"></GaugeChart>
    </div>
    <img
      class="bottom-img"
      src="../assets/home/bottom_bg_side.png"
      style="left:-50px"
    />
    <div class="bottom-center" id="bottom_warning">
      <!--<div class="">学校共有老师：1200</div>-->
      <!--<div class="">学校共有学生：</div>-->
      <!--<div class="">2019年毕业生有：</div>-->
      <!--<div class="">2019年研究生有：</div>-->
      <!--<img  class="bottom-animate-bg" src="../assets/home/bottom_monitor_light.png">-->
    </div>
    <img class="bottom-img" src="../assets/home/bottom_bg_side.png" />
    <div class="bottom-dashboard">
      <GaugeChart :option="gauge2"></GaugeChart>
    </div>
  </div>
</template>

<script>
import GaugeChart from "../common/GaugeChart";

export default {
  name: "HomeBottom",
  components: {
    GaugeChart
  },
  data() {
    return {
      gauge: {
        id: "gauge-chart",
        height: "180px",
        width: "180px",
        radius: "95%",
        center: ["50%", "60%"]
      },
      gauge2: {
        id: "gauge-chart2",
        height: "180px",
        width: "180px",
        radius: "95%",
        center: ["50%", "60%"]
      }
    };
  },
  mounted() {},
  methods: {}
};
</script>

<style scoped>
.index-bottom {
  display: flex;
  position: absolute;
  bottom: 0;
  overflow: hidden;
  width: 100%;
  justify-content: center;
  align-items: baseline;
}
.bottom-dashboard {
  display: flex;
  justify-content: center;
  border: 3px solid #6089e1;
  box-shadow: 0px 0px 15px #6089e1;
  border-radius: 50%;
  width: 180px;
  height: 180px;
  position: relative;
  margin: 5px 0;
}
.bottom-center {
  width: 600px;
  height: 40px;
  background: url("../assets/home/bottom_monitor_bg.png") no-repeat;
  background-size: 100% 100%;
}
.bottom-img {
  position: relative;
}
#gauge-chart,
#gauge-chart2 {
  top: -20px;
}
@keyframes mymove {
  0% {
    opacity: 0.5;
    left: 0;
  }
  30% {
    opacity: 1;
    left: 30%;
  }
  100% {
    opacity: 0;
    left: 80%;
  }
}
</style>
