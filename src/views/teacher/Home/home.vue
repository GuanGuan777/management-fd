<template>
  <div class="home">
    <el-tabs :tab-position="tabPosition" style="height: 200px;">
      <el-tab-pane label="课程管理">
        <classes-card v-for="item in list" :key="item.id" :data="item"></classes-card>
      </el-tab-pane>
      <!-- <el-tab-pane label="配置管理">配置管理</el-tab-pane> -->
    </el-tabs>
  </div>
</template>
<script>
import classesCard from "@/components/global/classesCard";
import { getCourse } from "@/api/course";
export default {
  name: "home",
  data() {
    return {
      list: []
    };
  },
  methods: {},
  mounted() {
    getCourse()
      .then(result => {
        this.list = result.data.data;
      })
      .catch(err => {
        console.error(err);
      });
  },
  components: {
    classesCard: classesCard
  }
};
</script>
<style lang="scss" scoped>
.home {
  margin: 20px auto 0;
  width: 1100px;
  // background-color: #000;
}
</style>
