<template>
  <div class="SettingDrawer">
    <el-button
      type="primary"
      @click="visible = !visible"
      :class="{'show':visible,'el-icon-s-tools':!visible,'el-icon-error':visible}"
    ></el-button>
    <el-drawer
      title="设置"
      :visible.sync="visible"
      :before-close="handleClose"
      size="300px"
      :modal="false"
    >
      <div class="drawerItem">
        <span>改变主题</span>
        <el-color-picker v-model="color" @change="handleChange"></el-color-picker>
      </div>
    </el-drawer>
  </div>
</template>
<script>
export default {
  name: "SettingDrawer",
  data() {
    return {
      visible: false,
      color: "#409EFF"
    };
  },
  methods: {
    handleClose(done) {
      this.drawer = false;
      done();
    },
    handleChange(e) {
      console.log(e);
      this.$emit("color", this.color);
    }
  },
  mounted() {},
  components: {}
  // props: ["drawer"]
};
</script>
<style lang="scss" scoped>
.SettingDrawer {
  .el-button {
    width: 48px;
    height: 48px;
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    right: 0px;
    // left: -48px;
    top: 400px;
    transition: all 0.3s;
    z-index: 3004;
    border-radius: 6px 0 0 6px !important;
    &.show {
      cursor: pointer;
      right: 300px;
    }
  }
  .drawerItem {
    display: flex;
    padding: 16px;
    align-items: center;
    justify-content: space-around;
  }
}
</style>
