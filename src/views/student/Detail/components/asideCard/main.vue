<template>
  <aside class="aside">
    <el-card class="asideCard" :body-style="{ padding: '0px' }">
      <div slot="header">
        <span>资源种类</span>
      </div>
      <div>
        <el-button type="primary" round @click="handleClick(undefined)"
          >全部</el-button
        >
        <el-button
          v-for="item in categroy"
          :key="item"
          type="primary"
          round
          @click="handleClick(item)"
          class="iconfont"
          :class="item.clas"
          >{{ item.title }}</el-button
        >
      </div>
    </el-card>
    <el-card class="asideCard" :body-style="{ padding: '0px' }">
      <div slot="header">
        <span>常用文件类型</span>
      </div>
      <div>
        <el-button type="primary" round @click="handleClick(undefined)"
          >全部</el-button
        >
        <el-button
          v-for="item in suffix"
          :key="item"
          type="primary"
          round
          @click="handleClick(item)"
          class="iconfont"
          :class="item.clas"
          >{{ item.title }}</el-button
        >
      </div>
    </el-card>
  </aside>
</template>
<script>
import { categoryMap, suffixMap } from "@/utils/index.js";
import { mapActions } from "vuex";

export default {
  name: "asideCard",
  computed: {},
  data() {
    return {
      categroy: categoryMap,
      suffix: suffixMap,
    };
  },
  methods: {
    ...mapActions({ setCategory: "resource/setCategory" }),
    handleClick(item) {
      console.log(item);

      this.setCategory(item);
    },
  },
  mounted() {
    console.log(categoryMap);
  },
  components: {},
};
</script>
<style lang="scss" scoped>
.aside {
  .asideCard {
    margin-top: 22px;
    box-shadow: none;
    border: none;

    div {
      padding: 10px;
      display: flex;
      justify-content: start;
      align-items: center;
      flex-wrap: wrap;
      .el-button {
        margin: 5px;
        padding: 5px;
      }
    }
  }
}
</style>
