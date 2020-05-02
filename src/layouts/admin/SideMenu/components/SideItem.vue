<template>
  <div class="SideItem">
    <template v-if="!item.children">
      <router-link :to="item && item.path">
        <el-menu-item v-if="item.meta" :index="item.path">
          <i :class="item.meta.icon"></i>
          <span slot="title">{{ item.meta.title }}</span>
        </el-menu-item>
      </router-link>
    </template>
    <template v-else>
      <el-submenu v-if="item.meta" class="my-el-menu" popper-append-to-body>
        <template slot="title">
          <i :class="item.meta && item.meta.icon"></i>
          <span>{{ item.meta && item.meta.title }}</span>
        </template>
        <side-item v-for="children in item.children" :item="children" :key="children.path"></side-item>
      </el-submenu>
    </template>
  </div>
</template>
<script>
export default {
  name: "SideItem",
  data() {
    return {};
  },
  methods: {},
  mounted() {
    console.log(this.item);
  },
  components: {},
  props: ["item"]
};
</script>
<style lang="scss" scoped>
.SideItem {
  // .my-el-menu:not(.el-menu--collapse) {
  //   width: 200px;
  //   min-height: 400px;

  // }

  .el-menu-item {
    position: relative;
    &::after {
      content: "";
      position: absolute;
      background: pink;
      height: 2px;
      top: 100%;
      left: 0;
      right: 0;
      transition: transform 0.3s;
      transform: scaleX(0);
    }

    &:hover::after {
      transform: scaleX(1);
    }
  }
}

.el-menu--collapse .el-submenu .el-submenu__title span {
  height: 0;
  width: 0;
  overflow: hidden;
  visibility: hidden;
  display: inline-block;
}
</style>
