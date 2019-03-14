<template>
  <div class="index-right">
    <div class="pieChart">
      <div class="title_small">模块1</div>
      <PieChart :option="pie"></PieChart>
    </div>
    <!--<div class="radarChart">-->
    <!--<div class="title_small">模块2</div>-->
    <!--<RadarChart :option="radar"></RadarChart>-->
    <!--</div>-->
    <div class="lineChart">
      <div class="title_small">模块2</div>
      <LineChart :option="line"></LineChart>
    </div>
  </div>
</template>

<script>
import PieChart from "../common/PieChart";
import LineChart from "../common/LineChart";

// import lineChart from "../common/lineChart";
export default {
  name: "HomeRight",
  components: {
    LineChart,
    PieChart
  },
  data() {
    return {
      pie: {
        id: "pie-chart2",
        roseType: "",
        radius: "65%",
        height: "240px",
        data: []
      },
      line: {
        id: "line-chart",
        data: {}
      }
    };
  },
  mounted() {
    this.$api.weigh().then(res => {
      this.pie.data = res.list;
    });
    this.$api.weigh().then(res => {
      this.line.data = res.list;
      console.log(this.pie.data);
    });
  }
};
</script>

<style scoped>
.index-right {
  position: absolute;
  right: 20px;
  width: 360px;
  top: 100px;
  border: 1px solid #19516f;
  padding: 20px;
  border-radius: 5px;
  background-color: rgba(3, 16, 23, 0.702);
  box-shadow: 0px 0px 10px 0 #7bd4fc inset;
}
</style>
