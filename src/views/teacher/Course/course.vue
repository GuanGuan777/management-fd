<template>
  <div class="course">
    <nav-card></nav-card>
    <section>
      <el-timeline>
        <el-timeline-item
          v-for="item in resourceList"
          :key="item.rid"
          :timestamp="item.update_time"
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
          title: "计算机网络网盘资源1有提取码",
          category: 0,
          content: {
            url:
              "http://pan.baidu.com/mbox/homepage?short=i4uKw9v#share/type=session/hhhhhhhhhfdsjflskdjflsdfljsddljflsdjfljsdlfjsdljflsdjflhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh",
            code: "R43J",
          },
        },
        {
          rid: "12123fs1r",
          title: "计算机网络网盘资源2无提取码",
          category: 0,
          content: {
            url:
              "http://pan.baidu.com/mbox/homepage?short=i4uKw9v#share/type=session/",
            code: "",
          },
        },
        {
          rid: "121d23fs1",
          title: "计算机网络课件",
          category: 1,
          content: {
            fielName: "计算机网络.ppt",
          },
        },
        {
          rid: "1d2o23fs1",
          title: "计算机网络HTTP协议详解视频",
          category: 2,
          desc: "这是一个关于HTTP协议的视频",
          content: {
            cover:
              "https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg",
            fileName: "Http协议详解.mp4",
            url: "http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4",
          },
        },
        {
          rid: "1d2123fs1",
          title: "计算机网络博客外链接",
          category: 3,
          content: {
            url:
              "http://pan.baidu.com/mbox/homepage?short=i4uKw9v#share/type=session/",
          },
        },
        {
          rid: "1dd212d3fs1",
          title: "OSI七层模型图",
          category: 4,
          content: {
            url: [
              "https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg",
            ],
            thumbnails: [
              "https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg",
              "https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg",
            ],
          },
        },
        {
          rid: "15d212d3dddfs1",
          title: "第一次作业要求",
          category: 5,
          content: {
            fileName: "第一次作业要求.doc",
          },
        },
        {
          rid: "5d212d3dddfs1",
          title: "作业合集",
          category: 6,
          content: {
            fileName: "作业合集.rar",
          },
        },
        {
          rid: "5d2dsdddfs1",
          title: "idea",
          category: 7,
          content: {
            fileName: "idea.exe",
          },
        },
        {
          rid: "5d2dsssddfs1",
          title: "参考图书",
          category: 8,
          content: {
            fileName: "参考图书.pdf",
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
