
<template>
  <section class="AppMain" :style="{'background-color':color}">
    <transition name="fade-transform" mode="out-in">
      <router-view></router-view>
    </transition>
  </section>
</template>
<script>
export default {
  name: "AppMain",
  data() {
    return {};
  },
  methods: {},
  mounted() {
    console.log(this.color);
  },
  components: {},
  props: ["color"]
};
</script>
<style lang="scss" scoped>
.AppMain {
  width: 100%;
  height: calc(100vh - 90px);
  // background-color: pink;
}
</style>
