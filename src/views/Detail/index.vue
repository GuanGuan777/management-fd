<template>
  <div class="Detail">
    <header class="head">
      <div class="container">
        <el-tag>2019-2020 2</el-tag>
        <div class="title">
          <h2>高等数学</h2>
        </div>
      </div>
    </header>
    <div class="mainColumn">
      <section>
        <el-timeline>
          <el-timeline-item
            v-for="item in fileterResourceList"
            :key="item.rid"
            timestamp="2018/4/12"
            placement="top"
          >
            <resource-card :data="item"></resource-card>
          </el-timeline-item>
        </el-timeline>
      </section>
      <aside>
        <aside-card></aside-card>
      </aside>
    </div>
  </div>
</template>
<script>
import { getCourseDetail } from "@/api/user";
import resourceCard from "./components/resourceCard";
import asideCard from "./components/asideCard";
import { mapGetters } from "vuex";

export default {
  name: "Detail",
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
  computed: {
    ...mapGetters(["category"]),
    fileterResourceList() {
      return this.category === undefined
        ? this.resourceList
        : this.resourceList.filter(
            (item) => item.category === this.category.cid
          );
    },
  },
  methods: {
    getResourceList() {
      getCourseDetail()
        .then((result) => {})
        .catch((err) => {});
    },
  },
  mounted() {},
  components: {
    resourceCard: resourceCard,
    asideCard: asideCard,
  },
};
</script>
<style lang="scss" scoped>
.Detail {
  // box-sizing: content-box;
  .head {
    background: #626262;
    // background: #eee;
    color: rgb(255, 255, 255);
    font-weight: normal;
    .container {
      margin: 0 auto;
      width: 1100px;
      width: 1100px;
      padding-top: 40px;
      padding-bottom: 30px;
      .el-tag {
        color: #626262;
        background-color: #fff;
        font-weight: 600;
        font-family: Helvetica, Arial, sans-serif;
      }
      .title {
        margin-top: 15px;
        h2 {
          font-size: 22px;
          margin: 0;
          line-height: 1.5em;
        }
      }
    }
  }
  .mainColumn {
    margin: 20px auto 30px;
    width: 1100px;
    display: flex;
    section {
      background-color: #fff;
      width: 70%;
    }
    aside {
      width: 30%;
      margin-left: 50px;
    }
  }
}
</style>
