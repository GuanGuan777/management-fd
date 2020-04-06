<template>
  <div class="SideMenu">
    <el-menu
      default-active=""
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      :collapse="isCollapse"
    >
      <el-menu-item>
        <i class="el-icon-menu"></i>
        <span slot="title" class="Header">计算机资源库</span>
      </el-menu-item>
      <side-item
        v-for="item in menuData"
        :key="item.path"
        :item="item"
      ></side-item>
    </el-menu>
  </div>
</template>
<script>
import SideItem from "./components/SideItem";
import adminRoutes from "@/router/admin.js";
export default {
  name: "SideMenu",
  data() {
    // const menuData = this.getMenuData(this.$router.options.routes);
    return {
      menuDataList: [],
      menuData: [],
    };
  },
  methods: {
    getMenuData(routes) {
      console.log(routes);
      // const menuData = [];
      // routes.forEach(item => {
      //   if (item.name && !item.hide) {
      //     const newItem = { ...item };
      //     delete newItem.children;
      //     if (item.collapsed && !item.hideChildren) {
      //       newItem.children = this.getMenuData(item.children);
      //     }
      //     menuData.push(newItem);
      //   } else if (!item.hide && !item.hideChildren && item.children) {
      //     menuData.push(...this.getMenuData(item.children));
      //   }
      // });
      return routes;
    },
  },
  mounted() {
    console.log(this.$router);
    this.menuData = adminRoutes[0].children;
  },
  components: {
    SideItem: SideItem,
  },
  props: ["isCollapse"],
};
</script>
<style lang="scss" scoped>
.SideMenu {
  height: 100%;
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
  .Header {
    font-size: 15px;
  }

  .el-menu {
    height: 100%;
  }
}
</style>
