<template>
  <el-card class="resourceCard">
    <div slot="header">
      <span>
        <tag :data="category(data.category)"></tag>
      </span>
    </div>
    <template v-if="data.category === 0">
      <section>
        <el-link :underline="false" :src="data.content.url">{{
          data.title
        }}</el-link>
        <template v-if="data.content.code">
          <el-divider></el-divider>
          <span class="code">{{ `验证码：${data.content.code}` }}</span>
          <el-divider></el-divider>
          <el-button
            type="primary"
            @click="handleClick"
            v-clipboard:copy="data.content.code"
            v-clipboard:success="handleCopySuccess"
            >复制验证码</el-button
          >
        </template>
      </section>
    </template>
    <template v-else-if="data.category === 3">
      <section>
        <el-link :underline="false" :src="data.content.url">{{
          data.title
        }}</el-link>
        <el-divider></el-divider>
      </section>
    </template>
    <template v-else>
      <section>
        <el-link :underline="false">{{ data.title }}</el-link>
        <el-divider></el-divider>
        <el-button type="primary" @click="handleClick">下载</el-button>
      </section>
    </template>
  </el-card>
</template>
<script>
import { parseCategory } from "@/utils/index.js";
import clipboard from "@/directive/clipboard/index.js";
import tag from "@/components/global/tag";
export default {
  name: "resourceCard",
  data() {
    return {};
  },
  computed: {
    category: () => (c) => {
      return parseCategory(c);
    },
  },
  directives: {
    clipboard,
  },
  methods: {
    handleCopySuccess() {
      this.$message({
        message: "复制成功",
        type: "success",
        duration: 1500,
      });
    },
  },
  mounted() {},
  components: {
    tag: tag,
  },
  props: {
    data: {
      type: Object,
    },
  },
};
</script>
<style lang="scss" scoped>
.resourceCard {
  border-radius: 12px;
  box-shadow: 0 8px 16px 0 rgba(7, 17, 27, 0.1);
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(7, 17, 27, 0.2);
    cursor: pointer;
  }
  section {
    display: flex;
    justify-content: start;
    align-items: center;
    flex-direction: column;
    .code {
      font-size: 18px;
    }
    .el-link {
      font-size: 22px;
    }
  }
}
</style>
