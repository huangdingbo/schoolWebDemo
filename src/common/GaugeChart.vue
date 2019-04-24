<template>
  <div
    :id="option.id"
    :style="{height: option.height ? option.height : GaugeData.height}"
    style="width: 100%"
  ></div>
</template>

<script>
let eCharts = require("echarts/lib/echarts");
require("echarts/lib/chart/gauge");
require("echarts/lib/component/legendScroll");
require("echarts/lib/component/tooltip");
export default {
  name: "GaugeChart",
  data() {
    return {
      GaugeData: {
        name: "",
        height: "240px",
        radius: "80%",
        center: ["50%", "50%"],
        min: 0,
        max: 100,
        splitNumber: 10,
        axisLine_color: [[0.6, "#0a2e41"], [0.8, "#0a2e41"], [1, "#0a2e41"]],
        fontSize: 14,
        txtColor: '#fff',
        txtWidth: '100px',
        // colorArray: ['#01dafe', '#58e569', '#f0a54a'],//颜色
        pointer_length: "80%",
        title_offsetCenter: ["0", "50%"],
        detail_offsetCenter: ["0", "75%"],
        data: [{ value: 85, name: "及格率" }] //数据格式
      },
    };
  },
  props: {
    option: {}
  },
  mounted() {
    this.init();

  },
  methods: {
    init: function() {
      let options = Object.assign(this.GaugeData, this.option);
      let myChart = eCharts.init(document.getElementById(options.id));
      let option = {
        tooltip: {
          // formatter: "{a} <br/>{c} {b}"
        },
        series: [
          {
            type: "gauge",
            name: options.name,
            min: options.min,
            max: options.max,
            splitNumber: options.splitNumber,
            radius: options.radius,
            center: options.center,
              axisLine: {
              // 坐标轴线
              lineStyle: {
                // 属性lineStyle控制线条样式
                color: options.axisLine_color,
                width: 10,
                shadowColor: "#fff", //默认透明
                shadowBlur: 10,
                borderWidth: 2,
                borderColor: "#fff"
                // shadowOffsetX: 0,
                // shadowOffsetY: 0,
                // opacity:1,  //暂时不用 用的时候可以填
              }
            },
            axisLabel: {
              // 坐标轴小标记
              textStyle: {
                // 属性lineStyle控制线条样式
                fontWeight: "bolder",
                fontSize: 10,
                color: "#fff",
                shadowColor: "#fff", //默认透明
                shadowBlur: 5
              }
            },
            axisTick: {
              // 坐标轴小标记
              length: 25, // 属性length控制线长
              lineStyle: {
                // 属性lineStyle控制线条样式
                color: "auto",
                shadowColor: "#fff", //默认透明
                shadowBlur: 5
              }
            },
            splitLine: {
              // 分隔线
              length: 30, // 属性length控制线长
              lineStyle: {
                // 属性lineStyle（详见lineStyle）控制线条样式
                width: 3,
                color: "#fff",
                shadowColor: "#fff", //默认透明
                shadowBlur: 5
              }
            },
            pointer: {
              // 分隔线
              shadowColor: "#fff", //默认透明
              shadowBlur: 5,
              length: options.pointer_length //指针长度
            },
            title: {
              offsetCenter: options.title_offsetCenter,
              textStyle: {
                fontWeight: "bolder",
                fontSize: 14,
                color: "#fff"
                // shadowColor : '#fff', //默认透明
                // shadowBlur: 10
              }
            },
            detail: {
              formatter: function(value) {
                return value.toFixed(0) + "%";
              },
              fontSize:16,
              offsetCenter: options.detail_offsetCenter,
              textStyle: {
                // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                fontWeight: "bolder",
                color: "#fff"
              }
            },
            data: options.data
          }
        ]
      };
      myChart.setOption(option);
      window.addEventListener('resize',function () {
        myChart.resize();
      });
    }
  }
};
</script>

<style scoped></style>
