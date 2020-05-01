<template>
  <el-container style="min-height:100vh;">
    <el-aside width="null">
      <SideMenu :isCollapse="collapse"></SideMenu>
    </el-aside>
    <el-container>
      <el-header height="50">
        <el-button @click="handleCollapse" class="el-icon-s-fold"></el-button>
        <Header></Header>
      </el-header>
      <el-main>
        <app-main :color="color"></app-main>
      </el-main>
      <!--    <el-footer>
        <Footer></Footer>
      </el-footer>-->
    </el-container>
    <SettingDrawer v-on:color="getColor"></SettingDrawer>
  </el-container>
</template>

<script>
import SideMenu from "./SideMenu";
import Header from "./Header";
// import Footer from "./Footer";
import AppMain from "@/components/global/AppMain";
import SettingDrawer from "@/components/global/SettingDrawer";
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
    SideMenu: SideMenu,
    Header: Header,
    // Footer: Footer,
    SettingDrawer: SettingDrawer,
    AppMain: AppMain
  }
};
</script>

<style lang="scss" scoped>
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
</style>
