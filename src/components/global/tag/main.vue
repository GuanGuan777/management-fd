
<template>
  <el-tag class="iconfont tag" :class="data.clas" :effect="have ?'dark':'plain'">{{data.title}}</el-tag>
</template>
<script>
export default {
  name: "tag",
  data() {
    return {};
  },
  methods: {},
  mounted() {},
  components: {},
  props: ["data", "have"]
};
</script>
<style lang="scss" scoped>
.tag {
  // cursor: pointer;
}
</style>
