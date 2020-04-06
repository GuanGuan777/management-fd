<template>
  <div>
    <template v-if="!item.children">
      <el-menu-item v-if="item.meta" :index="item.path">
        <i :class="item.meta.icon"></i>
        <span slot="title">{{ item.meta.title }}</span>
      </el-menu-item>
    </template>
    <template v-else>
      <el-submenu v-if="item.meta">
        <template slot="title">
          <i :class="item.meta && item.meta.icon"></i>
          <span slot="title">{{ item.meta && item.meta.title }}</span>
        </template>
        <side-item
          v-for="children in item.children"
          :item="children"
          :key="children.path"
        ></side-item>
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
  props: ["item"],
};
</script>
<style lang="scss" scoped>
.SideItem {
}
</style>
