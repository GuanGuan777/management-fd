<template>
  <div class="course">
    <nav-card></nav-card>
    <section>
      <el-timeline>
        <el-timeline-item
          v-for="item in resourceList"
          :key="item.resourceId"
          :timestamp="item.updateTime"
          placement="top"
        >
          <resource-item :data="item"></resource-item>
        </el-timeline-item>
      </el-timeline>
    </section>
  </div>
</template>
<script>
import navCard from "./components/navCard";
import resourceItem from "./components/ResourceItem";
import { getResource } from "@/api/course";
import { getCourseDetail, getCourse } from "@/api/course";
export default {
  name: "course",
  data() {
    return {
      resourceList: []
    };
  },
  methods: {},
  mounted() {
    getResource(this.$route.params.cid)
      .then(result => {
        this.resourceList = result.data.data;
      })
      .catch(err => {
        console.error(err);
      });
  },
  components: {
    navCard: navCard,
    resourceItem: resourceItem
  }
  // props: ["cid"]
};
</script>
<style lang="scss" scoped>
.course {
  margin: 30px auto 0;
  width: 1100px;
  display: flex;

  .navCard {
  }

  section {
    margin-left: 50px;
    width: 850px;
    .el-select {
      color: rgb(102, 124, 153);
      background: rgb(230, 236, 244);
    }
  }
}
</style>
