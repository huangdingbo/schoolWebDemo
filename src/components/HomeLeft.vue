<template>
  <div class="index-left">
    <div class="lineChart">
      <div class="title_small">校园概况</div>
      <div class="cont">
        <div class="cont_item">
          <div class="num">{{ situation.studentNum }}</div>
          <div class="optic">学生总数</div>
        </div>
        <div class="cont_item">
          <div class="num">{{ situation.teacherNum }}</div>
          <div class="optic">教职工总数</div>
        </div>
        <div class="cont_item">
          <div class="num">{{ situation.gradeOne }}</div>
          <div class="optic">高一</div>
        </div>
        <div class="cont_item">
          <div class="num">{{ situation.gradeTwo }}</div>
          <div class="optic">高二</div>
        </div>
        <div class="cont_item">
          <div class="num">{{ situation.gradeThree }}</div>
          <div class="optic">高三</div>
        </div>
      </div>
    </div>
    <div class="pieChart">
      <div class="title_small">校园事件概况</div>
      <div class="cont">
        <div class="cont_item">
          <div class="num">{{ cases.caseTotal }}</div>
          <div class="optic">事件总量</div>
        </div>
        <div class="cont_item">
          <div class="num">{{ cases.caseAvg }}</div>
          <div class="optic">日均事件量</div>
        </div>
        <div class="cont_item">
          <div class="num">{{ cases.acceptRatio }}</div>
          <div class="optic">事件受理率</div>
        </div>
      </div>
      <!--<PieChart :option="pie"></PieChart>-->
    </div>
    <div class="barChart">
      <div class="title_small">校园高发事件TOP6</div>
      <BarChart :option="bar"></BarChart>
    </div>
  </div>
</template>

<script>
// v-if="bar.dataArray.length !=0"
import PieChart from "../common/PieChart";
import BarChart from "../common/BarChart";

export default {
  name: "HomeLeft",
  components: {
    BarChart,
    PieChart
  },
  data() {
    return {
      situation: {},
      cases: {},
      line: {
        id: "line-chart",
        height: "160px"
      },
      pie: {
        id: "pie-chart",
        height: "240px",
        // data: [{value: 335, name: '1'},
        //     {value: 310, name: '2'},
        //     {value: 234, name: '3'}],
        isRing: true
      },
      bar: {
        id: "bar-chart",
        data: []
        // height: '240px'
      }
    };
  },
  mounted() {
    this.$api.situation().then(res => {
      this.situation = res;
    });
    this.$api.cases().then(res => {
      this.bar.data = res.list;
    });
    this.$api.overview().then(res => {
      this.cases = res;
    });
  },
  methods: {}
};
</script>

<style scoped>
.index-left {
  position: absolute;
  padding: 20px;
  width: 360px;
  top: 100px;
  left: 20px;
  border: 1px solid #19516f;
  border-radius: 5px;
  background-color: rgba(3, 16, 23, 0.702);
  box-shadow: 0px 0px 10px 0 #7bd4fc inset;
}
.cont {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 160px;
  color: #fff;
  font-size: 20px;
}
.num {
  font-size: 28px;
}
</style>
