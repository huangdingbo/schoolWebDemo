<template>
  <div class="index-header">
    <img class="header-left" src="../assets/home/nav_top_side.png" />
    <img class="header-left-interval" src="../assets/home/nav_top_center.png" />
    <div class="header-center">
      <div class="header-center-title title">智慧校园管理中心</div>
      <div class="header-test">
        <el-dropdown trigger="click"  @command="test">
          <span class="el-dropdown-link">
            考试选择
          </span>
          <el-dropdown-menu slot="dropdown" >
            <el-dropdown-item v-for="(item,index) in testList" :command="{name:item.name,value:item.value}">{{item.name}}</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown></div>
    </div>
    <img
      class="header-right-interval"
      src="../assets/home/nav_top_center.png"
    />
    <img class="header-right" src="../assets/home/nav_top_side.png" />
  </div>
</template>

<script>
  import Vue from "vue";
  import { Dropdown, DropdownMenu, DropdownItem,Input} from "element-ui";
  Vue.use(Dropdown);
  Vue.use(DropdownMenu);
  Vue.use(DropdownItem);
  Vue.use(Input);
export default {
  name: "HomeTop",
  data() {
    return {
      testList:[]
    };
  },
  mounted() {
    this.$api.lined().then(res => {
      this.testList = res.list;
      this.$emit("testVal", res.list[0]);
    });

  },
  methods: {
    test(command){
      this.$emit("testVal", command);
    }
  }
};
</script>

<style scoped>
  @import "../css/dropdown.css";
.index-header {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 2;
  display: flex;
}
.header-left {
  display: inline-block;
  vertical-align: middle;
  height: 100px;
  width: 248px;
}
.header-left-interval {
  position: absolute;
  left: 148px;
  display: inline-block;
  vertical-align: middle;
}
.header-right {
  position: absolute;
  display: inline-block;
  vertical-align: middle;
  right: 0;
  top: 0;
  transform: rotateX(360deg) rotateY(180deg);
}
.header-right-interval {
  position: absolute;
  right: 149px;
  display: inline-block;
  vertical-align: middle;
  transform: rotateX(360deg) rotateY(180deg);
}
.header-center {
  position: absolute;
  display: inline-block;
  vertical-align: middle;
  left: 525px;
}
.header-center-title {
  width: 856px;
    height: 100px;
  background-size: 100%;
  background-image: url(../assets/home/nav_title_bg.png);

}
  .header-test{color:#fff;font-size: 20px;position: absolute;right: 100px;top: 20px;}
</style>
