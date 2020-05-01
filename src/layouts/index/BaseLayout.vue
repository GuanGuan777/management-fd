<template>
  <el-container>
    <el-header height="50">
      <Header></Header>
    </el-header>
    <el-main class="main">
      <app-main></app-main>
    </el-main>
  </el-container>
</template>

<script>
import Header from "./Header";
import AppMain from "@/components/global/AppMain";
export default {
  data() {
    return {
      collapse: false,
      color: "#fff"
    };
  },
  methods: {
    getColor(color) {
      this.color = color;
    },
    handleCollapse() {
      this.collapse = !this.collapse;
    }
  },
  mounted() {},
  components: {
    Header: Header,
    AppMain: AppMain
  }
};
</script>

<style lang="scss" scoped>
.el-container {
  color: rgb(66, 103, 153);

  .el-header {
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: start;
    background-color: #fff;
    padding: 0;

    .el-button {
      height: 50px;
      width: 50px;
      background-color: #fff;
      border: none;
      font-size: 18px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  .el-main {
    padding: 0;
    color: #333;
    text-align: center;
  }
}
</style>
