<template>
  <div class="course">
    <nav-card></nav-card>
    <section>
      <el-timeline>
        <el-timeline-item
          v-for="item in resourceList"
          :key="item.rid"
          timestamp="2018/4/12"
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
export default {
  name: "course",
  data() {
    return {
      resourceList: [
        {
          rid: "12123fs1",
          title: "地位和黑色",
          category: 0,
          content: {
            url:
              "http://pan.baidu.com/mbox/homepage?short=i4uKw9v#share/type=session/",
            code: "R43J",
          },
        },
        {
          rid: "12123fs1r",
          title: "地位和黑色好多",
          category: 0,
          content: {
            url:
              "http://pan.baidu.com/mbox/homepage?short=i4uKw9v#share/type=session/",
            code: "",
          },
        },
        {
          rid: "121d23fs1",
          title: "hhhh",
          category: 1,
          content: {
            fielName: "计算机网络.ppt",
          },
        },
        {
          rid: "1d2o23fs1",
          title: "计算机网络HTTP协议详解",
          category: 2,
          content: {
            cover: "",
            fileName: "Http协议详解.mp4",
            url:
              "http://pan.baidu.com/mbox/homepage?short=i4uKw9v#share/type=session/",
          },
        },
        {
          rid: "1d2123fs1",
          title: "hhhh",
          category: 3,
          content: {
            url:
              "http://pan.baidu.com/mbox/homepage?short=i4uKw9v#share/type=session/",
          },
        },
      ],
    };
  },
  methods: {},
  mounted() {},
  components: {
    navCard: navCard,
    resourceItem: resourceItem,
  },
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
