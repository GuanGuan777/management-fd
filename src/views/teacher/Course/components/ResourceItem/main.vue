<template>
  <el-card class="ResourceItem" :body-style="{ padding: '0px' }">
    <tag :data="category(data.category)"></tag>
    <div>
      <h1>{{ data.title }}</h1>
      <el-link v-if="data.content && data.content.url" :underline="false">{{
        data.content.url
      }}</el-link>
    </div>
    <el-button
      type="primary"
      @click="handleChange"
      icon="el-icon-edit"
      circle
    ></el-button>
    <el-button
      type="danger"
      @click="handleDelete"
      icon="el-icon-delete"
      circle
    ></el-button>
  </el-card>
</template>
<script>
import { parseCategory } from "@/utils/index.js";
import tag from "@/components/global/tag";
export default {
  name: "ResourceItem",
  data() {
    return {};
  },
  computed: {
    category: () => (c) => {
      return parseCategory(c);
    },
  },
  methods: {},
  mounted() {},
  components: {
    tag: tag,
  },
  props: ["data"],
};
</script>
<style lang="scss" scoped>
.ResourceItem {
  h1 {
    margin: 0;
  }
}
</style>
<style scoped>
.ResourceItem >>> .el-card__body {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
